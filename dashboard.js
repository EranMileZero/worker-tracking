
// Data Parsing Logic
// We parse the mixed Hebrew/English keys from the specific JSON structure provided.
// The structure is an array of objects where the first few objects are metadata definitions.
// We look for objects that contain specific keys to identify the section.

// --- Data Definitions ---
let processedData = {
    market_indices: [],
    overall_assets: [],
    geography_exposure: [],
    currency_exposure: [], // Not currently used in new layout but kept for ref
    accounts_performance: [],
    equities_sectors: [],
    equities_by_country: [],
    equities_by_currency: [],
    bonds_maturity: [],
    bonds_rating: [],
    bonds_currency: [],
    performance_history: [],
    income_expenses: [],
    account_performance_history: [],
    financial_assets: [],
    account_exposure: [],
    accountMovementsReport: []
};

// --- Fetch & Parse ---
async function loadData() {
    try {
        // In a real app, this would be fetch('/path/to/data.json')
        // For this demo, we assume 'plans/אר.בי ביטון רפאל החזקות בעמ.json' content is available or injected.
        // Since I cannot fetch local files directly in this browser context easily without a server,
        // I will use the `sample_data.json` structure or Paste the JSON content if provided.
        
        if (typeof rawData === 'undefined') {
           // Fallback or Placeholder - In real implementation, fetch here.
           console.log("No rawData found. Waiting for injection or using sample.");
           return; 
        }

        processJSON(rawData);
        renderDashboard();

    } catch (e) {
        console.error("Error loading data:", e);
    }
}

function processJSON(root) {
    // The JSON is NOT a flat array based on the user's feedback. It is an Object with keys.
    // The previous logic attempted to treat 'jsonArray' (which is 'rawData') as an array and filter it.
    // That caused the "TypeError: jsonArray.filter is not a function".
    
    // We can directly access the keys of the object.
    const r = root; 

    // 1. Asset Allocation (overall_assets)
    if (r.overall_assets && Array.isArray(r.overall_assets)) {
        processedData.overall_assets = r.overall_assets
            .filter(item => item && item.afikname && item.shovi && item.afikname !== 'Total' && item.afikname !== 'סה"כ' && !item.sugId)
            .map(item => ({
                name: item.afikname,
                value: item.shovi,
                pct: item.ahuz
            })).sort((a,b) => b.value - a.value);
    }

     // 2. Geography Exposure
    if (r.geography_exposure && Array.isArray(r.geography_exposure)) {
        processedData.geography_exposure = r.geography_exposure
            .filter(item => item && item.CountryName && item.Shovi && item.CountryName !== 'Total')
            .map(item => ({
                name: item.CountryName === 'Israel' ? 'ישראל' : (item.CountryName === 'USA' ? 'ארה"ב' : (item.CountryName === 'Europe' ? 'אירופה' : item.CountryName)),
                value: item.Shovi,
                pct: item.Ahuz
            })).sort((a,b) => b.value - a.value);
    }

    // 3. Market Indices
    if (r.market_indices && Array.isArray(r.market_indices)) {
        processedData.market_indices = r.market_indices.map(i => ({
            name: i.nechesName,
            mtd: i.MTD,
            ytd: i.YTD
        }));
    }

    // 4. Multi-Account Performance
    if (r["multi-account_performance"] && Array.isArray(r["multi-account_performance"])) { // Note: accessing property with hyphen requires bracket notation
         processedData.accounts_performance = r["multi-account_performance"]
            .filter(d => d && d.hesh_nameEng !== 'Total' && d.sugdoh === 0) 
            .map(d => ({
                name: d.hesh_nameEng, 
                currency: d.SymbolHalbana,
                value: d.shoviShekel || d.shovi, 
                pct: d.ahuz,
                mtd: d.tsuaReportMonth,
                ytd: d.tsuaReportYear
             })).sort((a,b) => b.ytd - a.ytd);
    } else if (r.multi_account_performance && Array.isArray(r.multi_account_performance)) {
         // Fallback if key was sanitized in JS object to underscores
         processedData.accounts_performance = r.multi_account_performance
            .filter(d => d && d.hesh_nameEng !== 'Total' && d.sugdoh === 0) 
            .map(d => ({
                name: d.hesh_nameEng, 
                currency: d.SymbolHalbana,
                value: d.shoviShekel || d.shovi, 
                pct: d.ahuz,
                mtd: d.tsuaReportMonth,
                ytd: d.tsuaReportYear
             })).sort((a,b) => b.ytd - a.ytd);
    }

    // 5. Equities By Sector
    if (r.equities_by_sector && Array.isArray(r.equities_by_sector)) {
        processedData.equities_sectors = r.equities_by_sector.map(d => ({ name: d.Anafim, value: d.shovi, pct: d.ahuz }));
    }

    if (r.equities_by_country && Array.isArray(r.equities_by_country)) {
        processedData.equities_by_country = r.equities_by_country.map(d => ({ name: d.countryName, value: d.shovi, pct: d.ahuz }));
    }

    if (r.equities_by_currency && Array.isArray(r.equities_by_currency)) {
        processedData.equities_by_currency = r.equities_by_currency.map(d => ({ name: d.SugName, value: d.shovi, pct: d.ahuz }));
    }

    // 7. Bonds
    if (r.bonds_maturity && Array.isArray(r.bonds_maturity)) {
        processedData.bonds_maturity = r.bonds_maturity
            .filter(d => d && d.years !== 99999) // Filter Total
            .map(d => ({
                year: d.years === 9999 ? 'ללא' : d.years,
                value: d.shovi,
                pct: d.ahuz
            })).sort((a,b) => (a.year === 'ללא' ? 1 : a.year) - (b.year === 'ללא' ? 1 : b.year));
    }
    
    // 6b. Bonds Rating
    if (r.bonds_rating && Array.isArray(r.bonds_rating)) {
        processedData.bonds_rating = r.bonds_rating
            .filter(d => d && d.DerugName !== 'Total')
            .map(d => ({
                name: d.DerugName,
                value: d.shovi,
                pct: d.ahuz
            })).sort((a,b) => b.value - a.value);
    }

    // 6c. Bonds Currency
    if (r.bonds_currency && Array.isArray(r.bonds_currency)) {
        processedData.bonds_currency = r.bonds_currency
            .filter(d => d && d.hatzmadaName !== 'Total')
            .map(d => ({
                name: d.hatzmadaName,
                value: d.shovi,
                pct: d.ahuz
            })).sort((a,b) => b.value - a.value);
    }
    
    // 7. Performance History
    if (r.performance_by_month && Array.isArray(r.performance_by_month)) {
        processedData.performance_history = r.performance_by_month
            .filter(d => d && d.sugDoh === 1 && d.ddate !== '01/01/2500')
            .map(d => ({
                date: d.ddate,
                value: d.shovi,
                deposit: d.netoDeposit,
                profit: d.revachNominBruto
            }));
    }

    // 8. Income & Expenses
    if (r.income_expenses && Array.isArray(r.income_expenses)) {
        processedData.income_expenses = r.income_expenses.map(d => ({
            date: d.date,
            // Parse date string dd/mm/yyyy to Date object for sorting if needed
            dateObj: new Date(d.date.split('/').reverse().join('-')),
            description: d.description,
            category: d.category,
            account: d.account,
            amount: d.amount,
            afik: d.afik // New Field
        }));
    }

    // 9. Account Performance History
    if (r.account_performance_history && Array.isArray(r.account_performance_history)) {
        processedData.account_performance_history = r.account_performance_history.map(d => ({ name: d.accountName, history: d.history }));
    }

    if (r.financial_assets && Array.isArray(r.financial_assets)) {
        processedData.financial_assets = r.financial_assets.map(d => ({ name: d.name, value: d.value, pct: d.pct }));
    }
    
    if (r.account_exposure && Array.isArray(r.account_exposure)) {
        processedData.account_exposure = r.account_exposure.map(d => ({
            account: d.account,
            asset_class: d.asset_class,
            shovi: d.shovi
        }));
    }
    if (r.accountMovementsReport && Array.isArray(r.accountMovementsReport)) {
        processedData.accountMovementsReport = r.accountMovementsReport.map(d => ({
            accountName: d.accountName,
            tradeDate: d.tradeDate,
            settlementDate: d.settlementDate,
            securityName: d.securityName,
            transactionType: d.transactionType,
            quantity: String(d.quantity).replace(/,/g, ''), // remove commas and ensure string
            price: String(d.price).replace(/,/g, ''), // remove commas and ensure string
            amount: String(d.amount3).replace(/,/g, '') // remove commas and ensure string
        }));
    }
}


// --- Rendering Functions ---

function renderHeroStats() {
    // 1. Total Value: From "Overall Assets" -> "Total" row in 'overall_assets' OR from the latest month in 'performance_by_month'
    // The JSON has "overall_assets" with a "Total" row. We should prefer that.
    let totalValue = 0;
    // Try to find "Total" in overall_assets
    const totalAssetItem = processedData.overall_assets.find(d => d.name === 'Total'); // We filtered Total out in processedData...
    // Let's get it from the rawData or re-calculate sum of processedData.overall_assets
    if (processedData.overall_assets.length > 0) {
        totalValue = processedData.overall_assets.reduce((sum, item) => sum + item.value, 0);
    } else if (processedData.performance_history.length > 0) {
        // Fallback to latest performance history
        totalValue = processedData.performance_history[processedData.performance_history.length - 1].value;
    }
    
    document.getElementById('hero-total-value').textContent = formatCurrency(totalValue);

    // 2. YTD Return: "performance_by_month" usually has a running calculation or we sum monthly returns?
    // Actually, `multi-account_performance` has a "Total" row with YTD. Let's try to find it in the rawData since we might have filtered it.
    // Alternatively, `market_indices` might have portfolio benchmark?
    // Best bet: The last entry in `performance_by_month` might have a 'tsuaNominMizNeto' (Cumulative Net Nominal Return) if available in raw JSON.
    // The raw JSON sample showed `performance_by_month` objects have keys: `shovi`, `netoDeposit`, `revachNominBruto`, `tsuaNeto`.
    // We need to calculate Cumulative Return (Time Weighted) or Money Weighted if not explicitly provided.
    // SIMPLEST: Sum of `revachNominBruto` / Start of Year Value? 
    // OR: Standard industry practice: (End Value - Net Flows) / Start Value - 1?
    // Let's look at `performance_by_month` data again.
    
    // Let's look for "Total" row in "multi_account_performance" in the rawData structure again if accessible, or sum up the filtered list.
    // But specific request: "ביצועי התיק מתחילת שנה"
    
    let ytdReturn = 0;
    // Approach: Use the "multi_account_performance" Total row if it exists in rawData (it was filtered out in processJSON)
    // or Sum of profits / Average Capital?
    // Let's calculate simple return based on flows:
    // Profit = Sum(revachNominBruto)
    // But we want percentage.
    
    // Re-accessing rawData global since it's available in this scope
    if (typeof rawData !== 'undefined') {
         // Try Multi-Account "Total"
         if (rawData["multi-account_performance"]) {
             const totalRow = rawData["multi-account_performance"].find(d => d.hesh_nameEng === 'Total' && d.sugdoh === 0);
             if (totalRow) {
                 ytdReturn = totalRow.tsuaReportYear; // This is the most accurate source
             }
         } else if (rawData.multi_account_performance) {
             const totalRow = rawData.multi_account_performance.find(d => d.hesh_nameEng === 'Total' && d.sugdoh === 0);
             if (totalRow) {
                 ytdReturn = totalRow.tsuaReportYear;
             }
         }
    }
    
    // Fallback if not found: Calculate roughly from Performance History
    if (ytdReturn === 0 && processedData.performance_history.length > 0) {
         // Iterate and compound monthly returns if available, or just take the last accumulated return if provided in original JSON (it was `tsuaNominMizNeto` in the original huge file but maybe not in sample)
         // In the sample_data.js I wrote, I didn't include `tsuaNominMizNeto`.
         // Let's just display what we have or 0.
    }

    const ytdEl = document.getElementById('hero-ytd-return');
    ytdEl.textContent = formatPercent(ytdReturn);
    const ytdClass = getColorClass(ytdReturn);
    if (ytdClass) ytdEl.classList.add(ytdClass);

    // 3. Net Flow YTD: Sum of `netoDeposit` from `performance_by_month`
    let totalFlow = 0;
    if (processedData.performance_history.length > 0) {
        totalFlow = processedData.performance_history.reduce((acc, curr) => acc + (curr.deposit || 0), 0);
    }
    
    const flowEl = document.getElementById('hero-net-flow');
    flowEl.textContent = formatCurrency(totalFlow);
    const flowClass = getColorClass(totalFlow);
    if (flowClass) flowEl.classList.add(flowClass);
}

function renderDashboard() {
    // Render all components
    renderHeroStats(); 
    renderMarketIndices();
    renderAssetAllocation();
    renderFinancialAllocation();
    renderGeography();
    renderAccounts();
    renderEquities();
    renderEquitiesByCountry();
    renderEquitiesByCurrency();
    renderBonds();
    renderBondRatings();
    renderBondCurrency();
    renderPerformanceCharts();
    initIncomeExpensesTable();
    // renderAccountHistory(); // This was causing an error as the container div is missing
    renderAccountExposureMatrix();
}

// 1. Market Indices
function renderMarketIndices() {
    const container = document.getElementById('market-indices-container');
    let html = '';
    // Limit to top 5-6 interesting indices
    const indices = processedData.market_indices.slice(0, 6); 
    indices.forEach(idx => {
        const mtdClass = getColorClass(idx.mtd);
        const ytdClass = getColorClass(idx.ytd);
        html += `
            <div class="scorecard">
                <div class="scorecard-title">${idx.name}</div>
                <div class="scorecard-metric">
                    <span style="color:#666;">חודשי</span>
                    <span class="ltr ${mtdClass}">${formatPercent(idx.mtd)}</span>
                </div>
                <div class="scorecard-metric">
                    <span style="color:#666;">שנתי</span>
                    <span class="ltr ${ytdClass}">${formatPercent(idx.ytd)}</span>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

// 2. Asset Allocation
function renderAssetAllocation() {
     const data = processedData.overall_assets;
     
     // Table
     const tbody = document.querySelector('#asset-allocation-table tbody');
     tbody.innerHTML = data.map(d => `
        <tr>
            <td>${d.name}</td>
            <td class="numeric-cell">${formatNumber(d.value)}</td>
            <td class="numeric-cell">${formatPercent(d.pct)}</td>
        </tr>
     `).join('');

     // Chart
     const colors = ['#0d6efd', '#6610f2', '#6f42c1', '#d63384', '#dc3545', '#fd7e14', '#ffc107', '#198754'];
     new Chart(document.getElementById('assetAllocationChart'), {
        type: 'doughnut',
        data: {
            labels: data.map(d => d.name),
            datasets: [{
                data: data.map(d => d.value),
                backgroundColor: colors
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } } // Hide legend to save space, table serves as legend
        }
    });
}

// 2b. Financial Allocation
function renderFinancialAllocation() {
     const data = processedData.financial_assets;
     if (!data || data.length === 0) return;
     
     // Table
     const tbody = document.querySelector('#financial-allocation-table tbody');
     tbody.innerHTML = data.map(d => `
        <tr>
            <td>${d.name}</td>
            <td class="numeric-cell">${formatNumber(d.value)}</td>
            <td class="numeric-cell">${formatPercent(d.pct)}</td>
        </tr>
     `).join('');

     // Chart
     const colors = ['#20c997', '#6f42c1', '#d63384', '#fd7e14', '#ffc107', '#198754', '#0d6efd', '#6610f2'];
     new Chart(document.getElementById('financialAllocationChart'), {
        type: 'doughnut',
        data: {
            labels: data.map(d => d.name),
            datasets: [{
                data: data.map(d => d.value),
                backgroundColor: colors
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } }
        }
    });
}

// 3. Geography
function renderGeography() {
    const data = processedData.geography_exposure;
     // Table
     const tbody = document.querySelector('#geography-exposure-table tbody');
     tbody.innerHTML = data.map(d => `
        <tr>
            <td>${d.name}</td>
            <td class="numeric-cell">${formatNumber(d.value)}</td>
            <td class="numeric-cell">${formatPercent(d.pct)}</td>
        </tr>
     `).join('');

     // Chart
     new Chart(document.getElementById('geographyExposureChart'), {
        type: 'pie',
        data: {
            labels: data.map(d => d.name),
            datasets: [{
                data: data.map(d => d.value),
                backgroundColor: ['#0d6efd', '#198754', '#ffc107', '#dc3545', '#6c757d']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } }
        }
    });
}

// 4. Accounts Breakdown
function renderAccounts() {
    const data = processedData.accounts_performance;
    
    // Table
    const tbody = document.querySelector('#accounts-performance-table tbody');
    tbody.innerHTML = data.map(d => `
        <tr>
            <td style="text-align:right; direction:rtl;">${d.name}</td>
            <td>${d.currency}</td>
            <td class="numeric-cell">${formatNumber(d.value)}</td>
            <td class="numeric-cell">${formatPercent(d.pct)}</td>
            <td class="numeric-cell ${getColorClass(d.mtd)}">${formatPercent(d.mtd)}</td>
            <td class="numeric-cell ${getColorClass(d.ytd)}">${formatPercent(d.ytd)}</td>
        </tr>
    `).join('');

    // Chart - Horizontal Bar for YTD Performance
    const labels = data.map(d => d.name.substring(0, 15) + '...'); // Truncate long names
    const ytdValues = data.map(d => d.ytd);
    const bgColors = ytdValues.map(v => v >= 0 ? '#198754' : '#dc3545');

    new Chart(document.getElementById('accountsPerformanceChart'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'תשואה שנתית (%)',
                data: ytdValues,
                backgroundColor: bgColors,
                borderRadius: 4
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { grid: { color: '#f0f0f0' } },
                y: { grid: { display: false } }
            }
        }
    });
}

// 5. Equities
function renderEquities() {
    const data = processedData.equities_sectors;
    if(!data || data.length === 0) return;

     // Table
     const tbody = document.querySelector('#equities-sector-table tbody');
     // Top 10 sectors + Other
     const top10 = data.slice(0, 10);
     const otherValue = data.slice(10).reduce((acc, curr) => acc + curr.value, 0);
     const otherPct = data.slice(10).reduce((acc, curr) => acc + curr.pct, 0);
     
     let displayData = [...top10];
     if(otherValue > 0) {
         displayData.push({ name: 'אחר', value: otherValue, pct: otherPct });
     }

     tbody.innerHTML = displayData.map(d => `
        <tr>
            <td>${d.name}</td>
            <td class="numeric-cell">${formatNumber(d.value)}</td>
            <td class="numeric-cell">${formatPercent(d.pct)}</td>
        </tr>
     `).join('');

     // Chart
     new Chart(document.getElementById('equitiesSectorChart'), {
        type: 'doughnut',
        data: {
            labels: displayData.map(d => d.name),
            datasets: [{
                data: displayData.map(d => d.value),
                 backgroundColor: ['#4e79a7', '#f28e2b', '#e15759', '#76b7b2', '#59a14f', '#edc948', '#b07aa1', '#ff9da7', '#9c755f', '#bab0ac']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } }
        }
    });
}

// 5b. Equities by Country
function renderEquitiesByCountry() {
    const data = processedData.equities_by_country;
    if(!data || data.length === 0) return;

     // Table
     const tbody = document.querySelector('#equities-country-table tbody');
     tbody.innerHTML = data.map(d => `
        <tr>
            <td>${d.name}</td>
            <td class="numeric-cell">${formatNumber(d.value)}</td>
            <td class="numeric-cell">${formatPercent(d.pct)}</td>
        </tr>
     `).join('');

     // Chart
     new Chart(document.getElementById('equitiesCountryChart'), {
        type: 'pie',
        data: {
            labels: data.map(d => d.name),
            datasets: [{
                data: data.map(d => d.value),
                backgroundColor: ['#0d6efd', '#198754', '#ffc107', '#6c757d', '#fd7e14']
            }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
    });
}

// 5c. Equities by Currency
function renderEquitiesByCurrency() {
    const data = processedData.equities_by_currency;
    if(!data || data.length === 0) return;

     // Table
     const tbody = document.querySelector('#equities-currency-table tbody');
     tbody.innerHTML = data.map(d => `
        <tr>
            <td>${d.name}</td>
            <td class="numeric-cell">${formatNumber(d.value)}</td>
            <td class="numeric-cell">${formatPercent(d.pct)}</td>
        </tr>
     `).join('');

     // Chart
     new Chart(document.getElementById('equitiesCurrencyChart'), {
        type: 'doughnut',
        data: {
            labels: data.map(d => d.name),
            datasets: [{
                data: data.map(d => d.value),
                backgroundColor: ['#0d6efd', '#6f42c1']
            }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
    });
}

// 6. Bonds
function renderBonds() {
    const data = processedData.bonds_maturity;
    if(!data || data.length === 0) return;

     // Table
     const tbody = document.querySelector('#bonds-maturity-table tbody');
     tbody.innerHTML = data.map(d => `
        <tr>
            <td>${d.year}</td>
            <td class="numeric-cell">${formatNumber(d.value)}</td>
            <td class="numeric-cell">${formatPercent(d.pct)}</td>
        </tr>
     `).join('');

     // Chart
     new Chart(document.getElementById('bondsMaturityChart'), {
        type: 'bar',
        data: {
            labels: data.map(d => d.year),
            datasets: [{
                label: 'שווי אג״ח',
                data: data.map(d => d.value),
                backgroundColor: '#6f42c1',
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
             scales: {
                y: { display: false },
                x: { grid: { display: false } }
            }
        }
    });
}

// 7. Bonds Ratings
function renderBondRatings() {
    const data = processedData.bonds_rating;
    if(!data || data.length === 0) return;

     // Table
     const tbody = document.querySelector('#bonds-rating-table tbody');
     tbody.innerHTML = data.map(d => `
        <tr>
            <td>${d.name}</td>
            <td class="numeric-cell">${formatNumber(d.value)}</td>
            <td class="numeric-cell">${formatPercent(d.pct)}</td>
        </tr>
     `).join('');

     // Chart
     new Chart(document.getElementById('bondsRatingChart'), {
        type: 'bar',
        data: {
            labels: data.map(d => d.name),
            datasets: [{
                label: 'שווי אג״ח לפי דירוג',
                data: data.map(d => d.value),
                backgroundColor: '#20c997',
                borderRadius: 4
            }]
        },
        options: {
            indexAxis: 'y', // Horizontal Bar Chart
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
             scales: {
                x: { display: false },
                y: { grid: { display: false } }
            }
        }
    });
}

// 8. Bonds Currency
function renderBondCurrency() {
    const data = processedData.bonds_currency;
    if(!data || data.length === 0) return;

     // Table
     const tbody = document.querySelector('#bonds-currency-table tbody');
     tbody.innerHTML = data.map(d => `
        <tr>
            <td>${d.name}</td>
            <td class="numeric-cell">${formatNumber(d.value)}</td>
            <td class="numeric-cell">${formatPercent(d.pct)}</td>
        </tr>
     `).join('');

     // Chart
     new Chart(document.getElementById('bondsCurrencyChart'), {
        type: 'doughnut',
        data: {
            labels: data.map(d => d.name),
            datasets: [{
                data: data.map(d => d.value),
                backgroundColor: ['#6610f2', '#0d6efd', '#6c757d', '#ffc107', '#198754']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } }
        }
    });
}

// 9. Performance Charts (Bottom)
function renderPerformanceCharts() {
    const data = processedData.performance_history;
    if(!data || data.length === 0) return;

    const labels = data.map(d => new Date(d.date).toLocaleDateString('he-IL', { month:'short', year:'2-digit' }));
    const values = data.map(d => d.value);
    const profits = data.map(d => d.profit);
    const deposits = data.map(d => d.deposit);

     // Chart A: Value Trend
     new Chart(document.getElementById('valueTrendChart'), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'שווי תיק (₪)',
                data: values,
                borderColor: '#0d6efd',
                backgroundColor: 'rgba(13, 110, 253, 0.1)',
                borderWidth: 3,
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { grid: { color: '#f0f0f0' }, ticks: { callback: function(value) { return '₪' + value/1000000 + 'M'; } } },
                x: { grid: { display: false } }
            }
        }
    });

    // Chart B: Monthly Movement
     new Chart(document.getElementById('monthlyMovementChart'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'רווח/הפסד',
                    data: profits,
                    backgroundColor: '#198754',
                    borderRadius: 4
                },
                {
                    label: 'הפקדות/משיכות נטו',
                    data: deposits,
                    backgroundColor: '#6c757d',
                    borderRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom' } },
            scales: {
                y: { grid: { color: '#f0f0f0' } },
                x: { grid: { display: false } }
            }
        }
    });
}


// 8. Income & Expenses Table Logic
let currentFilters = {
    category: '',
    account: '',
    afik: '',
    dateFrom: '',
    dateTo: ''
};

function initIncomeExpensesTable() {
    const data = processedData.accountMovementsReport;
    if(!data || data.length === 0) return;

    // Populate Dropdowns
    const categories = [...new Set(data.map(d => d.transactionType))].sort();
    const accounts = [...new Set(data.map(d => d.accountName))].sort();


    const catSelect = document.getElementById('filter-category');
    categories.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c;
        opt.textContent = c;
        catSelect.appendChild(opt);
    });

    const accSelect = document.getElementById('filter-account');
    accounts.forEach(a => {
        const opt = document.createElement('option');
        opt.value = a;
        opt.textContent = a;
        accSelect.appendChild(opt);
    });
    
    const afikSelect = document.getElementById('filter-afik');
    afikSelect.style.display = 'none'; // Hide afik filter as it's not relevant for this view
    afikSelect.previousElementSibling.style.display = 'none';


    renderIncomeTable(data);
}

function applyFilters() {
    currentFilters.category = document.getElementById('filter-category').value;
    currentFilters.account = document.getElementById('filter-account').value;
    currentFilters.dateFrom = document.getElementById('filter-date-from').value; // yyyy-mm-dd
    currentFilters.dateTo = document.getElementById('filter-date-to').value; // yyyy-mm-dd

    const filteredData = processedData.accountMovementsReport.filter(item => {
        let pass = true;
        if (currentFilters.category && item.transactionType !== currentFilters.category) pass = false;
        if (currentFilters.account && item.accountName !== currentFilters.account) pass = false;
        
        if (currentFilters.dateFrom) {
            const fromDate = new Date(currentFilters.dateFrom);
            const itemDate = new Date(item.tradeDate.split('/').reverse().join('-'));
            if (itemDate < fromDate) pass = false;
        }
        
        if (currentFilters.dateTo) {
            const toDate = new Date(currentFilters.dateTo);
            const itemDate = new Date(item.tradeDate.split('/').reverse().join('-'));
            if (itemDate > toDate) pass = false;
        }
        
        return pass;
    });

    renderIncomeTable(filteredData);
}

function clearFilters() {
    document.getElementById('filter-category').value = '';
    document.getElementById('filter-account').value = '';
    document.getElementById('filter-date-from').value = '';
    document.getElementById('filter-date-to').value = '';
    
    currentFilters = { category: '', account: '', dateFrom: '', dateTo: '' };
    renderIncomeTable(processedData.accountMovementsReport);
}

function renderIncomeTable(data) {
    const tbody = document.querySelector('#income-expenses-table tbody');
    tbody.innerHTML = data.map(d => `
        <tr>
            <td>${d.tradeDate}</td>
            <td>${d.settlementDate}</td>
            <td>${d.securityName}</td>
            <td>${d.transactionType}</td>
            <td class="numeric-cell">${formatNumber(parseFloat(d.quantity))}</td>
            <td class="numeric-cell">${formatNumber(parseFloat(d.price), 2)}</td>
            <td class="numeric-cell ${getColorClass(parseFloat(d.amount))}">${formatCurrency(parseFloat(d.amount))}</td>
        </tr>
    `).join('');

    // Update Total
    const total = data.reduce((sum, item) => sum + parseFloat(item.amount), 0);
    const totalEl = document.getElementById('filtered-total');
    totalEl.textContent = formatCurrency(total);
    totalEl.className = 'ltr ' + getColorClass(total);
}

// 10. Account Exposure Matrix
function renderAccountExposureMatrix() {
    const data = processedData.account_exposure;
    if (!data || data.length === 0) return;

    const accountOrder = [
        'אר.בי ביטון נדל\"ן ישיר',
        'אר.בי ביטון השקעות בסטראט-אפ',
        'רפי ביטון החזקות בעמ SAFRA',
        'אר.בי ביטון רפאל החזקות PI',
        'UBP',
        'אר.בי ביטון רפאל החזקות בע\"מ-לאומי',
        'אר.בי ביטון רפאל החזקות בע\"מ - תפנית',
        'אר.בי ביטון החזקות בעמ - פועלים',
        'אר.בי ביטון רפאל החזקות בעמ - IBI'
    ];

    const accountDisplayNames = {
        'אר.בי ביטון נדל\"ן ישיר': 'נדל"ן ישיר',
        'אר.בי ביטון השקעות בסטראט-אפ': 'סטראט-אפ',
        'רפי ביטון החזקות בעמ SAFRA': 'SAFRA',
        'אר.בי ביטון רפאל החזקות PI': 'PI',
        'UBP': 'UBP',
        'אר.בי ביטון רפאל החזקות בע\"מ-לאומי': 'לאומי',
        'אר.בי ביטון רפאל החזקות בע\"מ - תפנית': 'תפנית',
        'אר.בי ביטון החזקות בעמ - פועלים': 'פועלים',
        'אר.בי ביטון רפאל החזקות בעמ - IBI': 'IBI'
    };
    
    const assetClasses = processedData.overall_assets.map(a => a.name).filter(name => name !== 'Total');
    const table = document.getElementById('account-exposure-matrix-table');
    
    let theadHTML = '<tr><th>אפיק</th>';
    accountOrder.forEach(acc => {
        theadHTML += `<th>${accountDisplayNames[acc] || acc}</th>`;
    });
    theadHTML += '<th>סה"כ</th></tr>';
    table.querySelector('thead').innerHTML = theadHTML;

    let tbodyHTML = '';
    const columnTotals = accountOrder.map(() => 0);

    assetClasses.forEach(ac => {
        tbodyHTML += '<tr>';
        tbodyHTML += `<td>${ac}</td>`;
        
        accountOrder.forEach((acc, index) => {
            const item = data.find(d => d.asset_class === ac && d.account === acc);
            const value = item ? item.shovi : 0;
            tbodyHTML += `<td class="numeric-cell">${value > 0 ? formatNumber(value) : '-'}</td>`;
            if (item) {
                columnTotals[index] += value;
            }
        });

        const totalAssetItem = processedData.overall_assets.find(a => a.name === ac);
        const displayTotal = totalAssetItem ? totalAssetItem.value : 0;
        tbodyHTML += `<td class="numeric-cell total-cell">${formatNumber(displayTotal)}</td>`;
        tbodyHTML += '</tr>';
    });
    table.querySelector('tbody').innerHTML = tbodyHTML;

    let tfootHTML = '<tr><td class="total-cell">סה"כ</td>';
    
    columnTotals.forEach(total => {
        tfootHTML += `<td class="numeric-cell total-cell">${formatNumber(total)}</td>`;
    });

    const overallTotal = processedData.overall_assets.reduce((sum, item) => sum + item.value, 0);
    tfootHTML += `<td class="numeric-cell total-cell">${formatNumber(overallTotal)}</td>`;
    tfootHTML += '</tr>';

    let tfoot = table.querySelector('tfoot');
    if (!tfoot) {
        tfoot = document.createElement('tfoot');
        table.appendChild(tfoot);
    }
    tfoot.innerHTML = tfootHTML;
}

function renderAccountHistory() {
    const data = processedData.account_performance_history;
    if (!data || data.length === 0) return;

    // For now, just display the account names
    const container = document.getElementById('account-history-container');
    container.innerHTML = data.map(d => `<div>${d.name}</div>`).join('');
}

function toggleAccountView(viewName) {
    // This function will handle switching between 'snapshot', 'table', and 'trend' views.
    document.getElementById('view-snapshot').style.display = 'none';
    document.getElementById('view-table').style.display = 'none';
    document.getElementById('view-trend').style.display = 'none';
    document.getElementById(`view-${viewName}`).style.display = ''; // Show the selected view
}
// --- Utility Functions ---
function formatNumber(num, decimals = 0) {
    if (num === undefined || num === null) return '-';
    return num.toLocaleString('he-IL', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

function formatCurrency(num) {
    if (num === undefined || num === null) return '-';
    return '₪' + formatNumber(num);
}

function formatPercent(num) {
    if (num === undefined || num === null) return '-';
    return num.toFixed(2) + '%';
}

function getColorClass(val) {
    if (val > 0) return 'positive';
    if (val < 0) return 'negative';
    return '';
}

// --- Init ---
document.addEventListener('DOMContentLoaded', (event) => {
    // Start application
    loadData();
});

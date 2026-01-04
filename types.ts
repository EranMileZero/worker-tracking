export interface MarketIndex {
  nechesId: string | number;
  nechesName: string;
  SymbolHalbana: string;
  MTD: number;
  YTD: number;
}

export interface CurrencyMatrix {
  matbeaName: string;
  USD: number;
  ILS: number;
  EUR: number;
}

export interface TradableAsset {
  afikname: string;
  shovi: number;
  ahuz: number;
  sort: number;
}

export interface CurrencyExposure {
  hatzmadaid: string | number;
  hatzmadaName: string;
  Shovi: number;
  Ahuz: number;
}

export interface GeographyExposure {
  CountryName: string;
  Shovi: number;
  Ahuz: number;
}

export interface Liquidity {
  SugName: string;
  Shovi: number;
  Ahuz: number;
}

export interface AssetClassBreakdown {
  sugId: string | number;
  afikid: string | number;
  heshid: string | number;
  afikname: string;
  hesh_nameEng: string;
  shoviAhuz: number;
}

export interface BondsRating {
  DerugName: string;
  shovi: number;
  ahuz: number;
}

export interface BondsMaturity {
  years: string | number;
  shovi: number;
  ahuz: number;
}

export interface BondsCurrency {
  sort: number;
  hatzmadaName: string;
  shovi: number;
  ahuz: number;
}

export interface HistoricalPerformance {
  clientId: string | number;
  yr: number;
  tsua: number;
}

export interface PerformanceByMonth {
  sugDoh: string;
  ddate: string; // ISO Date
  shovi: number;
  afkada: number;
  meshiha: number;
  netoDeposit: number;
  revachNominBruto: number;
  tsuaNeto: number;
  revachNominMizBruto: number;
  tsuaNominMizNeto: number;
  fil?: string; // Optional field based on context
}

export interface MultiAccountPerformance {
  sugdoh: string;
  heshid: string | number;
  hesh_nameEng: string;
  SymbolHalbana: string;
  shovi: number;
  ahuz: number;
  tsuaPortfolioMonth: number;
  tsuaReportMonth: number;
  tsuaReportYear: number;
  tsuaPortfolioYear: number;
  shoviShekel: number;
  cid: string | number;
}

export interface EquitiesByCountry {
  countryIdHasifa: string | number;
  countryName: string;
  shovi: number;
  ahuz: number;
}

export interface EquitiesBySector {
  Anafim: string;
  shovi: number;
  ahuz: number;
  sort: number;
}

export interface EquitiesByCurrency {
  SugName: string;
  shovi: number;
  ahuz: number;
}

export interface PortfolioData {
  market_indices: MarketIndex[];
  currency_matrix: CurrencyMatrix[];
  tradable_assets: TradableAsset[];
  currency_exposure: CurrencyExposure[];
  geography_exposure: GeographyExposure[];
  liquidity: Liquidity[];
  asset_class_breakdown: AssetClassBreakdown[];
  bonds_rating: BondsRating[];
  bonds_maturity: BondsMaturity[];
  bonds_currency: BondsCurrency[];
  asset_class_breakdown_gemel: AssetClassBreakdown[];
  historical_performance: HistoricalPerformance[];
  performance_by_month: PerformanceByMonth[];
  multi_account_performance: MultiAccountPerformance[];
  equities_by_country: EquitiesByCountry[];
  equities_by_sector: EquitiesBySector[];
  equities_by_currency: EquitiesByCurrency[];
}

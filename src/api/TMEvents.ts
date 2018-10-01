export interface EmbeddedEvents {
  events: Event[];
}

export interface Event {
  name: string;
  type: string;
  id: string;
  test: boolean;
  url: string;
  locale: string;
  images: Image[];
  sales: Sales;
  dates: Dates;
  classifications: Classification[];
  info: string;
  priceRanges?: PriceRange[];
  seatmap: Seatmap;
  ticketLimit: TicketLimit;
  pleaseNote: string;
  products: Product[];
  accessibility: Accessibility;
}

export interface Image {
  ratio: string;
  url: string;
  width: number;
  height: number;
  fallback: boolean;
}

export interface Public {
  startDateTime: Date;
  startTBD: boolean;
  endDateTime: Date;
}

export interface Presale {
  startDateTime: Date;
  endDateTime: Date;
  name: string;
  description: string;
  url: string;
}

export interface Sales {
  public: Public;
  presales: Presale[];
}

export interface Dates {
  start: Start;
  timezone: string;
  status: Status;
  spanMultipleDays: boolean;
}

export interface Classification {
  primary: boolean;
  segment: Segment;
  genre: Genre;
  subGenre: SubGenre;
  type: Type;
  subType: SubType;
  family: boolean;
}

export interface Start {
  localDate: string;
  localTime: string;
  dateTime: Date;
  dateTBD: boolean;
  dateTBA: boolean;
  timeTBA: boolean;
  noSpecificTime: boolean;
}

export interface Status {
  code: string;
}

export interface Segment {
  id: string;
  name: string;
}

export interface Genre {
  id: string;
  name: string;
}

export interface SubGenre {
  id: string;
  name: string;
}

export interface Type {
  id: string;
  name: string;
}

export interface SubType {
  id: string;
  name: string;
}

export interface PriceRange {
  type: string;
  currency: string;
  min: number;
  max: number;
}

export interface Seatmap {
  staticUrl: string;
}

export interface TicketLimit {
  info: string;
}

export interface Accessibility {
  info: string;
}

export interface Product {
  id: string;
  url: string;
  type: string;
  name: string;
}

export interface EventsResponse {
  _embedded?: EmbeddedEvents;
}

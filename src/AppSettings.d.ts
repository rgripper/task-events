interface AppSettings {
  ticketmasterApi: {
    baseUrl: string;
    key: string;
  };
}

declare module "appSettings.json" {
  const settings: AppSettings;
  export = settings;
}

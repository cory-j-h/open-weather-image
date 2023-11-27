export type TimeLocalised = {
    date: string;
    time: string;
};

export interface Theme {
    dayThemeLeft?: string;
    dayThemeRight?: string;
    dayThemeText?: string;
    dayThemeSymbol?: string;
    nightThemeLeft?: string;
    nightThemeRight?: string;
    nightThemeText?: string;
    nightThemeSymbol?: string;
    forecastBgTheme?: string;
    forecastBoxTheme?: string;
    forecastSymbolColour?: string;
    forecastText?: string;
    forecastBoxDivider?: string;
}

export type DaytimeAndColours = {
    dayTime: boolean;
    textColour: string;
    leftColour: string;
    rightColour: string;
    symbolColour: string;
    forecastBgTheme: string;
    forecastBoxTheme: string;
    forecastText: string;
    forecastBoxDivider: string;
    forecastSymbolColour: string;
};

export interface OpenWeatherArgs extends BaseOpenWeatherArgs {
    bufferOutput?: boolean;
    theme?: Theme;
    withForecast?: boolean;
}

export type TempUnit = 'metric' | 'imperial';

export interface BaseOpenWeatherArgs {
    key: string;
    cityName: string;
    stateCode?: string;
    countryCode?: string;
    tempUnit?: TempUnit;
    preferState?: boolean;
}

export interface DaytimeAndColourArgs {
    forecastResponse: ForecastResponse;
    theme: Theme;
}

export interface GeocodingResponse {
    name: string;
    local_names: { [lang: string]: string };
    lat: number;
    lon: number;
    country: string;
    state: string;
}

export type ForecastResponse = {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    current: Current;
    daily: DailyForecast[];
}

export type DailyForecast = {
    dt: number;
    sunrise: number;
    sunset: number;
    moonrise: number;
    moonset: number;
    moon_phase: number;
    temp: Temp;
    feels_like: FeelsLike;
    pressure: number;
    humidity: number;
    dew_point: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: Weather[];
    clouds: number;
    pop: number;
    snow: number;
    rain: number;
    uvi: number;
}

type Current = {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: Weather[];
    snow: Accumulation;
    rain: Accumulation;
}

type Weather = {
    id: number;
    main: string;
    description: string;
    icon: string;
}

type FeelsLike = {
    day: number;
    night: number;
    eve: number;
    morn: number;
}

type Temp = {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
}

type Accumulation = {
    "1h": number;
}

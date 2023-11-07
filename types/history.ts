export interface HistoryItem {
    date?: string;
    title: string;
    link?: string;
    icon?: string;
}

export interface HistoryGroup {
    year: number;
    items: HistoryItem[];
}

export interface SearchResult {
    collection: {
        items: SearchResultItem[]
    }
}

export interface SearchResultItem {
    data: [
        {
            title: string,
            nasa_id: string,
        }
    ],
    links: [
        {
            render: string,
            href: string,
        }
    ]
}

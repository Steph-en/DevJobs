export interface JobLocation {
    id: number,
    company: string,
    logo: string,
    logoBackground: string,
    position: string,
    postedAt: "5h ago",
    contract: string,
    location: string,
    website: string,
    apply: string,
    description: string,
    requirements: {
        content: string,
        items: string[]
    },
    role: {
        content: string,
        items: string[]
    },
}

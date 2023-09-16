export interface user{
    id: number;
    username: string;
    spotifyToken?: string;
    jwt?: string;
}

export interface spotifyUserDetail{
    country: string;
    display_name: string;
    profile_image_url: string;
}
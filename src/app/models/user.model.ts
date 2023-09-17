export interface user{
    id: number;
    username: string;
    spotify?: boolean;
    jwt?: string;
}

export interface spotifyUserDetail{
    country: string;
    display_name: string;
    profile_image_url: string;
}
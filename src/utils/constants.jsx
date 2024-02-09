export const list = [
  "All",
  "Mixes",
  "Computer programming",
  "News",
  "Gaming",
  "Music",
  "Live",
  "Podcasts",
  "sales",
  "Game Shows",
  "Bodybuilding",
  "Manga",
  "Movies",
  "Sports",
  "Travel",
  "Fashion",
  "Technology",
  "Education",
  "Science",
  "History",
  "Cooking",
  "Art",
];
export const GOOGLE_API_KEY = "AIzaSyCH1uXooIrA5MLPYkGIhWcdECEsbegSBdE";
export const YOUTUBE_API_KEY =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;
export const CHANNEL_API =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=";

export const COMMENTS_API =
  "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=";
export const MAX_RESULTS = "&maxResults=100&key=";

export const SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

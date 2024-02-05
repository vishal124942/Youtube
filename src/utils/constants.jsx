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
export const date = (time) => {
  const currentDate = new Date();
  const videoDate = new Date(time);

  const timeDifference = currentDate - videoDate;
  const secondsDifference = Math.floor(timeDifference / 1000);
  const minutesDifference = Math.floor(secondsDifference / 60);
  const hoursDifference = Math.floor(minutesDifference / 60);
  const daysDifference = Math.floor(hoursDifference / 24);
  const monthsDifference = Math.floor(daysDifference / 30);
  const yearsDifference = Math.floor(daysDifference / 365);

  if (yearsDifference > 0) {
    return yearsDifference === 1
      ? "1 year ago"
      : `${yearsDifference} years ago`;
  } else if (monthsDifference > 0) {
    return monthsDifference === 1
      ? "1 month ago"
      : `${monthsDifference} months ago`;
  } else if (daysDifference > 0) {
    return daysDifference === 1 ? "1 day ago" : `${daysDifference} days ago`;
  } else if (hoursDifference > 0) {
    return hoursDifference === 1
      ? "1 hour ago"
      : `${hoursDifference} hours ago`;
  } else if (minutesDifference > 0) {
    return minutesDifference === 1
      ? "1 minute ago"
      : `${minutesDifference} minutes ago`;
  } else {
    return "Just now";
  }
};

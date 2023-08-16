import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Exploring new places",
    mediaUrl:
      "https://1.bp.blogspot.com/-MiUcyHifn1U/XrvfpVzmI7I/AAAAAAAAAjc/eYazSDwPLasqFXYX7bx_yJUipkZ8Ci5IQCLcBGAsYHQ/s1600/tea-gardens-munnar.jpg",
    likes: {
      likeCount: 24,
      likedBy: [],
      dislikedBy: [],
    },
    bookmarks: [],
    comments: [
      {
        _id: uuid(),
        userhandler: "johndoe",
        text: "I love traveling and discovering new destinations",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    profilePic:
      "https://i.pinimg.com/550x/41/01/1a/41011a92dfc518841f1ea4439eff4f21.jpg",
    createdAt: "June 22, 2023",
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Enjoying a beautiful sunset!",
    mediaUrl:
      "https://tse4.mm.bing.net/th?id=OIP.IwYFjR9kEWVWqXq4g1jpOAHaEK&pid=Api&P=0&h=180",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    bookmarks: [],
    comments: [],
    firstName: "Shubham",
    lastName: "Soni",
    username: "shubhamsoni",
    profilePic: "https://wallpapercave.com/wp/wp2058252.jpg",
    // createdAt: "2023-02-25T10:30:33+05:30",
    createdAt: "February 25, 2023",
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Delicious food at my favorite restaurant!",
    mediaUrl: "https://wallpapercave.com/wp/wp3724331.jpg",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },

    bookmarks: [],
    comments: [
      {
        _id: uuid(),
        userhandler: "adarshbalika",
        text: "I love that restaurant too! The food is amazing.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    firstName: "Raima",
    lastName: "Gupta",
    username: "raimagupta",
    profilePic:
      "https://4.bp.blogspot.com/-LQKY1YlzhOc/Th56wgEJiBI/AAAAAAAAETw/2ZcwvyZvR1U/s1600/most-beautiful-little-girl-in-the-world.JPG",
    // createdAt: "2023-03-28T21:00:15+05:30",
    createdAt: "March 28, 2023",
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Excited for the weekend getaway!",
    likes: {
      likeCount: 27,
      likedBy: [],
      dislikedBy: [],
    },
    bookmarks: [],
    comments: [
      {
        _id: uuid(),
        userhandler: "shubhamsoni",
        text: "Enjoy your getaway. Have a great time!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    profilePic:
      "https://i.pinimg.com/550x/41/01/1a/41011a92dfc518841f1ea4439eff4f21.jpg",
    // createdAt: "2023-06-13T09:00:10+05:30",
    createdAt: "June 13, 2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "The best way to predict your future is to create it! Love this quote by Ibrahim Lincon",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    bookmarks: [],
    comments: [
      {
        _id: uuid(),
        userhandler: "adarshbalika",
        text: "Your posts always inspire me! Thank you for sharing",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    firstName: "Mahima",
    lastName: "Gupta",
    username: "mahimagupta",
    profilePic:
      "https://w0.peakpx.com/wallpaper/417/640/HD-wallpaper-cute-adorable-girl-baby-is-looking-up-wearing-purple-dress-cute.jpg",
    // createdAt: "2023-02-24T22:30:10+05:30",
    createdAt: "February 24, 2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Having a great time with friends!",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    bookmarks: [],
    comments: [],
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    profilePic: "https://wallpapercave.com/wp/wp2525371.jpg",
    // createdAt: "2023-04-21T23:00:14+05:30",
    createdAt: "April 21, 2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Celebrating a milestone achievement!",
    likes: {
      likeCount: 15,
      likedBy: [],
      dislikedBy: [],
    },
    bookmarks: [],
    comments: [
      {
        _id: uuid(),
        userhandler: "adarshbalika",
        text: "Congratulations! You deserve all the success. Keep going!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    profilePic: "https://wallpapercave.com/wp/wp2525371.jpg",
    // createdAt: "2023-03-17T10:45:00+05:30",
    createdAt: "March 17, 2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Trying out a new recipe. Finger-licking good!",
    mediaUrl:
      "https://www.teacher-chef.com/wp-content/uploads/2012/01/1-5-salsa-made-from-canned-tomato1.jpg",
    likes: {
      likeCount: 19,
      likedBy: [],
      dislikedBy: [],
    },
    bookmarks: [],
    comments: [
      {
        _id: uuid(),
        userhandler: "raimagupta",
        text: "That sounds delicious! Can you share the recipe?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    profilePic:
      "https://i.pinimg.com/550x/41/01/1a/41011a92dfc518841f1ea4439eff4f21.jpg",

    createdAt: "May 05, 2023",
    // createdAt: "2023-05-05T18:45:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Feeling grateful for the little things in life",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    bookmarks: [],
    comments: [],
    firstName: "Shubham",
    lastName: "Soni",
    username: "shubhamsoni",
    profilePic: "https://wallpapercave.com/wp/wp2058252.jpg",
    // createdAt: "2023-04-08T17:05:04+05:30",
    createdAt: "April 08, 2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Believe in yourself. You are capable of amazing things",
    likes: {
      likeCount: 18,
      likedBy: [],
      dislikedBy: [],
    },
    bookmarks: [],
    comments: [],
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    profilePic:
      "https://i.pinimg.com/550x/41/01/1a/41011a92dfc518841f1ea4439eff4f21.jpg",
    // createdAt: "2023-06-10T07:15:10+05:30",
    createdAt: "June 10, 2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Exciting news! I just got promoted at work and I'm thrilled to take on this new role. Grateful for the opportunities and looking forward to the challenges ahead!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    bookmarks: [],
    comments: [],
    firstName: "Raima",
    lastName: "Gupta",
    username: "raimagupta",
    profilePic:
      "https://4.bp.blogspot.com/-LQKY1YlzhOc/Th56wgEJiBI/AAAAAAAAETw/2ZcwvyZvR1U/s1600/most-beautiful-little-girl-in-the-world.JPG",
    createdAt: "March 11, 2023",
    // createdAt: "2023-03-11T09:30:18+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Wow, the weather is absolutely gorgeous today! Its a perfect time to go outside and enjoy it",
    mediaUrl: "https://jooinn.com/images/cloudy-1.jpg",
    likes: {
      likeCount: 17,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    bookmarks: [],
    firstName: "Shubham",
    lastName: "Soni",
    username: "shubhamsoni",
    profilePic: "https://wallpapercave.com/wp/wp2058252.jpg",
    // createdAt: "2023-03-15T09:45:13+05:30",
    createdAt: "March 15, 2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      " Just picked up this captivating novel that has been on my reading list for a while.If you've read this one, I'd love to hear your thoughts",

    mediaUrl:
      "https://www.leafmarks.com/uploads/9/8/4/9/98493490/hamlet-by-william-shakespeare_orig.jpg",
    likes: {
      likeCount: 16,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    bookmarks: [],
    firstName: "Mahima",
    lastName: "Gupta",
    username: "mahimagupta",
    profilePic:
      "https://w0.peakpx.com/wallpaper/417/640/HD-wallpaper-cute-adorable-girl-baby-is-looking-up-wearing-purple-dress-cute.jpg",
    createdAt: "May 02, 2023",
    // createdAt: "2023-05-16T19:00:13+05:30",
    updatedAt: formatDate(),
  },
];

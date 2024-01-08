"use client";

import React from "react";
import {
  Button,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import { ArrowSmallDownIcon } from "@heroicons/react/24/solid";
import BlogPostCard from "@/components/blog-post-card";


const POSTS = [
  {
    img: `/image/blogs/dummy/event7.jpeg`,
    tag: "Remote Work",
    title: "Starting a Career as a Remote Worker",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    date: "10 September 2022",
    author: {
      img: `/image/avatar1.jpg`,
      name: "Mimin Ganteng",
    },
  },
  {
    img: `/image/blogs/dummy/event6.jpeg`,
    tag: "Data",
    title: "The Journey to Become a Core Banking Specialist",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    date: "12 September 2022",
    author: {
      img: `/image/blogs/blog2.svg`,
      name: "Mimin Ganteng",
    },
  },
  {
    img: `/image/blogs/dummy/event5.jpeg`,
    tag: "Freelance",
    title: "\"Fulltime x Freelance\" ft Kak Fays Co-founder TeamUp Agency",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    date: "16 September 2022",
    author: {
      img: `/image/avatar2.jpg`,
      name: "Mimin Ganteng",
    },
  },
  {
    img: `/image/blogs/dummy/event1.jpeg`,
    tag: "Mobile",
    title: "Ngobrol santai Tentang Teknologi Android",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    date: "18 September 2022",
    author: {
      img: `/image/avatar3.jpg`,
      name: "Mimin Ganteng",
    },
  },
  {
    img: `/image/blogs/dummy/event4.jpeg`,
    tag: "Machine Learning",
    title: "Let's Get to Know Machine Learning with AWS",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    date: "18 September 2022",
    author: {
      img: `/image/avatar3.jpg`,
      name: "Mimin Ganteng",
    },
  },
  {
    img: `/image/blogs/dummy/event2.jpeg`,
    tag: "Machine Learning",
    title: "Implementasi Prinsip SOLID pada Pemrograman",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    date: "18 September 2022",
    author: {
      img: `/image/avatar3.jpg`,
      name: "Mimin Ganteng",
    },
  },
  {
    img: `/image/blogs/dummy/event3.jpeg`,
    tag: "Web",
    title: "Become a Web Developer with PatriaDev x GresikDev",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    date: "18 September 2022",
    author: {
      img: `/image/avatar3.jpg`,
      name: "Mimin Ganteng",
    },
  },
];

export function Posts() {
  return (
    <section className="grid min-h-screen place-items-center p-8">
      <Tabs value="trends" className="mx-auto max-w-7xl w-full mb-16 ">
        <div className="w-full flex mb-8 flex-col items-center">
          <TabsHeader className="h-10 !w-12/12 md:w-[50rem] border border-white/25 bg-opacity-90">
            <Tab value="trends">All</Tab>
            <Tab value="frontend">Web</Tab>
            <Tab value="cloud">Mobile</Tab>
            <Tab value="ai">UI/UX</Tab>
          </TabsHeader>
        </div>
      </Tabs>
      <Typography variant="h6" className="mb-2">
        Event Terbaru
      </Typography>
      <Typography variant="h1" className="mb-2">
        PatDev Events
      </Typography>
      <Typography
        variant="lead"
        color="gray"
        className="max-w-3xl mb-36 text-center text-gray-500"
      >
        Lihat dan ikuti event terbaru dari Patria Developer.
      </Typography>
      <div className="container my-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
        {POSTS.map(({ img, tag, title, desc, date, author }) => (
          <BlogPostCard
            key={title}
            img={img}
            tag={tag}
            title={title}
            desc={desc}
            date={date}
            author={{
              img: author.img,
              name: author.name,
            }}
          />
        ))}
      </div>
      <Button
        variant="text"
        size="lg"
        color="gray"
        className="flex items-center gap-2 mt-24"
      >
        <ArrowSmallDownIcon className="h-5 w-5 font-bold text-gray-900" />
        VIEW MORE
      </Button>
    </section>
  );
}

export default Posts;

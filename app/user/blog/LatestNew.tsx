import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { v4 as uuidv4 } from "uuid";

const latestNew =[
    {
        date: '1st Februry,2024',
        topic: 'Lorem ipsum dolor sit amet.',
        auther: 'by Priscilla Owusu',
        imageSrc: '/Img/PolicyImg1.jpg',
        href:"#"
    },
    {
        date: '1st May,2024',
        topic: 'Lorem ipsum dolor sit amet.',
        auther: 'by Ama Acquah',
        imageSrc: '/Img/PolicyImg2.jpg',
        href:"#"
    },
    {
        date: '1st June,2024',
        topic: 'Lorem ipsum dolor sit amet.',
        auther: 'by Andy Senya',
        imageSrc: '/Img/PolicyImg3.jpg',
        href:"#"
    },
    {
        date: '1st July,2024',
        topic: 'Lorem ipsum dolor sit amet.',
        auther: 'by Aiden Akwasi',
        imageSrc: '/Img/PolicyImg4.jpg',
        href:"#"
    }
]

const LatestNew = () => {
  return (
    <div className=' grid gap-4'>
        {
            latestNew.map((news) => (
               <Link href={news.href} key={uuidv4()}>
                <div  className=" shadow-sm p-4 hover:shadow-md grid grid-cols-2 gap-1 items-center justify-center">

                    <div className=" h-36  w-[90%]   flex">
                        <Image className=" h-full rounded-3xl w-full object-cover object-center italic " src={news.imageSrc} width={1000} height={1000} alt={news.topic} />
                    </div>

                    <div className=" flex flex-col text-sm">
                        <span className='text-zinc-400'>{news.date}</span>
                        <span className=" font-bold">{news.topic}</span>
                        <span className=" text-blue-400 mt-4">{news.auther}</span>
                    </div>
                    </div>
               </Link>
            ))
        }
    </div>
  )
}

export default LatestNew
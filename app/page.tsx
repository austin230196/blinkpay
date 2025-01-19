"use client"

import Image from "next/image";
import { GiSelfLove } from "react-icons/gi";
import { TbReceiptYen } from "react-icons/tb";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaRegClock, FaInfo, FaFileInvoiceDollar } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";

import Nav from "@/components/Nav";
import Faq from "@/components/Faq";
import Feature, { IFeature } from "@/components/Feature";
import Step, { IStep } from "@/components/Step";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";



type IFaq = {
  question: string;
  answer: string
}

export default function Home(){
  const [rates, setRates] = useState<{yen: number; dollar: number}>({
    yen: 0,
    dollar: 0
  });
  useEffect(()=> {
    (async() => {
      try{
        const res = await fetch("/api", {
          method: "GET",
          headers: {
            // "Content-Type": "application/json"
          }
        })
        console.log({res});
        const data = await res.json();
        console.log({data})
        setRates(() => data.data);
      }catch(e: any){
        console.log(e.message)
      }
    })()
  }, [])

  return (
    <div className="min-h-screen w-full font-[family-name:var(--font-geist-sans)]">
      <Nav />
      <div className="mt-20 w-full max-w-[1200px] mx-auto bg-[url('/blinkpay.jpg')] min-h-[700px] bg-cover bg-center" />
      <div className="w-full py-20 flex gap-10 items-center flex-col justify-center bg-gradient-to-b from-blue-500 to-blue-500/30 opacity-80">
        <p className="text-white text-xl font-bold py-2 px-8 bg-gray-900/20 w-full max-w-[1200px] text-center">BlinkPay - Most secure and reliable way to pay suppliers in China and Turkey</p>
        <p className="text-white text-2xl font-bold w-full max-w-[1200px] text-center">Current rate: <span>{rates.yen}</span></p>
        <button className="bg-primary text-white px-8 py-2 font-semibold rounded-sm uppercase hover:bg-primary/80 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg">Pay Chinese Suppliers $1000</button>
      </div>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <div className="w-full max-w-[1200px] mx-auto grid lg:grid-cols-2 grid-cols-1 px-6 lg:px-0 gap-10 py-12">
        <div className="max-w-[600px] max-h-[600px]">

          <Image
            src="/faq-blinkpay.png"
            alt="Description of the image"
            width={600}
            height={600}
            layout="responsive" // Optional: Adjusts the image layout
          />
        </div>

        <div className="flex flex-col gap-10 w-full">
          <h2 className="font-extrabold text-2xl">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-2">
            {
              faqs.map((f, i) => (
                <Faq {...f} key={i} />
              ))
            }
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="w-full mx-auto bg-[#F6FCFE] pt-20 pb-10">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-8">
          <h2 className="text-3xl font-bold">Our Special Features</h2>
          <div className="flex items-center flex-wrap gap-5 lg:px-0 px-6 justify-between w-full">
            {
              features.map((f, i) => (<Feature {...f} key={i} />))
            }
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="w-full mx-auto bg-[#D9F2FF] pt-20 pb-10">
        <div className="w-full flex flex-col gap-10">
          <h2 className="text-3xl font-bold uppercase text-center">How it works</h2>
          <div className="grid xlg:grid-cols-4 lg:grid-cols-3 grid-cols-2 w-full px-6 gap-5">
            {
              steps.map((s, i) => (<Step {...s} key={i} index={i + 1} />))
            }
          </div>
        </div>
      </div>
    
      {/* RATES */}
      <div className="w-full py-20 flex gap-10 items-center flex-col justify-center bg-gradient-to-b from-blue-500 to-blue-200/10 opacity-80">
        <p className="text-white text-2xl font-bold w-full max-w-[1200px] text-center">Current rate: <span>{rates.yen}</span></p>
        <button className="bg-primary text-white px-8 py-2 font-semibold rounded-sm uppercase hover:bg-primary/80 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg">Pay Chinese Suppliers $1000</button>
      </div>

      <Footer />
    </div>
  )
}


const faqs: IFaq[] = [
  {
    question: "HOW DO I KNOW BlinkPay IS NOT A SCAM",
    answer: "BlinkPay is reliable and trusted by many, however if you don’t feel safe transacting with us online, give us a call on +2347086935661, One of our reps will meet you at your preferred location to perform the transfer."
  },
  {
    question: "HOW FAST CAN YOU CREDIT A SUPPLIER IN CHINA",
    answer: "BlinkPay can credit your Chinese supplier as fast as 5 minute, however we estimate 30 minutes for all crediting, because your recipient may not respond on time."
  },
  {
    question: "HOW FAST CAN YOU CREDIT A SUPPLIER IN TURKEY",
    answer: " BlinkPay can credit your Turkish supplier as fast as 10 minute, however we estimate 30 minutes for all crediting, because your recipient may not respond on time."
  },
  {
    question: "DO YOU TRANSFER TO ALIPAY & WECHAT",
    answer: "Yes we transfer to both WeChat and Alipay seamlessly."
  },
  {
    question: "DO YOU TRANSFER TO CHINESE BANKS",
    answer: "NO. We only do cash deposit to Chinese banks, cash pickups and delivery."
  },
  {
    question: "DO YOU TRANSFER TO TURKISH BANKS",
    answer: "NO. We only do cash pickups and delivery."
  },
  {
    question: "HOW DO I CONTACT YOU",
    answer: "You can always chat with our customer service personnel during our working hours (8AM – 5PM) or just call us on +2347086935661"
  },
  {
    question: "HOW MUCH CAN I TRANSFER",
    answer: "BlinkPay can transfer minimum of ¥1,000 and maximum of ¥100,000 per transaction, however you can do unlimited number of transactions in a day."
  },
  {
    question: "WHAT IS YOUR RATE, AND CAN I NEGOTIATE",
    answer: "Rates are not stable, it is adjusted frequently. Always confirm the current rate before making payments. Yes you can call to negotiate if you are doing more than ¥1,000,000"
  },
]

const features: IFeature[] = [
  {
    icon: <GiSelfLove />,
    title: "Reliable",
    description: "We are highly reliable and trusted by thousands of people. Your security is our top priority."
  },
  {
    icon: <TbReceiptYen />,
    title: "Low Transparent Fee",
    description: "We make sure that you are able to send as much money as possibles, we offer the best exchange rates possible here."
  },
  {
    icon: <FaHandHoldingHeart />,
    title: "Safe And Secure",
    description: "We value your money and your privacy. We have deployed the best systems to ensure that your money and your account are always safe and protected."
  },
  {
    icon: <FaRegClock />,
    title: "Fast Transaction",
    description: "Blinkpay is the fastest way to pay your suppliers in China and Turkey. It's simple, seamless, and satisfactory."
  },
]


const steps: Omit<IStep, "index">[] = [
  {
    icon: <FiPlus />,
    title: "Select Transaction Type",
    description: "Choose the type of transaction you wish to perform. Pay Chinese Suppliers / Pay Turkish Suppliers"
  },
  {
    icon: <FaInfo />,
    title: "Provide Transaction Details",
    description: "After choosing the transaction type, you'll be redirected to WhatsApp where you'll be given the account to pay the naira equivalent and you also provide the recipient information."
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Make Payment",
    description: "After confirmation of the naira equivalent payment, the recipient will be credited immediately."
  },
  {
    icon: <FaRegClock />,
    title: "Confirm Receipt",
    description: "After a successful payments to the supplier, the receipt of payment will be made available to you within 5-30mins."
  },
]
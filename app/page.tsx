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



type IFaq = {
  question: string;
  answer: string
}

export default function Home(){
  // const res = await fetch("http://localhost:3000/api/rate", {
  //   method: "GET",
  //   headers: {
  //     // "Content-Type": "application/json"
  //   }
  // })
  // // const data = await res.json();
  // console.log({res});

  return (
    <div className="min-h-screen w-full font-[family-name:var(--font-geist-sans)]">
      <Nav />
      <div className="mt-20 w-full max-w-[1200px] mx-auto bg-[url('/blinkpay.jpg')] min-h-[700px] bg-cover bg-center" />
      <div className="w-full py-20 flex gap-10 items-center flex-col justify-center bg-gradient-to-b from-blue-500 to-blue-500/30 opacity-80">
        <p className="text-white text-xl font-bold py-2 px-8 bg-gray-900/20 w-full max-w-[1200px] text-center">Buy-rmb - Most secure and reliable way to pay suppliers in China and Turkey</p>
        <p className="text-white text-2xl font-bold w-full max-w-[1200px] text-center">Current rate: <span>0.42</span></p>
        <button className="bg-primary text-white px-8 py-2 font-semibold rounded-sm uppercase hover:bg-primary/80 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg">Pay Turkish Suppliers $1000</button>
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
        <p className="text-white text-2xl font-bold w-full max-w-[1200px] text-center">Current rate: <span>0.42</span></p>
        <button className="bg-primary text-white px-8 py-2 font-semibold rounded-sm uppercase hover:bg-primary/80 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg">Pay Turkish Suppliers $1000</button>
      </div>

      <Footer />
    </div>
  )
}


const faqs: IFaq[] = [
  {
    question: "How do I know BlinkPay is not a scam",
    answer: "BlinkPay is reliable and trusted by many, however if you don’t feel safe transacting with us online, we can arrange a meeting for the transfer, give us a call, on +233 508 341 200, One of our reps will meet you at your preferred location to perform the transfer."
  },
  {
    question: "How fast can you transfer to China",
    answer: "BlinkPay can transfer money to China as fast as 5 minutes, however we estimate 30 Minutes for all transfers, because your recipient may not respond on time"
  },
  {
    question: "How fast can you transfer to Turkey",
    answer: "BlinkPay can transfer money to Turkey as fast as 5 minutes, however we estimate 30 Minutes for all transfers, because your recipient may not respond on time"
  },
  {
    question: "Do you transfer to Alipay and WeChat",
    answer: "Yes we transfer to both WeChat and Alipay."
  },
  {
    question: "Do you transfer to Chinese banks",
    answer: "Yes we transfer to Chinese banks"
  },
  {
    question: "Do you transfer to Turkish banks",
    answer: "Yes we transfer to Turkish banks"
  },
  {
    question: "How do I contact you",
    answer: "You can always chat with our customer service personnel during our working hours(6AM – 4PM) or leave us an email at info@blinkpay.com or just call us on +233 508 341 200"
  },
  {
    question: "How much can I transfer",
    answer: "BlinkPay can transfer minimum of ¥30. and maximum of ¥100,000 per transaction, however you can do unlimited number of transactions in a day"
  },
  {
    question: "What is your rate and can I negotiate",
    answer: "Our rate is not stable, it is adjusted frequently, the current rate is always displayed on the front page, and its also written on the transfer page. Yes you can call to negotiate if you are doing more than ¥10,000"
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
    description: "BlinkPay is the fastest way to send money to china to pay your suppliers. sending money is simple, quick, and hassle-free."
  },
]


const steps: Omit<IStep, "index">[] = [
  {
    icon: <FiPlus />,
    title: "Select Transaction Type",
    description: "Choose which type of transaction (buy / sell) you wish to perform"
  },
  {
    icon: <FaInfo />,
    title: "Provide Transaction Details",
    description: "After Choosing the type of transfer, you will be redirected, to a form to provide transfer and recipient info."
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Make Payment",
    description: "After providing transfer info, you will be given the cedi equivalent to pay."
  },
  {
    icon: <FaRegClock />,
    title: "Confirm Receipt",
    description: "After successful payment, the yuan equivalence will be sent to the recipient within 30min and a receipt will be sent to you"
  },
]
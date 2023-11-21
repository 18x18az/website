import Image from "next/image";

export default function Home (): JSX.Element {
  return (
    <div className="w-full">
    <div style={{height:"60vh"}} className="relative m-0 p-0">
      <Image src='https://static-18x18.azureedge.net/images/hero.webp' sizes="100%" height={0} width={0} className="w-full object-cover h-full" alt='Teams competing'/>
      <div className="flex flex-col absolute bottom-0 p-8 xl:p-24 bg-gradient-to-r from-black xl:from-5% h-full w-full justify-end gap-4">
      <h1 className="text-3xl xl:text-5xl font-bold text-zinc-0">18x18AZ</h1>
      <h2 className="text-2xl xl:text-5xl max-w-3xl text-zinc-200 leading-loose">Helping provide an engaging and affordable STEM experience for Arizona students</h2>
      </div>
    </div>
    <div className="w-full flex p-4 gap-4">
      <div className="flex flex-col p-8 gap-4 max-w-4xl">
        <h1 className="text-3xl">VEX Robotics Competition Over Under</h1>
        <p>VEX Robotics Competition Over Under is played on a 12’ x 12’ square field configured as seen above. Two Alliances – one “red” and one “blue” – composed of two Teams each, compete in matches consisting of a 15 second Autonomous Period, followed by a one minute and forty-five second Driver Controlled Period.</p>
        <p>The object of the game is to attain a higher score than the opposing Alliance by Scoring Triballs in Goals, and by Elevating at the end of the Match.</p>
        <h2>Learn More</h2>
      </div>
    </div>
    </div>
  )
}

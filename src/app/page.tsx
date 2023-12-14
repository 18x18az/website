import Image from 'next/image'

function HeroImage (): JSX.Element {
  return (
    <div style={{ height: '60vh' }} className='relative m-0 p-0'>
      <Image src='https://static-18x18.azureedge.net/images/hero.webp' sizes='100%' height={0} width={0} className='w-full object-cover h-full' alt='Teams competing' />
      <div className='flex flex-col absolute bottom-0 p-8 xl:p-24 bg-gradient-to-r from-black xl:from-5% h-full justify-center lg:justify-end content-center w-full gap-4 lg:text-left text-center'>
        <h1 className='text-5xl lg:text-8xl font-cooper-hewitt text-violet-9 font-semibold'>18x18AZ</h1>
        <h2 className='text-2xl lg:text-5xl max-w-3xl text-slate-11 font-cooper-hewitt font-medium'>Helping provide an engaging and affordable STEM experience for Arizona students</h2>
      </div>
    </div>
  )
}

function YouTube (props: { embedCode: string }): JSX.Element {
  return (
    <div className='aspect-w-16 aspect-h-9'>
      <iframe
        src={`https://www.youtube.com/embed/${props.embedCode}`}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Embedded youtube'
      />
    </div>
  )
}

function Link(props: { href: string, children: React.ReactNode }): JSX.Element {
  return (
      <a className='bg-violet-9 p-2 transform transition-all duration-500 hover:scale-125 hover:outline-offset-0 inline-block outline outline-offset-4 outline-1 outline-violet-9' href={props.href} target='_blank' rel='noreferrer'>
      {props.children}
    </a>
  )
}

function CompetitionInfo (): JSX.Element {
  return (
    <div className='flex flex-col lg:flex-row-reverse p-8 lg:gap-32 lg:px-48 lg:py-24 w-full lg:content-center'>
      <div className='max-w-xl'>
        <h1 className='lg:text-6xl text-2xl mb-4 lg:mb-8 text-slate-12 font-cooper-hewitt font-semibold text-violet-9'>The Competition</h1>
        <p className='mb-12 text-lg font-sans'>Each year middle and high school teams from around the state design, build, and program robots to complete the challenge of that year's game. They put their
          robots to the test at local tournaments throughout the year, culminating in the state championship where the top teams compete to claim the title of state
          champion and move on to represent Arizona at the world championship.
        </p>
        <Link href='https://www.vexrobotics.com/v5/competition/vrc-current-game'>This year's game</Link>
      </div>
      <div className='flex-1'>
        <YouTube embedCode='dvDqEI7qO34' />
      </div>
    </div>
  )
}

export default function Home (): JSX.Element {
  return (
    <div className='w-full bg-slate-0'>
      <HeroImage />
      <div className='w-full flex p-4 gap-4'>
        <CompetitionInfo />
      </div>
    </div>
  )
}

import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center">
          <span className="text-blue-500">Vino</span> - curating your wine journey
        </h1>
        <p className="text-xl text-center">
          Creating beautiful wine experiences for you and your friends
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/wine.jpg"
          alt="Vino hero"
          width={800}
          height={600}
        />
      </div>
    </main>
  )
}

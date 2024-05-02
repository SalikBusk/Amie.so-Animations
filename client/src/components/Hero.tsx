import React from 'react'

const Hero = () => {
  return (
      <section className='flex flex-col justify-center py-20'>
          <h1 className='mb-20 font-heading text-7xl'>
              Byer i Grønland
              <br />
              <span className='text-gray-300'>
                  .....
              </span>
          </h1>

          <div className='aspect-video w-2/5 rounded-xl bg-black shadow-md'>
              Fake Video
          </div>
    </section>
  )
}

export default Hero
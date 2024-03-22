import { gallery15, quoteicon } from "../../assets"

const About = () => {
  return (
    <div className='sm:px-16 md:px-24 px-4 py-4 md:pt-12 flex flex-col md:mt-20 mt-20'>
      <div className="flex justify-between sm:items-end items-center sm:flex-row flex-col py-4 md:pb-12 border-b-[goldenrod] border-b-2 gap-8">
        <h2 className='md:text-[40px] vs:text-[30px] text-[24px] font-bold basis-1/5'>
          About Us
        </h2>
        <div className="flex basis-5/6">
          <img src={gallery15} alt="" />
        </div>
      </div>
      <div>
        <p className="text-[25px] md:px-10 py-7">
          <p className="my-1">Guided by the belief that a better and equitable life is possible, the Hadassah Foundation works to suport the vulnerable and less privileged lead a healthy and productive lives beginning from Nigeria and the rest of the African countries by availing an opportunity for transformation from hunger, and poverty to better lives. Our goal is to improve the living standards, equitable access to resources, and restore hope to the vulnerable persons in Nigeria and Africa.</p> <br /> <p className="mb-1">We accomplish our goals through personal funding and now seeking for grantmaking with a gender lens, supporting the vulnerable individuals and families in communities in Nigeria and Africa to be productive and resilient. Building unique strength from our diversity, resources and experience of vulnerability, we promote sustainable innovative solutions, social change, transforming inidividual, family lives, and entire communities.</p> <br /> Additionally, Hadassah Foundation seeks to build a world of hope and social justice where the less privileged and vulnerable individuals and families have equitable access to resources an an improved standard of living for a better society.
        </p>
      </div>
      <div className=' bg-[goldenrod] pl-1 md:ml-12 rounded-md drop-shadow-lg relative max-w-[370px] mb-12'>
        <div className='bg-[#fff] rounded-md py-2 pl-10 pr-5 flex'>
          <img src={quoteicon} alt="quote" className='h-5 w-5 absolute top-[-10px] left-[20px] drop-shadow-md' />
          <p className='italic sm:text-[20px]'>
          Our Love Knows no bounds. <br /> <span className='font-semibold flex justify-end'> &#8212; Our slogan</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-8 border-t-[goldenrod] border-t-2">
        <h2 className='md:text-[40px] vs:text-[30px] text-[24px] font-bold basis-1/5'>
          Our Core Values
        </h2>
        <div className="text-[22px]">
          The <span className="text-[goldenrod] font-bold">EIITA</span>
        </div>
        <div className="mt-4 flex flex-wrap border-b-2 border-[goldenrod] pb-12">
          <p className="text-[20px] border-r-2 border-[goldenrod] p-4">
            <span className="text-[goldenrod] font-bold">E</span> --&gt; Excellence
          </p>
          <p className="text-[20px] border-r-2 border-[goldenrod] p-4">
            <span className="text-[goldenrod] font-bold">I</span> --&gt; Inclusiveness
          </p>
          <p className="text-[20px] border-r-2 border-[goldenrod] p-4">
            <span className="text-[goldenrod] font-bold">I</span> --&gt; Integrity
          </p>
          <p className="text-[20px] border-r-2 border-[goldenrod] p-4">
            <span className="text-[goldenrod] font-bold">T</span> --&gt; Teamwork
          </p>
          <p className="text-[20px] border-r-2 border-[goldenrod] p-4">
            <span className="text-[goldenrod] font-bold">T</span> --&gt; Transparency
          </p>
          <p className="text-[20px] border-r-2 border-[goldenrod] p-4">
            <span className="text-[goldenrod] font-bold">A</span> --&gt; Accountability
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
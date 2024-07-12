import Image from "next/image";
import Component from "./Chart";

const svg2 = (<svg width="352" className="max-w-[min(300px,25vw)]" viewBox="0 0 352 564" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="1" width="350" height="561" rx="10" fill="black"/>
  <line x1="319.139" y1="314.25" x2="176.433" y2="561.424" stroke="white"/>
  <line x1="173.273" y1="562.424" x2="30.567" y2="315.25" stroke="white"/>
  <line x1="318.617" y1="314.321" x2="236.617" y2="216.321" stroke="white"/>
  <line x1="113.383" y1="217.321" x2="31.3834" y2="315.321" stroke="white"/>
  <line x1="303.61" y1="294.688" x2="327.61" y2="264.688" stroke="white"/>
  <line x1="22.3904" y1="265.688" x2="46.3905" y2="295.688" stroke="white"/>
  <line x1="237.237" y1="215.56" x2="328.237" y2="264.56" stroke="white"/>
  <line x1="21.763" y1="265.559" x2="112.764" y2="216.56" stroke="white"/>
  <line x1="237.728" y1="216.087" x2="176.492" y2="563.368" stroke="white"/>
  <line x1="175.743" y1="561.368" x2="114.508" y2="214.087" stroke="white"/>
  <line x1="239.092" y1="215.509" x2="351.092" y2="236.509" stroke="white"/>
  <line x1="0.907853" y1="236.509" x2="112.908" y2="215.509" stroke="white"/>
  <line x1="112.584" y1="216.723" x2="138.584" y2="177.723" stroke="white"/>
  <line x1="137.383" y1="177.679" x2="176.339" y2="224.105" stroke="white"/>
  <line x1="175.617" y1="224.105" x2="214.573" y2="177.679" stroke="white"/>
  <line x1="215.426" y1="177.738" x2="239.426" y2="216.738" stroke="white"/>
  <line x1="121.75" y1="254.952" x2="176.11" y2="223.567" stroke="white"/>
  <line x1="176.25" y1="223.567" x2="230.61" y2="254.952" stroke="white"/>
  <rect x="156" y="290" width="42" height="147" fill="white"/>
  <path d="M176.5 278L155.282 236.75H197.718L176.5 278Z" fill="white"/>
  <path d="M176.5 224L197.718 236.75H155.282L176.5 224Z" fill="white"/>
  <path d="M177 266L198.651 290.75H155.349L177 266Z" fill="white"/>
  <path d="M177 563L155.349 431H198.651L177 563Z" fill="white"/>
</svg>)

const svg1 = (<svg width="352" className="max-w-[min(300px,25vw)]" viewBox="0 0 352 564" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="1" width="350" height="561" rx="10" fill="black"/>
  <line y1="-0.5" x2="240.543" y2="-0.5" transform="matrix(-0.593265 0.805007 -0.911135 -0.412109 318.706 367.991)" stroke="white"/>
  <line y1="-0.5" x2="240.543" y2="-0.5" transform="matrix(-0.593265 -0.805007 0.911135 -0.412109 173.706 562.414)" stroke="white"/>
  <line y1="-0.5" x2="112.331" y2="-0.5" transform="matrix(-0.729984 -0.683464 0.836332 -0.548223 319 367.991)" stroke="white"/>
  <line y1="-0.5" x2="112.331" y2="-0.5" transform="matrix(-0.729979 0.683469 -0.836336 -0.548217 112.999 292)" stroke="white"/>
  <line y1="-0.5" x2="33.5911" y2="-0.5" transform="matrix(0.714475 -0.699661 0.847339 0.531052 304 353.106)" stroke="white"/>
  <line y1="-0.5" x2="33.5911" y2="-0.5" transform="matrix(0.714478 0.699658 -0.847337 0.531055 22 330.388)" stroke="white"/>
  <line y1="-0.5" x2="98.7653" y2="-0.5" transform="matrix(0.921377 0.388671 -0.566433 0.824108 237 291.217)" stroke="white"/>
  <line y1="-0.5" x2="98.7655" y2="-0.5" transform="matrix(0.921381 -0.38866 0.566421 0.824116 22 330.387)" stroke="white"/>
  <line y1="-0.5" x2="278.87" y2="-0.5" transform="matrix(-0.219582 0.975594 -0.990593 -0.136837 237.235 291.217)" stroke="white"/>
  <line y1="-0.5" x2="278.87" y2="-0.5" transform="matrix(-0.219582 -0.975594 0.990593 -0.136837 176.235 561.714)" stroke="white"/>
  <line y1="-0.5" x2="113.202" y2="-0.5" transform="matrix(0.989383 0.14533 -0.232764 0.972533 239 291.217)" stroke="white"/>
  <line y1="-0.5" x2="113.202" y2="-0.5" transform="matrix(0.989383 -0.145335 0.232771 0.972531 1 307.669)" stroke="white"/>
  <line y1="-0.5" x2="40.1184" y2="-0.5" transform="matrix(0.648081 -0.761572 0.88639 0.462939 113 292)" stroke="white"/>
  <line y1="-0.5" x2="53.2958" y2="-0.5" transform="matrix(0.730946 0.682436 -0.835622 0.549305 137 261.447)" stroke="white"/>
  <line y1="-0.5" x2="53.2958" y2="-0.5" transform="matrix(0.730946 -0.682436 0.835622 0.549305 176 297.818)" stroke="white"/>
  <line y1="-0.5" x2="38.8522" y2="-0.5" transform="matrix(0.617726 0.786393 -0.900784 0.434268 215 261.447)" stroke="white"/>
  <line y1="-0.5" x2="59.6618" y2="-0.5" transform="matrix(0.911135 -0.412109 0.593265 0.805007 122 322.072)" stroke="white"/>
  <line y1="-0.5" x2="59.6618" y2="-0.5" transform="matrix(0.911135 0.412109 -0.593265 0.805007 176 297.484)" stroke="white"/>
</svg>)

const svg3 = (<svg width="352" className="max-w-[min(300px,25vw)]" viewBox="0 0 352 561" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="2" width="350" height="561" rx="10" fill="black"/>
  <line y1="-0.5" x2="112.811" y2="-0.5" transform="matrix(0.984808 0.173648 -0.331936 0.943302 240 340)" stroke="white"/>
  <line y1="-0.5" x2="112.811" y2="-0.5" transform="matrix(0.984808 -0.173648 0.33194 0.9433 1 359.589)" stroke="white"/>
  <line y1="-0.5" x2="36.1196" y2="-0.5" transform="matrix(0.719831 -0.69415 0.91914 0.393932 114 340.254)" stroke="white"/>
  <line y1="-0.5" x2="49.0756" y2="-0.5" transform="matrix(0.793801 0.608177 -0.880111 0.474769 138 315.182)" stroke="white"/>
  <line y1="-0.5" x2="49.0756" y2="-0.5" transform="matrix(0.793801 -0.608177 0.880111 0.474769 177 345.028)" stroke="white"/>
  <line y1="-0.5" x2="34.7077" y2="-0.5" transform="matrix(0.691489 0.722387 -0.929874 0.367877 216 315.182)" stroke="white"/>
  <line y1="-0.5" x2="57.9836" y2="-0.5" transform="matrix(0.937505 -0.347972 0.668169 0.744009 123 364.931)" stroke="white"/>
  <line y1="-0.5" x2="57.9836" y2="-0.5" transform="matrix(0.937505 0.347972 -0.668169 0.744009 177 344.754)" stroke="white"/>
  <line y1="-0.5" x2="25.5944" y2="-0.5" transform="matrix(0.273497 0.961873 -0.982157 0.188061 114 340.254)" stroke="white"/>
  <line y1="-0.5" x2="27.7593" y2="-0.5" transform="matrix(-0.324216 0.945983 -0.974385 -0.224887 240 339.433)" stroke="white"/>
  <line x1="177.5" y1="346" x2="177.5" y2="561" stroke="white"/>
</svg>)

export default async function Index() {
  return (
    <>
    <div className="flex w-full h-[75vw]">
      <img className="object-cover w-full" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <div className="flex absolute w-full h-[75vw] bg-black opacity-75">
      </div>
      <div className="absolute flex w-fit text-2xl align-middle justify-center items-center mt-[25vw] flex-col left-0 right-0 m-auto">
        <h1 className="text-white text-5xl font-extrabold">Looking for a job?</h1>
        <button className="bg-black text-white w-full md:w-1/2 rounded-md p-2 mt-4 md:mt-5 font-semibold">Find jobs</button>
      </div>
    </div>
    <div className="flex w-full h-full justify-center items-center flex-col p-10 gap-10">
      <h1 className="text-3xl font-semibold max-md:text-center">Recruitment Analytics</h1>
      <div className="flex w-1/2 h-full m-auto">
        <Component />
      </div>
    </div>
    <div className="flex w-full h-full justify-center align-middle flex-col p-10 gap-10">
      <h1 className="text-3xl font-semibold text-center">Top Recruiters</h1>
      <div className="flex w-1/2 h-full m-auto items-center justify-center space-x-4">
        <div className="relative flex flex-col items-start justify-start">
          <h1 className="text-white absolute left-0 right-0 top-8 text-center font-semibold text-1xl">PT Shopee Indonesia</h1>
          <h1 className="text-white absolute left-0 right-0 top-16 text-center font-semibold text-1xl">90</h1>
          <h1 className="text-white absolute left-0 right-0 top-24 text-center text-1xl">Recruits</h1>
          {svg1}
        </div>
        <div className="relative flex flex-col">
        <h1 className="text-white absolute left-0 right-0 top-8 text-center font-semibold text-1xl">Tokopedia</h1>
          <h1 className="text-white absolute left-0 right-0 top-16 text-center font-semibold text-1xl">125</h1>
          <h1 className="text-white absolute left-0 right-0 top-24 text-center text-1xl">Recruits</h1>
          {svg2}
        </div>
        <div className="relative flex flex-col">
        <h1 className="text-white absolute left-0 right-0 top-8 text-center font-semibold text-1xl">Bukalapak</h1>
          <h1 className="text-white absolute left-0 right-0 top-16 text-center font-semibold text-1xl">40</h1>
          <h1 className="text-white absolute left-0 right-0 top-24 text-center text-1xl">Recruits</h1>
          {svg3}
        </div>

      </div>

    </div>
    <div className="flex w-full h-full justify-center items-center flex-col p-4 md:p-10">
  <div className="flex flex-col md:flex-row w-full max-w-4xl">
    <div className="flex-1 flex justify-center items-center p-4 md:p-8">
      <img 
        className="object-cover w-full h-auto md:w-[300px] md:h-[300px] rounded-lg" 
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="About Us Image"
      />
    </div>
    <div className="flex flex-col w-full md:w-1/2 p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">About Us</h1>
      <p className="text-sm md:text-base mb-6">
        Welcome to [Your Company Name], where we believe in giving everyone a fair chance to prove their potential. 
        Our mission is to create opportunities for individuals who may not have a formal degree or professional work experience, 
        enabling them to gain valuable experience and gradually climb to more respectable positions and salaries.
      </p>
      <div className="flex justify-end">
        <button className="bg-black text-white w-full md:w-1/2 rounded-md p-2 mt-4 md:mt-5">View More</button>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

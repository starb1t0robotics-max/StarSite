import './App.css';
import starLogo from './assets/StarLogo2.svg';
import ftc from  './assets/ftc.svg'
import spon from './assets/spon.svg'
import TextType from './TextType';
import PixelBlast from './lecomponents/PixelBlast';
import team from './assets/team.jpeg'
import roboter from './assets/roboter.png'
import decode from './assets/decode.png'
import DecryptedText from './lecomponents/DecryptedText';
import FadeContent from './lecomponents/FadeContent/FadeContent';
import AnimatedContent from './lecomponents/AnimatedContent/AnimatedContent';
import LogoLoop from './lecomponents/LogoLoop/LogoLoop';
import leul from './assets/leul0.png'
import mercur from './assets/mercur.png'
import { useEffect } from 'react';


const imageLogos = [
  { 
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg", 
    alt: "Vite", 
    href: "https://vitejs.dev" 
  },
  { 
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", 
    alt: "React", 
    href: "https://react.dev/" 
  },
  { 
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Android_Studio_icon_%282023%29.svg", 
    alt: "Android Studio", 
    href: "https://developer.android.com/studio" 
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Kotlin_icon_%282021-present%29.svg",
    alt: "Kotlin",
    href: "https://kotlinlang.org/"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    alt: "TailwindCSS",
    href: "https://tailwindcss.com/"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    alt: "Python",
    href: "https://www.python.org/"
  },
  {
    src: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/github-light.webp",
    alt: "GitHub",
    href: "https://github.com/home"
  },
  {
    src: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/git.webp",
    alt: "Git",
    href: "https://git-scm.com/"
  },
];

function App() {

  useEffect(() => {
    const mobileBreakpoint = 768;

    const mobileLink = 'https://strixx93.github.io/StarMobile/';

    if(window.innerWidth < mobileBreakpoint){
      window.location.replace(mobileLink);
    }
  }, []);

  return (
    <>
      {/* Fixed header container */}
      <div className='fixed top-0 left-0 right-0 z-50 px-5 backdrop-blur-sm'>
        {/* Nav bar */}
        <div className='text-white bg-transparent flex h-15 w-full justify-center items-center rounded-3xl border-3 border-solid border-violet-500/70'>
          <div className='bg-transparent flex w-full h-full justify-start items-center'>
            <p className='text-xl mx-4'>Star B1T0 Robotics</p>
          </div>
          <div className='bg-transparent flex w-full h-full justify-center items-center'>
            <button className='bg-linear-to-r from-violet-900 via-indigo-800 to-indigo-700 py-2 px-4 rounded-full'>Donate</button>
          </div>
          <div className='bg-transparent flex w-full h-full justify-end items-center'>
            <button className='bg-zinc-900 py-2 px-4 mx-2 rounded-full'>Home</button>
            <button className='bg-zinc-900 py-2 px-4 mx-2 rounded-full'>Resources</button>
            <button className='bg-zinc-900 py-2 px-4 mx-2 rounded-full'>Contact</button>
          </div>
        </div>
      </div>

      {/* First section*/}
      <div className='flex flex-col h-screen w-screen pt-20 bg-dark relative'>
         <div className='absolute inset-0 z-0'>
            <PixelBlast
              variant="circle"
              pixelSize={3}
              color="#B19EEF"
              patternScale={1}
              patternDensity={0.6}
              pixelSizeJitter={0.5}
              enableRipples
              rippleSpeed={0.4}
              rippleThickness={0.12}
              rippleIntensityScale={1.5}

              liquidStrength={0.12}
              liquidRadius={1.2}
              liquidWobbleSpeed={5}
              speed={0.6}
              edgeFade={0.25}
              transparent
            />
        </div>
        <div className='flex flex-row flex-1 relative z-10'>
          <div className='bg-transparent  flex-1 flex flex-row justify-center items-start'>
            <img className='w-60 md:w-67 lg:w-72 xl:w-82 2xl:w-107 mt-10 md:mt-10 lg:mt-15 xl:mt-20 2xl:mt-24' src={ftc} alt="" />
          </div>

          <div className='bg-transparent flex-1 flex flex-row justify-center items-start'>
            <img className="w-60 md:w-70 lg:w-85 xl:w-90 2xl:w-120 -mt-20 md:-mt-20 lg:-mt-20 " src={starLogo} alt="" />
          </div>

          <div className='bg-transparent flex-1 flex flex-row justify-center items-start'>
            <img className='w-57 md:w-57 lg:w-62 xl:w-72 2xl:w-97' src={spon} alt="" />
          </div>
        </div>



        <div className='bg-transparent w-full h-100 md:h-100 lg:h-200 flex flex-row justify-center items-center relative z-10'>
          <p className='text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-violet-600 font-extrabold'>{'>_'}</p>
          
          <TextType className='text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-widest'

            text={[" Think It. Build It. Innovate.", " Change The Game"]}

            typingSpeed={120}

            pauseDuration={3500}

            showCursor={true}

            cursorCharacter="▌"

            cursorClassName='text-violet-600'
          />
        </div>
      </div>
      
      {/* Green section */}
      <div className='flex flex-col h-screen w-screen bg-dark relative'>
        <div className='absolute inset-0 z-0'>
            <PixelBlast
              variant="circle"
              pixelSize={3}
              color="#B19EEF"
              patternScale={4}
              patternDensity={0.6}
              pixelSizeJitter={0.5}
              enableRipples
              rippleSpeed={0.4}
              rippleThickness={0.12}
              rippleIntensityScale={1.5}

              liquidStrength={0.12}
              liquidRadius={1.2}
              liquidWobbleSpeed={5}
              speed={0.6}
              edgeFade={0.25}
              transparent
            />
        </div>
        <div className='w-screen h-60 bg-transparent relative z-10'>
        </div>
        <div className='w-screen h-20 flex justify-center items-center bg-transparent relative z-10'>
          <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <div className='w-screen h-20 flex justify-center items-center bg-transparent'>
          <p className='text-zinc-400 text-5xl tracking-[1rem]'>Our</p>
          <p>___</p>
          <p className='text-violet-400 text-5xl tracking-[1rem]'>~\Mission\</p>
        </div>
        </AnimatedContent>
        </div>
        
        <div className='bg-transparent w-full h-full flex flex-row relative z-10'>
           <div className='flex flex-col justify-center items-center p-20 w-full h-full bg-transparent'>
            <AnimatedContent>
              <div className='w-full h-full p-2 flex bg-gradient-to-r from-violet-700 to-zinc-950 justify-center items-center rounded-4xl'>
              <div className='w-full h-full p-4 bg-dark flex justify-center items-center rounded-4xl'>
                <AnimatedContent>
                  <p className='text-white lg:text-lg xl:text-xl 2xl:text-2xl tracking-wide'>
                  We are a passionate and dedicated group of students who share a common interest in engineering, innovation,
                   and, of course, robots! From design and fabrication to coding and strategy, each member brings unique skills
                    and perspectives to the team. We're not just building machines; we're building friendships, learning valuable
                     lessons, and creating unforgettable experiences as we tackle exciting challenges in the world of robotics
                      competitions. We're proud of our teamwork
                   and the spirit of collaboration that drives us to learn, grow, and achieve our goals, one robot at a time.
                </p>
                </AnimatedContent>
              </div>
            </div>
            </AnimatedContent>
            <div className='w-full h-full mxl:h-80 txl:h-90 qxl:h-94 flex-col pr-2 pb-2 flex justify-start items-start bg-gradient-to-t from-violet-900 to-zinc-950 rounded-br-xl rounded-bl-xl rounded-tr-xl'>
            <div className='w-full h-full mxl:h-78 txl:h-88 qxl:h-92 bg-dark flex flex-row flex-wrap justify-start items-start rounded-br-xl rounded-bl-xl p-1'>
              <div className='w-full h-full mxl:h-76 txl:h-86 qxl:h-90 bg-linear-to-r from-zinc-900/40 via-violet-900/40 to-indigo-900/40 rounded-xl flex-1 m-1 backdrop-blur-sm
              hover:scale-150 hover:translate-x-20 hover:bg-red-200/10 hover:z-50 duration-600'></div>
              <div className='w-full h-full bg-linear-to-r from-zinc-900/40 via-violet-900/40 to-indigo-900/40 rounded-xl rounded-xl flex-1 m-1 backdrop-blur-sm
              hover:scale-150 hover:bg-[url(https://strixx93.github.io/StarMobile/assets/team-CiY9y1r8.jpeg)] hover:bg-contain hover:bg-no-repeat hover:bg-origin-border hover:z-50 duration-600'></div>
              <div className='w-full h-full bg-linear-to-r from-zinc-900/40 via-violet-900/40 to-indigo-900/40 rounded-xl rounded-xl flex-1 m-1 backdrop-blur-sm
              hover:scale-150 hover:-translate-x-20 hover:bg-red-200/10 hover:z-50 duration-600'></div>
            </div>
            </div>
          </div>
          <div className='bg-transparent w-full h-full flex justify-center items-center'>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <img className='w-200 rounded-4xl border-violet-900 border-r-10 border-b-10' src={team} alt="" />
            </FadeContent>
          </div>
        </div>
       
      </div>

      {/* Orange section */}
      <div className='flex flex-col w-screen justify-center items-center h-screen bg-dark relative'>

        <img className='size-auto pl-24 absolute z-0' src={roboter} alt="" />

        <div className='flex justify-center flex-row items-center w-screen h-screen bg-transparent relative z-10'>
          <div className='flex justify-center flex-col items-center w-full h-full bg-transparent relative z-10'>
            <div className='flex justify-center flex-row items-end w-full h-full bg-transparent relative z-10'>
              <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <img className='w-57 md:w-57 lg:w-62 xl:w-72 2xl:w-97' src={decode} alt="" />
              </FadeContent>
            </div>
            <div className='flex justify-center flex-row items-center w-full h-full bg-transparent relative z-10'>

            </div>

          </div>
          <div className='flex justify-center flex-col items-center w-full h-full bg-transparent relative z-10'>
          <div className='w-full h-full bg-transparent'>

          </div>
          <div className='w-full h-full bg-transparent flex justify-center items-center pb-40'>
            <p className='text-transparent transition delay-150 duration-500 hover:text-zinc-500 text-3xl'>Our 2026 Season Solution</p>
          </div>
          </div>
          <div className='flex justify-center flex-col items-center w-full h-full bg-transparent relative z-10'>
            <div className='flex justify-end flex-col items-center w-full h-full bg-transparent relative z-10 text-white text-4xl tracking-wider pb-10 whitespace-pre-wrap'>
              <DecryptedText
                text="%Engineered>"
                speed={100}
                maxIterations={5000}
                characters="ABCD1234!?abcdefhjew%^&!@%$&()&^!$%DFFHCFCJGFJHF:';[][bvbcjvzgtyqrtyr172538gdhsgvcgvlwl;if'pwe|\//./?,.><>~',,/,><>)^fwfgwyfgeu^"
                className="revealed"
                encryptedClassName="encrypted"
              />
              <DecryptedText
                text="#To_Dominate"
                speed={150}
                maxIterations={5000}
                characters="ABCD1234!?abcdefhjew%^&!@%$&()&^!$%DFFHCFCJGFJHF:';[][bvbcjvzgtyqrtyr172538gdhsgvcgvlwl;if'pwe|\//./?,.><>~',,/,><>)^fwfgwyfgeu^"
                className="revealed"
                encryptedClassName="encrypted"
              />
            </div>
            <div className='flex justify-center flex-row items-center w-full h-full bg-transparent relative z-10'>

            </div>

          </div>
        </div>
        
      </div>

      {/* Yellow section */}
      <div className='w-screen h-screen flex flex-col bg-dark relative'>
        <div className='absolute inset-0 z-0'>
            <PixelBlast
              variant="circle"
              pixelSize={3}
              color="#B19EEF"
              patternScale={2}
              patternDensity={0.6}
              pixelSizeJitter={0.5}
              enableRipples
              rippleSpeed={0.4}
              rippleThickness={0.12}
              rippleIntensityScale={1.5}

              liquidStrength={0.12}
              liquidRadius={1.2}
              liquidWobbleSpeed={5}
              speed={0.6}
              edgeFade={0.25}
              transparent
            />
        </div>
        <div className='w-full h-20 bg-transparent relative z-10'></div>
        <div className='w-full h-30 bg-transparent relative z-10'></div>
        <div className='w-full h-15 bg-transparent flex justify-center items-center relative z-10'>
          <p className='text-zinc-400 text-5xl tracking=widest'>Creativity</p>
          <p>___</p>
          <p className='text-zinc-400 text-5xl tracking=widest'>meets</p>
          <p>___</p>
          <p className='text-violet-400 text-5xl tracking-widest'>Professionalism</p>
        </div>
        <div className='w-full h-full bg-transparent flex flex-row p-15 relative z-10'>
          <div className='w-full h-full bg-transparent flex flex-col justify-center items-center'>
            <div className='w-full h-40 bg-transparent flex flex-col justify-center items-center'>
              <p className='text-zinc-200 text-4xl tracking-wide'>Top-Notch CAD Design</p>
            </div>
            <div className='w-full h-full bg-transparent flex flex-col justify-center items-center'>
              <div className='w-full h-full bg-transparent flex justify-center items-start pl-20 pr-20'>
            <div className='w-full h-100 p-2 flex shrink bg-gradient-to-b from-violet-700 to-zinc-950 justify-center items-center rounded-4xl'>
              <div className='w-full h-full p-4 bg-dark flex justify-start items-start rounded-4xl'>
                <p className='text-white text-xl tracking-wide'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
          </div>
          </div>
          <div className='w-full h-full bg-transparent flex flex flex-col justify-center items-center'>
            <div className='w-full h-40 bg-transparent flex flex-col justify-center items-center'>
              <p className='text-zinc-200 text-4xl tracking-wide'>Best Tech Programming</p>
            </div>
            <div className='w-full h-full bg-transparent flex flex-col justify-center items-center'>
              <div className='w-full h-full bg-transparent flex justify-center items-start pl-20 pr-20'>
            <div className='w-full h-100 p-2 flex shrink bg-gradient-to-t from-violet-700 to-zinc-950 justify-center items-center rounded-4xl'>
              <div className='w-full h-full p-4 bg-dark flex flex-col justify-start items-center rounded-4xl'>
                <p className='text-white text-xl tracking-wide'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className='h-full w-200 mt-15'>
            <LogoLoop className=''
            logos={imageLogos}
            speed={60}
            direction="left"
            logoHeight={60}
            gap={100}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#000000ff"
            ariaLabel="Technology partners"
          />
          </div>
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>

      {/* Red section */}
      <div className='w-screen h-screen bg-dark flex flex-col relative'>
        <div className='absolute inset-0 z-0'>
            <PixelBlast
              variant="circle"
              pixelSize={3}
              color="#B19EEF"
              patternScale={1}
              patternDensity={0.6}
              pixelSizeJitter={0.5}
              enableRipples
              rippleSpeed={0.4}
              rippleThickness={0.12}
              rippleIntensityScale={1.5}

              liquidStrength={0.12}
              liquidRadius={1.2}
              liquidWobbleSpeed={5}
              speed={0.6}
              edgeFade={0.25}
              transparent
            />
        </div>
        <div className='w-full h-20 bg-transparent relative z-10'></div>
        <div className='w-full h-5 bg-transparent relative z-10'></div>
        <div className='w-full h-20 bg-transparent flex justify-center items-center text-white/70 relative z-10'>
          <p className='text-4xl tracking-widest'>Presented To You By</p>
        </div>
        <div className='w-full h-20 bg-transparent flex justify-center items-center text-white relative z-10'>
          <p className='text-5xl tracking-widest'>The Star B1T0 Robotics Team</p>
        </div>
        <div className='w-full h-5 bg-transparent relative z-10'>
        </div>
        <div className='w-full h-25 bg-transparent flex flex-col justify-center items-center relative z-10'>
          <p className='text-indigo-300 text-3xl'>Pavel Oarga</p>
          <p className='text-violet-400 text-3xl'>Code Wizard & Team Lead</p>
        </div>
        <div className='w-full h-5 bg-transparent relative z-10'>
        </div>
        <div className='w-full h-25 bg-transparent flex flex-col justify-center items-center relative z-10'>
          <p className='text-indigo-300 text-3xl'>Bogdan Andrei Cernat</p>
          <p className='text-violet-400 text-3xl'>Design Master & Team Lead</p>
        </div>
        <div className='w-full h-10 bg-transparent relative z-10'>
        </div>
        <div className='w-full h-30 bg-transparent flex flex-col justify-center items-center relative z-10'>
          <p className='text-zinc-300 text-2xl'>Miheea Calaban & Ana Filimon</p>
          <p className='text-zinc-300 text-2xl'>Dragos Constandin</p>
          <p className='text-zinc-400 text-2xl'>--Programming--</p>
        </div>
        <div className='w-full h-10 bg-transparent relative z-10'>
        </div>
        <div className='w-full h-25 bg-transparent flex flex-col justify-center items-center relative z-10'>
          <p className='text-zinc-300 text-2xl'>Matei Riurean</p>
          <p className='text-zinc-400 text-2xl'>--Design--</p>
        </div>
        <div className='w-full h-10 bg-transparent relative z-10'>
        </div>
        <div className='w-full h-30 bg-transparent flex flex-col justify-center items-center relative z-10'>
          <p className='text-zinc-300 text-2xl'>Ana Gabriela Petru & Mihai Ioan Grosu</p>
          <p className='text-zinc-300 text-2xl'>Bogdan Bragar</p>
          <p className='text-zinc-400 text-2xl'>--Assembly--</p>
        </div>
        <div className='w-full h-40 mt-20 bg-transparent flex flex-row justify-center items-center relative z-10'>
          <img className="w-60 m-10" src={leul} alt="" />
          <img className="w-60 m-10" src={mercur} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;





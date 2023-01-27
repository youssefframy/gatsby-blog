import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) =>{
  const [darkMode, setDarkMode] = React.useState(typeof window !== 'undefined' && window.localStorage.getItem('theme') === 'dark' ? true : false);

  React.useEffect(() => {
    setDarkMode(window.localStorage.getItem('theme') === 'dark' ? true : false);
  }, []) ;

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      window.localStorage.setItem('theme', 'dark');
    } else if (!darkMode) {
      document.documentElement.classList.remove('dark');
      window.localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return(
    <header className="flex justify-between items-center pt-4 px-4 md:px-16 lg:px-24 text-3xl md:text-4xl lg:text-5xl font-semibold">
      <Link to='/' className="font-Nothing cursor-pointer">
        {siteTitle}
      </Link>
        {
          darkMode
          ? <img
              onClick={() => setDarkMode(false)}
              className="cursor-pointer w-16 h-16 md:w-24 lg:h-24"
              alt="light mode"
              src= "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 100 100' shape-rendering='geometricPrecision' text-rendering='geometricPrecision' width='100' height='100' style='width: 200px; height: 200px;'%3E%3Cstyle%3E .e1y12elgy0nx5_to %7Banimation: e1y12elgy0nx5_to__to 3000ms linear infinite normal forwards%7D@keyframes e1y12elgy0nx5_to__to %7B 0%25 %7Btransform: translate(-0.250000px,38.500000px);animation-timing-function: cubic-bezier(0.420000,0,0.580000,1)%7D 26.666667%25 %7Btransform: translate(0px,0px);animation-timing-function: cubic-bezier(0.420000,0,0.580000,1)%7D 40%25 %7Btransform: translate(0px,2px);animation-timing-function: cubic-bezier(0.420000,0,0.580000,1)%7D 53.333333%25 %7Btransform: translate(0px,0px);animation-timing-function: cubic-bezier(0.420000,0,0.580000,1)%7D 66.666667%25 %7Btransform: translate(0px,2px);animation-timing-function: cubic-bezier(0.420000,0,0.580000,1)%7D 76.666667%25 %7Btransform: translate(0px,0px);animation-timing-function: cubic-bezier(0.420000,0,0.580000,1)%7D 100%25 %7Btransform: translate(0px,36.221218px)%7D %7D .e1y12elgy0nx15 %7Banimation: e1y12elgy0nx15_s_do 3000ms linear infinite normal forwards%7D@keyframes e1y12elgy0nx15_s_do %7B 0%25 %7Bstroke-dashoffset: 27.500000%7D 16.666667%25 %7Bstroke-dashoffset: 27.500000%7D 26.666667%25 %7Bstroke-dashoffset: 0%7D 76.666667%25 %7Bstroke-dashoffset: 0%7D 96.666667%25 %7Bstroke-dashoffset: 27.500000%7D 100%25 %7Bstroke-dashoffset: 27.500000%7D %7D .e1y12elgy0nx16 %7Banimation: e1y12elgy0nx16_s_do 3000ms linear infinite normal forwards%7D@keyframes e1y12elgy0nx16_s_do %7B 0%25 %7Bstroke-dashoffset: 14%7D 16.666667%25 %7Bstroke-dashoffset: 14%7D 26.666667%25 %7Bstroke-dashoffset: 0%7D 76.666667%25 %7Bstroke-dashoffset: 0%7D 96.666667%25 %7Bstroke-dashoffset: 14%7D 100%25 %7Bstroke-dashoffset: 14%7D %7D @media (prefers-reduced-motion: reduce) %7B .e1y12elgy0nx5_to, .e1y12elgy0nx15, .e1y12elgy0nx16 %7B animation: none; %7D %7D %3C/style%3E%3Cg class='e1y12elgy0nx5_to' transform='translate(-0.250000,38.500000)' style='animation-duration: 4s;'%3E%3Ccircle class='stroke2 fill2' r='12' transform='translate(69,59)' fill='rgba(255,129,0,1)' stroke='rgba(255,129,0,1)' stroke-width='1.0px'%3E%3C/circle%3E%3C/g%3E%3Cpath class='stroke1 fill1' d='M-6,102.500000L-6,92.500000C-6,92.500000,15,76.500000,23.750000,61C30.687400,48.710900,30.500000,24.500000,30.500000,24.500000L37,24.500000C37,24.500000,35.703400,50.917400,29,66C21,84,-6,102.500000,-6,102.500000Z' fill='%23fff' stroke='%23000' stroke-width='1.0px' style='animation-duration: 4s;'%3E%3C/path%3E%3Cpath class='stroke1 fill1' d='M54.795100,29L34.632800,29C34.031300,29,33.582500,28.476800,33.763000,27.903000C34.452100,25.711300,36.825900,21,44.500000,21C52.115300,21,54.801200,25.639400,55.649200,27.852100C55.873200,28.436800,55.421200,29,54.795100,29Z' fill='%23fff' stroke='%23000' stroke-width='1.0px' style='animation-duration: 4s;'%3E%3C/path%3E%3Cpath class='stroke1 fill1' d='M32.795100,29L12.632800,29C12.031300,29,11.582500,28.476800,11.763000,27.903000C12.452100,25.711300,14.825900,21,22.500000,21C30.115300,21,32.801200,25.639400,33.649200,27.852100C33.873200,28.436800,33.421200,29,32.795100,29Z' fill='%23fff' stroke='%23000' stroke-width='1.0px' style='animation-duration: 4s;'%3E%3C/path%3E%3Cpath class='stroke1 fill1' d='M49.459600,13.947400L35.202700,28.204200C34.777300,28.629600,34.090000,28.576900,33.811900,28.043600C32.749400,26.006600,31.096600,20.996600,36.523000,15.570200C41.907800,10.185400,47.087600,11.566700,49.251800,12.531800C49.823700,12.786800,49.902300,13.504600,49.459600,13.947400Z' fill='%23fff' stroke='%23000' stroke-width='1.0px' style='animation-duration: 4s;'%3E%3C/path%3E%3Cpath class='stroke1 fill1' d='M33.903200,29.503700L19.646300,43.760600C19.221000,44.186000,18.533700,44.133300,18.255500,43.600000C17.193100,41.563000,15.540300,36.553000,20.966700,31.126600C26.351500,25.741800,31.531200,27.123100,33.695500,28.088200C34.267300,28.343100,34.346000,29.061000,33.903200,29.503700Z' fill='%23fff' stroke='%23000' stroke-width='1.0px' style='animation-duration: 4s;'%3E%3C/path%3E%3Cpath class='stroke1 fill1' d='M47.802700,42.709600L33.545800,28.452700C33.120500,28.027400,33.173200,27.340100,33.706500,27.061900C35.743500,25.999500,40.753400,24.346700,46.179800,29.773000C51.564700,35.157900,50.183300,40.337600,49.218300,42.501900C48.963300,43.073700,48.245500,43.152400,47.802700,42.709600Z' fill='%23fff' stroke='%23000' stroke-width='1.0px' style='animation-duration: 4s;'%3E%3C/path%3E%3Cpath class='stroke1 fill1' d='M32.246300,27.153200L17.989400,12.896300C17.564100,12.471000,17.616800,11.783700,18.150100,11.505500C20.187100,10.443100,25.197100,8.790250,30.623400,14.216700C36.008300,19.601500,34.626900,24.781200,33.661900,26.945500C33.406900,27.517300,32.689100,27.596000,32.246300,27.153200Z' fill='%23fff' stroke='%23000' stroke-width='1.0px' style='animation-duration: 4s;'%3E%3C/path%3E%3Cpath class='stroke1 fill1' d='M-13,72.915800C-1.825920,66.322400,22.500000,78.863800,22.500000,78.863800L102,78.863800L102,103.416000L49.500000,103.416000L-8.500000,103.416000L-13,72.915800Z' fill='%23fff' stroke='none' stroke-width='1.0px' style='animation-duration: 4s;'%3E%3C/path%3E%3Cpath class='stroke1 fill1' d='M22.500000,78.863800C22.500000,78.863800,-1.825920,66.322400,-13,72.915800L-8.500000,103.416000L49.500000,103.416000M22.500000,78.863800C22.500000,78.863800,50.248600,91.777600,49.500000,103.416000M22.500000,78.863800L102,78.863800L102,103.416000L49.500000,103.416000' fill='none' stroke='%23000' stroke-width='1.0px' style='animation-duration: 4s;'%3E%3C/path%3E%3Cpath class='e1y12elgy0nx15 stroke2' d='M55,85.500000L82.500000,85.500000' stroke='rgba(255,129,0,1)' stroke-width='1.0px' stroke-dashoffset='27.500000' stroke-dasharray='27.500000' style='animation-duration: 4s;'%3E%3C/path%3E%3Cpath class='e1y12elgy0nx16 stroke2' d='M62,91.500000L76,91.500000' stroke='rgba(255,129,0,1)' stroke-width='1.0px' stroke-dashoffset='14' stroke-dasharray='14' style='animation-duration: 4s;'%3E%3C/path%3E%3C/svg%3E"
            />
          : <img
              onClick={() => setDarkMode(true)}
              className="cursor-pointer w-16 h-16 md:w-24 lg:h-24"
              alt="dark mode"
              src= "data:image/svg+xml,%3Csvg viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg' style='width: 249px; height: 249px;'%3E%3Cstyle%3E .line-moon2 %7Banimation:line-moon2-move 3s infinite;%7D @keyframes line-moon2-move %7B 0%25%7Btransform: translate3d(0, -2px, 0);%7D 50%25%7Btransform: translate3d(0, 2px, 0);%7D 100%25%7Btransform: translate3d(0, -2px, 0);%7D %7D @media (prefers-reduced-motion: reduce) %7B .line-moon2 %7B animation: none; %7D %7D %3C/style%3E%3Cg class='line-moon2'%3E%3Cg filter='url(%23filter0_ii)'%3E%3Cpath class='fill2' d='M68.7144 38.481C58.2787 28.2326 63.5364 15.1602 65.1503 11.8103C65.2609 11.5807 64.9994 11.3425 64.7842 11.479C60.0489 14.4849 36.1353 31.2352 58.22 50.333C79.014 67.6937 92.9977 46.176 95.5711 41.729C95.6978 41.51 95.4492 41.2694 95.2251 41.3868C91.9799 43.0869 79.1665 48.7454 68.7144 38.481Z' fill='rgba(136,100,160,1)' stroke-width='1.0px'%3E%3C/path%3E%3C/g%3E%3Cpath class='stroke2' d='M68.7144 38.481C58.2787 28.2326 63.5364 15.1602 65.1503 11.8103C65.2609 11.5807 64.9994 11.3425 64.7842 11.479C60.0489 14.4849 36.1353 31.2352 58.22 50.333C79.014 67.6937 92.9977 46.176 95.5711 41.729C95.6978 41.51 95.4492 41.2694 95.2251 41.3868C91.9799 43.0869 79.1665 48.7454 68.7144 38.481Z' stroke='rgba(0,0,0,1)' stroke-width='1.0px'%3E%3C/path%3E%3C/g%3E%3Cg filter='url(%23filter1_ii)'%3E%3Cpath class='fill1' d='M67.5 79H22C22 79 8 78 8 65.25C8 52.5 22 51.5 22 51.5C22 51.5 28 34.625 42.375 34.625C59 34.625 62.75 46.75 62.75 46.75C62.75 46.75 64.5 46.3182 67.5 47C78.5 49.5 81.5 55.5 81.5 63C81.5 78 67.5 79 67.5 79Z' fill='rgba(166,166,166,1)' stroke-width='1.0px'%3E%3C/path%3E%3C/g%3E%3Cpath class='stroke1' d='M53 53.5C53 53.5 54.1102 50.5 57.5 48.5C59.3613 47.4018 62.75 46.75 62.75 46.75M62.75 46.75C62.75 46.75 64.5 46.3182 67.5 47C78.5 49.5 81.5 55.5 81.5 63C81.5 78 67.5 79 67.5 79H22C22 79 8 78 8 65.25C8 52.5 22 51.5 22 51.5C22 51.5 28 34.625 42.375 34.625C59 34.625 62.75 46.75 62.75 46.75Z' stroke='%23000' stroke-width='1.0px'%3E%3C/path%3E%3Cdefs%3E%3Cfilter id='filter0_ii' x='45.9998' y='6.42785' width='54.6067' height='53.5722' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'%3E%3C/feFlood%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'%3E%3C/feBlend%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'%3E%3C/feColorMatrix%3E%3CfeOffset dx='4' dy='-4'%3E%3C/feOffset%3E%3CfeGaussianBlur stdDeviation='2'%3E%3C/feGaussianBlur%3E%3CfeComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1'%3E%3C/feComposite%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0'%3E%3C/feColorMatrix%3E%3CfeBlend mode='normal' in2='shape' result='effect1_innerShadow'%3E%3C/feBlend%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'%3E%3C/feColorMatrix%3E%3CfeOffset dx='-4' dy='4'%3E%3C/feOffset%3E%3CfeGaussianBlur stdDeviation='1'%3E%3C/feGaussianBlur%3E%3CfeComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1'%3E%3C/feComposite%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0'%3E%3C/feColorMatrix%3E%3CfeBlend mode='normal' in2='effect1_innerShadow' result='effect2_innerShadow'%3E%3C/feBlend%3E%3C/filter%3E%3Cfilter id='filter1_ii' x='5' y='29.625' width='81.5' height='52.375' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'%3E%3C/feFlood%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'%3E%3C/feBlend%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'%3E%3C/feColorMatrix%3E%3CfeOffset dx='4' dy='-4'%3E%3C/feOffset%3E%3CfeGaussianBlur stdDeviation='2'%3E%3C/feGaussianBlur%3E%3CfeComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1'%3E%3C/feComposite%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0'%3E%3C/feColorMatrix%3E%3CfeBlend mode='normal' in2='shape' result='effect1_innerShadow'%3E%3C/feBlend%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'%3E%3C/feColorMatrix%3E%3CfeOffset dx='-4' dy='4'%3E%3C/feOffset%3E%3CfeGaussianBlur stdDeviation='1'%3E%3C/feGaussianBlur%3E%3CfeComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1'%3E%3C/feComposite%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0'%3E%3C/feColorMatrix%3E%3CfeBlend mode='normal' in2='effect1_innerShadow' result='effect2_innerShadow'%3E%3C/feBlend%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E"
            />
        }
    </header>
  )
}
export default Header

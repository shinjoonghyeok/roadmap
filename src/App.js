import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import earth from './assets/img/earth.png'
import mars from './assets/img/mars.png'
import redEarth from './assets/img/redEarth.png'
import nightEarth from './assets/img/nightEarth.png'
import sun from './assets/img/sun.png'
import purpleEarth from './assets/img/purpleEarth.png'
import './app.css'

function App() {
  
  const title1 = '0 | BigBang'
  const title2 = '1 | Proton'
  const title3 = '2 | Helium'
  const title4 = '3 | Atom'
  const title5 = '4 | Idea'

  const context1 = ` 
                      - 프로젝트 공개 및 사이트 오픈\n
                      - 클레이 슬래시 NFT 민팅\n
                      - 에어드랍 이벤트 (20개 한정)\n
                    `
  const context2 = ` 
                      - Klay Slash (2D version) 오픈\n
                      - 홀더 대상 선물 증정 이벤트\n
                      - 굿즈 제작 및 판매\n
                    `
  const context3 = `
                      - Klay Slash (3D version) 오픈
                      - 한정판 NFT이벤트
                    `
  const context4 = `
                      - Klay Slash (VR version) 오픈
                      - 고급 VR 디바이스 증정 이벤트
                    `
  const context5 = `
                      - 클레이 슬래시 토큰 발행.
                      - 스테이킹, 에어드랍.
                    `

  const [img,setImg] = useState(earth);
  const [title,setTitle] = useState(title1)
  const [context,setContext] = useState(context1)

  function changeImg(img){
    console.log('ads')
    console.log(img)
    if(img === earth) return setImg(mars);
    if(img === mars) return setImg(redEarth);
    if(img === redEarth) return setImg(sun);
    if(img === sun) return setImg(purpleEarth);
    if(img === purpleEarth) return setImg(earth)
  }
  function changeTitle(title){
    if(title === title1) return setTitle(title2);
    if(title === title2) return setTitle(title3);
    if(title === title3) return setTitle(title4);
    if(title === title4) return setTitle(title5);
    if(title === title5) return setTitle(title1);

  }
  function changeContext(){
    if(context === context1) return setContext(context2);
    if(context === context2) return setContext(context3);
    if(context === context3) return setContext(context4);
    if(context === context4) return setContext(context5);
    if(context === context5) return setContext(context1);

  }
  
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  return (
    <div className="box-wrap" >
      <div className="box" onClick={ ()=>{ changeImg(img);changeTitle(title);changeContext(context);} }>
        <div className="img" >
          <img src={img}  alt="Hover Effect"/>
        </div>

        <div className="info" >
          <h3 >{title}</h3>
          <div className='context'>{context}</div>
        </div>

      </div>
    </div>
  );
}

export default App;

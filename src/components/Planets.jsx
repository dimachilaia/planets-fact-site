import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import wkpdImage from '../assets/icon-source.svg';
import DesktopForm from './DesktopForm';
import PlanetElements from './PlanetElements';
import PlanetsHeader from './PlanetsHeader';



const Planets = ({data, barIsOpen, colors, global}) => {
  const {name} = useParams()

  const [active, setActive] = useState(null)
  const [type, setType] = useState('overview')

 const planet = !global ? data.find((item)=>item.name === name) : data.find((item)=>item.name === 'Mars');
  const overview = ['overview', 'structure', 'geology'];



  const findPlanetIndex = data.findIndex((item)=>item.name === name);
  
  const activeHandler = (name)=>{
   const activeoverview = overview.filter((item)=>item === name);
   setActive(name)
   setType(activeoverview)
 }

 useEffect(()=>{
  setActive('overview')
 },[data])

 
  return (
    !barIsOpen && <MainDiv>
    <FilterHeader>
      <Overview color={colors[findPlanetIndex]}> 
    {overview.map((item, index)=>{
          return <div key={index} onClick={()=>activeHandler(item)} className={`${active === item && 'active'}`}>{item}</div>
      })}
      </Overview>

    <PlanetsHeader data={data} activeHandler={activeHandler} setActive={setActive}  active={active} colors={colors}/>
    
    </FilterHeader>


      <hr style={{opacity:'0.2', background:'#FFFFFF', mixBlendMode:'normal',height:'1px'}}/>
      
      <PlanetElements planet={planet} type={type}/>
      
       <DesktopForm planet={planet} active={active} overview={overview} setActive={setActive} setType={setType} type={type} colors={colors} data={data}/>

      <DesktopOverview color={colors[findPlanetIndex]}>
      {overview.map((item, index)=>{
        return <div key={index} onClick={()=>activeHandler(item)} className={`${active === item && 'active'}`}>{item}</div>
      })}
      </DesktopOverview>
      
    <StyledElements barIsOpen={barIsOpen} style={{color:'white'}} key={planet.name} >
    
      <DesktopImg>
        <img src={active !== 'structure' ?process.env.PUBLIC_URL + planet.images.planet  : process.env.PUBLIC_URL + planet.images.internal} alt={name} />
        </DesktopImg>
        {active === 'geology' && <GeologyImage src={ process.env.PUBLIC_URL + planet.images.geology}/>}
        <PlanetType >
        <h4>{planet.name}</h4>
          <p>{planet[type].content}</p>
          <a href={planet.overview.source} target="blank">Source: Wikipedia:  
          <img src={wkpdImage} alt="wikipedia-image"/>
        </a>
      </PlanetType>
       
        
        <PlanetsStatistic>
         <div>
           <span style={{opacity:'0.4', fontSize:'12px', fontFamily:'Spartan', lineHeight:'15px'}}>ROTATION TIME: </span>
           <span>{planet.rotation}</span> 
         </div>

         <div>
           <span style={{opacity:'0.4', fontSize:'12px', fontFamily:'Spartan', lineHeight:'15px'}}>REVOLUTION TIME: </span>
           <span >{planet.revolution}</span> 
         </div>

         <div>
           <span style={{opacity:'0.4', fontSize:'12px', fontFamily:'Spartan', lineHeight:'15px'}}>PLANET RADIUS: </span>
           <span >{planet.radius}</span> 
         </div>

         <div>
           <span style={{opacity:'0.4', fontSize:'11px', fontFamily:'Spartan', lineHeight:'15px'}}>AVERAGE TEMP: </span>
           <span >{planet.temperature}</span> 
         </div>
        </PlanetsStatistic>
      
        </StyledElements>
    </MainDiv>
    )
}

export default Planets
const MainDiv = styled.div`
`
const FilterHeader = styled.div`
padding:16px 24px;
 /* padding:16px 24px;
 @media screen and (min-width: 768px) {
      display:none;
    } */
`
const StyledElements = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    @media screen and (min-width: 768px) {
      img{
        display:none;
      }
  }
    
  /* display:flex;
  flex-direction:column;
  align-items:center;
  height:50vh;
  
  img{
    margin-top:55px;
  @media screen and (min-width: 768px) {
    transform:translateY(-80px);
    }
    @media screen and (min-width: 1024px) {
    }
  }
  h4{
    font-family: 'Antonio';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 52px;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-top:80px;
  }
  p{
    font-family: 'Spartan';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
    margin-top:16px;
    width:327px;
  }

  a{
    transform:translateY(-30px);
    font-family: 'Spartan';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 25px;
    text-decoration:none;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.5;
  }
  a:hover{
    color:red;
  } */
`
const DesktopImg = styled.div`
margin-top:100px;
img{
  width:200px;
}
/* img{
  width:180px;
  @media screen and (min-width: 1024px) {
      width:400px;
      transform:translate(300px, -290px)
  } 
 } */
`

// * პლანეტების დასახელება (ვიკიპ) * //
const PlanetType = styled.div`
padding:10px 20px;
  h4{
    color: #FFFFFF;
    text-transform: uppercase;
    text-align: center;
    font-size: 40px;
    margin-top:50px;
    font-family: 'Antonio';
    font-style: normal;
    font-weight: 400;
  }
  p{
    color: #FFFFFF;
    font-family: 'Spartan';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    width:327px;
    text-align:center;
    line-height: 22px;
    margin-top:20px;
    opacity:0.7;
  }
  a{
    font-family: 'Spartan';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 25px;
    text-decoration:none;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.5;
    text-decoration:underline;
  }
  img{
    margin-top:25px;
  }
  @media screen and (min-width: 768px) {
      display:none;
    } 

/* display:flex;
flex-direction:column;
text-align:center;
   @media screen and (min-width: 768px) {
    margin-top:70px;
      width:50%;
     display:flex;
     flex-direction:column;
     align-items:flex-start;
     transform:translate(-150px,-150px);
     p{
      text-align:start;
      font-size: 13.4px;
      opacity:0.6;
     }
     img{
      transform:translateY(2px)
     }
    }

    @media screen and (min-width: 1024px) {
      display:none;
    } */


`

const Overview = styled.div`
display:flex;
justify-content:space-between;
    div{
      font-family: 'Spartan';
    font-style: normal;
    font-weight: 700;
    font-size: 10.5px;
    line-height: 10px;
    text-align: center;
    cursor:pointer;
    letter-spacing: 1.92857px;
    text-transform: uppercase;
    color: #FFFFFF;
    }

  .active{
    text-decoration: underline;
    text-decoration-thickness: 5px;
    text-decoration-color: ${props=>props.color};
    text-underline-offset: 12px;
  }
  /* div:hover{
    text-decoration: underline;
    text-decoration-thickness: 5px;
    text-underline-offset: 12px;
    text-decoration-color: ${props=>props.color};
    text-shadow: inset 100px 0 0 0 #54b3d6;
    transform-origin: bottom left;
  }   */
   @media screen and (min-width: 768px) {
      display:none;
    }
`



const PlanetsStatistic = styled.div`
opacity:0.9;
    @media screen and (min-width: 768px) {
      display:flex;
      width:84%;
      gap:25px;
    }
   

  div{

    mix-blend-mode: normal;
    border: 1px solid #fff;
    width: 327px;
    height: 48px;
    display:flex;
    margin-top:10px;
    justify-content:space-around;
    align-items:center;
    @media screen and (min-width: 768px) {
      display:flex;
      flex-direction:column;
      height:88px;
    }
  }
  span{
    letter-spacing: -0.75px;
    text-transform: uppercase;
    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  } 

`
const GeologyImage = styled.img`
width:80px;
position:absolute;
top:40%;

@media screen and (min-width: 768px) {
  display:none;
 } 
 /* width:80px;
 position:absolute;
 transform:translateY(50px);

 @media screen and (min-width: 1024px) {
    margin-left:300px;
    width:120px;
    } */

`
const DesktopOverview = styled.div`
display:none;

  /* display:none;
  @media screen and (min-width: 768px) {
      display:flex;
      gap:10px;
      flex-direction:column;
      align-items:flex-end;
      transform:translate(0, 420px);
      margin-right:50px;
  }
  @media screen and (min-width: 1024px) {
    transform:translateX(88px);
    align-items:flex-start;
    padding:10px 50px;
  }

  div{
    font-family: 'Spartan';
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 10px;
    cursor:pointer;
    width:30%;
    letter-spacing: 1.92857px;
    text-transform: uppercase;
    color: #FFFFFF;
    padding:18px 32px;
    background: #070724;
    border:1px solid #FFFFFF;
  }
  .active{
    display:block;
    text-decoration-color: ${props=>props.color};
    background-color: ${props=>props.color};
  } */
   
`
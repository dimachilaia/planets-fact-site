import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import wkpdImage from '../assets/icon-source.svg';



const Planets = ({data, barIsOpen, colors, global}) => {
  const {name} = useParams()
  const [active, setActive] = useState(null)
  const [type, setType] = useState('overview')

 const planet = !global ? data.find((item)=>item.name === name) : data.find((item)=>item.name === 'Mars');
  const overview = ['overview', 'structure', 'geology']; 
  const findPlanetIndex = data.findIndex((item)=>item.name === name);
  
  const activeHandler = (name)=>{
   const activeoverview = overview.filter((item)=>item === name);
   setActive(activeoverview)
   setType(activeoverview)
 }

  return (
    !barIsOpen && <MainDiv>
    <FilterHeader>
    <Overview color={colors[findPlanetIndex]}> 
    {overview.map((item, index)=>{
          return <div key={index} onClick={()=>activeHandler(item)} className={`${active === item && 'active'}`}>{item}</div>
      })}
      </Overview>
    </FilterHeader>
      <hr style={{opacity:'0.2', background:'#FFFFFF', mixBlendMode:'normal',height:'1px'}}/>

    <StyledElements barIsOpen={barIsOpen} style={{color:'white'}} key={planet.name}>
        <img src={process.env.PUBLIC_URL + planet.images.planet} alt={name} style={{width:'111px', height:'111px'}}/>
        <h4>{planet.name}</h4>
        <p>{planet[type].content}</p>
        <a href={planet.overview.source} target="blank">Source: Wikipedia:  <img src={wkpdImage} alt="wikipedia-image"/></a>
        
        <PlanetsStatistic>
         <div>
           <span style={{opacity:'0.4', fontSize:'11px', fontFamily:'Spartan', lineHeight:'15px'}}>ROTATION TIME: </span>
           <span>{planet.rotation}</span> 
         </div>

         <div>
           <span style={{opacity:'0.4', fontSize:'11px', fontFamily:'Spartan', lineHeight:'15px'}}>REVOLUTION TIME: </span>
           <span >{planet.revolution}</span> 
         </div>

         <div>
           <span style={{opacity:'0.4', fontSize:'11px', fontFamily:'Spartan', lineHeight:'15px'}}>PLANET RADIUS: </span>
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
 transform:translateY(-460px);
`
const FilterHeader = styled.div`
 padding:16px 24px;
`
const StyledElements = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  img{
    margin-top:116px;
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
    transform:translateY(-90px);
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
  }
`

const Overview = styled.div`
  display:flex;
  gap:20px;
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
    display:block;
    /* background: ${props => props.color}; */
    text-decoration: underline;
    text-decoration-thickness: 5px;
    text-decoration-color: ${props=>props.color};
    text-underline-offset: 12px;
  }
  div:hover{
    text-decoration: underline;
    text-decoration-thickness: 5px;
    text-underline-offset: 12px;
    text-decoration-color: ${props=>props.color};
    text-shadow: inset 100px 0 0 0 #54b3d6;
    transform-origin: bottom left;
  } 
`

const PlanetsStatistic = styled.div`
    transform:translateY(-40px);
    opacity:0.9;

  div{
    mix-blend-mode: normal;
    border: 1px solid #fff;
    width: 327px;
    height: 48px;
    display:flex;
    margin-top:10px;
    justify-content:space-around;
    align-items:center;
  }
  span{
    letter-spacing: -0.75px;
    text-transform: uppercase;
  }
`

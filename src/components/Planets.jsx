import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import wkpdImage from '../assets/icon-source.svg';



const Planets = ({data, barIsOpen, colors}) => {
  const {name} = useParams()

 const filterPlanets = data.filter((item)=>item.name === name)
 const overview = ['overview', 'structure', 'geology'];
 const findPlanetIndex = data.findIndex((item)=>item.name === name);


  return (
    !barIsOpen && <MainDiv>
    <FilterHeader>
    <Overview color={colors[findPlanetIndex]}> 
    {overview.map((item, index)=>{
          return <div key={index}>{item}</div>
        })}
      </Overview>
    </FilterHeader>
      <hr style={{opacity:'0.2', background:'#FFFFFF', mixBlendMode:'normal',height:'1px'}}/>

      {filterPlanets.map((item)=>{
        return <StyledElements barIsOpen={barIsOpen} style={{color:'white'}} key={item.name} >
        <img src={process.env.PUBLIC_URL + item.images.planet} alt={name} style={{width:'111px', height:'111px'}}/>
        <h4>{item.name}</h4>
        <p>{item.overview.content}</p>
        <a href={item.overview.source}>Source: Wikipedia:  <img src={wkpdImage} alt="wikipedia-image"/></a>
        
        <PlanetsStatistic>
         <div>
           <span style={{opacity:'0.4', fontSize:'11px', fontFamily:'Spartan', lineHeight:'15px'}}>ROTATION TIME: </span>
           <span>{item.rotation}</span> 
         </div>

         <div>
           <span style={{opacity:'0.4', fontSize:'11px', fontFamily:'Spartan', lineHeight:'15px'}}>REVOLUTION TIME: </span>
           <span >{item.revolution}</span> 
         </div>

         <div>
           <span style={{opacity:'0.4', fontSize:'11px', fontFamily:'Spartan', lineHeight:'15px'}}>PLANET RADIUS: </span>
           <span >{item.radius}</span> 
         </div>

         <div>
           <span style={{opacity:'0.4', fontSize:'11px', fontFamily:'Spartan', lineHeight:'15px'}}>AVERAGE TEMP: </span>
           <span >{item.temperature}</span> 
         </div>
        </PlanetsStatistic>
      
        </StyledElements>
      })}
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
  div:hover{
    /* background: ${props => props.color}; */
    text-decoration:underline;
    text-decoration: underline;
    text-decoration-thickness: 5px;
    text-decoration-color: ${props=>props.color};
    text-underline-offset: 12px;

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

import React from 'react'
import styled from 'styled-components'
import wkpdImage from '../assets/icon-source.svg';
import { useParams } from 'react-router-dom';

const DesktopForm = ({planet, active, overview, setActive, setType, type, colors, data}) => {
  const {name} = useParams()
  
  const findPlanetIndex = data.findIndex((item)=>item.name === name);

  const activeHandler = (name)=>{
    const activeoverview = overview.filter((item)=>item === name);
    setActive(name)
    setType(activeoverview)
  }
  return (
    <DesktopCont>
     <MainImage>
      <img src={active !== 'structure' ?process.env.PUBLIC_URL + planet.images.planet  : process.env.PUBLIC_URL + planet.images.internal}/>
    {active === 'geology' && <GeologyImage src={ process.env.PUBLIC_URL + planet.images.geology} style={{width:'80px'}}/>}
    </MainImage>
    
    <ForFlex>
      <PlanetDescr>
          <h4>{planet.name}</h4>
          <p>{planet[type].content}</p>
          <a href={planet.overview.source} target="blank">Source: Wikipedia:  
          <img src={wkpdImage} alt="wikipedia-image"/>
        </a>
    </PlanetDescr>

    <ForOverview color={colors[findPlanetIndex]}>
        {overview.map((item, index)=>{
          return <div key={index} onClick={()=>activeHandler(item)} className={`${active === item && 'active'}`}>{item}</div>
        })}
      </ForOverview>
    </ForFlex>
    </DesktopCont>
  )
}

export default DesktopForm


const DesktopCont = styled.div`
  display:none;

    @media screen and (min-width: 768px) {
        display:flex;
        flex-direction:column;
  }
  @media screen and (min-width: 1024px) {
        display:flex;
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
  }
`
const MainImage = styled.div`
margin:0 auto;
margin-top:70px;
img{
  width:180px;
 }
@media screen and (min-width: 1024px) {
        img{
          width:300px;
        }
  }



`
const GeologyImage = styled.img`
    position:absolute;
    transform:translate(-130px, 95px);
    @media screen and (min-width: 1024px) {
    transform:translate(-190px, 255px);
  }
`



const ForFlex = styled.div`
  display:flex;
  @media screen and (min-width: 1024px) {
    margin-left:80px;
  }
`

const PlanetDescr = styled.div`
  width:340px;
  margin:0 auto;
  margin-top:50px;
  margin-left:85px;
  align-items:center;
  h4{
    font-family: 'Antonio';
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 62px;
  text-transform: uppercase;
  color: #FFFFFF;
  }
  p{
    font-family: 'Spartan';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    margin-top:25px;
    color: #FFFFFF;
  }
 
`

const ForOverview = styled.div`
    width:400px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin:0 auto;
    gap:10px;
    transform:translateY(30px);
    

 div{
  mix-blend-mode: normal;
  border: 1px solid #FFFFFF;
  padding:10px 20px;
  cursor:pointer;
  margin-right:45px;
 }
 .active{
    display:block;
    text-decoration-color: ${props=>props.color};
    background-color: ${props=>props.color};
  } 
 
`
import {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'



const PlanetsHeader = ({data,active, colors}) => {
    const {name} = useParams()
    const findPlanetIndex = data.findIndex((item)=>item.name === name);

  return (
    <div>
    <PlanetsTitle>THE PLANETS</PlanetsTitle>
  
    <HeaderPlanets color={colors[findPlanetIndex]}> 
        {data.map((item, index)=>{
            return <HeaderComponent to={`/planets/${item.name}`} key={index} className={`${active === item.name && 'active'}`} >
                <h3>{item.name}</h3>
            </HeaderComponent>
        })}
        </HeaderPlanets>
    </div>
  )
}

export default PlanetsHeader

const PlanetsTitle = styled.h1`
display:none;
@media screen and (min-width: 1024px) {
  display:flex;
  font-family: 'Antonio';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -1.05px;
    text-transform: uppercase;
    margin-left:50px;
    transform:translateY(10px);
    color: #FFFFFF;
  }
`

const HeaderPlanets = styled.div`
  display:none;
  @media screen and (min-width: 768px) {
     display:flex;
     justify-content:space-evenly;
   
   .active{
    display:block;
    text-decoration: underline;
    text-decoration-thickness: 4px;
    text-decoration-color: ${props=>props.color};
    text-underline-offset: 10px;
  }
  
  h3{
    opacity:0.87;
    color: #FFFFFF;
    font-family: 'Spartan';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    transform:translateY(-25px);
    letter-spacing: 1px;
    :hover{
    opacity:0.6;
    transition: 0.3s;
    }
  }
  @media screen and (min-width: 1024px) {
    display:flex;
    justify-content:flex-end;
    gap:20px;
    margin-right:35px;
    align-items:center;
  }
 }
`

const HeaderComponent = styled(NavLink)`
 @media screen and (min-width: 768px) {
    text-decoration:none;
    font-family: 'Antonio';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 36px;
    margin-top:15px;
    color:white;
    letter-spacing: -1.05px;
    text-transform:uppercase;
 }
`
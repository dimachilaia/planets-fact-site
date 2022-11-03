import {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'



const PlanetsHeader = ({data, setActive,active, colors}) => {
    const {name} = useParams()
    const findPlanetIndex = data.findIndex((item)=>item.name === name);

    useEffect(()=>{
        setActive('overview')
       },[])

  return (
    <div>
    <HeaderPlanets color={colors[findPlanetIndex]}> 
        {data.map((item, index)=>{
            return <HeaderComponent to={`/planets/${item.name}`} key={item.name} className={`${active === item.name && 'active'}`} >
                <p>{item.name}</p>
            </HeaderComponent>
        })}
        </HeaderPlanets>
    </div>
  )
}

export default PlanetsHeader


const HeaderPlanets = styled.div`
  display:none;
  @media screen and (min-width: 768px) {
     display:flex;
     gap:20px;
     justify-content:space-evenly;
   
   .active{
    display:block;
    text-decoration: overline;
    text-decoration-thickness: 5px;
    text-decoration-color: ${props=>props.color};
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
    color:white;
    letter-spacing: -1.05px;
    text-transform: uppercase;
 }
`
import styled from 'styled-components'
import data from '../data.json'
import chevronIcon from '../assets/icon-chevron.svg'
import {Link} from 'react-router-dom'

const Header = ({colors, barIsOpen, setBarIsOpen}) => {


  return (
    <MainHeader >
        <nav>
           <PlanetTitle to="/planets-fact-site">THE PLANETS</PlanetTitle>
            <svg style={{marginTop:'10px'}} onClick={()=>setBarIsOpen((prev)=>!prev)} xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fill={barIsOpen ? 'rgba(255,255,255,0.5)' : '#FFF'}  fillRule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"/></g></svg>
          </nav>
           
           <hr style={{opacity:'0.2', background:'#FFFFFF', mixBlendMode:'normal',height:'1px'}}/>

       <Menu barIsOpen={barIsOpen}> 
         {data.map((item, index)=>{
            return <Items key={index}> 
             <Elements color = {colors[index]} to={`/planets/${item.name}`} onClick={()=>setBarIsOpen(false)}>
                <div>
                <span></span>
                 <p>{item.name}</p>
                </div>
                <img src={chevronIcon} alt="chevronicon"/>
             </Elements>
            <hr style={{opacity:'0.07', background:'#FFFFFF', mixBlendMode:'normal',height:'1px'}}/>
            </Items>
         })}


       </Menu>
    </MainHeader>
  )
}

export default Header


const MainHeader = styled.div`
 nav{
    padding:16px 24px;
    display:flex;
    justify-content:space-between;
 }
 @media screen and (min-width: 768px) {
     svg{
      display:none;
     }
    }
    @media screen and (min-width: 768px) {
     hr{
      display:none;
     }
    }   
`
const PlanetTitle= styled(Link)`
    text-decoration:none;
    font-family: 'Antonio';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 36px;
    color:white;
    letter-spacing: -1.05px;
    text-transform: uppercase;
    @media screen and (min-width: 768px) {
      margin:0 auto;
    }
    @media screen and (min-width: 1024px) {
      display:none;
    }
`

const Menu = styled.div`
  display:flex;
  flex-direction:column;
  transition:0.25s ;
  font-size: 15px;
  position:absolute;
  width:100%;
  top:15%;  
  z-index: 1;
  background: #070724;
  transform: ${props => props.barIsOpen ? 'translateX(12)' : 'translateX(-120%)'};
  @media screen and (min-width: 768px) {
      display:none;
    }
`

const Items = styled.div`
    
p{
    color: #FFFFFF;
    letter-spacing: 1.36364px;
    text-transform: uppercase;
    font-family: 'Spartan';
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
}

img{
    cursor:pointer;
}

img:hover{
  opacity:0.6;
}
`

const Elements = styled(Link)`
    display:flex;
    justify-content:space-between;
    list-style: none;
    text-decoration: none;
    align-items:center;
    padding:16px 24px;

 div{
    display:flex;
    align-items:center;
    gap:25px;
 }
 span{
   border-radius:10px;
   width:20px;
   height:20px;
   border-radius: 50%;
   background: ${props => props.color};
 }
`
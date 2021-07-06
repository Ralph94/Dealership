import React, { useState, useRef, useEffect } from 'react';
import Truck1 from './ford.jpg';
import Truck2 from './Toyota_truck.jpg';
import Truck3 from './dodge.jpg';
import Truck4 from './dodge2.jpg';
import Truck5 from './ram.jpg';
import Jeep1 from './jeepc.jpg';
import Jeep2 from './jeepr.jpg';
import Jeep3 from './jeepw.jpg';
import Jeep4 from './jeepl.jpg';
import Jeep5 from './jeeps.jpg';
import Car1 from './cart.jpg';
import Car2 from './carc.jpg';
import Car3 from './carr.jpg';
import Car4 from './carff.jpg';
import Car5 from './fordff.jpg';
import Suv1 from './suvv.jpg';
import Suv2 from './suvh.jpg';
import Suv3 from './suvf.jpg';
import Suv4 from './suvo.jpg';
import Suv5 from './suva.jpg';
import Van1 from './vans.jpg';
import Van2 from './vanss.jpg';
import Van3 from './vanf.jpg';
import Van4 from './vanb.jpg';
import Van5 from './vanc.jpg';
import SC1 from './scf.jpg';
import SC2 from './scff.jpg';
import SC3 from './sct.jpg';
import SC4 from './scp.jpg';
import SC5 from './scc.jpg';
import FordI from './fordI.jpg';
import FordI2 from './fordI2.jpg';
import FordI3 from './fordI3.jpg';
import TacomaI from './ti.jpg';
import TacomaI2 from './ti2.jpg';
import TacomaI3 from './ti3.jpg';
import DodgeI from './DodgeI.jpg';
import DodgeI2 from './DodgeI2.jpg';
import DodgeI3 from './DodgeI3.jpg'
import Dodge2I from './Dodge2I.jpg';
import Dodge2I2 from './Dodge2I2.jpg';
import Dodge2I3 from './Dodge2I3.jpg'
import RamI from './ramI.jpg';
import RamI2 from './ramI2.jpg';
import RamI3 from './ramI3.jpg';
import JeepcI from './jeepcI.jpg';
import JeepcI2 from './jeepcI2.jpg';
import JeepcI3 from './jeepcI3.jpg';
import JeeprI from './jeeprI.jpg';
import JeeprI2 from './jeeprI2.jpg';
import JeeprI3 from './jeeprI3.jpg';
import Jeepl1 from './jeepl1.jpg';
import Jeepl2 from './jeepl2.jpg';
import Jeepl3 from './jeepl3.jpg';
import JeepwI from './jeepwI.jpg';
import JeepwI2 from './jeepwI2.jpg';
import JeepwI3 from './jeepwI3.jpg';
import JeepsI from './jeepsI.jpg';
import JeepsI2 from './jeepsI2.jpg';
import JeepsI3 from './jeepsI3.jpg';
import TCI from './TCI.jpg';
import TCI2 from './TCI2.jpg';
import TCI3 from './TCI3.jpg';
import TC2I from './TC2I.jpg';
import TC2I2 from './TC2I2.jpg';
import TC2I3 from './TC2I3.jpg';
import TRDI from './TRDI.jpg';
import TRDI2 from './TRDI2.jpg';
import TRDI3 from './TRDI3.jpg';
import FI from './FI.jpg';
import FI2 from './FI2.jpg';
import FI3 from './FI3.jpg';
import SEI from './SEI.jpg';
import SEI2 from './SEI2.jpg';
import SEI3 from './SEI3.jpg';
import RVI from './RVI.jpg';
import RVI2 from './RVI2.jpg';
import RVI3 from './RVI3.jpg';
import RV2I from './RV2I.jpg';
import RV2I2 from './RV2I2.jpg';
import RV2I3 from './RV2I3.jpg';
import SOI from './SOI.jpg';
import SOI2 from './SOI2.jpg';
import SOI3 from './SOI3.jpg';
import SFI from './SFI.jpg';
import SFI2 from './SFI2.jpg';
import SFI3 from './SFI3.jpg';
import SF2I from './SF2I.jpg';
import SF2I2 from './SF2I2.jpg';
import SF2I3 from './SF2I3.jpg';
import LMI from './LMI.jpg';
import LMI2 from './LMI2.jpg';
import LMI3 from './LMI3.jpg';
import TVI from './TVI.jpg';
import TVI2 from './TVI2.jpg';
import TVI3 from './TVI3.jpg';
import FMI from './FMI.jpg';
import FMI2 from './FMI2.jpg';
import FMI3 from './FMI3.jpg';
import VEI from './VEI.jpg';
import VEI2 from './VEI2.jpg';
import VEI3 from './VEI3.jpg';
import CEI from './CEI.jpg';
import CEI2 from './CEI2.jpg';
import CEI3 from './CEI3.jpg';
import FFI from './FFI.jpg';
import FFI2 from './FFI2.jpg';
import FFI3 from './FFI3.jpg';
import JI1 from './JI1.jpg';
import JI2 from './JI2.jpg';
import JI3 from './JI3.jpg';
import F8I1 from './F8I1.jpg';
import F8I2 from './f8I2.jpg';
import F8I3 from './f8I3.jpg';
import CarBG from './carbg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDhl } from '@fortawesome/free-brands-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillWaveAlt } from '@fortawesome/free-solid-svg-icons';







import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: TacomaI,
    thumbnail: TacomaI,
  },

  {
    original: TacomaI2,
    thumbnail: TacomaI2,
  },

   {
    original: TacomaI3,
    thumbnail: TacomaI3,
  },

 ];


 const imageF = [
  {
    original: FordI,
    thumbnail: FordI,
  },

  {
    original: FordI2,
    thumbnail: FordI2,
  },

   {
    original: FordI3,
    thumbnail: FordI3,
  },

 ];


 const imageD = [
  {
    original: DodgeI,
    thumbnail: DodgeI,
  },

  {
    original: DodgeI2,
    thumbnail: DodgeI2,
  },

   {
    original: DodgeI3,
    thumbnail: DodgeI3,
  },

 ];



 const imageD2 = [
  {
    original: Dodge2I,
    thumbnail: Dodge2I,
  },

  {
    original: Dodge2I2,
    thumbnail: Dodge2I2,
  },

   {
    original: Dodge2I3,
    thumbnail: Dodge2I3,
  },

 ];


 const imageR = [
  {
    original: RamI,
    thumbnail: RamI,
  },

  {
    original: RamI2,
    thumbnail: RamI2,
  },

   {
    original: RamI3,
    thumbnail: RamI3,
  },

 ];


   const imageJC = [
  {
    original: JeepcI,
    thumbnail: JeepcI,
  },

  {
    original: JeepcI2,
    thumbnail: JeepcI2,
  },

   {
    original: JeepcI3,
    thumbnail: JeepcI3,
  },

 ];



const imageJR = [
  {
    original: JeeprI,
    thumbnail: JeeprI,
  },

  {
    original: JeeprI2,
    thumbnail: JeeprI2,
  },

   {
    original: JeeprI3,
    thumbnail: JeeprI3,
  },

 ];


 const imageJW = [
  {
    original: Jeepl1,
    thumbnail: Jeepl1,
  },

  {
    original: Jeepl2,
    thumbnail: Jeepl2,
  },

   {
    original: Jeepl3,
    thumbnail: Jeepl3,
  },

 ];


  const imageJL = [
  {
    original: JeepwI,
    thumbnail: JeepwI,
  },

  {
    original: JeepwI2,
    thumbnail: JeepwI2,
  },

   {
    original: JeepwI3,
    thumbnail: JeepwI3,
  },

 ];


   const imageJS = [
  {
    original: JeepsI,
    thumbnail: JeepsI,
  },

  {
    original: JeepsI2,
    thumbnail: JeepsI2,
  },

   {
    original: JeepsI3,
    thumbnail: JeepsI3,
  },

 ];


 const imageTC = [
  {
    original: TCI,
    thumbnail: TCI,
  },

   {
    original: TCI2,
    thumbnail: TCI2,
  },

   {
    original: TCI3,
    thumbnail: TCI3,
  },

 ];


  const imageTC2 = [
  {
    original: TC2I,
    thumbnail: TC2I,
  },

   {
    original: TC2I2,
    thumbnail: TC2I2,
  },

   {
    original: TC2I3,
    thumbnail: TC2I3,
  },
 ];


 const imageTRD = [
  {
    original: TRDI,
    thumbnail: TRDI,
  },

   {
    original: TRDI2,
    thumbnail: TRDI2,
  },

   {
    original: TRDI3,
    thumbnail: TRDI3,
  },
 ];

  const imageFI = [
  {
    original: FI,
    thumbnail: FI,
  },

   {
    original: FI2,
    thumbnail: FI2,
  },

   {
    original: FI3,
    thumbnail: FI3,
  },
 ];

  const imageSE = [
  {
    original: SEI,
    thumbnail: SEI,
  },

   {
    original: SEI2,
    thumbnail: SEI2,
  },

   {
    original: SEI3,
    thumbnail: SEI3,
  },
 ];

  const imageRV = [
  {
    original: RVI,
    thumbnail: RVI,
  },

   {
    original: RVI2,
    thumbnail: RVI2,
  },

   {
    original: RVI3,
    thumbnail: RVI3,
  },
 ];

 const imageRV2 = [
  {
    original: RV2I,
    thumbnail: RV2I,
  },

   {
    original: RV2I2,
    thumbnail: RV2I2,
  },

   {
    original: RV2I3,
    thumbnail: RV2I3,
  },
 ];

 const imageSO = [
  {
    original: SOI,
    thumbnail: SOI,
  },

   {
    original: SOI2,
    thumbnail: SOI2,
  },

   {
    original: SOI3,
    thumbnail: SOI3,
  },
 ];

 const imageSF = [
  {
    original: SFI,
    thumbnail: SFI,
  },

   {
    original: SFI2,
    thumbnail: SFI2,
  },

   {
    original: SFI3,
    thumbnail: SFI3,
  },
 ];

 const imageSF2 = [
  {
    original: SF2I,
    thumbnail: SF2I,
  },

   {
    original: SF2I2,
    thumbnail: SF2I2,
  },

   {
    original: SF2I3,
    thumbnail: SF2I3,
  },
 ];

  const imageLM = [
  {
    original: LMI,
    thumbnail: LMI,
  },

   {
    original: LMI2,
    thumbnail: LMI2,
  },

   {
    original: LMI3,
    thumbnail: LMI3,
  },
 ];

 const imageTV = [
  {
    original: TVI,
    thumbnail: TVI,
  },

   {
    original: TVI2,
    thumbnail: TVI2,
  },

   {
    original: TVI3,
    thumbnail: TVI3,
  },
 ];

 const imageFM = [
  {
    original: FMI,
    thumbnail: FMI,
  },

   {
    original: FMI2,
    thumbnail: FMI2,
  },

   {
    original: FMI3,
    thumbnail: FMI3,
  },
 ];

  const imageVE = [
  {
    original: VEI,
    thumbnail: VEI,
  },

   {
    original: VEI2,
    thumbnail: VEI2,
  },

   {
    original: VEI3,
    thumbnail: VEI3,
  },
 ];

  const imageCE = [
  {
    original: CEI,
    thumbnail: CEI,
  },

   {
    original: CEI2,
    thumbnail: CEI2,
  },

   {
    original: CEI3,
    thumbnail: CEI3,
  },
 ];


  const imageFF = [
  {
    original: FFI,
    thumbnail: FFI,
  },

   {
    original: FFI2,
    thumbnail: FFI2,
  },

   {
    original: FFI3,
    thumbnail: FFI3,
  },
 ];

 const imageJI = [
  {
    original: JI1,
    thumbnail: JI1,
  },

   {
    original: JI2,
    thumbnail: JI2,
  },

   {
    original: JI3,
    thumbnail: JI3,
  },
 ];

   const imageF8 = [
  {
    original: F8I1,
    thumbnail: F8I1,
  },

   {
    original: F8I2,
    thumbnail: F8I2,
  },

   {
    original: F8I3,
    thumbnail: F8I3,
  },
 ];



function Car() {
 const  [truckDropDown, setTruckDropDown] = useState(false)
  const [jeepDropDown, setJeepDropDown] = useState(false)
  const [carDropDown, setCarDropDown] = useState(false)
  const [suvDropDown, setSuvDropDown] = useState(false)
  const [vanDropDown, setVanDropDown] = useState(false)
  const [scarDropDown, setScarDropDown] = useState(false)
  const  [showPopUp, setShowPopUp] = useState(false)
  const  [selectedPopUp, setSelectedPopUp] = useState("")

 function handleShowPopUp(e) {
 e.preventDefault()
 console.log(e)
 setSelectedPopUp(e.target.id)
 setShowPopUp(true)
 }
const ref = useRef(null);

useEffect(() => {

       function handleClickOutside(event) {
           if (ref.current && !ref.current.contains(event.target)) {
               setSelectedPopUp("")
               setShowPopUp(false);
           }
       }

       // Bind the event listener
       document.addEventListener("mousedown", handleClickOutside);
       return () => {
           // Unbind the event listener on clean up
           document.removeEventListener("mousedown", handleClickOutside);
       };
   },
   [ref]);
 const popUp = (
 <div className="pop-up-wrapper">
    <div className="pop-up-body" ref={ref}>


       {chooseImage()}

    </div>
</div>
)



function chooseImage () {
    if (selectedPopUp === "toyota_truck") {
        return(<div className="img-gallery">
       <ImageGallery items={images} /></div>)
    } else if (selectedPopUp === "ford") {
        return(<div className="img-gallery">
       <ImageGallery items={imageF} /></div>)
    } else if (selectedPopUp === "dodge") {
         return(<div className="img-gallery">
       <ImageGallery items={imageD} /></div>)
    } else if (selectedPopUp === "dodge2") {
         return(<div className="img-gallery">
       <ImageGallery items={imageD2} /></div>)
    } else if (selectedPopUp === "ram") {
         return(<div className="img-gallery">
       <ImageGallery items={imageR} /></div>)
    } else if (selectedPopUp === "jeepc") {
         return(<div className="img-gallery">
       <ImageGallery items={imageJC} /></div>)
    } else if (selectedPopUp === "jeepr") {
         return(<div className="img-gallery">
       <ImageGallery items={imageJR} /></div>)
    } else if (selectedPopUp === "jeepw") {
         return(<div className="img-gallery">
       <ImageGallery items={imageJW} /></div>)
    } else if (selectedPopUp === "jeepl") {
         return(<div className="img-gallery">
       <ImageGallery items={imageJL} /></div>)
    } else if (selectedPopUp === "jeeps") {
         return(<div className="img-gallery">
       <ImageGallery items={imageJS} /></div>)
    } else if (selectedPopUp === "cart") {
         return(<div className="img-gallery">
       <ImageGallery items={imageTC} /></div>)
     } else if (selectedPopUp === "carc") {
         return(<div className="img-gallery">
       <ImageGallery items={imageTC2} /></div>)
     } else if (selectedPopUp === "carr") {
         return(<div className="img-gallery">
       <ImageGallery items={imageTRD} /></div>)
     } else if (selectedPopUp === "carff") {
         return(<div className="img-gallery">
       <ImageGallery items={imageFI} /></div>)
     } else if (selectedPopUp === "fordff") {
         return(<div className="img-gallery">
       <ImageGallery items={imageSE} /></div>)
     } else if (selectedPopUp === "suvv") {
         return(<div className="img-gallery">
       <ImageGallery items={imageRV} /></div>)
     } else if (selectedPopUp === "suvh") {
         return(<div className="img-gallery">
       <ImageGallery items={imageRV2} /></div>)
     } else if (selectedPopUp === "suva") {
         return(<div className="img-gallery">
       <ImageGallery items={imageSO} /></div>)
      } else if (selectedPopUp === "suvf") {
         return(<div className="img-gallery">
       <ImageGallery items={imageSF} /></div>)
      } else if (selectedPopUp === "suvo") {
         return(<div className="img-gallery">
       <ImageGallery items={imageSF2} /></div>)
      } else if (selectedPopUp === "vans") {
         return(<div className="img-gallery">
       <ImageGallery items={imageLM} /></div>)
      } else if (selectedPopUp === "vanss") {
         return(<div className="img-gallery">
       <ImageGallery items={imageTV} /></div>)
      } else if (selectedPopUp === "vanc") {
        return(<div className="img-gallery">
       <ImageGallery items={imageFM} /></div>)
      } else if (selectedPopUp === "vanf") {
        return(<div className="img-gallery">
       <ImageGallery items={imageVE} /></div>)
      } else if (selectedPopUp === "vanb") {
        return(<div className="img-gallery">
       <ImageGallery items={imageCE} /></div>)
      } else if (selectedPopUp === "scf") {
        return(<div className="img-gallery">
       <ImageGallery items={imageFF} /></div>)
      } else if (selectedPopUp === "scff") {
        return(<div className="img-gallery">
       <ImageGallery items={imageJI} /></div>)
      } else if (selectedPopUp === "sct") {
        return(<div className="img-gallery">
       <ImageGallery items={imageF8} /></div>)
      } else if (selectedPopUp === "scp") {
        return(<div className="img-gallery">
       <ImageGallery items={imageF8} /></div>)


}
}


  const truckMenu = () => {
  return (<div><h1>Truck list - Ford F-150 Raptor</h1><img onClick={(e)=>handleShowPopUp(e)} id="ford" src ={Truck1}className="ford"/>
  <div className="grid">
  <div className="row1 col2 cspan7">
  <h5>Info</h5>
  </div>
  <div className="row3 col4 cspan3">
  <p1>10 miles 17/21 mpg City/Hwy Magnetic Gray Exterior</p1>
  </div>
  <div className="row4 col4 cspan3">
  <p2>Cement Interior6 speed manual 4x4 Stock #: DT21456</p2>
  </div>
  <div className="row2 col4 cspan6">
  <button className="button">Buy now!</button>
  </div>
  <div className="row1 col4 cspan9">
  <h6><FontAwesomeIcon  color="black" icon={faMoneyBillWaveAlt}/>Pricing</h6>
  </div>
  <div className="row3 col7 cspan3">
  <p1>MSRP $36,132</p1>
  <p1>Exclusive Auto Sale Price $35,132</p1>
  </div>
  </div>

  <h1>Truck list - Toyota Tacoma</h1><img onClick={(e)=>handleShowPopUp(e)} id="toyota_truck" src ={Truck2}className="toyota_truck"/>
  <div className="grid">
  <div className="row1 col2 cspan7">
  <h5>Info</h5>
  </div>
  <div className="row3 col4 cspan3">
  <p1>10 miles 17/21 mpg City/Hwy Magnetic Gray Exterior</p1>
  </div>
  <div className="row4 col4 cspan3">
  <p2>Cement Interior6 speed manual 4x4 Stock #: DT21456</p2>
  </div>
  <div className="row2 col4 cspan6">
  <button className="button">Buy now!</button>
  </div>
  <div className="row1 col4 cspan9">
  <h6><FontAwesomeIcon  color="black" icon={faMoneyBillWaveAlt}/>Pricing</h6>
  </div>
  <div className="row3 col7 cspan3">
  <p1>MSRP $36,132</p1>
  <p1>Exclusive Auto Sale Price $35,132</p1>
  </div>
  </div>

  <h1>Truck list -  Dodge Cummins 2500/3500</h1><img onClick={(e)=>handleShowPopUp(e)} id="dodge" src ={Truck3}className="dodge"/>
  <div className="grid">
  <div className="row1 col2 cspan7">
  <h5>Info</h5>
  </div>
  <div className="row3 col4 cspan3">
  <p1>10 miles 17/21 mpg City/Hwy Magnetic Gray Exterior</p1>
  </div>
  <div className="row4 col4 cspan3">
  <p2>Cement Interior6 speed manual 4x4 Stock #: DT21456</p2>
  </div>
  <div className="row2 col4 cspan6">
  <button className="button">Buy now!</button>
  </div>
  <div className="row1 col4 cspan9">
  <h6><FontAwesomeIcon  color="black" icon={faMoneyBillWaveAlt}/>Pricing</h6>
  </div>
  <div className="row3 col7 cspan3">
  <p1>MSRP $36,132</p1>
  <p1>Exclusive Auto Sale Price $35,132</p1>
  </div>
  </div>
  <h1>Truck list -  1st Gen Dodge Cummins</h1><img onClick={(e)=>handleShowPopUp(e)} id="dodge2" src ={Truck4}className="dodge2"/>
  <div className="grid">
  <div className="row1 col2 cspan7">
  <h5>Info</h5>
  </div>
  <div className="row3 col4 cspan3">
  <p1>10 miles 17/21 mpg City/Hwy Magnetic Gray Exterior</p1>
  </div>
  <div className="row4 col4 cspan3">
  <p2>Cement Interior6 speed manual 4x4 Stock #: DT21456</p2>
  </div>
  <div className="row2 col4 cspan6">
  <button className="button">Buy now!</button>
  </div>
  <div className="row1 col4 cspan9">
  <h6><FontAwesomeIcon  color="black" icon={faMoneyBillWaveAlt}/>Pricing</h6>
  </div>
  <div className="row3 col7 cspan3">
  <p1>MSRP $36,132</p1>
  <p1>Exclusive Auto Sale Price $35,132</p1>
  </div>
  </div>
  <h1>Truck list -  Ram 1500 EcoDiesel</h1><img onClick={(e)=>handleShowPopUp(e)} id="ram" src ={Truck5}className="ram"/>
  <div className="grid">
  <div className="row1 col2 cspan7">
  <h5>Info</h5>
  </div>
  <div className="row3 col4 cspan3">
  <p1>10 miles 17/21 mpg City/Hwy Magnetic Gray Exterior</p1>
  </div>
  <div className="row4 col4 cspan3">
  <p2>Cement Interior6 speed manual 4x4 Stock #: DT21456</p2>
  </div>
  <div className="row2 col4 cspan6">
  <button className="button">Buy now!</button>
  </div>
  <div className="row1 col4 cspan9">
  <h6><FontAwesomeIcon  color="black" icon={faMoneyBillWaveAlt}/>Pricing</h6>
  </div>
  <div className="row3 col7 cspan3">
  <p1>MSRP $36,132</p1>

  <p1>Exclusive Auto Sale Price $35,132</p1>
  </div>
  </div>
  </div>)

}
const jeepMenu = () => {
  return (<div><h1>Jeep list - Jeep Compass 2018</h1><img onClick={(e)=>handleShowPopUp(e)} id="jeepc" src ={Jeep1}className="jeepc"/>
  <div className="grid">
  <div className="row1 col2 cspan7">
  <h5>Info</h5>
  </div>
  <div className="row3 col4 cspan3">
  <p1>34,052 miles
  White Clearcoat Exterior
  9 Speed Automatic
  </p1>
  </div>
  <div className="row4 col4 cspan3">
  <p2>4WD Stock #: TBCE1413C4NJDCB8KT825457</p2>
  </div>
  <div className="row2 col4 cspan6">
  <button className="button">Buy now!</button>
  </div>
  <div className="row1 col4 cspan9">
  <h6><FontAwesomeIcon  color="black" icon={faMoneyBillWaveAlt}/>Pricing</h6>
  </div>
  <div className="row3 col7 cspan3">
  <p1>Original Price $23,256</p1>
  <p1>Exclusive Auto Sale Price $21,294</p1>
  </div>
  </div>


  <h1>Jeep list - V8-Powered Jeep Wrangler Rubicon 392</h1><img onClick={(e)=>handleShowPopUp(e)} id="jeepr" src ={Jeep2}className="jeepr"/>
  <div className="grid">
  <div className="row1 col2 cspan7">
  <h5>Info</h5>
  </div>
  <div className="row3 col4 cspan3">
  <p1>24,013 miles
  Billet Silver Metallic Exterior
  5 Speed Automatic
  </p1>
  </div>
  <div className="row4 col4 cspan3">
  <p2>4WD Stock #: TBCE1261C4HJWEG1JL918266</p2>
  </div>
  <div className="row2 col4 cspan6">
  <button className="button">Buy now!</button>
  </div>
  <div className="row1 col4 cspan9">
  <h6><FontAwesomeIcon  color="black" icon={faMoneyBillWaveAlt}/>Pricing</h6>
  </div>
  <div className="row3 col7 cspan3">
  <p1>Original Price $39,956</p1>
  <p1>Exclusive Auto Sale Price $29,499</p1>
  </div>
  </div>

  <h1>Jeep list - 2020 Jeep Wrangler Rubicon Unlimited EcoDiesel</h1><img onClick={(e)=>handleShowPopUp(e)} id="jeepw" src ={Jeep3}className="jeepw"/>
  <div className="grid">
  <div className="row1 col2 cspan7">
  <h5>Info</h5>
  </div>
  <div className="row3 col4 cspan3">
  <p1>24,013 miles
  Billet Silver Metallic Exterior
  5 Speed Automatic
  </p1>
  </div>
  <div className="row4 col4 cspan3">
  <p2>4WD Stock #: TBCE1261C4HJWEG1JL918266</p2>
  </div>
  <div className="row2 col4 cspan6">
  <button className="button">Buy now!</button>
  </div>
  <div className="row1 col4 cspan9">
  <h6><FontAwesomeIcon  color="black" icon={faMoneyBillWaveAlt}/>Pricing</h6>
  </div>
  <div className="row3 col7 cspan3">
  <p1>Original Price $39,956</p1>
  <p1>Exclusive Auto Sale Price $29,499</p1>
  </div>
  </div>

  <h1>Jeep list - 2011 Jeep Liberty</h1><img onClick={(e)=>handleShowPopUp(e)} id="jeepl" src ={Jeep4}className="jeepl"/>
  <div className="grid">
  <div className="row1 col2 cspan7">
  <h5>Info</h5>
  </div>
  <div className="row3 col4 cspan3">
  <p1>22,669 miles
  Grey Pearlcoat Exterior
  Automatic</p1>
  </div>
  <div className="row4 col4 cspan3">
  <p2>4WD Stock #: TBCE1413C4NJDCB8KT825457</p2>
  </div>
  <div className="row2 col4 cspan6">
  <button className="button">Buy now!</button>
  </div>
  <div className="row1 col4 cspan9">
  <h6><FontAwesomeIcon  color="black" icon={faMoneyBillWaveAlt}/>Pricing</h6>
  </div>
  <div className="row3 col7 cspan3">
  <p1>Original Price $23,256</p1>
  <p1>Exclusive Auto Sale Price $21,294</p1>
  </div>
  </div>

  <h1>Jeep list - 2019 Jeep Wrangler Unlimited Sahara</h1><img onClick={(e)=>handleShowPopUp(e)} id="jeeps" src ={Jeep5}className="jeeps"/>
  <div className="grid">
  <div className="row1 col2 cspan7">
  <h5>Info</h5>
  </div>
  <div className="row3 col4 cspan3">
  <p1>20,736 miles
Billet Silver Metallic Exterior
6 Speed Manual
  </p1>
  </div>
  <div className="row4 col4 cspan3">
  <p2>4x4 Stock #: JDD3041C4HJXDG9JW177922</p2>
  </div>
  <div className="row2 col4 cspan6">
  <button className="button">Buy now!</button>
  </div>
  <div className="row1 col4 cspan9">
  <h6><FontAwesomeIcon  color="black" icon={faMoneyBillWaveAlt}/>Pricing</h6>
  </div>
  <div className="row3 col7 cspan3">
  <p1>Original Price $32,945</p1>
  <p1>Exclusive Auto Sale Price $32,694</p1>
  </div>
  </div>
  </div>)
}

const carMenu = () => {
  return (<div><h1>Sedan list - 2020 Toyota Camry Hybrid</h1><img onClick={(e)=>handleShowPopUp(e)} id="cart" src ={Car1}className="cart"/>
  <div className="grid">
  <div className="row1 col2 cspan7">
  <h5>Info</h5>
  </div>
  <div className="row3 col4 cspan3">
  <p1>91 miles
   44/47 mpg City/Hwy
   Super White Exterior
   Ash Softex® Interior
  </p1>
  </div>
  <div className="row4 col4 cspan3">
  <p2>continuously variable automatic Front-wheel Drive Stock #: DT202587</p2>
  </div>
  <div className="row2 col4 cspan6">
  <button className="button">Buy now!</button>
  </div>
  <div className="row1 col4 cspan9">
  <h6><FontAwesomeIcon  color="black" icon={faMoneyBillWaveAlt}/>Pricing</h6>
  </div>
  <div className="row3 col7 cspan3">
  <p1>MSRP $34,078</p1>
  <p1>Exclusive Auto Sale Price $28,843</p1>
  </div>
  </div>

  <h1>Sedan list - 1997 Toyota Corolla</h1><img onClick={(e)=>handleShowPopUp(e)} id="carc" src ={Car2}className="carc"/>
  <div className="grid">
  <div className="row1 col2 cspan7">
  <h5>Info</h5>
  </div>
  <div className="row3 col4 cspan3">
  <p1>28 miles
  32/41 mpg City/Hwy
  Classic Silver Exterior
  </p1>
  </div>
  <div className="row4 col4 cspan3">
  <p2>Moonstone Fabric Interior automatic/CVT Front-wheel Drive Stock #: DT201791</p2>
  </div>
  <div className="row2 col4 cspan6">
  <button className="button">Buy now!</button>
  </div>
  <div className="row1 col4 cspan9">
  <h6><FontAwesomeIcon  color="black" icon={faMoneyBillWaveAlt}/>Pricing</h6>
  </div>
  <div className="row3 col7 cspan3">
  <p1>MSRP $23,944</p1>
  <p1>Exclusive Auto Sale Price $22,554</p1>
  </div>
  </div>

  <h1>Sedan list - 2020 Toyota Camry TRD</h1><img onClick={(e)=>handleShowPopUp(e)} id="carr" src ={Car3}className="carr"/>
  <div className="grid">
  <div className="row1 col2 cspan7">
  <h5>Info</h5>
  </div>
  <div className="row3 col4 cspan3">
  <p1>10 miles
  25/34 mpg City/Hwy
  Midnight Black Exterior
  </p1>
  </div>
  <div className="row4 col4 cspan3">
  <p2>Black Fabric Interior 8 speed automatic All-wheel Drive Stock #: DT202571</p2>
  </div>
  <div className="row2 col4 cspan6">
  <button className="button">Buy now!</button>
  </div>
  <div className="row1 col4 cspan9">
  <h6><FontAwesomeIcon  color="black" icon={faMoneyBillWaveAlt}/>Pricing</h6>
  </div>
  <div className="row3 col7 cspan3">
  <p1>MSRP $29,038</p1>
  <p1>Exclusive Auto Sale Price $25,367</p1>
  </div>
  </div>

  <h1>Sedan list - 2017 Ford Fusion Hybrid</h1><img onClick={(e)=>handleShowPopUp(e)} id="carff" src ={Car4}className="carff"/>
  <div className="grid">
  <div className="row1 col2 cspan7">
  <h5>Info</h5>
  </div>
  <div className="row3 col4 cspan3">
  <p1>78,307 miles Oxford White Exterior 6</p1>
  </div>
  <div className="row4 col4 cspan3">
  <p2>FWD Stock #: DT201717D3FA6P0HD8GR341515</p2>
  </div>
  <div className="row2 col4 cspan6">
  <button className="button">Buy now!</button>
  </div>
  <div className="row1 col4 cspan9">
  <h6><FontAwesomeIcon  color="black" icon={faMoneyBillWaveAlt}/>Pricing</h6>
  </div>
  <div className="row3 col7 cspan3">
  <p1>MSRP $24,028</p1>
  <p1>Exclusive Auto Sale Price $20,125</p1>
  </div>
  </div>

  <h1>Sedan list - 2012 Ford Focus SE</h1><img onClick={(e)=>handleShowPopUp(e)} id="fordff" src ={Car5}className="fordff"/>
  <div className="grid">
  <div className="row1 col2 cspan7">
  <h5>Info</h5>
  </div>
  <div className="row3 col4 cspan3">
  <p1>91 miles
   44/47 mpg City/Hwy
   Super White Exterior
   Ash Softex® Interior
  </p1>
  </div>
  <div className="row4 col4 cspan3">
  <p2>FWD Stock #: DT201717D3FA6P0HD8GR341515</p2>
  </div>
  <div className="row2 col4 cspan6">
  <button className="button">Buy now!</button>
  </div>
  <div className="row1 col4 cspan9">
  <h6><FontAwesomeIcon  color="black" icon={faMoneyBillWaveAlt}/>Pricing</h6>
  </div>
  <div className="row3 col7 cspan3">
  <p1>MSRP $11,278</p1>
  <p1>Exclusive Auto Sale Price $8,800</p1>
  </div>
  </div>
  </div>)
}

const suvMenu = () => {
  return (<div><h1>Suv list - 2020 Honda CRV</h1><img onClick={(e)=>handleShowPopUp(e)} id="suvv" src ={Suv1}className="suvv"/>
  <div className="grid">
  <div className="row1 col2 cspan7">
  <h5>Info</h5>
  </div>
  <div className="row3 col4 cspan3">
  <p1>31 miles
   33/37 mpg City/Hwy
   Black Softex® Interior
  </p1>
  </div>
  <div className="row4 col4 cspan3">
  <p2>AWD Stock #: DT402718D3FA9P0HD8GR351585</p2>
  </div>
  <div className="row2 col4 cspan6">
  <button className="button">Buy now!</button>
  </div>
  <div className="row1 col4 cspan9">
  <h6><FontAwesomeIcon  color="black" icon={faMoneyBillWaveAlt}/>Pricing</h6>
  </div>
  <div className="row3 col7 cspan3">
  <p1>MSRP $22,078</p1>
  <p1>Exclusive Auto Sale Price $19,400</p1>
  </div>
  </div>


  <h1>Suv list - 2019 Honda CRV</h1><img onClick={(e)=>handleShowPopUp(e)} id="suvh" src ={Suv2}className="suvh"/>
  <div className="grid">
  <div className="row1 col2 cspan7">
  <h5>Info</h5>
  </div>
  <div className="row3 col4 cspan3">
  <p1>31,478 miles Modern Steel Metallic Exterior CVT
  </p1>
  </div>
  <div className="row4 col4 cspan3">
  <p2>AWD Stock #: DT21574A3CZRU6H5XJG711940</p2>
  </div>
  <div className="row2 col4 cspan6">
  <button className="button">Buy now!</button>
  </div>
  <div className="row1 col4 cspan9">
  <h6><FontAwesomeIcon  color="black" icon={faMoneyBillWaveAlt}/>Pricing</h6>
  </div>
  <div className="row3 col7 cspan3">
  <p1>Original Price $23,600</p1>
  <p1>Exclusive Auto Sale Price $18,100</p1>
  </div>
  </div>

  <h1>Suv list -2020 Subaru Outback</h1><img onClick={(e)=>handleShowPopUp(e)} id="suva" src ={Suv3}className="suva"/>
  <div className="grid">
  <div className="row1 col2 cspan7">
  <h5>Info</h5>
  </div>
  <div className="row3 col4 cspan3">
  <p1>20,478 miles Modern Steel White Metallic Exterior
  </p1>
  </div>
  <div className="row4 col4 cspan3">
  <p2>AWD Stock #: DT11674F3CZAU4H5XJG714950</p2>
  </div>
  <div className="row2 col4 cspan6">
  <button className="button">Buy now!</button>
  </div>
  <div className="row1 col4 cspan9">
  <h6><FontAwesomeIcon  color="black" icon={faMoneyBillWaveAlt}/>Pricing</h6>
  </div>
  <div className="row3 col7 cspan3">
  <p1>Original Price $33,600</p1>
  <p1>Exclusive Auto Sale Price $28,500</p1>
  </div>
  </div>

  <h1>Suv list - 2020 Subaru Forester</h1><img onClick={(e)=>handleShowPopUp(e)} id="suvf" src ={Suv4}className="suvf"/>
  <div className="grid">
  <div className="row1 col2 cspan7">
  <h5>Info</h5>
  </div>
  <div className="row3 col4 cspan3">
  <p1>24,850 miles Silver Exterior Automatic
  </p1>
  </div>
  <div className="row4 col4 cspan3">
  <p2>AWD Stock #: DT21300A4S4BSAAC9J3263584</p2>
  </div>
  <div className="row2 col4 cspan6">
  <button className="button">Buy now!</button>
  </div>
  <div className="row1 col4 cspan9">
  <h6><FontAwesomeIcon  color="black" icon={faMoneyBillWaveAlt}/>Pricing</h6>
  </div>
  <div className="row3 col7 cspan3">
  <p1>Original Price $23,600</p1>
  <p1>Exclusive Auto Sale Price $18,100</p1>
  </div>
  </div>

  <h1>Suv list - 2021 Subaru Accent</h1><img onClick={(e)=>handleShowPopUp(e)} id="suvo" src ={Suv5}className="suvo"/>
  <div className="grid">
  <div className="row1 col2 cspan7">
  <h5>Info</h5>
  </div>
  <div className="row3 col4 cspan3">
  <p1>11,328 miles Gray Exterior Automatic
  </p1>
  </div>
  <div className="row4 col4 cspan3">
  <p2>AWD Stock #: DT202131A4S4WMACD3L3432342</p2>
  </div>
  <div className="row2 col4 cspan6">
  <button className="button">Buy now!</button>
  </div>
  <div className="row1 col4 cspan9">
  <h6><FontAwesomeIcon  color="black" icon={faMoneyBillWaveAlt}/>Pricing</h6>
  </div>
  <div className="row3 col7 cspan3">
  <p1>Original Price $33,250</p1>
  <p1>Exclusive Auto Sale Price $28,200</p1>
  </div>
  </div>
  </div>)
}

const vanMenu = () => {
  return (<div><h1>Van list - 2020 Lexus MiniVan</h1><img onClick={(e)=>handleShowPopUp(e)} id="vans" src ={Van1}className="vans"/>
  <div className="grid">
  <div className="row1 col2 cspan7">
  <h5>Info</h5>
  </div>
  <div className="row3 col4 cspan3">
  <p1>7 miles 19/26 mpg City/Hwy Midnight Black Exterior</p1>
  </div>
  <div className="row4 col4 cspan3">
  <p2>Ash Fabric Interior 8 speed automatic Front-wheel Drive Stock #: DT201995</p2>
  </div>
  <div className="row2 col4 cspan6">
  <button className="button">Buy now!</button>
  </div>
  <div className="row1 col4 cspan9">
  <h6><FontAwesomeIcon  color="black" icon={faMoneyBillWaveAlt}/>Pricing</h6>
  </div>
  <div className="row3 col7 cspan3">
  <p1>Original Price $53,600</p1>
  <p1>Exclusive Auto Sale Price 45,520</p1>
  </div>
  </div>

  <h1>Van list - 2006 Ford Transit Van</h1><img onClick={(e)=>handleShowPopUp(e)} id="vanss" src ={Van2}className="vanss"/>
  <div className="grid">
  <div className="row1 col2 cspan7">
  <h5>Info</h5>
  </div>
  <div className="row3 col4 cspan3">
  <p1>35/36 mpg City/Hwy Ruby Flare Pearl Exterior Graphite Interior</p1>
  </div>
  <div className="row4 col4 cspan3">
  <p2>continuously variable automatic All-wheel Drive Stock #: DT21760</p2>
  </div>
  <div className="row2 col4 cspan6">
  <button className="button">Buy now!</button>
  </div>
  <div className="row1 col4 cspan9">
  <h6><FontAwesomeIcon  color="black" icon={faMoneyBillWaveAlt}/>Pricing</h6>
  </div>
  <div className="row3 col7 cspan3">
  <p1>Original Price $25,100</p1>
  <p1>Exclusive Auto Sale Price $22,405</p1>
  </div>
  </div>

  <h1>Van list - 2007 Ford MiniVan</h1><img onClick={(e)=>handleShowPopUp(e)} id="vanc" src ={Van3}className="vanc"/>
  <div className="grid">
  <div className="row1 col2 cspan7">
  <h5>Info</h5>
  </div>
  <div className="row3 col4 cspan3">
  <p1>7 miles 35/36 mpg City/Hwy Sunset Bronze Mica Exterior Chateau Softex Interior</p1>
  </div>
  <div className="row4 col4 cspan3">
  <p2>continuously variable automatic All-wheel Drive Stock #: DT21877</p2>
  </div>
  <div className="row2 col4 cspan6">
  <button className="button">Buy now!</button>
  </div>
  <div className="row1 col4 cspan9">
  <h6><FontAwesomeIcon  color="black" icon={faMoneyBillWaveAlt}/>Pricing</h6>
  </div>
  <div className="row3 col7 cspan3">
  <p1>MSRP $43,260</p1>
  <p1>Exclusive Auto Sale Price $40,120</p1>
  </div>
  </div>

  <h1>Van list - 2020 Ford Van Eco</h1><img onClick={(e)=>handleShowPopUp(e)} id="vanf" src ={Van4}className="vanf"/>
   <div className="grid">
  <div className="row1 col2 cspan7">
  <h5>Info</h5>
  </div>
  <div className="row3 col4 cspan3">
  <p1>8 miles 35/36 mpg City/Hwy Predawn Gray Mica Exterior Graphite Interior</p1>
  </div>
  <div className="row4 col4 cspan3">
  <p2>continuously variable automatic All-wheel Drive Stock #: DT21875</p2>
  </div>
  <div className="row2 col4 cspan6">
  <button className="button">Buy now!</button>
  </div>
  <div className="row1 col4 cspan9">
  <h6><FontAwesomeIcon  color="black" icon={faMoneyBillWaveAlt}/>Pricing</h6>
  </div>
  <div className="row3 col7 cspan3">
  <p1>Original Price $33,600</p1>
  <p1>Exclusive Auto Sale Price $28,500</p1>
  </div>
  </div>

  <h1>Van list - 2002 Chevrolet Express Van</h1><img onClick={(e)=>handleShowPopUp(e)} id="vanb" src ={Van5}className="vanb"/>
  <div className="grid">
  <div className="row1 col2 cspan7">
  <h5>Info</h5>
  </div>
  <div className="row3 col4 cspan3">
  <p1>7 miles 35/36 mpg City/Hwy Midnight Black Exterior Moonstone and Gray Flannel Softex® Interior</p1>
  </div>
  <div className="row4 col4 cspan3">
  <p2>continuously variable automatic All-wheel Drive Stock #: DT21875</p2>
  </div>
  <div className="row2 col4 cspan6">
  <button className="button">Buy now!</button>
  </div>
  <div className="row1 col4 cspan9">
  <h6><FontAwesomeIcon  color="black" icon={faMoneyBillWaveAlt}/>Pricing</h6>
  </div>
  <div className="row3 col7 cspan3">
  <p1>MSRP $38,810</p1>
  <p1>Exclusive Auto Sale Price $35,332</p1>
  </div>
  </div>
  < /div>)
}

const scarMenu = () => {
  return (<div><h1>Sports car list - 2021 Ferrari F8 Topless</h1><img onClick={(e)=>handleShowPopUp(e)} id="scf" src ={SC1}className="scf"/>
  <div className="grid">
  <div className="row1 col2 cspan7">
  <h5>Info</h5>
  </div>
  <div className="row3 col4 cspan3">
  <p1 class="p1-index">7 miles 35/36 mpg City/Hwy Gold Exterior Moonstone and Yellow Flannel Softex® Interior</p1>
  </div>
  <div className="row4 col4 cspan3">
  <p2>continuously variable automatic All-wheel Drive Stock #: DT33874</p2>
  </div>
  <div className="row2 col4 cspan6">
  <button className="button">Buy now!</button>
  </div>
  <div className="row1 col4 cspan9">
  <h6><FontAwesomeIcon  color="black" icon={faMoneyBillWaveAlt}/>Pricing</h6>
  </div>
  <div className="row3 col7 cspan3">
  <p1 class="p1-index-2">MSRP $45,820</p1>
  <p1 class="p1-index-2">Exclusive Auto Sale Price $42,532</p1>
  </div>
  </div>

  <h1>Sports car list - 2021 Ferrari J50</h1><img onClick={(e)=>handleShowPopUp(e)} id="scff" src ={SC2}className="scff"/>
  <div className="grid">
  <div className="row1 col2 cspan7">
  <h5>Info</h5>
  </div>
  <div className="row3 col4 cspan3">
  <p1 class="p1-index">7 miles 35/36 mpg City/Hwy Midnight Blue Exterior Moonstone and Yellow Flannel Softex® Interior</p1>
  </div>
  <div className="row4 col4 cspan3">
  <p2>continuously variable automatic All-wheel Drive Stock #: DT43874</p2>
  </div>
  <div className="row2 col4 cspan6">
  <button className="button">Buy now!</button>
  </div>
  <div className="row1 col4 cspan9">
  <h6><FontAwesomeIcon  color="black" icon={faMoneyBillWaveAlt}/>Pricing</h6>
  </div>
  <div className="row3 col7 cspan3">
  <p1 class="p1-index-2">MSRP $39,210</p1>
  <p1 class="p1-index-2">Exclusive Auto Sale Price $36,132</p1>
  </div>
  </div>
  <h1>Sports car list - 2020 Ferrari F8 Tributo</h1><img onClick={(e)=>handleShowPopUp(e)} id="sct" src ={SC3}className="sct"/>
  <div className="grid">
  <div className="row1 col2 cspan7">
  <h5>Info</h5>
  </div>
  <div className="row3 col4 cspan3">
  <p1 class="p1-index">7 miles 35/36 mpg City/Hwy Midnight Black Exterior Moonstone and Gray Flannel Softex® Interior</p1>
  </div>
  <div className="row4 col4 cspan3">
  <p2>continuously variable automatic All-wheel Drive Stock #: DT21875</p2>
  </div>
  <div className="row2 col4 cspan6">
  <button className="button">Buy now!</button>
  </div>
  <div className="row1 col4 cspan9">
  <h6><FontAwesomeIcon  color="black" icon={faMoneyBillWaveAlt}/>Pricing</h6>
  </div>
  <div className="row3 col7 cspan3">
  <p1 class="p1-index-2">MSRP $38,810</p1>
  <p1 class="p1-index-2">Exclusive Auto Sale Price $35,332</p1>
  </div>
  </div>
  <h1>Sports car list - 1999 Ferrari Porchse</h1><img onClick={(e)=>handleShowPopUp(e)} id="scp" src ={SC4}className="scp"/>
  <div className="grid">
  <div className="row1 col2 cspan7">
  <h5>Info</h5>
  </div>
  <div className="row3 col4 cspan3">
  <p1 class="p1-index">7 miles 35/36 mpg City/Hwy Midnight Black Exterior Moonstone and Gray Flannel Softex® Interior</p1>
  </div>
  <div className="row4 col4 cspan3">
  <p2>continuously variable automatic All-wheel Drive Stock #: DT21875</p2>
  </div>
  <div className="row2 col4 cspan6">
  <button className="button">Buy now!</button>
  </div>
  <div className="row1 col4 cspan9">
  <h6><FontAwesomeIcon  color="black" icon={faMoneyBillWaveAlt}/>Pricing</h6>
  </div>
  <div className="row3 col7 cspan3">
  <p1 class="p1-index-2">MSRP $38,810</p1>
  <p1 class="p1-index-2">Exclusive Auto Sale Price $35,332</p1>
  </div>
  </div>
  <h1>Sports car list - 2019 Ferrari 250 GTO</h1><img onClick={(e)=>handleShowPopUp(e)} id="scc" src ={SC5}className="scc"/>
  <div className="grid">
  <div className="row1 col2 cspan7">
  <h5>Info</h5>
  </div>
  <div className="row3 col4 cspan3">
  <p1 class="p1-index">7 miles 35/36 mpg City/Hwy Midnight Black Exterior Moonstone and Gray Flannel Softex® Interior</p1>
  </div>
  <div className="row4 col4 cspan3">
  <p2>continuously variable automatic All-wheel Drive Stock #: DT21875</p2>
  </div>
  <div className="row2 col4 cspan6">
  <button className="button">Buy now!</button>
  </div>
  <div className="row1 col4 cspan9">
  <h6><FontAwesomeIcon  color="black" icon={faMoneyBillWaveAlt}/>Pricing</h6>
  </div>
  <div className="row3 col7 cspan3">
  <p1 class="p1-index-2">MSRP $38,810</p1>
  <p1 class="p1-index-2">Exclusive Auto Sale Price $35,332</p1>
  </div>
  </div>
  </div>)
}

function handleOnClick (e) {
    if (e.target.id === "truck") {
        if (truckDropDown === true) {
            setTruckDropDown(false)
        } else {
            setTruckDropDown(true)
        }
    } else if (e.target.id === "jeep") {
        if (jeepDropDown === true) {
            setJeepDropDown(false)
        } else {
            setJeepDropDown(true)
        }
      } else if (e.target.id === "car") {
          if (carDropDown === true) {
              setCarDropDown(false)
          } else {
              setCarDropDown(true)
          }
      } else if (e.target.id === "suv") {
          if (suvDropDown === true) {
              setSuvDropDown(false)
          } else {
              setSuvDropDown(true)
          }
      } else if (e.target.id === "van") {
          if (vanDropDown === true) {
              setVanDropDown(false)
          } else {
              setVanDropDown(true)
          }
      } else if (e.target.id === "scar") {
          if (scarDropDown === true) {
              setScarDropDown(false)
          } else {
              setScarDropDown(true)
            }

    }

}

  return (
      <div className="car">
      {(showPopUp === true) ? popUp : <div />}
      <h1>Inventory!</h1>
      <button className="custom-button" id="truck" onClick={(e) => handleOnClick(e)}>Trucks</button>
      {(truckDropDown === true)? truckMenu() : <div/> }
      <button className="custom-button" id="jeep" onClick={(e) => handleOnClick(e)}>Jeeps</button>
      {(jeepDropDown === true)? jeepMenu() : <div /> }
      <button className="custom-button" id="car" onClick={(e) => handleOnClick(e)}>Cars</button>
      {(carDropDown === true)? carMenu() : <div /> }
      <button className="custom-button" id="suv" onClick={(e) => handleOnClick(e)}>Suv</button>
      {(suvDropDown === true)? suvMenu() : <div /> }
      <button className="custom-button" id="van" onClick={(e) => handleOnClick(e)}>Van</button>
      {(vanDropDown === true)? vanMenu() : <div /> }
      <button className="custom-button" id="scar" onClick={(e) => handleOnClick(e)}>Sport cars</button>
      {(scarDropDown === true)? scarMenu() : <div /> }
      </div>





  );
}

export default Car;
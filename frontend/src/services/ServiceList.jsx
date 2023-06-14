import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: 'Calculate Weather',
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing."
    },

    {
        imgUrl: guideImg,
        title: 'Best Guide Tour',
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing."
    },

    {
        imgUrl: customizationImg,
        title: 'Customization',
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing."
    },
]

const ServiceList = () => {
  return (
    <>
        {
            servicesData.map((item, index) => <Col lg='3' key={index}><ServiceCard item={item}/></Col>)
        }
        
    </>
  )
}

export default ServiceList

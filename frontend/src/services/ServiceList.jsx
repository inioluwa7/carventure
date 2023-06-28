import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from 'reactstrap'

import vectorImg from '../assets/svg/Vector.svg'
import vector1 from '../assets/svg/Vector1.svg'
import vector2 from '../assets/svg/Vector2.svg'
import vector3 from '../assets/svg/Vector3.svg'

const servicesData = [
    {
        imgUrl: vectorImg,
        title: 'Register for free',
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing."
    },

    {
        imgUrl: vector1,
        title: 'Daily Commute',
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing."
    },

    {
        imgUrl: vector2,
        title: 'Long Distance Rides',
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing."
    },

    {
        imgUrl: vector3,
        title: 'Online Payment',
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

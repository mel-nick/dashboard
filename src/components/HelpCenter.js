import React from 'react'
import {Col } from 'react-bootstrap'

const HelpCenter = () => {
    return (
        <Col md={9} className="wrapper">
            <div className="inner h-100 d-flex flex-column justify-content-center align-items-center">
            <svg className="mb-5" width={75} height={75} viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.29178 53.9583L14.4584 40.7917L27.6251 53.9583L53.9585 27.625L73.7085 47.375" stroke="#111111" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M67.1251 1.29169H7.87511C4.23924 1.29169 1.29178 4.23915 1.29178 7.87502V67.125C1.29178 70.7609 4.23924 73.7083 7.87511 73.7083H67.1251C70.761 73.7083 73.7085 70.7609 73.7085 67.125V7.87502C73.7085 4.23915 70.761 1.29169 67.1251 1.29169Z" stroke="#111111" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24.3333 30.9167C27.9692 30.9167 30.9167 27.9692 30.9167 24.3333C30.9167 20.6975 27.9692 17.75 24.3333 17.75C20.6975 17.75 17.75 20.6975 17.75 24.3333C17.75 27.9692 20.6975 30.9167 24.3333 30.9167Z" fill="#111111" />
            </svg>
            <p className="font-weight-bold">We’re working on this page now!</p>
            <p> You will definetely know when it will be ready</p>
            <p>HelpCenter</p>
            </div>            
        </Col>
    )
}

export default HelpCenter

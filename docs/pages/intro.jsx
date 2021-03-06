import React from 'react'
import ReactSlidy from '../../src'
import { DisplayCode } from '../utils'

export const demo = (
  <div className='text-center'>
    <h1 className='h1 mb0 mt0'>React Slidy</h1>
    <h4 className='h4'>a simple and minimal slider component for React</h4>
    <p>Just wrap the images that you want to use on your slider. React Slidy will do the magic for you</p>
    <ReactSlidy
      infinite={false}
      slidesToScroll={1}>
      <img src='../img/beautiful_landscapes.jpg' />
      <img src='../img/beautiful_landscapes_02.jpg' />
    </ReactSlidy>
    <DisplayCode>
      {
        `<ReactSlidy
        infinite={false}
        slidesToScroll={1}>
        <img src='../img/beautiful_landscapes.jpg' />
        <img src='../img/beautiful_landscapes_02.jpg' />
      </ReactSlidy>
        `
      }
    </DisplayCode>
  </div>
)

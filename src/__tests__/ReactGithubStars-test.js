/*eslint-disable*/
import React from 'react'
import TestUtils from 'react/lib/ReactTestUtils'
import expect from 'expect'
import ReactGithubStars from '../ReactGithubStars'

describe('ReactGithubStars component', () => {
  //
  const component = TestUtils.renderIntoDocument(<ReactGithubStars username="torvalds" defaultColor={true} displayBorder={true} />)
  it('renders into document', () => {
    expect(component).toExist()
  })
  it('has main rgs class', () => {
    const hasClass = TestUtils.findRenderedDOMComponentWithClass(component, 'rgs')
    expect(hasClass).toExist()
  })
  it('should add rgsShow class on loading complete', function () {
    component.setState({ loading: false })
    const hasClass = TestUtils.findRenderedDOMComponentWithClass(component, 'rgsShow')
    expect(hasClass).toExist()
  })
})

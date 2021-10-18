import React from 'react';
import { Link } from 'react-router-dom';
var {expect } = require('chai');
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {HMenu} from './components/hamburgerMenu/HamMenu';

configure({adapter: new Adapter()});
  
describe(HMenu, () => {
  let wrapper = shallow(<HMenu/>)
  it('it should be a function', () => {
      expect(HMenu).to.be.a('function')
    });
    it('Deberia renderizar  <Link />', () => {
      expect(wrapper.find(Link)).to.have.length(3);
    });
    it('El primer Link debe cambiar la ruta hacia "/".', () => {
      expect(wrapper.find(Link).at(0).prop('to')).to.equal('/');
    });
    it('El primer Link debe cambiar la ruta hacia "/EventListing".', () => {
      expect(wrapper.find(Link).at(1).prop('to')).to.equal('/EventListing');
    });
    it('El primer Link debe cambiar la ruta hacia "/create".', () => {
      expect(wrapper.find(Link).at(3).prop('to')).to.equal('/create');
    });
  })

import React from 'react';
import ToggleButton from '../src';
import {shallow} from "enzyme";
import Faker from "faker";


test('initialize to true', () => {
    var textOn = Faker.lorem.word();
    var textOff = Faker.lorem.word();
    var toggleBtn = <ToggleButton textOn={textOn} textOff={textOff}/>;
    const component = shallow(toggleBtn);
    expect(component.text()).toEqual(textOn);
});

test('change value to false', () => {
    var textOn = Faker.lorem.word();
    var textOff = Faker.lorem.word();
    var toggleBtn = <ToggleButton textOn={textOn} textOff={textOff}/>;
    const component = shallow(toggleBtn);
    component.simulate('click');

    expect(component.text()).toEqual(textOff);
});
test('Rechange value to true', () => {
    var textOn = Faker.lorem.word();
    var textOff = Faker.lorem.word();
    var toggleBtn = <ToggleButton textOn={textOn} textOff={textOff}/>;
    const component = shallow(toggleBtn);
    component.simulate('click');
    component.simulate('click');
    expect(component.text()).toEqual(textOn);
});
test("pair or impair", () =>{
    var textOn = Faker.lorem.word();
    var textOff = Faker.lorem.word();
    var toggleBtn = <ToggleButton textOn={textOn} textOff={textOff}/>;
    const component = shallow(toggleBtn);
    const appel = Math.floor(Math.random()*10);
    for (let i = 0; i < appel; i++) {
        component.simulate("click");
    }
    if (appel%2 === 0){
        expect(component.text()).toEqual(textOn);
    }
    else {
        expect(component.text()).toEqual(textOff);
    }

});

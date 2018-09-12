
import React from 'react';
import Button from '../src';
import {shallow} from "enzyme";
import Faker from 'faker';


test('Le button doit afficher le texte', () => {
    const text = Faker.lorem.word();
    const component = shallow(<Button text={text} />);
    expect(component.text()).toEqual(text);
});

test('Le bouton doit afficher le texte passé en children', () => {
    const text = Faker.lorem.word();
    let component = shallow(<Button>{text}</Button>);
    expect(component.text()).toEqual(text);
});

test('Le bouton doit prioriser la propriété children plutôt que la proriété text', () => {
    const text = Faker.lorem.word();
    const child = Faker.lorem.word();
    let component = shallow(<Button text={text}>{child}</Button>);
    expect(component.text()).toEqual(child);
});
import React from 'react';
import DisplayComponent from '../component/displayComponent';
import { create} from 'react-test-renderer';

describe('testing Component snapshot', () => {
    test('displaycomponent', () => {
        let tree = create(<DisplayComponent/>)
        expect(tree.toJSON()).toMatchSnapshot();
    })
})
import Enzyme from 'enzyme';
import { EnzymeAdapter } from 'enzyme';

Enzyme.configure( {
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true
});
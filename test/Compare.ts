import ava from 'ava';
import { compare } from '../src/index';

ava('compare', (test): void => {
    test.plan(2);

    test.is(compare(Buffer.from('hey'), Buffer.from('hey')), 0);
    test.is(compare(Buffer.from('hehe'), Buffer.from('hoho')), 2);
});

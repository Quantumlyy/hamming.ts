import assert from 'assert';
import { HexToBinLookup } from './constants/Lookups';

export function hexToBin(value: string | Buffer): string {
	let s = '';
	if (Buffer.isBuffer(value)) s = value.toString('hex');
	s = s.replace(/^0x/, '');
	assert(/^[0-9a-fA-F]+$/.test(s));
	let ret = '';
	for (const el of s) ret += HexToBinLookup[el];
	return ret;
}

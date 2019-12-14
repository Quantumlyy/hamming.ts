import { AssertionError } from 'assert';

export function compare(a: Buffer, b: Buffer): number {
	if (a.length !== b.length) throw new AssertionError({ message: 'Argument must have equal lengths.'});
	let count = 0;
	for (var i = 0; i < a.length; i++) if (a[i] !== b[i]) count++;
	return count;
}

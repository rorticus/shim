import DPromise from '../../src/Promise';

export default async function main(callback: (n: number) => void) {
	async function getNumber() {
		return DPromise.resolve(42);
	}

	const result = await getNumber();

	callback(result);
}

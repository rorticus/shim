export default async function main(callback: (n: number) => void) {
	async function getNumber() {
		return Promise.resolve(42);
	}

	const result = await getNumber();

	callback(result);
}

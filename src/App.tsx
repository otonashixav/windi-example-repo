export default function App() {
	const something = false;
	return <div class='bg-white p-6' classList={{ 'bg-white': something, 'bg-red': !something }}>Hello World!</div>;
}

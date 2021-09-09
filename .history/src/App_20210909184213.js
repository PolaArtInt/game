import Header from "./components/HeaderBlock/Header.js";
import Footer from "./components/FooterBlock/Footer.js";
import Layout from "./components/LayoutsBlock/Layout.js";

import background from './img/bg3.jpg';
import background1 from './img/bg2.jpg';

function App() {
  return (
    <>
			<Header
				title="This is title"
				descr="This is description!"
			/>
			<Layout
				title="This is title"
				descr="Block 1"
				urlBg={ background }
			/>
			<Layout
				title="This is title"
				descr="Block 2"
				colorBg="#000"
			/>
			<Layout
				title="This is title"
				descr="Block 3"
				urlBg={ background }
			/>
			<Footer />
		</>
  );
}

export default App;

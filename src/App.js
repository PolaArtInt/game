import Header from './components/HeaderBlock/Header.js';
import Footer from './components/FooterBlock/Footer.js';
import Layout from './components/LayoutsBlock/Layout.js';

import background1 from './img/bg-1.jpg';
import background2 from './img/bg-2.jpg';

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
				urlBg={ background1 }
			/>
			<Layout
				title="This is title"
				descr="Block 2"
				colorBg="transparent"
				>
				<p>Lorem ipsum amet consectetur adipisicing elit. Unde, magni!</p>
				<p>Lorem ipsum amet consectetur adipisicing elit. Unde, magni!</p>
			</Layout>
			
			<Layout
				title="This is title"
				descr="Block 3"
				urlBg={ background2 }
			/>
			<Footer />
		</>
  );
}

export default App;

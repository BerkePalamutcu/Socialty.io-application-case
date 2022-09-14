import Sidebar from '../components/sidebar/Sidebar';
import Content from '../components/content/Content';
//ONE PAGE APP THAT CONSISTS OF 2 COMPONENTS
const Home: React.FC<any> = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Content />
    </div>
  );
};

export default Home;

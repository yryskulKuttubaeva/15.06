import { Route, Routes } from 'react-router-dom';
import ArticleCreate from './ArticleCreat';
import ArticleFull from './ArticleFull';
import ArticleList from './ArticleList';
import ArticleUpdata from './ArticleUpdata';
import ArticleDelete from './ArticleDelete';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/create" element={<ArticleCreate />} />
        <Route path="/:id" element={<ArticleFull />} />
        <Route path="/update/:id" element={<ArticleUpdata />} />
        <Route path="/delete/:id" element={<ArticleDelete />} />
      </Routes>
    </div>
  );
}

export default App;

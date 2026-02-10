import App from '../App.jsx';
import Home from '../pages/Home.jsx';
import Article from '../pages/Article.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'articles/:id/:slug?',
        element: <Article />,
      },
    ],
  },
];

export default routes;
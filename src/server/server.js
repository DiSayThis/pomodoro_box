import express from 'express';
import ReactDOM from 'react-dom/server';
import compression from 'compression';
import helmet from 'helmet';
import { App } from '../app';
import { indexTemplate } from './indexTemplate';

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV !== 'production';

const app = express();

if (!IS_DEV) {
  app.use(compression());
  app.use(
    helmet({
      contentSecurityPolicy: false
    })
  );
}

app.use('/static', express.static('./dist/client'));

app.get('*', (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(App())));
});

app.listen(PORT, () => {
  console.log(`server started on port ${process.env.URL || `http://localhost:${PORT}`}`);
});

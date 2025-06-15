import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";
import {
  form,

} from "../controllers/controleDados.js";

const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Rota para o formulário
router.post('/contato', form);
router.get('/contato', (req, res) => {
  res.redirect('/');
});

// Rota para o index.html
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/public/pages', 'index.html'));
});

export default router;


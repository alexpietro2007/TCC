import { Router } from "express";
import {
    form,
} from "../controllers/controleDados.js"

const router = Router();

router.get('/contato', form);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/pages', 'index.html'));
});

export default router;
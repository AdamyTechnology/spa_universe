import { Router } from './routss.js'

const router = new Router()

router.add('/', './pages/home.html')
router.add('/universe', './pages/universe.html')
router.add('/exploration', './pages/exploration.html')
router.add(404, './pages/404.html')

router.handle()

window.onpopstate = () => router.handle() // para mecher nas setas de voltar e avançar do site
window.route = () => router.route() // utilizado para chamar a prevent default

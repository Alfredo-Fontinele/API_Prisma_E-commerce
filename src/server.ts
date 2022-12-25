import { app } from './app'

const PORT = 3000

app.listen(PORT, () => {
    console.log(`\nServer is running on http://localhost:${PORT}\n`)
})

import { config } from 'dotenv';
import express, { json } from 'express'
import { router } from '../../routes/express'

config()

const PORT_SERVER = process.env.PORT_SERVER || 3000

const app = express()

app.use(json())

app.use(router)

const startExpress = (): void => {
    app.listen(PORT_SERVER, () => console.log(`Express app listening on port ${PORT_SERVER}`))
}

export { startExpress }
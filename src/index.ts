import express from 'express'
import { AppDataSource } from './data-source'
import router from './routers/router'

AppDataSource.initialize().then(() => {
    const app = express()

    app.use(express.json())

    app.use(router)


    return app.listen(process.env.PORT, () => console.log(`Running in port ${process.env.PORT}`))
})
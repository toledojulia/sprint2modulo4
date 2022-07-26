const controller = (app, dicas) => {

    app.post('/create', (req, res) => {

        const body = req.body

        dicas.infos.push(body.infos)

        console.log(body)

        res.json(body)

    })

    app.get('/tips', (req, res) => {

        res.json({

            "infos": frases.infos[parseInt(Math.random() * frases.infos.length)]

        })
        
    })
}

export default controller
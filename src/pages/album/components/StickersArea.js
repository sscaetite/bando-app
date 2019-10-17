import React, { useState, useEffect } from 'react'
import Sticker from './Sticker'
import axios from 'axios'
import ReactLoading from 'react-loading'

const StickerArea = () => {
    const url = "http://127.0.0.1:3000/"
    const [list, setList] = useState([])
    const [loadingStickers, setLoadingStickers] = useState(true)

    useEffect(() => {
        setLoadingStickers(true)
        const fetchData = () => {
            axios.get(url).then(result => {
                setTimeout(() => {
                    setList(result.data) //Atualiza o List depois de receber os dados da API
                    setLoadingStickers(false) //Atualiza o LoadingStickers, fazendo com que apareça a lista com as figurinhas
                }, 2000)
            })
        }
        fetchData()
    }, [])

    const styleDiv = {
        paddingTop: `${3}em`,
        paddingBottom: `${3}em`,
    }

    const styleDivStickers = {
        paddingTop: `${3}em`,
        paddingBottom: `${3}em`,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center"
    }

    const styleTextTitle = {
        margin: 0,
        color: "#434343",
        textAlign: "center",
        textTransform: "uppercase",
        fontSize: `${2.4}em`,
        fontFamily: "Roboto",
        fontWeight: 500
    }


    return (
        < div style={styleDiv} >
            <h1 style={styleTextTitle}>Suas Figurinhas</h1>
            {!loadingStickers ? <div style={styleDivStickers}>
                {list.map((sticker) => {
                    return <Sticker key={sticker.id} url={sticker.url}></Sticker>
                })}
            </div> : <div style={{display:"flex", justifyContent:"center"}}>
                <ReactLoading type={"bubbles"} color={"black"} height={667} width={200}/>
                </div>}
        </div >
    )
}

export default StickerArea
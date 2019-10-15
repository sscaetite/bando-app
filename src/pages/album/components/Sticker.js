import React from 'react'

const Sticker = (props) => {
    const styleContainer = {
        //padding: `${1}em`,
        backgroundImage: `linear-gradient(to right bottom, rgba(255,27,1,0.6), rgba(0,0,0,0.6)), url(${props.url})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
        margin: `${10}px`,
        height: `${30}vw`,
        minHeight: `${450}px`,
        width: `${20}vw`,
        minWidth: `${300}px`,
        borderRadius: 20,
        boxShadow: `${10}px ${10}px ${10}px rgba(0,0,0,0.2)`,
    }
    const styleRow1 = {
        //background: "rgba(0, 2, 30, 0.5)",
        height: "20%",        
        padding: `${1}em ${1}em ${0}em ${1}em`,
    }
    const styleRow2 = {
        //background: "rgba(0, 2, 30, 0.5)",
        height: "45%"
    }
    const styleRow3 = {
        backgroundImage: "linear-gradient(to bottom top, rgba(0,0,0, 0.8),rgba(255, 255, 255, 0))",
        padding: `${0}em ${1}em ${0}em ${1}em `,
        height: "35%"
    }
    const styleTitle = {
        margin: 0,
        textAlign: "center",
        color: "#ededed",
        fontFamily: "Dancing Script",
        fontSize: `${2}em`,
        fontWeight: 700,
    }

    const styleCaption = {
        margin: 0,
        color: "#ededed",
        textAlign: "center",
        fontFamily: "Open Sans",
        fontSize: `${1.2}em`,
        fontWeight: 300,
        fontStyle: "italic",
    }

    const styleCollection = {
        margin: 0,
        color: "#ededed",
        fontFamily: "Open Sans",
        fontSize: `${1}em`,
        fontWeight: 300,
    }

    const styleCollectionTitle = {
        margin: 0,
        marginTop: -10,        
        color: "#ededed",
        fontFamily: "Open Sans",
        fontSize: `${2}em`,
        fontWeight: 800,
    }
    return (
        <div style={styleContainer}>
            <div style={styleRow1}>
                <h3 style={styleCollection}>COLEÇÃO</h3>
                <h4 style={styleCollectionTitle}>Capirusp 2019</h4>
            </div>
            <div style={styleRow2}></div>
            <div style={styleRow3}>
                <h3 style={styleTitle}>Peita Preta Caipi 019</h3>
                <h4 style={styleCaption}>Para relembrar esse momento marcante em sua história.</h4>
            </div>
        </div>
    )
}

export default Sticker
import { Link } from "react-router-dom"

const RoutingMain = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '1180px',
            height: '494px',
            textAlign: 'center',
            background: 'rgba(160, 167, 71, 1)',
            margin: 'auto'
        }}>
            <h1 style={{
                fontWeight: 500,
                fontSize: '48px',
                lineHeight: '48px',
                textAlign: "center",
            }}>Какая квартира подойдет именно вам</h1>
            <p style={{
                fontWeight: 500,
                fontSize: '28px',
                lineHeight: '32px',
                textAlign: 'center',
                marginTop: '16px'
            }}>Ответье на 4 вопросов, чтобы подобрать идефльный вариант недвижимости</p>
            <button style={{
                width: '168px',
                height: '52px',
                borderRadius: '12px',
                padding: '16px 24px 16px 24px',
                background: 'black',
                color: 'white',
                marginTop: '40px',
            }}> <Link to={'numOne'}>Пройти тест</Link></button>
        </div>
    )
}

export default RoutingMain
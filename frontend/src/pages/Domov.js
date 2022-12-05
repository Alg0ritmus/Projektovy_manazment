import Footer from "../components/Footer"
import Prihlasenie from "../components/Prihlasenie" 
import '../style/style.css'


export default function Domov(){
    return(
        <>
            <div className="homeContainer">
                <div className="homeVrap">
                    <div className="homeLeft_box">
                        <h1 className="homeLogo">Tukbook</h1>
                        <p className="paragraf_domov">Vitaj na najľepšej socialnej sieti na švece!</p>
                        <p className="paragraf_domov">Prihlás sa alebo si vytvor nový účet.</p>
                    </div>
                    <Prihlasenie />
                </div>
                <Footer className="domov_footer"/>
            </div>  
            
        </>

    )
}
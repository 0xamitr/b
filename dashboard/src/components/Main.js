import Bargraph from './Bargraph.js'
import Linegraph from './Linegraph.js'
import Polarchart from './Polarchart.js'
import Bubblechart from './Bubblechart.js'
import Scatarchart from './Scatarchart.js'
import Radarchart from './Radarchart.js'
import './Bargraph.css'

export default function Main(){
    return (
        <main>
            <div className='left'>

            </div>
            <div className='right'>
                <Bargraph />
                <Linegraph />
                {/* <Polarchart /> */}
                <Bubblechart />
                <Scatarchart />
                <Radarchart />
            </div>
        </main>
    )
}
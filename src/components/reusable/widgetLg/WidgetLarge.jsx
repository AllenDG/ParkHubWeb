import React from 'react'
import './widgetLarge.css'

//import images ==========>
import profile from '../../../assets/images/profile.jpg' 

export default function WidgetLarge() {

  const Button = ({type}) =>{
    return <button className={'widgetLgBtn ' + type}>{type}</button>
  }
  return (
    <div className='widgetLg'>
    <h3 className='widgetLgTitle'>Latest Parking Transactions</h3> 
    <table className='widgetLgTable'>
      <tr className='widgetLgTr'>
        <th className='widgetLgTh'>Customer</th>
        <th className='widgetLgTh'>Date</th>
        <th className='widgetLgTh'>Amount</th>
        <th className='widgetLgTh'>Status</th>
      </tr>

      <tr className='widgetLgTr'>
        <td className='widgetLgUser'>
        <img src={profile} alt='' className='widgetLgImg'></img>
        <span className='widgetLgName'> Allen Walter F. De Guzman</span>
        </td>

        <td className='widgetLgDate'>September 29 2023</td>
        <td className='widgetLgAmount'>$5.00</td>
        <td className='widgetLgStatus'><Button type="Approved"> </Button></td>
      </tr>

      <tr className='widgetLgTr'>
        <td className='widgetLgUser'>
        <img src={profile} alt='' className='widgetLgImg'></img>
        <span className='widgetLgName'> Allen Walter F. De Guzman</span>
        </td>

        <td className='widgetLgDate'>September 29 2023</td>
        <td className='widgetLgAmount'>$5.00</td>
        <td className='widgetLgStatus'><Button type="Declined"> </Button></td>
      </tr>

      <tr className='widgetLgTr'>
        <td className='widgetLgUser'>
        <img src={profile} alt='' className='widgetLgImg'></img>
        <span className='widgetLgName'> Allen Walter F. De Guzman</span>
        </td>

        <td className='widgetLgDate'>September 29 2023</td>
        <td className='widgetLgAmount'>$5.00</td>
        <td className='widgetLgStatus'><Button type="Pending"> </Button></td>
      </tr>

      <tr className='widgetLgTr'>
        <td className='widgetLgUser'>
        <img src={profile} alt='' className='widgetLgImg'></img>
        <span className='widgetLgName'> Allen Walter F. De Guzman</span>
        </td>

        <td className='widgetLgDate'>September 29 2023</td>
        <td className='widgetLgAmount'>$5.00</td>
        <td className='widgetLgStatus'><Button type="Approved"> </Button></td>
      </tr>
    </table>
    </div>
  )
}

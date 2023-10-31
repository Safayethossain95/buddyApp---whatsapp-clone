import React from 'react'
import { contactListApi } from '../../../utils/contactlistApi'
import './TotalContactList.scss'
import { useData } from '../../../context/DataContext'
const TotalContactList = () => {

    const { setData } = useData();

    const handlesingleclick=(myitem)=>{
        setData(myitem)
    }
  return (
    <>
        <div className='totalcontactlist'>
        {
            contactListApi.map((item,key)=>{
                return(
                    <div key={key} className='singlecontactitem d-flex align-items-center' onClick={()=>handlesingleclick(item)}>
                        <div className='svgwrap'>
                        {item.imgurl} 

                        </div>

                        <div className='rightside'>
                            <p>
                                {item.name}
                            </p>
                            <p className='smtext'>
                                {item.latestmessage}
                            </p>
                        </div>
                    </div>
                )
            })
        }
        </div>
    </>
  )
}

export default TotalContactList
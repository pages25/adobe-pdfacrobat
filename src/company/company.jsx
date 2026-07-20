import React, { useState } from 'react'
import './company.css';
import Percentage_Loading from '../preloader-percentage.gif';
import LogoBrand from '../logo.png';

export const Company = ({progressBar, brand, transferCompanyName, setBrand}) => {



  return (
    <div className='company_All'>
        <section className='ctr'>
            <img
                className='acrobat_brand'
                src={`data:image/png;base64,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`}
            />
        </section>

        <div className='shapee'>
            <div className="contnt">

                <p className='txt_cntr'>PDF DOCUMENT_1656.PDF ONLINE DOCUMENT</p>

                <p className='txt_cntr detls'>Enter Details to Download.</p>

                <span className='comany_name'>Company Name</span>

                <form onSubmit={transferCompanyName}>
                    <input 
                        type='text'
                        className='searchbar'
                        required
                        autoFocus
                        title='Enter Company name'
                        placeholder='Company name'
                        value={brand}
                        onChange={e=> setBrand(e.target.value)}
                    />

                    <div>
                        <input 
                            type='submit'
                            value={`Download`}
                            className='enter_btn'
                            
                        />
                    </div>


                </form>

                { progressBar ? 
                    <img
                        className='loadding'
                        title='Loading...'
                        src={Percentage_Loading}
                        onClick={transferCompanyName}
                    /> 
                : undefined}

            </div>
        </div>

        
    </div>
  )
};
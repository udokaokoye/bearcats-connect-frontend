import React from 'react'
import Image from 'next/image'
const PostMedia = ({fileType, files, orientation}) => {




    if (files.length  < 3) {
        return (
            <div className={`postMedia_container ${orientation?.length == 2 ? 'double_layout' : ''} ${orientation?.length == 3 ? 'tri_layout' : ''} ${orientation?.length == 2 && orientation[0] == "l" ? 'double_layout_l' : ''}${orientation?.length == 2 && orientation[0] == "p" ? 'double_layout_p' : ''} ${orientation.length == 1 && orientation[0] == "p" ? 'single_p' : 'single_l'} `}>
        
                    {
                        files?.map((image, index) => (
                            <div key={index} className={`post_Media_Wraapper ${orientation[index] == "l" ? "landscape" : "potrait"}`}>
                            <Image className='hey' src={image} layout='fill' />
                            {/* {orientation.length} */}
                        </div>
                        ))
                    }
                
            </div>
        )
    } else if (files.length == 3)  {
        return (
            <div className={`tri_layout ${orientation[0] == "l" ? 'tri_layout_l_first' : ''}`}>
            <div className="col_1">
                <div className={`post_Media_Wraapper ${orientation[0] == "l" ? "landscape" : "potrait"}`}>
                    <Image className='hey' src={files[0]} layout='fill' />
                </div>
            </div>
    
            <div className="col_2">
                    <div className={`post_Media_Wraapper ${orientation[1] == "l" ? "landscape" : "potrait"}`}>
                        <Image className='hey' src={files[1]} layout='fill' />
                    </div>
                    <div className={`post_Media_Wraapper ${orientation[2] == "l" ? "landscape" : "potrait"}`}>
                        <Image className='hey' src={files[2]} layout='fill' />
                    </div>
            </div>
         </div>
        )
    } else if (files.length >= 4) {
        return (
            <div className={`quad_layout`}>
            <div className="col_1">
                <div className={`post_Media_Wraapper ${orientation[0] == "l" ? "landscape" : "potrait"}`}>
                    <Image className='hey' src={files[0]}  layout='fill' />
                </div>
                <div className={`post_Media_Wraapper ${orientation[1] == "l" ? "landscape" : "potrait"}`}>
                    <Image className='hey' src={files[1]}  layout='fill' />
                </div>
            </div>
    
            <div className="col_2">
                    <div className={`post_Media_Wraapper ${orientation[2] == "l" ? "landscape" : "potrait"}`}>
                        <Image className='hey' src={files[2]}  layout='fill' />
                    </div>
                    {
                        files.length > 4 ? (
                            <div style={{background: `url(${files[3]})`}} className={`post_Media_Wraapper post_more_media ${orientation[3] == "l" ? "landscape" : "potrait"}`}>
                                <div className="more_pic_overlay">
                                <span>+ {files.length - 4}</span>
                                </div>
                                
                                {/* <Image className='hey' src={files[3]}  layout='fill' /> */}
                            </div>
                        ) : (
                            <div className={`post_Media_Wraapper ${orientation[3] == "l" ? "landscape" : "potrait"}`}>
                        <Image className='hey' src={files[3]}  layout='fill' />
                    </div>
                        )
                    }
            </div>
         </div>
        )
    }


  
}

export default PostMedia
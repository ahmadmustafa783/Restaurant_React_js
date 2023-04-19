import React from "react";




import MenuData from "./MenuData";
import MenuItem from "./MenuItems";


function MenuA(props) {
  

    return <>


{MenuData.slice(0,6).map((post) => {
            
            return (<MenuItem
                img={post.img}
                title={post.title.slice(0, 15)}
                para={post.detail.slice(0, 100)}
                price= {post.price}
            />)

        })}



    </>

}
function MenuB(props) {
 

    return <>


        {MenuData.slice(6,12).map((post) => {
            
            return (<MenuItem
                img={post.img}
                title={post.title.slice(0, 15)}
                para={post.detail.slice(0, 100)}
                price= {post.price}
            />)

        })}



    </>

}
function MenuC(props) {
  

    return <>

{MenuData.slice(12,18).map((post) => {
            
            return (<MenuItem
                img={post.img}
                title={post.title.slice(0, 15)}
                para={post.detail.slice(0, 100)}
                price= {post.price}
            />)

        })}



    </>

}
function MenuD(props) {
  

    return <>


{MenuData.slice(18,24).map((post) => {
            
            return (<MenuItem
                img={post.img}
                title={post.title.slice(0, 15)}
                para={post.detail.slice(0, 100)}
                price= {post.price}
            />)

        })}



    </>

}

export default MenuA
export {MenuB,MenuC,MenuD}
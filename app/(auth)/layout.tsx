import React from "react"
export default function({children}: {
    children:React.ReactNode
}){
    return (
        <>  
            <div className="border-b p-2 text-center">
              <b>
                20% off for next 3 days
              </b>
            </div>    
            <div>
                {children}
            </div>
        </>  
      );
    
}

import {useEffect} from 'react'
export default function redirect() {
    useEffect(() => {
        window.location.assign(window.location.href + '/2021')
    })
    return(
        <>
        </>
    )
}
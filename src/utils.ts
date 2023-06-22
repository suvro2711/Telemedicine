export const isWindowWithSmaller = (mediaSize:number) => {
    const isWindowWithSmaller = window.innerWidth < mediaSize
    return isWindowWithSmaller 
}
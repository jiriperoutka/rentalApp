const useModal = () =>{
    const isActive = useState("modal", () =>false)
    const toggleModal = () => {
        console.log(isActive)
        isActive.value = !isActive.value
    }

    return{
        isActive,
        toggleModal,
    }

}

export default useModal;
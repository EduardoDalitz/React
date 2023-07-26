const TemplateExpressions = () => {

    const name = "Eduardo"
    const data={
        age:31,
        job:"Programmer",
    }
    return(
        <div>
            <h2>Olá {name}, tudo bem?</h2>
            <h3>Você atua como {data.job} e tem {data.age} anos!</h3>
        </div>
    )


}

export default TemplateExpressions;
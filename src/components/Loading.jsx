const Loading = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading
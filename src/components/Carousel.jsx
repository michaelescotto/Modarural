const Carousel = () => {
    return (

        <div id="carouselExampleIndicators" className="carousel slide pt-2 shadow-lg mb-5" data-bs-ride="carousel" data-bs-interval="3500" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/diapo0.png" className="d-block w-100 border rounded " style={{ maxHeight: '250px', objectFit: 'cover' }} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="/diapo1.png" className="d-block w-100 border rounded" style={{ maxHeight: '250px', objectFit: 'cover' }} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="/diapo2.png" className="d-block w-100 border rounded" style={{ maxHeight: '250px', objectFit: 'cover' }} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="/diapo3.png" className="d-block w-100 border rounded" style={{ maxHeight: '250px', objectFit: 'cover' }} alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
            </button>
        </div>
    )
}

export default Carousel
import { useContext, useState } from "react";
import Pagination from "react-js-pagination";
import { Context } from "../store/appContext";

const Home = () => {
    const [activePage, setActivePage] = useState(1);
    const { store, actions } = useContext(Context);
    const { characters } = store;
    const handlePageChange = (pageNumber) => {
        actions.getCharacters("https://rickandmortyapi.com/api/character/?page="+pageNumber);
        setActivePage(pageNumber);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Home</h1>
                </div>
            </div>
            <div className="row">
                <div className="animate__animated animate__fadeInDown col-md-12 py-3 d-flex justify-content-center">
                    {
                        !!characters && (
                            <Pagination
                                activePage={activePage}
                                itemsCountPerPage={characters.results.length}
                                totalItemsCount={characters.info.count}
                                pageRangeDisplayed={10}
                                onChange={handlePageChange}
                                itemClass="page-item"
                                linkClass="page-link"
                            />
                        )
                    }

                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="accordion" id="accordionExample">
                        {
                            !!characters &&
                            characters.results.length > 0 &&
                            characters.results.map((character, index) => {
                                return (
                                    <div className="animate__animated animate__fadeInDown accordion-item" key={index}>
                                        <h2 className="accordion-header" id="headingOne">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={"#collapse" + index}
                                                aria-expanded="true"
                                                aria-controls="collapseOne"
                                            >
                                                {character.name} #{index + 1}
                                            </button>
                                        </h2>
                                        <div
                                            id={"collapse" + index}
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">

                                                <div className="card mb-3" style={{ maxWidth: 540 }}>
                                                    <div className="row g-0">
                                                        <div className="col-md-4">
                                                            <img src={character.image} className="img-fluid rounded-start" alt="..." />
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="card-body">
                                                                <h5 className="card-title">Card title</h5>
                                                                <p className="card-text">
                                                                    This is a wider card with supporting text below as a natural lead-in
                                                                    to additional content. This content is a little bit longer.
                                                                </p>
                                                                <p className="card-text">
                                                                    <small className="text-muted">Last updated 3 mins ago</small>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="animate__animated animate__fadeInDown col-md-12 py-3 d-flex justify-content-center">
                    {
                        !!characters && (
                            <Pagination
                                activePage={activePage}
                                itemsCountPerPage={characters.results.length}
                                totalItemsCount={characters.info.count}
                                pageRangeDisplayed={10}
                                onChange={handlePageChange}
                                itemClass="page-item"
                                linkClass="page-link"
                            />
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Home;
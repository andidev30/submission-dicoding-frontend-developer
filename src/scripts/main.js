import './components/footer-custom'

function main() {

    const get = async () => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?t=tom+and+jerry&plot=full&apikey=fdb84176`);
            const responseJson = await response.json();
            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAll(responseJson);
                // console.log(responseJson)
            }
        } catch (error) {
            showResponseMessage(error);
        }
    };

    const renderAll = (respons) => {
        const listElement = document.querySelector("#list");
        listElement.innerHTML = "";


        listElement.innerHTML += `
            <div class="col-8 col-md-4 ml-2">
                <div class="card">
                <img src="${respons.Poster}" class="img-fluid" alt="">
                    <div class="card-body">
                        <h5>${respons.Title}</h5>
                        <div>
                        <ul class="list-group mt-3">
                            <li class="list-group-item">${respons.Rated}</li>
                            <li class="list-group-item">${respons.Year}</li>
                            <li class="list-group-item">${respons.Realeased}</li>
                            <li class="list-group-item">${respons.Genre}</li>
                        </ul>
                        </div>
                        <p class="p-3"> Plot : ${respons.Plot}</p>
                    </div>
                </div>
            </div>
            `
    };

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    document.addEventListener("DOMContentLoaded", () => {
        get();
    });
}

export default main;
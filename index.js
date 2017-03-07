(function () {
    // Global variables
    const searchBox = document.getElementById("searchBox");
    var httpRequest;

    // Add random wiki page api request as an event lister
    document.getElementById("randomLink").addEventListener("click", handleRandomWikiAPI);
    // Add keyup listenr to request api data about wiki articles
    document.getElementById("searchBox").addEventListener("keyup", usersValue);
    // Add click listenr to searchBox
    searchBox.addEventListener("click", usersValue);

    //***********************************************************
    // Function usersValue recives user input and then adds that *
    // value to the api URL string                              *
    //***********************************************************
    function usersValue() {
        let searchedWord = searchBox.value,
            URLwithoutSearchWord = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=?&search=",
            URLwithSearchedWord = URLwithoutSearchWord + searchedWord;

        handleRandomWikiAPI(URLwithSearchedWord);
    }

    //*******************************************************
    // handleRandomWikiAPI Function handles the api request *
    // for wikipedia to send us a random quote              *
    //*******************************************************
    function handleRandomWikiAPI(url) {
        // Local variables
        httpRequest = new XMLHttpRequest();
        const method = "POST";

        // call (open, readystate, and send) methods
        httpRequest.open(method, url, true);
        httpRequest.setRequestHeader( 'Api-User-Agent', 'Example/1.0' );
        httpRequest.onreadystatechange = requestStatus;
        httpRequest.send();
    }

    //**************************************************************
    //* requestStatus function handles the actions to be perfomed  *
    //* when the document is read                                  *
    //**************************************************************
    function requestStatus() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            /* add stuff to the document */
            console.log(this.responseText);
        }
    }

    //***************************************************************
    // iframeContent function added content to the iframe element   *
    // in the main html document                                    *
    //***************************************************************
    function iframeContent() {

    }

    //*******************************************************************
    // displaySuggestedArticles function displays suggested articles.   *
    // Each article is assigned it's own individual well.               *
    //*******************************************************************
    function displaySuggestedArticles() {

    }

})();

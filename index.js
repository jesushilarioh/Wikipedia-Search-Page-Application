(function () {
    // Global variables
    const usersSearchedWord = document.getElementById("searchBox");

    // Add random wiki page api request as an event lister
    document.getElementById("randomLink").addEventListener("click", handleRandomWikiAPI);
    // Add keyup listenr to request api data about wiki articles
    document.getElementById("searchBox").addEventListener("keyup", usersValue);
    // Add click listenr to usersSearchedWord
    usersSearchedWord.addEventListener("click", usersValue);

    //***********************************************************
    // Function userValue recives user input and then adds that *
    // value to the api URL string                              *
    //***********************************************************
    function userValue() {
        let searchedWord = usersSearchedWord.value,
            wikiURL = ""

    }

    //***********************************************
    // handleRandomWikiAPI Function handles the api request   *
    // for forismatic to send us a random quote     *
    //***********************************************
    function handleRandomWikiAPI() {
        // Local variables
        let httpRequest = new XMLHttpRequest(),
            method = "GET",
            url = "https://en.wikipedia.org/w/api/php?action=opensearch&format=json&callback=?search=";

        // call (open, readystate, and send) methods
        httpRequest.open(method, url, true);
        httpRequest.onreadystatechange = requestStatus;
        httpRequest.send();
    }

    //***********************************************
    // handleRandomWikiAPI Function handles the api request   *
    // for forismatic to send us a random quote     *
    //***********************************************
    function handleRandomWikiAPI() {
        // Local variables
        let httpRequest = new XMLHttpRequest(),
            method = "GET",
            url = "https://en.wikipedia.org/w/api/php?action=opensearch&format=json&callback=?search=";

        // call (open, readystate, and send) methods
        httpRequest.open(method, url, true);
        httpRequest.onreadystatechange = requestStatus;
        httpRequest.send();
    }

    //**************************************************************
    //* requestStatus function handles the actions to be perfomed  *
    //* when the document is read                                  *
    //**************************************************************
    function requestStatus() {
        if (this.requestStatus === XMLHttpRequest.DONE && this.status === 200) {
            /* add stuff to the document */
        } else {
            /* add event handler, that an error has occured */
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

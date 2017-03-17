$(document).ready(function() {
    const wikiLinksElement = $("#wiki-links");
    //random  wiki button
    $("#random").click(function() {
        window.open("https://en.wikipedia.org/wiki/Special:Random");
    });
    //search URL
    //"https://www.mediawiki.org/wiki/API:Main_page"
    function updateLinks(data) {
        var topic, desc, link, resultHtml = "";
        // 1 - Topic, 2 = Short desc, 3 = Links

        if (data[1] !== undefined) {
            for (var i = 0; i < data[1].length; i++) {
                topic = data[1][i];
                desc = data[2][i];
                link = data[3][i];

                var content = "";
                content += "<div class='well' onClick='window.open(\"" + link + "\");'>";
                content += "\t<h4>" + topic + "</h4>";
                content += "\t<p class='wiki-link-desc'>" + desc + "</p>";
                content += "</div>";
                resultHtml += content;
            }
            wikiLinksElement.html(resultHtml);
        } else {
            resultHtml = "";
            wikiLinksElement.html(resultHtml);
        }
    }

    function search() {
        var ENG_WIKI_API_LINK = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=?&search=",
            textToSearch = $("#input-search").val(),
            request = ENG_WIKI_API_LINK + textToSearch;

        $.ajax({
            type: "POST",
            url: request,
            dataType: "jsonp",
            success: function(data, textStatus, jqXHR) {
                updateLinks(data);
            },
        });
    }

    function handleSearch() {
        search();

        if (wikiLinksElement.css('visibility') === 'hidden') {
            wikiLinksElement.css('visibility', 'visible');
            $("#wiki-links").html();
        }
    }

    // Add click event to clear button
    $("#search-clear").on('click', function() {
        $("#input-search").val('');

        // hide wiki-links
        if (wikiLinksElement.css('visibility') === 'visible') {
            wikiLinksElement.css('visibility', 'hidden');
        }

        // Clear wiki-links content
        wikiLinksElement.html();
    });

    // Add Click Event to search-button
    $("#search-button").on('click', function() {
        handleSearch();
    });

    // Add Keyup Event to input-button
    $("#input-search").on('keyup', function() {
        handleSearch();
    });
});

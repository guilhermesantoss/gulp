var width = window.innerWidth;
var height = window.innerHeight;
var c_orientation = "";
var auxWidth = "";
var namePage = "";
var pages = ["publicacoes", "videos", "jogos", "ilustracoes", "mobile", "cursos"];

function init() {
    createMenuButtons();
    $(window).resize(onResize);
    onResize();
    $(document).on('click', '[data-linkOpen]', abrirLinkBlank);
}

// funcao que detecta se o navegador é IE ou Edge
function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
       // Edge (IE 12+) => return version number
       return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}

// funcao que monitora o scroll e faz os tratamentos para deixar o filtro fixed
function scroll() {
    // console.log("auxWidth:  " + auxWidth);
    var filter = document.getElementById("filters");
    // console.log("window.pageYOffset ", window.pageYOffset);
    if (typeof( window.pageYOffset ) == 'number') {
        if (namePage == "jogos") {
            if (window.pageYOffset >= 336) {
                if (detectIE()) {
                    filter.style.position = "fixed";
                    if (auxWidth >= 1200) {
                        filter.style.marginTop = "-220px";
                        filter.style.marginLeft = "-77px";
                    } else if (auxWidth > 992 && auxWidth < 1200) {
                        filter.style.marginTop = "-220px";
                        filter.style.marginLeft = "-84px";
                    } else if (auxWidth <= 991) {
                        filter.style.marginTop = "-210px";
                        filter.style.marginLeft = "-94px";
                    }
                } else {
                    filter.setAttribute("class", "sticky-top");
                }
            } else {
                filter.style.position = "";
                if (auxWidth >= 1200) {
                    filter.style.marginTop = "26px";
                    filter.style.marginLeft = "0px";
                } else if (auxWidth > 992 && auxWidth < 1200) {
                    filter.style.marginTop = "18px";
                    filter.style.marginLeft = "0px";
                } else if (auxWidth <= 991) {
                    filter.style.marginTop = "10px";
                    filter.style.marginLeft = "0px";
                }
            }
        } else if (namePage == "publicacoes") {
            if (window.pageYOffset >= 358) {
                if (detectIE()) {
                    filter.style.position = "fixed";
                    if (auxWidth >= 1200) {
                        filter.style.marginTop = "-210px";
                        filter.style.marginLeft = "-117px";
                    } else if (auxWidth > 992 && auxWidth < 1200) {
                        filter.style.marginTop = "-200px";
                        filter.style.marginLeft = "-124px";
                    } else if (auxWidth <= 991) {
                        filter.style.marginTop = "-190px";
                        filter.style.marginLeft = "-134px";
                    }
                } else {
                    filter.setAttribute("class", "sticky-top");
                }
            } else {
                filter.style.position = "";
                if (auxWidth >= 1200) {
                    filter.style.marginTop = "26px";
                    filter.style.marginLeft = "0px";
                } else if (auxWidth > 992 && auxWidth < 1200) {
                    filter.style.marginTop = "18px";
                    filter.style.marginLeft = "0px";
                } else if (auxWidth <= 991) {
                    filter.style.marginTop = "10px";
                    filter.style.marginLeft = "0px";
                }
            }
        } else if (namePage == "cursos") {
            if (window.pageYOffset >= 350) {
                if (detectIE()) {
                    filter.style.position = "fixed";
                    if (auxWidth >= 1200) {
                        filter.style.marginTop = "-210px";
                        filter.style.marginLeft = "-112px";
                    } else if (auxWidth > 992 && auxWidth < 1200) {
                        filter.style.marginTop = "-200px";
                        filter.style.marginLeft = "-120px";
                    } else if (auxWidth <= 991) {
                        filter.style.marginTop = "-190px";
                        filter.style.marginLeft = "-130px";
                    }
                } else {
                    filter.setAttribute("class", "sticky-top");
                }
            } else {
                filter.style.position = "";
                if (auxWidth >= 1200) {
                    filter.style.marginTop = "26px";
                    filter.style.marginLeft = "0px";
                } else if (auxWidth > 992 && auxWidth < 1200) {
                    filter.style.marginTop = "18px";
                    filter.style.marginLeft = "0px";
                } else if (auxWidth <= 991) {
                    filter.style.marginTop = "10px";
                    filter.style.marginLeft = "0px";
                }
            }
        } else if (namePage == "videos") {
            if (window.pageYOffset >= 333) {
                if (detectIE()) {
                    filter.style.position = "fixed";
                    if (auxWidth >= 1200) {
                        filter.style.marginTop = "-70px";
                        filter.style.marginLeft = "-230px";
                    } else if (auxWidth > 992 && auxWidth < 1200) {
                        filter.style.marginTop = "-60px";
                        filter.style.marginLeft = "-238px";
                    } else if (auxWidth <= 991) {
                        filter.style.marginTop = "-50px";
                        filter.style.marginLeft = "-248px";
                    }
                } else {
                    filter.setAttribute("class", "sticky-top");
                }
            } else {
                filter.style.position = "";
                if (auxWidth >= 1200) {
                    filter.style.marginTop = "26px";
                    filter.style.marginLeft = "0px";
                } else if (auxWidth > 992 && auxWidth < 1200) {
                    filter.style.marginTop = "18px";
                    filter.style.marginLeft = "0px";
                } else if (auxWidth <= 991) {
                    filter.style.marginTop = "10px";
                    filter.style.marginLeft = "0px";
                }
            }
        } else if (namePage == "mobile") {
            if (window.pageYOffset >= 356) {
                if (detectIE()) {
                    filter.style.position = "fixed";
                    if (auxWidth >= 1200) {
                        filter.style.marginTop = "-170px";
                        filter.style.marginLeft = "-155px";
                    } else if (auxWidth > 992 && auxWidth < 1200) {
                        filter.style.marginTop = "-170px";
                        filter.style.marginLeft = "-162px";
                    } else if (auxWidth <= 991) {
                        filter.style.marginTop = "-170px";
                        filter.style.marginLeft = "-172px";
                    }
                } else {
                    filter.setAttribute("class", "sticky-top");
                }
            } else {
                filter.style.position = "";
                if (auxWidth >= 1200) {
                    filter.style.marginTop = "26px";
                    filter.style.marginLeft = "0px";
                } else if (auxWidth > 992 && auxWidth < 1200) {
                    filter.style.marginTop = "18px";
                    filter.style.marginLeft = "0px";
                } else if (auxWidth <= 991) {
                    filter.style.marginTop = "10px";
                    filter.style.marginLeft = "0px";
                }
            }
        } else {
            console.log("namePage", namePage);
        }
    }
}

function onResize() {
    width = window.innerWidth;
    height = window.innerHeight;
    auxWidth = width;
}

function createMenuButtons() {
    $("article").each(function(index) {
        var c_btn = $(this).find("img");
        c_btn.css('cursor', 'pointer');
        c_btn.on("click", function(e){
            e.preventDefault();
            showPagesMenu(pages[index]);
        });
    });
}

function showPagesMenu(page) {
    //console.log("Vá para a página '", page, "'");
    switch (page) {
        case "publicacoes":
            carregaPagina(page);
            break;
        case "videos":
            carregaPagina(page);
            break;
        case "jogos":
            carregaPagina(page);
            break;
        case "ilustracoes":
            carregaPagina(page);
            break;
        case "mobile":
            carregaPagina(page);
            break;
        case "cursos":
            carregaPagina(page);
            break;
        default: console.log("Não encontrei a página...");
    }
}

function carregaPagina(pageLoad) {
    var divMain = $('[data-id]');
    if (pageLoad != "") {
        var arquivo = "pages/" + pageLoad + ".html";
        $.ajax({
            url: arquivo,
            success: function(data) {
                fade(divMain.html(data), 2);
                initPortifolioFilter();
            }
        });
        namePage = pageLoad;
    } else {
        console.log("a variavel pageLoad veio vazia");
    }

    window.onscroll = scroll;
}

// funcao que inicia o plugin do filtro das imagens
function initPortifolioFilter() {
    $(function() {
        var filterList = {
            init: function() {
                // MixItUp plugin
                // http://mixitup.io
                $('#portfoliolist').mixItUp({
                    selectors: {
                        target: '.portfolio'
                    },
                    load: {
                        filter: 'all'
                    },
                    animation: {
                        animateResizeContainer: false,
                        duration: 500,
                        nudge: true,
                        reverseOut: false,
                        effects: "fade scale(0.01)"
                    }
                });
            }
        };

        // Run the show!
        filterList.init();
        controlaMenuInternoPages();
    });
}

function controlaMenuInternoPages() {
    $('.menu-drop').hide();
    $(".menu").click(function() {
        $('.menu-drop').slideToggle(600);
    });

    $('.home').click(function() {
        location.reload();
    });

   /* $("[data-menu]").each(function(index) {
        var btn1 = $(this).find("img");
        btn1.css('cursor', 'pointer');
        btn1.on("click", function(e){
            e.preventDefault();
            showPagesMenu(pages[index]);
        });
    });*/
}

function abrirLinkBlank() {
	window.open($(this).attr("data-linkOpen"),"_blank");
}

function fade(obj, t) {
    //Parâmetros
    //obj = Objeto que receberá o efeito
    //t = tipo de fade 1 in / 2 out / 0(esconde o botão)
    switch (t) {
        case 1:
            TweenMax.to(obj, 0, {autoAlpha: 1});
            TweenMax.to(obj, 0.5, {autoAlpha: 0.2});
            break;
        case 2:
            TweenMax.to(obj, 0, {autoAlpha: 0});
            TweenMax.to(obj, 1.5, {autoAlpha: 1});
            break;
        default:
            TweenMax.to(obj, 1, {autoAlpha: 0});
    }

}

window.onload = init;

export default class PageManager {
    before(next) {
        next();


        













    }

    loaded(next) {
        next();

        $("h5.footer-info-heading").on("click", function(){
            if($(window).width() < 801){
                $(this).toggleClass("open");
                $(this).next("ul").slideToggle();
            }
        });



    }

    after(next) {
        next();

    }

    type() {
        return this.constructor.name;
    }
}

new Vue({
    el: "#entire",
    data: {
        visible: false,
        trigger: 0
    },
    methods:{
        scatter: function(event){
            var tag = document.createElement("div");
            var element = document.getElementById("entire");
            element.appendChild(tag);
            tag.setAttribute("class", "fragments");
            tag.style.top= event.clientY;
            tag.style.left= event.clientX;
            this.trigger++
            if (this.trigger==2){
                window.location.href = "index2.html";
            }
        }
    }
});
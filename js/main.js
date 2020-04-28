(function (window, document){
    'use strict';

    const $toggles = document.querySelectorAll('.toggle');
    const $toggleBtn = document.getElementById('toggle-btn');
    
    $toggleBtn.addEventListener('click',function(){
        toggleElement();
    });

    function toggleElement() {
        [].forEach.call($toggles, function(toggle) {
            toggle.classList.toggle('on');
        });
    }
})(window, document)
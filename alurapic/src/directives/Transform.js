
export default {

    bind(el, binding, vnode) {

        let current = 0;

        el.addEventListener('dblclick', function(){
            
            let incremento = binding.value || 90;
            let efeito;

            if(!binding.arg || binding.arg == 'rotate') {

                if(binding.modifiers.reverse){
                    current -= incremento;
                } else {
                    current += incremento;
                }

                efeito = `rotate(${current}deg)`;

            } else if (binding.arg == 'scale') {

                efeito = `scale(${incremento})`;

            }
            
            el.style.transform = efeito;

            if (binding.modifiers.animate) el.style.transition = 'transform 0.5s';

        });
    }
}


/*
Se quiser que a diretiva seja enxergada por toda a aplicação,
teria q importar direto no Global Vue Object:

import Vue from 'vue';

Vue.directive('meu-transform', {

    bind(el, binding, vnode) {
        ...
    }
}

E, no main, teria que importar o código:
import './directives/Transform';

Dessa forma o trecho acima eh executado.
*/
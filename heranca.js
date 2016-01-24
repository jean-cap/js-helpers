/*
 * MÉTODO UTILIZADO PARA CRIAR OBJETO HERDANDO O prototype DO OBJETO PASSADO
 */

function herdar(obj) {
    if (obj === null) throw TypeError(); // obj DEVE SER UM OBJETO NÃO null
    if (Object.create) { // SE Object.create ESTÁ DEFINIDA (ES5)
        return Object.create(obj);
    }
    var t = typeof obj;
    if (t !== 'object' && t !== 'function') throw TypeError();
    // DEFINE UMA FUNÇÃO CONSTRUTORA FICTÍCIA
    function f() {
    };
    f.prototype = obj;
    return new f();
}
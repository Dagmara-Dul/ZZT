
export function testTemplate(){
    console.log('test');
    document.getElementById('form-sample');
    console.log(document.getElementById('form-sample'))
    var temp1 = document.getElementById('form-sample').content;
    console.log(temp1)

    var copyHTML = document.importNode(temp1,true);
    console.log(copyHTML)
    console.log(document.getElementById('app'))
    document.getElementById('example1').appendChild(copyHTML);
    console.log(document.getElementById('app'))

}

export function addTemplate(){
    console.log('add template test')
    
}



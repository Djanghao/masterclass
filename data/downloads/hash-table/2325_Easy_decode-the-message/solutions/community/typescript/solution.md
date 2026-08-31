# Typescript solution great readability

**Author:** qlqjs674
**Votes:** 2
**Link:** [https://leetcode.com/problems/decode-the-message/solutions/2527479/](https://leetcode.com/problems/decode-the-message/solutions/2527479/)

---

``` 
function decodeMessage(key: string, message: string): string {
    const firstAlphabet:number = 97;
    const alphbet:string[]= new Array(26).fill(0).map((_:any, i:number)=>String.fromCharCode(i+firstAlphabet));
    const arrKey:string[] = key.replace(/ /gi, '').split('') // can't use replaceAll
    const arrKeyOne:string[] = Array.from(new Set(arrKey))
    const arrMes:string[] = message.split('')

    const result:string = arrMes.map(v=>{
        if(v===' ')return ' '
        return alphbet[arrKeyOne.indexOf(v)]
    }).join().replace(/,/gi, '')||''

    return result
};

```
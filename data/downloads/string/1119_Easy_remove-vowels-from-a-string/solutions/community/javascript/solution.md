# Few JS solutions

**Author:** netxm
**Votes:** 11
**Link:** [https://leetcode.com/problems/remove-vowels-from-a-string/solutions/397267/](https://leetcode.com/problems/remove-vowels-from-a-string/solutions/397267/)

---

```
// O(n) time, O(n) space?
// Runtime: 48 ms
var removeVowels = function(S) {
    let arr = [];
    const vowels = ["a","e","i","o","u"];
    for(let i=0; i<S.length; i++) {
        if(!vowels.includes(S[i])){
            arr.push(S[i]);
        }
    }
    return arr.join("");
};
```

```
// O(n) time, O(1) space?
// Runtime 52 ms
var removeVowels = function(S) {
    const arr = S.split("");
    const vowels = ["a","e","i","o","u"];
    return arr.filter(l => !vowels.includes(l)).join("");
};
```

```
// O(1), O(1)
// Runtime: 56 ms
var removeVowels = function(S) {
    return S.replace(/a|e|o|i|u/gi,"");
};
```


```
// O(n), O(n)
// Runtime 52 ms
var removeVowels = function(S) {
    let arr = []
    for(let i=0; i<S.length; i++) {
       if(S[i] !== 'e' && S[i] !== 'o' && S[i] !== 'a' && S[i] !== 'i' && S[i] !== 'u' ){
           arr.push(S[i]);
	   }
    }
    return arr.join("");
};
```
# Javascript easy

**Author:** webbyelena
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-number-of-words-you-can-type/solutions/2184099/](https://leetcode.com/problems/maximum-number-of-words-you-can-type/solutions/2184099/)

---

```
var canBeTypedWords = function(text, brokenLetters) {
    
    let count = 0;
    let arrs = text.split(' ');
    let hash = {};
    
    for(let i=0; i<brokenLetters.length; i++) {
        hash[brokenLetters[i]] = true;
    }
    
    for(let i=0; i<arrs.length; i++) {
        let word = arrs[i];
        let flag = true;
        for(let j=0; j<word.length; j++) {
            let letter = word[j];
            if(hash[letter]){
                flag = false;
                break;
            }
        }
        if(flag == true) {
            count++;
        }
    }
    
    return count;
};
```
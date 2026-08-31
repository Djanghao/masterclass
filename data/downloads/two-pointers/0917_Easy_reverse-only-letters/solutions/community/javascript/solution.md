# JavaScript. One pass, easy to follow.

**Author:** RinatRezyapov
**Votes:** 14
**Link:** [https://leetcode.com/problems/reverse-only-letters/solutions/1764844/](https://leetcode.com/problems/reverse-only-letters/solutions/1764844/)

---

The code is intentionally made verbose so that anyone can easily process the code line by line. 

"Programs must be written for people to read, and only incidentally for machines to execute." \u2014 Harold Abelson

```
var reverseOnlyLetters = function(s) {
    s = s.split('');
    let start = 0;
    let end = s.length - 1;
    const regex = /[a-zA-Z]/g; 
    while (start < end) {
        if (s[start].match(regex) === null) { // not a letter at the start, continue without swapping
            start++; 
            continue;
        }
        if (s[end].match(regex) === null) { // not a letter at the end, continue without swapping
            end--; 
            continue;
        }
        let tmp = s[start]; // we end up here when there are letters at 'start' and 'end' so we just swap them
        s[start] = s[end];
        s[end] = tmp;
        start++;
        end--;
    }
    
    return s.join('');
};
```
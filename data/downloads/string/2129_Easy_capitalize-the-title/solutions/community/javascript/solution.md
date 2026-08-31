# Easy | Javascript | Js

**Author:** codemasterjin
**Votes:** 6
**Link:** [https://leetcode.com/problems/capitalize-the-title/solutions/1676728/](https://leetcode.com/problems/capitalize-the-title/solutions/1676728/)

---

```
var capitalizeTitle = function(title) {
    const words = title.toLowerCase().split(' ');
    
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 2) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
    }
    
    return words.join(' ');
};
```
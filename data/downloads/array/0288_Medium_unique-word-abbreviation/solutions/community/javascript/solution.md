# JavaScript - map and set

**Author:** 1rosehip
**Votes:** 3
**Link:** [https://leetcode.com/problems/unique-word-abbreviation/solutions/2103113/](https://leetcode.com/problems/unique-word-abbreviation/solutions/2103113/)

---

```
const getAbbr = (word) => {
    const len = word.length;
    return len <= 2 ? word : `${ word[0] }${ len - 2 }${ word[len - 1] }`;
};

var ValidWordAbbr = function(dictionary) {
    this.map = new Map();
    
    for(let word of dictionary){
        const abbr = getAbbr(word);
        const set = this.map.get(abbr) || new Set();
        set.add(word);
        this.map.set(abbr, set);
    }
};

ValidWordAbbr.prototype.isUnique = function(word) {
    const abbr = getAbbr(word);
    const set = this.map.get(abbr) || new Set();
    return set.size === 0 || set.size === 1 && set.has(word);
};
```
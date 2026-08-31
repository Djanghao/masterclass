# 3 different fastest approaches with javascript - including one-liner

**Author:** Apoorv-123
**Votes:** 6
**Link:** [https://leetcode.com/problems/count-prefixes-of-a-given-string/solutions/2461131/](https://leetcode.com/problems/count-prefixes-of-a-given-string/solutions/2461131/)

---

// approach 1 

```
var countPrefixes = function(words, s) {
     let counter = 0
     for (let i = 0; i < words.length; i++) {
         if (words[i]) === s.slice(0,words[i].length)) {
            counter++
        }
     }
    return counter
};
```

// one liner approach - 2

```
var countPrefixes = function(words, s) {
    return words.filter((word) => word === s.slice(0,word.length)).length;
};
```

// approach 3

```
var countPrefixes = function(words, s) {
    return words.filter(data=> s.indexOf(data) == 0).length;
};
```
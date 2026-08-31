# JavaScript solution - easy

**Author:** eazygood
**Votes:** 23
**Link:** [https://leetcode.com/problems/sorting-the-sentence/solutions/1216567/](https://leetcode.com/problems/sorting-the-sentence/solutions/1216567/)

---

My solution 
```
const sortSentence = function(s) {
   return s.split(' ')
       .sort((a,b) => a[a.length-1] - b[b.length-1])
       .map((word) => word.slice(0, word.length-1))
       .join(' ');
};
```
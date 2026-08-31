# JavaScript Set less and faster than 85%

**Author:** seredulichka
**Votes:** 10
**Link:** [https://leetcode.com/problems/first-letter-to-appear-twice/solutions/2475410/](https://leetcode.com/problems/first-letter-to-appear-twice/solutions/2475410/)

---

```
const repeatedCharacter = s => {
    const set = new Set();
    
    for (let i = 0; i < s.length; i += 1) {
        const currentLetter = s[i]
        if(set.has(currentLetter)) {
             return currentLetter 
        }
        set.add(currentLetter);
    }
};
```
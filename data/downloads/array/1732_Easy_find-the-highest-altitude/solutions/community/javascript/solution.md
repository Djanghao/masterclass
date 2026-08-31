# JavaScript less than 86.85% and faster than 91.23%

**Author:** seredulichka
**Votes:** 9
**Link:** [https://leetcode.com/problems/find-the-highest-altitude/solutions/2480590/](https://leetcode.com/problems/find-the-highest-altitude/solutions/2480590/)

---

```
const largestAltitude = gain => {    
    let previous = 0;
    let biggest = 0;
    
    for (let i = 0; i < gain.length; i += 1) {
        previous += gain[i];
        if (previous > biggest) biggest = previous;
    }
    
    return biggest;
};
```
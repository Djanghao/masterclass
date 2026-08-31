# JavaScript | Greedy | Easy

**Author:** codemasterjin
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-number-of-food-buckets-to-feed-the-hamsters/solutions/1598986/](https://leetcode.com/problems/minimum-number-of-food-buckets-to-feed-the-hamsters/solutions/1598986/)

---

```
var minimumBuckets = function(a) {
    const street = [...a];
    let buckets = 0;

    
    for (let i = 0; i < street.length; i++) {
        if (street[i] === "H") {
            if (street[i - 1] === 'B') continue;
            if (street[i + 1] === '.') {
                street[i + 1] = 'B';
                buckets++;
                continue;
            }
            if (street[i - 1] === '.') {
                street[i - 1] = 'B';
                buckets++;
                continue;
            }
            else return -1;
        }            
    }
    
    return buckets;
};
```
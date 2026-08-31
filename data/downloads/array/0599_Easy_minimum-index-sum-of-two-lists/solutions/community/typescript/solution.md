# Simple Typescript / JavaScript solution

**Author:** SumanMax
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-index-sum-of-two-lists/solutions/2167095/](https://leetcode.com/problems/minimum-index-sum-of-two-lists/solutions/2167095/)

---

```
function findRestaurant(list1: string[], list2: string[]): string[] {
    if (list1.length == 0 || list2.length == 0) return [""];
    let map = new Map();
    for (let i = 0; i < list1.length; i++) map.set(list1[i], i);
    
    let min = Number.MAX_SAFE_INTEGER;
    let res = [];
    let total;
    for (let j = 0; j < list2.length; j++) {
        if (map.has(list2[j])) {
            total = j + map.get(list2[j]);
            if (total < min) {
                res = [];
                res.push(list2[j]);
                min = total;
            } else if (total == min) {
                res.push(list2[j]);
            }
        }
    }
    return res;
};
```
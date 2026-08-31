# JavaScript Solution

**Author:** Deadication
**Votes:** 16
**Link:** [https://leetcode.com/problems/maximum-population-year/solutions/1218791/](https://leetcode.com/problems/maximum-population-year/solutions/1218791/)

---

First time of learning about line sweep algorithm. I though it was cool so I am posting a solution in JS even though I did not come up with it.

```
var maximumPopulation = function(logs) {
    const count = new Array(101).fill(0);
    
    for (const [birth, death] of logs) {
        count[birth - 1950]++;
        count[death - 1950]--;
    }
    
    let max = 0;
    
    for (let i = 1; i < 101; i++) {
        count[i] += count[i - 1];
        
        if (count[i] > count[max]) max = i;
     }
    
     return 1950 + max;
 };
 ```
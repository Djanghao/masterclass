# JavaScript Solution - O(n^2) Approach

**Author:** Deadication
**Votes:** 10
**Link:** [https://leetcode.com/problems/invalid-transactions/solutions/1023851/](https://leetcode.com/problems/invalid-transactions/solutions/1023851/)

---

I believe that even with sorting based on name and time, at worst case, we still get O(n^2). Therefore, I decided to forgo the initial sorting.

```
var invalidTransactions = function(transactions) {
    const n = transactions.length;
    const added = new Array(n).fill(false);
    const res = [];

    for (let i = 0; i < n; i++) {
        const [name1, time1, amount1, city1] = transactions[i].split(",");
        
        if (amount1 > 1000 && !added[i]) {
            res.push(transactions[i]);
            added[i] = true;
        }
        
        for (let j = i + 1; j < n; j++) {
            const [name2, time2, amount2, city2] = transactions[j].split(",");
            
            if (name1 === name2 && Math.abs(time1 - time2) <= 60 && city1 != city2) {
                if (!added[j]) {
                   res.push(transactions[j]);
                    added[j] = true;
                }
                
                if (!added[i]) {
                    res.push(transactions[i]);
                    added[i] = true;
                }
            }
        }
        
    }
    
    return res;
};
```
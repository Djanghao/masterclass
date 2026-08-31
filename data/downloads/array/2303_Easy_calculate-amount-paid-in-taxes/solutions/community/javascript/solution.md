# JavaScript | Beats 95.82%

**Author:** gpambasana
**Votes:** 4
**Link:** [https://leetcode.com/problems/calculate-amount-paid-in-taxes/solutions/2162053/](https://leetcode.com/problems/calculate-amount-paid-in-taxes/solutions/2162053/)

---

```
/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
const calculateTax = (brackets, income) => {
    let paid = 0;
    let prev = 0;
    
    for (const [amt, percent] of brackets) {
        const current = Math.min(income, amt - prev);
        const tax = current * (percent / 100);
        
        income -= current;
        paid += tax;
        prev = amt;
        
        if (income <= 0) return paid;
    }
};
```
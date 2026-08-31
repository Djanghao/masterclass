# TS, JS: Simple solution

**Author:** ProgaPanda
**Votes:** 2
**Link:** [https://leetcode.com/problems/calculate-money-in-leetcode-bank/solutions/3328681/](https://leetcode.com/problems/calculate-money-in-leetcode-bank/solutions/3328681/)

---


# Code
```
function totalMoney(n: number): number {
    let balance = 0;
    let day = 1;
    let week = 0;

    for (let i = 1; i <= n; i++) {
        balance = balance + (week + day );
        day++;
        
        if (i % 7 === 0) {
            week++;
            day = 1;
        }
    }

    return balance;
};
```
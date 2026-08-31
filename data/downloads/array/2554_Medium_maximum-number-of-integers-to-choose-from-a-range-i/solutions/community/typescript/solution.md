# TS: Optimal basic approach

**Author:** kenshanta
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/solutions/6120952/](https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/solutions/6120952/)

---

# Intuition
Ignore creating a set for banned items as it's redundant. We already have a list we can iterate on via `.includes(value)`

   EDIT:
     creating a Set for the banned would decrease the time complexity  further down to just O(n).
    Credits @mohanedomerhamed001234
# Complexity
- Time complexity:
**O(n * m)**

- Space complexity:
**O(2)**

# Code
```typescript []

function maxCount(banned: number[], n: number, maxSum: number): number {
    let counter = 0
    let currentSumValue = 0

    for (let i = 1; i <= n ; i++) {
        if(!banned.includes(i) && (i + currentValue <= maxSum)) {
        currentSumValue += i
        counter++
        }
    }
    return counter
};
```


![Screenshot 2024-12-06 at 8.27.57\u202FPM.png](./images/0.png)
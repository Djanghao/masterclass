# Binary search of maximum tastiness

**Author:** billrozy
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-tastiness-of-candy-basket/solutions/6071998/](https://leetcode.com/problems/maximum-tastiness-of-candy-basket/solutions/6071998/)

---



# Code
```typescript []
function maximumTastiness(price: number[], k: number): number {
    price.sort((a, b) => a - b)
    let left = 0
    let right = price[price.length - 1] - price[0]
    let result = left
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        let takenCandies = 1
        let lastCandy = price[0]
        for (let i = 1; i < price.length; i++) {
            if (price[i] - lastCandy >= mid) {
                takenCandies += 1
                lastCandy = price[i]
            }
        }
        if (takenCandies < k) {
            right = mid - 1
        } else {
            result = mid
            left = mid + 1
        }
    }
    return result
};
```
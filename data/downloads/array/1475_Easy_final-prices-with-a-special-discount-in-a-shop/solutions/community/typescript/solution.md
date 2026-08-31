# Typescript solution

**Author:** sreerajsr03
**Votes:** 1
**Link:** [https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/solutions/5061727/](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/solutions/5061727/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function finalPrices(prices: number[]): number[] {

    let returnArray: number[] = [];
    let flag: boolean;
    for (let i = 0; i < prices.length; i++) {
        flag = false;
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] <= prices[i]) {
                returnArray.push((prices[i] - prices[j]));
                flag = true
                break;
            }
        }
        if (flag === false) returnArray.push(prices[i])
    }
    return returnArray
};
```
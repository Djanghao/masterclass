# Maximum Number That Sum of the Prices Is Less Than or Equal to K

**Author:** Sam_Neamah
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/solutions/4723952/](https://leetcode.com/problems/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/solutions/4723952/)

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
/**
 * @param {number} k
 * @param {number} x
 * @return {number}
 */
function findMaximumNumber(k, x) {
    let l = 1n;
    let r = 1000000000000000n;

    while (l < r) {
        let m = (l + r + 1n) / 2n;
        if (getSumPrices(m, x) > k)
            r = m - 1n;
        else
            l = m;
    }

    return Number(l);
}

// Returns the sum of prices of all numbers from 1 to `num`.
function getSumPrices(num, x) {
    let sumPrices = 0n;
    num++; // Increment `num` to account the 0-th row in the count of groups.
    for (let i = leftmostColumnIndex(num); i > 0; --i) {
        if (i % x === 0) {
            let groupSize = 1n << BigInt(i);
            let halfGroupSize = 1n << BigInt(i - 1);
            sumPrices += num / groupSize * halfGroupSize;
            let remainder = num % groupSize;
            sumPrices += remainder >= halfGroupSize ? remainder - halfGroupSize : 0n;
        }
    }
    return sumPrices;
}

// Returns the leftmost column index in 1-indexed.
function leftmostColumnIndex(num) {
    return num.toString(2).length;
}
```
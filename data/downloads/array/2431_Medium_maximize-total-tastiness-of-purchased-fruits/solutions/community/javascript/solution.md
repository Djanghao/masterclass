# JavaScript | Dynamic Programming | 180ms runtime

**Author:** costa73
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-total-tastiness-of-purchased-fruits/solutions/4687451/](https://leetcode.com/problems/maximize-total-tastiness-of-purchased-fruits/solutions/4687451/)

---

# Approach
Dynamic programming using amount left, coupons left and current fruit as key.

# Complexity
- Time complexity: `O(prices.length * maxAmount * maxCoupons)`
- Space complexity: `O(prices.length * maxAmount * maxCoupons)`

# Code
```
function maxTastiness(prices, tastiness, maxAmount, maxCoupons) {
    const cache = new Map();

    function dp(i = 0, amount = maxAmount, coupons = maxCoupons) {
        if (i >= prices.length) return 0;

        const key = coupons * 1000000 + amount * 1000 + i;

        if (!cache.has(key)) {
            const price = prices[i];
            const taste = tastiness[i];

            // skip
            let result = dp(i + 1, amount, coupons);

            // pick
            if (price <= amount) {
                result = Math.max(
                    result,
                    taste + dp(i + 1, amount - price, coupons),
                )
            }

            // use coupon
            if (coupons && (price >> 1) <= amount) {
                result = Math.max(
                    result,
                    taste + dp(i + 1, amount - (price >> 1), coupons - 1),
                )
            }

            cache.set(key, result);
        }

        return cache.get(key);
    }

    return dp();
};
```
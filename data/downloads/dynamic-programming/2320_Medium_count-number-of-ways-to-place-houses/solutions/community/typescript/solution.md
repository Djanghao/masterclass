# TS Solution

**Author:** JCeccarelli
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-ways-to-place-houses/solutions/5023991/](https://leetcode.com/problems/count-number-of-ways-to-place-houses/solutions/5023991/)

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
function countHousePlacements(n: number): number {
    const modulo = BigInt(1000000007);
    const memo = new Map<bigint, bigint>();
    let bigIntN = BigInt(n + 2);
    memo.set(BigInt(0), BigInt(0));
    memo.set(BigInt(1), BigInt(1));

    function fibonacci(num: bigint) {
        if (memo.has(num)) return memo.get(num);

        let value = (fibonacci(num - BigInt(1)) + fibonacci(num - BigInt(2))) % modulo;

        memo.set(num, value);

        return value;
    }

    return Number(BigInt(fibonacci(bigIntN) * fibonacci(bigIntN)) % modulo);
};
```
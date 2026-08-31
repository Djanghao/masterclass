# Simple regex solution

**Author:** zhantx
**Votes:** 3
**Link:** [https://leetcode.com/problems/apply-discount-to-prices/solutions/2853693/](https://leetcode.com/problems/apply-discount-to-prices/solutions/2853693/)

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

function discountPrices(sentence: string, discount: number): string {
    const reg = /(?<=(\\s|^))\\$(\\d+)(?=(\\s|$))/g
    return sentence.replace(reg, (match) => {
        const price = parseFloat(match.slice(1))
        const afterDiscount = price * (100-discount) /100
        return `${afterDiscount.toFixed(2)}`
    })
};
```
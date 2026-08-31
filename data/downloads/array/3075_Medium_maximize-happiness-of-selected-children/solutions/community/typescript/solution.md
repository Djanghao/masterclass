# [TypeScript] Sorting. Beats 100%

**Author:** badnewz
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-happiness-of-selected-children/solutions/4855680/](https://leetcode.com/problems/maximize-happiness-of-selected-children/solutions/4855680/)

---

# Complexity
- Time complexity: $\\mathcal{O}(n\	imes ln(n))$
- Space complexity: $\\mathcal{O}(1)$

# Code
```
function maximumHappinessSum(happiness: number[], k: number): number {
    const n = happiness.sort((a, b) => b - a);
    let sum = 0;
    for (let i = 0; i < k; i++) {
        const h = happiness[i] - i;
        if ( h > 0 ) sum += h
        else break;
    }
    return sum;
};

```
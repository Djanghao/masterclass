# [TypeScript] 2-passes solution. Clean and fast code (110ms). O(n) | O(n)

**Author:** badnewz
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-good-days-to-rob-the-bank/solutions/4373609/](https://leetcode.com/problems/find-good-days-to-rob-the-bank/solutions/4373609/)

---

# Complexity
- Time complexity: $\\mathcal{O}(n)$
- Space complexity: $\\mathcal{O}(n)$

# Code
```
function goodDaysToRobBank(security: number[], time: number): number[] {
    if (!time) return security.map((_, i) => i);
    const n = security.length, dsc = Array<number>(n), r: number[] = [];
    let cntAsc = 0; dsc[n - 1] = 0;
    for (let i = n - 2; i >= time; i--)
        dsc[i] = security[i] <= security[i + 1] ? dsc[i + 1] + 1 : 0;
    for (let i = 1; i < n - time; i++) {
        cntAsc = security[i - 1] >= security[i] ? cntAsc + 1 : 0;
        if (cntAsc >= time && dsc[i] >= time) r.push(i);
    }
    return r;
}
```
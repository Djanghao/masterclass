# [TypeScript] Simple one-pass solution. Clean and fast code (69ms, beats 100%)

**Author:** badnewz
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-select-buildings/solutions/4340447/](https://leetcode.com/problems/number-of-ways-to-select-buildings/solutions/4340447/)

---

# Approach


# Complexity
- Time complexity: $\\mathcal{O}(n)$
- Space complexity: $\\mathcal{O}(1)$

# Code
```
function numberOfWays(s: string): number {
    let cnt0 = 0, cnt1 = 0, cnt01 = 0, cnt10 = 0, sum = 0;
    for ( let i = s.length - 1; i >= 0; i-- )
        if ( s.charAt( i ) === '0' )
            cnt0++, cnt01 += cnt1, sum += cnt10
        else
            cnt1++, cnt10 += cnt0, sum += cnt01;
    return sum;
};

```
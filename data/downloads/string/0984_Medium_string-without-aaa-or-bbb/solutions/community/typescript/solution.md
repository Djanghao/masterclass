# Beats 100% in runtime

**Author:** maxonlinux
**Votes:** 0
**Link:** [https://leetcode.com/problems/string-without-aaa-or-bbb/solutions/6088268/](https://leetcode.com/problems/string-without-aaa-or-bbb/solutions/6088268/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Pre-calculation of the a to b ratio

# Complexity
- Time complexity: O(a + b)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O (a + b)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function strWithout3a3b(a: number, b: number): string {
    const maxRepCount = 2;
    const counts = { a, b };

    let string = ''

    while (counts.a + counts.b > 0) {
        const dominant = counts.a >= counts.b ? 'a' : 'b';
        const sub = dominant === 'a' ? 'b' : 'a';

        const ratio = Math.ceil(counts[dominant] / (counts[sub] + 1));
        const dominantCount = Math.min(ratio, maxRepCount, counts[dominant]);

        string += dominant.repeat(dominantCount);

        counts[dominant] -= dominantCount;

        if (counts[sub] > 0) {
            string += sub;
            counts[sub] -= 1;
        }
    }

    return string
}
```
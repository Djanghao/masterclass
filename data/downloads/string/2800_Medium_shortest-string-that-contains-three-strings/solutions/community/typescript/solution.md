# Typescript

**Author:** oluwie
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-string-that-contains-three-strings/solutions/5400237/](https://leetcode.com/problems/shortest-string-that-contains-three-strings/solutions/5400237/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(\uD835\uDC5B * \uD835\uDC5A)

- Space complexity:
 O(\uD835\uDC5B + \uD835\uDC5A +\uD835\uDC5D)

# Code
```
function minimumString(a, b, c) {
    function merge(s1, s2) {
        if (s1.includes(s2)) {
            return s1;
        }

        for (let i = Math.min(s1.length, s2.length); i > 0; i--) {
            if (s1.endsWith(s2.substring(0, i))) {
                return s1 + s2.substring(i);
            }
        }
        return s1 + s2;
    }

    function mergeTriple(s1, s2, s3) {
        return merge(merge(s1, s2), s3);
    }

    const combinations = [
        mergeTriple(a, b, c),
        mergeTriple(a, c, b),
        mergeTriple(b, a, c),
        mergeTriple(b, c, a),
        mergeTriple(c, a, b),
        mergeTriple(c, b, a)
    ];
    
    combinations.sort((x, y) => {
        if (x.length !== y.length) {
            return x.length - y.length;
        }

        return x.localeCompare(y);
    });

    return combinations[0];
}
```
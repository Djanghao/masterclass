# [JavaScript] 2654. Minimum Number of Operations to Make All Array Elements Equal to 1

**Author:** pgmreddy
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-all-array-elements-equal-to-1/solutions/3446411/](https://leetcode.com/problems/minimum-number-of-operations-to-make-all-array-elements-equal-to-1/solutions/3446411/)

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

1
```
var minOperations = function (a) {
    let nori = a.length; // n original length of array

    // edge case 1 - check if only 1 unique element exist, and that element is 1 => all ones
    let set = new Set(a);
    if (set.size === 1)
        if (a[0] === 1) {
            return 0;
        }

    // edge case 2 - check if some ones exist - count ones if exist
    let ones = 0;
    for (let i = 0; i < nori; i++)
        if (a[i] === 1) {
            ones++;
        }
    if (ones) {
        return nori - ones;
    }

    // main work - find gcds and repeatedly replace array a & repeat
    let cc = 0;
    while (a.length) {
        let n = a.length;
        let a2 = [];
        for (let i = 0; i < n - 1; i++) {
            let g = gcd(a[i], a[i + 1]);
            if (g === 1) {
                return nori + cc; // when one can become 1, others can as well
            }
            a2.push(g);
        }
        a = a2;
        cc++;
    }
    return -1;

    function gcd(a, b) {
        if (b == 0) return a;
        return gcd(b, a % b);
    }
};
```

---

**Contest**
- https://leetcode.com/contest/weekly-contest-342/ranking/67/

**All Answers**
- **Q1** - https://leetcode.com/problems/calculate-delayed-arrival-time/solutions/3446023/javascript-2651-calculate-delayed-arrival-time/?orderBy=most_votes
- **Q2** - https://leetcode.com/problems/sum-multiples/solutions/3446027/javascript-2652-sum-multiples/?orderBy=most_votes
- **Q3** - https://leetcode.com/problems/sliding-subarray-beauty/solutions/3446035/javascript-2653-sliding-subarray-beauty/?orderBy=most_votes
- **Q4** - https://leetcode.com/problems/minimum-number-of-operations-to-make-all-array-elements-equal-to-1/solutions/3446411/javascript-2654-minimum-number-of-operations-to-make-all-array-elements-equal-to-1/?orderBy=most_votes

---

![image.png](./images/0.png)

---

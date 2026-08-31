# DP

**Author:** leeteee50cll
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/solutions/5008552/](https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/solutions/5008552/)

---

# Approach
Let `DP[i][k]` be the minimum XOR sum of the first `i` elements of `nums1` with the elements of `nums2` specified by `k`, where `k` serves as a bitmask of all selected elements. Then, the recurrence formula can be expressed as follows
```
DP[i][k] = min(DP[i][k], DP[i - 1][k ^ (1 << j)] + (nums1[i] ^ nums2[j]))
```

# Complexity
- Time complexity: $O(n^22^n)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(n2^n)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const minimumXORSum = (nums1, nums2) => {
    const n = nums1.length;
    let a = [];
    for (let i = 0; i < n; i++) {
        a.push([]);
        for (let j = 0; j < (1 << n); j++) {
            a[i].push(1e9);
        }
    }
    for (let j = 0; j < n; j++) {
        a[0][1 << j] = nums1[0] ^ nums2[j];
    }
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < (1 << n); k++) {
                if (k & (1 << j) === 0) {
                    continue;
                }
                a[i][k] = Math.min(a[i][k], a[i - 1][k ^ (1 << j)] + (nums1[i] ^ nums2[j]));
            }
        }
    }
    return a[n - 1][(1 << n) - 1];
};
```
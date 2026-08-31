# 0 ms perfect original O(log k) solution

**Author:** wongwaijeremy
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/solutions/5936071/](https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/solutions/5936071/)

---

# Intuition
Given the example:
```text
bit     0 <1> 1 <1> 0  0  1 <1> 0  1  1  0  0  0  1
index   0  1  2  3  4  5  6  7  8  9  10 11 12 13 14
```
Let's say we are looking for 11th bit, which means 10th in the chart. The backtracking goes from `10->4->2->0`.
```text
flow    0<----1<----0<----------------1
bit     0 <1> 1 <1> 0  0  1 <1> 0  1  1  0  0  0  1
index   0  1  2  3  4  5  6  7  8  9  10 11 12 13 14
```
It's obvious that the pivot bit has a pattern of $$2^n - 1$$. In binary form, they are always `111....1`. It results in designing a `mask` component.

# Approach
1. Use boolean so we can make use of the invert operator `!`
2. ignore `n`. Use `k-1` as the new `k`
3. Set base case 0 (and 1 if you want)
4. Find the biggest `mask` (the pivot) lower or equal than k
5. if `k == mask`, that means it is the pivot. then return true.
6. Otherwise, return the inverted bit of the reversed position

The code should be easy to follow. Enjoy!


# Complexity
- Time complexity:
$$O(log k)$$

- Space complexity:
$$O(log k)$$

# Code
```csharp []
public class Solution {
    public char FindKthBit(int n, int k) {
        return FindKthBit(k-1) ? '1' : '0';
    }
    public bool FindKthBit(int k) {
        if (k == 0)
            return false; // 0
        if (k == 1)
            return true; // 1
        var mask = 0; // the pivot
        var temp = k;
        while (temp > 0){
            temp /= 2;
            mask = mask * 2 + 1;
        }
        if (k == mask) // if k is the pivot '1'
            return true;
        mask /= 2;
        return !FindKthBit(mask - (k - mask));
        // reverse position is at mask - (k - mask)
        // inverted bit by "!"
    }
}
```
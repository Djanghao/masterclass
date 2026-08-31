# C#: 100%, 100%, O(n)

**Author:** Igor0
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-xor-beauty-of-array/solutions/3015472/](https://leetcode.com/problems/find-xor-beauty-of-array/solutions/3015472/)

---

# Intuition
Just to calculate result using a pair lines of code.

# Approach
In a cycle calculate the result of applying ^-operator and |-operator to all elements of the array, then apply &-operator the previous 2 intermediate results.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
public class Solution {
    public int XorBeauty(int[] nums) {
        var rs = 0;
        var hat = 0;
        var aux = 0;
        for (int k = 0; k < nums.Length; k++)
        {
            hat ^= nums[k];
            aux |= nums[k];
        }
        rs ^= aux & hat;
        return rs;
    }
}
```
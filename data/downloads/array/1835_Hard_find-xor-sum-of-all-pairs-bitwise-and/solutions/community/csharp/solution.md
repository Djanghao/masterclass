# Top 1% Approach. O(N) Beats 100%, Upvote !!!

**Author:** karandobriyal
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and/solutions/3240995/](https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and/solutions/3240995/)

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
public class Solution {
    public int GetXORSum(int[] arr1, int[] arr2) {
        int xor1 = 0;
        int xor2 =0;
 
        for(int i = 0 ;i<arr2.Length;i++){
            xor2 = xor2^arr2[i];
        }
        for(int i  = 0 ;i<arr1.Length;i++){
            xor1 = xor1^arr1[i];
        }
        return (xor1&xor2);
    }
}
```
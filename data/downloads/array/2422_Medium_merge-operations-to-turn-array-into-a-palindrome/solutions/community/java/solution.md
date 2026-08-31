# [JAVA] Beats 100% | O(n) Time | Two Pointers | Very Easy Solution |

**Author:** yash_vish87
**Votes:** 5
**Link:** [https://leetcode.com/problems/merge-operations-to-turn-array-into-a-palindrome/solutions/3673330/](https://leetcode.com/problems/merge-operations-to-turn-array-into-a-palindrome/solutions/3673330/)

---


# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public int minimumOperations(int[] nums) {
        int l = 0, r = nums.length-1;
        int opr = 0;
        int leftSum = nums[l], rightSum = nums[r];
        while(l < r) {
            if(leftSum == rightSum) {
                l++;
                r--;
                leftSum = nums[l];
                rightSum = nums[r];
            } else if(leftSum < rightSum) {
                opr++;
                l++;
                leftSum += nums[l];
            } else {
                opr++;
                r--;
                rightSum += nums[r];
            }
        }

        return opr;
    }
}
```
# c# solution, easy to understand and linear in time complexity.

**Author:** masha-nv
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-maximize-last-elements-in-arrays/solutions/4307091/](https://leetcode.com/problems/minimum-operations-to-maximize-last-elements-in-arrays/solutions/4307091/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- two conditions: 
    - last element in both arrays should remain bigger or same as the rest of the elements. we can only ever have two options for the last element - either itself or the last element of the other array. 
    - we keep searching as long as elements in same array are smaller then their last element, or we swap those two elements and still keep the constraint. If this is not possible, can return -1.
    


# Approach
<!-- Describe your approach to solving the problem. -->
- set last elements in both arrays as max elements.
- try to make arrays work with these last elements by swapping or without swapping.
- try same but with the swapped last elements.
- return the min of the two outcomes.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
time complexity is order of n*2, where n is the number of elements in the arrays, since we go through both arrays once.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
space complexity is constant.

# Code
```
public class Solution {
    public int MinOperations(int[] nums1, int[] nums2) {
        int n = nums1.Length;
        int max1 = nums1[n-1];
        int max2 = nums2[n-1];
        int withSwap = Check(max2, max1);
        int withoutSwap = Check(max1, max2);
        if (withSwap == int.MaxValue && withoutSwap == int.MaxValue) {
            return -1;
        }
        return Math.Min(withSwap, withoutSwap);

        int Check(int m1, int m2) {
            int res = 0;
            for (int i = 0; i<n; i++) {
                if (nums1[i] <= m1 && nums2[i] <= m2) continue;
                if (nums1[i] <= m2 && nums2[i] <= m1) res++;
                else return int.MaxValue;
            }
            return res;
        }
    }
}
```
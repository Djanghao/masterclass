# [Java] Easy solution without using HashSet, Set collections

**Author:** jasurbekaktamov080
**Votes:** 19
**Link:** [https://leetcode.com/problems/two-out-of-three/solutions/3181557/](https://leetcode.com/problems/two-out-of-three/solutions/3181557/)

---

# Intuition
An easy way to find a solution without using collections other than the List collection

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
Runtime:  1ms     Beats: 100%
Memory:  43.3 MB  Beats: 38.77%

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public List<Integer> twoOutOfThree(int[] nums1, int[] nums2, int[] nums3) {

        /** Since we have 3 arrays of numbers, 
         * we need 3 boolean arrays.
         *  Here is the length of the longest 
         *  array that can reach the length of the array */
        boolean[] b1 = new boolean[101];
        boolean[] b2 = new boolean[101];
        boolean[] b3 = new boolean[101];

        /** where values of the boolean array 
         * at the corresponding index are changed to true */
        for (int num : nums1) b1[num] = true;

        for (int num : nums2) b2[num] = true;

        for (int num : nums3) b3[num] = true;

        List<Integer> res = new ArrayList<>();


        for (int i = 1; i <= 100; i++){
            if((b1[i] || b2[i]) && (b2[i] || b3[i]) && (b3[i] || b1[i]))
                res.add(i);
        }
        return res;
        
    }
}

```
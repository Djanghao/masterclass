# C# Fast

**Author:** yudinda
**Votes:** 0
**Link:** [https://leetcode.com/problems/equal-sum-arrays-with-minimum-number-of-operations/solutions/4456824/](https://leetcode.com/problems/equal-sum-arrays-with-minimum-number-of-operations/solutions/4456824/)

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
    public int MinOperations(int[] nums1, int[] nums2) {
        if (nums1.Length > nums2.Length * 6 || nums1.Length > nums2.Length * 6 ){
            return -1;
        }
        var sum1 = nums1.Sum();
        var sum2 = nums2.Sum();
        var diff = sum1 - sum2;
        if (diff == 0){
            return 0;
        }
        var minArray = diff > 0 ? nums2 : nums1;
        var maxArray = diff > 0 ? nums1 : nums2;
        diff = Math.Abs(diff);
        int[] amounts = new int[6];
        for(int i = 0; i < minArray.Length; i++){
            amounts[6-minArray[i]]++;
        }
        for(int i = 0; i < maxArray.Length; i++){
            amounts[maxArray[i]-1]++;
        }
        int current = 5;
        int result = 0;
        while(current > 0){
            if (amounts[current]*current < diff){
                result += amounts[current];
                diff -= amounts[current]*current;
                current--;
                continue;
            }
            result += (int)Math.Ceiling((double)diff / current);
            return result;
        }
        return -1;
    }
}
```
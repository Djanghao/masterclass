# Solved via HashSet

**Author:** shnitsel666
**Votes:** 5
**Link:** [https://leetcode.com/problems/first-missing-positive/solutions/3555644/](https://leetcode.com/problems/first-missing-positive/solutions/3555644/)

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
    public int FirstMissingPositive(int[] nums) {
        HashSet<int> set = new ();
        int startValue = 1;
        for(int i = 0; i < nums.Length; i++)
        {
            set.Add(nums[i]);
            if(startValue == nums[i])
            {
                while(set.Contains(startValue))
                {
                    startValue++;
                }
            }
        }
        return startValue;
    }
}
```
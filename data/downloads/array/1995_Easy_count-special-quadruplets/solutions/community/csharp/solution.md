# C# O(n^2) time and O(n^2) space

**Author:** mike_yip706
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-special-quadruplets/solutions/3659707/](https://leetcode.com/problems/count-special-quadruplets/solutions/3659707/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
- Iterate all possible nums[c]
- Have a dictionary to store all possible nums[a] + nums[b], where a < b < c
- find if there is nums[a] + nums[b] == nums[d] - nums[c]

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(n^2)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(n^2)

# Code
```
public class Solution {
    public int CountQuadruplets(int[] nums) {

        Dictionary<int, int> left = new ();
        int count = 0;

        left[nums[0] + nums[1]] = 1;

        int cBound = nums.Length - 1;

        // iterate nums[c]
        for(int i = 2; i < cBound; i++)
        {
            // iterate nums[d]
            for(int j = i + 1; j < nums.Length; j++)
            {
                int key = nums[j] - nums[i]; // nums[d] - nums[c]
                if (left.ContainsKey(key))
                {
                    count += left[key];
                }
            }

            // update left
            for(int j = 0; j < i; j++)
            {
                int key = nums[j] + nums[i]; // nums[a] + nums[b]
                if (!left.TryAdd(key, 1))
                    left[key]++;
            }
        }

        return count;
    }
}
```
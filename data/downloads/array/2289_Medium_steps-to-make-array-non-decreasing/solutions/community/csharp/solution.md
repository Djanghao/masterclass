# C# - stack solution

**Author:** crvinu
**Votes:** 0
**Link:** [https://leetcode.com/problems/steps-to-make-array-non-decreasing/solutions/5632924/](https://leetcode.com/problems/steps-to-make-array-non-decreasing/solutions/5632924/)

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
    public int TotalSteps(int[] nums) {

        int maxSteps = 0;
        int totalCount = nums.Length;
        Stack<Tuple<int,int>> stack = new Stack<Tuple<int, int>>();

        // Push the last element to stack for comparison
        stack.Push(Tuple.Create(nums[totalCount - 1] , 0));

        // Iterate from right to left
        for(int i = totalCount - 2; i >= 0 ; i--)
        {
            int currentSteps = 0;
            // Check each current element with previous number
            while(stack.Count > 0 && nums[i] > stack.Peek().Item1)
            {
                // Take maximum from Incremented current step and previous step count
                currentSteps = Math.Max(currentSteps +1, stack.Pop().Item2);
            }

            stack.Push(Tuple.Create(nums[i] , currentSteps));
            maxSteps = Math.Max(maxSteps, currentSteps);
        }

        return maxSteps;
     
    }
}

```
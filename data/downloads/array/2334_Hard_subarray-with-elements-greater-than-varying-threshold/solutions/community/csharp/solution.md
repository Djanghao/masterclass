# c# stack

**Author:** Ien001
**Votes:** 0
**Link:** [https://leetcode.com/problems/subarray-with-elements-greater-than-varying-threshold/solutions/5764265/](https://leetcode.com/problems/subarray-with-elements-greater-than-varying-threshold/solutions/5764265/)

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
```csharp []
public class Solution {
    public int ValidSubarraySize(int[] nums, int threshold) {
        int n = nums.Length;
        var leftSmallerNums = new int[n];
        var rightSmallerNums = new int[n];
        for(int i = 0; i<n; i++)
        {
            leftSmallerNums[i] = -1;
            rightSmallerNums[i] = -1;
        }

        var stk = new Stack<int>();
        for (int i=0; i<n; ++i)
        {
            while(stk.Count!=0 && nums[i] < nums[stk.Peek()])
            {
                rightSmallerNums[stk.Peek()] = i;
                stk.Pop();
            }
            stk.Push(i);
        }

        stk.Clear();
        for (int i=n-1; i>=0; --i)
        {
            while(stk.Count!=0 && nums[i] < nums[stk.Peek()])
            {
                leftSmallerNums[stk.Peek()] = i;
                stk.Pop();
            }
            stk.Push(i);
        }

        for (int i=0 ;i < n; ++i)
        {
            int l = leftSmallerNums[i];
            int r = rightSmallerNums[i];

            int length = 0;
            if (l == -1 && r == -1)
            {
                length = n;
            }
            else if (l==-1)
            {
                length = r;
            }
            else if (r==-1)
            {
                length = n-l-1;
            }
            else
            {
                length = r - l - 1;
            }


            if(nums[i] >threshold/length)
            {
                return length;
            }
        }

        return -1;
    }
}
```
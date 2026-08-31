# Easy solution

**Author:** vemohan15
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/solutions/5979117/](https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/solutions/5979117/)

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
    public IList<int> MinSubsequence(int[] nums) {
        Array.Sort(nums);
        Array.Reverse(nums);
        int i=0;int j=nums.Length-1;int sum=0;int sum1=0;
        List<int> a=new List<int>();
        sum1=nums.Sum();
        while(i<=j)
        {
            sum+=nums[i];
            a.Add(nums[i]);
            int f=sum1-sum;
            if(sum>f)
            {
                return a;
            }
            i++;
        }
        return a;
    }
}
```
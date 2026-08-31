# Easy Solution

**Author:** vemohan15
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solutions/6113087/](https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solutions/6113087/)

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
    public IList<int> FindKDistantIndices(int[] nums, int key, int k) {
        List<int> a=new List<int>();
        for(int i=0;i<nums.Length;i++)
        {
            for(int j=0;j<nums.Length;j++)
            {
                if(nums[j]==key && Math.Abs(i-j)<=k)
                {
                    a.Add(i);
                    //Console.WriteLine(i+"*"+j+"*"+nums[j]);
                    break;
                }
            }
        }
        return a.ToArray();
    }
}
```
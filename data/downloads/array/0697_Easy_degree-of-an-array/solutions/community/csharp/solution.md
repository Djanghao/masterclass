# C# Single Linq query

**Author:** ilya-a-f
**Votes:** 2
**Link:** [https://leetcode.com/problems/degree-of-an-array/solutions/3349572/](https://leetcode.com/problems/degree-of-an-array/solutions/3349572/)

---

```
public class Solution
{
    public int FindShortestSubArray(int[] nums)
    {
        var result =
            from index in Enumerable.Range(0, nums.Length)
            group index by nums[index] into sub
            let degree = sub.Count()
            let length = sub.Last() - sub.First() + 1
            orderby degree descending, length
            select length;
        
        return result.First();
    }
}
```
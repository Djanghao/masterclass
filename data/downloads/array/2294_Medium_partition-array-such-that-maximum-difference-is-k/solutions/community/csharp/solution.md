# Greedy Approach

**Author:** mxvlshn
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/solutions/6080093/](https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/solutions/6080093/)

---

# Approach
Greedy approach

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Code
```csharp []
public class Solution 
{
    public int PartitionArray(int[] nums, int k) 
    {
        // sorting the nums
        Array.Sort(nums);

        // we can set count to 1 since we will alway have at least
        // one subsequence
        var count = 1;

        // take the first element as our min start
        var first = nums[0];
        for (int i = 0; i < nums.Length; i++)
        {
            // if the delta between current and min element is greater then k
            // increase the count of subsequence and set the first element of the subsequence
            // to current element
            if (nums[i] - first > k)
            {
                count++;
                first = nums[i];
            }
        }    
        return count;
    }
}
```
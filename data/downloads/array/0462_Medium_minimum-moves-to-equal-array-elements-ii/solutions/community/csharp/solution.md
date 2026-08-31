# Minimum Moves to Equalize Array Elements by Choosing Median

**Author:** Subham-Bose
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/solutions/6016431/](https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/solutions/6016431/)

---

# Intuition
To make all elements in an array equal with the fewest moves, aligning all elements to the median minimizes the total number of moves. The median minimizes the sum of absolute differences, making it the optimal target value.

# Approach
1. Sort the Array: Sort nums to make it easy to locate the median.
2. Find the Median: After sorting, the median is the middle element. Using the median ensures that we minimize the sum of moves needed.
3. Calculate Total Moves: Iterate over each element, calculating the absolute difference between each element and the median. Sum these differences to get the total moves required.

# Complexity
Time Complexity: O(nlogn), due to sorting the array.
Space Complexity: O(n) if we consider the input array modification due to sorting.

# Code
```csharp []
public class Solution
{
    public int MinMoves2(int[] nums)
    {
        Array.Sort(nums);
        int median = nums[nums.Length / 2];
        int result = 0;
        for (int i = 0; i < nums.Length; i++)
        {
            result += Math.Abs(median - nums[i]);
        }
        return result;
    }
}
```
```java []
class Solution {
    public int minMoves2(int[] nums) {
        Arrays.sort(nums);
        int median = nums[nums.length / 2];
        int result = 0;
        for (int i = 0; i < nums.length; i++)
        {
            result += Math.abs(median - nums[i]);
        }
        return result;
    }
}
```
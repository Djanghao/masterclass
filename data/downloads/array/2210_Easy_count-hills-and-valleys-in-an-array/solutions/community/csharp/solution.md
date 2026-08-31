# Beats 97.37% of users in runtime usage in c#

**Author:** DhiaSnoussi_
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solutions/4483525/](https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solutions/4483525/)

---

# Intuition
- Firstly, I fixed the condition that makes hill and valley
- Secondly, to make sure the list is ready with less pain in the neck, I was thinking about removing the equal neighbor on the list of **nums**, since the constraints won't work correctly if they're equals!
- After that, I did focus on optimizing the runtime code!

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
public class Solution {
    public int CountHillValley(int[] nums) {
        int hill = 0;
        int valley = 0;

        nums = RemoveEqualsNeighbors(nums);

        for (int i = 1; i < nums.Length - 1; i++)
        {
            int current = nums[i];
            int leftNeighbor = nums[i - 1];
            int rightNeighbor = nums[i + 1];

            if (current > leftNeighbor && current > rightNeighbor)
                hill++;
            else if (current < leftNeighbor && current < rightNeighbor)
                valley++;
        }

        return hill + valley;
    }

    private int[] RemoveEqualsNeighbors(int[] nums)
    {
        if (nums.Length == 0 || nums.Length == 1)
            return nums;

        int j = 0;
        for (int i = 1; i < nums.Length; i++)
        {
            if (nums[i] != nums[j])
            {
                j++;
                nums[j] = nums[i];
            }
        }

        int[] result = new int[j + 1];
        Array.Copy(nums, result, j + 1);

        return result; 
    }

}
```
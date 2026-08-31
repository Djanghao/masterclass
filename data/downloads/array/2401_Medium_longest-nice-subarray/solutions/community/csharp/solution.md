# Sliding window approach with faster than xor checking

**Author:** gmartucci
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-nice-subarray/solutions/5317744/](https://leetcode.com/problems/longest-nice-subarray/solutions/5317744/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The base solution is a sliding window approach. It worked fine from the beginning, but I checked some other solutions using an XOR check to eliminate items from a possible solution, and I came up with a different idea, which may be less complex and faster in some situations.

# Approach
<!-- Describe your approach to solving the problem. -->
The basic sliding window approach works by having two pointers, both starting from 0. The right pointer moves to the right while the subarray between the two pointers is "nice." When it is not, we move the left pointer one position to the right and start again.

To check if the subarray is "nice," we need to ensure all the members are nice to each other. By doing this, we find a solution, but if a solution is 20 items long, we will check the same items repeatedly as we continue increasing the length of the subarray. The complexity will be O(n\xB2), and we want to avoid that.

To solve this, I realized that every time we add a new item to the subarray solution, all the other items are already checked. Therefore, we only need to compare the new item with the rest, reducing the complexity.

When using XOR, you check the new item with the XOR sum of the rest of the items. If it is "nice," then fine, we know we can keep adding new items. However, we have to update the XOR sum with the newly added item. This might be faster when testing long subarrays when adding new items, but when it fails, we don't know which of the items caused the failure, so we have to test them all to find the ones we need to exclude from the solution.

In my testing, I found that, at least for the test cases used in this problem, simply testing the new item with the rest was faster than the XOR solution. But please try both approaches yourself and let me know the results.

The last part is about excluding items once we find an item that makes the solution fail. As I described with the XOR approach, I just retest the new item with the rest of the items in descending order. When I find the one that causes the failure, I update the pointers and start over.

The last thing we can do (I just realized this can be done) is modify the CheckNiceArray2 function to:

Test the items in descending order.
Return the item position that caused the solution to fail.
If we do this, we can even avoid the check for excluding the items from the solution.

I'll try and repost!

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
public class Solution {
    public int LongestNiceSubarray(int[] nums)
    {
        int left = 0, right = 1;
        int count = nums.Length;

        if (count == 0) return 0;
        if (count == 1) return 1;

        int max = 1;

        while (right < count)
        {
            if (CheckNiceArray2(left, right, nums))
            {
                if (right - left >= max) max = right - left + 1;
                
                right++;
            }
            else
            {
                for (int i = right - 1; i > left; i--)
                {
                    if (!CheckNiceArray2(i, right, nums))
                    {
                        left = i;
                        right++;
                        break;
                    }
                }

                left++;
                if (left == right) right++;
            }
        }

        return max;
    }

    bool CheckNiceArray2(int left, int right, int[] nums)
    {
        for (int i = left; i < right; i++)
        {
            if ( ( nums[i] & nums[right] ) != 0) return false;
        }

        return true;
    }
}
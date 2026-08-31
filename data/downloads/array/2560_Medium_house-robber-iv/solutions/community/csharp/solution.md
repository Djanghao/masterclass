# O(nlogm) Time O(1) Space

**Author:** d_johnson
**Votes:** 0
**Link:** [https://leetcode.com/problems/house-robber-iv/solutions/3157659/](https://leetcode.com/problems/house-robber-iv/solutions/3157659/)

---

# Definitions
$$n$$ = The length of $$nums$$
$$m$$ = The range of $$nums$$

# Intuition
Since we are trying to find the minimum, maximum of the range of $$k$$ houses, we should binary search the input over the range of it's min to max. You could set min as 1 and max as $$10^9$$ per the constraints, however, I preferred to go ahead and calc the left/right boundaries as min/max of my range since it didn't mess with the time complexity and for a lot of basic cases, it removes extra operations of reducing the max element over and over until you eventually get to a reasonable left/right boundary.

# Approach
1. Get min/max as left/right
2. If $$k$$ = 1, you are done and can just return $$left$$
3. Using $$mid$$, repeatedly identify whether you were able to "take" from at least $$k$$ houses. If you were able to, then we should try reducing $$right$$ to find a smaller $$mid$$. Otherwise, increase $$left$$ to provide a larger maximum that we can use to take so that we can take from at least $$k$$ houses.
4. Eventually, you will be left with the minimum amount you needed to take in order to take from $$k$$ houses, which also happens to be the maximum amount you could take if you were to steal the minimum possible from at least $$k$$ houses.

# Complexity
- Time complexity:
$$O(nlogm)$$

- Space complexity:
$$O(1)$$

# Code
```
public class Solution {
    public int MinCapability(int[] nums, int k) {
        int n = nums.Length;
        if (n == 0) {
            return 0;
        }

        int left = Int32.MaxValue;
        int right = Int32.MinValue;

        foreach (int num in nums) {
            left = Math.Min(left, num);
            right = Math.Max(right, num);
        }

        if (k == 1) {
            return left;
        }

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int take = 0;

            for (int i = 0; i < n; i++) {
                if (nums[i] <= mid) {
                    take += 1;
                    i++;
                }
            }

            if (take >= k) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        //At this point, left and right are equal
        return left;
    }
}
```
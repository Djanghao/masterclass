# O(n) solution Keeping the Binary Array of Or Sum

**Author:** robin1302
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-subarray-with-bitwise-or-closest-to-k/solutions/5906691/](https://leetcode.com/problems/find-subarray-with-bitwise-or-closest-to-k/solutions/5906691/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Keep an binary array of 32 bits of Or Sum in Sliding Window.
# Approach
<!-- Describe your approach to solving the problem. -->
During Sliding Window, to add num, add the bit locations of 1 by 1 bit and while removing num from window, reduce that bit by 1.
While calculating value, just check if the value is more than zero at any bit position.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int MinimumDifference(int[] nums, int k) {
        int[] binOr = new int[32];
        int sum = 0;
        int x = 0;
        int y = 0;
        Add(nums[0], binOr);
        int diff = Math.Abs(k - nums[0]);
        while(x < nums.Length && y < nums.Length)
        {
            if (x > y)
            {
                y++;
                if (y == nums.Length)
                {
                    break;
                }
                Add(nums[y], binOr);
                continue;
            }
            int value = Convert(binOr);
            diff = Math.Min(diff, Math.Abs(value - k));
            if (value > k)
            {
                Remove(nums[x], binOr);
                x++;
                continue;
            }
            if (diff == 0)
            {
                return 0;
            }
            y++;
            if (y == nums.Length)
            {
                break;
            }
            Add(nums[y], binOr);
        }
        return diff;
    }

    private void Add(int num, int[] binOr)
    {
        int bit = 0;
        while(num > 0)
        {
            if (num % 2 != 0)
            {
                binOr[bit] += 1; 
            }
            bit++;
            num = num / 2;
        }
    }

    private void Remove(int num, int[] binOr)
    {
        int bit = 0;
        while(num > 0)
        {
            if (num % 2 != 0)
            {
                binOr[bit] -= 1; 
            }
            bit++;
            num = num / 2;
        }
    }

    private int Convert(int[] binOr)
    {
        int sum = 0;
        for(int i=0; i<32; i++)
        {
            if (binOr[i] > 0)
            {
                sum += (int)Math.Pow(2, i);
            }
        }
        return sum;
    }
}
```
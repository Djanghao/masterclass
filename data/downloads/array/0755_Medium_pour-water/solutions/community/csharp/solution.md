# C# | Basic recursive solution | Pour, slide, and fall

**Author:** marcomu
**Votes:** 0
**Link:** [https://leetcode.com/problems/pour-water/solutions/5369719/](https://leetcode.com/problems/pour-water/solutions/5369719/)

---

# Approach
Pour water into the specified position.
Pouring water does:
1. First, try to slide the water on the left:
. - keep sliding until the height is different
. - if it's blocked by higher height, fail
. - if can fall down, pour it again into that slot.
2. Second, if sliding left failed, try on the right,
3. Finally, if it's blocked left and right, pile it up.

Check comments in code for a better understanding. 


# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n^2)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution
{
    public int[] PourWater(int[] heights, int volume, int k)
    {
        for (var i = 0; i < volume; ++i)
        {
            this.PourWater(heights, k);
        }

        return heights;
    }

    // pours water into position k
    private void PourWater(int[] heights, int k)
    {
        // if the water is blocked left or right, just pile it up here
        if (!this.PourWaterLeft(heights, k) && !this.PourWaterRight(heights, k))
        {
            heights[k] += 1;
        }
    }

    // tries to slides water to the left
    private bool PourWaterLeft(int[] heights, int k)
    {
        if (k <= 0 || heights[k - 1] > heights[k])
        {
            // water is blocked
            return false;
        }
        else if (heights[k - 1] == heights[k])
        {
            // slides one slot more
            return this.PourWaterLeft(heights, k - 1);
        }
        else
        {
            // water fell down, pour it again
            this.PourWater(heights, k - 1);
            return true;
        }
    }

    // tries to slides water to the right
    private bool PourWaterRight(int[] heights, int k)
    {
        if (k >= heights.Length - 1 || heights[k] < heights[k + 1])
        {
            // water is blocked
            return false;
        }
        else if (heights[k] == heights[k + 1])
        {
            // slides one slot more
            return this.PourWaterRight(heights, k + 1);
        }
        else
        {
            // water fell down, pour it again
            this.PourWater(heights, k + 1);
            return true;
        }
    }
}
```
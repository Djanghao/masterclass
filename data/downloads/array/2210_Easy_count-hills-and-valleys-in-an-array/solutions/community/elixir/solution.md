# O(n) Slon

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solutions/5525154/](https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solutions/5525154/)

---

# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` Elixir []
defmodule Solution do
  @spec count_hill_valley(nums :: [integer]) :: integer
  def count_hill_valley([h | t]), do: helper(t, h, 0)
    
  @spec helper([integer], left :: integer, acc :: integer) :: integer
  defp helper([x | [x | _] = t], left, acc), do: helper(t, left, acc)
  defp helper([x | [nx | _] = t], left, acc) do 
    acc = if (x > left and x > nx) or (x < left and x < nx), do: acc + 1, else: acc
    helper(t, x, acc)
  end
  defp helper(_, _, acc), do: acc  
end
```
``` java []
final class Solution {
    public int countHillValley(final int[] nums) {
        int hit = 0, left = nums[0];
        for(int i = 1; i < nums.length - 1; i++){
            if (nums[i] == nums[i+1]) continue;
            if ((nums[i] > left && nums[i] > nums[i + 1]) || (nums[i] < left && nums[i] < nums[i + 1])) hit += 1;
            left = nums[i];
        }return hit;
    }
}
```
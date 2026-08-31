# c#, loops

**Author:** bytchenko
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-array-by-moving-items-to-empty-space/solutions/3881723/](https://leetcode.com/problems/sort-array-by-moving-items-to-empty-space/solutions/3881723/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can check both possibilities (with zero at the first place and at the last place), and analyze loops:

```
   1 0 2 4 3 <- actual order 
   0 1 2 3 4 <- desired order
   ^ ^ ^
   | | Loop of length 1 
   Loop of length 2 (0 and 1 should be swapped)
```

Any loop of size `1` doesn't require any action; as for loops of size `k > 1` we have two cases:

- If loop contains `0`, we want $$k - 1$$ swaps
- If loop doesn't contain `0` we want $$k + 1$$ swaps

The final result is a sum of all required swaps for all loops.

# Approach
<!-- Describe your approach to solving the problem. -->
Loops counting (with `HashSet<int>` as a cache in order count each loop just once).

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
public class Solution {
    private static int SortMe(int[] nums, bool zeroFirst) {
        int result = 0;

        HashSet<int> visited = new HashSet<int>();

        for (int i = 0; i < nums.Length; ++i) {
            int item = nums[i];

            int expected = item == 0
                ? (zeroFirst ? 0 : nums.Length - 1)
                : item + (zeroFirst ? 0 : -1);
            
            if (expected == i)
               continue;

            int loop = 0;
            bool hasZero = false;

            while (visited.Add(item)) {
                loop += 1;
                hasZero |= item == 0;

                int index = zeroFirst 
                  ? item
                  : item == 0 ? index = nums.Length - 1 : item - 1;

                item = nums[index];
            }

            if (loop > 1) 
                result += hasZero ? loop - 1 : loop + 1;  
        }

        return result; 
    }

    public int SortArray(int[] nums) =>
        Math.Min(SortMe(nums, true), SortMe(nums, false));
}
```
# Beats 100% comments included.

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/semi-ordered-permutation/solutions/4333303/](https://leetcode.com/problems/semi-ordered-permutation/solutions/4333303/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
# @param {Integer[]} nums
# @return {Integer}
def semi_ordered_permutation(nums)
    # NOTES:
    # semi-ordered if the first number equals 1 and the last number equals n.
    # 
    # Operations:
    # Pick two adjacent elements in nums, then swap them.
    # Return the minimum number of operations to make nums a semi-ordered permutation.

    one_index = nil
    n_index = nil
    nums.each_with_index do |n, i|
        if n == 1
            one_index = i
        elsif n == nums.size
            n_index = i
        end
    end

    # If n_index comes before swap we actually reduce the amount of swaps needed by one.
    swaps = 0
    if n_index < one_index 
        swaps -= 1
    end

    # Add one index to swaps as it's one_index away
    swaps += one_index

    # Return the number of index from n index to the find index added to swaps.
    return swaps += ((nums.size - 1) - n_index)
end
```
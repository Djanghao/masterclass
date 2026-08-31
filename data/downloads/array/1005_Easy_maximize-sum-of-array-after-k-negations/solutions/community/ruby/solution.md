# Beats 100%. Sort and Flip. O(n log n) time and O(1) space.

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/solutions/4336018/](https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/solutions/4336018/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n log n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def largest_sum_after_k_negations(nums, k)
    # NOTES:
    # Flip any LOWEST negative numbers first.
    # flipping zeros if they exist and there are no negatives left to flip.
    # if there are no negatives then onkly flip the lowest number.

    nums.sort!

    first_index_above_zero = nums.bsearch_index{|n| n > 0}
    if first_index_above_zero == 0 and k.odd?
        nums[0] = -nums[0]
    else
        i = 0
        while k > 0 and nums[i] and nums[i] < 1
            if nums[i] != 0 and
                nums[i] = -nums[i]
                i += 1
            end
            
            k -= 1
        end

        if k.odd? 
            nums.sort!
            nums[0] = -nums[0] 
        end
    end

    return nums.sum
end
```
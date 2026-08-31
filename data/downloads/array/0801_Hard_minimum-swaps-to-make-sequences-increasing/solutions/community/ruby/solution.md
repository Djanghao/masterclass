# OOP + DP Walkthrough - (easy to read) - 364ms - beats 100% ruby runtime & memory

**Author:** innorogue
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/solutions/4276445/](https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/solutions/4276445/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class SwapCounter
    attr_accessor :nums1, :nums2, :options
    
    def initialize(nums1, nums2)
        @nums1 = nums1
        @nums2 = nums2
        @options = {0 => 0, 1 => 1}
    end

    def can_keep?(step, previous_swapped = false)
        if previous_swapped
            @nums1[step - 1] < @nums2[step] && @nums2[step - 1] < @nums1[step]
        else
            @nums1[step - 1] < @nums1[step] && @nums2[step - 1] < @nums2[step]
        end
    end

    def can_swap?(step, previous_swapped = false)
        if previous_swapped
            @nums2[step - 1] < @nums2[step] && @nums1[step - 1] < @nums1[step]
        else
            @nums1[step - 1] < @nums2[step] && @nums2[step - 1] < @nums1[step]
        end
    end

    def replace_min?(a, b)
        !a || a > b
    end

    def next_options!(step)
        new_options = {}
        # no previous swap
        if @options[0]
            if can_keep?(step, false) && replace_min?(new_options[0], options[0])
                new_options[0] = options[0]
            end
            if can_swap?(step, false) && replace_min?(new_options[1], options[0] + 1)
                new_options[1] = options[0] + 1
            end
        end

        if @options[1]
            if can_keep?(step, true) && replace_min?(new_options[0], options[1])
                new_options[0] = options[1]
            end
            if can_swap?(step, true) && replace_min?(new_options[1], options[1] + 1)
                new_options[1] = options[1] + 1
            end
        end
        @options = new_options
    end
end

# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Integer}
def min_swap(nums1, nums2)
    # options[0] = min options if not swapping, options[1] = min options if swapping
    step = 1
    counter = SwapCounter.new(nums1, nums2)
    while step < nums1.length
        counter.next_options!(step)
        step += 1
    end
    counter.options.values.min
end
```
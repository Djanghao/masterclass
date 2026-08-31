# 55ms

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/form-array-by-concatenating-subarrays-of-another-array/solutions/4844682/](https://leetcode.com/problems/form-array-by-concatenating-subarrays-of-another-array/solutions/4844682/)

---

Took 17 minutes, this is doable in an interview.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n log n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
# @param {Integer[][]} groups
# @param {Integer[]} nums
# @return {Boolean}
def can_choose(groups, nums)

    j = 0
    groups.each do |group|
        i = 0
        
        # Keep track of all indexes we used to start attempting to 
        # find vals of group within nums within tested_indexes.
        tested_indexes = {}
        next_start_point = nil
        # Move j to to match start of group.
        while nums[j] and nums[j] != group[0]
            j += 1
        end
        # Set our first j index as tested.
        tested_indexes[j] = true

        # Find all elements of group within nums starting from j.
        while i < group.size and nums[j] 
            ele = group[i]

            # If nums[j] doesnt match the element in group
            # restart our group index and move j to a new starting position.
            if nums[j] != group[i]
                i = 0

                while nums[j] and nums[j] != group[0]
                    j += 1
                end
            end

            # If we still cannot find an element matching group
            # go back to a previously found starting point.
            # Example of when this is needed:
            # groups =
            # [[21,22,21,22,21,30]]
            # nums =
            # [21,22,21,22,21,22,21,30]
            if nums[j] != group[i]
                i = 0
                if next_start_point
                    j = next_start_point
                    next_start_point = nil
                end
            else
                # If our next starting point is nil and nums[j] matches the
                # starting point set next starting point.
                # Set our starting point as tested so we do not retest same 
                # starting point.
                if nums[j] == group[0] and next_start_point == nil
                    if tested_indexes[j] == nil
                        next_start_point = j
                        
                        tested_indexes[j] = true
                    end
                end
                j += 1
            end

            i += 1
        end

        # If i didn't clear all chars of group, return false
        if i != group.size
            return false
        end
    end

    # If we made it this far then we cleared all groups.
    true
end
```
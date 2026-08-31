# Sliding Window. Beats 100%

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/solutions/4120700/](https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/solutions/4120700/)

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
# @param {String} blocks
# @param {Integer} k
# @return {Integer}
def minimum_recolors(blocks, k)
    
    answer = 101
    color_change = 0
    l = 0
    r = 0 
    while r < blocks.size
        # Remove
        if r - l + 1 > k
            if blocks[l] == "W"
                color_change = color_change - 1
            end
            
            l = l + 1
        end

        # Add
        if blocks[r] == "W"
            color_change = color_change + 1
        end

        # Calculate
        if r - l + 1 == k and color_change < answer
            answer = color_change
        end

        r = r + 1
    end

    answer
end
```
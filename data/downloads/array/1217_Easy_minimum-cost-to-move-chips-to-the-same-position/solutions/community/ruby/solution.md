# Greedy

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/solutions/4332893/](https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/solutions/4332893/)

---


- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
# @param {Integer[]} position
# @return {Integer}
def min_cost_to_move_chips(position)
    # move all the chips to the same position

    # options:
    # 1. position[i] + 2 or position[i] - 2 with cost = 0.
    # 2. position[i] + 1 or position[i] - 1 with cost = 1.


    odd = 0
    even = 0
    position.each do |p|
        if p.even? 
            even +=1 
        else
            odd +=1 
        end
    end

    if odd > even
        return even
    else
        return odd
    end
    
end
```
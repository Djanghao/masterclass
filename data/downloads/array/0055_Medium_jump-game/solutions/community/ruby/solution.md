# Ruby. Easy to follow (One pass starting from end). 74% speed 100% mem

**Author:** jrico59
**Votes:** 4
**Link:** [https://leetcode.com/problems/jump-game/solutions/535741/](https://leetcode.com/problems/jump-game/solutions/535741/)

---

We break the problem down into seeing if we can reach the index from the second-to-last index by checking the value at `length-2` and subtracting the distance of 1. If we can, the second-to-last is the new goal to reach and the distance resets to 1. If we can't, the distance is incremented to 2. Either way, we now move the pointer back and check if the value at that index is `>=` the distance. Once again, if it is, we can reach it, and we reset the distance to 1. If it's not, we increment distance again. Walk this pattern all the way back to the beginning of the array, seeing if we can reach the "current goal" at each step and modifying the distance accordingly. If the distance is 1 when we're finished, then the end is reachable from the beginning.

```ruby
def can_jump(nums)
    i = nums.length - 2
    distance = 1
    
    while i >= 0 do
        if nums[i] - distance >= 0
            distance = 1
        else
            distance += 1
        end
        
        i -= 1
    end
    
    return distance == 1
end
```
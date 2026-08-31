# Ruby easy to read with comments

**Author:** bobsmits
**Votes:** 1
**Link:** [https://leetcode.com/problems/frog-jump/solutions/3148070/](https://leetcode.com/problems/frog-jump/solutions/3148070/)

---

Recursive with memoization

# Code
```
# @param {Integer[]} stones
# @return {Boolean}
def can_cross(stones)
    @stones = stones;
    @memo = {}
    can_make_it_to_the_end?(0,0)
end

#484
def can_make_it_to_the_end?(index, last_jump)
    # reached the end hooray
    return true if index + 1 == @stones.size
    
    next_index = index + 1
    
    # check all upcomming indexed that are below the max jump
    while @stones[next_index] && @stones[next_index] - @stones[index] <= last_jump+1

        # loop throught the possible jumps
        (last_jump-1..last_jump+1).each { |jump| 
            if @stones[next_index] - @stones[index] == jump && !@memo["#{next_index},#{jump}"]
                return true if can_make_it_to_the_end?(next_index, jump)
                
                # mark this position with this previous jump as a dead end
                @memo["#{next_index},#{jump}"] = true
            end
        }
        next_index +=1 
    end
    false
end



```
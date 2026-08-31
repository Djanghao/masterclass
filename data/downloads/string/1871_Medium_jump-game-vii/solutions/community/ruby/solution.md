# Ruby 690 ms, faster than 100.00%

**Author:** ferbass
**Votes:** 0
**Link:** [https://leetcode.com/problems/jump-game-vii/solutions/2410734/](https://leetcode.com/problems/jump-game-vii/solutions/2410734/)

---

```
# @param {String} s
# @param {Integer} min_jump
# @param {Integer} max_jump
# @return {Boolean}
def can_reach(s, min_jump, max_jump)
    queue = [0]
    farthest = 0

    while !queue.empty?
        i = queue.shift 

        start = [i + min_jump, farthest + 1].max
        
        for j in start..[i + max_jump, s.length].min
            if s[j] == "0"
                queue<<j
                if j == s.length - 1
                    return true
                end
            end
        end
        farthest = i + max_jump
    end
    
    return false
end
```
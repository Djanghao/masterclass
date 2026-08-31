# 2 Pointers

**Author:** pratik1707
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-to-make-rope-colorful/solutions/4464057/](https://leetcode.com/problems/minimum-time-to-make-rope-colorful/solutions/4464057/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {String} colors
# @param {Integer[]} needed_time
# @return {Integer}
def min_cost(colors, needed_time)    
    min_cost = 0 
    i = 0 
    max = 0 
    sum = 0 
    while(i < colors.length-1) do         
        max = needed_time[i]
        sum = needed_time[i]
        j = i+1
        while(colors[j] == colors[i]) do 
            max = [max, needed_time[j]].max 
            sum += needed_time[j]
            j += 1           
        end        
        
        min_cost += sum  - max         
        i = j
    end 

    min_cost 
end
```
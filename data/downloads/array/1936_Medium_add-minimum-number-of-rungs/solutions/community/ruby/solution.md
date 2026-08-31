# Straightforward Ruby solution (O(N))

**Author:** rmuntani
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-minimum-number-of-rungs/solutions/5342252/](https://leetcode.com/problems/add-minimum-number-of-rungs/solutions/5342252/)

---

# Intuition
If we have a gap higher than what we can reach. We need to add a rung.

The twist is the we don't need to add the exact height required to reach the next rung.

# Code
```
# @param {Integer[]} rungs
# @param {Integer} dist
# @return {Integer}
def add_rungs(rungs, dist)
   curr_height = 0 
   total = 0

   rungs.each do |h|
     if h > curr_height + dist   
       total += ((h - curr_height) / dist.to_f).ceil.to_i - 1
     end
     curr_height = h
   end
   total
end
```
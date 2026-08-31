# Sorting

**Author:** pratik1707
**Votes:** 1
**Link:** [https://leetcode.com/problems/meeting-rooms/solutions/4157216/](https://leetcode.com/problems/meeting-rooms/solutions/4157216/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[][]} intervals
# @return {Boolean}
def can_attend_meetings(intervals)
    intervals.sort!

    for i in (0...intervals.length-1) do 
        if intervals[i][1] > intervals[i+1][0]
            return false 
        end 
    end 

    return true 
end
```
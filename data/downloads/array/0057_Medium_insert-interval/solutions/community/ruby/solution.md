# Easy to read Ruby solution

**Author:** ksodha93
**Votes:** 3
**Link:** [https://leetcode.com/problems/insert-interval/solutions/4090767/](https://leetcode.com/problems/insert-interval/solutions/4090767/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
# @param {Integer[][]} intervals
# @param {Integer[]} new_interval
# @return {Integer[][]}
def insert(intervals, new_interval)
    result = []

    intervals.each_with_index do |interval, i|
        # no overlapping intervals
        if new_interval[1] < interval[0] # new_interval comes before first element in the intervals 
            result << new_interval
            return result + intervals[i...intervals.length]
        elsif new_interval[0] > interval[1] # new_interval comes after the current interval
            result << interval
        else # overlapping intervals
            new_interval = [[interval[0],new_interval[0]].min, [interval[1], new_interval[1]].max]
        end
    end
    result << new_interval
    result
end
```
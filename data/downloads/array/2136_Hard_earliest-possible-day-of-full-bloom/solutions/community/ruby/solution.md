# Ruby Solution

**Author:** ganesh
**Votes:** 0
**Link:** [https://leetcode.com/problems/earliest-possible-day-of-full-bloom/solutions/2757668/](https://leetcode.com/problems/earliest-possible-day-of-full-bloom/solutions/2757668/)

---

# Intuition
https://github.com/ganeshskudva/Leetcode-Ruby

# Code
```
# @param {Integer[]} plant_time
# @param {Integer[]} grow_time
# @return {Integer}
def earliest_full_bloom(plant_time, grow_time)
  n = plant_time.size
  pairs = Array.new(n) { Array.new(2, 0) }

  (0..n - 1).each do |i|
    pairs[i][0] = plant_time[i]
    pairs[i][1] = grow_time[i]
  end

  pairs.sort! { |i, j| j[1] <=> i[1] }
  planting_days = 0
  total_days = 0
  pairs.each do |p|
    total_days =  [total_days, planting_days + p[0] + p[1]].max
    planting_days += p[0]
  end

  total_days
end
```
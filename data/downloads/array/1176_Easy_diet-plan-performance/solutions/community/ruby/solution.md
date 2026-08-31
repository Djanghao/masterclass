# Ruby, Sliding Window

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/diet-plan-performance/solutions/5253318/](https://leetcode.com/problems/diet-plan-performance/solutions/5253318/)

---

# Code
```
def diet_plan_performance(calories, k, lower, upper)
  result = 0

  (0...calories.length).each do |i|
    sequence = calories[i...i + k]

    next if sequence.length != k

    sum = sequence.sum
    result += 1 if sum > upper
    result -= 1 if sum < lower
  end

  result
end
```
# recursive solution

**Author:** schlabam
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/solutions/4420084/](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/solutions/4420084/)

---

# Intuition
wanted to do something besides storing a counter, so here we are


# Code
```
# @param {Integer} num
# @return {Integer}
def number_of_steps(num)
  step_count(num, 0)
end

def step_count(num, count)
  return count if num.zero?
  count += 1
  if num.even?
    step_count(num/2, count)
  else
    step_count(num-1, count)
  end
end
```
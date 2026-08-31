# Short and easy to understand Ruby solution using stack beats 100%

**Author:** divyad25
**Votes:** 1
**Link:** [https://leetcode.com/problems/next-greater-element-ii/solutions/446743/](https://leetcode.com/problems/next-greater-element-ii/solutions/446743/)

---

```
def next_greater_elements(nums)
  len = nums.length
  stack = []
  result = Array.new(len, -1)

  (0...nums.length*2).each { |i| # Running the loop twice to find the next greater element in circular array
    i %= len
    while(stack.any? && nums[stack.last] < nums[i])
      result[stack.pop] = nums[i]
    end
    stack.push(i) # Pushing index because nums contains duplicates
  }
  result
end
```
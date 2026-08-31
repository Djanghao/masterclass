# Simple Ruby solution using stack Time: O(n+m), Space: (n+m)

**Author:** divyad25
**Votes:** 3
**Link:** [https://leetcode.com/problems/next-greater-element-i/solutions/446734/](https://leetcode.com/problems/next-greater-element-i/solutions/446734/)

---

```
def next_greater_element(nums1, nums2)
  stack = []
  next_greater_ele = Hash.new(-1)
  result = []

  nums2.each { |n|
    while( stack.any? && stack.last < n )
      next_greater_ele[stack.pop] = n
    end
    stack.push(n)
  }
  nums1.each { |n|
    result << next_greater_ele[n]
  }
  result
end
```
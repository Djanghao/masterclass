# Ruby: recursive, concise

**Author:** giner
**Votes:** 3
**Link:** [https://leetcode.com/problems/average-of-levels-in-binary-tree/solutions/2516491/](https://leetcode.com/problems/average-of-levels-in-binary-tree/solutions/2516491/)

---

```ruby
def average_of_levels(root, sums = [], level = 0)
    return if !root
    sums[level] ||= [0, 0]
    sums[level][0] += root.val
    sums[level][1] += 1
    average_of_levels(root.left, sums, level + 1)
    average_of_levels(root.right, sums, level + 1)
    sums.map{ |sum, n| sum.fdiv(n) } if level == 0
end
```
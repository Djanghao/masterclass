# Ruby || O(n*log(n))/O(1)

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/solutions/4152447/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/solutions/4152447/)

---

# Complexity
- Time complexity:
$$O(n*log(n))$$

- Space complexity:
$$O(1)$$

# Code

```ruby
class Numeric
    def min(v) = (self > v ? v : self)
end

def min_operations(nums)
    nums.sort!
    ul = nums.each_cons(2).inject(1) {|res, (v1, v2)| 
        nums[(res += 1) - 1] = v2 unless v1 == v2
        res
    }
    nums.each_with_index.inject([nums.size, 0]) {|(ans, j), (v, i)|
        j += 1 while j < ul && nums[j] - v < nums.size
        [ans.min(nums.size + i - j), j]
    }.first
end
```
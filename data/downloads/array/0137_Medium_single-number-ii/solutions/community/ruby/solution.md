# Simple Ruby Solution

**Author:** remy727
**Votes:** 1
**Link:** [https://leetcode.com/problems/single-number-ii/solutions/3563199/](https://leetcode.com/problems/single-number-ii/solutions/3563199/)

---

# Code
```ruby
# @param {Integer[]} nums
# @return {Integer}
def single_number(nums)
  one = 0
  two = 0

  nums.each do |num|
    one = (one ^ num) & ~two
    two = (two ^ num) & ~one
  end

  one
end
```

# Test
```ruby
require "test/unit"
class Test_single_number < Test::Unit::TestCase
  def test_
    assert_equal 3, single_number([2, 2, 3, 2])
    assert_equal 99, single_number([0, 1, 0, 1, 0, 1, 99])
  end
end

```
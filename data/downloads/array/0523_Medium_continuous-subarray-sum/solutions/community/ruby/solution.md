# Ruby | map! { _1 % k }

**Author:** codingstar1
**Votes:** 4
**Link:** [https://leetcode.com/problems/continuous-subarray-sum/solutions/2744430/](https://leetcode.com/problems/continuous-subarray-sum/solutions/2744430/)

---

```ruby
def check_subarray_sum(nums, k)
    nums.map! { _1 % k }
    nums.each_cons(2) { return true if _1 == [0,0] }
    return false if nums.sum < k
    n = nums.length
    (0..n-2).each do |i|
        mod = nums[i]
        (i+1..n-1).each do |j|
            mod = (mod + nums[j]) % k
            return true if mod.zero?
        end
    end
    false
end
```
<hr>

# Tests:
```ruby
require 'test/unit'
class Test_check_subarray_sum < Test::Unit::TestCase
    def test_
        assert_equal true, check_subarray_sum([23,2,4,6,7], k = 6)
        assert_equal true, check_subarray_sum([23,2,6,4,7], k = 6)
        assert_equal false, check_subarray_sum([23,2,6,4,7], k = 13)
        assert_equal true, check_subarray_sum([23,2,4,6,6], k = 7)
        assert_equal false, check_subarray_sum([1617,4991,12564,3903,8881], k = 2000000000)
    end
end
```
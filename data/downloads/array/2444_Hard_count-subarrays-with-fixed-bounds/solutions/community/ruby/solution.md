# Ruby | Not mine solution

**Author:** codingstar1
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-subarrays-with-fixed-bounds/solutions/3257052/](https://leetcode.com/problems/count-subarrays-with-fixed-bounds/solutions/3257052/)

---

It isn't mine solution. Original is https://leetcode.com/problems/count-subarrays-with-fixed-bounds/solutions/2707995/simple-o-n-c-solution/

# Complexity
- Time complexity:
    $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
    $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```ruby
def count_subarrays(nums, min_k, max_k)
    max_found = min_found = false
    start = 0
    res = 0
    min_index = max_index = 0
    nums.each_with_index do |num, i|
        unless num.between?(min_k, max_k)
            start = i + 1
            min_found = max_found = false
        else
            if num == min_k
                min_found = true 
                min_index = i
            end
            if num == max_k
                max_found = true
                max_index = i
            end
            if min_found && max_found
                res += ([min_index, max_index].min - start + 1)
            end
        end
    end
    res
end
```
<hr>

# Tests:
```ruby
require 'test/unit'
class Test_count_subarrays < Test::Unit::TestCase
    def test_
        assert_equal 2, count_subarrays(nums = [1,3,5,2,7,5], minK = 1, maxK = 5)
        assert_equal 10, count_subarrays(nums = [1,1,1,1], minK = 1, maxK = 1)
    end
end
```
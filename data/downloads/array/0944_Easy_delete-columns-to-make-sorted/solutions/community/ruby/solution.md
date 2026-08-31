# Ruby | 1-liner

**Author:** codingstar1
**Votes:** 2
**Link:** [https://leetcode.com/problems/delete-columns-to-make-sorted/solutions/2991545/](https://leetcode.com/problems/delete-columns-to-make-sorted/solutions/2991545/)

---



# Code
```ruby
def min_deletion_size(strs)
    strs.map(&:chars).transpose.count{ |col| col.each_cons(2).any?{ _1 > _2 } } 
end
```
<hr>

# Tests:
```ruby
require 'test/unit'
class Test_min_deletion_size < Test::Unit::TestCase
    def test_
        assert_equal 1, min_deletion_size(["cba","daf","ghi"])
        assert_equal 0, min_deletion_size(["a","b"])
        assert_equal 3, min_deletion_size(["zyx","wvu","tsr"])
    end
end
```
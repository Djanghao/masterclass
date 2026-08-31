# Ruby || Indexing and sorting

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/diagonal-traverse-ii/solutions/4316449/](https://leetcode.com/problems/diagonal-traverse-ii/solutions/4316449/)

---


# Code
```ruby
def find_diagonal_order(nums)
    return nums.first if nums.size == 1
    nums.each_with_index.each_with_object([]) {|(row, i), res|
        row.each_with_index {|v, j| res << [(i + j << 20) | (nums.size - i), v]} # 2^20 ~= 10^6; max.size is 10^5, so 2^20 is greater for sure
    }.sort_by!(&:first).collect(&:last)
end
```
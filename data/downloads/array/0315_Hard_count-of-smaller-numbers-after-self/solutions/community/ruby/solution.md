# Ruby - Binary search

**Author:** shhavel
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-of-smaller-numbers-after-self/solutions/1298012/](https://leetcode.com/problems/count-of-smaller-numbers-after-self/solutions/1298012/)

---

Iterate array from the right to the left.
Keep all visited elements in a sorted array `q`.
Use `bsearch_index` method to get count of elements smaller then the current element.
At the same time this value is an index where to put the current element in the `q`.

```ruby
def count_smaller(nums)
  n = nums.size
  res = Array.new(n, 0)
  return res if nums == nums.sort # return early for basic case
  rnums = [] # sorted righthand part of nums 
  (0...n).reverse_each do |i|
    res[i] = j = rnums.bsearch_index { |y| nums[i] <= y } || rnums.size
    rnums.insert(j, nums[i])
  end
  res
end
```

Time complexity: `O(N ^ 2)` (`Array#insert` has `O(N)` time complexity).
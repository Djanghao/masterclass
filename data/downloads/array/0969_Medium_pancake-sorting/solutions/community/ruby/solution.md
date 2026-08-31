# [Ruby] 100% faster solution

**Author:** gxespino
**Votes:** 1
**Link:** [https://leetcode.com/problems/pancake-sorting/solutions/1711939/](https://leetcode.com/problems/pancake-sorting/solutions/1711939/)

---

Runtime: 117 ms, faster than 100.00% of Ruby online submissions for Pancake Sorting.
Memory Usage: 211 MB, less than 100.00% of Ruby online submissions for Pancake Sorting.

```ruby
def pancake_sort(arr)
  result = []

  while arr.any?
    # 1. Find maximum in array, reverse from it's index
    # 2. Save the index into result
    # 3. Reverse the entire array
    # 4. Save the last element's index into result
    # 5. Pop the last element
    # 6. Repeat steps until no elements remain
    max = arr.max
    idx = arr.index(max) + 1

    result << idx
    result << arr.length

    arr = arr[0..idx-1].reverse + arr[idx..-1]
    arr = arr.reverse
    arr.pop
  end

  result
end
```
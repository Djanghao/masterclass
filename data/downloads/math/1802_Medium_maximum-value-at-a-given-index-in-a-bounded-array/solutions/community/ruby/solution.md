# Ruby - Binary search + check, O(log maxSum)

**Author:** shhavel
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/solutions/1119839/](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/solutions/1119839/)

---

Check if sum array elements in a form `[1, 1, 1, 2, 3, 4, .... x-1, x, x-1,  ..., 2, 1, 1,1]` not greater than `max_sum`.

```ruby
def max_value(n, index, max_sum)
  l = index + 1  # number of elements from index 0 till `index`
  r = n - index  # number of elements from index `index` till n - 1
  (0..max_sum + 1).bsearch do |x|
    sum = 0
    sum += if x >= l
      (x + x - l + 1) * l / 2   # (x - l + 1) + (x - l) + ... + (x - 1) + x
    else
      (x + 1) * x / 2  + l - x  # (1 + 1 + ... + 1) + 1 + 2 + ... + x
    end
    sum += if x >= r
      (x + x - r + 1) * r / 2
    else
      (x + 1) * x / 2  + r - x
    end
    sum -= x # we counted x twice
    max_sum < sum
  end - 1
end
```

TIme complexity: `O(log maxSum)`
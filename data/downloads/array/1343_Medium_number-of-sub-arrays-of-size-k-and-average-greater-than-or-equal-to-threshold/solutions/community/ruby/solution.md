# Ruby

**Author:** tomplummer
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/solutions/5275386/](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/solutions/5275386/)

---

# Code
```
def num_of_subarrays(arr, k, threshold)
  sum = arr[0...k].sum
  min_sum = k * threshold

  count = 0
  count += 1 if sum >= min_sum

  k.upto(arr.size - 1) do |n|
    sum -= arr[n - k]
    sum += arr[n]
    count += 1 if sum >= min_sum
  end

  count
end
```
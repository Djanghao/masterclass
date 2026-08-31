# Ruby simple solution

**Author:** Hoaxis
**Votes:** 5
**Link:** [https://leetcode.com/problems/subarray-sum-equals-k/solutions/593213/](https://leetcode.com/problems/subarray-sum-equals-k/solutions/593213/)

---

```
def subarray_sum(nums, k)
  hash = Hash.new(0)
  hash[0] = 1
  count = sum = 0
  nums.each do |num|
    sum += num
    count += hash[sum - k]
    hash[sum] += 1
  end
  count
end
```
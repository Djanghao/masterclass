# Ruby, Binary Search and Sliding Window

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-smallest-subarray-sum/solutions/5651468/](https://leetcode.com/problems/kth-smallest-subarray-sum/solutions/5651468/)

---

# Code
```
def kth_smallest_subarray_sum(nums, k)
  number_of_subarrays_less_than = lambda do |target|
    result = 0
    sum = 0
    left = 0
    (0...nums.length).each do |right|
      sum += nums[right]
      while sum > target
        sum -= nums[left]
        left += 1
      end
      result += right - left + 1
    end
    result
  end
  
  (0..nums.sum).bsearch { |target| number_of_subarrays_less_than.call(target) >= k }
end
```
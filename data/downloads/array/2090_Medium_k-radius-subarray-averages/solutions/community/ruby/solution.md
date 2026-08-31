# Yet another Ruby with sliding window approach

**Author:** ChengSeng
**Votes:** 1
**Link:** [https://leetcode.com/problems/k-radius-subarray-averages/solutions/3414924/](https://leetcode.com/problems/k-radius-subarray-averages/solutions/3414924/)

---

The approach is basically identical with other sliding window solution out there, in that we first expand the window until it is large enough to calculate the average, then put the average in the correct slot and move the window accordingly.
```ruby
def get_averages(nums, k)
  left = 0
  curr_sum = 0
  window_size = 2 * k + 1
  result = Array.new(nums.length, -1)
  
  nums.each_with_index do |num, right|
    curr_sum += num
    
    if right - left + 1 == window_size
      avg = curr_sum / window_size
      result[right - k] = avg
      curr_sum -= nums[left]
      left += 1
    end
  end
  result
end
```
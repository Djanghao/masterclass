# [Ruby] O(n)

**Author:** mistersky
**Votes:** 1
**Link:** [https://leetcode.com/problems/non-decreasing-array/solutions/1191221/](https://leetcode.com/problems/non-decreasing-array/solutions/1191221/)

---

```
def check_possibility(nums)
  return true if nums.count <= 2
      
  flag = nums[0] > nums[1] ? true : false
  
  (1...nums.count-1).each do |i|
    if nums[i] > nums[i+1]
      nums[i+1] = nums[i] if nums[i-1] > nums[i+1]
      return false if flag
      flag = true
    end
  end
  
  true
end
```
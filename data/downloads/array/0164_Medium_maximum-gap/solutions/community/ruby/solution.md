# [Ruby] O(n)

**Author:** mistersky
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-gap/solutions/1241837/](https://leetcode.com/problems/maximum-gap/solutions/1241837/)

---

```
# @param {Integer[]} nums
# @return {Integer}
def maximum_gap(nums)
  count = nums.count
  min = nums.min
  max = nums.max
  
  return 0 if count < 2 || min == max
  
  size = ((max-min).to_f/(count-1)).ceil
  bucket = ((max-min)/size + 1).times.map{[nil, nil]}
  
  nums.each do |num|
    b = bucket[(num-min)/size]
    b[0] = [b[0], num].compact.min
    b[1] = [b[1], num].compact.max
  end
  
  bucket = bucket.select{|b| b[0]}
  
  (1...bucket.count).map{|i| bucket[i][0]-bucket[i-1][1]}.max
end
```
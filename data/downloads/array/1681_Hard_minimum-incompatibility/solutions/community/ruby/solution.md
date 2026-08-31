# [Ruby] Backtracking

**Author:** mistersky
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-incompatibility/solutions/963094/](https://leetcode.com/problems/minimum-incompatibility/solutions/963094/)

---

```
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def minimum_incompatibility(nums, k)
  @sorted_nums, @k = nums.sort.reverse, k

  @nums_count = nums.count
  @subset_size = @nums_count/k
  @subsets = k.times.map{[]}
  
  @result = Float::INFINITY
  
  return -1 if @sorted_nums.group_by{|num| num}.values.map(&:count).max > @k
  solver(0)
  
  @result
end

def solver(i)
  if i == @nums_count
    @result = [@result, @k.times.map{|j| @subsets[j].first - @subsets[j].last}.sum].min
    return true
  end
  
  flag = 0
  @k.times do |j|
    if !@subsets[j] || @subsets[j].count < @subset_size && @subsets[j].last != @sorted_nums[i]
      @subsets[j] << @sorted_nums[i]
      flag += 1 if solver(i + 1)

      @subsets[j].pop
    end
    
    break if flag >= 2
  end
  
  flag != 0
end
```
# Ruby Solution

**Author:** woahlag
**Votes:** 1
**Link:** [https://leetcode.com/problems/subsets-ii/solutions/615937/](https://leetcode.com/problems/subsets-ii/solutions/615937/)

---

```
def subsets_with_dup(nums)
    @results = Set.new
    
    find_subsets(nums.sort, [])
    
    @results.to_a
end

def find_subsets(nums, current)
    return if @results.include?(current)
    @results << current
    return if nums.empty?
    
    nums.each_with_index do |num, index|
       find_subsets(nums[index+1..-1], current + [num]) 
    end
end
```
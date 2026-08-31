# Ruby solution

**Author:** ozovalihasan
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-longest-increasing-subsequence/solutions/3797143/](https://leetcode.com/problems/number-of-longest-increasing-subsequence/solutions/3797143/)

---

# Code
```ruby []
# @param {Integer[]} nums
# @return {Integer}
def find_number_of_lis(nums)
  result = [[[-Float::INFINITY,1]]]
  
  nums.each do |num|
    reference_index = result.bsearch_index {|arr| arr.first.first >= num}

    unless reference_index
      reference_index = result.size
      result << [[num, 0]]
    end

    unless result[reference_index].first.first == num
      result[reference_index].unshift [num, 0]
    end

    sum = result[reference_index - 1].select {|arr| arr.first < num}.sum(&:last)
    result[reference_index].first[1] += sum
  end
  
  result.last.sum(&:last)
end
```
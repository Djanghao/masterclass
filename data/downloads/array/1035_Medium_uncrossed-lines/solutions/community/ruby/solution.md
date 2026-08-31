# Ruby solution

**Author:** ozovalihasan
**Votes:** 1
**Link:** [https://leetcode.com/problems/uncrossed-lines/solutions/3512860/](https://leetcode.com/problems/uncrossed-lines/solutions/3512860/)

---

# Code
```ruby []
# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Integer}
def max_uncrossed_lines(nums1, nums2)
  indices_of_nums2 = {}
  nums2.each_with_index {|num2, index2| (indices_of_nums2[num2] ||= []) << index2 } 
  indices_of_nums2.transform_values!(&:reverse)
  
  result = []
  nums1.each_with_index do |num|
    
    indices_of_nums2[num]&.each do |index|
      max_index = result.rindex {|indices| indices.any? {|previous_index| previous_index < index }} || -1
      (result[max_index + 1] ||= []) << index
    end
    
  end

  result.size
end
```
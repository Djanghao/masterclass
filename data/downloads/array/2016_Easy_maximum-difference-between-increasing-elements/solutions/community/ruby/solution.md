# Beats 100%. O(n), O(n)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-difference-between-increasing-elements/solutions/4816698/](https://leetcode.com/problems/maximum-difference-between-increasing-elements/solutions/4816698/)

---


# Code
```
# @param {Integer[]} nums
# @return {Integer}
def maximum_difference(nums)
    largest_nums_after_i = Array.new(nums.size)

    largest_num = nums[-1]
    largest_nums_after_i[-1] = largest_num
    i = nums.size - 2
    while i > -1
        largest_nums_after_i[i] = largest_num
        largest_num = [nums[i], largest_num].max
        i -= 1
    end

    largest_diff = 0
    nums.each_with_index do |num, i|
        largest_diff = [largest_nums_after_i[i] - num, largest_diff].max
    end

    if largest_diff == 0
        -1
    else
        largest_diff
    end
end
```
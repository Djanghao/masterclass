# Positional Counters - O(n*m)

**Author:** benenb
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-digit-differences-of-all-pairs/solutions/5528090/](https://leetcode.com/problems/sum-of-digit-differences-of-all-pairs/solutions/5528090/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For a single number, the number of different numbers in that position is given by the count of that number in that position multiplied by the count of other numbers in that position.

If we sum this for all numbers present in that position we will end up with twice the total number of differences for that position, (as each difference is counted twice)

If we sum this value for all positions we will have the answer

# Approach
<!-- Describe your approach to solving the problem. -->
Initialize an array of counters for each position in the input numbers.

Iterate over the input numbers, inserting each character into the counter for its position.

Then iterate over the resulting counters, calculating the differences for each number in the counter

Return half the sum

# Complexity
*Where 'n' is the count of nums & 'm' is the length of a num*
- Time complexity: $$O(n*m)$$ 

- Space complexity: $$O(m)$$

# Code
```
# @param {Integer[]} nums
# @return {Integer}
def sum_digit_differences(nums)

    num_count = nums.length
    num_length = nums.first.digits.length 

    positions = Array.new(num_length){{}}
    
    nums.each do |num|
        num.digits.each_with_index do |d,i|
            positions[i][d] ||= 0
            positions[i][d] += 1  
        end
    end   

    differences = 0
    positions.each do |counts|
        counts.values.each do |v|
            differences += v*(num_count-v)
        end
    end

    differences/2    
end
```
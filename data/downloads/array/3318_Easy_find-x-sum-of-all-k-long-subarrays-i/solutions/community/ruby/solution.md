# Frequency hash, problem is definitely a word salad. O((n - k + 1) * n log n)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/solutions/5907838/](https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/solutions/5907838/)

---


# Code
```ruby []
# @param {Integer[]} nums
# @param {Integer} k
# @param {Integer} x
# @return {Integer[]}
def find_x_sum(nums, k, x)
    # x_sum = top x based freq of elements in array(if two elements have same frequency discard lower val), calculate sum of array.
    # If x > n then use all of n.
    # Return answer of length n - k + 1 where answer[i] is the x_sum of the array[nums[i..i + k - 1]]
    og_nums = nums.dup
    
    i = 0
    needed_answers = nums.size - k + 1
    answer = Array.new(needed_answers) { 0 }
    while i < needed_answers
        # nums is different for each iteration.
        nums = og_nums[i..i + k - 1]

        # Create a frequency hash
        freq_hash = Hash.new{|hash, key| hash[key] = 0}
        nums.each do |num|
            freq_hash[num] += 1
        end

        # Get the nums we need to calculate our x-sum.
        nums_with_freq_we_will_be_using_to_calc = []
        freq_hash.each do |key, value|
            nums_with_freq_we_will_be_using_to_calc << [key, value]
        end
        
        # Sort by highest frequency and highest value(secondary sort).
        nums_with_freq_we_will_be_using_to_calc.sort_by!{|a| [-a[1], -a[0]] }

        # Slot in our answer.        
        nums_with_freq_we_will_be_using_to_calc[0..x - 1].each do |value, freq|
            answer[i] += freq * value
        end
        
        i += 1
    end

    answer
end
```
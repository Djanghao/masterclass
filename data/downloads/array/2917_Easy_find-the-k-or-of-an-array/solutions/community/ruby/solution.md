# Simple Solution, a bit labored.

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-k-or-of-an-array/solutions/5301927/](https://leetcode.com/problems/find-the-k-or-of-an-array/solutions/5301927/)

---


# Code
```
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def find_k_or(nums, k)
    # Sort in reverse.
    nums.sort!{|a,b| b<=>a}
    i = 0
    # Create our bits array based on the largest num so we have enough slots
    # in our array.
    bits = Array.new(nums[0].to_s(2).size) {0}
    # Traverse nums building our array to figure out which
    # slots will have a 1 or 0.
    while i < nums.size
        # When we convert to s we reverse here as its easier
        # to build our array of vals. We reverse again later.
        nums[i].to_s(2).reverse.each_char.with_index do |char, j|
            if char == "1"
                bits[j] += 1
            end

        end
        i += 1
    end
    
    # We reverse our bits, collect 1 or 0 based on if x >= k
    # join to build our num as a string and then convert back to int.
    bits.reverse.collect{|x| x >= k ? "1" : "0"}.join.to_i(2)
end
```
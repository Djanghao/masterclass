# Ruby code Polynomial O(N-cubed) time O(1) Space

**Author:** 2018hsridhar
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/solutions/5857903/](https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/solutions/5857903/)

---

# Intuition and Approach
See description

# Complexity
- Time complexity:
O(pow(N,3)) Time

- Space complexity:
 O(1) Space Iterative Approach

# Code
```ruby []
# @param {Integer[]} nums
# @return {Integer}
def minimum_sum(nums)
    # Is Ruby OOP?
    # how many PLs represent infinity as a float ( Ruby does )?
    # This PL reminds me well of BASIC
    globalMin = Float::INFINITY
    foundTriplet = false
    n = nums.length() - 1
    for i in 0..n do
        for j in (i+1)..n do
            for k in (j+1)..n do
                elOne = nums[i]
                elTwo = nums[j]
                elThree = nums[k]
                # auto add new line end of message
                # print : no desire for new line behavior
                # vals = [elOne,elTwo,elThree]
                # puts "elOne = ${nums[i]}"
                # puts "elTwo = ${nums[j]}"
                # puts "elThree = ${nums[k]}"
                # puts vals
                if elOne < elTwo && elThree < elTwo 
                    tripletSum = elOne + elTwo + elThree
                    foundTriplet = true
                    globalMin = (globalMin < tripletSum) ? globalMin : tripletSum
                    # enum = [globalMin,tripletSum]
                    # globalMin = enum.min(1) { |a, b| a<=>b }
                end
            end
        end
    end
    retVal = (foundTriplet) ? globalMin : -1
    return retVal
end
```
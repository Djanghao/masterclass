# Brute Completion Challenge #4 (no analysis)

**Author:** ifiht
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-alternating-subarrays/solutions/5875013/](https://leetcode.com/problems/count-alternating-subarrays/solutions/5875013/)

---

# Code
```ruby []
# @param {Integer[]} nums
# @return {Integer}
def count_alternating_subarrays(nums)
    # every length 1 subarray is alternating:
    l = nums.length
    # all length = 1 subarrays are valid
    altsubs = l
    # start with a length = 2 subarray
    ic = 1
    is = 0
    # there is no current longest valid subarray
    curr_longest_sub = []
    # iterate thru all possible LONGEST arrays, we can compute how many
    # subarrays each conatains with a simple equation
    while ic < l
        # since we jump bad subarrays, we only ever need to check
        # the last two values
        if nums[ic] != nums[ic - 1]
            curr_longest_sub = nums[is..ic]
            ic += 1
            #puts "replacing subarray #{subarr.inspect}"
        else
            # jump over the bad subarray
            is = ic
            ic += 1
            len = curr_longest_sub.length
            # the number of valid length == 2 subarrays in any array of length
            # >= 2 is given by the equation below:
            altsubs += (((len - 1) * len)/2)
            curr_longest_sub = []
        end
    end
    # check if there was still a valid sub when the
    # while loop reached the end
    if not curr_longest_sub.empty?
        len = curr_longest_sub.length
        remainder = (((len - 1) * len)/2)
        altsubs += remainder
    end
    return altsubs
end
```
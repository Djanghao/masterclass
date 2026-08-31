# Ruby Sliding Window.

**Author:** user9697N
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-size-subarray-sum/solutions/658864/](https://leetcode.com/problems/minimum-size-subarray-sum/solutions/658864/)

---

##### Leetcode: 209. Minimum Size Subarray Sum.

Sliding window solution. There are two pointers left  `i` left one, `j` right one.  First put `i` and `j` on a zero index. And set `sum` equal to zero index element. If `sum` is  less than `s` move `j` right and increase `sum`. If `sum` equal or greater to `s` , calculate length and `min`, start to move left pointer and decrease the `sum`.  If `i` and `j` on same index  and `sum` is big enough just return 1 because there could not be smaller length. Corner cases are empty array, and if there is no such length.  Loops works until `j` is inside the array bounds.

Ruby code: 
```Ruby
# Leetcode: 209. Minimum Size Subarray Sum.
# https://leetcode.com/problems/minimum-size-subarray-sum/
# Runtime: 28 ms, faster than 100.00% of Ruby online submissions for Minimum Size Subarray Sum.
# Memory Usage: 9.8 MB, less than 100.00% of Ruby online submissions for Minimum Size Subarray Sum.
# @param {Integer} s
# @param {Integer[]} nums
# @return {Integer}
def min_sub_array_len(s, nums)
    return 0 if nums.empty?
    min = nil
    i,j = 0, 0
    sum = nums[i]
    while j < nums.size
        if(sum < s)
            j += 1
            sum += nums[j] if j < nums.size
            next
        end
        if(i==j)
            return 1
        end
        length = j-i + 1
        min = length if min.nil?
        min = length if min > length
        i += 1
        sum -= nums[i-1]
    end
    min ? min : 0
end
```
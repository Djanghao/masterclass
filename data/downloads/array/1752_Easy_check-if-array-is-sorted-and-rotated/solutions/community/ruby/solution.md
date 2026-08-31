# [Ruby] Easy Explanation

**Author:** yushitoh
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/solutions/1053595/](https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/solutions/1053595/)

---

```
# @param {Integer[]} nums
# @return {Boolean}
def check(nums)
    sorted_nums = nums.sort
    length = sorted_nums.length-1
	# First getting the sorted nums.
	# Then the while loop rotates the sorted nums to see if any one of the rotation matches the nums
	# If matches returns TRUE else FALSE at the end of the while loop
    while length >= 0
        return true if sorted_nums == nums       
        sorted_nums = [sorted_nums[1...sorted_nums.length],sorted_nums[0]].flatten
        length -= 1
    end
    return false
end
```
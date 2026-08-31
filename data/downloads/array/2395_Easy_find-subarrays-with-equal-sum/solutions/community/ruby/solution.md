# Ruby one-liner

**Author:** rmuntani
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-subarrays-with-equal-sum/solutions/5900607/](https://leetcode.com/problems/find-subarrays-with-equal-sum/solutions/5900607/)

---

# Code
```ruby []
# @param {Integer[]} nums
# @return {Boolean}
def find_subarrays(nums)
   nums.drop(1).zip(nums).map(&:sum).tally.any? { |_, v| v >= 2 }
end
```
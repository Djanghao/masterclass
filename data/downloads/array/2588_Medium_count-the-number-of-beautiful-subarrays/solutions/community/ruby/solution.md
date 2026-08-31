# Ruby O(N)

**Author:** FNkWJgsm3QruaF
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-beautiful-subarrays/solutions/3942711/](https://leetcode.com/problems/count-the-number-of-beautiful-subarrays/solutions/3942711/)

---

```ruby
# @param {Integer[]} nums
# @return {Integer}
def beautiful_subarrays(nums)
  counter = Hash.new(0)
  counter[0] = 1
  nums.inject([0, 0]) { | (res, prefix_xor), num |
    prefix_xor = prefix_xor ^ num
    res += counter[prefix_xor]
    counter[prefix_xor] += 1
    [res, prefix_xor]
  }[0]
end
```
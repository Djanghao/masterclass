# Ruby O(n) - prefix

**Author:** hoangphanbk10
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-prefix-divisible-by-5/solutions/2304274/](https://leetcode.com/problems/binary-prefix-divisible-by-5/solutions/2304274/)

---

```
# @param {Integer[]} nums
# @return {Boolean[]}
def prefixes_div_by5(nums)
  prefix = 0
  
  nums.map do |num|
    prefix = prefix * 2 + num
    prefix % 5 == 0
  end
end


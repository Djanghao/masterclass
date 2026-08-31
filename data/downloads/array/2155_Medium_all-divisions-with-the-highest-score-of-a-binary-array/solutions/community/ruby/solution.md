# Ruby Solution - Simple and Easy

**Author:** aks84
**Votes:** 1
**Link:** [https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/solutions/1742566/](https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/solutions/1742566/)

---

```
# @param {Integer[]} nums
# @return {Integer[]}
def max_score_indices(nums)
    nl = []
    memo = {}
    for i in (0..nums.count)
        memo[i] = [nl.find_all{|ze| ze == 0 }.count, nums.find_all{|one| one == 1}.count].sum
        nl<<nums.shift
    end
    ans = []
    memo.each { |k, v| ans<<k if v == memo.values.max }
    ans
end
```
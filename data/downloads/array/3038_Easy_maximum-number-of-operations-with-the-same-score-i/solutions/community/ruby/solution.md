# Simple Solution, O(n), O(1)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/solutions/5295492/](https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/solutions/5295492/)

---


# Code
```
# @param {Integer[]} nums
# @return {Integer}
def max_operations(nums)
    answer = 1
    score = nums[0..1].sum
    perm_score = score
    nums = nums[2..-1]
    while perm_score == score and nums.size > 1
        score = nums[0..1].sum
        if score == perm_score
            answer += 1
        end
        nums = nums[2..-1]
    end

    answer
end
```
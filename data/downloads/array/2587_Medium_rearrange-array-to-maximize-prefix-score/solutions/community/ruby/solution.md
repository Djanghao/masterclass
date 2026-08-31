# Prefix sum, easier than a Prefix sum easy problem...... O(n log n) time, O(1) space

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/solutions/4190787/](https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/solutions/4190787/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n log n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
# @param {Integer[]} nums
# @return {Integer}
def max_score(nums)
    nums.sort!{|a,b| b<=>a}
    count = 0
    total = 0
    i = 0
    while i < nums.size
        total += nums[i]
        if total > 0
            count += 1
        end
        i += 1
    end

    count
end
```
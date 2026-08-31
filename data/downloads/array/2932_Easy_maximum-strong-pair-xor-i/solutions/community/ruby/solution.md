# Simple Solution, O(n^2), O(1)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-strong-pair-xor-i/solutions/5297787/](https://leetcode.com/problems/maximum-strong-pair-xor-i/solutions/5297787/)

---


# Code
```
# @param {Integer[]} nums
# @return {Integer}
def maximum_strong_pair_xor(nums)
    strong_pair = 0
    i = 0
    while i < nums.size
        a = nums[i]
        j = i + 1
        while j < nums.size
            b = nums[j]
            # Skip when a == b as xor of same num gives us 0
            if b != a
                if (a - b).abs <= [a, b].min
                    xor = a ^ b
                    strong_pair = [strong_pair, xor].max
                end
            end
            j += 1
        end
        i += 1
    end
    strong_pair
end
```
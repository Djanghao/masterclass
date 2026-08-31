# Easy Ruby Solution 100% Comments

**Author:** bindles
**Votes:** 0
**Link:** [https://leetcode.com/problems/last-visited-integers/solutions/5575315/](https://leetcode.com/problems/last-visited-integers/solutions/5575315/)

---

# Complexity
- Time complexity: O(N)

# Code
```
# @param {Integer[]} nums
# @return {Integer[]}
def last_visited_integers(nums)
    ans = []
    seen = []
    k = 0
    
    nums.each do |num|
        if num > 0
            seen.unshift(num)  # Prepend the positive integer to seen
            k = 0              # Reset k since this breaks the consecutive -1 sequence
        elsif num == -1
            k += 1             # Increase k for each consecutive -1
            if k <= seen.size
                ans << seen[k - 1]  # Append the k-th last seen integer
            else
                ans << -1           # Not enough elements in seen, append -1
            end
        end
    end
    
    ans
end

```
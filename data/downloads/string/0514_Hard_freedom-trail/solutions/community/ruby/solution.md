# Ruby solution.

**Author:** neelarunabh
**Votes:** 0
**Link:** [https://leetcode.com/problems/freedom-trail/solutions/5081565/](https://leetcode.com/problems/freedom-trail/solutions/5081565/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n log(n))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
def solve(i, j, ring, key, dp)
    if j >= key.length
        return 0
    end
    if dp[i][j] != -1
        return dp[i][j]
    else
        minSteps = Float::INFINITY
        target = key[j]
            (0...ring.length).each do |k|
                if ring[k] == target
                    clockwiseDist = (i - k).abs
                    anticlockwiseDist = ring.length - clockwiseDist
                    steps = [clockwiseDist, anticlockwiseDist].min
                    steps += 1  # pressing the center button
                    steps += solve(k, j + 1, ring, key, dp)
                    minSteps = [minSteps, steps].min
                end
            end
        dp[i][j] = minSteps
        return minSteps
    end
end

def find_rotate_steps(ring, key)
    m = ring.length
    n = key.length
    dp = Array.new(m) { Array.new(n, -1) }
    return solve(0, 0, ring, key, dp)
end
```
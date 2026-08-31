# Floyd Warshall

**Author:** caovanbi235
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-to-convert-string-i/solutions/5542979/](https://leetcode.com/problems/minimum-cost-to-convert-string-i/solutions/5542979/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {String} source
# @param {String} target
# @param {Character[]} original
# @param {Character[]} changed
# @param {Integer[]} cost
# @return {Integer}
def minimum_cost(source, target, original, changed, cost)
  n = 26
  dp = Array.new(n) { Array.new(n, Float::INFINITY) }
  n.times { |i| dp[i][i] = 0 }

  m = original.size
  m.times do |i|
    a = alphabet_to_index(original[i])
    b = alphabet_to_index(changed[i])
    dp[a][b] = [dp[a][b], cost[i]].min
  end

  n.times do |k|
    n.times do |i|
      n.times do |j|
        dp[i][j] = [dp[i][j], dp[i][k] + dp[k][j]].min
      end
    end
  end

  source.chars.zip(target.chars).sum do |s, t|
    a = alphabet_to_index(s)
    b = alphabet_to_index(t)
    return -1 if dp[a][b] == Float::INFINITY
    
    dp[a][b]
  end
end

def alphabet_to_index(c)
  c.ord - 97
end
```
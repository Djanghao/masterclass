# Ruby using DFS

**Author:** hydras15
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/solutions/5949360/](https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/solutions/5949360/)

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
```ruby []
# @param {String} s
# @return {Integer}
def max_unique_split(s)
  @max = 0
  dfs(s, 0, Set.new)
  @max
end

def dfs(s, idx, set)
  return if idx == s.length
  (idx...s.length).each do |i|
    substring = s[idx..i]
    if !set.include?(substring)
      set.add(substring)
      @max = [set.size, @max].max
      dfs(s, i + 1, set)
      set.delete(substring)
    end
  end
end
```
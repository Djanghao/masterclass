# Beats 100% Ruby Solution in Time and Space | Ruby solution using Backtracking

**Author:** ksodha93
**Votes:** 0
**Link:** [https://leetcode.com/problems/beautiful-arrangement/solutions/4305737/](https://leetcode.com/problems/beautiful-arrangement/solutions/4305737/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(k) -> k = number of valid permutations

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n) ->  n = size of visited array

# Code
```
# @param {Integer} n
# @return {Integer}
def count_arrangement(n)
    @count = 0
    @visited = Array.new(n + 1, false)
    dfs(n, 1)
    @count
end

def dfs(n, pos)
    if pos > n
        @count += 1
    else
        (1..n).each do |i|
            if !@visited[i] && (pos % i == 0 || i % pos == 0)
                @visited[i] = true
                dfs(n, pos + 1)
                @visited[i] = false
            end
        end
    end
end
```
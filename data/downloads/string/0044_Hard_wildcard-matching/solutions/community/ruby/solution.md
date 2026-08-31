# Ruby, DFS

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/wildcard-matching/solutions/4898249/](https://leetcode.com/problems/wildcard-matching/solutions/4898249/)

---

# Code
```
def is_match(s, p)
  cache = {}

  dfs = ->(i, j) do
    return cache[[i, j]] if cache.include?([i, j])

    return true if i >= s.length && j >= p.length
    return false if j >= p.length

    cache[[i, j]] = if (s[i] == p[j] || (i < s.length && p[j] == '?'))
                      dfs.call(i + 1, j + 1)
                    elsif p[j] == '*'
                      (i != s.length && dfs.call(i + 1, j)) || dfs.call(i, j + 1)
                    end

    cache[[i, j]] || false
  end

  dfs.call(0, 0)
end
```
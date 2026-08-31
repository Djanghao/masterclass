# Ruby, DFS

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-make-two-strings-equal/solutions/4806523/](https://leetcode.com/problems/apply-operations-to-make-two-strings-equal/solutions/4806523/)

---

# Code
```
def min_operations(s1, s2, x)
  differences = (0...s1.length).select { |i| s1[i] != s2[i] }

  return -1 if differences.length.odd?

  cache = {}
  dfs = ->(i) do
    return cache[i] if cache.include?(i)
    return x / 2.0 if i == 0
    return 0 if i == -1

    cache[i] = [
      dfs.call(i - 1) + x / 2.0,
      dfs.call(i - 2) + differences[i] - differences[i - 1]
    ].min
  end

  dfs.call(differences.length - 1).to_i
end
```
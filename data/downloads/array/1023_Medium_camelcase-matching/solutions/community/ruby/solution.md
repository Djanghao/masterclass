# Ruby, Two Pointers

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/camelcase-matching/solutions/5158619/](https://leetcode.com/problems/camelcase-matching/solutions/5158619/)

---

# Code
```
def camel_match(queries, pattern)
  camel_match = ->(query) do
    i, j = 0, 0
    while i < query.length
      if query[i] == pattern[j]
        i += 1
        j += 1
      elsif query[i].scan(/[a-z]/).any?
        i += 1
      else
        break
      end
    end
    i == query.length && j == pattern.length
  end

  queries.map { |query| camel_match.call(query) }    
end
```
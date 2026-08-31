# one line Ruby

**Author:** nullptr0x00
**Votes:** 3
**Link:** [https://leetcode.com/problems/search-a-2d-matrix/solutions/234141/](https://leetcode.com/problems/search-a-2d-matrix/solutions/234141/)

---

```ruby
def search_matrix(matrix, target)
  !matrix.bsearch { |sub| !sub[-1].nil? && target <= sub[-1] }&.bsearch { |x| target <=> x }.nil?
end
```
mind those edge cases:
- []
- [[]]
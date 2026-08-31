# Concise Go Disjoint Set solution

**Author:** go-petr
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-string-with-swaps/solutions/3062811/](https://leetcode.com/problems/smallest-string-with-swaps/solutions/3062811/)

---



# Code
```
func smallestStringWithSwaps(s string, pairs [][]int) string {
  
  roots := make([]int, len(s))
  for i := range roots {
    roots[i] = i
  }
  
  var find func(x int) int
  find = func(x int) int {
    if x == roots[x] {
      return x
    }
    roots[x] = find(roots[x])
    return roots[x]
  }
  
  union := func(x, y int) {
    roots[find(x)] = find(y)
  }
  
  for _, pair := range pairs {
    union(pair[0], pair[1])
  }
  
  m := make(map[int][]byte)
  for i := range s {
    m[find(i)] = append(m[find(i)], s[i])
  }
  
  for _, v := range m {
    sort.Slice(v, func(i, j int) bool {
      return v[i] < v[j]
    })
  }
  
  sb := strings.Builder{}
  for i := range s {
    v := m[find(i)]
    sb.WriteByte(v[0])
    m[find(i)] = v[1:]
  }
  
  return sb.String()
}
```
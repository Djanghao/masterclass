# Ruby Graph solution - Very easy to understand

**Author:** divyad25
**Votes:** 11
**Link:** [https://leetcode.com/problems/find-the-town-judge/solutions/397707/](https://leetcode.com/problems/find-the-town-judge/solutions/397707/)

---

```
  degrees = Array.new(n+1, 0) # In degree - Out degree
  trust.each { |a,b|
    degrees[a] -= 1
    degrees[b] += 1
  }
  p degrees
  (1..n).each { |i| return i if degrees[i] == n-1 } # n-1 people should trust town judge
  -1
end
```
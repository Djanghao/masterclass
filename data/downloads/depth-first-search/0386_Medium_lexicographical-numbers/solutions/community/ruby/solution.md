# Ruby One Line

**Author:** piton4eg
**Votes:** 2
**Link:** [https://leetcode.com/problems/lexicographical-numbers/solutions/287984/](https://leetcode.com/problems/lexicographical-numbers/solutions/287984/)

---

```
def lexical_order(n)
    Array.new(n) { |i| (i+1).to_s }.sort.map(&:to_i)
end
```
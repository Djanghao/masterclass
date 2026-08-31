# Ruby: petition to demote to easy

**Author:** lacrosse
**Votes:** 2
**Link:** [https://leetcode.com/problems/put-marbles-in-bags/solutions/3735299/](https://leetcode.com/problems/put-marbles-in-bags/solutions/3735299/)

---

# Code

```ruby
def put_marbles(weights, k)
  a = weights.each_cons(2).map(&:sum).sort!
  a.last(k - 1).sum - a.first(k - 1).sum
end
```

# Time complexity

$$\\mathcal{O}(n \\log n)$$

# Space complexity

$$\\mathcal{O}(n)$$
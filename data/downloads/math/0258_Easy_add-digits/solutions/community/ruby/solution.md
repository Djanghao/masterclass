# Ruby: does it get any simpler than this?

**Author:** lacrosse
**Votes:** 4
**Link:** [https://leetcode.com/problems/add-digits/solutions/3455474/](https://leetcode.com/problems/add-digits/solutions/3455474/)

---

# Code

```ruby
def add_digits(n) = n == 0 ? 0 : (n - 1) % 9 + 1
```

# Time complexity

$$\\mathcal{O}(1)$$

# Space complexity

$$\\mathcal{O}(1)$$
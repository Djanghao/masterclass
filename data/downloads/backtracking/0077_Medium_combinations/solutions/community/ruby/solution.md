# Ruby || 1-liner fastest ATM

**Author:** alecn2002
**Votes:** 2
**Link:** [https://leetcode.com/problems/combinations/solutions/3846432/](https://leetcode.com/problems/combinations/solutions/3846432/)

---


# Code
```ruby
def combine(n, k)
    (1..n).to_a.combination(k).to_a
end
```
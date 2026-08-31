# Ruby: math

**Author:** lacrosse
**Votes:** 4
**Link:** [https://leetcode.com/problems/bulb-switcher/solutions/3459108/](https://leetcode.com/problems/bulb-switcher/solutions/3459108/)

---

# Code

```ruby
def bulb_switch(n) = Integer.sqrt(n)
```

# Explanation

Each bulb is toggled whenever the number is one of the divisors of the bulb's number.

For a bulb to be on, it has to be toggled an odd number of times.

It's easy to see that numbers $$m$$ generally have an even number of divisors $$d_i$$ because they come in pairs: $$\\{d_i, m / d_i\\}$$; however, among such divisor pairs in square numbers we have exactly one that consists of the root of the square repeated: $$\\{\\sqrt{m}; \\sqrt{m}\\}$$.

The bulbs assigned to square numbers are exactly those that will stay on. The number of square numbers between $$[1, n]$$ is precisely the integer square root of $$n$$, hence the solution.

# Complexity

$$\\mathcal{O}(1)$$
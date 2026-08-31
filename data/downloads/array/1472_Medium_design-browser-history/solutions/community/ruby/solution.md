# Ruby || Fastest

**Author:** alecn2002
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-browser-history/solutions/3311198/](https://leetcode.com/problems/design-browser-history/solutions/3311198/)

---

# Intuition
Array + position

# Approach
Same

# Complexity
- Time complexity:
$$O(1)$$ - each request

- Space complexity:
$$O(n)$$

# Code
```ruby
class BrowserHistory
    MAX_CALLS = 5000

    attr_reader :hist, :pos, :len

    def initialize(homepage)
        @hist, @len = Array.new(MAX_CALLS), 1
        @hist[@pos = 0] = homepage
    end

    def visit(url)
        @hist[@pos += 1] = url
        @len = pos + 1
    end

    def back(steps)
        @hist[@pos = [0, pos - steps].max]
    end

    def forward(steps)
        @hist[@pos = [pos + steps, len - 1].min]
    end
end
```

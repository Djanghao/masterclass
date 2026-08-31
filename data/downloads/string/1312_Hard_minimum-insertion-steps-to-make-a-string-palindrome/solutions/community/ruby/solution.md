# Ruby || DP

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/solutions/3443337/](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/solutions/3443337/)

---

# Intuition
*If* s[i] == s[j] *then* no change *else* 1 change 
\\+ how many changes required for min of s[i+1..j], s[i..j-1] substrings

# Approach
Upside down: no changes required for substr size 1, then step to size 2 etc.

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n)$$

# Code
```ruby
class Solver
    attr_reader :s, :sz

    def initialize(s)
        @s, @sz = s, s.size
    end

    def solve
        (sz - 2).downto(0).inject(Array.new(sz, 0)) {|dp, i|
            (i+1...sz).inject(0) {|tmp, j|
                (tmp, dp[j] = dp[j], ((s[i] == s[j]) ? tmp : 1 + dp[j-1..j].min)).first
            }
            dp
        }.last
    end
end

def min_insertions(s, l = 0, r = s.size-1)
    Solver.new(s).solve
end
```
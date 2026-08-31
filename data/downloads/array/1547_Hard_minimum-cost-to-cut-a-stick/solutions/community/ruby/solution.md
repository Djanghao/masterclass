# Ruby || DP

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-to-cut-a-stick/solutions/3571409/](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/solutions/3571409/)

---

# Intuition
DP

# Approach
DP

# Code
```ruby
class Numeric
    def min(v)
        v < self ? v : self
    end
end

class Array
    def Array.newsqr(sz, dflt = nil)
        Array.new(sz) {|_| Array.new(sz, dflt) }
    end
end

def min_cost(n, cuts)
    cs = cuts.sort!.size
    cs.times.each_with_object(Array.newsqr(cs + 2, 0)) {|l0, dp|
        l = l0 + 2
        (cs - l0).times {|i|
            j = i + l
            dp[i][j] = dp[i][i+1] + dp[i+1][j]
            (i+2...j).each {|k|
                dp[i][j] = dp[i][j].min(dp[i][k] + dp[k][j])
            }
            dp[i][j] -= cuts[i - 1] if i > 0
            dp[i][j] += (j == cs + 1) ? n : cuts[j - 1]
        }
    }.first.last
end

```
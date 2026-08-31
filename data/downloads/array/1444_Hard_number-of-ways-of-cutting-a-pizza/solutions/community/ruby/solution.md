# Ruby || DP

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/solutions/3362485/](https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/solutions/3362485/)

---

# Intuition
Dynamic Programming

# Approach
Dynamic Programming

# Code
```ruby
MOD = 10 ** 9 + 7

class Array
    def Array.new2d(d1, d2, dflt = nil)
        Array.new(d1) {|i| Array.new(d2, dflt) }
    end

    def Array.new3d(d1, d2, d3, dflt = nil)
        Array.new(d1) {|i| Array.new2d(d2, d3, dflt) }
    end
end

class Solver
    CREM = 'A'.ord - 1

    attr_reader :pizza, :k, :m, :n, :dp, :presum

    def initialize(pizza, k)
        @pizza, @k, @m, @n = pizza, k, pizza.size, pizza.first.size
        @dp = Array.new3d(k, m, n)
        @presum = (m-1).downto(0).inject(Array.new2d(m+1, n+1, 0)) {|res, r|
            (n-1).downto(0) {|c|
                res[r][c] = res[r][c+1] + res[r+1][c] - res[r+1][c+1] + ((pizza[r][c] == 'A') ? 1 : 0)

            }
            res
        }
    end

    def solve(k = @k - 1, r = 0, c = 0)
        return 0 if presum[r][c].zero?
        return 1 unless k.positive?
        return dp[k][r][c] unless dp[k][r][c].nil?
        prc = presum[r][c]
        l = lambda {|res, nr, nc| (res + ((prc > presum[nr][nc]) ? solve(k - 1, nr, nc) : 0)) % MOD }
        @dp[k][r][c] ||= (c+1...n).inject((r+1...m).inject(0) {|res, nr| 
                    l.call(res, nr, c) 
                }) {|res, nc| l.call(res, r, nc) }
    end
end

def ways(pizza, k)
    Solver.new(pizza, k).solve % MOD
end

```
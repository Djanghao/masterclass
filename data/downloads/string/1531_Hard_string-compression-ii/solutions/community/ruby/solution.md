# Ruby || DP || 835ms

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/string-compression-ii/solutions/4470042/](https://leetcode.com/problems/string-compression-ii/solutions/4470042/)

---


# Code
```ruby
class NilClass
    def min(v) = v
end

class Integer
    def elen
        case self
            when 0 then 0
            when 1 then 1
            when (2..9) then 2
            when (10..99) then 3
            else 4
        end
    end

    def min(v) = (self > v ? v : self)
end

class String
    def run_enc_opt(k)
        t = chars.tally
        return (size - k).elen if t.size == 1
        dp = Array.new(size) { |i| Array.new(k + 1) } << Array.new(k + 1, 0)
        chars.each_with_index.reverse_each {|c, i|
            runner = lambda {|jj|
                max_del, cnt = jj, 0
                (i...size).each {|iend|
                    if self[iend] == c then
                        cnt += 1
                        dp[i][jj] = dp[i][jj].min(cnt.elen + dp[iend+1][max_del])
                    else
                        break if (max_del -= 1).negative?
                    end
                }
            }
            runner.call(0)
            (1..k).each {|j|
                dp[i][j] = dp[i+1][j-1]
                runner.call(j)
            }
        }
        dp.first.last
    end
end

def get_length_of_optimal_compression(s, k)
    s.run_enc_opt(k)
end
```
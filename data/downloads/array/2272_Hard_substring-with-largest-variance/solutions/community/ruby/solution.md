# Ruby

**Author:** alecn2002
**Votes:** 2
**Link:** [https://leetcode.com/problems/substring-with-largest-variance/solutions/3741079/](https://leetcode.com/problems/substring-with-largest-variance/solutions/3741079/)

---


# Code
```ruby
require 'set'

class NilClass
    def max(v) = v
end

class Numeric
    def max(v) = self < v ? v : self
end

class String
    def aord = ord - 'a'.ord
end

class Array
    def Array.new2(d1, d2, dflt)
        Array.new(d1) {|_| Array.new(d2, dflt) }
    end
end

NCHARS = 'z'.aord + 1

def largest_variance(s)
    o, d, db = 0, *[0, -s.size].collect {|v| Array.new2(NCHARS, NCHARS, v) }
    s.chars.each {|c|
        ch = c.aord
        NCHARS.times {|k|
            next if k == ch
            d[ch][k] += 1
            db[ch][k] += 1
            db[k][ch] = (d[k][ch] -= 1)
            d[k][ch] = 0.max(d.dig(k, ch))
            o = o.max(db.dig(ch, k).max(db.dig(k, ch)))
        }
    }
    o
end
```
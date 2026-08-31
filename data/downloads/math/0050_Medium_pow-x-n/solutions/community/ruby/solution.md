# Ruby || NO Recursion, bit manipulation, 95% fast

**Author:** alecn2002
**Votes:** 2
**Link:** [https://leetcode.com/problems/powx-n/solutions/3808952/](https://leetcode.com/problems/powx-n/solutions/3808952/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Float} x
# @param {Integer} n
# @return {Float}

class Numeric
    def pow(n)
        return (n.negative? ? Float::NAN : 0.0) if self.abs < 0.0000001
        cur, sign, one = self, (n <=> 0), (self / self)
        return one if n.zero?
        n = n.abs
        ans = n.bit_length.times.inject(one) {|res, i| 
            res *= cur if n.odd?
            n >>= 1
            cur *= cur
            res
        }
        sign.positive? ? ans : one / ans
    end
end

def my_pow(x, n)
    x.pow(n)
end
```
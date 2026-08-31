# 327 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-make-palindrome-from-substring/solutions/3318275/](https://leetcode.com/problems/can-make-palindrome-from-substring/solutions/3318275/)

---

Matsumoto rejects `Integer#popcount` : https://bugs.ruby-lang.org/issues/8748#note-1
```ruby
class Integer

    @@m = 256.times.map { _1.to_s(2).count(?1) }

    def popcount
        r, x = 0, self
        while x > 0
            r += @@m[x & 255]
            x >>= 8
        end
        r
    end

end

def can_make_pali_queries s, q
    p = [0]
    s.each_byte do
        p.push p.last ^ (1 << _1 - 97)
    end
    q.map do | (l, r, k) |
        (p[l] ^ p[r + 1]).popcount >> 1 <= k
    end
end
```
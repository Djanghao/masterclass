# Trie

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/stream-of-characters/solutions/3232553/](https://leetcode.com/problems/stream-of-characters/solutions/3232553/)

---

```ruby
class StreamChecker

    def initialize w
        @a = []
        @t = {}
        w.each do
            c = [@t, false]
            _1.bytes.reverse_each do | x |
                c = (c.first()[x] ||= [{}, false])
            end
            c[1] = true
        end
    end

    def query l
        c = @t
        (@a << l.ord).reverse_each do
            return false unless v = c[_1]
            c, e = *v
            return true if e
        end
        false
    end

end
```
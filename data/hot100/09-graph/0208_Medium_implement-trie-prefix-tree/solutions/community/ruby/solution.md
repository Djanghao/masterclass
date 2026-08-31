# [Updated] 143 ms

**Author:** 0x81
**Votes:** 2
**Link:** [https://leetcode.com/problems/implement-trie-prefix-tree/solutions/3305778/](https://leetcode.com/problems/implement-trie-prefix-tree/solutions/3305778/)

---

Thanks to [@giner](https://leetcode.com/submissions/detail/916699965/):
```ruby
class Trie

    def initialize = (@t = {})

    def insert w
        t = @t
        w.each_byte { t = t[_1] ||= {} }
        t[:e] = true
    end

    def search(w) = starts_with(w) && !!@c[:e]

    def starts_with(p) =
        (@c = @t; p).each_byte.all? { @c = @c[_1] }

end
```
Previous:
```ruby
class Trie

    def initialize = (@t = [{}, false])

    def insert w
        t = @t
        w.bytes.each do
            t = (t.first()[_1] ||= [{}, false])
        end
        t[1] = true
    end

    def search(w) =
        starts_with(w) && @c.last

    def starts_with(p) =
        (@c = @t; p.bytes).all? { @c = @c.first()[_1] }

end
```
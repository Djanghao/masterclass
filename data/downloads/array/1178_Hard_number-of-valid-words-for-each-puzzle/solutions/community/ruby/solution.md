# 665 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/solutions/3235996/](https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/solutions/3235996/)

---

```ruby
def find_num_of_valid_words w, q
    h = Hash.new 0
    w.each do | w |
        k = 0
        w.bytes.each do
            k |= 1 << (_1 - 97)
        end
        h[k] += 1
    end
    q.map do | s |
        x = s.bytes
        k = [1 << (x.shift - 97)]
        until x.empty?
            d = 1 << (x.shift - 97)
            k.size.times do
                k << (k[_1] | d)
            end
        end
        k.sum { h[_1] }
    end
end
```
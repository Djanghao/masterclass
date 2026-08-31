# Ruby: concise

**Author:** giner
**Votes:** 0
**Link:** [https://leetcode.com/problems/1-bit-and-2-bit-characters/solutions/5798801/](https://leetcode.com/problems/1-bit-and-2-bit-characters/solutions/5798801/)

---

```ruby
def is_one_bit_character(bits)
    i = 0
    i += 1 + bits[i] while i < bits.size - 1
    i == bits.size - 1
end
```
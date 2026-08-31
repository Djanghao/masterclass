# Ruby | Stack solution

**Author:** piyushsawaria
**Votes:** 5
**Link:** [https://leetcode.com/problems/decode-string/solutions/1127720/](https://leetcode.com/problems/decode-string/solutions/1127720/)

---

```
def decode_string(s)
  stack = []
  s.each_char do |c|
    if c == ']'
      s1 = ''
      while stack.last != '['
        s1 = stack.pop + s1
      end
      stack.pop # remove '['
      n = ''
      while !stack.empty? && stack.last.match?(/[0-9]/) # eg. "100[leetcode]"
        n = stack.pop + n
      end
      stack.push(s1 * n.to_i)
    else
      stack.push(c)
    end
  end
  stack.join
end
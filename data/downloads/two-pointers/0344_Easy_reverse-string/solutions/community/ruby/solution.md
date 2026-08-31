# Elegant Ruby iterative solution, (two pointers). 2 lines of code.

**Author:** konovalov-nk
**Votes:** 7
**Link:** [https://leetcode.com/problems/reverse-string/solutions/262269/](https://leetcode.com/problems/reverse-string/solutions/262269/)

---

That's what I call "Ruby-way" ;-)

```ruby
def reverse_string(s)
  return nil if s.empty?

  (s.length / 2).times { |i| s[i], s[~i] = s[~i], s[i] }
end
```

Old one:
```ruby
def reverse_string(s)
    first, last = -1, s.length
    s[first], s[last] = s[last], s[first] until (first += 1) > (last -= 1)
end
```
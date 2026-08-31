# Ruby - Regex one-liner

**Author:** shhavel
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-different-integers-in-a-string/solutions/1130675/](https://leetcode.com/problems/number-of-different-integers-in-a-string/solutions/1130675/)

---

```ruby
def num_different_integers(word)
  word.scan(/\\d+/).map(&:to_i).uniq.size
end
```

Suggested by @DNNX `uniq(&:to_i)`:

```ruby
def num_different_integers(word)
  word.scan(/\\d+/).uniq(&:to_i).size
end
```
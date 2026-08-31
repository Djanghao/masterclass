# Ruby - Regular expression

**Author:** shhavel
**Votes:** 1
**Link:** [https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/solutions/1130664/](https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/solutions/1130664/)

---

Use `gsub` with block to replace all substrings wrapped in parentheses.

```ruby
def evaluate(s, knowledge)
  knowledge = knowledge.to_h
  knowledge.default = '?'
  s.gsub(/\\([^)]+\\)/) { |k| knowledge[k[1..-2]] }
end
```
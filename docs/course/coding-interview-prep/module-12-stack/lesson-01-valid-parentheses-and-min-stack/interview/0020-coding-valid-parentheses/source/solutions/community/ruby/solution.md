# Simple Ruby solution

**Author:** t_hara
**Votes:** 41
**Link:** [https://leetcode.com/problems/valid-parentheses/solutions/491448/](https://leetcode.com/problems/valid-parentheses/solutions/491448/)

---

> Runtime: 24 ms, faster than 99.57% of Ruby online submissions for Valid Parentheses.
> Memory Usage: 9.3 MB, less than 100.00% of Ruby online submissions for Valid Parentheses.

```ruby
# @param {String} s
# @return {Boolean}
def is_valid(s)
    return true if s.empty?
    
    stack = []
    s.each_char do |c|
        case c
        when '(', '{', '['
            stack.push(c)
        when ')'
            return false if stack.pop() != '('
        when '}'
            return false if stack.pop() != '{'
        when ']'
            return false if stack.pop() != '['
        end
    end
    return stack.empty?
end
```
# Ruby stack solution

**Author:** koujiokada
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-score-from-removing-substrings/solutions/5463618/](https://leetcode.com/problems/maximum-score-from-removing-substrings/solutions/5463618/)

---

```
def remove(s, removing)
  a, b = removing.chars
  stack = []
  
  s.each_char {|c|
    if !stack.empty? and c == b and stack[-1] == a
      stack.pop
    else
      stack << c    
    end
  }

  [stack.join, (s.size-stack.size)/2]
end

def maximum_gain(s, x, y)
  high_score_pattern, low_score_pattern = x > y ? ['ab', 'ba'] : ['ba', 'ab']
  low, high = [x, y].sort

  s, removed_size = remove(s, high_score_pattern)
  score = removed_size * high
  s, removed_size = remove(s, low_score_pattern)

  score + removed_size * low
end
```
# Ruby easy to understand

**Author:** bvogelzang
**Votes:** 1
**Link:** [https://leetcode.com/problems/keyboard-row/solutions/373143/](https://leetcode.com/problems/keyboard-row/solutions/373143/)

---

```
TOP_ROW = %w[q w e r t y u i o p].product([1]).to_h
MIDDLE_ROW = %w[a s d f g h j k l].product([2]).to_h
BOTTOM_ROW = %w[z x c v b n m].product([3]).to_h
CHAR_ROWS = TOP_ROW.merge(MIDDLE_ROW).merge(BOTTOM_ROW)

def find_words(words)  
  words.select { |word| one_row?(word) }
end

def one_row?(word)
  rows = word.chars.map { |c| CHAR_ROWS[c.downcase] }
  rows.min == rows.max
end
```
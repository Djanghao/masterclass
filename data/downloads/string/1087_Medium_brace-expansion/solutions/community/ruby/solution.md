# Ruby, DFS

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/brace-expansion/solutions/5501430/](https://leetcode.com/problems/brace-expansion/solutions/5501430/)

---

# Code
```
def expand(s)
  expansions = {}

  resolve_expansions = lambda do |s|
    capturing = false
    capture = []
    index = 0
    s.chars.each do |c|
      if c == '{'
        capturing = true
      elsif c == '}'
        expansions[index] = capture.sort
        capture = []
        capturing = false
        index += 1
      elsif capturing
        capture << c if c != ','
      else
        index += 1
      end
    end
  end

  results = []
  dfs = lambda do |i, word|
    if i == word.length
      results << word
      return
    end

    if word[i] == '_'
      expansions[i].each do |c|
        word[i] = c
        dfs.call(i + 1, word.dup)
      end
    else
      dfs.call(i + 1, word)
    end
  end

  resolve_expansions.call(s)
  dfs.call(0, s.gsub(/{([\\w,]+)}/, '_'))
  results
end
```
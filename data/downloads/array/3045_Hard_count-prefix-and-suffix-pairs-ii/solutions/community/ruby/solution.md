# Trie !!

**Author:** ifelsethenthat
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii/solutions/4745137/](https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii/solutions/4745137/)

---

# Code
```
# @param {String[]} words
# @return {Integer}

class Trie
  attr_accessor :children, :count
  
  def initialize
    @children = {}
    @count = 0
  end
end

def count_prefix_suffix_pairs(words)
  root = Trie.new
  result = 0

  words.each do |word|
    x = root
    n = word.length

    0.upto(n - 1) do |i|
      key = word[i] * 128 + word[-i - 1]
      x.children[key] ||= Trie.new
      x = x.children[key]
      result += x.count
    end
    x.count += 1
  end

  result
end

```
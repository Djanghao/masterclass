# [Ruby] Binary Search + Greedy, less mental burden

**Author:** Hegwin
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/solutions/3062701/](https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/solutions/3062701/)

---

# Intuition

Generally, this question is about Two Pointers; And the code is simple in Two Pointers way, but I found it's a bit burdensome in mind.

1. Sort dictionary by word length and alphabeta
2. Use a hash to record positions/indexes of letter in `s`
3. Loop word in dictionary to see if we can find every letter in word with smallest positions/indexes

# Complexity
Time complexity: $$O(max(DlogD, L, D * L * LogP))$$

D - Count of words in `dictionary`
L - Word length in `dictionary`
P - Occurrence of each letter in `s`
S - `s.length`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

Space complexity: $O(S)$

One hash to record positions of letter in `s`


# Code
```
# @param {String} s
# @param {String[]} dictionary
# @return {String}
def find_longest_word(s, dictionary)
  dictionary.sort_by! {|word| [-word.length, word] }

  positions = Hash.new {|h, k| h[k] = Array.new }

  s.split(//).each.with_index do |letter, index|
    positions[letter] << index
  end

  dictionary.each do |word|
    current = -1
    flag = true
    word.split(//) do |letter|
      position = positions[letter].bsearch {|x| x > current }
      if position
        current = position
      else
        flag = false
        break
      end
    end

    return word if flag
  end

  ""
end
```
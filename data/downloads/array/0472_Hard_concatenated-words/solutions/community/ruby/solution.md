# Ruby solution (T:484 ms Beats 100%, M:213.4 MB Beats 100%)

**Author:** ozovalihasan
**Votes:** 2
**Link:** [https://leetcode.com/problems/concatenated-words/solutions/3104930/](https://leetcode.com/problems/concatenated-words/solutions/3104930/)

---

# Approach
I have used DFS.

# Code
```ruby []
# @param {String[]} words
# @return {String[]}
def find_all_concatenated_words_in_a_dict(words)
  @words_hash = words.tally

  words.each_with_object([]) do |word, result|
    result << word  if check_word(word, 0)
  end
end

def check_word(word, step)
  return step >= 2 if word == ''

  1.upto(word.size) do |index|
    return true if @words_hash[word[0...index]] && check_word(word[index...], step + 1)
  end

  false
end
```
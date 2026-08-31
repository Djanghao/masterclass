# Ruby solution

**Author:** ozovalihasan
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-vowel-strings-in-ranges/solutions/4856059/](https://leetcode.com/problems/count-vowel-strings-in-ranges/solutions/4856059/)

---

# Code
```ruby []
VOWELS = Set["a", "e", "i", "o", "u"]

# @param {String[]} words
# @param {Integer[][]} queries
# @return {Integer[]}
def vowel_strings(words, queries)
  count = 0
  increased = []
  words = words.map.with_index do |word, index|
    start_and_end_with_vowel = VOWELS.include?(word[0]) && VOWELS.include?(word[-1])
    if start_and_end_with_vowel
      count += 1 
      increased[index] = true
    end

    count
  end

  queries.map do |start_index, end_index| 
    words[end_index] - words[start_index] + (increased[start_index] ? 1 : 0)
  end
end
```
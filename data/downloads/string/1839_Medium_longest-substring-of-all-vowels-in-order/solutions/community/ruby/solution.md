# Simple solution

**Author:** caovanbi235
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/solutions/6075382/](https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/solutions/6075382/)

---

# Code
```ruby []
# @param {String} word
# @return {Integer}
def longest_beautiful_substring(word)
  max_length = 0
  current_str = ''
  next_char = { 'a' => 'e', 'e' => 'i', 'i' => 'o', 'o' => 'u', 'u' => 'u' }

  word.each_char do |char|
    if current_str.empty? || char == current_str[-1] || char == next_char[current_str[-1]]
      current_str << char
    else
      current_str = char
    end
    max_length = [max_length, current_str.length].max if current_str[0] == 'a' && current_str[-1] == 'u' 
  end

  max_length
end
```
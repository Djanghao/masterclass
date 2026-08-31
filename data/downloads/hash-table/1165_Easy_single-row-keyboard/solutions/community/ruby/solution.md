# Super Simple Ruby Solution

**Author:** tomrendle
**Votes:** 0
**Link:** [https://leetcode.com/problems/single-row-keyboard/solutions/5907869/](https://leetcode.com/problems/single-row-keyboard/solutions/5907869/)

---


# Code
```ruby []
# @param {String} keyboard
# @param {String} word
# @return {Integer}
def calculate_time(keyboard, word)
    seconds = 0
    index = 0
    word.split('').each_with_index do |c,i|
        iOfboard = keyboard.index(c)
        seconds += (index - iOfboard).abs
        index = iOfboard
    end
    return seconds
end
```
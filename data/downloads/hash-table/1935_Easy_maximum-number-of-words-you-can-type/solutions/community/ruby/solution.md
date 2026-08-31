# Solution: Maximum number of words you can type

**Author:** alsheikhdev
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-words-you-can-type/solutions/5602409/](https://leetcode.com/problems/maximum-number-of-words-you-can-type/solutions/5602409/)

---

## Purpose

The method counts how many words in a given text can be typed without using any of the broken letters specified.

## Parameters

text (String): The input string containing multiple words.
broken_letters (String): A string containing letters that are broken and cannot be used.

## Steps

* Split the Text: text.split splits the input string into an array of individual words.
* Initialize Count: count is set to the total number of words in the text.
* Check Each Word:
    - Iterate over each word in the array.
    - For each word, check if any of its characters are in broken_letters.
    - If a word contains any broken letter, decrement the count.
* Return the Count: After checking all words, return the count of words that can be typed.

## Efficiency

#### Time Complexity: 

O(n * m), where n is the number of words and m is the average number of characters per word. Each word's characters are checked against the broken_letters.

#### Space Complexity: 

O(n) due to the storage of the split words.

# Code
```
# @param {String} text
# @param {String} broken_letters
# @return {Integer}
def can_be_typed_words(text, broken_letters)    
    text = text.split
    count = text.size

    text.each do |word|
        count-=1 if word.chars.any? {|chr| broken_letters.include?(chr)}
    end

    count
end
```
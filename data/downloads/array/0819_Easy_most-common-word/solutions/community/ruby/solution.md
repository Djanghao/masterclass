# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-common-word/solutions/5189799/](https://leetcode.com/problems/most-common-word/solutions/5189799/)

---


# Code
```
# @param {String} paragraph
# @param {String[]} banned
# @return {String}
def most_common_word(paragraph, banned)
    banned_hash = {}
    banned.each do |word|
        banned_hash[word] = true
    end

    freq_hash = Hash.new(0)
    paragraph.gsub!(/[^0-9a-z ]/i, ' ')
    paragraph.split(" ").each do |word|
        word = word.downcase
        if !banned_hash[word]
            freq_hash[word] += 1
        end
    end

    max = 0
    answer = ""
    freq_hash.each do |key, value|
        if value > max
            max = value
            answer = key
        end
    end

    answer
end
```
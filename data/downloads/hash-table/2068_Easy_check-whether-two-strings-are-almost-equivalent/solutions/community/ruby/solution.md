# Frequency Hash, O(n), O(n)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/solutions/5038698/](https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/solutions/5038698/)

---


# Code
```
# @param {String} word1
# @param {String} word2
# @return {Boolean}
def check_almost_equivalent(word1, word2)
    word1_freq = Hash.new(0)
    i = 0
    while i < word1.size
        word1_freq[word1[i]] += 1
        i += 1 
    end

    word2_freq = Hash.new(0)
    i = 0
    while i < word2.size
        word2_freq[word2[i]] += 1
        i += 1
    end
    

    word1_freq.each do |key, value|
        if !(word2_freq[key] and (word2_freq[key] - value).abs < 4)
            return false
        end
    end

    word2_freq.each do |key, value|
        if !(word1_freq[key] and (word1_freq[key] - value).abs < 4)
            return false
        end
    end

    true
end
```
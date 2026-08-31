# Ruby solution using 2 pointers

**Author:** ksodha93
**Votes:** 0
**Link:** [https://leetcode.com/problems/expressive-words/solutions/4281511/](https://leetcode.com/problems/expressive-words/solutions/4281511/)

---

# Code
```
# @param {String} s
# @param {String[]} words
# @return {Integer}
def expressive_words(s, words)
    count = 0
    words.each do |word|
        count += 1 if is_strechy(s, word)
    end
    count
end

def is_strechy(s, word)
    return false if s.length < word.length

    s_index = 0
    word_index = 0

    while s_index < s.length && word_index < word.length
        sc = s[s_index]
        wc = word[word_index]

        if sc == wc
            # find letter reptition count on s
            i = s_index
            while i < s.length && sc == s[i]
                i += 1
            end

            # find letter repition count on word
            j = word_index
            while j < word.length && wc == word[j]
                j += 1
            end

            s_count = i - s_index
            word_count = j - word_index

            return false if (s_count > word_count && s_count < 3) || (s_count < word_count)

            s_index = i
            # case: 'abcd' ['abc']
            word_index = j == word.length ? word.length - 1 : j

            # case: 'abccc' ['abcd']
            return false if s_index == s.length && j == word.length - 1
        else
            return false
        end
    end
    true
end

```
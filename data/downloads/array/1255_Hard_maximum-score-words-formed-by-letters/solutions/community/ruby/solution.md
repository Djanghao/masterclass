# Ruby solution beats 100% both run time and memory.

**Author:** neelarunabh
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-score-words-formed-by-letters/solutions/5203722/](https://leetcode.com/problems/maximum-score-words-formed-by-letters/solutions/5203722/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(2 ^ n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {String[]} words
# @param {Character[]} letters
# @param {Integer[]} score
# @return {Integer}
def max_score_words(words, letters, score)
    n = words.length
    res = [0]  # Using an array to capture the result by reference

    letters_count = Array.new(26, 0)
    letters.each do |letter|
        ind = letter.ord - 97
        letters_count[ind] += 1
    end

    words_scores = {}
    words.each do |word|
        s = 0
        word.each_char do |char|
            ind = char.ord - 97
            s += score[ind]
        end
        words_scores[word] = s
    end

    def recursion(cur_ind, cur_score, n, words, letters_count, words_scores, res)
        if cur_ind == n
            res[0] = [res[0], cur_score].max
            return
        end

        # Try to include the current word
        can_add_this_word = true
        word = words[cur_ind]
        word_count = Array.new(26, 0)
        word.each_char do |char|
            ind = char.ord - 97
            word_count[ind] += 1
            if word_count[ind] > letters_count[ind]
                can_add_this_word = false
                break
            end
        end

        if can_add_this_word
            # Deduct the letters used by this word
            (0..25).each do |ind|
                letters_count[ind] -= word_count[ind]
            end
            # Recurse with the current word included
            recursion(cur_ind + 1, cur_score + words_scores[word], n, words, letters_count, words_scores, res)
            # Restore the letters count
            (0..25).each do |ind|
                letters_count[ind] += word_count[ind]
            end
        end
        # Recurse without the current word
        recursion(cur_ind + 1, cur_score, n, words, letters_count, words_scores, res)
    end

    recursion(0, 0, n, words, letters_count, words_scores, res)
    return res[0]
end
```
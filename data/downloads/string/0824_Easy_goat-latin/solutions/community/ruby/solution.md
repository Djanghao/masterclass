# Beats 100% Ruby solutions

**Author:** user1805NI
**Votes:** 0
**Link:** [https://leetcode.com/problems/goat-latin/solutions/5063877/](https://leetcode.com/problems/goat-latin/solutions/5063877/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Algo:

    # words = break sentence by white spaces
    # iterate words with index i
    #     if str[0] in vowels
    #         append ma
    #     else
    #         append str[0] + ma    
    #     append "a"*(index+1)

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of this code is O(n), where n is the number of characters in the sentence string. This is because the code splits the sentence into words and then iterates over each word once, performing constant-time operations on each word.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(1) since we are using the original words array and modifying the words in place. So the space used does not scale with the size of the input sentence.

# Code
```
# @param {String} sentence
# @return {String}
def to_goat_latin(sentence)
    vowels = %w(a e i o u)
    words = sentence.split(' ')
    words = words.map.with_index do |word, index|
        if vowels.include?(word[0].downcase)
            word += "ma"
        else
            word = word[1..-1] + word[0] + "ma"
        end
        word + "a"*(index+1)
    end

    return words.join(" ")
end
```
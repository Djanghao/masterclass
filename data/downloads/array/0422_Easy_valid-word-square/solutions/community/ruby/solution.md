# Ruby one approach

**Author:** surferbv
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-word-square/solutions/3028377/](https://leetcode.com/problems/valid-word-square/solutions/3028377/)

---

```
=begin

    title:
        422. Valid Word Square

    links:
        https://leetcode.com/problems/valid-word-square/

    approach:
        matrix iteration approach

    time: O(nm)
        There are n number of string of length m. 

    space: O(1)

    note:
        word_num representing the number of row and column of the current word
        char_pos represents the index of the current character of the word_num
        iterating over word_num from 0 to words.length - 1. we check that 

        1. if the char_pos is bigger than column word
        2. if the word_num is bigger than row word
        3. if char at index don't match
        
        we return false otherwise true at the end. 

    til:

    results:
        Runtime 162 ms Beats 100% Memory 211.3 MB Beats 66.67%

=end
# @param {String[]} words
# @return {Boolean}
def valid_word_square(words)
    for word_num in (0..words.length - 1) do
        for char_pos in (0..words[word_num].length - 1) do
            return false if char_pos >= words.length || 
                word_num >= words[char_pos].length || 
                words[word_num][char_pos] != words[char_pos][word_num]
        end
    end

    return true
end
```
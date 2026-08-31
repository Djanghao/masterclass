# Ruby solution: progressively go through solution space by checking string overlap

**Author:** drwl
**Votes:** 0
**Link:** [https://leetcode.com/problems/guess-the-word/solutions/5014452/](https://leetcode.com/problems/guess-the-word/solutions/5014452/)

---

# Intuition
This was not a standard leetcode style question so nothing in my bag of tricks worked. I thought about trying to a logN approach by trying to answers at a time, but I got stuck. I also thought about treating it as a bitwise manipulation problem, but again nothing.

One insight that helps is that the answer is in the word list. So one way to approach the problem is to bruteforce + prune search space.

# Approach
<!-- Describe your approach to solving the problem. -->
Can treat `words` as a stack or queue, in Ruby an array handles both operations, but I did `#pop` because it does the back instead `#shift` which removes from the front.

The algorithm is:
- Try a word:
- If score == 6 then return because we found it
- If score == 0 then prune all words that have any overlap with the tried word
- If score is [1, 5] then prune all words that have less overlap because they can't be potential answers
- Then go repeat but only going through potential words

I'm not sure if it's proven to get the word but I got solution accepted.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

I have no idea how to answer this.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

O(N) space

# Code
```
#    This is Master's API interface.
#    You should not implement it, or speculate about its implementation
#
# class Master
# =begin
#     :type word: String
#     :rtype: Integer
# =end
#     def guess(word)
#         ...
#     end
# end
#

# @param {String[]} words
# @param {Master} master
# @return {Void}
def find_secret_word(words, master)
    potential = []
    impossible = []

    while words.any?
        # puts "Words: #{words.join(', ')}"
        word = words.pop
        guess = master.guess(word)
        # puts "Trying word: #{word}, guess: #{guess}"
        
        if guess == 6
            return
        elsif guess == 0
            # puts "  Pruning word list with any matches"
            while words.any?
                next_word = words.pop
                score = similarity(word, next_word)
                # puts "  next word: #{next_word}, score: #{score}"
                if score >= 1
                    # words with any overlap to our guess can't be it
                    # puts "    added word to impossible"
                    impossible << next_word
                else
                    # puts "    added word to potential"
                    potential << next_word
                end
            end
        else
            # puts "  Finding potential answers"
            while words.any?
                next_word = words.pop
                score = similarity(word, next_word)
                # puts "  next word: #{next_word}, score: #{score}"
                if score < guess
                    # puts "    added to impossible"
                    impossible << next_word
                else
                    # puts "    added to possible"
                    potential << next_word
                end
            end
        end
        
        # puts "  potential: #{potential.join(', ')}"
        # puts "  impossible: #{impossible.join(', ')}"
        words = potential
        potential = []
    end
end

def similarity(word1, word2)
    diff = 0

    for i in 0...6
        diff += 1 if word1[i] == word2[i]
    end

    diff
end

=begin
input
words: string[]
master: master object
Master.guess(word)

master.guess => int
-1 if it's in word list
[0, 6] based on how many characters match
match means character + position


goal is to implement strategy to guess

output
void, use Master.guess

ex1
secret = acckzz
words = acckzz, ccbazz, eiowzz, abcczz

- try a word
- keep track of attempted letters for each index
- keep track of bad letters
- can narrow list that way
=end
```
# Best solution 100% cpu/memory O(n)

**Author:** rumblfn
**Votes:** 0
**Link:** [https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/5797140/](https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/5797140/)

---

# Intuition
Split strings into words to get lists of words. Combine these lists and calculate how many times each word occurs in both lines. Select those words that occur exactly once.

> (= But have you ever tried to implement this on a Racket?

# Approach
Same as intuition.

### Explanations of the program:

`word-count` is an auxiliary function that takes a list of words and creates a hash table where the keys are words and the values are the number of their occurrences.
`string-split` is a standard function that splits a string into a list of words (using a space as a separator).
`append` \u2014 combines two word lists from strings s1 and s2.
`filter` \u2014 filters the words from the combined list, leaving only those that occur exactly once in the counts hash table.

# Complexity
- Time complexity: `O(n)` ~ 192ms 100%
- Space complexity: `O(n)` ~ 101mb 100%
Where `n` is total number of words.

# Code
```racket []
(define/contract (uncommon-from-sentences s1 s2)
  (-> string? string? (listof string?))
  (define (word-count lst)
    (foldl (lambda (word acc)
             (hash-update acc word add1 0))
           (hash)
           lst))
  (define words1 (map string-downcase (string-split s1)))
  (define words2 (map string-downcase (string-split s2)))
  (define all-words (append words1 words2))
  (define counts (word-count all-words))
  (remove-duplicates
   (filter (lambda (word) (= (hash-ref counts word) 1))
           all-words)))
```
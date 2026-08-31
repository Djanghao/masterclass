# A readable solution using helper functions

**Author:** OysterMax
**Votes:** 49
**Link:** [https://leetcode.com/problems/expressive-words/solutions/584405/](https://leetcode.com/problems/expressive-words/solutions/584405/)

---

To make the code more readable, a possible way is to define helper functions.

1. `compress(word)`
A word can be compressed to be a letter sequence and a corresponding counts.
For example, 'abbaaa' will be compressed to be ['a', 'b', 'a'] and [1, 2, 3].
A helper function `compress(word)` is defined to do it.

2. `is_strechy(word)`
Before checking if a word is strechy, we compress both the word and S.
The word will be compressed to be `w_letters` and `w_counts`, and S will be `S_letters` and `S_counts`.
**check letters sequence**
It is obvious that if `w_letters` and `S_letters` are not identical, the word is not stretchy.
**check counts sequence**
For a index `i`, 
    - `S_counts[i] < 3` means the letter is not expended, so the count of this letter should be identical in S and in the word. In other word, if `w_letters[i] != S_letters[i]`, the word is not strechy.
    - `S_counts[i] >= 3` means either (i) the letter is expended to be larger than 3, or (ii) not streched with an original count larger than 3. Whicever case it is, if `S_counts[i] < w_counts[i]`, the word is not stretchy.

    If none of above happens, the word is stretchy.

**Python**
```
class Solution:
    def expressiveWords(self, S: str, words: List[str]) -> int:

        # compress a word into a letter sequence and corresponding counts
        def compress(word):
            letters = []
            counts = []
            for l in word:
                if not letters or l != letters[-1]:
                    letters.append(l)
                    counts.append(1)
                else:
                    counts[-1] += 1
                    
            return letters, counts
        
        # check if a word is stretchy by comparing to compressed S
        def is_stretchy(w):
            
            # S_letters, S_counts are the output of compress(S)
            nonlocal S_letters, S_counts
            
            w_letters, w_counts = compress(w)
            
            if w_letters != S_letters:
                return False
            
            for i in range(len(S_counts)):
                if S_counts[i] < 3 and S_counts[i] != w_counts[i]:
                    return False
                if S_counts[i] >= 3 and S_counts[i] < w_counts[i]:
                    return False
                    
            return True

        # main body
        S_letters, S_counts = compress(S)
        res = 0
        for w in words:
            if is_stretchy(w):
                res += 1
        
        return res
```
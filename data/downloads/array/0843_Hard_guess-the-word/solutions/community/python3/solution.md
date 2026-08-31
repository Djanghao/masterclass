# Python - Beats 99%

**Author:** kevinhynes
**Votes:** 48
**Link:** [https://leetcode.com/problems/guess-the-word/solutions/425068/](https://leetcode.com/problems/guess-the-word/solutions/425068/)

---

I think this "interactive" problem may be over my head, but I found a lot of other solutions poorly explained or too theoretical, so here's my take.

Observations:
1) If `master.guess(guess_word)` returns 0 matches then any other word in `wordlist`that matches even 1 character with `guess_word` can be eliminated.
2) If `master.guess(guess_word)` returns 6, then obviously we have our answer.
3) If `master.guess(guess_word)` returns 1-5, then all remaining candidate need to match `guess_word` *exactly* that many times because the `secret` word is in the `wordlist` and matches the `guess_word` *exactly* that many times.

Approach:
Treat the `wordlist` as the candidate set.  On each guess we can eliminate candidate words based on the guess. 

If `master.guess(guess_word)` returns 0, it is better if `guess_word` was **not** very unique.  Then it eliminates many similar words.  

If `master.guess(guess_word)` returns 1-5, it is better if `guess_word` was very unique.  Then it eliminates many unsimilar words.

To emphasize, if `master.guess(guess_word)` returns 0 and `guess_word = "zzzzzz"` but **no** other words in `wordlist` use the letter `"z"` then you cannot eliminate any other words! 

But, if `master.guess("zzzzzz")` returned 4, and few other words in `wordlist` contained 4 `"z"`'s, then you would eliminate many words.

Here, I sort `wordlist` by uniqueness and change the end of the `wordlist` I am choosing `guess_word` from based on `matches`.

```
class Solution:
    def findSecretWord(self, wordlist: List[str], master: 'Master') -> None:
        place_counts = collections.defaultdict(int)
        for word in wordlist:
            for i, char in enumerate(word):
                place_counts[str(i)+char] += 1
        
        def word_uniqueness(word):
            score = 0
            for i, char in enumerate(word):
                score += place_counts[str(i)+char]
            return score
        
        # wordlist will be sorted from most to least unique.
        wordlist.sort(key=word_uniqueness)
        
        def word_is_possible(guess_word, word, matches):
            if guess_word == word:
                return False
            match_count = 0
            for a, b in zip(guess_word, word):
                if a == b:
                    match_count += 1
            return match_count == matches
        
        end = -1
        for _ in range(10):
            guess_word = wordlist[end]
            matches = master.guess(guess_word)
            if matches == 6:
                break
            elif matches == 0:
                wordlist = [w for w in wordlist if not any(a==b for a, b in zip(guess_word, w))]
                if end == 0:
                    end = -1
            else:
                wordlist = [w for w in wordlist if word_is_possible(guess_word, w, matches)]
                if end == -1:
                    end = 0
```
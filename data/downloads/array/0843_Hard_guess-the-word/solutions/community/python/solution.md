# Careful explanation of two ideas that allow you to solve this problem in a few lines

**Author:** williamsmj
**Votes:** 110
**Link:** [https://leetcode.com/problems/guess-the-word/solutions/1318789/](https://leetcode.com/problems/guess-the-word/solutions/1318789/)

---

The solution to this problem depends on two observations.

**1. If word has score x > 0, only those words that share exactly x characters with word can be the solution.**

 e.g. suppose guess("xyz") = 1.

  - "abc" cannot be the solution because it shares 0 letters with "xyz". "xyz" has a score of 1 so "abc" must have at least 1 letter wrong, so cannot be  the solution.

  - "zxy" cannot be the solution because it shares 0 letters (in the right  place) with "xyz", so it must have at least one letter wrong.

  - "ayz" cannot be the solution because it shares 2 letters with "xyz". If   "ayz" were the solution then "xyz" would have a score of 2.

  - "abz" can be the solution because it shares 1 letter with "xyz"

 We can use this idea to quickly filter the word list:
 
 ```
 class Solution:
    def findSecretWord(self, wordlist: List[str], master: "Master") -> None:
        while wordlist:
            word = wordlist.pop()
            matches = master.guess(word)
            # only those words that share exactly x characters with word can be
            # the solution.
            wordlist = [
                other
                for other in wordlist
                if matches == sum(w == o for w, o in zip(word, other))
            ]
```

But this on its own is not sufficient. We need to shrink the list faster for the big test cases. Which requires the second observation.

**2. We eliminate more words by choosing words that are more similar to the rest of the wordlist**

If `guess("xyz") > 0` then we can eliminate words that are dissimilar to "xyz" (see above). But we can elminate words that are _similar_ to "xyz" if `guess("xyz") is == 0`. For large wordlists, the overwhelming fraction of words in wordlist will have a score of 0. (Fun problem: compute this fraction for a randomly generated wordlist of size N.)
 
 Given `guess()` returns 0 most of the time for large wordlists, we can, on average eliminate more words per guess by choosing words that are more similar to the rest of
 the corpus.

We can do this by sorting the words in order of "similarity to the rest of the corpus". You can do this pretty much any reasonable way and pass the LeetCode testcases. But just as an example, here's a solution in which we assign each letter at each position a "weight" equal to the number of times that letter occurs at that position across entire wordlist. Each word's similarity to the rest of the corpus is then the sum of these weights for its letters.

```
class Solution:
    def findSecretWord(self, wordlist: List[str], master: "Master") -> None:
        # e.g. if wordlist = ["xy", "ab", "xz"]
        # then weights = [{x: 2, a: 1}, {b: 1, y:1, z:1}]
        weights = [Counter(word[i] for word in wordlist) for i in range(6)]

        # sort wordlist, least similar to rest of corpus first
        wordlist.sort(key=lambda word: sum(weights[i][c] for i, c in enumerate(word)))

        while wordlist:
            # get the word most similar to the rest of the corpus by popping
            # from the *end* of wordlist
            word = wordlist.pop()
            matches = master.guess(word)
            # only those words that share exactly x characters with word can be
            # the solution.
            wordlist = [
                other
                for other in wordlist
                if matches == sum(w == o for w, o in zip(word, other))
            ]
```

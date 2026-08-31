# O(n) with detailed explanation Python, JavaScript, GoLang

**Author:** usr25
**Votes:** 6
**Link:** [https://leetcode.com/problems/guess-the-word/solutions/940407/](https://leetcode.com/problems/guess-the-word/solutions/940407/)

---

Interesting question, poorly written by a certain individual (again!).
Key:
- Understand that the question only cares about the highest possibility that the code can get the secret word i.e. within 10 attempts, find the quickest way to get the secret word.
- Therefore, we need to minimise the use of API `master.guess()` and once we have to call it, we need to narrow down the candidates.
- We have x = master.guess(word)
if x == 6, we find the secret word, the algorithm ends
if x != 6, it means the secret word has exactly x matches with the word
Because the secret word has exactly x matches with the word, we can just search in the candidates, and only keep the ones that have exact x matches with the word. With that, we can narrow the candidates after we call master.guess(), and guarantee that the secret is in the remaining candidates.

For more detailed explanation, check this post (the best explanation in my opinion):
https://leetcode.com/problems/guess-the-word/discuss/556075/How-to-explain-to-interviewer-843.-Guess-the-Word

Time: `O(n)` where n = len(wordlist) because the for loop runs 10 or fewer times `O(10)` and in each iteration, we traverse the wordlist: `O(n)` -> `O(10*n)` remove constant = `O(n)`
Space: `O(n)` because we run the check 10 times, each time we create a new list of candidates with at most n length -> `O(10*n)` remove constant = `O(n)`

Python

```python
from random import randrange
class Solution:
    def findSecretWord(self, wordlist: [str], master: 'Master') -> None:
        for _ in range(10):
            random_idx = randrange(len(wordlist))
            guess_word = wordlist[random_idx]
            matches = master.guess(guess_word)
            candidates = []
            for word in wordlist:
                if matches == self._get_matches_between(guess_word, word):
                    candidates.append(word)
            wordlist = candidates
    def _get_matches_between(self, word1, word2):
        matches = 0
        for i in range(len(word1)):
            if word1[i] == word2[i]:
                matches += 1
        return matches
```

JavaScript

```javascript
var findSecretWord = function(wordlist, master) {
    for (let i = 0; i < 10; i++) {
        const randomIdx = getRandomIntInclusive(0, wordlist.length - 1);
        const guessWord = wordlist[randomIdx];
        const matches = master.guess(guessWord);
        const candidates = [];
        for (const word of wordlist) {
            if (matches === getMatchesBetween(guessWord, word)) {
                candidates.push(word);
            }
        }
        wordlist = candidates;
    }
};

function getMatchesBetween(word1, word2) {
    let matches = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] === word2[i]) {
            matches++;
        }
    }
    return matches;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}
```

GoLang

```go
import (
    "math/rand"
)
func findSecretWord(wordlist []string, master *Master) {
    for i := 0; i < 10; i++ {
        randomIdx := rand.Intn(len(wordlist))
        guessWord := wordlist[randomIdx]
        maches := master.guess(guessWord)
        candidates := []string{}
        for _, word := range wordlist {
            if maches == getMatchesBetween(guessWord, word) {
                candidates = append(candidates, word)
            }
        }
        wordlist = candidates
    }
}

func getMatchesBetween(word1, word2 string) int {
    matches := 0
    for i := 0; i < len(word1); i++ {
        if word1[i] == word2[i] {
            matches++
        }
    }
    return matches
}
```
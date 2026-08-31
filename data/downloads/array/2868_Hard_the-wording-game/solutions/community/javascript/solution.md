# JS / Python Top-Down DP

**Author:** ektegjetost
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-wording-game/solutions/4097560/](https://leetcode.com/problems/the-wording-game/solutions/4097560/)

---

# Intuition
The only real insight is that there's no point for a player to play anything except their best word for each letter. Why would you bother going back and forth if you can win at a particular letter? So your opponent runs out of words but you still have one left? That's the same as just playing your best letter.

Beyond that it's a pretty straightforward top-down DP.


# Approach
<!-- Describe your approach to solving the problem. -->
- For each player's turn
  - Either play your best word if you can beat your opponent's best word at the last letter that was played
  - Or play your best word at the next letter if you have one
- If you can play the same letter and your opponent can't win, or you can play the next letter and your opponent can't win, then you win
- Memoize results

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ - Find the best words for each player. $$O(1)$$ (2 * 26) to figure out if alice can win

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$ - Just need an array of 2 * 26 elements. I got lazy and didn't normalize the letters to 0-26



# Code

JavaScript
```javascript
/**
 * @param {string[]} a
 * @param {string[]} b
 * @return {boolean}
 */
var canAliceWin = function(a, b) {
  const zCode = 'z'.codePointAt(0)
  const bestWord = [new Array(zCode + 1).fill(''), new Array(zCode + 1).fill('')]
  for (let i = 0; i < a.length; i += 1) bestWord[0][a[i].codePointAt(0)] = a[i];
  for (let i = 0; i < b.length; i += 1) bestWord[1][b[i].codePointAt(0)] = b[i];
  
  const canWin = [bestWord[0].map(() => -1), bestWord[0].map(() => -1)]

  const getCanWin = (person, letter, word) => {
    if (
      letter > zCode
      || (bestWord[person][letter] <= word && !bestWord[person][letter + 1])
    ) return 0;
    if (canWin[person][letter] >= 0) return canWin[person][letter];
    const winWithSameLetter = bestWord[person][letter] > bestWord[1 - person][letter]
      ? !getCanWin(1 - person, letter, bestWord[person][letter])
      : 0;
    const winWithNextLetter = bestWord[person][letter + 1]
      ? !getCanWin(1 - person, letter + 1, bestWord[person][letter + 1])
      : 0;
    canWin[person][letter] = winWithSameLetter || winWithNextLetter;
    return canWin[person][letter];
  }

  return !getCanWin(1, a[0].codePointAt(0), a[0]);
};
```


Python
```python
class Solution:
  def canAliceWin(self, a: List[str], b: List[str]) -> bool:
    self.best_word = [[""] * (ord("z") + 2) for _ in range(2)]
    self.can_win = [[-1] * (ord("z") + 2) for _ in range(2)]
    
    for word in a: self.best_word[0][ord(word[0])] = word
    for word in b: self.best_word[1][ord(word[0])] = word

    return not self.get_can_win(1, ord(a[0][0]), a[0])

  def get_can_win(self, person, letter, word):
    if letter > ord("z") or (self.best_word[person][letter] <= word and not self.best_word[person][letter + 1]):
      return 0
    if self.can_win[person][letter] >= 0:
      return self.can_win[person][letter]

    win_with_same_letter = (
      not self.get_can_win(1 - person, letter, self.best_word[person][letter])
      if self.best_word[person][letter] > self.best_word[1 - person][letter]
      else 0
    )
    win_with_next_letter = (
      not self.get_can_win(1 - person, letter + 1, self.best_word[person][letter + 1])
      if self.best_word[person][letter + 1]
      else 0
    )
    self.can_win[person][letter] = win_with_same_letter or win_with_next_letter
    return self.can_win[person][letter]
```

Kotlin
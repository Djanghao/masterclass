# Official Solution

**Link:** [https://leetcode.com/problems/vowels-game-in-a-string/solution/](https://leetcode.com/problems/vowels-game-in-a-string/solution/)

---

### Approach: Greedy

#### Intuition

Alice always removes a non-empty substring containing an odd number of vowel letters, while Bob removes a non-empty substring containing an even number of vowel letters. Assuming both play optimally, we can classify the outcomes as follows:

+ If there are no vowel letters in $s$, Alice cannot make a move in the first round and will lose the game.

+ If there is at least one vowel letter in $s$, Alice can always guarantee a win, regardless of whether the total number of vowels is odd or even.

    - If $s$ contains an **odd** number of vowel letters, **Alice** can remove the entire string $s$ in her first move and win immediately.

    - If $s$ contains an **even** number of vowel letters, Alice first removes a substring with an **odd** number of vowels. Bob then removes a substring with an **even** number of vowels, leaving an **odd** number of vowels in the string. At this point, Alice can remove the remainder of the string in subsequent turns and win.

Therefore, the only condition we need to check is whether the string contains at least one vowel letter.

#### Implementation

<iframe src="https://leetcode.com/playground/9omkRAoK/shared" frameBorder="0" width="100%" height="225" name="9omkRAoK"></iframe>

#### Complexity Analysis

Let $n$ be the length of the given string.

- Time complexity: $O(n)$.
  
  We traverse the string once to check whether it contains any vowel letters, which takes linear time.

- Space complexity: $O(1)$.

---
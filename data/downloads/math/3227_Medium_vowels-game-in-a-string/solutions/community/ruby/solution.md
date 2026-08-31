# Trivialize problem

**Author:** benenb
**Votes:** 0
**Link:** [https://leetcode.com/problems/vowels-game-in-a-string/solutions/5528977/](https://leetcode.com/problems/vowels-game-in-a-string/solutions/5528977/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

If the string has an odd number of digits then alice can remove the whole string and win, otherwise she will remove an odd number of vowels, leaving an odd number of vowels in the string.

Removing an even number from an odd number will always leave an odd number so there is no way bob can leave the string in a state that forces alice to lose

Therefore alice can only lose on her first turn, if the string has no vowels

# Code
```
# @param {String} s
# @return {Boolean}
def does_alice_win(s)
    s.count("aeiou") != 0
end
```
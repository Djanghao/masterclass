# Python 3 solution using Set()

**Author:** michaelkareev
**Votes:** 125
**Link:** [https://leetcode.com/problems/longest-palindrome/solutions/813721/](https://leetcode.com/problems/longest-palindrome/solutions/813721/)

---

**Idea**:
Start adding letters to a set. If a given letter not in the set, add it. If the given letter is already in the set, remove it from the set. 
If the set isn't empty, you need to return length of the string minus length of the set plus 1.
Otherwise, you return the length of the string (example 'bb.' Your set is empty, you just return 2).

Essentially, your set contains non-paired letters. It's one of those bad questions where you need to go over all possible cases and somehow fit them into the solution. 

```
def longestPalindrome_set(s):
    ss = set()
    for letter in s:
        if letter not in ss:
            ss.add(letter)
        else:
            ss.remove(letter)
    if len(ss) != 0:
        return len(s) - len(ss) + 1
    else:
        return len(s)
```
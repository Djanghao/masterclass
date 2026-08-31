# any_of

**Author:** votrubac
**Votes:** 6
**Link:** [https://leetcode.com/problems/vowels-game-in-a-string/solutions/5509168/](https://leetcode.com/problems/vowels-game-in-a-string/solutions/5509168/)

---

Alice always wins if she can make a move.
**Python**
```python
class Solution:
    def doesAliceWin(self, s: str) -> bool:
        return any(ch in ('a', 'e', 'i', 'o', 'u') for ch in s)
```

**C++**
```cpp
bool doesAliceWin(string s) {
    return any_of(begin(s), end(s), [](char ch){
        return ch == 'a' || ch == 'o' || ch == 'e' || ch == 'i' || ch == 'u';
    });
}
```
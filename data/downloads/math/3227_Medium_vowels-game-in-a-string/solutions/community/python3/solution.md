# Find a vowel

**Author:** fahad_Mubeen
**Votes:** 46
**Link:** [https://leetcode.com/problems/vowels-game-in-a-string/solutions/5508944/](https://leetcode.com/problems/vowels-game-in-a-string/solutions/5508944/)

---

# Intution
1. If the number of vowels is 0, Bob wins because Alice has no vowels to pick.
2. If the number of vowels is odd, Alice can pick all of them on her turn. In this case, Bob will have no vowels left to pick on his turn, resulting in Bob losing.
3. If the number of vowels is even, say n, Alice can pick n - 1 vowels on her turn, leaving exactly 1 vowel (which is odd) for Bob. Bob will then be unable to pick any more vowels on his turn, resulting in Bob losing.
4. Therefore, if the count of vowels is greater than 0, Alice will win; otherwise, Bob will win.
# Complexity
- Time complexity: $$O(s.length)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    bool doesAliceWin(string s) {
        for(int i = 0; i < s.length(); i++){
            char ch = s[i];
            if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'){
                return true;
            }
        }
        return false;
    }
};
```
```Java []
class Solution {
    public boolean doesAliceWin(String s) {
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                return true;
            }
        }
        return false;
    }
}

```
```Python3 []
class Solution:
    def doesAliceWin(self, s: str) -> bool:
        for ch in s:
            if ch in 'aeiou':
                return True
        return False

```

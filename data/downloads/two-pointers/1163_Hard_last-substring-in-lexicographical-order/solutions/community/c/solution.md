# Easy and short C++ (Faster than 99%) | O(n) | One pass

**Author:** prabeshpaudel
**Votes:** 15
**Link:** [https://leetcode.com/problems/last-substring-in-lexicographical-order/solutions/1274574/](https://leetcode.com/problems/last-substring-in-lexicographical-order/solutions/1274574/)

---

---- Doesn't work now with updated test case --------

The problem is only when you have two same max characters.
If the max characters match,  just loop through until the trailing characters aren't same.
if on doing so, you encounter the starting index of current (or simply 'i'), you exit the inner loop and the maxIndex doesn't change.
If higher trailing character is found, just update the starting index to i.
The trick to O(n) is to never decrease the i and update the i to the unexplored next character.
Sort of maintaining two pointers.

```
class Solution {
public:
    string lastSubstring(string s) {
        char max = s[0];
        int length = s.size(), maxIndex = 0;
        for(int i = 1 ; i < length; ++i){
            if ( s[i] > max ){
                maxIndex = i;
                max = s[i];
            }
            else if (s[i] == max){
                int j = 1;
                while (s[i + j] == s[maxIndex + j] && maxIndex + j < i ) j++;
                if (s[i + j] > s[maxIndex + j]) maxIndex = i;
                i = i + j-1;
            }
        }
        return s.substr(maxIndex,length - maxIndex + 1);
    }
};
```
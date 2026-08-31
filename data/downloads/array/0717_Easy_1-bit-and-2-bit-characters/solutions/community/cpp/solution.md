# ✅ [C++] | 5 Line of Code | Very Easy

**Author:** psycho_programer
**Votes:** 4
**Link:** [https://leetcode.com/problems/1-bit-and-2-bit-characters/solutions/3096411/](https://leetcode.com/problems/1-bit-and-2-bit-characters/solutions/3096411/)

---

### Code
```
class Solution {
public:
    bool isOneBitCharacter(vector<int>& bits) {
        int j = 0, n = bits.size();
        while(j < n) {
            if(bits[j] && ++j == n - 1) return false;
            j++;
        }
        return true;
    }
};
```
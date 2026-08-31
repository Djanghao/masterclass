# C++ | Golang | Prefix Sum

**Author:** pikachuu
**Votes:** 0
**Link:** [https://leetcode.com/problems/shifting-letters-ii/solutions/3310229/](https://leetcode.com/problems/shifting-letters-ii/solutions/3310229/)

---

# Code
```
// C++
class Solution {
public:
    string shiftingLetters(string s, vector<vector<int>>& shifts) {
        int n = s.length();
        vector<int> prefix(n, 0);
        for(vector<int> shift: shifts) {
            prefix[shift[0]] += (shift[2] == 1? 1: -1);
            if(shift[1] + 1 < n)
                prefix[shift[1] + 1] -= (shift[2] == 1? 1: -1);
        }
        for(int i = 0; i < n; i++) {
            prefix[i] = (prefix[i] + (i > 0? prefix[i - 1]: 0)) % 26;
            int val = s[i] + prefix[i];
            val -= val > 'z'? 26: 0;
            val += val < 'a'? 26: 0;
            s[i] = val;
        }
        return s;
    }
};


// Golang
func shiftingLetters(s string, shifts [][]int) string {
    var n int = len(s)
    prefix := make([]int, n)
    for _, shift := range shifts {
        val := -1
        if shift[2] == 1 { val = 1 }
        prefix[shift[0]] += val
        if shift[1] + 1 < n {
            prefix[shift[1] + 1] -= val
        }
    }
    prefix[0] %= 26
    b := make([]byte, n)
    for i := 0; i < n; i++ {
        if i > 0 {
             prefix[i] = (prefix[i] + prefix[i - 1]) % 26
        }
        var val int = int(s[i]) + prefix[i]
        if val > 'z' {val -= 26}
        if val < 'a' {val += 26}
        b[i] = byte(val)
    }
    return string(b)
}
```
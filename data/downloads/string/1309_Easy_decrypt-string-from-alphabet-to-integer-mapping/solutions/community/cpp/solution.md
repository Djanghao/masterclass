# [C++] 0ms solution

**Author:** sahilgoyals
**Votes:** 37
**Link:** [https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/solutions/736309/](https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/solutions/736309/)

---

```
string freqAlphabets(string s) {
		int n = s.length(), i = 0;
        string ans = "";
        while(i < n)
            if(i + 2 < n && s[i + 2] == '#') {
                int ss = (s[i]-'0')*10 + (s[i+1]-'0');
                ans += char(ss+'a'-1);
                i += 3;
            }
            else {
                ans += char(s[i]-'0'-1+'a');
                i++;
            }
        }
        return ans;
    }
```
# Solution

**Author:** deleted_user
**Votes:** 1
**Link:** [https://leetcode.com/problems/masking-personal-information/solutions/3484879/](https://leetcode.com/problems/masking-personal-information/solutions/3484879/)

---

```C++ []
class Solution {
public:
    string maskPII(string S) {
        auto at = S.find("@");
        if (at != string::npos) {
            transform(S.begin(), S.end(), S.begin(), ::tolower);
            return S.substr(0, 1) + "*****" + S.substr(at - 1);
        }
        string digits;
        for (const auto& c : S) {
            if (::isdigit(c)) {
                digits.push_back(c);
            }
        }
        string local{"***-***-"};
        local += digits.substr(digits.length() - 4);
        if (digits.length() == 10) {
            return local;
        }
        return "+" + string(digits.length() - 10, '*') + "-" + local;
    }
};
```

```Python3 []
class Solution:
    def maskPII(self, s: str) -> str:
        if '@' in s:
            s = s.lower()
            ss = s.split('@')
            return ss[0][0] + '*****' + ss[0][-1] + '@' + ss[1]
        
        k = len([int(x) for x in s if x.isdigit()]) - 10
        res, local_num = '+' + '*'*k + '-' if k > 0 else '', '' 
        idx = -1
        while len(local_num) < 4:
            if (ch := s[idx]).isdigit():
                local_num += ch
            idx -= 1
        res += '***-***-' + local_num[::-1]

        return res
```

```Java []
class Solution {
    public String maskPII(String s) {
        boolean flag = s.contains("@");
        if (flag) {
            String[] strs = s.split("@");
            StringBuilder sb = new StringBuilder();
            sb.append(Character.toLowerCase(strs[0].charAt(0)));
            sb.append("*****");
            sb.append(Character.toLowerCase(strs[0].charAt(strs[0].length() - 1)));
            sb.append("@");
            for (char c : strs[1].toCharArray()) {
                if (c == '.') {
                    sb.append(c);
                } else {
                    sb.append(Character.toLowerCase(c));
                }
            }
            return sb.toString();
        } else {
            StringBuilder sb = new StringBuilder();
            for (char c : s.toCharArray()) {
                if (Character.isDigit(c)) {
                    sb.append(c);
                }
            }
            int len = sb.length();
            sb.delete(0, sb.length() - 4);
            sb.insert(0, "***-***-");
            if (len == 10) {
                return sb.toString();
            } else {
                sb.insert(0, "-");
                for (int i = 0; i < len - 10; i++) {
                    sb.insert(0, "*");
                }
                sb.insert(0, "+");
                return sb.toString();
            }
        }
    }
}
```

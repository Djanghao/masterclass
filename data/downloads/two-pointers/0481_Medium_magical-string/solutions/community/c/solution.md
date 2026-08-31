# Really easy C++ sol: 96.3% faster, from observation, with detail explanation

**Author:** shud_i_code
**Votes:** 7
**Link:** [https://leetcode.com/problems/magical-string/solutions/1394958/](https://leetcode.com/problems/magical-string/solutions/1394958/)

---

How would you produce the string?
Notice that it starts with 122 and there on you keep adding either 1 or 2 x number of times to it and build it. x is determined by the s[ind] where ind starts with 2 (last index at beginning). s[2] = 2, so you add two 1s and then flip the character to be added to become 2. ind becomes 3, s[3] = 1, so add one 2 and so on until length of string is n or more.
```
class Solution {
public:
    char flip(char c) {
        if(c == '1')
            return '2';
        else return '1';
    }
    
    int magicalString(int n) {
        string s = "122";
        char next = '1';
        int ind = 2;
        int ans = 1;
        while(s.size() < n) {
            int t = s[ind] - '0';
            while(t--) {
                s.push_back(next);
                ans += ((s.size() <= n && next == '1') ? 1 : 0);
            }
            ind++;
            next = flip(next);
        }
        return ans;
    }
};
```
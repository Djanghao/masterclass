# c++ || divisibility logic || backtracking for case 7

**Author:** Susm
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-largest-palindrome-divisible-by-k/solutions/5654182/](https://leetcode.com/problems/find-the-largest-palindrome-divisible-by-k/solutions/5654182/)

---

```
class Solution {
    int mod7(string& num) {
        int remainder = 0;
        for (char digit : num) {
            remainder = (remainder * 10 + (digit - '0')) % 7;
        }
        return remainder;
    }
public:
    string largestPalindrome(int n, int k) {
        string ans="";
        switch(k){
            case 1 : ans.append(n,'9'); break; 
            case 2 : ans.append(1,'8'); if(n>=2){ ans.append(n-2,'9'); ans.append(1,'8'); } break;
            case 3 : ans.append(n,'9'); break;
            case 4 : if(n<=3) ans.append(n,'8'); else { ans.append(2,'8'); ans.append(n-4,'9'); ans.append(2,'8'); } break;   
            case 5 : if(n<=2) ans.append(n,'5'); else { ans.append(1,'5'); ans.append(n-2,'9'); ans.append(1,'5'); } break;
            case 6 : if(n<=2) ans.append(n,'6'); else if(n&1) { ans.append(1,'8'); ans.append((n-3)/2,'9'); ans.append(1,'8'); ans.append((n-3)/2,'9'); ans.append(1,'8'); } else { ans.append(1,'8'); ans.append((n-4)/2,'9'); ans.append(2,'7'); ans.append((n-4)/2,'9'); ans.append(1,'8'); } break;  
            case 7 : { ans.append(n,'9');

            while (mod7(ans) != 0) {

                int i = (n - 1) / 2;
                while (i >= 0 && ans[i] == '0') {
                    ans[i] = ans[n - 1 - i] = '9';
                    i--;
                }
                ans[i]--;
                ans[n - 1 - i] = ans[i];
            }

            break; }
            case 8 : if(n<=6) ans.append(n,'8'); else { ans.append(3,'8'); ans.append(n-6,'9'); ans.append(3,'8'); } break; 
            case 9 : ans.append(n,'9');
        }
        return ans;
    }
};
```
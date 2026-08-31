# [C++] DP with explanation (56ms)

**Author:** yyc9268
**Votes:** 9
**Link:** [https://leetcode.com/problems/check-if-an-original-string-exists-given-two-encoded-strings/solutions/1550682/](https://leetcode.com/problems/check-if-an-original-string-exists-given-two-encoded-strings/solutions/1550682/)

---

~~I checked that my solution is **about 10 times faster** than other C++ solution.~~ (Faster codes came out)
Basically, the code moves `i1`, `i2` (index of `s1` and `s2` respectively) and `diff` (relative character count
difference between two strings) and memoize this 3 dimensional data.
Although there exists already a DP solution, I focused on following points.
1. I manage the variable `diff` to always be in range `(1000, -1000)` by strictly obey a following rule.
	'if `diff < 0`, take element from `s1`, else, from `s2`'
	For me, this was the most intuitive way to assure `O(40*40*2000)`.
2. I did not use additional function for making set of combinations from 3 consecutive digits.
    So, I guess my code can simply be extended to 4 or 5 consecutive digit cases if TLE is avoided.

Similar to other posts, there are 5 conditions in a recursive function.
1. `diff <= 0` and `s1[i1] == digit`
2. `diff >= 0` and `s2[i2] == digit`
3. `diff == 0` and `s1[i1] == s2[i2]`
4. `diff < 0` and `s1[i1] == alphabet`
5. `diff > 0` and `s2[i2] == alphabet`

```
class Solution {
public:
    bool memo[50][50][2000];
    bool comp_seqs(string& s1, string& s2, int i1, int i2, int diff){
        // check true condition
        if(i1 == s1.size() && i2 == s2.size())
			return diff == 0;
        // add 1000 to 'diff' be in range [0, 2000)
        bool& ret = memo[i1][i2][diff+1000];
        if(ret)
            return false;  // immediately return
        ret = true;  // check visited
		
		// diff > 0 or diff < 0 checking to ensure the diff always be in range (-1000, 1000)
		// in the case that s1[i1] is a digit
        if(diff >= 0 && i1 < s1.size() && s1[i1] <= '9'){ 
            int num1 = 0;
            for(int i=0; i<min(3, (int)s1.size()-i1); i++){  // loop maximum 3 consecutive digits
                if(s1[i1 + i] > '9')
                    break;
                num1 = num1*10 + s1[i1 + i] - '0';
                if(comp_seqs(s1, s2, i1+i+1, i2, diff-num1))
                    return true;
            }
        }else if(diff <= 0 && i2 < s2.size() && s2[i2] <= '9'){  // in the case that s2[i2] is a digit 
            int num2 = 0;
            for(int i=0; i<min(3, (int)s2.size()-i2); i++){
                if(s2[i2 + i] > '9')
                    break;
                num2 = num2*10 + s2[i2 + i] - '0';
                if(comp_seqs(s1, s2, i1, i2+i+1, diff+num2))
                    return true;
            }
        }else if(diff == 0){
            if(i1 >= s1.size() || i2 >= s2.size() || s1[i1] != s2[i2])  // reject infeasible cases
                return false;
            return comp_seqs(s1, s2, i1+1, i2+1, 0);
        }else if(diff > 0){
            if(i1 >= s1.size())  // reject infeasible cases
                return false;
            return comp_seqs(s1, s2, i1+1, i2, diff - 1);
        }else{
            if(i2 >= s2.size())  // reject infeasible cases
                return false;
            return comp_seqs(s1, s2, i1, i2+1, diff + 1);
        }
        return false;
    }
    bool possiblyEquals(string s1, string s2) {
        return comp_seqs(s1, s2, 0, 0, 0);
    }
};
```

Please let me know if theres any problem or better optimization
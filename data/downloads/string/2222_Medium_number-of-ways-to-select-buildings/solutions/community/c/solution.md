# Easy understanding C++ code with comments

**Author:** Tarun_PSV
**Votes:** 264
**Link:** [https://leetcode.com/problems/number-of-ways-to-select-buildings/solutions/1907026/](https://leetcode.com/problems/number-of-ways-to-select-buildings/solutions/1907026/)

---

The possible sequences of selected buildings is either "101" or "010".

If the current building is '0', then the number of sequences of pattern "101" will be the product of the number of occurances of building '1' before the current building to the number of occurances of building '1' after the current building and viceversa.

```
class Solution {
public:
    long long numberOfWays(string s) {
        long long a=0,b=0,ans=0;        // a and b are the number of occurances of '1' and '0' after the current building respectively.
        for(int i=0;i<s.length();i++){
            if(s[i]=='1')
                a++;
            else
                b++;
        }
        long long c=0,d=0;              // c and d are the number of occurances of '1' and '0' before the current building respectively.
        for(int i=0;i<s.length();i++){
            if(s[i]=='1'){               // Counting the sequences of "010"
                ans+=(d*b);
                a--;
                c++;
            }
            else{                        // Counting the sequences of "101"
                ans+=(a*c);
                b--;
                d++;
            }
        }
        return ans;
    }
};
```

Complexity
Time - O(n)
Space - O(1)
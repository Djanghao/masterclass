# C++ modular code with explanation

**Author:** ohmahgawd
**Votes:** 11
**Link:** [https://leetcode.com/problems/ambiguous-coordinates/solutions/599950/](https://leetcode.com/problems/ambiguous-coordinates/solutions/599950/)

---

The logic is quite simple for this problem. You have to break the strings, at all possible points. Then you have to again break all the formed substrings, by placing dots in between the substrings, and following the `0` rules.

Example - `(1234)`

After removing the brackets, we get `s = 1234`. If you break the string at all points, the substrings you get are-

`1  234`    ->   `1  234`,  `1  2.34`,  `1  23.4`
`12  34`    ->   `12  34`,  `12  3.4`,  `1.2  34`,  `1.2  3.4`
`123  4`    ->   `123  4`,  `1.23  4`,  `12.3  4`

As you can see I broke the substrings again to insert decimals. Of course you can't have something like `1.` or `0001` or `1.00`. For that I use a `check function`.

As you can see after breaking the string at a particular point, I get two substrings `s1` and `s2`. Then I break both of them into `first` and `second`. `first` represents the part before the decimal and `second` is the part after that.

For `first`, if it's length is greater than `1`, then first digit can't be `0`. For example `0.xx` or `0` is valid, but something like `01.xx` or `000` is not acceptable. 
Similarly, for `second`, the last digit cant be `0`. For example `xx.0` or `xx.30` is not valid.

The reset is simple. I take 2 vectors `res1` (for storing the first coordinates) and `res2` (for storing the second coordinates), and combine them into the final vector.

```
class Solution {
public:
	// issecword denotes if it is the second word (the part after the decimal)
    bool check(string s, bool issecword)
    {
        int n=s.length();
		// Logic explained above
        if(issecword){
            if(n>0 && s[n-1]=='0') return false;
        }
        else{
            if(n>1 && s[0]=='0') return false;
        }
        return true;
    }

    vector<string> ambiguousCoordinates(string S) {
        vector<string> res;
        S=S.substr(1,S.length()-2);  // Remove the brackets
        int n=S.length();

        for(int i=1;i<n;i++){
            string s1=S.substr(0,i);
            string s2=S.substr(i);
            vector<string> res1, res2;
			
			// The full string without any decimal point can also be a coordinate.
			// But '01' or '001' is not possible.
            if(check(s1, false)) res1.push_back(s1);
            if(check(s2, false)) res2.push_back(s2);
			
			// First co-ordinate
            for(int j=1;j<s1.length();j++){
                string first=s1.substr(0,j);
                string second=s1.substr(j);
                if(check(first, false) && check(second, true)) res1.push_back(first+"."+second);
            }
			
			// Second co-ordinate
            for(int j=1;j<s2.length();j++){
                string first=s2.substr(0,j);
                string second=s2.substr(j);
                if(check(first, false) && check(second, true)) res2.push_back(first+"."+second);
            }
			
			// Combine all the results
            for(auto left:res1){
                for(auto right:res2){
                    res.push_back("(" + left + ", "+ right + ")");
                }
            }
        }
        return res;
    }
};
```

*Time Complexity* - `O(n^4)`  (Because `substr` function is `O(n)` worst case)
*Space Compexity* - `O(n)`
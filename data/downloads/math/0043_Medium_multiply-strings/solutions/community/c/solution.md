# C++ Simple, Easy and Short Solution, Brief Explanation

**Author:** YehudisK
**Votes:** 390
**Link:** [https://leetcode.com/problems/multiply-strings/solutions/1563507/](https://leetcode.com/problems/multiply-strings/solutions/1563507/)

---

**Idea:**
We are using regular mathematical vertical multiplication.
We loop from the end of both numbers, multiply the digits one at a time and save the carry in the next cell for the next iteration.
The loop at the end constructs the result string - we skip 0s at the beginning and add the numbers.

**Time Complexity:** O(mn)
**Space Complexity:** O(n+m)
```
class Solution {
public:
    string multiply(string num1, string num2) {
        if (num1 == "0" || num2 == "0") return "0";
        
        vector<int> res(num1.size()+num2.size(), 0);
        
        for (int i = num1.size()-1; i >= 0; i--) {
            for (int j = num2.size()-1; j >= 0; j--) {
                res[i + j + 1] += (num1[i]-'0') * (num2[j]-'0');
                res[i + j] += res[i + j + 1] / 10;
                res[i + j + 1] %= 10;
            }
        }
        
        int i = 0;
        string ans = "";
        while (res[i] == 0) i++;
        while (i < res.size()) ans += to_string(res[i++]);
        
        return ans;
    }
};
```
**Like it? please upvote!**
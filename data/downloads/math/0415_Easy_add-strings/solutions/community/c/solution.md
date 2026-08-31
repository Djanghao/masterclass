# Easy to understand C++ Solution, 0ms

**Author:** Pooja0406
**Votes:** 53
**Link:** [https://leetcode.com/problems/add-strings/solutions/380772/](https://leetcode.com/problems/add-strings/solutions/380772/)

---

Runtime: 0 ms, faster than 100.00% of C++ online submissions for Add Strings.
Memory Usage: 9.1 MB, less than 69.57% of C++ online submissions for Add Strings.

```
string addStrings(string num1, string num2) {
        
        string res;
        int sum = 0;
        int i = num1.size() - 1;
        int j = num2.size() - 1;
        
        
        while(i >= 0 && j >= 0)
        {
            sum += (num1[i--] - '0') + (num2[j--] - '0');
            res.push_back(char(sum%10 + '0'));
            sum = sum/10;
        }
        
        while(i >= 0)
        {
            sum += (num1[i--] - '0');
            res.push_back(char(sum%10 + '0'));
            sum = sum/10;
        }
        
        while(j >= 0)
        {
            sum += (num2[j--] - '0');
            res.push_back(char(sum%10 + '0'));
            sum = sum/10;
        }
        
        if(sum > 0)
            res.push_back(char(sum%10 + '0'));
        reverse(res.begin(), res.end());
        
        return res;
    }
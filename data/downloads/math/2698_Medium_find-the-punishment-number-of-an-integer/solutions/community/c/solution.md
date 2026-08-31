# Simple Recursion || Easy to understand

**Author:** MohakHarjani
**Votes:** 55
**Link:** [https://leetcode.com/problems/find-the-punishment-number-of-an-integer/solutions/3546812/](https://leetcode.com/problems/find-the-punishment-number-of-an-integer/solutions/3546812/)

---

```
class Solution {
public:
    bool canPartition(string s, int target)
    {
        if (s == "" && target == 0) return true;
        if (target < 0) return false;
        
        bool ans = false;
        //========================================================================
        for (int i = 0; i < s.size(); i++) //try all possible pivot points
        {
            string left = s.substr(0, i + 1); //keep the left part
            string right = s.substr(i + 1); //recurse for right  part
            int leftNum = stoi(left);
            
            bool isPossible = canPartition(right, target - leftNum);
            if (isPossible) { ans = true; break; }
        }
        //=============================================================================
        return ans;
    }
    int punishmentNumber(int n)
    {
        int sum = 0;
        for (int num  = 1; num <= n; num++)
        {
            int sqr = num * num;
            if (canPartition(to_string(sqr), num)) 
            {
                sum += sqr;
            }
        }
        return sum;
    }
};
```
//=======================================================================================================
## EFFICIENT APPROACH 
```
class Solution {
public:
    bool canPartition(string& s, int startIdx, int target)
    {
        if (startIdx == s.size() && target == 0) return true;
        if (target < 0) return false;
        
        bool ans = false;
        int leftNum = 0;
        //========================================================================
        for (int i = startIdx; i < s.size(); i++) //try all possible pivot points
        {
            leftNum = (leftNum * 10) + (s[i] - '0'); //keep the left
            
            bool isPossible = canPartition(s, i + 1, target - leftNum); //recurse for right
            if (isPossible) { ans = true; break; }
        }
        //=============================================================================
        return ans;
    }
    int punishmentNumber(int n)
    {
        int sum = 0;
        for (int num  = 1; num <= n; num++)
        {
            int sqr = num * num;
            string sqrStr = to_string(sqr);
            if (canPartition(sqrStr, 0, num)) 
            {
                sum += sqr;
            }
        }
        return sum;
    }
};
```
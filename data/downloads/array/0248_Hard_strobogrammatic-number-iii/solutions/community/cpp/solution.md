# [C++] AC and clean, any ideas to make it faster?

**Author:** TonyLic
**Votes:** 1
**Link:** [https://leetcode.com/problems/strobogrammatic-number-iii/solutions/67430/](https://leetcode.com/problems/strobogrammatic-number-iii/solutions/67430/)

---

Here is my AC solution. Idea is like question II, but should not store all strobogrammatic numbers due to memory limitation. Instead, find every possible number to see if it's in the range. 

Any suggestions to improve the time efficiency?
    
    class Solution {
    public:
    bool strCmp(const string& s1, const string& s2)
    {
        if(s1.size() != s2.size())
            return s1.size() < s2.size();
        for(int i = 0; i < s1.size(); ++i)
        {
            if(s1[i] < s2[i])
                return true;
            else if(s1[i] > s2[i])
                return false;
        }
        return true;
    }
    
    void helper(int& cnt, string solution, const string& low, const string& high) {
        if(!strCmp(solution, high))
            return;
        if(strCmp(low, solution) && strCmp(solution, high)) //find one solution
            if(solution.size() == 1 || (solution.size() > 1 &&solution[0] != '0'))
                cnt++;
            
        helper(cnt, "0" + solution + "0", low, high);
        helper(cnt, "1" + solution + "1", low, high);
        helper(cnt, "6" + solution + "9", low, high);
        helper(cnt, "8" + solution + "8", low, high);
        helper(cnt, "9" + solution + "6", low, high);

    }

    int strobogrammaticInRange(string low, string high) {
        int cnt = 0;
        helper(cnt, "", low, high);
        helper(cnt, "0", low, high);
        helper(cnt, "1", low, high);
        helper(cnt, "8", low, high);
        return cnt;
    }
    };
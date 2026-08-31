# Calculate Digit Sum of a String Solution in C++

**Author:** The_Kunal_Singh
**Votes:** 2
**Link:** [https://leetcode.com/problems/calculate-digit-sum-of-a-string/solutions/3584346/](https://leetcode.com/problems/calculate-digit-sum-of-a-string/solutions/3584346/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n*m)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
class Solution {
public:
    string digitSum(string s, int k) {
        int i, j=0, l, n;
        string temp="";
        while(s.length()>k)
        {
            j=0;
            l = s.length()/k;
            while(l--)
            {
                for(i=j ; i<j+k ; i++)
                {
                    n += s[i]-48;
                }
                j = j+k;
                temp += to_string(n);
                n=0;
            }
            if(s.length()%k!=0)
            {
                for(i=j ; i<s.length() ; i++)
                {
                    n += s[i]-48;
                }
                temp += to_string(n);
                n=0;
            }
            s.clear();
            s = temp;
            temp.clear();
        }
        return s;
    }
};
```
![upvote new.jpg](./images/0.jpeg)

# C++ Solution O(nlogn) time complexity.

**Author:** Indominous1
**Votes:** 6
**Link:** [https://leetcode.com/problems/check-if-a-string-can-break-another-string/solutions/2779227/](https://leetcode.com/problems/check-if-a-string-can-break-another-string/solutions/2779227/)

---

# Intuition
 Sort the given strings in ascending order then try to find if they can be broken or not.

# Approach
-> First sort both the strings,
-> Find the string which is greater in nature by finding the first different character and compare them,
-> If that character is in s1 string then all the characters of string s1 must be greater than characters of s2 string (same for string s2.)

>Note- Put the larger string in s2 because it will lesser our need for applying if conditions

# Complexity
- Time complexity:
    O(nlogn), Runtime-86 ms (80.29 % better than C++ Submissions)

- Space complexity:
   Memory Used- 11.4 MB (90.78 % better than C++ Submissions)

# Code
```
class Solution {
public:
    bool checkIfCanBreak(string s1, string s2) {
        bool flag=true;
        int d;
        sort(s1.begin(),s1.end());
        sort(s2.begin(),s2.end());
        cout<<s1<<endl<<s2;
        for(int i=0;i<s1.size();i++)
        {
            if(s1[i]>s2[i])
            {
                swap(s1,s2);
                break;
            }
        }

        for(int i=0;i<s2.size();i++)
        {
             if(s2[i]<s1[i])
              {
                flag=false;
                break;
              }
          }
        return flag;
    }
};
```
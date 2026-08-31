# C++ Easy to Understand Solution

**Author:** GSK18
**Votes:** 13
**Link:** [https://leetcode.com/problems/delete-columns-to-make-sorted-ii/solutions/1883493/](https://leetcode.com/problems/delete-columns-to-make-sorted-ii/solutions/1883493/)

---

Approach:
1.Initially take vector of empty string and try to add each character from string present in its respective row 
2.Now compare all this string and check if they are in lexicographical order or not.
3.If they are not in lexicographical order remove newly added element from each string

```
class Solution {
public:
    int minDeletionSize(vector<string>& str) {
        
        int n=str.size();
        int m=str[0].size();
        
        vector<string>vec(n,""); //To store string in lexicographical order
       
        for(int i=0;i<m;i++)
        {
            
            for(int j=0;j<n;j++)
            {
                vec[j]+=str[j][i]; //Adding one character from each row 
            }
          
            int var=1;
            
            for(int j=1;j<n;j++)
            {
                if(vec[j]<vec[j-1]) // Checking if all string are in lexicographical order or not
                {
                    var=-1;
                    break;
                }
            }
            
            if(var==-1) // If string are not in lexicographical order then we willl remove current added elemet from all strings
            {
                for(int j=0;j<n;j++)
                {
                    vec[j].pop_back();
                }
            }
        }
        
        
        return m-vec[0].size();
    }
};
```
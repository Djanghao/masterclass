# Easy C++ solution using sliding window technique

**Author:** imran2018wahid
**Votes:** 89
**Link:** [https://leetcode.com/problems/fruit-into-baskets/solutions/1668238/](https://leetcode.com/problems/fruit-into-baskets/solutions/1668238/)

---

```
class Solution {
public:
    int totalFruit(vector<int>& fruits) {
        // unordered_map stores no. of types of fruits in the current window
        // here key is the type of the fruit 
        // and value is the number of fruits of 'key' type in the current window
        unordered_map<int,int>m;
        
        // 'i' is the left and 'j' is the right pointer of thw window
        // 'ans' will be the answer
        int i=0,j=0,ans=0;
        while(j<fruits.size())
        {
            m[fruits[j]]++;
            // as long as there are more than 2 types of fruit, shrink the window
            while(m.size()>2)
            {
                if(m[fruits[i]]==1)
                {
                    m.erase(fruits[i]);
                }
                else
                {
                    m[fruits[i]]--;
                }
                i++;
            }
            
            // take the max of already encountered window and current window
            ans=max(ans,j-i+1);
            
            // move the right pointer
            j++;
        }
        
        // finally return the answer
        return ans;
    }
};
```
***Please upvote if you have got any help from my code. Thank you.***
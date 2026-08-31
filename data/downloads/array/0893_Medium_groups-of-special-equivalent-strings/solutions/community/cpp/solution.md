# Set || Easy C++ || Clean Code ✅✅

**Author:** Deepak_5910
**Votes:** 4
**Link:** [https://leetcode.com/problems/groups-of-special-equivalent-strings/solutions/3888784/](https://leetcode.com/problems/groups-of-special-equivalent-strings/solutions/3888784/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
After **sorting** the **even and odd Position characters** of a string put it into a **unordered set** and finally return the **size** of the set.

# Complexity
- Time complexity:O(N * 20 * 10 * Log(10))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int numSpecialEquivGroups(vector<string>& w) {
        unordered_set<string> st;
        for(int i = 0;i<w.size();i++)
        {
            string even = "",odd = "";
            for(int j = 0;j<w[i].size();j++)
            {
                if(j%2) odd+=w[i][j];
                else even+=w[i][j];
            }
            sort(even.begin(),even.end());
            sort(odd.begin(),odd.end());
            st.insert(even+odd);
        }
        return st.size();
        
    }
};
```
![upvote.jpg](./images/0.jpeg)

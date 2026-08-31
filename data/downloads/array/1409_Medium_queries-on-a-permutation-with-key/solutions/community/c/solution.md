# C++ runtime beats 100% of cpp submissions, with explanation

**Author:** naniko19
**Votes:** 13
**Link:** [https://leetcode.com/problems/queries-on-a-permutation-with-key/solutions/1160793/](https://leetcode.com/problems/queries-on-a-permutation-with-key/solutions/1160793/)

---

1. We initialize P - permutation vector from backward. For example : [5,4,3,2,1]
2. Iterate through queries array and find its index in P, which is *curIndex*
3. *curIndex* is reversed Permutation index we need normal one, therfore we substract it from size - 1.  **int index = size -1 - curIndex;** 
4. Update the value of  queries[i]  to index
5. Remove current query from queries
6. Push  current query to the back of array (Because it is reversed). This plays a big role in time complexity. Push_back O(1), where inserting to the beginnig of the vector is O(n)
7. Repeat from step 2 till the end of array
```
class Solution {
public:
    vector<int> processQueries(vector<int>& queries, int m) {
      vector<int> P(m), res(queries.size());
      int size = m;
      for(int i = 0; i < m; i++)
          P[i] = m - i; 
      for(int i = 0; i < queries.size(); i++) {
          int curQuery = queries[i];
          
          auto it = find(P.begin(), P.end(), curQuery);
          int curIndex = it - P.begin(); 
          int index = size - 1 - curIndex; 
          queries[i] = index;
          P.erase(P.begin() + curIndex);
          P.push_back(curQuery);
      }  
        
      return queries;
    }
};
```
# Detailed Explanation with Implementation using HashMaps and PrefixSum || C++

**Author:** VenkataSaiK
**Votes:** 6
**Link:** [https://leetcode.com/problems/intervals-between-identical-elements/solutions/1699544/](https://leetcode.com/problems/intervals-between-identical-elements/solutions/1699544/)

---

Given Array = [2,1,3,1,2,3,3,1,3,2,1,2,2,1,1]

**Unordered_map built from the given array:**  (key, value) = (Array[i], array of all indexes of Array[i])
1 -> [1, 3, 7, 10, 13, 14]
2 -> [0, 4, 9, 11, 12]
3 -> [2, 5, 6, 8]

temp  =    [1, 3, 7, 10, 13, 14]
pre     =    [1, 4, 11, 21, 34, 48]   (Prefix sum array of temp array)

* Index 1:       (1 - 1) + (3 - 1) + (7 - 1) + (10 - 1) + (13 - 1) + (14 - 1)
* Index 3:       (3 - 1) + (3 - 3) + (7 - 3) + (10 - 3) + (13 - 3) + (14 - 3)
* Index 7:       (7 - 1) + (7 - 3) + (7 - 7) + (10 - 7) + (13 - 7) + (14 - 7)
* Index 10:     (10 - 1) + (10 - 3) + (10 - 7) + (10 - 10) + (13 - 10) + (14 - 10)
* Index 13:     (13 - 1) + (13 - 3) + (13 - 7) + (13 - 10) + (13 - 13) + (14 - 13)
* Index 14:     (14 - 1) + (14 - 3) + (14 - 7) + (14 - 10) + (14 - 13) + (14 - 14)

In the above bulleted list, in every line one thing is common i.e., (temp[i] - temp[i])  ------> eq (1)

If we observe carefully, in every line there are some elements(possibly 0) before eq (1) and some elements(possibly 0) after eq (1).
A fixed pattern is being followed before and after eq (1).

**Before eq (1):**   (temp[i] - x)

**After eq (1):**      (x - temp[i]) 

Now compute,
**after = (temp.size() - 1 - i)**  *------> No.of elements present in temp array after temp[i]*
**before = i**    *------------------------> No.of elements present in temp array before temp[i]*

Sum of Intervals = (Computation before eq (1) + Computation after eq (1))

**Computation before eq (1):**
before * temp[i] - (sum of all elements from index 0 to (i-1) in temp array. -> we can get this from prefix sum array = pre[i-1]).

**Computation after eq (1):**
(sum of all elements from (i+1) to (temp.size()-1). -> we can get this from prefix sum array = (pre[temp.size()-1] - pre[i])) - after*temp[i].


**Implementation:**
```
class Solution {
public:
    vector<long long> getDistances(vector<int>& A) 
    {
        int n = A.size();
        
        unordered_map<int,vector<long long>> m;
        for(int i=0;i<n;i++)
        {
            m[A[i]].push_back(i);
        }
        
        vector<long long> res(n);
        
        for(auto j:m)
        {
            vector<long long> temp = j.second;
            int len = temp.size();
            
            vector<long long> pre(len, 0);
            
            pre[0] = temp[0];
            for(int i=1;i<len;i++)
            {
                pre[i] = pre[i-1] + temp[i];
            }
            
            for(int i=0;i<len;i++)
            {
                long long count = 0;
                long long after = (len - 1 - i), before = i;
                
                count = (pre[len-1] - pre[i]) - (after*temp[i]);   //Computation After
                if(i > 0) count += (before*temp[i] - (pre[i-1]));  //Computation Before
                
                res[temp[i]] = count;
            }
        }
        
        return res;
    }
};
```
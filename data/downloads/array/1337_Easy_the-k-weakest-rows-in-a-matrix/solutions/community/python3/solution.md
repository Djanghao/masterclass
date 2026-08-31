# [C++, Python3] No Heap, No BS, Simple Sort 99.20%

**Author:** arnabsen1729
**Votes:** 288
**Link:** [https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/solutions/1201679/](https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/solutions/1201679/)

---

# Explanation:
If you have a vector of vectors and you use the sort functionality it sorts first on the basis of first element, if there is a tie then it is broken on the basis of the second element, and so on. We can use this property to our advantage to come with a solution. Now there is another condition which is if the two arrays are same, then the tie is broken based on the index i.e if `mat[i] == mat[j]` then `i` is weaker than `j` if `i<j` else the opposite. So, what we can do is **append the index at the end.** Then simple sorting will automatically take care of that second condition. 

So, when our given matrix was:
```
  index    array
	0 -> [1,1,0,0,0],
	1 -> [1,1,1,1,0],
	2 -> [1,0,0,0,0],    
	3 -> [1,1,0,0,0],
	4 -> [1,1,1,1,1]

After mutating:

           index
            ||
            \\/
[1,1,0,0,0, 0],
[1,1,1,1,0, 1],
[1,0,0,0,0, 2],    
[1,1,0,0,0, 3],
[1,1,1,1,1, 4]
 ```
 
 Hence if the first `n` (size of each array) elements of each array are same, the tie will be broken by the sort function using the last element, which in our case is the index. 

# Code::

**C++:** [ Runtime: **12ms** (67.48% faster) Memory: **10.5 MB** (less than 74.98% )  ]


```cpp
class Solution {
public:
    vector<int> kWeakestRows(vector<vector<int>>& mat, int k) {
        int n=mat[0].size();
        for(int i=0; i<mat.size(); i++){
            mat[i].push_back(i);
        }
        sort(mat.begin(), mat.end());
        vector<int> ans(k);
        for(int i=0; i<k; i++){
            ans[i]=mat[i][n];            
        }
        return ans;
    }
};
```

**Python3** [ Runtime: **96 ms** (99.20% faster) Memory: **14.7 MB** ( less than 14.66%)  ]

```python
class Solution:
	def kWeakestRows(self, mat: List[List[int]], k: int) -> List[int]:
		m = len(mat)
		rows = sorted(range(m), key=lambda i: (mat[i], i))
		del rows[k:]
		return rows
```

Thanks to [@rcomesan](https://leetcode.com/rcomesan) for an even elegant Python solution. Here, we don't even have to mutate the matrix. We can just specify the key to be a tuple of size 2. "The first component of the tuple is the row itself (e.g. [1,1,0,0]), and the second one is the index".


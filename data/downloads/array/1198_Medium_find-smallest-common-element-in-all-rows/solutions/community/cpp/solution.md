# Easy Solution O(1) space complexity

**Author:** Divyansh--
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-smallest-common-element-in-all-rows/solutions/1878390/](https://leetcode.com/problems/find-smallest-common-element-in-all-rows/solutions/1878390/)

---

```
int smallestCommonElement(vector<vector<int>>& mat) {
        vector<int> v(10005,0);
        int m = mat.size();
        int n = mat[0].size();
        for(int i=0;i<m;i++)
        {
            for(int j=0;j<n;j++)
                v[mat[i][j]]++;
        }
       for(int i=0;i<10005;i++)
        {
            if(v[i]==m)
                return i;
        }
        return -1;
    }
	```
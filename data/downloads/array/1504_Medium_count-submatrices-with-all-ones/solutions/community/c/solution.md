# C++ Solution , Similar types of questions included along with solution.

**Author:** jaskainth22
**Votes:** 76
**Link:** [https://leetcode.com/problems/count-submatrices-with-all-ones/solutions/722594/](https://leetcode.com/problems/count-submatrices-with-all-ones/solutions/722594/)

---

1504. Count Submatrices With All Ones
```
class Solution {
public:
    static int fun(vector<int>&v)
    {
        int length = 0;
        int ans = 0;
        for(int i=0;i<v.size();i++)
        {
            if(v[i] == 0)
                length = 0;
            else
                length++;
            ans = ans + length;
        }
        return ans;
    }
    int numSubmat(vector<vector<int>>& mat) {
        int m = mat.size();
        int n = mat[0].size();
        int sum = 0;
        for(int i=0;i<m;i++)
        {
            vector<int>v(n,1);
            for(int j=i;j<m;j++)
            {
                for(int k=0;k<n;k++)
                    v[k] = v[k]&mat[j][k];
                sum += fun(v);
            }
        }
        return sum;
    }
};
```

Try these questions for better understanding of above approach
1) 85. Maximal Rectangle
2) 363. Max Sum of Rectangle No Larger Than K
3) 1074. Number of Submatrices That Sum to Target


Solution of above questions:


 85. Maximal Rectangle
```
class Solution {
public:
    int maximalRectangle(vector<vector<char>>& mat) {
        int m = mat.size(); //rows
        if(m == 0)
            return 0;
        int n = mat[0].size(); //cols
        int ans = 0;
        for(int i=0;i<m;i++)
        {
            vector<int>v(n,1);
            for(int j=i;j<m;j++)
            {
                for(int k=0;k<n;k++)
                    v[k] = v[k]&mat[j][k];
                int len = 0;
                int max_len = 0;
                for(int k=0;k<n;k++)
                {
                    if(v[k] == 0)
                        len = 0;
                    else
                        len++;
                    max_len = max(max_len,len);
                }
                ans = max(ans,max_len*(j-i+1));
            }
        }
        return ans;
    }
};
```


363. Max Sum of Rectangle No Larger Than K
```
class Solution {
public:
    static int fun(vector<int>&v,int k)
    {
        set<int>st;
        st.insert(0);
        int max_sum = INT_MIN;
        int cSum = 0;
        for(int i=0;i<v.size();i++)
        {
            cSum = cSum + v[i];
            set<int>::iterator itr = st.lower_bound(cSum-k);
            if(itr!=st.end())
                max_sum = max(max_sum,cSum - *itr);
            st.insert(cSum);
        }
        return max_sum;
    }
    int maxSumSubmatrix(vector<vector<int>>& mat, int t) {
        int n = mat.size(); 
        int m = mat[0].size();  
        int ans = INT_MIN;
        for(int i=0;i<m;i++)
        {
            vector<int>v(n,0);
            for(int j=i;j<m;j++)
            {
                for(int k=0;k<n;k++)
                    v[k] = v[k] + mat[k][j];
                int x = fun(v,t);
                ans = max(ans,x);
            }
        }
        return ans;
    }
};
```

1074. Number of Submatrices That Sum to Target

```
class Solution {
public:
    static int fun(vector<int>&v,int k)
    {
        unordered_map<int,int>mp;
        int sum = 0;
        int cnt = 0;
        for(int i=0;i<v.size();i++)
        {
            sum = sum + v[i];
            if(sum == k)
            {
                cnt++;
            }
            if(mp.find(sum-k) != mp.end())
                cnt = cnt + mp[sum-k];
            mp[sum]++;
        }
        return cnt;
    }
    int numSubmatrixSumTarget(vector<vector<int>>& mat, int target) {
        int m = mat.size(); //rows
        int n = mat[0].size();  //cols
        int ans = 0;
        for(int i=0;i<m;i++)
        {
            vector<int>v(n,0);
            for(int j=i;j<m;j++)
            {
                for(int k=0;k<n;k++)
                {
                    v[k] = v[k] + mat[j][k];
                }
                ans = ans + fun(v,target);
            }
        }
        return ans;
    }
};
```


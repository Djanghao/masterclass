# C++ || Sliding Window || Linear Time and Constant Space Complexity

**Author:** thearifshaikh
**Votes:** 38
**Link:** [https://leetcode.com/problems/defuse-the-bomb/solutions/948726/](https://leetcode.com/problems/defuse-the-bomb/solutions/948726/)

---

```
class Solution {
public:
    vector<int> decrypt(vector<int>& code, int k) 
    {
        int n=code.size();
        vector<int>res(n,0);
        
        if(k==0)
            return res;
        
		// Taking a window of k elements
		
		// First window will be from index 1 to index k
        int start=1,end=k;
        if(k<0)
        {
		   // if k is negative then the first window will be the last k elements
            k*=-1;
            start=n-k;
            end=n-1;
        }
        int sum=0;
        // maintaining first window
        for(int i=start;i<=end;i++)
            sum+=code[i];
        
        for(int i=0;i<n;i++)
        {
            res[i]=sum;
            // sliding the window 
            sum-=code[(start++)%n];
            sum+=code[(++end)%n];
        }
        
        return res;
        
    }
};
```
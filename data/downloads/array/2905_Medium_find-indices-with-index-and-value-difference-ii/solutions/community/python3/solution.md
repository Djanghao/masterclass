# Easy Video Solution (Brute->Optimal) 🔥 || Suffix Max-Min 🔥 || C++,JAVA,PYTHON

**Author:** ayushnemmaniwar12
**Votes:** 16
**Link:** [https://leetcode.com/problems/find-indices-with-index-and-value-difference-ii/solutions/4170112/](https://leetcode.com/problems/find-indices-with-index-and-value-difference-ii/solutions/4170112/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Try to think about prefix and suffix

# ***Detailed and easy Video Solution***

https://youtu.be/neaCFDgBBn8

# Approach
<!-- Describe your approach to solving the problem. -->
The code finds indices in an array where the absolute difference between elements is at least 'value' and the distance between indices is at least 'index.' It optimizes by precomputing maximum and minimum values to reduce computation. The result is a pair of indices meeting the criteria.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N+N)->O(N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N)
# Brute Force

```C++ []
class Solution {
public:
    vector<int> findIndices(vector<int>& v, int index, int value) {
        int n=v.size();
        vector<int>ans(2,-1);
        for(int i=0;i<n;i++)
        {
            for(int j=i;j<n;j++)
            {
                if(abs(i-j)>=index && abs(v[i]-v[j])>=value)
                {
                    ans[0]=i;
                    ans[1]=j;
                    break;
                }
            }
        }
        return ans;
    }
};
```
```python []
class Solution:
    def findIndices(self, v, index, value):
        n = len(v)
        ans = [-1, -1]
        for i in range(n):
            for j in range(i, n):
                if abs(i - j) >= index and abs(v[i] - v[j]) >= value:
                    ans[0] = i
                    ans[1] = j
                    break
        return ans

if __name__ == "__main__":
    solution = Solution()
    v = [1, 2, 3, 4, 5]
    index = 2
    val = 2
    result = solution.findIndices(v, index, val)
    print(result)

```
```java []
    public int[] findIndices(int[] v, int index, int value) {
        int n = v.length;
        int[] ans = new int[]{-1, -1};
        for (int i = 0; i < n; i++) {
            for (int j = i; j < n; j++) {
                if (Math.abs(i - j) >= index && Math.abs(v[i] - v[j]) >= value) {
                    ans[0] = i;
                    ans[1] = j;
                    break;
                }
            }
        }
        return ans;
    }
```


# Optimal Code
```C++ []
class Solution {
public:
    vector<int> findIndices(vector<int>& v, int index, int value) {
        int n=v.size();
        vector<pair<int,int>>res(n);
        res[n-1].first=v[n-1];
        res[n-1].second=v[n-1];
        for(int i=n-2;i>=0;i--)
        {
            res[i].first=max(v[i],res[i+1].first);
            res[i].second=min(v[i],res[i+1].second);
        }
        vector<int>ans(2,-1);
        for(int i=0;i<n;i++)
        {
            int j=i+index;
            if(j<n && (abs(v[i]-res[j].first)>=value || abs(v[i]-res[j].second)>=value))
            {   
                
                ans[0]=i;
                for(int k=j;k<n;k++)
                {   
                    
                    if(abs(v[i]-v[k])>=value)
                    {
                        ans[1]=k;
                        break;
                    }
                }
                break;
            }
        }
        return ans;
    }
};
```
```python []
    def findIndices(self, v, index, value):
        n = len(v)
        maxValues = [0] * n
        minValues = [0] * n
        ans = [-1, -1]

        maxValues[n - 1] = v[n - 1]
        minValues[n - 1] = v[n - 1]

        for i in range(n - 2, -1, -1):
            maxValues[i] = max(v[i], maxValues[i + 1])
            minValues[i] = min(v[i], minValues[i + 1])

        for i in range(n):
            j = i + index
            if j < n and (abs(v[i] - maxValues[j]) >= value or abs(v[i] - minValues[j]) >= value):
                ans[0] = i
                for k in range(j, n):
                    if abs(v[i] - v[k]) >= value:
                        ans[1] = k
                        break
                break

        return ans
```
```java []
    public int[] findIndices(int[] v, int index, int value) {
        int n = v.length;
        int[] maxValues = new int[n];
        int[] minValues = new int[n];
        int[] ans = new int[]{-1, -1};

        maxValues[n - 1] = v[n - 1];
        minValues[n - 1] = v[n - 1];

        for (int i = n - 2; i >= 0; i--) {
            maxValues[i] = Math.max(v[i], maxValues[i + 1]);
            minValues[i] = Math.min(v[i], minValues[i + 1]);
        }

        for (int i = 0; i < n; i++) {
            int j = i + index;
            if (j < n && (Math.abs(v[i] - maxValues[j]) >= value || Math.abs(v[i] - minValues[j]) >= value)) {
                ans[0] = i;
                for (int k = j; k < n; k++) {
                    if (Math.abs(v[i] - v[k]) >= value) {
                        ans[1] = k;
                        break;
                    }
                }
                break;
            }
        }

        return ans;
    }
```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you *\uD83D\uDE00


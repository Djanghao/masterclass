# [C++] | 100% Faster | Binary Search | Easy Solution

**Author:** 007_abhishek
**Votes:** 14
**Link:** [https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/solutions/2028210/](https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/solutions/2028210/)

---

* f(x,y) return some integer solved by hidden formulae like `f(x,y)=x+y` , `f(x,y)=x*y`
* f(x, y) < f(x + 1, y) 
* f(x, y) < f(x, y + 1)
* It is Strictly greater function means `f(1,1)<f(1,2)` and `f(1,1)<f(2,1)`

1. **C++ Solution Using Binary Search**
**O(NLog(N))**
```

class Solution {
public:
    vector<vector<int>> findSolution(CustomFunction& customfunction, int z) {
        vector<vector<int>>ans;
        
        for(int i=1;i<=1000;i++)
        {
            int left=1,right=1000;
            
            while(left<=right)
            {
                int mid=(left+right)/2;
                if(customfunction.f(i,mid)==z)
                {
                    vector<int>temp;
                    temp.push_back(i);
                    temp.push_back(mid);
                    ans.push_back(temp);
                    break;
                }
                else if(customfunction.f(i,mid)>z)
                    right=mid-1;
                else
                    left=mid+1;
            }
            if(customfunction.f(i,1)>z)
                break;
        }
        return ans;
    }
};

```




2. **C++ Solution Without Using Binary Search**
**O(N^2) in Worst Case**

```

class Solution {
public:
    vector<vector<int>> findSolution(CustomFunction& customfunction, int z) {
        vector<vector<int>>ans;
        
        for(int i=1;i<=1000;i++)
        {
            for(int j=1;j<=1000;j++)
            {
                vector<int>temp;
                if(customfunction.f(i,j)==z)
                {
                    temp.push_back(i);
                    temp.push_back(j);
                    ans.push_back(temp);
                }
                else if(customfunction.f(i,j)>z)
                    break;
            }
        }
        return ans;
    }
};
```

**If YOU Find it helpful Kindly UPVOTE**


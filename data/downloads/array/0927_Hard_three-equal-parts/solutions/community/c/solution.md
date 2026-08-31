# ✅   Three Equal Parts || C++ Easy Solution || With Approach

**Author:** Maango16
**Votes:** 38
**Link:** [https://leetcode.com/problems/three-equal-parts/solutions/1343092/](https://leetcode.com/problems/three-equal-parts/solutions/1343092/)

---

# **APPROACH**
1. Store every 1's position in a vector.
2. It is easy to know the first 1's position of three parts as [x, y, z].
3. Then verify three parts whether equal

***NOTE:***
* If in cases where number of ones are not a multiple of 3, there will be no case of equal parts so return {-1,-1}
```
class Solution {
public:
    vector<int> threeEqualParts(vector<int>& arr) 
    {
        int n = arr.size() ;
        vector<int> one ;
        for(int i = 0 ; i < n ; i++)
        {
            if(arr[i])
            {
                one.push_back(i) ;
            }
        }
        int cnt = one.size() ;
        if(cnt == 0)
        {
            return {0 , n - 1} ;
        }
        if(cnt%3)          //IF NUMBER OF ONES IS NOT A MULTIPLE OF 3
        {
            return {-1 , -1} ;
        }
        int s = one[0] , t = one[cnt/3] , u = one[(cnt/3)*2] ;
        while(u < n && arr[s] == arr[t] && arr[s] == arr[u])
        {
            s++ ;
            t++ ;
            u++ ;
        }
        if(u == n)
        {
            return {s - 1 , t} ;
        }
        return {-1 , -1} ;
    }
};
```
**Time Complexity:  O(n)**
**Space Complexity:  O(n)**
# **Update:**
This is the general approach once we know that number of ones are a multiple of three -->
We can form intervals for `s , t & u` let's say, `[i1, j1], [i2, j2], [i3, j3]` 
__If there is only 3 ones, then this interval length will be one__
So the **zeroes after "one, on the position of u"** *let's assume z* , must be included in each part (i.e. in s & t)
Making the new intervals, `[i1, j1+z] & [i2, j2+z]` for s & t respectively
If all this is actually possible, then the final answer is **[j1+z , j2+z+1].**
Hope this helps
# C++ Binary Search Approach [Runtime: 0ms, Faster than 100%]

**Author:** iamswetank
**Votes:** 101
**Link:** [https://leetcode.com/problems/sqrtx/solutions/553452/](https://leetcode.com/problems/sqrtx/solutions/553452/)

---

As stated this approach gives:
Runtime: 0ms.
Faster than 100% of C++ online submission (*as of date posted*).

**Time Complexity:** O(logn) | due to binary search using while loop.
**Space Complexity:** O(1) | as only 4 variables are initialized at the beginning. Which is constant irrespective of given input.

```
long long s=0, e=x, ans, mid;   //long long due to some of test cases overflows integer limit.
        while(s<=e){             
            mid=(s+e)/2;
            if(mid*mid==x) return mid;     //if the 'mid' value ever gives the result, we simply return it.
            else if(mid*mid<x){             
                s=mid+1;        //if 'mid' value encounterted gives lower result, we simply discard all the values lower than mid.
                ans=mid;        //an extra pointer 'ans' is maintained to keep track of only lowest 'mid' value. 
            }
            else e=mid-1;       //if 'mid' value encountered gives greater result, we simply discard all the values greater than mid. 
        }
        return ans;   

```
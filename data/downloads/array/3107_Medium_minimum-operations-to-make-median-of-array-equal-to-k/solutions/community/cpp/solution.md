# Easy Video solution for (Updated question description) ✅ || C++ || Math

**Author:** ayushnemmaniwar12
**Votes:** 30
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-median-of-array-equal-to-k/solutions/4985644/](https://leetcode.com/problems/minimum-operations-to-make-median-of-array-equal-to-k/solutions/4985644/)

---

# Video Solution based on assumptions


https://youtu.be/8JRhXiNYCok

# Somehow I submitted but this post is to help other participants


I felt question was incomplete, we need to assume if total number of records are even then median should be calculated based on below assumptions

# *# Number of records are even*

# Assumption:
n=number of records.
m=n/2

# Reality:

1.Arrange the data in ascending or descending order.
2.Identify the middle two values (n/2) and [(n/2) +.
3.Take the average of the middle two values. 

The median of a set of even numbers is the average of the two middle values. For example, the median of 3, 5, 7, and 9 is (5+7)/2 = 6.

# Try to report it 

# Code
```
class Solution {
public:
    long long solve(vector<int>&v,int k,int idx) {
        int n=v.size();
        long long ans=0;
        int m=v[idx];
            if(m<k) {
                ans=ans+k-m;
                for(int i=idx+1;i<n;i++) {
                    if(v[i]<=k) {
                        ans=ans+k-v[i];
                    }
                    else
                        break;
                }
            }
            else if(m>k) {
                ans=ans+m-k;
                for(int i=idx-1;i>=0;i--) {
                    if(v[i]>=k) {
                        ans=ans+v[i]-k;
                    }
                    else
                        break;
                }
            }
        return ans;
    }
    long long minOperationsToMakeMedianK(vector<int>& v, int k) {
        int n=v.size();
        long long ans=0;
        sort(v.begin(),v.end());
        if(n%2!=0) {
            ans=solve(v,k,n/2);
                
        } else {
            ans=solve(v,k,n/2);
            
        }
        return ans;
    }
};
```
# ✔ALL U Want |C++|O(n^4)-->O(n^3)-->O(n^2)✔

**Author:** Xahoor72
**Votes:** 17
**Link:** [https://leetcode.com/problems/count-special-quadruplets/solutions/3114964/](https://leetcode.com/problems/count-special-quadruplets/solutions/3114964/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Since n is less we can do brute force and traverse by using 4 loops and checking  every quadruplet.But takes O(n^4) time and O(1) space
After that we can traverse from back and take a map and store elemnts in that one by one after checking the conditions . Back traverse is beacuse we want the order right i.e a<b<c<d. Will take O(n^3) but O(N) space.
Also we can do this in O(n^2) and O(N) space by checking two elements ata  time .i.e arr[i]+arr[j]  and arr[k]-arr[d]
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:Max O$$(n^4)$$ Avg: $$O(n^3)$$ Best $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:Min $$O(1)$$  Avg:$$O(N)$$   Max $$O(N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
**O(n^4) and O(1) solution**
```
int countQuadruplets(vector<int>& arr) {
        int c=0,n=arr.size();
         for(int i=0;i<n-3;i++){
             for(int j=i+1;j<n-2;j++){
                 for(int k=j+1;k<n-1;k++){
                     for(int l=k+1;l<n;l++){
                         if(arr[i]+arr[j]+arr[k]==arr[l])c++;
                     }
                 }
             }
         }
         return c;
    }
```
**O(n^2) and O(N) solution**
```
int countQuadruplets(vector<int>& arr) {
        int c=0,n=arr.size();
        map<int,int>mp;
       
         for(int i=n-1;i>=2;i--){
             for(int j=i-1;j>=1;j--){
                 for(int k=j-1;k>=0;k--){  
                     if(mp[arr[i]+arr[j]+arr[k]])
                         c+=mp[arr[i]+arr[j]+arr[k]];
                    
                 }
             }
             mp[arr[i]]++;
             
         }
         return c;
    }
```
**O(n^2) and O(N) solution**
```
class Solution {
public:
    int countQuadruplets(vector<int>& arr) {
        int c=0,n=arr.size();
        map<int,int>mp;
         for(int i=1;i<n;i++){
            for(int j=0;j<i;j++){
                mp[arr[i]+arr[j]]++;
            }
            for(int k=i+2;k<n;k++){
                c+=mp[arr[k]-arr[i+1]];
            }
         }
         return c;
    }
};
```
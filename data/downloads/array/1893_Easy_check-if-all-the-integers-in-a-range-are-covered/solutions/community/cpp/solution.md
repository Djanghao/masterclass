# ALL APPROACHES|Sorting|Hash Map|Sweep Line|Prefix Sum|C++

**Author:** Xahoor72
**Votes:** 16
**Link:** [https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/solutions/3136155/](https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/solutions/3136155/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Actually brute force or using map makes it an easy problem but if constraints are big then its definitely not an easy . 
So first two appraoches given can be easily implemented but sweep line and prefix sum needs some observation . For that u have to refer this article in which we will learn about difference array and then using prefix sum how we can answer the range queries in O(1) time .
[CLICK](https://medium.com/@ishankkatiyar162/understanding-difference-array-the-underrated-constant-time-range-update-algorithm-part-1-e432ada7f1f5) here to know about sweep line algorithm.
# Approach
<!-- Describe your approach to solving the problem. -->
**Approach 1:Hash Map** : Simpy check if all the numbers are presnet in map from left to right
**Approach 2: Sorting :** First  sort the ranges and then keep track of low  and update that, then check  when right will encounter .
**Approach 3: Sweep line + Prefix sum**
**Approach 4:** Sweep line (actually same as  appraoch 3)
# Complexity
- Time complexity:$$O(N) $$where N=ranges.size()
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(M)$$ where M is max_element of ranges
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
**Using Hash Map**
```
bool isCovered(vector<vector<int>>& ranges, int left, int right) {
        unordered_map<int,int>mp;
       for(auto x:ranges){
           for(int i=x[0];i<=x[1];i++)mp[i]++;
       }
       
       for(int i=left;i<=right;i++){
           if(mp.find(i)==mp.end())return false;
       }
       return true;
    }
```
**Uisng Sorting**
```
bool isCovered(vector<vector<int>>& ranges, int left, int right) {
        unordered_map<int,int>mp;
        sort(ranges.begin(),ranges.end());
       for(auto x:ranges){
           if(x[0]<=left and x[1]>=right)return true;
           else if(x[0]<=left and x[1]<right)left=max(x[1]+1,left);
       }
       return false;
    }
```
**Using Prefix Sum + Sweep Line**
```
class Solution {
public:
    bool isCovered(vector<vector<int>>& ranges, int left, int right) {
        int n=ranges.size();
        int diff[52]={0};
        for(auto x:ranges){
            diff[x[0]]++;
            diff[x[1]+1]--;
        }
        vector<int>pref(52,0);
        for(int i=1;i<52;i++)pref[i]=pref[i-1]+diff[i];
        for(int i=left;i<=right;i++)if(pref[i]<=0)return false;
        return true;
        
    }
};
```
**Using Sweep Line wihtout prefix sum Array**
```
 bool isCovered(vector<vector<int>>& ranges, int left, int right) {
        int n=ranges.size();
        int diff[52]={0};
        for(auto x:ranges){
            diff[x[0]]++;
            diff[x[1]+1]--;
        }
        int pref=0;
        for(int i=1;i<=right;i++){
            pref+=diff[i];
            if(i>=left and pref==0)return false;
        }
        return true;
        
    }
```
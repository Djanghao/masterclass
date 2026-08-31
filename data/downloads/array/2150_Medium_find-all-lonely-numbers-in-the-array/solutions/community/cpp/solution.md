# C++ || Hashmap || Clean and easy to understand

**Author:** nidhiii_
**Votes:** 24
**Link:** [https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/solutions/1716675/](https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/solutions/1716675/)

---



(Honestly, the first thing that striked me was sorting , but in a second I realised that it needs frequency of all the numbers and hence we are using hashmap) 

We are storing the frequency of each number in a hashmap and in another loop we are simply checking whether that number is lonely or not by using the two conditions:
1. Count of that number is 1
2. No adjacent digit i.e n+1 and n-1 is present in our array.


Time complexity: **O(n),** n=number of elements in the array
Space complexity: **O(P)**, P= number of unique elements in the array.

**Code**
```
class Solution {
public:
    vector<int> findLonely(vector<int>& nums) {
        unordered_map<int,int>mp;
        vector<int>ans;
        for(int n:nums) mp[n]++;   // storing the frequency of all the numbers in the array
        for(pair<int,int>n:mp){
            int x=n.first,y=n.second;
            if(y==1 and mp.count(x+1)==0 and mp.count(x-1)==0){   // if count of that number is 1 and no adjacent number is present then it is a lonely number 
                ans.push_back(x);
            }
        }
        return ans;
    }
};
```
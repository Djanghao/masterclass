# Explained - using map || Very Simple & Easy to Understand Solution

**Author:** kreakEmp
**Votes:** 26
**Link:** [https://leetcode.com/problems/find-the-distinct-difference-array/solutions/3495134/](https://leetcode.com/problems/find-the-distinct-difference-array/solutions/3495134/)

---

<b> Up vote if you like the solution </b>

# Approach
Take two map, one to have the prefix indexed (mp) & second one is suffix indexed (rmp ).
First evaluate the suffix mapping of all element by traversing and indexing all elements
Then on second traverse start mapping the prefix index and removing the same from suffix mapping.
    - Need to erase the index if its occurance is zero.
Take diff of the size of the maps & store in to the ans array.
        
        
```
    vector<int> distinctDifferenceArray(vector<int>& nums) {
        vector<int> ans;
        unordered_map<int,int> mp, rmp;
        for(auto n: nums){ rmp[n]++; }
        for(auto n: nums){
            mp[n]++;
            rmp[n]--;
            if(rmp[n] == 0) rmp.erase(n);
            ans.push_back(mp.size() - rmp.size());
        }
        return ans;
    }
```

<b>Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted
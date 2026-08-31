# Explained using map || Very simple & easy to understand solution

**Author:** kreakEmp
**Votes:** 24
**Link:** [https://leetcode.com/problems/find-maximum-number-of-string-pairs/solutions/3677578/](https://leetcode.com/problems/find-maximum-number-of-string-pairs/solutions/3677578/)

---

#### Upvote if you like the solution
# Approach
1. Take a map with seen string as the index and its count as its value.
2. Iterate the words vector and check if its reverse exist in the map or not. 
3. If exist in the map then update the ans and decrement the map value as the we have considered this value for pairing.

# Code
```
    int maximumNumberOfStringPairs(vector<string>& words) {
        int ans = 0;
        unordered_map<string, int> mp;
        for(auto w: words){
            string r = w;
            reverse(r.begin(), r.end());
            if(mp[r] > 0){ ans++; mp[r]--; }
            else mp[w]++;
        }
        return ans;
    }
```

<b> Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted
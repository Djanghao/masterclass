# Find freq and take xor for freq == 2

**Author:** kreakEmp
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/solutions/5207092/](https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/solutions/5207092/)

---



# Approach 
- Find frequency of each item by updating in a map
- Then check the freq, if equals to 2 then take xor with ans

# Complexity
- Time complexity : O(N)
- Space complexity : O(N)

```
int duplicateNumbersXOR(vector<int>& nums) {
    int ans = 0;
    unordered_map<int, int> freq;
    for(auto n: nums){ freq[n]++; }
    for(auto [k,v]: freq){
        if(v == 2) ans = ans ^ k;
    }
    return ans;

}
```


---

<b>Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---
# Brute-force solution || Very simple and easy to understand solution

**Author:** kreakEmp
**Votes:** 9
**Link:** [https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/solutions/4218771/](https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/solutions/4218771/)

---



# Approach
- Simply iterate over eash subarray and count the distict element in each sub array
- For this we start with ith and end at jth index 

```
int sumCounts(vector<int>& nums) {
    int ans = 0, count = 0;
    for(int i = 0; i < nums.size(); ++i){
        unordered_map<int, int> ump; count = 0;
        for(int j = i; j < nums.size(); ++j){
            ump[nums[j]]++;
            if(ump[nums[j]] == 1) count++;
            ans += count*count;
        }
    }
    return ans;
}
```

---


<b>Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---
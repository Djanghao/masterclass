# Simple Brute-force & optimal solution

**Author:** kreakEmp
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-the-number-of-good-pairs-i/solutions/5208937/](https://leetcode.com/problems/find-the-number-of-good-pairs-i/solutions/5208937/)

---

Here is the better solution then bruteforce approach : https://leetcode.com/problems/find-the-number-of-good-pairs-ii/solutions/5208919/check-all-factors-of-nums1/

# Code
```
int numberOfPairs(vector<int>& nums1, vector<int>& nums2, int k) {
    int ans = 0;
    for(int i = 0; i < nums1.size(); ++i){
        for(int j = 0; j < nums2.size(); ++j){
            int div = nums2[j]*k;
            if(nums1[i]%div == 0) ans++;
        }
    }
    return ans;
}
```



---

<b>Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---
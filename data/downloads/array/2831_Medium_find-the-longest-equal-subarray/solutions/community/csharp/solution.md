# C# Sliding Window + Two Pointers

**Author:** enze_zhang
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-longest-equal-subarray/solutions/3934105/](https://leetcode.com/problems/find-the-longest-equal-subarray/solutions/3934105/)

---

# Code
```
public class Solution {
    const int N = (int)1e5 + 1;
    public int LongestEqualSubarray(IList<int> nums, int k) {
        Dictionary<int, int> map = new();
        foreach(var n in nums) map[n] = 1;
        
        Dictionary<int, List<int>> rec = new();
        for(int i = 0; i < nums.Count; i++){
            int n = nums[i];
            if(!rec.ContainsKey(n)) rec[n] = new();
            rec[n].Add(i);
        }
        
        int owo = 1;
        foreach(var qwq in rec.Values){
            int l = 1, r = 1, cnt = 1, dis = 0;
            while(r < qwq.Count){
                dis += qwq[r] - qwq[r - 1] - 1; 
                cnt++;
                
                while(l <= r && dis > k){
                    dis -= qwq[l] - qwq[l - 1] - 1;
                    cnt--;
                    l++;
                }
                owo = Math.Max(cnt, owo);
                r++;
            }
        }
        return owo;
    }
}
```
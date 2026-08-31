# C# beats 100% Binary Search + Prefix Sum

**Author:** enze_zhang
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-space-wasted-from-packaging/solutions/2698815/](https://leetcode.com/problems/minimum-space-wasted-from-packaging/solutions/2698815/)

---

# Complexity
- Time complexity: O(nlogn+llogl+llogn)

- Space complexity: O(n) 

# Code
```
public class Solution {
    const int mod = (int)1e9 + 7;
    public int MinWastedSpace(int[] packages, int[][] boxes) {
        Array.Sort(packages);
        for(int i = 0; i < boxes.Length; i++)
            Array.Sort(boxes[i]);
        
        int max = packages.Max();
        List<int[]> list = new();
        for(int i = 0; i < boxes.Length; i++){
            if(boxes[i][boxes[i].Length - 1] >= max)
                list.Add(boxes[i]);
        }
        if(list.Count == 0) return -1;

        long[] cum = new long[packages.Length];
        cum[0] = packages[0];
        for(int i = 1; i < packages.Length; i++)
            cum[i] = cum[i - 1] + packages[i];

        boxes = list.ToArray();
        long ans = long.MaxValue;
        foreach(var box in boxes){
            int right = 0; long tot = 0;
            int pre = 0;
            while(right < box.Length){
                int l = 0, r = packages.Length;
                while(l < r){
                    int m = (r - l) / 2 + l;
                    if(packages[m] > box[right])
                        r = m;
                    else l = m + 1;
                }
                if(l != 0){
                    tot += (long)box[right] * (l - pre) - (cum[l - 1] - (pre == 0 ? 0 : cum[pre - 1]));
                    pre = l;
                }
                right++;
            }
            ans = Math.Min(ans, tot);
            ans %= mod;
        }
        return (int)ans;
    }
}
```
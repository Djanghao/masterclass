# Beats 100% + Video | Java C++ Python

**Author:** jeevankumar159
**Votes:** 8
**Link:** [https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/solutions/3761566/](https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/solutions/3761566/)

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/U5qFalTKDjk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

```
class Solution {
    public int longestSubsequence(int[] arr, int diff) {
        int [] diffArr = new int[40001];
        int ans = 1;
        for(int i : arr){
            diffArr[i+20000] = diffArr[i-diff+20000]+1;
            ans = Math.max(ans,diffArr[i+20000]);
        }
        return ans;
    }
}
```
```
class Solution {
public:
    int longestSubsequence(std::vector<int>& arr, int diff) {
        std::vector<int> diffArr(40001, 0);
        int ans = 1;
        for (int i : arr) {
            diffArr[i + 20000] = diffArr[i - diff + 20000] + 1;
            ans = std::max(ans, diffArr[i + 20000]);
        }
        return ans;
    }
};
```

```
class Solution:
    def longestSubsequence(self, arr: List[int], diff: int) -> int:
        diffArr = [0] * 40001
        ans = 1
        for i in arr:
            diffArr[i + 20000] = diffArr[i - diff + 20000] + 1
            ans = max(ans, diffArr[i + 20000])
        return ans
```
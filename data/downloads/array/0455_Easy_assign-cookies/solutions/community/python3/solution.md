# 🥇 Approach Explained ; ]

**Author:** karan_8082
**Votes:** 27
**Link:** [https://leetcode.com/problems/assign-cookies/solutions/4485003/](https://leetcode.com/problems/assign-cookies/solutions/4485003/)

---

# Intuition
For any `x` cookie size, try to satisfy the maximum possible greed `y` of left over children. `[y <= x] | GREED <= SIZE`

# Approach
Sort both the `GREED [ g ]` and `COOKIE SIZE [ s ]` array in descending order.
Now for some cookie size `s[j]`, we will satisfy the child with maximum greed that can be satisfied. `g[i] <= s[j]`

If some greed `g[i]` cannot be satisfied with left over cookie size, we skip the child. \uD83D\uDE2D\uD83D\uDE2D 

# Complexity
- Time complexity: O(N logN) : `n.logn for sorting, n for array traversal`

- Space complexity: O(N) : `Inbuilt sorting function`

``` C++ []
class Solution {
public:
    int findContentChildren(vector<int>& g, vector<int>& s) {
        sort(g.begin(), g.end());
        sort(s.begin(), s.end());
        int i = 0;
        for(int j=0; i<g.size() && j<s.size(); j++)
	        if(g[i]<=s[j]) i++;
        return i;
    }
};
```
``` Python []
class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        g.sort(reverse = True)
        s.sort(reverse = True)
        res, i , j = 0 ,0,0
        while i<len(g) and j<len(s):
            if g[i]<=s[j]:
                res+=1
                i+=1
                j+=1
            else:
                i+=1
        return res
```
``` JAVA []
class Solution {
    public int findContentChildren(int[] g, int[] s) {
        Arrays.sort(g);
        Arrays.sort(s);
        int i = 0;
        for(int j=0;i<g.length && j<s.length;j++)
	        if(g[i]<=s[j]) i++;
        return i;
    }
}
```
# ✅O(n log n) Time O(1) Space - C++/Java/Python/JS - Explained - Sorting

**Author:** lancertech6
**Votes:** 146
**Link:** [https://leetcode.com/problems/assign-cookies/solutions/4485308/](https://leetcode.com/problems/assign-cookies/solutions/4485308/)

---

![Screenshot 2024-01-01 083826.png](./images/0.png)

# YouTube Video Explanation:

<!-- [https://youtu.be/6L_25hyF14s](https://youtu.be/6L_25hyF14s) -->
<!-- **If you want a video for this question please write in the comments** -->

<!-- https://www.youtube.com/watch?v=ujU-jeO1v-k -->
https://youtu.be/ujU-jeO1v-k

**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 1100 Subscribers*
*Current Subscribers: 1058*

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To maximize the number of content children, we should try to assign cookies starting from the child with the highest greed factor. Sorting both the greed factors and cookie sizes in allows us to efficiently match larger cookies with children having higher greed factors.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Sort the arrays `g` (greed factors) and `s` (cookie sizes).
2. Initialize variables `maxNum`, `cookieIndex`, and `childIndex` to keep track of the count of content children, the current cookie index, and the current child index, respectively.
3. Iterate through the arrays, comparing the size of the current cookie (`s[cookieIndex]`) with the greed factor of the current child (`g[childIndex]`).
4. If the current cookie is large enough, increment `maxNum`, and move to the next smaller cookie and smaller child.
5. If the current cookie is not large enough, move to the next smaller child.
6. Continue this process until either the cookies or the children are exhausted.
7. Return the final count of content children (`maxNum`).

# Complexity
- Time complexity: The time complexity is O(n log n), where n is the length of the larger array between `g` and `s`, due to the sorting step.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: The space complexity is O(1).
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public int findContentChildren(int[] g, int[] s) {
        int cookiesNums = s.length;
        if(cookiesNums == 0)  return 0;
        Arrays.sort(g);
        Arrays.sort(s);

        int maxNum = 0;
        int cookieIndex = cookiesNums - 1;
        int childIndex = g.length - 1;
        while(cookieIndex >= 0 && childIndex >=0){
            if(s[cookieIndex] >= g[childIndex]){
                maxNum++;
                cookieIndex--;
                childIndex--;
            }
            else{
                childIndex--;
            }
        }

        return maxNum;
    }
}
```
```C++ []
class Solution {
public:
    int findContentChildren(vector<int>& g, vector<int>& s) {
        int cookiesNums = s.size();
        if(cookiesNums == 0)  return 0;
        sort(g.begin(), g.end());
        sort(s.begin(), s.end());

        int maxNum = 0;
        int cookieIndex = cookiesNums - 1;
        int childIndex = g.size() - 1;
        while(cookieIndex >= 0 && childIndex >=0){
            if(s[cookieIndex] >= g[childIndex]){
                maxNum++;
                cookieIndex--;
                childIndex--;
            }
            else{
                childIndex--;
            }
        }
        return maxNum;
    }
};
```
```Python []
class Solution(object):
    def findContentChildren(self, g, s):
        cookiesNums = len(s)
        if cookiesNums == 0:
            return 0
        g.sort()
        s.sort()

        maxNum = 0
        cookieIndex = cookiesNums - 1
        childIndex = len(g) - 1
        while cookieIndex >= 0 and childIndex >= 0:
            if s[cookieIndex] >= g[childIndex]:
                maxNum += 1
                cookieIndex -= 1
                childIndex -= 1
            else:
                childIndex -= 1

        return maxNum
        
```
```JavaScript []
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    const cookiesNums = s.length;
    if (cookiesNums === 0) return 0;
    g.sort((a, b) => a-b);
    s.sort((a, b) => a-b);

    let maxNum = 0;
    let cookieIndex = cookiesNums - 1;
    let childIndex = g.length - 1;
    while (cookieIndex >= 0 && childIndex >= 0) {
        if (s[cookieIndex] >= g[childIndex]) {
            maxNum++;
            cookieIndex--;
            childIndex--;
        } else {
            childIndex--;
        }
    }
    return maxNum;
};
```
![upvote.png](./images/1.png)

# [C++/JAVA/Python] O(1) complexity With Explanation

**Author:** Aditya00
**Votes:** 43
**Link:** [https://leetcode.com/problems/construct-the-longest-new-string/solutions/3677601/](https://leetcode.com/problems/construct-the-longest-new-string/solutions/3677601/)

---

# Intution
1. There is no requirement to match strings of the "AB" type with any specific string. These strings can be placed anywhere within the overall string as "ABABABAB.." .Hence we take all z type of strings
2. Combine "AA" and "BB" strings as "AABB" pairs.Thus,for the total length,  we choose the minimum number of occurrences between the two patterns and multiply it by 4, as the resulting composite string will have the pattern "AABB".
3. If there are remaining "AA" or "BB" strings, append a single occurrence at the end of the string. For example, with x=2, y=1, and z=0, the resulting string would be "AABBA".

# C++
```
class Solution {
public:
    int longestString(int x, int y, int z) {
        int mn = min(x,y);
        if (x == y)
            return (4 * x + z * 2);
        else 
            return (2 * mn + (mn + 1) * 2 + z * 2);
    }
};
```
# Java code 
```
class Solution {
    public int longestString(int x, int y, int z) {
        int mn = Math.min(x, y);
        if (x == y) {
            return (4 * x + 2 * z);
        } 
        else {
            return (2 * mn + (mn + 1) * 2 + 2 * z);
        }
    }
}
```
# Python Code 
```
class Solution:
    def longestString(self, x: int, y: int, z: int) -> int:
        mn = min(x, y)
        if x == y:
            return 4 * x + 2 * z
        else:
            return 2 * mn + (mn + 1) * 2 + 2 * z
```
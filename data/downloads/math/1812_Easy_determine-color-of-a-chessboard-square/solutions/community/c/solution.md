# JAVA || C++ || Python3 || SELF EXPLANATORY|| FASTER THAN 100%

**Author:** rajat_gupta_
**Votes:** 15
**Link:** [https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/1140576/](https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/1140576/)

---

# C++
**Runtime: 0 ms, faster than 100.00% of C++**
```
class Solution {
public:
    bool squareIsWhite(string coordinates) {
        return (coordinates[0] - 'a' + coordinates[1] - '1') % 2;
    }
};
```
# JAVA
**Runtime: 0 ms, faster than 100.00% of Java**
```
class Solution {
    public boolean squareIsWhite(String coordinates) {
        return (coordinates.charAt(0) - 'a'+ coordinates.charAt(1) - '0')%2==0 ;
    }
}
```
# Python3 
**Runtime: 44 ms, faster than 100.00% of Python3**
```
class Solution:
    def squareIsWhite(self, coordinates: str) -> bool:
        return (ord(coordinates[0])+ord(coordinates[1]))%2
```
**Feel free to ask any question in the comment section**.
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding 


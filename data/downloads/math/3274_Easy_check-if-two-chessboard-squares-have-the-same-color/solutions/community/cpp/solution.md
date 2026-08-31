# One liner solution

**Author:** kreakEmp
**Votes:** 15
**Link:** [https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/solutions/5718078/](https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/solutions/5718078/)

---

# Intuition
- As there are altering colors, there must be some relation when divided by 2 and that to its related to there sum of x and y.

# Approach
- Sum of the x and y naming notation should have same remainder as that of other one when divided with 2.
- Simply sum all and check if its divisible by 2 or not. If divisible then both are of same color.

# Complexity
- Time complexity: O(1)

- Space complexity: O(1)

# Code
### Solution - 1 :

```cpp []
bool checkTwoChessboards(string c1, string c2) {
    return (c1[0] + c1[1] + c2[0] + c2[1])%2 == 0;
}
```

### Solution - 2 : 

```cpp []
bool checkTwoChessboards(string c1, string c2) {
    return (c1[0] + c1[1])%2 == (c2[0] + c2[1])%2;
}
```


---

<b>Here is an article of my interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---
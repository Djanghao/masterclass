# C++ & Java || Check if 1 is possible or not else 2 - O(1) TC & O(1) SC || Simple conditions

**Author:** kreakEmp
**Votes:** 41
**Link:** [https://leetcode.com/problems/minimum-moves-to-capture-the-queen/solutions/4520734/](https://leetcode.com/problems/minimum-moves-to-capture-the-queen/solutions/4520734/)

---


# Approach
- Max possilbe move is 2. What ever is the configuration, queen can be captured in 2 moves
- Now when ever the two pieces are head to head and the third pice is not in between them then we can capture queen in 1 step. This can be possible in 4 different ways :
    1. rook and queen in same row
    2. rook and queen in the same column
    3. bishop and queen in the same anti- diagonal
    4. bishop and queen in the same diagonal
- Only check for above four cases along with the check that the 3rd piece is not in between two direct capture.

# Complexity
- Time complexity: O(1)

- Space complexity: O(1)

# C++
```
int minMovesToCaptureTheQueen(int a, int b, int c, int d, int e, int f) {
    if(a == e && !(a == c && d > min(b,f) && d < max(b,f) )) return 1; //rook and queen in same row
    if(b == f && !(b == d && c > min(a,e) && c < max(a,e) ))  return 1;  //rook and queen in the same column
    if(c + d == e + f && !(c + d == a + b && a > min(c , e) && a < max(c, e) )) return 1;  //bishop and queen in the same anti- diagonal
    if(c-d == e-f && !( c-d == a-b && a > min(c , e) && a < max(c, e) )) return 1;  // bishop and queen in the same diagonal
    return 2;
}
```

# Java
```
public int minMovesToCaptureTheQueen(int a, int b, int c, int d, int e, int f) {
    if(a == e && !(a == c && d > Math.min(b,f) && d < Math.max(b,f) )) return 1;
    if(b == f && !(b == d && c > Math.min(a,e) && c < Math.max(a,e) ))  return 1;
    if(c + d == e + f && !(c + d == a + b && a > Math.min(c , e) && a < Math.max(c, e) )) return 1;
    if(c-d == e-f && !( c-d == a-b && a > Math.min(c , e) && a < Math.max(c, e) )) return 1;
    return 2;
}
```



---

<b>Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---
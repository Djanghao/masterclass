# [Java/C++/Python] O(1) Space

**Author:** lee215
**Votes:** 38
**Link:** [https://leetcode.com/problems/count-lattice-points-inside-a-circle/solutions/1980902/](https://leetcode.com/problems/count-lattice-points-inside-a-circle/solutions/1980902/)

---

Updated this post, 
since I noticed almost every solutions will use `set`,
with extra space complexity.
<br>
# **Solution 1: Set**
## **Explanation**
For each circle `(x, y)`,
enumerate `i` from `x - r` to `x + r`
enumerate `j` from `y - r` to `y + r`
Check if `(i, j)` in this circle.

If so, add the point to a set `res` to de-duplicate.
<br>

## **Complexity**
Time `O(NRR)`
Space `O(XY)`
where `R = 100` is maximum radius of circles.

Actual run time depends on circles area in test cases.
<br>

**Java**
```java
    public int countLatticePoints(int[][] circles) {
        Set<Integer> res = new HashSet<>();
        for (int[] c : circles)
            for (int i = -c[2]; i <= c[2]; i++)
                for (int j = -c[2]; j <= c[2]; j++)
                    if (i * i + j * j <= c[2] * c[2])
                        res.add((c[0] + i) * 1000 + c[1] + j);
        return res.size();
    }
```
**C++**
```cpp
    int countLatticePoints(vector<vector<int>> circles) {
        unordered_set<int> res;
        for (auto& c : circles)
            for (int i = -c[2]; i <= c[2]; i++)
                for (int j = -c[2]; j <= c[2]; j++)
                    if (i * i + j * j <= c[2] * c[2])
                        res.insert((c[0] + i) * 1000 + c[1] + j);
        return res.size();
    }
```
**Python3**
```py
    def countLatticePoints(self, A: List[List[int]]) -> int:
        res = set()
        for x,y,r in A:
            for i in range(x - r,x + r + 1):
                for j in range(y - r, y + r + 1):
                    if (x - i) ** 2 + (y - j) ** 2 <= r * r:
                        res.add((i,j))
        return len(res)
```

# **Solution 2: Check all points, O(1) space**
## **Explanation**
For each point `(i, j)` in the plan,
enumerate `i` from `0` to `200`
enumerate `j` from `0` to `200`
Check if `(i, j)` in any circle.
<br>

## **Complexity**
Same time complexity, `O(1)` space.

Time `O(NXY)`
Space `O(1)`
where `X = 100` is the range of `xi`
where `Y = 100` is the range of `yi`
<br>

**Java**
```java
    public int countLatticePoints(int[][] circles) {
        int res = 0;
        for (int i = 0; i <= 200; i++) {
            for (int j = 0; j <= 200; j++) {
                for (int[] c : circles) {
                    if ((c[0] - i) * (c[0] - i) + (c[1] - j) * (c[1] - j) <= c[2] * c[2]) {
                        res++;
                        break;
                    }
                }
            }
        }
        return res;
    }
```

**C++**
```cpp
    int countLatticePoints(vector<vector<int>>& circles) {
        int res = 0;
        for (int i = 0; i <= 200; i++)
            for (int j = 0; j <= 200; j++) {
                for (auto& c : circles) {
                    if ((c[0] - i) * (c[0] - i) + (c[1] - j) * (c[1] - j) <= c[2] * c[2]) {
                        res++;
                        break;
                    }
                }
            }
        return res;
    }
```

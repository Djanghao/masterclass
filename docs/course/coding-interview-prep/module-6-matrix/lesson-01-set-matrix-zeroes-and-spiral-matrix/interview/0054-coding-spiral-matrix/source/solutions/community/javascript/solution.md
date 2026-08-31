# video explanation

**Author:** niits
**Votes:** 201
**Link:** [https://leetcode.com/problems/spiral-matrix/solutions/5513240/](https://leetcode.com/problems/spiral-matrix/solutions/5513240/)

---

# Solution Video

https://youtu.be/RSjo4A8WfQ8

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 6,001
Thank you for your support!

---

I have related question and use the same logic.

https://youtu.be/pLjhGbKMxL4

---



# Complexity
- Time complexity: $$O(n * m)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        rows, cols = len(matrix), len(matrix[0])
        x, y, dx, dy = 0, 0, 1, 0
        res = []

        for _ in range(rows * cols):
            res.append(matrix[y][x])
            matrix[y][x] = "."

            if not 0 <= x + dx < cols or not 0 <= y + dy < rows or matrix[y+dy][x+dx] == ".":
                dx, dy = -dy, dx
            
            x += dx
            y += dy
        
        return res
```
```javascript []
var spiralOrder = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let x = 0;
    let y = 0;
    let dx = 1;
    let dy = 0;
    const res = [];

    for (let i = 0; i < rows * cols; i++) {
        res.push(matrix[y][x]);
        matrix[y][x] = ".";

        if (!(0 <= x + dx && x + dx < cols && 0 <= y + dy && y + dy < rows) || matrix[y+dy][x+dx] === ".") {
            [dx, dy] = [-dy, dx];
        }

        x += dx;
        y += dy;
    }

    return res;    
};
```
```java []
class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        int rows = matrix.length;
        int cols = matrix[0].length;
        int x = 0;
        int y = 0;
        int dx = 1;
        int dy = 0;
        List<Integer> res = new ArrayList<>();

        for (int i = 0; i < rows * cols; i++) {
            res.add(matrix[y][x]);
            matrix[y][x] = -101; // the range of numbers in matrix is from -100 to 100

            if (!(0 <= x + dx && x + dx < cols && 0 <= y + dy && y + dy < rows) || matrix[y+dy][x+dx] == -101) {
                int temp = dx;
                dx = -dy;
                dy = temp;
            }

            x += dx;
            y += dy;
        }

        return res;        
    }
}
```
```C++ []
class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        int rows = matrix.size();
        int cols = matrix[0].size();
        int x = 0;
        int y = 0;
        int dx = 1;
        int dy = 0;
        vector<int> res;

        for (int i = 0; i < rows * cols; i++) {
            res.push_back(matrix[y][x]);
            matrix[y][x] = -101;

            if (!(0 <= x + dx && x + dx < cols && 0 <= y + dy && y + dy < rows) || matrix[y+dy][x+dx] == -101) {
                int temp = dx;
                dx = -dy;
                dy = temp;
            }

            x += dx;
            y += dy;
        }

        return res;
    }        
};
```

---

Thank you for reading my post.

##### \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

##### \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

##### \u2B50\uFE0F My recent video
#33 Search in Rotated Sorted Array

https://youtu.be/dO9OZJP_Hm8

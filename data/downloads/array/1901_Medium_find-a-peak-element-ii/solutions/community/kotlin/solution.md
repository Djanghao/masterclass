# 2 Approaches | O(m log n) | beat 100% | Python Java Javascript Kotlin j

**Author:** wjftu
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-a-peak-element-ii/solutions/4433051/](https://leetcode.com/problems/find-a-peak-element-ii/solutions/4433051/)

---

# Intuition
The most intuitive way is to traverse the matrix and check each position. We can traverse from left top position, check if it is peak, if so return it, if we find a adjacent position greater, we start to check the adjacent potision. Keep doing this until find a peak.

Normally we can find peak in a few attempts because in normal case there will be many peaks in matrix. But if we are unlucky, we will try every position and time complexity is $$O(n^2)$$

### Complexity

- Time complexity:
Best $$O(1)$$  
Worst $$O(n^2)$$

- Space complexity:
$$O(1)$$

**Actually this solution beats 100%**. 

### Code 

```python []
class Solution:
    def findPeakGrid(self, mat: List[List[int]]) -> List[int]:
        m = len(mat)
        n = len(mat[0])
        x = 0
        y = 0
        while True:
            cur = mat[x][y]
            if x - 1 >= 0 and mat[x-1][y] > cur:
                x -= 1
                continue
            if x + 1 < m and mat[x+1][y] > cur:
                x += 1
                continue
            if y - 1 >= 0 and mat[x][y-1] > cur:
                y -= 1
                continue
            if y + 1 < n and mat[x][y+1] > cur:
                y += 1
                continue
            return [x,y]
```
```java []
class Solution {
    public int[] findPeakGrid(int[][] mat) {
        var m = mat.length;
        var n = mat[0].length;
        var x = 0;
        var y = 0;
        while(true) {
            var cur = mat[x][y];
            if(x > 0 && mat[x-1][y] > cur) {
                x = x - 1;
                continue;
            }
            if(x + 1 < m && mat[x+1][y] > cur) {
                x = x + 1;
                continue;
            }
            if(y > 0 && mat[x][y-1] > cur) {
                y = y - 1;
                continue;
            }
            if(y + 1 < n && mat[x][y+1] > cur) {
                y = y + 1;
                continue;
            }
            return new int[]{x,y};
        }
    }
}
```
```Kotlin []
class Solution {
    fun findPeakGrid(mat: Array<IntArray>): IntArray {
        val m = mat.size
        val n = mat[0].size
        var x = 0
        var y = 0
        val nexts = arrayOf(
            intArrayOf(-1,0),
            intArrayOf(1,0),
            intArrayOf(0,-1),
            intArrayOf(0,1),
        )
        outter@while(true) {
            val cur = mat[x][y]
            for(next in nexts) {
                var xx = x + next[0]
                var yy = y + next[1]
                if (xx < 0 || xx >= m || yy < 0 || yy >=n) {
                    continue
                }
                if(mat[xx][yy] < cur) {
                    continue
                }
                x = xx
                y = yy
                continue@outter
            }
            return intArrayOf(x,y)
        }
        
    }
}
```

# O(mlog(n)) Approach

If a position is max in a row, it may be the answer. We can find the max element in a row and check upside and downside position of it. If upside position is greater than it, there must be a answer in upside area. And so is downside.

We can use binary search to find a row which contains an answer and return the max element of that row.

### Complexity

- Time complexity:
$$O(m * log(n))$$

- Space complexity:
$$O(1)$$

### Code 

```javascript []
var findPeakGrid = function(mat) {
    const m = mat.length;
    const n = mat[0].length;
    let low = 0;
    let high = m - 1;
    while(low <= high) {
        let i = Math.floor((low + high) / 2);
        let j = -1;
        let maxElement = -1;
        let arr = mat[i];
        for(let k=0; k<n; k++) {
            if(arr[k] > maxElement) {
                j = k;
                maxElement = arr[k];
            }
        }
        if(i > 0 && mat[i-1][j] > maxElement) {
            high = i - 1;
            continue;
        }
        if(i < m - 1 && mat[i+1][j] > maxElement) {
            low = i + 1;
            continue;
        }
        return [i,j];
    }
};
```
```java []
class Solution {
    public int[] findPeakGrid(int[][] mat) {
        var m = mat.length;
        var n = mat[0].length;
        var low = 0;
        var high = m - 1;
        while(low <= high) {
            var i = (low + high) / 2;
            var j = -1;
            var maxElement = -1;
            var arr = mat[i];
            for(int k=0; k<n; k++) {
                if(arr[k] > maxElement) {
                    j = k;
                    maxElement = arr[k];
                }
            }
            if(i > 0 && mat[i-1][j] > maxElement){
                high = i - 1;
                continue;
            }
            if(i < m - 1 && mat[i+1][j] > maxElement) {
                low = i + 1;
                continue;
            }
            return new int[]{i, j};
        }
        return new int[]{};
    }
}
```
```kotlin []
class Solution {
    fun findPeakGrid(mat: Array<IntArray>): IntArray {
        val m = mat.size
        var low = 0
        var high = m - 1
        while(low <= high) {
            val i = (low + high) / 2
            var j = -1
            var maxElement = -1
            val arr = mat[i]
            for(k in arr.indices) {
                if(arr[k] > maxElement) {
                    j = k
                    maxElement = arr[k]
                }
            }
            if(i > 0 && mat[i-1][j] > maxElement) {
                high = i - 1
                continue
            }
            if(i < m - 1 && mat[i+1][j] > maxElement) {
                low = i + 1
                continue
            }
            return intArrayOf(i, j)
        }
        //impossible
        return intArrayOf()
        
    }
}
```
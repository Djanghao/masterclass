# [Kotlin] HashSet solution

**Author:** kevinleigh
**Votes:** 1
**Link:** [https://leetcode.com/problems/lonely-pixel-i/solutions/1175397/](https://leetcode.com/problems/lonely-pixel-i/solutions/1175397/)

---

```
class Solution {
    fun findLonelyPixel(picture: Array<CharArray>): Int {
        val rows = HashMap<Int, Int>()
        val cols = HashMap<Int, Int>()
        val result = ArrayList<Pair<Int, Int>>()
        
        for (r in 0..picture.lastIndex) {
            for (c in 0..picture[0].lastIndex) {
                if (picture[r][c] == 'W') continue
                
                rows[r] = (rows[r] ?: 0) + 1
                cols[c] = (cols[c] ?: 0) + 1

                if (!isLonely(r - 1, c, picture)) continue
                if (!isLonely(r + 1, c, picture)) continue
                if (!isLonely(r, c - 1, picture)) continue
                if (!isLonely(r, c + 1, picture)) continue
                
                result.add(Pair(r, c))
            }
        }
        
        var count = 0
        for ((r, c) in result) {
            if (rows[r]!! > 1 || cols[c]!! > 1) continue
            count += 1
        }
        
        return count
    }
    
    fun isLonely(y: Int, x: Int, p: Array<CharArray>): Boolean {
        if (x < 0 || y < 0) return true
        if (y > p.lastIndex || x > p[0].lastIndex) return true
        return p[y][x] == 'W'
    }
}
```
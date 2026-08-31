# Kotlin: DFS

**Author:** artemasoyan
**Votes:** 3
**Link:** [https://leetcode.com/problems/flood-fill/solutions/2958125/](https://leetcode.com/problems/flood-fill/solutions/2958125/)

---

```
class Solution {

    fun floodFill(image: Array<IntArray>, sr: Int, sc: Int, color: Int): Array<IntArray> {
        val colorToFill = image[sr][sc]

        tailrec fun dfs(i: Int, j: Int) {
            if (i !in image.indices || j !in image[0].indices || image[i][j] != colorToFill || image[i][j] == color) return

            image[i][j] = color
            
            dfs(i + 1, j)
            dfs(i - 1, j)
            dfs(i, j + 1)
            dfs(i, j - 1)
        }

        if (colorToFill == color) return image
        
        dfs(sr, sc)

        return image    
    }
}
```
# Kotlin Easy Explained Solution || (258ms) Faster than 97.50%

**Author:** Z3ROsum
**Votes:** 2
**Link:** [https://leetcode.com/problems/reshape-the-matrix/solutions/2315213/](https://leetcode.com/problems/reshape-the-matrix/solutions/2315213/)

---

Steps:
1. Take all of the items in the original matrix and add them to a  flat list
2. Create a new `R x C` matrix and fill in the matrix with the elements in the list
3. Keep track of the current index in the list

```
class Solution {
    fun matrixReshape(mat: Array<IntArray>, r: Int, c: Int): Array<IntArray> {
        if (r * c != mat.size * mat[0].size) {
            return mat // if the new size is illegal
        }
		
        var list = mutableListOf<Int>()
        for (i in mat) {
            for (j in i) list.add(j)
        }
		
        var currentIndex = 0
        
        val new = Array(r) { IntArray(c) }
        for (i in new.indices) {
            val row = new[i]
            for (j in row.indices) {
                new[i][j] = list[currentIndex]
                currentIndex++
            }
        }
        
        return new
    }
}
```
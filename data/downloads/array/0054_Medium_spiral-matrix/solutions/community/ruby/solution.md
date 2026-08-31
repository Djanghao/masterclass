# 1 line Ruby solution

**Author:** StefanPochmann
**Votes:** 4
**Link:** [https://leetcode.com/problems/spiral-matrix/solutions/20785/](https://leetcode.com/problems/spiral-matrix/solutions/20785/)

---

Version 1:

    def spiral_order(matrix)
      matrix == [] ? [] : matrix.shift + spiral_order(matrix.transpose.reverse)
    end

---

Version 2:

    def spiral_order(matrix)
      matrix.any? ? matrix.shift + spiral_order(matrix.transpose.reverse) : []
    end
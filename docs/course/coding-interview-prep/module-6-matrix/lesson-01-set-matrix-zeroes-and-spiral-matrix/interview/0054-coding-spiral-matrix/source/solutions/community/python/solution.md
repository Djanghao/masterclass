# 1-liner in Python + Ruby

**Author:** StefanPochmann
**Votes:** 1817
**Link:** [https://leetcode.com/problems/spiral-matrix/solutions/20571/](https://leetcode.com/problems/spiral-matrix/solutions/20571/)

---

Take the first row plus the spiral order of the rotated remaining matrix. Inefficient for large matrices, but here I got it accepted in 40 ms, one of the fastest Python submissions.

Python:

    def spiralOrder(self, matrix):
        return matrix and list(matrix.pop(0)) + self.spiralOrder(zip(*matrix)[::-1])

Python 3:

    def spiralOrder(self, matrix):
        return matrix and [*matrix.pop(0)] + self.spiralOrder([*zip(*matrix)][::-1])

Ruby:
```
def spiral_order(matrix)
  (row = matrix.shift) ? row + spiral_order(matrix.transpose.reverse) : []
end
```
or
```
def spiral_order(matrix)
  matrix[0] ? matrix.shift + spiral_order(matrix.transpose.reverse) : []
end
```

### Visualization

Here's how the matrix changes by always extracting the first row and rotating the remaining matrix counter-clockwise:

        |1 2 3|      |6 9|      |8 7|      |4|  =>  |5|  =>  ||
        |4 5 6|  =>  |5 8|  =>  |5 4|  =>  |5|
        |7 8 9|      |4 7|

Now look at the first rows we extracted:

        |1 2 3|      |6 9|      |8 7|      |4|      |5|

Those concatenated are the desired result.

### Another visualization
```
  spiral_order([[1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]])

= [1, 2, 3] + spiral_order([[6, 9],
                            [5, 8],
                            [4, 7]])

= [1, 2, 3] + [6, 9] + spiral_order([[8, 7],
                                     [5, 4]])

= [1, 2, 3] + [6, 9] + [8, 7] + spiral_order([[4],
                                              [5]])

= [1, 2, 3] + [6, 9] + [8, 7] + [4] + spiral_order([[5]])

= [1, 2, 3] + [6, 9] + [8, 7] + [4] + [5] + spiral_order([])

= [1, 2, 3] + [6, 9] + [8, 7] + [4] + [5] + []

= [1, 2, 3, 6, 9, 8, 7, 4, 5]
```
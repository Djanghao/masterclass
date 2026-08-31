# [Python] Intuitive + Direct for Beginners with Illustrations

**Author:** ziaiz-zythoniz
**Votes:** 152
**Link:** [https://leetcode.com/problems/reshape-the-matrix/solutions/2046840/](https://leetcode.com/problems/reshape-the-matrix/solutions/2046840/)

---

Given a matrix `mat` of 3 rows * 4 columns, 
we want reshape it into 2 rows (`r = 2`) * 6 columns(`c = 6`): 
```
[[0,  1,  2,  3],
 [4,  5,  6,  7],                 ->                [[0,  1,  2,  3,  4,  5],
 [8,  9,  10, 11]]                                   [6,  7,  8,  9,  10, 11]]
```
**Step 1:** Flatten the given matrix `mat` to a 1-D list `flatten` for easier visualizations and calculations for future steps
```
flatten = [0,  1,  2,  3,  4,  5,  6,  7,  8,  9,  10, 11]
```
**Step 2:** Check whether the total number of given elements `len(flatten)` and the new shape `r * c` matches (i.e. whether "*given parameters is possible and legal*")
```
r = 2, c = 6
r * c = 12
```
**Step 3:** Rearrange all elements in 1-D list `flatten` into the `new_mat`  according to given number of row `r` and given number of columns `c`
```
flatten = [0,  1,  2,  3,  4,  5,  6,  7,  8,  9,  10, 11]
```

reshaping: 
```
                         [0,  1,  2,  3,  4,  5,   6,  7,  8,  9,  10, 11]
row_index: 0			| c0  c1  c2  c3  c4  c5 |
row_index: 1                           			 | c0  c1  c2  c3  c4  c5 |

index in flatten:  [row_index * c : row_index * c + c])

			            [0*6       :      0*6 + 6],  
										         [1*6        :       1*6+6]
												 
                        [0          :           6],  
										         [6          :          12]
```
- **iteration 0**:` row_index` **0**
```
flatten[0 : 6]   ->   [0,  1,  2,  3,  4,  5]

appending:
new_mat = [[0,  1,  2,  3,  4,  5]]
```
- **iteration 1**: `row_index` **1**
```
flatten[6 : 12]   ->   [6,  7,  8,  9,  10, 11]

appending:
new_mat = [[0,  1,  2,  3,  4,  5],
           [6,  7,  8,  9,  10, 11]]
```



___________________________
```
class Solution:
    def matrixReshape(self, mat: List[List[int]], r: int, c: int) -> List[List[int]]:
        flatten = []
        new_mat = []
        for row in mat:
            for num in row:
                flatten.append(num)
                
        if r * c != len(flatten):   # when given parameters is NOT possible and legal
            return mat
        else:
            for row_index in range(r):
                new_mat.append(flatten[row_index * c : row_index * c + c])
            return new_mat
```

________________________________________________________________________

As a total beginner, I am writing these all out to help myself, and hopefully also help anyone out there who is like me at the same time.

Please upvote\u2B06\uFE0F if you find this helpful or worth-reading for beginners in anyway.  
Your upvote is much more than just supportive to me. \uD83D\uDE33\uD83E\uDD13\uD83E\uDD70

If you find this is not helpful, needs improvement, or is questionable, would you please leave a quick comment below to point out the problem before you decide to downvote? It will be very helpful for me (maybe also others) to learn as a beginner.

Thank you very much either way \uD83E\uDD13.

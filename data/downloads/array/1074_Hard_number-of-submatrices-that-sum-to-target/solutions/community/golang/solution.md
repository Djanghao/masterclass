# 🔥 BEATS 100% | ✅ [ Py /Java / C++ / C / C# / JS / GO / Rust ]

**Author:** Neoni_77
**Votes:** 14
**Link:** [https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/solutions/4636811/](https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/solutions/4636811/)

---


```C++ []
class Solution {
public:
    int numSubmatrixSumTarget(vector<vector<int>>& matrix, int target) {
        int m = matrix.size(), n = matrix[0].size(), res = 0;

        for (int l = 0; l < n; ++l) {
            int sums[105] = {0};
            for (int r = l; r < n; ++r) {
                for (int i = 0; i < m; ++i) {
                    sums[i] += matrix[i][r];
                }
                for (int i = 0; i < m; ++i) {
                    int sum = 0;
                    for (int j = i; j < m; ++j) {
                        sum += sums[j];
                        if (sum == target) {
                            ++res;
                        }
                    }
                }
            }
        }

        return res;
    }
};

```
```Java []
class Solution {
    public int numSubmatrixSumTarget(int[][] matrix, int target) {
        int m = matrix.length, n = matrix[0].length, res = 0;

        for (int l = 0; l < n; ++l) {
            int[] sums = new int[105];
            for (int r = l; r < n; ++r) {
                for (int i = 0; i < m; ++i) {
                    sums[i] += matrix[i][r];
                }
                for (int i = 0; i < m; ++i) {
                    int sum = 0;
                    for (int j = i; j < m; ++j) {
                        sum += sums[j];
                        if (sum == target) {
                            ++res;
                        }
                    }
                }
            }
        }

        return res;
    }
}

```
```Python []
class Solution:
    def numSubmatrixSumTarget(self, matrix: List[List[int]], target: int) -> int:
        for row in matrix:
            for i in range(len(row)-1):
                row[i+1] += row[i]

        count = 0
        for t in range(len(matrix)):
            for b in range(t, -1, -1):
                if t == b:
                    cur = matrix[t][:]
                else:
                    cur = [cur[i]+matrix[b][i] for i in range(len(matrix[0]))]
                seen = {0: 1}
                for v in cur:
                    if v - target in seen:
                        count += seen[v - target]
                    seen[v] = seen.get(v, 0) + 1
                    
        return count
# not same logic as other codes
# for python it may not beat 100% .. 

```
```C []
int numSubmatrixSumTarget(int** matrix, int matrixSize, int* matrixColSize, int target) {
    int m = matrixSize, n = *matrixColSize, res = 0;

    for (int l = 0; l < n; ++l) {
        int sums[105] = {0};
        for (int r = l; r < n; ++r) {
            for (int i = 0; i < m; ++i) {
                sums[i] += matrix[i][r];
            }
            for (int i = 0; i < m; ++i) {
                int sum = 0;
                for (int j = i; j < m; ++j) {
                    sum += sums[j];
                    if (sum == target) {
                        ++res;
                    }
                }
            }
        }
    }

    return res;
}

```
```C# []
public class Solution {
    public int NumSubmatrixSumTarget(int[][] matrix, int target) {
        int m = matrix.Length, n = matrix[0].Length, res = 0;

        for (int l = 0; l < n; ++l) {
            int[] sums = new int[105];
            for (int r = l; r < n; ++r) {
                for (int i = 0; i < m; ++i) {
                    sums[i] += matrix[i][r];
                }
                for (int i = 0; i < m; ++i) {
                    int sum = 0;
                    for (int j = i; j < m; ++j) {
                        sum += sums[j];
                        if (sum == target) {
                            ++res;
                        }
                    }
                }
            }
        }

        return res;
    }
}

```
```Javascript []
var numSubmatrixSumTarget = function(matrix, target) {
    let m = matrix.length, n = matrix[0].length;
    let res = 0;

    for (let l = 0; l < n; ++l) {
        let sums = new Array(105).fill(0);
        for (let r = l; r < n; ++r) {
            for (let i = 0; i < m; ++i) {
                sums[i] += matrix[i][r];
            }
            for (let i = 0; i < m; ++i) {
                let sum = 0;
                for (let j = i; j < m; ++j) {
                    sum += sums[j];
                    if (sum === target) {
                        ++res;
                    }
                }
            }
        }
    }

    return res;
};

```
```GO []
func numSubmatrixSumTarget(matrix [][]int, target int) int {
    m, n := len(matrix), len(matrix[0])
    res := 0

    for l := 0; l < n; l++ {
        sums := make([]int, 105)
        for r := l; r < n; r++ {
            for i := 0; i < m; i++ {
                sums[i] += matrix[i][r]
            }
            for i := 0; i < m; i++ {
                sum := 0
                for j := i; j < m; j++ {
                    sum += sums[j]
                    if sum == target {
                        res++
                    }
                }
            }
        }
    }

    return res
}

```
```Rust []
impl Solution {
    pub fn num_submatrix_sum_target(matrix: Vec<Vec<i32>>, target: i32) -> i32 {
        let (m, n) = (matrix.len(), matrix[0].len());
        let mut res = 0;

        for l in 0..n {
            let mut sums = vec![0; 105];
            for r in l..n {
                for i in 0..m {
                    sums[i] += matrix[i][r];
                }
                for i in 0..m {
                    let mut sum = 0;
                    for j in i..m {
                        sum += sums[j];
                        if sum == target {
                            res += 1;
                        }
                    }
                }
            }
        }

        res
    }
}

```
**\u041F\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044E \u043D\u0430 \u0421++ \u0434\u043E\u0441\u0442\u0438\u0433\u0430\u0435\u0442 100%, \u043F\u043E \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u043C \u043A\u043E\u0434\u0430\u043C \u043D\u0435 \u0437\u043D\u0430\u044E..
\u043F\u0440\u043E\u0433\u043E\u043B\u043E\u0441\u0443\u0439\u0442\u0435 \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430!! \uD83D\uDE0A**

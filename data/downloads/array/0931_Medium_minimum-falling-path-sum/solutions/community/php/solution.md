# 4 lines || easy solution || explained

**Author:** ManojKumarPatnaik
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-falling-path-sum/solutions/1923900/](https://leetcode.com/problems/minimum-falling-path-sum/solutions/1923900/)

---

```
The minimum path to get to element A[i][j] is the minimum of A[i - 1][j - 1], A[i - 1][j] and A[i - 1][j + 1].
Starting from row 1, we add the minumum path to each element. The smallest number in the last row is the miminum path sum.
Example:
[1, 2, 3]
[4, 5, 6] => [5, 6, 8]
[7, 8, 9] => [7, 8, 9] => [12, 13, 15]

C++

int minFallingPathSum(vector<vector<int>>& A) {
  for (auto i = 1; i < A.size(); ++i)
    for (auto j = 0; j < A.size(); ++j)
      A[i][j] += min({ A[i-1][j], A[i-1][max(0,j-1)], A[i-1][min((int)A.size()-1,j+1)] });
  return *min_element(begin(A[A.size() - 1]), end(A[A.size() - 1]));
}
Java

public int minFallingPathSum(int[][] A) {
  for (int i = 1; i < A.length; ++i)
    for (int j = 0; j < A.length; ++j)
      A[i][j] += Math.min(A[i - 1][j], Math.min(A[i - 1][Math.max(0, j - 1)], A[i - 1][Math.min(A.length - 1, j + 1)]));
  return Arrays.stream(A[A.length - 1]).min().getAsInt();
}       
```
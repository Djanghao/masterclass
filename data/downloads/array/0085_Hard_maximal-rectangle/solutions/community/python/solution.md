# AC Python DP solutioin 120ms based on largest rectangle in histogram

**Author:** dietpepsi
**Votes:** 430
**Link:** [https://leetcode.com/problems/maximal-rectangle/solutions/29065/](https://leetcode.com/problems/maximal-rectangle/solutions/29065/)

---

    def maximalRectangle(self, matrix):
        if not matrix or not matrix[0]:
            return 0
        n = len(matrix[0])
        height = [0] * (n + 1)
        ans = 0
        for row in matrix:
            for i in xrange(n):
                height[i] = height[i] + 1 if row[i] == '1' else 0
            stack = [-1]
            for i in xrange(n + 1):
                while height[i] < height[stack[-1]]:
                    h = height[stack.pop()]
                    w = i - 1 - stack[-1]
                    ans = max(ans, h * w)
                stack.append(i)
        return ans

    # 65 / 65 test cases passed.
    # Status: Accepted
    # Runtime: 120 ms
    # 100%

The solution is based on [largest rectangle in histogram][1] solution. Every row in the matrix is viewed as the ground with some buildings on it. The building height is the count of consecutive 1s from that row to above rows. The rest is then the same as [this solution for largest rectangle in histogram][2]


  [1]: https://leetcode.com/problems/largest-rectangle-in-histogram/
  [2]: https://leetcode.com/discuss/65647/ac-python-clean-solution-using-stack-76ms
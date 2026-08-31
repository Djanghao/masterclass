# Python, DP solution

**Author:** antonchan930
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/solutions/1916810/](https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/solutions/1916810/)

---

class Solution:
    def kthLargestValue(self, matrix: List[List[int]], k: int) -> int:
        
        q = [matrix[0][0]]
        
        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                if i == j == 0:
                    continue
                elif i == 0:
                    matrix[i][j] ^= matrix[i][j-1]
                elif j == 0:
                    matrix[i][j] ^= matrix[i-1][j]
                else:
                    matrix[i][j] ^= matrix[i-1][j] ^ matrix[i][j-1] ^ matrix[i-1][j-1]
				if len(q) < k:
					heapq.heappush(q, matrix[i][j])
				else:
					heapq.heappushpop(q, matrix[i][j])
        
        return q[0]
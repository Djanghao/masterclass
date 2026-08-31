# [JAVA] Clean Code, Dynamic Programming Technique

**Author:** anii_agrawal
**Votes:** 18
**Link:** [https://leetcode.com/problems/count-submatrices-with-all-ones/solutions/884053/](https://leetcode.com/problems/count-submatrices-with-all-ones/solutions/884053/)

---

```
class Solution {
	
	public int numSubmat (int[][] mat) {
		
		int submatrices = 0;
		int rowLength = mat.length;
		int colLength = mat[0].length;
		
		for (int row = 1; row < rowLength; row++) {
			for (int col = 0; col < colLength; col++) {
				mat[row][col] = mat[row][col] == 1 ? mat[row - 1][col] + 1 : 0;
			}
		}
		
		for (int row = 0; row < rowLength; row++) {
			for (int col = 0; col < colLength; col++) {
				if (mat[row][col] != 0) {
					int min = mat[row][col];
					submatrices += min;
					for (int k = col + 1; k < colLength && mat[row][k] != 0; k++) {
						min = Math.min (min, mat[row][k]);
						submatrices += min;
					}
				}
			}
		}
		
		return submatrices;
	}
}
```

Please help to **UPVOTE** if this post is useful for you.
If you have any questions, feel free to comment below.
**HAPPY CODING :)
LOVE CODING :)**

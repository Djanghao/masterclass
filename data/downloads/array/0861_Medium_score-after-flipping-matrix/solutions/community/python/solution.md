# Greedy approach with explanation | Locking Maximum value[c++/java/python/go]

**Author:** anupsingh556
**Votes:** 8
**Link:** [https://leetcode.com/problems/score-after-flipping-matrix/solutions/5151074/](https://leetcode.com/problems/score-after-flipping-matrix/solutions/5151074/)

---

# Intuition
- For any integer x -> 2^x > (2^(x-1) + 2^(x-2)....+ 2^0) we can use this to maximise sum for a row. So for a row our focus should be to make its 0th column value to `1` this will give us maximise row sum.
- So first we will flip all rows that has leading 0 so that we get leading 1 in 0th column for all rows after this we lock our rows so that no rows can be flipped again
- Now we will count 1 in each column and flip the column if 1 count is greater than 0
- One might argue what if we initially flip 0th row before locking it?? If we flip 0th column and then lock our rows then in next steps while counting 1s and 0s we will get reversed count value(i.e 0 becomes 1 and vice versa) which is still same if we hadn't flipped the column.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
- Initialise res with (1<<(m-1))*n as all 0th columns are flipped to 1
- Now traverse in each column and count number of 1.
- If a[i][j] == a[i][0] then we can say a[i][j] will be 1 why??
    - If a[i][0] == 0 then a[i][j] will filpped so it will become 1 if its inital value is 0 so it satisfies our condition
    - If a[i][0] == 1 then a[i][j] wont change so if it is 1 then it will be 1
- We can use above to find 1s in every column and decide wheter to flip that column if number of 1s is exceeding 0
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n*m) for traversing our grid
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: No extra space needed
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```c++ []
class Solution {
public:
    int matrixScore(vector<vector<int>>& a) {
        int n = a.size();
        int m = a[0].size();
        int res = (1<<(m-1))*n;
        for(int i=1;i<m;i++) {
            int curr=0;
            for(int j=0;j<n;j++) {
                if(a[j][i]==a[j][0])curr++;
            }
            res += (1<<(m-i-1))*max(curr, n-curr);
        }
        return res;
    }
};
```
```go []
func matrixScore(a [][]int) int {
	n := len(a)
	m := len(a[0])
	res := (1 << (m - 1)) * n

	for i := 1; i < m; i++ {
		curr := 0
		for j := 0; j < n; j++ {
			if a[j][i] == a[j][0] {
				curr++
			}
		}
		if curr > n-curr {
			res += (1 << (m - i - 1)) * curr
		} else {
			res += (1 << (m - i - 1)) * (n - curr)
		}
	}
	return res
}
```
```python []
class Solution(object):
    def matrixScore(self, a):
        n = len(a)
        m = len(a[0])
        res = (1 << (m - 1)) * n

        for i in range(1, m):
            curr = 0
            for j in range(n):
                if a[j][i] == a[j][0]:
                    curr += 1
            res += (1 << (m - i - 1)) * max(curr, n - curr)

        return res
```

```java []
class Solution {
    public int matrixScore(int[][] a) {
        int n = a.length;
        int m = a[0].length;
        int res = (1 << (m - 1)) * n;

        for (int i = 1; i < m; i++) {
            int curr = 0;
            for (int j = 0; j < n; j++) {
                if (a[j][i] == a[j][0]) {
                    curr++;
                }
            }
            res += (1 << (m - i - 1)) * Math.max(curr, n - curr);
        }

        return res;
    }
}
```
# Python solution O(m*n) top 3 in row, column; top 11 total

**Author:** nguyenquocthao00
**Votes:** 26
**Link:** [https://leetcode.com/problems/maximum-value-sum-by-placing-three-rooks-ii/solutions/5651002/](https://leetcode.com/problems/maximum-value-sum-by-placing-three-rooks-ii/solutions/5651002/)

---

# Edit
We choose among 11 largest elements
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
If we choose randomly 3 elements with different rows and columns, (i,j) is one chosen element.
In the top 3 elements of row i, there is at least 1 element with different column than the other two. So if (i,j) not in the top 3 of the row, then (i,j) can be replaced with one of the top 3. The same for column j. So we only need to consider elements wich are both in the top 3 of a row and in the top 3 of a column.
Now for each elements, there are at most 2 other elements in the same row and 2 other elements in the same column. So if we choose any elements, at most 5 elements will become invalid. In the top 11 elements, there is at least one element with different row and column than other 2 chosen elements. So if (i,j) not in top 11, (i,j) can be replaced with another element in top 11. 
We can repeat that process so that all 3 chosen elements are in the top 11. So we only need to consider elements in the top 11.

Test case:
[
[9, 1, 1, 0, 0, 0, 0], 
[1, 0, 0, 0, 0, 0, 0], 
[1, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 9, 1, 1, 0], 
[0, 0, 0, 1, 0, 0, 0], 
[0, 0, 0, 1, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0]]

# Approach
<!-- Describe your approach to solving the problem. -->
Choose 3 largest elements in each row
Choose 3 largest elements in each column from the previous data.
Choose 11 largest elements from the previous data.
Brute force select 3 elements from the 11 elements, check if all 3 have different rows and columns


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(m*n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
class Solution:
    def maximumValueSum(self, board: List[List[int]]) -> int:
        m,n = len(board), len(board[0])
        data = [[] for _ in range(n)]
        for i,r in enumerate(board):
            h=[]
            for j,v in enumerate(r):
                if len(h)==3: heappushpop(h, (v,i,j))
                else: heappush(h, (v,i,j))
            for it in h:
                j = it[2]
                if len(data[j])==3: heappushpop(data[j], it)
                else: heappush(data[j], it)
        h = []
        for r in data:
            for it in r:
                if len(h)==11: heappushpop(h, it)
                else: heappush(h, it)
        res = -math.inf
        for x,y,z in combinations(h, 3):
            if len({x[1], y[1], z[1]}) == 3 and len({x[2],y[2],z[2]}) == 3:
                res=max(res, x[0]+y[0]+z[0])
        return res
        

        
```
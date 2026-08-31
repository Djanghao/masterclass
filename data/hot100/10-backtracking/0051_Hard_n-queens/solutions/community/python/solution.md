# Fast, short, and easy-to-understand python solution, 11 lines, 76ms

**Author:** cmc
**Votes:** 367
**Link:** [https://leetcode.com/problems/n-queens/solutions/19810/](https://leetcode.com/problems/n-queens/solutions/19810/)

---

ideas: <br>
Use the `DFS` helper function to find solutions recursively. A solution will be found when the length of    `queens` is equal to `n` ( `queens` is a list of the indices of the queens).<br><br>
In this problem, whenever a location `(x, y`) is occupied, any other locations `(p, q )` where `p + q == x + y` or `p - q == x - y` would be  invalid. We can use this information to keep track of the indicators (`xy_dif` and  `xy_sum` ) of the invalid positions and then call DFS recursively with valid positions only. <br><br>

At the end, we convert the result (a list of lists; each sublist is the indices of the queens) into the desire format.


    def solveNQueens(self, n):
        def DFS(queens, xy_dif, xy_sum):
            p = len(queens)
            if p==n:
                result.append(queens)
                return None
            for q in range(n):
                if q not in queens and p-q not in xy_dif and p+q not in xy_sum: 
                    DFS(queens+[q], xy_dif+[p-q], xy_sum+[p+q])  
        result = []
        DFS([],[],[])
        return [ ["."*i + "Q" + "."*(n-i-1) for i in sol] for sol in result]
# [ C | C++ | Python | Java | C# | JavaScript | Go ] Same Simple Solution

**Author:** HadaHer
**Votes:** 32
**Link:** [https://leetcode.com/problems/range-addition-ii/solutions/1434604/](https://leetcode.com/problems/range-addition-ii/solutions/1434604/)

---

C:
```
int maxCount(int m, int n, int** ops, int opsSize, int* opsColSize){
        int min_row = m;
        int min_col = n;
        for (int i=0; i<opsSize; i++){
            if (ops[i][0]<min_row) min_row=ops[i][0];
            if (ops[i][1]<min_col) min_col=ops[i][1];
        }        
        return min_row*min_col;
}
```
C++:
```
class Solution {
public:
    int maxCount(int m, int n, vector<vector<int>>& ops) {
        int min_row = m;
        int min_col = n;
        for (int i=0; i<ops.size(); i++){
            if (ops[i][0]<min_row) min_row=ops[i][0];
            if (ops[i][1]<min_col) min_col=ops[i][1];
        }        
        return min_row*min_col;
        
    }
};
```
Python:
```
class Solution:
    def maxCount(self, m: int, n: int, ops: List[List[int]]) -> int:
        min_row = m
        min_col = n
        for i in range(len(ops)):
            min_row=min(min_row, ops[i][0])
            min_col=min(min_col, ops[i][1])
        return min_row*min_col
```
Java:
```
class Solution {
    public int maxCount(int m, int n, int[][] ops) {
        int min_row = m;
        int min_col = n;
        for (int i=0; i<ops.length; i++){
            if (ops[i][0]<min_row) min_row=ops[i][0];
            if (ops[i][1]<min_col) min_col=ops[i][1];
        }        
        return min_row*min_col;
        
    }
}
```
C#
```
public class Solution {
    public int MaxCount(int m, int n, int[][] ops) {
        int min_row = m;
        int min_col = n;
        for (int i=0; i<ops.Length; i++){
            if (ops[i][0]<min_row) min_row=ops[i][0];
            if (ops[i][1]<min_col) min_col=ops[i][1];
        }        
        return min_row*min_col;
        
    }
}
```
JavaScript:
```
var maxCount = function(m, n, ops) {
    var min_row = m;
    var min_col = n;
    for (let i=0; i<ops.length; i++){
        if (ops[i][0]<min_row) min_row=ops[i][0];
        if (ops[i][1]<min_col) min_col=ops[i][1];
    }        
    return min_row*min_col;
};
```
Go:
```
func maxCount(m int, n int, ops [][]int) int {
    var min_row int = m;
    var min_col int = n;
    for i:=0; i<len(ops); i++{
        if ops[i][0]<min_row {min_row=ops[i][0]}
        if ops[i][1]<min_col {min_col=ops[i][1]}
    }        
    return min_row*min_col;
    
}
```
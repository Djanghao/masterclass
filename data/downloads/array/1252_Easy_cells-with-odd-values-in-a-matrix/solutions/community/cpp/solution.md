# 100.00% efficient in memory and faster in runtime c++ solution

**Author:** alokgupta
**Votes:** 9
**Link:** [https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/solutions/472649/](https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/solutions/472649/)

---

/// Don't have time to arrange this- learning stl, i compared and pushing the whole. Extract meaningful from this and ignore duplicate approaches 

------
Runtime: 4 ms, faster than 82.62% of C++ online submissions for Cells with Odd Values in a Matrix.
Memory Usage: 9.3 MB, less than 100.00% of C++ online submissions for Cells with Odd Values in a Matrix.
This can be done in **O(m+n)** time and **O(m+n)** space
Firstly notice that the order in which we add 1 does not matter. You could add 1 to all rows and then proceed to adding 1 to all columns.
Now suppose you add 1 to the same row twice, the resultant elements in that row are even. So applying the operation to the same row/col is as good as not applying anything there.
Applying operation to a same row/col any odd number of times is as good as applying the operation only once.
So now suppose there are r such rows where you apply the operation odd number of times. And c such cols where you apply operation odd number of times.
All m elements in each row are odd => r*m
All n elements in each row are odd => c*n
You double count r*c elements => -1 * r * c
Also, these r*c elements are even => -1 * r * c

```
static int x = []() {
std::ios::sync_with_stdio(false);
cin.tie(nullptr);
return 0; }();

class Solution { // tc: O(n+m) & sc: O(n+m)
public:
    int oddCells(int n, int m, vector<vector<int>>& indices) {
        vector<bool> rows(n,false),cols(m,false);
        for(auto index: indices){
            rows[index[0]] = rows[index[0]] ^ true;
            cols[index[1]] = cols[index[1]] ^ true;
        }
        
        int r(0),c(0);
        for(int i(0);i<n;i++){
            if(rows[i]) r++;
        }
        
        for(int i(0);i<m;i++){
            if(cols[i]) c++;
        }
        return r*(m-c) + c*(n-r); // (or) return (r*m + c*n - 2*r*c);
    }
};
```
Runtime: 8 ms, faster than 28.45% of C++ online submissions for Cells with Odd Values in a Matrix.
Memory Usage: 9.5 MB, less than 100.00% of C++ online submissions for Cells with Odd Values in a Matrix.

------
We only have to care if we have a line crossing a row or a column.

```
class Solution { // without manipulating array
public:
    int oddCells(int n, int m, vector<vector<int>>& indices) {
        int oddCellsCount(0);
        unordered_set<int> rows;
        unordered_set<int> cols;
        
        for(auto index: indices){
            if(rows.count(index[0])==0) rows.insert(index[0]);
            else rows.erase(index[0]); // remove row as it has been flipped back to even
            
            if(cols.count(index[1])==0) cols.insert(index[1]);
            else cols.erase(index[1]);  // remove col as it has been flipped back to even
        }
        
// Where flipped rows and columns cross, that number remains even.
//i.e. The number of odds corresponds to - (the product of odd rows and number of columns that haven't been flipped), added to (the product of odd columns and number of rows that haven't been flipped).
        
        return rows.size()*(m-cols.size()) + cols.size()*(n-rows.size());
        
        // i.e. return (r*m + c*n - 2*r*c);
    }
};
```



```
class Solution {
public:
    int oddCells(int n, int m, vector<vector<int>>& indices) {
        int row[n] = {0}, colm[m] = {0};
        for(auto pair : indices){
            row[pair[0]] ++;
            colm[pair[1]] ++;
        }
        int even_row = 0, even_colm = 0; 
        for(auto num : row){
            if(num % 2 == 0) even_row++; //count the number of even row
        }
        for(auto num : colm){
            if(num % 2 == 0) even_colm ++; //count the number of even column
        }
        return even_row*(m-even_colm)+(n-even_row)*even_colm;
    }
};
```

------
Runtime: **4 ms**, faster than **82.80%** of C++ online submissions for Cells with Odd Values in a Matrix.
Memory Usage: **9.5 MB**, less than **100.00%** of C++ online submissions for Cells with Odd Values in a Matrix.
```
class Solution {
public:
    void incrementThis(vector<vector<int>> &mat, bool isRow, int index){
        if(isRow){
            for(int i(0);i<mat[0].size();i++)
                mat[index][i]+=1;
        }else{
            for(int i(0);i<mat.size();i++)
                mat[i][index]+=1;
        }
    }
    int oddCells(int n, int m, vector<vector<int>>& indices) {
        vector<vector<int>> mat(n,vector<int>(m,0));
        for(vector<int> index: indices){
            incrementThis(mat,true,index[0]);
            incrementThis(mat,false,index[1]);
        }
        int numOfOdd(0);
        
        for(int i(0);i<n;i++)
            for(int j(0);j<m;j++)
                if(mat[i][j] & 1) numOfOdd++;
        
        return numOfOdd;
    }
};
```

-----
Runtime: 4 ms, faster than 82.80% of C++ online submissions for Cells with Odd Values in a Matrix.
Memory Usage: 9.5 MB, less than 100.00% of C++ online submissions for Cells with Odd Values in a Matrix.
```
class Solution {
public:
    void incrementThis(vector<vector<int>> &mat, bool isRow, int index, int &numOfOdd){
        if(isRow){
            for(int i(0);i<mat[0].size();i++){
                mat[index][i]+=1;
                if(mat[index][i] & 1) numOfOdd++;
                else numOfOdd--;
            }
        }else{
            for(int i(0);i<mat.size();i++){
                mat[i][index]+=1;
                if(mat[i][index] & 1) numOfOdd++;
                else numOfOdd--;
            }
        }
    }
    int oddCells(int n, int m, vector<vector<int>>& indices) {
        vector<vector<int>> mat(n,vector<int>(m,0));
        int numOfOdd(0); // 0 i.e in beginning no element is odd
        
        for(vector<int> index: indices){
            incrementThis(mat,true,index[0],numOfOdd);
            incrementThis(mat,false,index[1],numOfOdd);
        }
        return numOfOdd;
    }
};
```

------
Runtime: 4 ms, faster than 82.65% of C++ online submissions for Cells with Odd Values in a Matrix.
Memory Usage: 9.5 MB, less than 100.00% of C++ online submissions for Cells with Odd Values in a Matrix.
```
class Solution { // using 2D bool array is efficient
public:
    int oddCells(int n, int m, vector<vector<int>>& indices) {
        vector<vector<bool>> mat(n,vector<bool>(m,false));
        for(vector<int> index: indices){
            auto r(index[0]),c(index[1]);
            for(int i(0);i<n;i++) mat[i][c]=!mat[i][c];
            for(int j(0);j<m;j++) mat[r][j]=!mat[r][j];
        }
        
        return accumulate(mat.begin(),mat.end(),0,[](int lhs,vector<bool> &rhs){
            return accumulate(rhs.begin(),rhs.end(),lhs);
        });
    }
};
```

-----
Runtime: 4 ms, faster than 82.65% of C++ online submissions for Cells with Odd Values in a Matrix.
Memory Usage: 9.5 MB, less than 100.00% of C++ online submissions for Cells with Odd Values in a Matrix.
```
class Solution { // using 2D bool array is efficient
public:
    int oddCells(int n, int m, vector<vector<int>>& indices) {
        vector<vector<bool>> mat(n,vector<bool>(m,false));
        for(vector<int> index: indices){
            auto r(index[0]),c(index[1]);
            for(int i(0);i<n;i++) mat[i][c]=!mat[i][c];
            for(int j(0);j<m;j++) mat[r][j]=!mat[r][j];
        }
        
        return accumulate(mat.begin(),mat.end(),0,[](int lhs,vector<bool> &rhs){
            return lhs + accumulate(rhs.begin(),rhs.end(),0);
        });
    }
};
```

------
Runtime: 4 ms, faster than 82.65% of C++ online submissions for Cells with Odd Values in a Matrix.
Memory Usage: 9.5 MB, less than 100.00% of C++ online submissions for Cells with Odd Values in a Matrix.
```
class Solution {
public:
    int oddCells(int n, int m, vector<vector<int>>& indices) {
        vector<vector<bool>> mat(n,vector<bool>(m,false));
        for(vector<int> index: indices){
            auto r(index[0]),c(index[1]);
            for(int i(0);i<n;i++) mat[i][c]=!mat[i][c];
            for(int j(0);j<m;j++) mat[r][j]=!mat[r][j];
        }
        
        return accumulate(mat.cbegin(),mat.cend(),0,[](auto lhs,const auto &rhs){
            return lhs + accumulate(rhs.cbegin(),rhs.cend(),0);
        });
    }
};
```

-------
Runtime: 4 ms, faster than 82.62% of C++ online submissions for Cells with Odd Values in a Matrix.
Memory Usage: 9.5 MB, less than 100.00% of C++ online submissions for Cells with Odd Values in a Matrix.
```
class Solution { 
public:
    int oddCells(int n, int m, vector<vector<int>>& indices) {
        vector<vector<int>> mat(n);
        for(int i(0);i<n;i++) mat[i].resize(m); // the default values (0 for int) would be useful 
        
        for(auto &index: indices){
            for(int i(0);i<n;i++) mat[i][index[1]]+=1;
            for(int j(0);j<m;j++) mat[index[0]][j]+=1;
        }
        
        int oddCellsCount(0);
        for(auto &row: mat)
            for(auto &col: row)
                if(col & 1) oddCellsCount++;
        
        return oddCellsCount;
    }
};
```

--------
Runtime: 4 ms, faster than 82.62% of C++ online submissions for Cells with Odd Values in a Matrix.
Memory Usage: 9.7 MB, less than 100.00% of C++ online submissions for Cells with Odd Values in a Matrix.
```
class Solution {
public:
    int oddCells(int n, int m, vector<vector<int>>& indices) {
        vector<int> rowsToIncrement,colsToIncrement;
        
        for(auto index: indices){
            rowsToIncrement.push_back(index[0]);
            colsToIncrement.push_back(index[1]);
        }
        
        int oddCellsCount(0);
        vector<vector<int>> mat(n,vector<int>(m,0));
        
        for(int i(0);i<rowsToIncrement.size();i++){
            for(int j(0);j<m;j++){
                if(++mat[rowsToIncrement[i]][j] & 1) oddCellsCount++;
                else oddCellsCount--;
            }
        }
        
        for(int i(0);i<colsToIncrement.size();i++){
            for(int j(0);j<n;j++){
                if(++mat[j][colsToIncrement[i]] & 1) oddCellsCount++;
                else oddCellsCount--;
            }
        }
        
        return oddCellsCount;
    }
};
```

------
Runtime: 4 ms, faster than 82.62% of C++ online submissions for Cells with Odd Values in a Matrix.
Memory Usage: 9.3 MB, less than 100.00% of C++ online submissions for Cells with Odd Values in a Matrix.
```
class Solution {
public:
    int oddCells(int n, int m, vector<vector<int>>& indices) {
        vector<bool> rows(n,false),cols(m,false);
        for(auto index: indices){
            rows[index[0]]=!rows[index[0]];
            cols[index[1]]=!cols[index[1]];
        }
        
        int oddCount(0);
        for(int i(0);i<n;i++){
            for(int j(0);j<m;j++){
                if(rows[i]^cols[j]) oddCount++;
            }
        }
        return oddCount;
    }
};
```
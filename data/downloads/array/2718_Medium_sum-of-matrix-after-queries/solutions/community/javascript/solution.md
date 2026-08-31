# Step by step detailed explanation of short code🔥

**Author:** SumitPokhriyal
**Votes:** 3
**Link:** [https://leetcode.com/problems/sum-of-matrix-after-queries/solutions/3595356/](https://leetcode.com/problems/sum-of-matrix-after-queries/solutions/3595356/)

---

# Intuition
The problem involves performing sum queries on a matrix. We are given the size of the matrix n and a list of queries, where each query specifies whether to add a value to a row or column and the corresponding index. Our goal is to calculate the sum after applying all the queries.

# Approach
1. Initialize a variable sum to keep track of the sum and set it to 0.
2. Create two sets, row and col, to store the indices of the rows and columns affected by the queries.
3. Iterate over the queries in reverse order, starting from the last query. This allows us to process the queries in reverse order while still maintaining the correct sum.
4. For each query, extract the type, index, and value.
5. If the query type is 1 (column query), check if the column index ind is already present in the col set. If it is, continue to the next query.
6. Add the column index ind to the col set.
7. Update the sum by adding the product of the value val and the number of rows not affected by the column queries (n - row.size).
8. If the query type is 0 (row query), check if the row index ind is already present in the row set. If it is, continue to the next query.
Add the row index ind to the row set.
9. Update the sum by adding the product of the value val and the number of columns not affected by the row queries (n - col.size).
10. After processing all the queries, return the final value of sum.
# Complexity
* Time complexity: O(k), where k is the number of queries. We iterate over the queries in reverse order, performing constant time operations for each query.
* Space complexity: O(n), where n is the size of the matrix. We use two sets to store the indices of the affected rows and columns, which can have a maximum size of n.

# Code
```
function matrixSumQueries(n: number, queries: number[][]): number {
    let sum = 0 ;
    let row = new Set() , col = new Set() , len = queries.length;
    for( let i = len - 1 ; i >= 0 ; i-- ){
        let [type , ind , val] = queries[i];
        if(type){
            if(col.has(ind))continue;
            col.add(ind);
            sum += (val * (n - row.size));
        }
        else {
            if(row.has(ind))continue;
            row.add(ind);
            sum += (val * (n - col.size));
        }
    }
    return sum;
};
```
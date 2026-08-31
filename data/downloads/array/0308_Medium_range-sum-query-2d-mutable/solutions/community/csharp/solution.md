# C# Binary Index Tree

**Author:** dwluciano
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-sum-query-2d-mutable/solutions/2888728/](https://leetcode.com/problems/range-sum-query-2d-mutable/solutions/2888728/)

---

Fenwick Tree Generic implementation

# Code
```
public class NumMatrix {
  private readonly FenwickTree<int> tree;
  public NumMatrix(int[][] matrix) {
    tree = new(matrix, (prev, cur) => prev + cur, (prev, cur) => prev - cur);
  }
  
  public void Update(int row, int col, int val) =>
    tree.SetValue(row + 1, col + 1, val);
  
  public int SumRegion(int row1, int col1, int row2, int col2) =>
    tree.RangeQuery(row1 + 1, col1 + 1, row2 + 1, col2 + 1);
}

public sealed class FenwickTree<T> {
  private readonly T[][] tree;
  private readonly Func<T, T, T> operation;
  private readonly Func<T, T, T> inverseOperation;

  public FenwickTree(T[][] values, Func<T, T, T> operation, Func<T, T, T> inverseOperation){
    this.operation = operation;
    this.inverseOperation = inverseOperation;
    var rows = values.Length + 1;
    var cols = values[0].Length + 1;
    tree = new T[rows][];
    for(var row = 1; row < rows; row++)
      tree[row] = new T[cols];

    for(var row = 1; row < rows; row++)
      for(var col = 1; col < cols; ++col)
        UpdateFenwickTree(row, col, values[row - 1][col - 1]);
  }

  public T Query(int row, int col){
    var rows = tree.Length;
    var cols = tree[1].Length;
    T res = default;
    for(; row > 0; row -= row & -row)
      for(var c = col; c > 0; c -= c & -c)
        res = operation(res, tree[row][c]);
    return res;
  }

  public T RangeQuery(int row1, int col1, int row2, int col2){
    var A = Query(row1 - 1, col2);
    var B = Query(row2, col1 - 1);
    var C = Query(row1 - 1, col1 - 1);
    var D = Query(row2, col2);

    var res = inverseOperation(D, A);
    res = inverseOperation(res, B);
    res = operation(res, C);
    return res;
  }

  public void SetValue(int row, int col, T value){
    var cur = RangeQuery(row, col, row, col);
    value = inverseOperation(value, cur);
    UpdateFenwickTree(row, col, value);
  }

  private void UpdateFenwickTree(int row, int col, T val){
    var rows = tree.Length;
    var cols = tree[1].Length;
    for(; row < rows; row += row & -row)
      for(var c = col; c < cols; c += c & -c)
        tree[row][c] = operation(tree[row][c], val);
  }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * NumMatrix obj = new NumMatrix(matrix);
 * obj.Update(row,col,val);
 * int param_2 = obj.SumRegion(row1,col1,row2,col2);
 */
```
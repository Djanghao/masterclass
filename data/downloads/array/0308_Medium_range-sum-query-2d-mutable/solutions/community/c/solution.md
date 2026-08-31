# C++ Solution Using Segment Tree

**Author:** akanksha07
**Votes:** 4
**Link:** [https://leetcode.com/problems/range-sum-query-2d-mutable/solutions/689164/](https://leetcode.com/problems/range-sum-query-2d-mutable/solutions/689164/)

---

Create a vector of pointers to Segment Trees (refer: https://leetcode.com/problems/range-sum-query-mutable/), one for each row of the matrix. 

For update(i, j) queries, we simply call the update function for the ith row's segment tree. Time Complexity: O(logM).

For sum queries, we iterate through all the segment trees for all rows and get the cumulative sum for the given column range. Time Complexity: O(NlogM).

```
class SegmentTree{
private:
    vector<int> seg_tree;
    int n;
public:
    SegmentTree(vector<int> &A){
        n = A.size();
        if(n==0) return;
        seg_tree = vector<int> (4*n);
        buildTree(1,A,0, n-1);
        // for(int i=0; i<4*n; ++i) cout<<seg_tree[i]<<" ";
        // cout<<endl;
    }
    
    void buildTree(int v, vector<int> &A, int tl, int tr){
        if(tl==tr){
            seg_tree[v] = A[tl];
            return;
        }
        int tm = (tl+tr)/2;
        buildTree(2*v, A, tl, tm);
        buildTree(2*v+1, A, tm+1, tr);
        seg_tree[v] = seg_tree[2*v] + seg_tree[2*v+1];
    }
    
    void update(int v, int tl, int tr, int pos, int new_val){
        // cout<<"update "<<tl<<" "<<tr<<endl;
        if(tl>tr) return;
        if(tl==tr){
            seg_tree[v] = new_val;
            return;
        }
        int tm = (tl+tr)/2;
        if(pos<=tm){
            update(2*v, tl, tm, pos, new_val);
        }
        else if(pos>tm){
            update(2*v+1, tm+1, tr, pos, new_val);
        }
        seg_tree[v] = seg_tree[2*v] + seg_tree[2*v+1];
    }
    
    void update(int pos, int new_val){
        update(1, 0, n-1, pos, new_val);
    }
    
    int sum(int v, int tl, int tr, int l, int r){
        if(l>r) return 0;
        if(l==tl && r==tr) return seg_tree[v];
        int tm = (tl+tr)/2;
        return sum(2*v, tl, tm, l, min(r, tm)) + sum(2*v+1, tm+1, tr, max(tm+1, l), r);
    }
    
    int sumRange(int l, int r){
        return sum(1, 0, n-1, l, r);
    }
};

// time complexity:
// M-rows, N-columns
// update: O(logM)
// sum : O(NlogM)

// space complexity:
// O(NM)
class NumMatrix {
public:
    vector<SegmentTree*> trees;
    NumMatrix(vector<vector<int>>& matrix) {
        int r = matrix.size();    if(r==0) return;
        int c = matrix[0].size(); if(c==0) return;
        trees = vector<SegmentTree*>(r);
        for(int i=0; i<r; ++i){
            trees[i] = new SegmentTree(matrix[i]);
        }
    }
    
    void update(int row, int col, int val) {
        trees[row]->update(col, val);
    }
    
    int sumRegion(int row1, int col1, int row2, int col2) {
        int res = 0;
        for(int i=row1; i<=row2; ++i){
            res += trees[i]->sumRange(col1, col2);
        }
        return res;
    }
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * NumMatrix* obj = new NumMatrix(matrix);
 * obj->update(row,col,val);
 * int param_2 = obj->sumRegion(row1,col1,row2,col2);
 */
```
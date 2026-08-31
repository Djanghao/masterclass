# [C++/Java] Segment Tree (Max Range Query)

**Author:** Student2091
**Votes:** 23
**Link:** [https://leetcode.com/problems/longest-increasing-subsequence-ii/solutions/2560103/](https://leetcode.com/problems/longest-increasing-subsequence-ii/solutions/2560103/)

---

#### Strategy
For every element `A[i]`, we check the range `[A[i]-k, A[i]-1]` for the current best length and add 1. 
The problem here is that, we also need to update the max and it is not a prefix range from 0 to some number, so fenwick tree won't work.

I figure segment tree is good for this because it supports update and query in both `O(logn)`. 

`Time O(log(max(A[i])) * N)`
`Space O(max(A[i]))`

#### C++
```C++
constexpr int N = 100001;
class Solution {
public: 
    array<int, 2*N> seg{};
    
    void update(int pos, int val){ // update max
        pos += N;
        seg[pos] = val;
 
        while (pos > 1) {
            pos >>= 1;
            seg[pos] = max(seg[2*pos], seg[2*pos+1]);
        }
    }
 
    int query(int lo, int hi){ // query max [lo, hi)
        lo += N;
        hi += N;
        int res = 0;
 
        while (lo < hi) {
            if (lo & 1) {
                res = max(res, seg[lo++]);
            }
            if (hi & 1) {
                res = max(res, seg[--hi]);
            }
            lo >>= 1;
            hi >>= 1;
        }
        return res;
    }
    
    int lengthOfLIS(vector<int>& A, int k) {
        int ans = 0;
        for (int i = 0; i < size(A); ++i){
            int l = max(0, A[i]-k);
            int r = A[i];
            int res = query(l, r) + 1; // best res for the current element
            ans = max(res, ans);
            update(A[i], res); // and update it here
        }
        
        return ans;
    }
};
```

</br>

_____________________________

#### Java
```Java
class Solution {

    int N = 100001;
    int[] seg = new int[2*N];
    
    void update(int pos, int val){  // update max
        pos += N;
        seg[pos] = val;
 
        while (pos > 1) {
            pos >>= 1;
            seg[pos] = Math.max(seg[2*pos], seg[2*pos+1]);
        }
    }
 
    int query(int lo, int hi){ // query max [lo, hi)
        lo += N;
        hi += N;
        int res = 0;
 
        while (lo < hi) {
            if ((lo & 1)==1) {
                res = Math.max(res, seg[lo++]);
            }
            if ((hi & 1)==1) {
                res = Math.max(res, seg[--hi]);
            }
            lo >>= 1;
            hi >>= 1;
        }
        return res;
    }
    
    public int lengthOfLIS(int[] A, int k) {
        int ans = 0;
        for (int i = 0; i < A.length; ++i){
            int l = Math.max(0, A[i]-k);
            int r = A[i];
            int res = query(l, r) + 1; // best res for the current element
            ans = Math.max(res, ans);
            update(A[i], res); // and update it here
        }
        return ans;
    }
}
```
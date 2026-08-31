# [C++/Python] Fenwick Tree O(N log M)

**Author:** karutz
**Votes:** 6
**Link:** [https://leetcode.com/problems/create-sorted-array-through-instructions/solutions/927503/](https://leetcode.com/problems/create-sorted-array-through-instructions/solutions/927503/)

---

Build a Fenwick Tree of size `m = 1e5` and query the number of elements in the range `[0,x)` in `O(log m)` time.
*  https://en.wikipedia.org/wiki/Fenwick_tree

**Python**
```python
class Solution:
    def createSortedArray(self, instructions):
        t = [0] * 100001
        
        def incr(i):
            while i < 100001:
                t[i] += 1
                i += i & -i
                
        def query(i):
            ret = 0
            while i > 0:
                ret += t[i]
                i -= i & -i
            return ret
        
        ans = 0
        for i, x in enumerate(instructions):
            ans += min(query(x - 1), i - query(x))
            ans %= 1000000007
            incr(x)

        return ans
```
**C++**
```c++
class Solution {
public:
    static const int m = 100001;
    static const int mod = 1e9 + 7;
    int t[m];

    void incr(int i) {
        for (; i < m; i += i & -i) {
            t[i] += 1;
        }
    }
    
    int query(int i) {
        int sum = 0;
        for (; i > 0; i -= i & -i) {
            sum += t[i];
        }
        return sum;
    }
    
    int createSortedArray(vector<int>& A) {
        int ans = 0;
        for (int i = 0; i < A.size(); i++) {
            ans += min(query(A[i] - 1), i - query(A[i]));
            ans %= mod;
            incr(A[i]);
        }
        return ans;
    }
};
```
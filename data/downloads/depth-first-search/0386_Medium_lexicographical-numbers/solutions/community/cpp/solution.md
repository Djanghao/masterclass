# recursive DFS vs Iteration||Beats 100%

**Author:** anwendeng
**Votes:** 35
**Link:** [https://leetcode.com/problems/lexicographical-numbers/solutions/5813848/](https://leetcode.com/problems/lexicographical-numbers/solutions/5813848/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1st solution is a recursive DFS.

Later try other. 2nd one is an iterative solution. This solution is the real answer for LC
> You must write an algorithm that runs in O(n) time and uses O(1) extra space. 
# Approach
<!-- Describe your approach to solving the problem. -->
1. Let ` vector<int> ans; int n;` be member variables.
2. Define the recursive function `void f(int i)`
3. When `(i>n)` return;
4. If `i>0` append `i` to `ans`
5. Proceed a loop ` for(int j=(i==0)?1:0; j<=9; j++)` do the following
```
int x=10*i+j;
if (x>n) break;
f(x);// recursive call
```
6. In `lexicalOrder(int n)`, set `this->n=n;`
7. Reserve space  `ans.reserve(n);`
8. call `f(0)`
9. `ans` is the answer
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)\	o O(1)$$
# Code recursive DFS||C++3ms Beats 94.22%
```cpp []
class Solution {
public:
    vector<int> ans;
    int n;
    void f(int i){
        if (i>n) return;
        if (i>0) ans.push_back(i);
        for(int j=(i==0)?1:0; j<=9; j++){
            int x=10*i+j;
            if (x>n) break;
            f(x);
        }
    }
    vector<int> lexicalOrder(int n) {
        this->n=n;
        ans.reserve(n);
        f(0);
        return ans;
    }
};
```
# C++ iterative solution||0ms Beats 100.00%
```
class Solution {
public:
    static vector<int> lexicalOrder(int n) {
        vector<int> ans(n);
        int x=1;
        for(int i=0; i<n; i++){
            ans[i]=x;
            if (x*10>n){
                if (x==n) x/=10;
                x++;
                while(x%10==0) x/=10;
            } 
            else x*=10;          
        }
        return ans;
    }
};
```
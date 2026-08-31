# C++ 3 methods. Recursion, Iterative and O(1) alter input

**Author:** mrylinZ
**Votes:** 1
**Link:** [https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/solutions/1776973/](https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/solutions/1776973/)

---

Summarize of my thought on this problem.

M1: Template from building BST using pre-order traverse (1008)
O(N) go thru preorder input, O(H) recursion check.

M2: Using a stack to track nodes.  2 rules in BST preOrder
1. Go left, as long as larger than some lowerBound
2. Set lower bound to curr node **direct** parent, whenever go right(go larger)

M3: Update to M2.
Using input preorder vector as simulation of (monotonic) stack.
O(N) visit all nodes. O(1) space, as we alter input.

```
class Solution {
public:
    bool verifyPreorder(vector<int>& preorder) {
        int pos = 0;
        
        traverse(preorder, INT_MIN, INT_MAX, pos);
        
        return pos == preorder.size();  
    }
    
private:
    void traverse(vector<int>& preorder, int L, int R, int &pos) {
        if (pos >= preorder.size() || L > R) return;
        
        int curr = preorder[pos];
        if ( curr < L || curr > R) return;
        
        ++pos;
        //check left
        traverse(preorder, L, curr, pos);
        //check right
        traverse(preorder, curr, R, pos);
    }
};
```

```
class Solution {
public:
    bool verifyPreorder(vector<int>& preorder) {
        //M2: using a stack to track node. set lower bound to curr node parent, whenever go right(go larger)
        stack<int> s;
        int lowerBound = INT_MIN;
        
        for (auto num: preorder) {
            if (num < lowerBound) return false;
            
            while(!s.empty() && num > s.top()) {
                lowerBound = s.top();
                s.pop();  
            }
            
            s.push(num);
        }
        
        return true;
    }
};
```

M3: compare this to M2. This is a line by line translation :)
```
class Solution {
public:
    bool verifyPreorder(vector<int>& preorder) {
        //M3: based on M2. using i/p vector to simulate a stack
        int sTop = -1, pos = 0;
        int lowerBound = INT_MIN;
        
        while(pos < preorder.size()) {
            if (preorder[pos] < lowerBound) return false;
            
            while(sTop >= 0 && preorder[pos] > preorder[sTop]) {
                lowerBound = preorder[sTop];
                --sTop;  
            }
            
            preorder[++sTop] = preorder[pos];
            ++pos;
        }
        
        return true;
    }
};
```
# [C++] 2 Solutions | Recursive, Iterative DFS, Explained | Left Shift and Simple Math

**Author:** lllllll2
**Votes:** 56
**Link:** [https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/solutions/835906/](https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/solutions/835906/)

---

**Explanation**
The key here is tree traversal and generating the numbers as we go from the root towards the leaves.
Using shift operators, we can always keep the current value, `cur_val` in base 10 and as soon as we reach any leaf, we add this current value to the running answer.

`cur_val = (cur_val << 1) | rt->val;`
`cur_val << 1` means we're shifting the bits of `cur_val` to the left by 1 place, which is equivalent to multiplying `cur_val` by 2 (in base 10). Bitwise OR is used to set a particular bit. Let's take an example!
Suppose, the root-to-leaf path is `1->0->1`.
Then, at the root, initially `cur_val` is 0. We multiply it by 2 and perform bitwise OR with 1 which makes `cur_val` 1.
Next, `cur_val` is 1. We multiply it by 2 and perform bitwise OR with 0 which makes `cur_val` 2.
Last, at the leaf, `cur_val` is 2. We multiply it by 2 and perform bitwise OR with 1 which makes `cur_val` 5.
101 (base 2) is 5 (base 10).

----------------------------------------------

**Recursive Code (using Left Shift operator)**
```
class Solution {
public:
    int sumRootToLeafHelper(TreeNode* rt, int cur_val) {
        if(! rt) return 0;
        
        cur_val = (cur_val << 1) | rt->val;
        
        if(!rt->left && !rt->right)
			return cur_val;
			
        return sumRootToLeafHelper(rt->left, cur_val) + sumRootToLeafHelper(rt->right, cur_val);
    }
    
    int sumRootToLeaf(TreeNode* rt) {
        return sumRootToLeafHelper(rt, 0);
    }
};
```

-------------

We can also combine these two functions in the same given function using a default argument to get an even more compact solution (Credits to [@guybrush2323](https://leetcode.com/guybrush2323/ )):

```
static int sumRootToLeaf(const TreeNode* r, uint32_t sum = 0) {
        if (!r) return 0;
        sum |= r->val;
        if (!r->left && !r->right) return sum; // leaf
        sum <<= 1;
        return sumRootToLeaf(r->left, sum) + sumRootToLeaf(r->right, sum);
}
```

------------------------------------------------------

**Iterative Code (using Simple Math)**
```
class Solution {
public:
    int sumRootToLeaf(TreeNode* rt) {
        if(! rt) return 0;
        
        int ans = 0;
        stack<pair<TreeNode*,int>> st;
        st.push({rt,0});
        
        while(! st.empty()) {
            auto curp = st.top(); st.pop();
            TreeNode* cur = curp.first;
            int cur_val = curp.second;
            
            // Equivalent to left shift by 1 and then ORing by cur->val.
            cur_val = cur_val*2 + cur->val;
            
            if(!cur->left && !cur->right)
                ans += cur_val;
            
            if(cur->left) st.push({cur->left, cur_val});
            if(cur->right) st.push({cur->right, cur_val});
        }
        
        return ans;
        
    }
};
```

----------------------------------------
Please feel free to ask your doubts in the comments. Please **Upvote** to help others!
Have a great day!
# Dynamic Segment Tree || C++ || Fully Commented Code

**Author:** yadivyanshu
**Votes:** 12
**Link:** [https://leetcode.com/problems/count-integers-in-intervals/solutions/3516057/](https://leetcode.com/problems/count-integers-in-intervals/solutions/3516057/)

---

# Code
```
class node{
    public:
    int val, lazy;
    node *left, *right;
    node() {
        val = 0, lazy = 0;
        left = right = NULL;
    }
};

class ST{
    public:
    node *root = new node();

    node* getRoot() {
        return root;
    }

    void update(node *root, int low, int high, int l, int r) {
        // non overlap -> low high l r, l r low high
        if(high < l || r < low)return;

        if(!root->left) {
            root->left = new node();
            root->right = new node();
        }

        //update current node and propagate laziness to the child nodes
        if(root->lazy) {
            root->val = high - low + 1;
            if(low != high) {
                root->left->lazy = 1;
                root->right->lazy = 1;
            }
            root->lazy = 0;
        }

        // all ranges are covered then return 
        if(root->val == high - low + 1)return;

        // comp overlap -> l low high r
        // assign value (high-low+1) and propagate laziness to the child nodes 
        if(low >= l && high <= r) {
            root->val = high - low + 1;
            if(low != high) {
                root->left->lazy = 1;
                root->right->lazy = 1;
            }
            root->lazy = 0;
            return;
        }

        int mid = low + (high - low) / 2;
        update(root->left, low, mid, l, r);
        update(root->right, mid+1, high, l, r);
        // update node range from its child nodes' ranges
        root->val = root->left->val + root->right->val;
    }
};

class CountIntervals {
public:
    ST obj;
    node *root = obj.getRoot();

    CountIntervals() {
    }
    
    void add(int left, int right) {
        obj.update(root, 0, 1e9, left, right);
    }
    
    int count() {
        return root->val;
    }
};

/**
 * Your CountIntervals object will be instantiated and called as such:
 * CountIntervals* obj = new CountIntervals();
 * obj->add(left,right);
 * int param_2 = obj->count();
 */
```
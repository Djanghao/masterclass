# Tree with Counters

**Author:** votrubac
**Votes:** 2
**Link:** [https://leetcode.com/problems/distribute-elements-into-two-arrays-ii/solutions/4838855/](https://leetcode.com/problems/distribute-elements-into-two-arrays-ii/solutions/4838855/)

---

This is a classic problem of counting smaller (larger) elements in a mutating container.

Similar problems:
- [315. Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/discuss/76628/9-solutions-with-pictures-and-runtime-comparison)
- [493. Reverse Pairs](https://leetcode.com/problems/reverse-pairs/discuss/97322/C%2B%2B-Self-ballancing-BST-with-counters)

> Brute-force quadratic solutions are accepted for this problem due to weak test cases and higher runtime limits.
 
For counting larger elements, we can use BST, or, with value compression, a segment or Fenwick (BIT) tree.

The standard BST implementation (map or set) won't help us: while we can find the insertion point in a logarithmic time, counting smaller/larger elements will still take a linear time.

Instead, we use a custom BST implementation that tracks the statistic (number of elements on the left/right) for each node.

> Note that we need to also balance the tree as we populate it to maintain logarithmic search time (avoid "vines").

**C++**
```cpp
template<class T> class TreeNodeWithCounter {
    T val;
    TreeNodeWithCounter *left = nullptr, *right = nullptr;
    int cnt_left = 0, cnt_right = 0, cnt_val = 1;
public:
    ~TreeNodeWithCounter() { delete left; delete right; }
    TreeNodeWithCounter(T v) : val(v) {};
    void insert(T v, TreeNodeWithCounter **thisNode) {
        if (v == val) 
            ++cnt_val;
        else if (v < val) {
            ++cnt_left;
            if (left == nullptr)
                left = new TreeNodeWithCounter(v);
            else 
                left->insert(v, &left);
        }
        else {
            ++cnt_right;
            if (right == nullptr)
                right = new TreeNodeWithCounter(v);
            else
                right->insert(v, &right);
        }
        if (cnt_left > cnt_right + 2) { // right rotation
            *thisNode = left;
            left = left->right;
            (*thisNode)->right = this;
            this->cnt_left = (*thisNode)->cnt_right;
            (*thisNode)->cnt_right += this->cnt_val + this->cnt_right;
        }
        else if (cnt_left + 2 < cnt_right) { // left rotation
            *thisNode = right;
            right = right->left;
            (*thisNode)->left = this;
            this->cnt_right = (*thisNode)->cnt_left;
            (*thisNode)->cnt_left += this->cnt_val + this->cnt_left;
        }
    }
    int larger(T v) {
        if (v == val)
            return cnt_right;
        if (v < val) {
            return cnt_val + cnt_right + (left == nullptr ? 0 : left->larger(v));
        }
        return right == nullptr ? 0 : right->larger(v);
    }    
};
class Solution {
public:
    vector<int> resultArray(vector<int>& nums) {
        vector<int> a1{nums[0]}, a2{nums[1]};
        auto r1 = new TreeNodeWithCounter(nums[0]), r2 = new TreeNodeWithCounter(nums[1]);
        for (int i = 2; i < nums.size(); ++i) {
            int l1 = r1->larger(nums[i]), l2 = r2->larger(nums[i]);
            if (l1 < l2 || (l1 == l2 && a2.size() < a1.size())) {
                a2.push_back(nums[i]);
                r2->insert(nums[i], &r2);
            }            
            else {
                a1.push_back(nums[i]);
                r1->insert(nums[i], &r1); 
            }
        }
        delete r1, r2;
        a1.insert(end(a1), begin(a2), end(a2));
        return a1;
    }  
};
```

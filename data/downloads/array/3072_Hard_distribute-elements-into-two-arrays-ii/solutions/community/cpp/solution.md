# AVL tree | C++

**Author:** o_oyao
**Votes:** 34
**Link:** [https://leetcode.com/problems/distribute-elements-into-two-arrays-ii/solutions/4814059/](https://leetcode.com/problems/distribute-elements-into-two-arrays-ii/solutions/4814059/)

---

# Approach
<!-- Describe your approach to solving the problem. -->

Maintain two balanced binary tree. 

# Code
```
struct Node {

    int key;
    int size; 
    Node* left;
    Node* right;

    Node(int k, int s = 1, Node* l = nullptr, Node* r = nullptr)
        : key(k), size(s), left(l), right(r) {}
};

class BalancedTree {
private:
    Node* root;

    void updateSize(Node* node) {
        if (node != nullptr) {
            node->size = getSize(node->left) + getSize(node->right) + 1;
        }
    }

    Node* leftRotate(Node* x) {
        Node* y = x->right;
        x->right = y->left;
        y->left = x;
        updateSize(x);
        updateSize(y);
        return y;
    }

    Node* rightRotate(Node* y) {
        Node* x = y->left;
        y->left = x->right;
        x->right = y;
        updateSize(y);
        updateSize(x);
        return x;
    }
    
    Node* insert(Node* node, int key) {
        if (node == nullptr) {
            return new Node(key);
        }

        if (key < node->key) {
            node->left = insert(node->left, key);
        } else {
            node->right = insert(node->right, key);
        }

        updateSize(node);

        int balance = getSize(node->left) - getSize(node->right);
        if (balance > 1) {
            return rightRotate(node);
        } else if (balance < -1) {
            return leftRotate(node);
        }

        return node;
    }
    

    int greaterCount(Node* node, int key) {
        if (node == nullptr) {
            return 0;
        }

        if (key < node->key) {
            return getSize(node->right) + 1 + greaterCount(node->left, key);
        } else {
            return greaterCount(node->right, key);
        }
    }   
    
    int getSize(Node* node) {
        return (node != nullptr) ? node->size : 0;
    }

public:
    BalancedTree() : root(nullptr) {}
    
    void insert(int key) {
        root = insert(root, key);
    }

    int greatorCount(int key) {
        return greaterCount(root, key);
    }
    
    int getSize() {
        return getSize(root);
    }

};

class Solution {
public:
    vector<int> resultArray(vector<int>& nums) {
        int n = nums.size();
        if(n == 1) return nums;
        vector<int> arr1, arr2;
        BalancedTree tree1, tree2;
        
        arr1.push_back(nums[0]);
        arr2.push_back(nums[1]);
        tree1.insert(nums[0]);
        tree2.insert(nums[1]);
        for(int i = 2; i < n; i ++) {
            int cnt1 = tree1.greatorCount(nums[i]);
            int cnt2 = tree2.greatorCount(nums[i]);
            // cout << cnt1 << " " << cnt2 << endl;
            if(cnt1 > cnt2) {
                arr1.push_back(nums[i]);
                tree1.insert(nums[i]);
            } else if(cnt1 < cnt2) {
                arr2.push_back(nums[i]);
                tree2.insert(nums[i]);
            } else {
                int size1 = tree1.getSize(), size2 = tree2.getSize();
                // cout << " " << size1 << " " << size2 << endl;
                if(size1 > size2) {
                    arr2.push_back(nums[i]);
                    tree2.insert(nums[i]);
                } else {
                    arr1.push_back(nums[i]);
                    tree1.insert(nums[i]);
                }
            }
        }
        arr1.insert(arr1.end(), arr2.begin(), arr2.end());
        return arr1;
    }
};
```
# c++ solution easy to understand with stack

**Author:** eric_xx433
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-an-expression-tree-with-evaluate-function/solutions/5034167/](https://leetcode.com/problems/design-an-expression-tree-with-evaluate-function/solutions/5034167/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * This is the interface for the expression tree Node.
 * You should not remove it, and you can define some classes to implement it.
 */

class Node {
public:
  int val;
  char op;
  Node* left;
  Node* right;
  virtual ~Node () {
    if (left) delete left;
    if (right) delete right;
  }
  int evaluate() {
    if (!left) {
      return val;
    }
    int lRes = left->evaluate();
    int rRes = right->evaluate();
    if (op == '+') {
      return lRes + rRes;
    } else if (op == '-') {
      return lRes - rRes;
    } else if (op == '*') {
      return lRes * rRes;
    }
    return lRes / rRes;
  }
  Node(int v, char o) 
    : val(v), op(o), left(nullptr), right(nullptr) {}
protected:
  // define your fields here
};


/**
 * This is the TreeBuilder class.
 * You can treat it as the driver code that takes the postinfix input 
 * and returns the expression tree representing it as a Node.
 */

class TreeBuilder {
public:
  Node* buildTree(vector<string>& postfix) {
    stack<Node*> st;
    for (int i = 0; i < postfix.size(); ++i) {
      if (isdigit(postfix[i][0])) {
        Node* n = new Node(stoi(postfix[i]), '0');
        st.push(n);
      } else {
        Node* op = new Node(0, postfix[i][0]);
        op->right = st.top();
        st.pop();
        op->left = st.top();
        st.pop();
        st.push(op);
      }
    }
    return st.top();
  }
};


/**
 * Your TreeBuilder object will be instantiated and called as such:
 * TreeBuilder* obj = new TreeBuilder();
 * Node* expTree = obj->buildTree(postfix);
 * int ans = expTree->evaluate();
 */
```
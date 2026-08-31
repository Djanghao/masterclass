# Java/C++ Implementing an abstract class

**Author:** ysonglc
**Votes:** 24
**Link:** [https://leetcode.com/problems/design-an-expression-tree-with-evaluate-function/solutions/915167/](https://leetcode.com/problems/design-an-expression-tree-with-evaluate-function/solutions/915167/)

---

Borrowed the idea https://leetcode.com/problems/design-an-expression-tree-with-evaluate-function/discuss/910018/C%2B%2BPython-The-Intended-Solution-During-The-Interview-Polymorphism

and simplied the design as two concrete classes:

## Java 

```
abstract class Node {
    public abstract int evaluate();
    // define your fields here
};

class NumNode extends Node {
    private int val;
    public NumNode(int val) {
        this.val = val;
    }
    public int evaluate() {
        return this.val;
    }
};

class OpNode extends Node {
    private char op;
    private Node left;
    private Node right;
    public OpNode(char op, Node left, Node right) {
        this.op = op;
        this.left = left;
        this.right = right;
    }
    public int evaluate() {
        switch(this.op) {
            case '+':
                return this.left.evaluate() + this.right.evaluate();
            case '-':
                return this.left.evaluate() - this.right.evaluate();
            case '*':
                return this.left.evaluate() * this.right.evaluate();
            case '/':
                return this.left.evaluate() / this.right.evaluate();
            default:
                return 0;
        }
    }
};

class TreeBuilder {
    Node buildTree(String[] postfix) {
        Stack<Node> st = new Stack<Node>();
        for (String s : postfix){
            if(Character.isDigit(s.charAt(0))){
                st.add(new NumNode(Integer.parseInt(s)));
            }else{
                Node right = st.pop();
                Node left = st.pop();
                st.add(new OpNode(s.charAt(0), left, right));
            }
        }
        return st.peek();
    }
};
```

## C++ 

```
class Node {
public:
    virtual ~Node () {};
    virtual int evaluate() const = 0;
protected:
    // define your fields here
};

class NumNode: public Node {
public:
    NumNode(int val) : val(val) {};
    int evaluate() const {
        return val;
    };
protected:
    int val;
};

class OpNode: public Node {
public:
    OpNode(char op, Node *left, Node *right) : op(op), left(left), right(right) {};
    int evaluate() const;
protected:
    char op;
    Node *left;
    Node *right;
};

int OpNode::evaluate() const {
    switch(this->op) {
        case '+':
            return left->evaluate() + right->evaluate(); 
        case '-':
            return left->evaluate() - right->evaluate(); 
        case '*':
            return left->evaluate() * right->evaluate(); 
        case '/':
            return left->evaluate() / right->evaluate(); 
        default:
            return 0;
    }
}

class TreeBuilder {
public:
    Node* buildTree(vector<string>& postfix) {
        stack<Node*> st;
        for (auto s: postfix) {
            if(isdigit(s[0])) {
                st.push(new NumNode(stoi(s)));
            }else{
                auto r = st.top();
                st.pop();
                auto l = st.top();
                st.pop();
                st.push(new OpNode(s[0], l, r));
            }
        }
        return st.top();
    }
};

```
# C++ 4ms O(n) intuitive solution

**Author:** codygeeker
**Votes:** 0
**Link:** [https://leetcode.com/problems/build-binary-expression-tree-from-infix-expression/solutions/5999590/](https://leetcode.com/problems/build-binary-expression-tree-from-infix-expression/solutions/5999590/)

---

# Intuition
This is very similar to Basic Calculator 3 expect that we don't calculate the value here. Instead, we just keep building the tree. I'm using a stack data structure to simulate the order in which operations are processsed.

# Approach
Have two stacks - one for operators and one for nodes. While processing the string, push/pop operators and nodes into stack based on their priority - example '*' should be processed before '+' or '-', '(' should have the highest precedence.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```cpp []
/**
 * Definition for a binary tree node.
 * struct Node {
 *     char val;
 *     Node *left;
 *     Node *right;
 *     Node() : val(' '), left(nullptr), right(nullptr) {}
 *     Node(char x) : val(x), left(nullptr), right(nullptr) {}
 *     Node(char x, Node *left, Node *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    // if the previous operator was '(' then don't process it unless 
    // the current character is ')'
    // if the previous operator has higher or equal precendence
    // than current character, process that first
    bool compare(char op1, char op2){
        if(op1 == '(')
            return false;

        return op1 == '*' || op1 == '/' || op2 == '+' || op2 == '-';
    }

    void process(stack<char> &ops, stack<Node*> &nodes){
        char op = ops.top(); ops.pop();
        Node* right = nodes.top(); nodes.pop();
        Node* left = nodes.top(); nodes.pop();
        Node* newNode = new Node(op, left, right);
        nodes.push(newNode);        
    }

    Node* expTree(string s) {
        stack<char> operators;
        stack<Node*> nodes;

        for(int i=0;i<s.length();++i){
            char c = s[i];
            if(isdigit(c)){
                nodes.push(new Node(c));
            } else if(c == '('){
                operators.push(c);
            } else if(c == ')'){
                while(!operators.empty() && operators.top() != '('){
                    process(operators, nodes);
                }

                operators.pop();
            } else {
                while(!operators.empty() && compare(operators.top(), c)){
                    process(operators, nodes);                 
                }

                operators.push(c);
            }
        }

        while(!operators.empty()){
            process(operators, nodes);                  
        }

        return nodes.top();
    }
};
```
# [Javascript] Easy to understand - O(n), beats 95%

**Author:** vikas26294
**Votes:** 4
**Link:** [https://leetcode.com/problems/build-binary-expression-tree-from-infix-expression/solutions/1153561/](https://leetcode.com/problems/build-binary-expression-tree-from-infix-expression/solutions/1153561/)

---

As we've to create a binary tree using infix expression, we're first going to convert our infix expression to postfix expression. Once we've postfix expression, it's pretty straightforward to create expression tree.

Time Complexity: O(n)
Space Complexity: O(n)
Runtime: 64 ms, faster than 100.00%
Memory Usage: 38.5 MB, less than 94.74%

```
/**
 * @param {string} s
 * @return {Node}
 */
var expTree = function (s) {
  // create postfix from infix order
  const postfix = infixToPostfix(s);

  // create tree nodes and
  const treeNodes = [];

  // create tree using postfix expression
  while (postfix.length > 0) {
    // take out the first item of postfix expression
    const op = postfix.shift();

    if (isFinite(op)) {
      // operand, create tree node
      treeNodes.push(new Node(op));
    } else {
      // operator, make this root and set last two nodes as left & right
      const right = treeNodes.pop();
      const left = treeNodes.pop();
      treeNodes.push(new Node(op, left, right));
    }
  }

  return treeNodes[0];
};

// Get precedence of an operator
const getPrecedence = (operator) => {
  let precedence = 0;
  switch (operator) {
    case "+":
    case "-":
      precedence = 1;
      break;
    case "*":
      precedence = 2;
      break;
    case "/":
      precedence = 3;
      break;
  }
  return precedence;
};

// Convert infix to postfix expression
const infixToPostfix = (str) => {
  const postfix = []; // postfix expression
  const ops = []; // operators in stack for us to process

  for (let i = 0; i < str.length; i++) {
    if (isFinite(str[i])) {
      // number
      postfix.push(str[i]);
    } else if (str[i] === "(") {
      // opening bracket
      ops.push(str[i]);
    } else if (str[i] === ")") {
      // closing bracket
      while (ops[ops.length - 1] !== "(") {
        // process all operators until we read starting bracket
        postfix.push(ops.pop());
      }
      // remove starting bracket from stack
      ops.pop();
    } else {
      // operator, i.e. +, -, *, /
      while (
        ops.length > 0 &&
        getPrecedence(ops[ops.length - 1]) >= getPrecedence(str[i])
      ) {
        // Current operator's precendence is less than last one
        // that means, we can process last operator and add to postfix
        postfix.push(ops.pop());
      }
      // add the new operator for us to process later
      ops.push(str[i]);
    }
  }

  // process all remaining operators
  while (ops.length > 0) {
    postfix.push(ops.pop());
  }

  return postfix;
};
```
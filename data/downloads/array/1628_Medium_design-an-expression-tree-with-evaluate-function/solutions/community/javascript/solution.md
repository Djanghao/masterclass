# Javascript, NumNode, OperatorNode, Executor

**Author:** tlee9595
**Votes:** 3
**Link:** [https://leetcode.com/problems/design-an-expression-tree-with-evaluate-function/solutions/1627848/](https://leetcode.com/problems/design-an-expression-tree-with-evaluate-function/solutions/1627848/)

---

```
var Node = function () {
  if (this.constructor === Node) {
    throw new Error('Cannot instanciate abstract class');
  }
};

Node.prototype.evaluate = function () {
  throw new Error('Cannot call abstract method')
};

class OperatorExecutor {
    execute() {
        throw new Error('Cannot call abstract method');
    }
}

class PlusExecutor extends OperatorExecutor {
    constructor(left, right) {
        super();
        this.left = left;
        this.right = right;
    }
    execute() {
        return this.left.evaluate() + this.right.evaluate();
    }
}

class MinusExecutor extends OperatorExecutor {
    constructor(left, right) {
        super();
        this.left = left;
        this.right = right;
    }
    execute() {
        return this.left.evaluate() - this.right.evaluate();
    }
}

class MultiplyExecutor extends OperatorExecutor {
    constructor(left, right) {
        super();
        this.left = left;
        this.right = right;
    }
    execute() {
        return this.left.evaluate() * this.right.evaluate();
    }
}

class DivideExecutor extends OperatorExecutor {
    constructor(left, right) {
        super();
        this.left = left;
        this.right = right;
    }
    execute() {
        return this.left.evaluate() / this.right.evaluate();
    }
}

class ExecutorFactory {
    static getExecutor(left, right, operation) {
        if (operation === '+') 
            return new PlusExecutor(left, right);
        else if (operation === '-')
            return new MinusExecutor(left, right);
        else if (operation === '*') 
            return new MultiplyExecutor(left, right);
        else 
            return new DivideExecutor(left, right);
    }
}

class OperatorNode extends Node {
    constructor(operation) {
        super();
        this.operation = operation;
    }
    
    evaluate() {
        return this.operation.execute();
    }
}

class NumericNode extends Node {
    constructor(value) {
        super();
        this.value = value;
    }
    
    evaluate() {
        return this.value;
    }
}

/**
 * This is the TreeBuilder class.
 * You can treat it as the driver code that takes the postinfix input 
 * and returns the expression tree represnting it as a Node.
 */

class TreeBuilder{
	/**
     * @param {string[]} s
     * @return {Node}
     */
	buildTree(postfix) {
        let stack = []; // pop and push in JS is amortized O(1)
        let headOperatorNode = null;
        
        postfix.forEach(item => {
            if (this.isNumber(item)) {
                stack.push(new NumericNode(Number(item)));
            }
            else {
                headOperatorNode = this.addOperatorNode(stack, item);
            }
        });
        
        return headOperatorNode;
	}
    
    // pop two items, create Operator node, then add operator node to stack 
    addOperatorNode(stack, operation) {
        const rightNode = stack.pop();
        const leftNode = stack.pop();
        
        const executor = ExecutorFactory.getExecutor(leftNode, rightNode, operation);
        const newOperatorNode = new OperatorNode(executor);
        stack.push(newOperatorNode);
        
        return newOperatorNode;
    }
    
    isNumber(item) {
        return isNaN(item) === false;
    }
}
 ```
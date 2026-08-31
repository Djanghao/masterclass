# Javascript Test case TypeError??

**Author:** danieltichiyama
**Votes:** 29
**Link:** [https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/solutions/2167737/](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/solutions/2167737/)

---

Is the JavaScript test case for this broken?  I continue to get a TypeError.  Have tried copy/pasting other's BFS code into the editor, have tried returning the root node on the very first line, have tried returning a new Node() on the very first line.

The code is:

```
var connect = function(root) {
    if (!root) return root;
    
    let queue = [root];
    let tempQueue = [];
        
    while(queue.length){
        let curr = queue.splice(0, 1)[0];
        let {left, right} = curr;
                
        if (left) tempQueue.push(left);
        if (right) tempQueue.push(right);
        
        if (queue.length === 0){
            curr.next = null;
            queue = tempQueue;
            tempQueue = [];
        }else{
            curr.next = queue[0];
        }
    }
    
    return root;
};
```

The error is:

```
Line 109 in solution.js
             throw new TypeError(__serialize__(ret) + " is not valid value for the expected return type Node");
             ^
TypeError: {"val":1,"left":{"val":2,"left":{"val":4,"left":null,"right":null,"next":{"val":5,"left":null,"right":null,"next":{"val":7,"left":null,"right":null,"next":null}}},"right":{"val":5,"left":null,"right":null,"next":{"val":7,"left":null,"right":null,"next":null}},"next":{"val":3,"left":null,"right":{"val":7,"left":null,"right":null,"next":null},"next":null}},"right":{"val":3,"left":null,"right":{"val":7,"left":null,"right":null,"next":null},"next":null},"next":null} is not valid value for the expected return type Node
    Line 109: Char 20 in solution.js (Object.<anonymous>)
    Line 16: Char 8 in runner.js (Object.runner)
    Line 41: Char 26 in solution.js (Object.<anonymous>)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47
```
# Typescript | Explained | O(n) / O(√n)

**Author:** ivan-moskvin
**Votes:** 1
**Link:** [https://leetcode.com/problems/print-immutable-linked-list-in-reverse/solutions/1725203/](https://leetcode.com/problems/print-immutable-linked-list-in-reverse/solutions/1725203/)

---

We can solve in two ways, both O(n) time complexity.

# Using simple stack of all nodes
```
// Time O(n)
// Space O(n)
function printLinkedListInReverseLinear(head: ImmutableListNode) {
    const stack = [];
    
    stack.push(head);
    
    let next = head.getNext();
    
    while(next !== null) {
        stack.push(next);
        next = next.getNext();
    }
    
    while(stack.length > 0) stack.pop().printValue();
};
```

# Using stack, with \u221An length of chunk head nodes
Each item in this stack is used to format a chunk stack and process it.
```
// Time O(n)
// Space O(\u221An)
function printLinkedListInReverse(head: ImmutableListNode) {
    // Compute size of chunk
    let size = 0;
    let next = head.getNext();
    while(next !== null) {
        size++;
        next = next.getNext();
    }
    const chunkSize = Math.ceil(Math.sqrt(size));
    
    // Format chunk heads
    const chunkHeads = [];
    let current = head;
    let cnt = 0;
    
    while(current !== null) {
        if(cnt % chunkSize === 0) {
            chunkHeads.push(current);
        }
        current = current.getNext();
        cnt++;
    }
    
    // Proceed chunks
    while(chunkHeads.length > 0) {
        let currentHead = chunkHeads.pop();
        const currentStack = [];
        
        // Fill current stack
        for(let i = 0; i < chunkSize && currentHead !== null; i++) {
            currentStack.push(currentHead);
            currentHead = currentHead.getNext();
        }
            
        // Proceed current stack
        while(currentStack.length > 0) currentStack.pop().printValue();
    }
}
```
# some solution that i came up with in typescript, explanation that you can actually read

**Author:** johnsmith_2k
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-atoms/solutions/5477713/](https://leetcode.com/problems/number-of-atoms/solutions/5477713/)

---

# Intuition
build the data structure in one pass using a direct mapping via OOP principals

we can use a stack to store the active object that we're working on, whether it's an atom/element or a formula/molecule, and its parent


# Approach
loop iteratively through each element of the string/array
upon each iteration...
- if you hit a lowercase letter or number, append to the current buffer
- if you hit anything else...
  - first, flush buffer if you have a closed formula (we are starting something new)
  - if hit an uppercase letter, start a new element
  - if hit a closing parenthesis, close the formula

when flushing the buffer, flattens downwards onto the parent element in the stack
# Complexity
- Time complexity:
good enough

- Space complexity:
fine

# Code
```
type Node = {
    type: 'formula';
    count?: number;
    nodes: Node[];
    open: boolean;
} | {
    type: 'element';
    name: string;
    count?: number;
};
const lowercase = 'abcdefghijklmnopqrstuvwxyz';

function countOfAtoms(formula: string): string {
    const stack: Node[] = [
        {
            type: 'formula',
            nodes: [],
            open: true
        }
    ];

    for (const char of formula) {
        const topEl = stack[stack.length-1];
        const topType = topEl.type;
        const formulaOpen = (topType==='formula' && topEl.open);
        if (!isNaN(parseInt(char))) {
            topEl.count = (topEl.count===undefined) ? +char : (topEl.count*10+(+char));
        }
        else if (lowercase.includes(char) && topType==='element') {
            topEl.name+=char;
        }
        else {
            if (!formulaOpen)
                popTop(stack);
            if (char==='(')
                stack.push({
                    type: 'formula',
                    nodes: [],
                    open: true
                });
            else if (char==')') {
                const node = stack[stack.length-1];
                if (node.type==='formula') {
                    node.open = false;
                }
            }
            else {
                stack.push({
                    type: 'element',
                    name: char
                });
            }
        }
    }
    while(popTop(stack));
    return formatResults(stack[0]);
};

function popTop(stack: Node[]): boolean {
    if (stack.length<=1) {
        return false;
    }
    const node = stack.pop();
    if (node.type==='element') {
        node.count??=1;
        // console.log(`popping el ${node.name} @ ${node.count}`);
        for (let i=0; i<stack.length; i++) {
            const parentNode = stack[stack.length-i-1];
            if (parentNode.type==='formula') {
                parentNode.nodes.push(node);
                break;
            }
        }
    } else if (node.type === 'formula') {
        node.count??=1;
        // console.log(`popping formula @ ${node.count}`);
        for (const innerNode of node.nodes) {
            innerNode.count*=node.count??1;
            for (let i=0; i<stack.length; i++) {
                const parentNode = stack[stack.length-i-1];
                if (parentNode.type==='formula') {
                    parentNode.nodes.push(innerNode);
                    break;
                }
            }
        }
    }
    return true;
}

function formatResults(stack: Node) {
    const map = new Map<string, number>();
    if (stack.type === 'formula') {
        for (const node of stack.nodes) {
            if (node.type === 'element') {
                map.set(node.name, (map.get(node.name)??0)+node.count);
            }
        }
    }
    const sortedKeys = [...map.keys()].sort();
    return sortedKeys.reduce((acc, key) => acc+`${key}${map.get(key)>1?map.get(key):''}`,'');
}
```
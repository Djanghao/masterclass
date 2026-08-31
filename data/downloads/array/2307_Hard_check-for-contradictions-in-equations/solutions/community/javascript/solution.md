# DFS solution with a crystal clear, detailed, and carefully worded explanation

**Author:** abaransy
**Votes:** 5
**Link:** [https://leetcode.com/problems/check-for-contradictions-in-equations/solutions/2247044/](https://leetcode.com/problems/check-for-contradictions-in-equations/solutions/2247044/)

---

```JavaScript
const checkContradictions = (equations, values) => {
    const graph = new Map();
    const visited = new Map();

    const causesContradiction = (key, val) => {
        if (visited.has(key) === false) {
            visited.set(key, val);
            
            const dependentKeyValuePairs = graph.get(key);

            for (let i = 0; i < dependentKeyValuePairs.length; i++) {
                const [newKey, div] = dependentKeyValuePairs[i];
                
                if (causesContradiction(newKey, val / div))
                    return true;
            }
        }
        
        return Math.abs(visited.get(key)  - val) >= Math.pow(10, -5);
    };
    
    for (let i = 0; i < equations.length; i++) {
        const [firstVariable, secondVariable] = equations[i];

        if (graph.has(firstVariable) === false) {
            graph.set(firstVariable, []);
        }

        if (graph.has(secondVariable) === false) {
            graph.set(secondVariable, []);
        }

        graph.get(firstVariable).push([
            secondVariable, values[i]
        ]);
        
        graph.get(secondVariable).push([
            firstVariable, 1.0 / values[i]
        ]);
    }
    
    const keys = Array.from(graph.keys())

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];

        if (visited.has(key) === false && causesContradiction(key, 1)) {
            return true;
        }
    }

    return false;
}
```

The idea is this: 

Generate a graph where each node is an equation variable, and its edges are key value pairs ([key, value]) where *each value is the number you must divide the node's value by to solve for the value of the key.*

Read that sentence a few times and let it sync in.

Each node and its corresponding "edges", or key-value pairs, represents the set of relationships between a node's value and its dependent keys' values. 

The dfs approach above says, let us *assume* an initial value of 1 for each node, and let us solve for the value of each key in that node's list of edges, as well as those keys' dependents. Meanwhile, we will keep track of the solved values for the visited keys. 

If there are no contradicitions in the set of relationships between a node's value and its dependent keys' values, then given a node's assumed initial value of 1, the solved value for any of its dependent keys should be identical *every time we solve for it*. 

Example: 

```
[["a","b"],["b","c"],["a","c"]]
[3,0.5,1.5]
```

the graph for the above input looks like this

```
{
  'a' => [ [ 'b', 3 ], [ 'c', 1.5 ] ],
  'b' => [ [ 'a', 0.3333333333333333 ], [ 'c', 0.5 ] ],
  'c' => [ [ 'b', 2 ], [ 'a', 0.6666666666666666 ] ]
}
```

Assume an initial value of 1 for `a` then solve for the key in its first edge,  `b`.

If `a = 1`, then `b` must be `1 / 3` or `0.3333333333333333`

Now, having solved for `b`, we explore that node and its edges.

Given that `b = 0.3333333333333333`, we solve for the key in `b`'s first edge, `a`.

If `b = 0.3333333333333333`, then `a` must be `0.3333333333333333 / 0.3333333333333333` or `1`.

This is consistent with the value we initially assigned to `a`. So `return Math.abs(vis.get(key)  - val) >= Math.pow(10, -5);` returns `false`, and we move on to the key in in `b`'s second edge, `c`.

Given that `b = 0.3333333333333333`, we solve for the key in `b`'s second edge, `c`.

If `b = 0.3333333333333333`, then `c` must be `0.3333333333333333 / 0.5` or  `0.66666666666`.

Now, having solved for `c`, we explore that node and its edges.

Given that `c = 0.66666666666`, we solve for the key in `c`'s first edge, `b`.

If `c = 0.66666666666`, then `b` must be `0.66666666666 / 2` or  `0.3333333333333333`.

This is consistent with the value we previously solved for to `b`. So `return Math.abs(vis.get(key)  - val) >= Math.pow(10, -5);` returns `false`, and we move on to the key in in `c`'s second edge, `a`.

If `c = 0.66666666666`, then `a` must be `0.66666666666 / 0.66666666666` or `1`. 

This is consistent with the value we initially assigned to `a`. So `return Math.abs(vis.get(key)  - val) >= Math.pow(10, -5);` returns `false`, and we move on to the key in in `b`'s second edge, `c`.

Now, having finished exploring `c`'s edges, we go back up the stack to  `a`'s second edge, `c`.

If `a = 1`, then `c` must be `1 / 1.5` or `0.66666666666`

This is consistent with the value we previously solved for to `c`. So `return Math.abs(vis.get(key)  - val) >= Math.pow(10, -5);` returns `false`, and we are finished. There are no contradictions. 

Hope the above helps, and thanks to votrubac, from whom I learned the approach above.

Here is his original solution: https://leetcode.com/problems/check-for-contradictions-in-equations/discuss/2161350/DFS

-Aatef
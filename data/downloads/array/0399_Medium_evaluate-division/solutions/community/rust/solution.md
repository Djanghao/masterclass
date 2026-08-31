# [Rust] DFS Solution | 0ms | Explained

**Author:** naamancurtis
**Votes:** 4
**Link:** [https://leetcode.com/problems/evaluate-division/solutions/867362/](https://leetcode.com/problems/evaluate-division/solutions/867362/)

---

# A bit of context
As division is essentially a relationship between two numbers, we can model it as a weighted graph with the weight representing the result of the division. 

However as `a / b != b / a`,  we have to model it as a **directed** graph, but one where if we know the weighting for one direction, we can derive the weighting for the opposite direction.

# Applying it to the question

Given the format of the question `A / B = k` we can create an edge between `A` and `B` such that  `A` -- `k` --> `B`. Further more we can also derive the inverse `B` -- `1/k` --> `A`. (as `B / A = 1/k`). In addition to this, we can also use the knowledge that `A / A = 1.0` and include that within the solution _(You could either add this directly into the graph when constructing it, or alternatively just check for this condition when you parse your `query`)_.

We can then evaluate divison by traversing through the graph and multiplying the weightings of connected nodes together until we reach our target node. If we are not able to traverse from a start node to a target node, we don't have enough information to answer the question so we return `-1.0` in this case.

## Stepping through the example

### Known Equations
- `a / b = 2.0`
- `b / c = 3.0`

### Query: [ a / c ]
We can model our known equations in the graph as:
- `a -- 2.0 --> b`
- `b -- 3.0 --> c`

Therefore our path from `a -> c` then becomes: 
- `a -- 2.0 --> b -- 3.0 --> c`

If we multiply our weightings together `2.0 * 3.0 = 6.0`
- so `a / c = 6.0`

# Solution
_(Omitting all the optional checking and specifics of the collection apis for this explaination, to see what it looks like actually implemented, refer to the solution below)_

In this solution, the graph is modelled as a `let graph: HashMap<String, HashMap<String, f64> = ...`. The first call `let first_node = graph.get(&initial_node_key)` tells us whether the initial node is present in the graph. We can then identify all the nodes this one is connected to by iterating through the (keys, values) in the nested HashMap. To get the weighting between two nodes, we need to fetch the value within the nested HashMap `first_node.get(&second_node_key)`.

Thanks for reading, more than happy to hear any feedback on how this can be improved if anyone has any suggestions!

```rust
use std::collections::{HashMap, HashSet};

type Graph = HashMap<String, HashMap<String, f64>>;

impl Solution {
    pub fn calc_equation(equations: Vec<Vec<String>>, values: Vec<f64>, queries: Vec<Vec<String>>) -> Vec<f64> {
        let graph = build_graph(equations, values);
        queries
            .into_iter()
            .map(|query| dfs(&graph, query, &mut HashSet::new(), None).map_or(-1.0, |v| v))
            .collect()
    }
}

fn build_graph(equations: Vec<Vec<String>>, values: Vec<f64>) -> Graph {
    equations
        .into_iter()
        .zip(values.into_iter())
        .fold(HashMap::new(), |mut acc, (eq, val)| {
            let entry = acc.entry(eq[0].clone()).or_default();
            entry.insert(eq[1].clone(), val);

            let entry = acc.entry(eq[1].clone()).or_default();
            entry.insert(eq[0].clone(), 1.0 / val);

            acc
        })
}

fn dfs(
    graph: &Graph,
    query: Vec<String>,
    visited: &mut HashSet<String>,
    current_sum: Option<f64>,
) -> Option<f64> {
    visited.insert(query[0].clone());

    // Check the the node exists in the graph
    let entry = graph.get(&query[0])?;

    // a / a = 1.0
    if query[0] == query[1] {
        return Some(1.0);
    }

    // If our current node has a direct route to our target, return it
    if let Some(answer) = entry.get(&query[1]) {
        return current_sum.map_or(Some(*answer), |s| Some(s * *answer));
    };

    // Otherwise perform a DFS of connected nodes (that we haven't already visited)
    for path in entry.keys() {
        if !visited.contains(path) {
            if let Some(val) = entry.get(path) {
                let result = dfs(
                    graph,
                    vec![path.clone(), query[1].clone()],
                    visited,
                    current_sum.map_or(Some(*val), |s| Some(s * *val)),
                );
                if result.is_some() {
                    return result;
                }
            }
        }
    }
    None
}
```
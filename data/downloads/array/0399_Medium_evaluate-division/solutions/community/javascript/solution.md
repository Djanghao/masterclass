# ✅ DFS || Graph || JS Sol. || Explained with Approach ✨✅

**Author:** Rajat310
**Votes:** 48
**Link:** [https://leetcode.com/problems/evaluate-division/solutions/3546365/](https://leetcode.com/problems/evaluate-division/solutions/3546365/)

---

<!-- # Intuition -->
<!-- Describe your first thoughts on how to solve this problem. -->
 



# Approach
<!-- Describe your approach to solving the problem. -->


    - This below solution code uses a graph representation to store 
      the variable pairs and their corresponding values. 

    - It then uses a Depth-First Search (DFS) algorithm to evaluate 
      each query by traversing the graph and calculating the result.
       
    - The evaluateQuery function takes care of the DFS traversal.







# Complexity
- Time complexity: $$O(N * (V + E))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->








- Space complexity: $$O(E + V)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->










# Code
```
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
  
  // Step 1: Build the graph
  let graph = {};
  
  for (let i = 0; i < equations.length; i++) {
    
    let [numerator, denominator] = equations[i];
    
    let value = values[i];
    
    if (!graph[numerator]) {
      graph[numerator] = {};
    }

    if (!graph[denominator]) {
      graph[denominator] = {};
    }

    graph[numerator][denominator] = value;
    graph[denominator][numerator] = 1 / value;
  }

  // Step 2: Evaluate queries using DFS
  let evaluateQuery = (numerator, denominator, visited) => {
    
    if (!(numerator in graph) || !(denominator in graph)) {
      return -1.0;
    }

    if (numerator === denominator) {
      return 1.0;
    }

    visited.add(numerator);
    let neighbors = graph[numerator];

    for (let neighbor in neighbors) {
      
      if (!visited.has(neighbor)) {
        
        let result = evaluateQuery(neighbor, denominator, visited);
        
        if (result !== -1.0) {
          return neighbors[neighbor] * result;
        }
      }
    }

    return -1.0;
  };

  // Step 3: Process queries
  let results = [];
  
  for (let query of queries) {
    
    let [numerator, denominator] = query;
    let visited = new Set();
    let result = evaluateQuery(numerator, denominator, visited);
    
    results.push(result);
  }

  return results;
};
```

![cat img for upvote on LC.jpeg](./images/0.jpeg)

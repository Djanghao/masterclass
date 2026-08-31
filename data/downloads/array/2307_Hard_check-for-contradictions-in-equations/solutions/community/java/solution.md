# DFS, O(N)

**Author:** denar50
**Votes:** 5
**Link:** [https://leetcode.com/problems/check-for-contradictions-in-equations/solutions/4082388/](https://leetcode.com/problems/check-for-contradictions-in-equations/solutions/4082388/)

---

# Intuition
We start by treating the variables in the equations as nodes in a directed graph.
If we have the equation a / b = 3, the value of going from a to b is 3.
We traverse the graph by chaining values though multiplication.
Every time we arrive at a node, we mark it as visited and remember its value in a dictionary.
If we arrive at a node that we have already visited, then we compare the current value
and the value of the node in our visited dictionary.

Also consider that for a / b = 3, going from a to b in the graph is 3, but going from b to a is 1/3.

For the example 1: a / b = 3, b / c = 0.5, a / c = 1.5.

If we put these equations as they are in an adjacency list representing a graph it will look like this:
a -> (b, 3) (c, 1.5)
b -> (a, 1/3) (c, 0.5)
c -> (a, 2/3) (b, 2)

Then we traverse the graph starting from any node you like. Let's start from b.
Starting from b, we can say that the initial value is 1, (for b / b), this is how we "arrive" at b.
We register b as visited with the value 1.
Then from b we go to its neighbors, let's say we go to c. Then we multiply the values.
We multiply them to form a new equation. In this case we current value at b is 1 or b/b. Now to go to c
from b, we multiply the current value 1 with 0.5 which represents b / c.
Notice how we are multiplying (b / b) * (b / c) = 0.5
So we arrived now at node c and the value is 0.5. We register it as visited with the value 0.5 (b/c).
Notice that if we now choose to go to b, then we multiply the current value 0.5 with the value of going to b from c, 2
0.5 * 2 = (b / c) * (c / b) = 1. When we arrive at b, we notice it is already registered as visited, 
so we compare the current value 1 with the value when we visited 1.
Whenever we go from node to node, we are chaining equations and if we arrive at a visited node, the values have to match.

# Complexity
Time complexity: O(N) because when traversing the graph, we only visited a node once.
Space complexity: O(N) (where N is the number of variables) because the space we use is proportional to the number of variables that we have.


# Code
```
class Solution {
    private record Pair(String variable, Double value){}
    public boolean checkContradictions(List<List<String>> equations, double[] values) {
        var graph = new HashMap<String, List<Pair>>();
        var variables = new HashSet<String>();

        // Build the graph
        for(int eq = 0; eq < equations.size(); eq++) {
            var equation = equations.get(eq);
            var value = values[eq];
            var a = equation.get(0);
            var b = equation.get(1);

            if(!graph.containsKey(a)) {
                graph.put(a, new ArrayList<>());
            }

            if(!graph.containsKey(b)) {
                graph.put(b, new ArrayList<>());
            }

            graph.get(a).add(new Pair(b, value));
            graph.get(b).add(new Pair(a, 1 / value));
            variables.add(a);
            variables.add(b);
        }

        var visited = new HashMap<String, Double>();
        for(var variable : variables) {
            if(visited.containsKey(variable)) {
                continue;
            }
            // Check if the system is consistent by traversing the graph (chaining equations through multiplication)
            if(!dfs(variable, 1d, graph, visited)) {
                return true;
            }
        }

        return false;
    }

    private boolean dfs(String variable, Double value, Map<String, List<Pair>> graph, Map<String, Double> visited) {
        if(visited.containsKey(variable)) {
            return Math.abs(value - visited.get(variable)) < 0.00001;
        }
        
        visited.put(variable, value);

        for(var neighbor : graph.get(variable)) {
            var neighborVariable = neighbor.variable;
            var neighborValue = neighbor.value;
            if(!dfs(neighborVariable, value * neighborValue, graph, visited)) {
                return false;
            }
        }

        return true;
    }
}
```
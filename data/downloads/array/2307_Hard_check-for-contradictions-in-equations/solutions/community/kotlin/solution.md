# Spanning tree in Kotlin

**Author:** julia13
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-for-contradictions-in-equations/solutions/5448342/](https://leetcode.com/problems/check-for-contradictions-in-equations/solutions/5448342/)

---

# Intuition
One can think of the variables as the nodes in the graph, and equations as edges between the nodes. When two nodes are connected by the path, one can generate a new equation for them, not present in the original set. A contradiction means that for two nodes in the graph there are two distinct paths which have contradicting equations. To check for contradictions, one needs to check all the cycles in the graph, which can be done by building a spanning tree and checking all the edges not in the tree.

# Approach
1. Build a spanning tree for the graph using depth-first search. For each node in the graph, generate a number ("factor") during dfs. This number expresses a value for this node in terms of the value in the start of the search in this connected component.
3. For each edge not in the spanning tree, use the factors generated on the step 2 and substitute them into the equation for that edge to check if the equation is correct. If not, a contradition is found.

# Complexity
- Time complexity: $$O(V + E)$$

- Space complexity: $$O(V + E)$$

# Code
```
class Solution {
    fun checkContradictions(equations: List<List<String>>, values: DoubleArray): Boolean {
        val variablesToEquations = buildMap<String, MutableList<Int>> {
            for ((i, eq) in equations.withIndex()) {
                computeIfAbsent(eq[0]) { mutableListOf() }.add(i)
                computeIfAbsent(eq[1]) { mutableListOf() }.add(i)
            }
        }
        val variables = variablesToEquations.keys

        val spanningTreeEdges = mutableSetOf<Int>()
        val variablesToFactors = mutableMapOf<String, Double>()
        for (variable in variables) {
            if (variablesToFactors.containsKey(variable)) continue

            val stack = mutableListOf<String>()
            stack.add(variable)
            variablesToFactors[variable] = 1.0
            while (stack.isNotEmpty()) {
                val currentVariable = stack.last()
                val nextEquation = variablesToEquations[currentVariable]?.firstOrNull {
                    !variablesToFactors.containsKey(otherVariable(currentVariable, it, equations))
                }
                if (nextEquation == null) {
                    stack.removeLast()
                    continue
                }
                val nextVariable = otherVariable(currentVariable, nextEquation, equations)
                stack.add(nextVariable)
                spanningTreeEdges.add(nextEquation)

                val value = values[nextEquation]
                val factor = if (equations[nextEquation][0] == currentVariable) 1 / value else value
                variablesToFactors[nextVariable] = variablesToFactors[currentVariable]!! * factor
            }
        }

        for (equation in equations.indices) {
            if (spanningTreeEdges.contains(equation)) continue

            val dividend = variablesToFactors[equations[equation][0]]!!
            val divisor = variablesToFactors[equations[equation][1]]!!
            val value = values[equation]

            if (abs(dividend / divisor - value) >= 0.0000000001) return true
        }

        return false
    }

    private fun otherVariable(variable: String, equation: Int, equations: List<List<String>>): String {
        if (equations[equation][0] == variable) return equations[equation][1]
        return equations[equation][0]
    }
}
```
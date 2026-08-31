# Graph + DFS approach, beats 100% runtime (10ms)

**Author:** DzmitryBahdanovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/satisfiability-of-equality-equations/solutions/4655343/](https://leetcode.com/problems/satisfiability-of-equality-equations/solutions/4655343/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can build graph where each node will contains list of equal nodes. For example if we have input `[a == b] [a == c] [b != c]`, then graph will look like: 
```
graph = [
     a: [b, c]
     b: [a]
     c: [a]
]
```
If we come across an equation where `[b !== c]`, then I need to check the equal variables for "b" in the graph (it is `[a]` for "b"), and if one of them contains "c" in the own list of equal variables, then the equation is incorrect. 
# Approach
<!-- Describe your approach to solving the problem. -->
1. Build graph.
2. Perform DFS search in graph when you meet condition a != b
# Complexity
- Time complexity: O(n + V + E), where n is the number of equations, V is the number of vertices (nodes) in the graph, E is the number of edges in the graph.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(V + E)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param String[] $equations
     * @return Boolean
     */
    function equationsPossible($equations) {
        $graph = [];

        foreach($equations as $equation) {
            if ($equation[1] === '=') {
                if (!isset($graph[$equation[0]])) {
                    $graph[$equation[0]] = [];
                }

                if (!isset($graph[$equation[3]])) {
                    $graph[$equation[3]] = [];
                }

                $graph[$equation[0]][] = $equation[3];
                $graph[$equation[3]][] = $equation[0];
            }
        }

        foreach($equations as $equation) {
            if ($equation[1] === '!') {
                if ($equation[0] === $equation[3]) {
                    return false;
                }

                if ($this->searchForEquals($equation[0], $equation[3], $graph)) {
                    return false;
                }
            }
        }

        return true;
    }

    private function searchForEquals(string $element, string  $target, array $graph, array $visited = []): bool {
        $visited[$element] = true; 

        if (!isset($graph[$element])) {
            return false;
        }

        if (in_array($target, $graph[$element])) {
            return true;
        }

        foreach($graph[$element] as $equation) {
            if (isset($visited[$equation])) {
                continue;
            }
            $visited[$equation] = true;
            $res = $this->searchForEquals($equation, $target, $graph, $visited);
            if ($res) {
                return true;
            }
        }

        return false;
    }
}

// [a === b] [a === c] [b !== c]

// graph = [
//     a: [b, c]
//     b: [a]
//     c: [a]
// ]
// if I am checking b !== c then I need to compare "c" with all eq elements for b 
// to be sure that "b" and "c" are not equal
// this checking can be performed via DFS algoritm
```
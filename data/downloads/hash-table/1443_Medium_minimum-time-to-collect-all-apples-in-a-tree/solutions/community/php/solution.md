# Simple DFS - no node data structures needed

**Author:** douglassdavis50
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/solutions/3034024/](https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/solutions/3034024/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This is just a depth first search, only counting branches where there is an apple.  Count each edge twice (once to get there, once to get back).

# Approach
<!-- Describe your approach to solving the problem. -->

Instead of creating nodes and "pointers", I represented the tree in an array/matrix where each edge is represented twice, once from n1 to n2 and once from n2 to n1.  That way, I didn't have to worry about the direction of the edge.  I didn't make any assumption about the order of edges or vertices.  

```

            $graph[$n1][$n2] = true;
            $graph[$n2][$n1] = true;
```

Set to false when crossed, and add 2 to step count when backtracking over each edge.

Algorithm:
1. Start with node zero
2. Recursively go to each adjacent uncrossed vertex and mark edge as crossed/taken
3. If any vertex in any of the taken step's branches contains an apple, add two to the number of steps.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$  where n is number of vertexes

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$



# Code
```
class Solution {

    /**
     * @param Integer $n
     * @param Integer[][] $edges
     * @param Boolean[] $hasApple
     * @return Integer
     */
    function minTime($n, $edges, $hasApple) {

        foreach ($edges as $edge)
        {

            list($n1, $n2) = $edge;
            $graph[$n1][$n2] = true;
            $graph[$n2][$n1] = true;
        }

        $stepCount = 0;

        $this->step(0, $graph, $hasApple, $stepCount);

        return $stepCount;
    }

    function step($from_node, &$graph, $hasApple, &$stepCount)
    {
        foreach ($graph[$from_node] as $to_node => $unexplored)
        {
            if ($unexplored)
            {

                $graph[$from_node][$to_node] = false;
                $graph[$to_node][$from_node] = false;

                $thisBranchHasApple = $this->step($to_node, $graph, $hasApple, $stepCount);

                $someBranchHasApple = $someBranchHasApple || $thisBranchHasApple;
                if ($thisBranchHasApple)
                {
                    $stepCount += 2;
                }
            }
        }

        if ($someBranchHasApple || $hasApple[$from_node])
        {
            return true;
        }
    }
}
```
# Solution Explained (Using Basic Array Operation)

**Author:** may92
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-closest-node-to-given-two-nodes/solutions/3100219/](https://leetcode.com/problems/find-closest-node-to-given-two-nodes/solutions/3100219/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
At first, I started implementing the solution by getting all the nodes reached by the given `node(s)`. Then finding the common nodes reached by those `node(s)` after that I thought of finding the distance from the `node(s)` to the commonly reached nodes. And at the end finding the max of those distances and returning the result.

# Approach
<!-- Describe your approach to solving the problem. -->
I found all the nodes reached by the given `node(s)` along with the distance in an associative array with `node` being the key and value as a `distance`. And in second loop I found the max value of the distance required by each `node` to reach that particular node. Then finding the minimum distance and searching the minimum index to get the node.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $edges
     * @param Integer $node1
     * @param Integer $node2
     * @return Integer
     */
    function closestMeetingNode($edges, $node1, $node2) {
        $nodes_reached_by_node1 = $this->getAccessibleNodesList($edges, $node1);
        $nodes_reached_by_node2 = $this->getAccessibleNodesList($edges, $node2);

        $max_of_distances_to_commonly_reached_nodes = $this->getMaxOfDistanceForReachableNode($nodes_reached_by_node1, $nodes_reached_by_node2);

        if(count($max_of_distances_to_commonly_reached_nodes) > 0){
            $required_nodes = array_keys($max_of_distances_to_commonly_reached_nodes, min($max_of_distances_to_commonly_reached_nodes));
            return min($required_nodes);
        }
        return -1;
    }

    /**
     * @param Integer[] $edges
     * @param Integer $node
     * @return Integer[]
     */
    function getAccessibleNodesList($edges, $node){
        $distance_to_reachable_nodes = [];
        $current_node = $node;
        $distance = 0;
        while($current_node != -1 && !isset($distance_to_reachable_nodes[$current_node])){
            $next_node = $edges[$current_node];
            $distance_to_reachable_nodes[$current_node] = $distance;
            $distance++;
            $current_node = $next_node;
        }
        return $distance_to_reachable_nodes;
    }

    /**
     * @param Integer[] $reachable_nodes_distance1
     * @param Integer[] $reachable_nodes_distance2
     * @return Integer[]
     */
    function getMaxOfDistanceForReachableNode($reachable_nodes_distance1,$reachable_nodes_distance2){
        $max_distance_to_all_reachable_nodes = [];
        if(count($reachable_nodes_distance1) > 0){
            foreach($reachable_nodes_distance1 as $node => $distance){
                if(isset($reachable_nodes_distance2[$node])){
                    $max_distance_to_all_reachable_nodes[$node] = max($distance, $reachable_nodes_distance2[$node]);
                }
            }
        }
        return $max_distance_to_all_reachable_nodes;
    }

}
```
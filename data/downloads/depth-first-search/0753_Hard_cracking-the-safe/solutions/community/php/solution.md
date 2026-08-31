# Solution Cracking the Safe

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/cracking-the-safe/solutions/4757064/](https://leetcode.com/problems/cracking-the-safe/solutions/4757064/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer $n
     * @param Integer $k
     * @return String
     */
    function crackSafe($n, $k) {
        $arr = [];
        for ($i = 0; $i < $k; $i++) {
            $arr[] = strval($i);
        }
        
        if ($n == 1) {
            return implode("", $arr);
        }
        
        $graph = $this->build_graph($arr, $n - 1);
        
        $seq = $this->build_debrujin_sequence($graph, $n - 1, $arr[0]);
        return implode("", $seq);
    }
    
    function build_vertices($arr, $node_char_count, $cnt_index) {
        $result = [];

        if ($cnt_index >= $node_char_count) {
            return $result;
        }

        foreach ($arr as $i) {
            $returned_val = $this->build_vertices($arr, $node_char_count, $cnt_index + 1);

            if (count($returned_val)) {
                foreach ($returned_val as $val) {
                    $result[] = $i . $val;
                }
            } else {
                $result[] = $i;
            }
        }

        return $result;
    }
    
    function build_graph($arr, $node_char_count) {
        $vertices = $this->build_vertices($arr, $node_char_count, 0);

        $graph = [];
        foreach ($vertices as $v) {
            $graph[$v] = [];
            foreach ($arr as $c) {
                $graph[$v][] = substr($v, 1) . $c;
            }
        }

        return $graph;
    }
    
    function build_debrujin_sequence($graph, $node_char_count, $start_char) {
        $start_node = str_repeat($start_char, $node_char_count);
        $seq = [];
        $visited = [];
        $this->dfs($graph, $start_node, $node_char_count, $seq, $visited);
        $seq[] = substr($start_node, 0, -1);
        return $seq;
    }

    function dfs($graph, $node, $node_char_count, &$seq, &$visited) {
        $vals = $graph[$node];
        foreach ($vals as $v) {
            $edge = ($node_char_count > 1) ? ($node . substr($v, 1)) : ($node . $v);
            if (!in_array($edge, $visited, true)) {
                $visited[] = $edge;
                $this->dfs($graph, $v, $node_char_count, $seq, $visited);
            }
        }
        $seq[] = substr($node, -1);
    }
}
```
# Easy and Simple | PHP | NUmber of nodes in the subtree with the same label

**Author:** jinesh1094
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/solutions/3038567/](https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/solutions/3038567/)

---

# upvote for PHP 
# Code
```
class Solution {

    /**
     * @param Integer $n
     * @param Integer[][] $edges
     * @param String $labels
     * @return Integer[]
     */
    function countSubTrees($n, $edges, $labels) {
        $adj = array();
        for ($i = 0; $i < $n; $i++) $adj[$i] = array();
        
        $result = array_fill(0, $n, 0);
        for($i = 0; $i < count($edges); $i++) {
            array_push($adj[$edges[$i][0]], $edges[$i][1]);
            array_push($adj[$edges[$i][1]], $edges[$i][0]);
        }
        $this->dfs($adj, $labels, 0, $result);
        return $result;
    }
    public function dfs(&$adj, &$labels, $i, &$result) {
        $ans = array_fill(0, 26, 0);
        $result[$i] = 1;
        $ans[ord($labels[$i]) - ord('a')] = 1;
        
        for($j = 0; $j < count($adj[$i]); $j++)
            if(!$result[$adj[$i][$j]]) {
                $tmp = $this->dfs($adj, $labels, $adj[$i][$j], $result);
                for($k = 0; $k < 26; $k++) $ans[$k] += $tmp[$k];
            }
        $result[$i] = $ans[ord($labels[$i]) - ord('a')];
        return $ans;
    }
}
```
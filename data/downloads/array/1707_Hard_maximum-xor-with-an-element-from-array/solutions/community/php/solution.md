# Solution Maximum XOR With an Element From Array

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-xor-with-an-element-from-array/solutions/5340071/](https://leetcode.com/problems/maximum-xor-with-an-element-from-array/solutions/5340071/)

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
class TrieNode {
    public $children = [];

    public function containsKey($bit) {
        return isset($this->children[$bit]);
    }

    public function put($bit, $node) {
        $this->children[$bit] = $node;
    }

    public function get($bit) {
        return $this->children[$bit] ?? null;
    }
}

class Trie {
    private $root;

    public function __construct() {
        $this->root = new TrieNode();
    }

    public function insert($num) {
        $node = $this->root;
        for ($i = 31; $i >= 0; $i--) {
            $bit = ($num >> $i) & 1;
            if (!$node->containsKey($bit)) {
                $node->put($bit, new TrieNode());
            }
            $node = $node->get($bit);
        }
    }

    public function getMax($num) {
        $node = $this->root;
        $maxNum = 0;

        for ($i = 31; $i >= 0; $i--) {
            $bit = ($num >> $i) & 1;
            if ($node->containsKey(1 - $bit)) {
                $maxNum = $maxNum | (1 << $i);
                $node = $node->get(1 - $bit);
            } else {
                $node = $node->get($bit);
            }
        }
        return $maxNum;
    }
}

class Solution {
    public static function cmp($a, $b) {
        return $a[1] <=> $b[1];
    }

    public function maximizeXor($nums, $queries) {
        $ans = array_fill(0, count($queries), 0);
        sort($nums);

        $offlineQueries = [];
        for ($i = 0; $i < count($queries); $i++) {
            $offlineQueries[] = [$queries[$i][0], $queries[$i][1], $i]; // {ai, xi, i}
        }
        usort($offlineQueries, ["Solution", "cmp"]); // O(Q log Q)

        $idx = 0;
        $trie = new Trie();

        //  O(Q*32 + N*32)
        for ($i = 0; $i < count($offlineQueries); $i++) {
            $ai = $offlineQueries[$i][0]; // query is of type [ai, xi]
            $xi = $offlineQueries[$i][1];
            $queryIdx = $offlineQueries[$i][2];

            while ($idx < count($nums) && $nums[$idx] <= $xi) {
                $trie->insert($nums[$idx]);
                $idx++;
            }

            if ($idx == 0) {
                $ans[$queryIdx] = -1;
            } else {
                $ans[$queryIdx] = $trie->getMax($ai);
            }
        }
        return $ans;
    }
}

```
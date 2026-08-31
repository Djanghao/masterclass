# PHP solution

**Author:** bhargavrangani00
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-prefix-scores-of-strings/solutions/5830730/](https://leetcode.com/problems/sum-of-prefix-scores-of-strings/solutions/5830730/)

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
```php []
class Trie {
    public $score;
    public $children;

    public function __construct() {
        $this->score = 0;
        $this->children = [];
    }

    public function add($s, $i) {
        $this->score += 1;
        if ($i == strlen($s)) return;

        $char = $s[$i];
        if (!isset($this->children[$char])) {
            $this->children[$char] = new Trie();
        }
        $this->children[$char]->add($s, $i + 1);
    }

    public function getScore($s) {
        $node = $this;
        $sum = 0;

        for ($i = 0; $i < strlen($s); $i++) {
            $char = $s[$i];
            if (isset($node->children[$char])) {
                $node = $node->children[$char];
                $sum += $node->score;
            } else {
                break;
            }
        }

        return $sum;
    }
}

class Solution {
    public function sumPrefixScores($words) {
        $trie = new Trie();
        foreach ($words as $word) {
            $trie->add($word, 0);
        }

        $res = [];
        foreach ($words as $word) {
            $res[] = $trie->getScore($word);
        }

        return $res;
    }
}
```
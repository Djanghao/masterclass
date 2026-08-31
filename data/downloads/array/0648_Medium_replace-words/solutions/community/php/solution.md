# Simple Solution with Trie Data Structure in PHP

**Author:** user7605hd
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-words/solutions/5588088/](https://leetcode.com/problems/replace-words/solutions/5588088/)

---

# Approach
Just use Trie :)

# Code
```
class TrieNode {
    public function __construct(
        public array $children = [],
        public bool $isWord = false,
    ) {
    }
}

function insertNode(TrieNode $node, string $word) {
    $currentNode = $node;
    foreach (str_split($word) as $c) {
        if (!isset($currentNode->children[$c])) {
            $currentNode->children[$c] = new TrieNode();
        }

        $currentNode = $currentNode->children[$c];
    }

    $currentNode->isWord = true;
}

function searchWord(TrieNode $node, string $word) {
    $match = [];
    $currentNode = $node;
    foreach (str_split($word) as $c) {

        if ($currentNode->isWord) {
            return implode($match);
        }

        if (!isset($currentNode->children[$c])) {
            return $word;
        }

        $match[] = $c;
        $currentNode = $currentNode->children[$c];
    }

    return implode($match);
}

class Solution {

    /**
     * @param String[] $dictionary
     * @param String $sentence
     * @return String
     */
    function replaceWords($dictionary, $sentence) {
        $root = new TrieNode();
        foreach ($dictionary as $word) {
            insertNode($root, $word);
        }

        foreach (explode(' ', $sentence) as $word) {
            $result .= searchWord($root, $word) . ' ';
        }

        return trim($result);
    }
}
```
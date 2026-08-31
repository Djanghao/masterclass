# VM

**Author:** venturamendo
**Votes:** 0
**Link:** [https://leetcode.com/problems/search-suggestions-system/solutions/6072643/](https://leetcode.com/problems/search-suggestions-system/solutions/6072643/)

---

```php []
class Trie {
    private $children = [];
    private $isEndOfWord = false;
    
    public function insert($word) {
        if (strlen($word) === 0) {
            $this->isEndOfWord = true;
            return;
        }

        if (!isset($this->children[$word[0]])) {
            $this->children[$word[0]] = new self();
        }
        $this->children[$word[0]]->insert(substr($word, 1));
    }

    public function suggestMinLex($prefix) {
        $node = $this;
        for($i = 0; $i < strlen($prefix); $i++){
            $char = $prefix[$i];
            if(!isset($node->children[$char])){
                return [];
            }
            $node = $node->children[$char];
        }
        // Prefix found. Now look for suggestions.
        $suggestions = [];
        $node->dfs($prefix, $suggestions);
        return $suggestions;
    }

    public function dfs($prefix, &$suggestions) {
        if (count($suggestions) === 3) return;

        if ($this->isEndOfWord) $suggestions[] = $prefix;

        foreach ($this->children as $char => $node) {
            $node->dfs($prefix.$char, $suggestions);
        }
    }
}

class Solution {

    /**
     * @param String[] $products
     * @param String $searchWord
     * @return String[][]
     */
    function suggestedProducts($products, $searchWord) {
        $t = new Trie();
        sort($products);

        foreach ($products as $product) $t->insert($product);

        $result = [];
        $prefix = "";
        for ($i=0; $i<strlen($searchWord); $i++) {
            $prefix .= $searchWord[$i];
            $res[] = $t->suggestMinLex($prefix);
        }
        return $res;
    }
}
```
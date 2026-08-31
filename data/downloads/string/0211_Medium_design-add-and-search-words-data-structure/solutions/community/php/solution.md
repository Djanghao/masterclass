# Php solution (using trie)

**Author:** dpushka
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-add-and-search-words-data-structure/solutions/1728031/](https://leetcode.com/problems/design-add-and-search-words-data-structure/solutions/1728031/)

---

```
class TrieNode {
    public $children = [];
    public $isEnd = false;
}

class WordDictionary {
    
    private $root;
    
    /**
     */
    function __construct() {
        $this->root = new TrieNode();
    }
  
    /**
     * @param String $word
     * @return NULL
     */
    function addWord($word) {
       $root = $this->root;
        
        foreach (str_split($word) as $key => $char) {
            if (!isset($root->children[$char])) {
                $root->children[$char] = new TrieNode();
            }
            
            $root = $root->children[$char];
        }
        
        $root->isEnd = true;
    }
  
    function search($word) {
        return $this->_search($this->root, $word);
    }
    
    private function _search($root, $word) {
        if (!empty($word[0])) {
            foreach (str_split($word) as $key => $char) {
                if ($char == '.') {
                    foreach($root->children as $child) {
                         if($this->_search($child, substr($word, $key + 1))) return true;
                    }

                    return false;
                }
                if (!isset($root->children[$char])) return false;
                $root = $root->children[$char];
            }     
        }
        
        return $root->isEnd;
    }
}
```
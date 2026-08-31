# PHP Solution using HashMap + LinkedList

**Author:** lbassin
**Votes:** 2
**Link:** [https://leetcode.com/problems/lru-cache/solutions/5454751/](https://leetcode.com/problems/lru-cache/solutions/5454751/)

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
class Node {
    public function __construct(public $value = null, public ?Node $next = null, public ?Node $previous = null) {}
}

class CacheEntry {
    public function __construct(public $data = null, public Node $node) {}
}

class LRUCache {

    private array $storage;
    private int $capacity;

    private ?Node $usageList;
    private ?Node $lastNode;

    /**
     * @param Integer $capacity
     */
    function __construct($capacity) {
        $this->capacity = $capacity;
        $this->storage = [];
        $this->usageList = null;
    }
  
    /**
     * @param Integer $key
     * @return Integer
     */
    public function get($key): mixed {
        if (!isset($this->storage[$key])){     
            return -1;
        }

        $node = $this->appendToList($key);
        $this->storage[$key]->node = $node;

        return $this->storage[$key]->data;
    }
  
    /**
     * @param Integer $key
     * @param Integer $value
     * @return NULL
     */
    public function put($key, $value): void {
        $node = $this->appendToList($key);
        $this->storage[$key] = new CacheEntry($value, $node);

        if (count($this->storage) > $this->capacity) {
            $this->evictLeastRecentlyUsed();
        }
    }

    private function evictLeastRecentlyUsed(): void {
        $firstNode = $this->usageList;

        unset($this->storage[$firstNode->value]);

        $this->usageList = $this->usageList->next;

        if ($this->usageList !== null ){
            $this->usageList->previous = null;
        }
    }

    private function appendToList(string $key): Node {
        if (isset($this->storage[$key])) {
            $cacheEntryNode = $this->storage[$key]->node;

            $previous = $cacheEntryNode->previous;
            $next = $cacheEntryNode->next;

            if ($previous === null) { // First element
                $this->usageList = $this->usageList->next;

                if($this->usageList !== null) {
                    $this->usageList->previous = null;
                }
            } else if ($next === null) { // Last element
                $this->lastNode = $this->lastNode->previous;
                $this->lastNode->next = null;
            } else { // Anywhere else
                $previous->next = $next;
                $next->previous = $previous;                
            }
        }

        if ($this->usageList === null) {
            $this->usageList = new Node($key);
            $this->lastNode = $this->usageList;
            
            return $this->lastNode;
        }

        $this->lastNode->next = new Node($key, null, $this->lastNode);
        $this->lastNode = $this->lastNode->next;

        return $this->lastNode;
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * $obj = LRUCache($capacity);
 * $ret_1 = $obj->get($key);
 * $obj->put($key, $value);
 */
```
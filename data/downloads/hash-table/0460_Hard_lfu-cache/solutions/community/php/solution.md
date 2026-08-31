# PHP Solution of LFU (used HashTable and LRU)

**Author:** mamyta
**Votes:** 0
**Link:** [https://leetcode.com/problems/lfu-cache/solutions/5592910/](https://leetcode.com/problems/lfu-cache/solutions/5592910/)

---

# Code
```
class LFUCache {
    function __construct($capacity) {
        $this->lru = []; // Least Recently Used (LRU) cache structure
        $this->capacity = $capacity; // Maximum capacity of the cache
        $this->valueMap = []; // Map to store key-value pairs
        $this->counter = []; // Map to store key-frequency pairs
        $this->min_counter = 1; // Minimum frequency of usage
    }
  
    function get($key) {
        if(array_key_exists($key, $this->valueMap)){
            // Update the frequency count of the key
            $this->counter($key);
            return $this->valueMap[$key]; 
        }
        return -1;
    }
    // Updates the frequency count of the given key.
    function counter($key){
        // Get the current frequency of the key or default to 1
        $counter = $this->counter[$key] ?? 1;
        unset($this->lru[$counter][$key]);
        
        $this->counter[$key]++;
        $this->lru[$this->counter[$key]][$key] = $this->counter[$key];
        // If the minimum frequency list is empty, increment the minimum counter    
        if($counter == $this->min_counter && count($this->lru[$counter]) == 0){
            $this->min_counter +=1;
        }
    }

    function put($key, $value) {
        if ($this->capacity == 0){
            return;
        }
        if(array_key_exists($key, $this->valueMap)){
            $this->valueMap[$key]  = $value;
            $this->counter($key);
        }else{
            // If the cache is full, remove the least frequently used key
            if($this->capacity == count($this->counter)){
                reset($this->lru[$this->min_counter]);
                $delete = key($this->lru[$this->min_counter]);
                unset($this->lru[$this->min_counter][$delete]);
                unset($this->valueMap[$delete]);
                unset($this->counter[$delete]);

            }       
            $this->valueMap[$key] = $value;
            $this->counter($key);
            $this->min_counter = min($this->min_counter, $this->counter[$key]);
        }
    }
}
```
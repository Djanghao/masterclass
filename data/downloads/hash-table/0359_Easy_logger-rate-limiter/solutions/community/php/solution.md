# php logger with garbage collector

**Author:** user7755S
**Votes:** 0
**Link:** [https://leetcode.com/problems/logger-rate-limiter/solutions/4009956/](https://leetcode.com/problems/logger-rate-limiter/solutions/4009956/)

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
class Logger {

    private $store;
    private $max_size;
  
    /**
     * @param Integer $max_size The maximum size of the internal store
     */
    function __construct($max_size = 100) {
        $this->store = [];
        $this->max_size = $max_size;
    }
  
    /**
     * @param Integer $timestamp
     * @param String $message
     * @return Boolean
     */
    function shouldPrintMessage($timestamp, $message)
    {
        if (!isset($this->store[$message]) || $timestamp > $this->store[$message]) {
            if (count($this->store) >= $this->max_size) {
                end($this->store);
                unset($this->store[key($this->store)]);
            }
            $this->store[$message] = $timestamp + 9;
            return true;
        }
        return false;
    }
}

```
# A simple ruby solution only using build-in Hash

**Author:** justinplus
**Votes:** 14
**Link:** [https://leetcode.com/problems/lru-cache/solutions/46181/](https://leetcode.com/problems/lru-cache/solutions/46181/)

---

Since ruby 1.9, build-in Hash records the order of insertion, so there is a simple solution. (running time: 148 ms )

    class LRUCache
      # Initialize your data structure here
      # @param {Integer} capacity
      def initialize(capacity)
        @capacity = capacity
        @elems = {}
      end
    
      # @param {Integer} key
      # @return {Integer}
      def get(key)
        val = @elems.delete key
        if val
          @elems[key] = val
        else
          -1
        end
      end
    
      # @param {Integer} key
      # @param {Integer} value
      # @return {Void}
      def set(key, value)
        @elems.delete key
        @elems[key] = value
        @elems.delete @elems.first.first if @elems.size > @capacity 
      end
    end
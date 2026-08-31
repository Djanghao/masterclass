# Ruby with Recursion

**Author:** woahlag
**Votes:** 1
**Link:** [https://leetcode.com/problems/rle-iterator/solutions/638087/](https://leetcode.com/problems/rle-iterator/solutions/638087/)

---

```
class RLEIterator
    def initialize(a)
        @array = a      
    end

    def next(n)
        return -1 if @array.empty?
        
        if @array[0] == n
            value = @array[1]
            @array = @array[2..-1]
            value
        elsif @array[0] > n
            value = @array[1]
            @array[0] -= n
            value
        else
            removed = @array[0]
            @array = @array[2..-1]
            self.next(n-removed)
        end
    end
end
```
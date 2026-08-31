# 421 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/dinner-plate-stacks/solutions/3273516/](https://leetcode.com/problems/dinner-plate-stacks/solutions/3273516/)

---

```ruby
class DinnerPlates

    def initialize c
        @s, @c = [], c
        @t = CRBTreeMap.new
    end

    def push v
        if @t.empty?
            i = @s.size
            @s << []
        else
            i = @t.delete_min
        end
        @s[i] << v
        if @s[i].size < @c
            @t[i] = i
        end
    end

    def pop
        r = @s.last&.pop || -1
        i = @s.size - 1
        @t[i] = i if i >= 0
        tail
        r
    end

    def pop_at_stack i
        r = @s[i]&.pop || -1
        @t[i] = i if i < @s.size
        tail
        r
    end
    
    private

    def tail
        while @s.last&.empty?
            @s.pop
            @t.delete @s.size
        end
    end

end
```
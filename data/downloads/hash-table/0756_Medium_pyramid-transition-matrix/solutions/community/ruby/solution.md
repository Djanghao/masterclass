# Ruby solution DFS

**Author:** abdutahir
**Votes:** 0
**Link:** [https://leetcode.com/problems/pyramid-transition-matrix/solutions/201418/](https://leetcode.com/problems/pyramid-transition-matrix/solutions/201418/)

---

```ruby
def pyramid_transition(bottom, allowed)
    through(bottom, allowed, bottom.length)
end

def through(finished, allowed, bottom_length)
    return true if finished.length - 1 == index_for_position(1, 0, bottom_length)
    allowed.each do |block|
        base = base_for_position(finished, bottom_length)
        if (through(finished + block[2], allowed, bottom_length) if base == block[0, 2])
            return true
        end
    end
    false
end

def base_for_position(finished, bottom_length)
    level = bottom_length
    index = finished.length - 1
    while index + 1 > level
        index -= level
        level -= 1
    end

    finished[index_for_position(level + 1, index, bottom_length), 2]
end

def index_for_position(level, index, bottom_length)
    level += 1
    (bottom_length + level) * (bottom_length - level + 1) / 2 + index
end
```
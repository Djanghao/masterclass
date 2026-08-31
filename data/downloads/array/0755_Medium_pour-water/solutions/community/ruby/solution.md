# Very Simple Ruby Soltion

**Author:** cuzzo
**Votes:** 2
**Link:** [https://leetcode.com/problems/pour-water/solutions/317287/](https://leetcode.com/problems/pour-water/solutions/317287/)

---

```ruby
def pour_water(heights, v, k)
    v.times do |_drop|
        i = pour_drop(heights, k, k)
        heights[i] += 1
    end
    heights
end

# Pass start to pour_drop, so it's easy to tell if you're moving left or right.
def pour_drop(heights, i, start)

    # If at or left of starting point, and there is a point to the left
	# And the point to left is of the same height or lower
    if i <= start && i > 0 && heights[i-1] <= heights[i]
        k = pour_drop(heights, i-1, start)
        if heights[k] < heights[i] 
            return k
        end
    end
    
    if i >= start && i < heights.count - 1 && heights[i+1] <= heights[i]
        k = pour_drop(heights, i+1, start)
        if heights[k] < heights[i]
            return k
        end
    end
    
    return i
end
```
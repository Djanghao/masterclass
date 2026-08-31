# O(n), O(1). Super Simple

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/watering-plants/solutions/5495866/](https://leetcode.com/problems/watering-plants/solutions/5495866/)

---


# Code
```
# @param {Integer[]} plants
# @param {Integer} capacity
# @return {Integer}
def watering_plants(plants, capacity)
    count = 0
    i = 0
    og_cap = capacity
    while i < plants.size
        if plants[i] > capacity
            capacity = og_cap
            count += (i) 
            count += (i + 1) 
        else
            count += 1
        end

        capacity -= plants[i]

        i += 1
    end
    
    count
end
```
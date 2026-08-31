# Less Than O(n) Solution-Without modifying the actual array

**Author:** SayamBar
**Votes:** 4
**Link:** [https://leetcode.com/problems/can-place-flowers/solutions/3318485/](https://leetcode.com/problems/can-place-flowers/solutions/3318485/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
1) If the element is 1 then jumps to the i + 2 index
2) If the element is 0 then
    if the next element is also 0 or the element is at the last then decrement the n value and jumps to the i + 2 index
    else if the next element is 1 then jumps to the i + 3 index
3) Return true if n = 0

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} flowerbed
# @param {Integer} n
# @return {Boolean}
def can_place_flowers(flowerbed, n)
    return true if n == 0
    i = 0
    while i < flowerbed.length
        if flowerbed[i] == 1
            i += 2
        elsif flowerbed[i] == 0
            if flowerbed[i+1] == 0 || i == flowerbed.size - 1
                n -= 1
                i += 2
            elsif flowerbed[i+1] == 1
                i += 3 
            end
        end
        return true if n == 0
    end
    return false
end


```
# create loop and cut

**Author:** phello
**Votes:** 0
**Link:** [https://leetcode.com/problems/rotate-list/solutions/5898788/](https://leetcode.com/problems/rotate-list/solutions/5898788/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(n + k)$$

- Space complexity:
$$O(1)$$

# Code
```ruby []

def rotate_right(current, k)
    return nil if current == nil 

    start_node = current
    last_node = nil
    length = 0
    retNewStart = nil
    prev = nil

    
    while start_node != nil do
        length += 1
        last_node = start_node if start_node.next == nil 
        start_node = start_node.next
    end

    last_node.next = current # create loop

    k = (k % length) if k > length 
        
    k = length - k + 1


    while k >= 0 do
        k -= 1

        if k == 0
            retNewStart = last_node.next
            prev = last_node
            break
        end
        last_node = last_node.next
    end
    prev.next = nil # cut

    return retNewStart
end
```
# Linked List for fun

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-losers-of-the-circular-game/solutions/4379224/](https://leetcode.com/problems/find-the-losers-of-the-circular-game/solutions/4379224/)

---

Could have done this with an array but would have been too easy. I felt like linked list is a good fit for this problem as well as long as you link the last person to the first person.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
# @param {Integer} n
# @param {Integer} k
# @return {Integer[]}
def circular_game_losers(n, k)
    if n == 1
        return []
    end

    head = LinkedList.new(1)
    prev = head
    (2..n).each do |v|
        node = LinkedList.new(v)
        prev.right = node
        prev = node
    end
    prev.right = head

    node = head
    multiplier = 0
    while true
        node.visited += 1
        multiplier += 1
        if node.visited == 2
            break
        end
        i = 0
        multi_k = multiplier * k
        while i < multi_k
            node = node.right
            i+= 1
        end
    end

    answer = []
    node = head
    while node.id != n
        if node.visited == 0
            answer << node.id
        end
        node = node.right
    end

    if node.visited == 0
        answer << node.id
    end

    answer
end

class LinkedList
    attr_accessor :id, :visited, :right

    def initialize(id)
        @id = id
        @visited = 0
        @right = nil
    end
end
```
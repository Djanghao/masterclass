# Ruby beats 100%

**Author:** kenhufford
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-width-of-binary-tree/solutions/603925/](https://leetcode.com/problems/maximum-width-of-binary-tree/solutions/603925/)

---

1. Use a queue and next_queue system to BFS down the tree.
2. The width of the tree is 1 if there's only 1 element in the queue
3. min and max are similar to how you calculate a child node's index in a heap, 2x+1 and 2x+2

```
def width_of_binary_tree(root)
    max = 0
    queue = [{node: root, pos: 0}]
    while queue.length>0 do
        next_queue = []
        length = queue.length
        min_pos = +1.0/0.0
        max_pos = 0
        while queue.length>0 do
            current = queue.pop
            if current[:node].left
               next_queue << {node: current[:node].left, pos: 2*current[:pos]+1} 
            end 
            if current[:node].right
               next_queue << {node: current[:node].right, pos: 2*current[:pos]+2} 
            end
            min_pos = [min_pos, current[:pos]].min
            max_pos = [max_pos, current[:pos]].max
        end
        queue = next_queue
        level_length = length == 1 ? 1 : max_pos - min_pos + 1
        max = [max, level_length].max
    end
    max
end
```
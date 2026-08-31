# Ruby Solution Iterative Solution

**Author:** nischay_dhiman
**Votes:** 2
**Link:** [https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/solutions/1612370/](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/solutions/1612370/)

---

```

def dfs(start, target)
    path = ""
    stack = [[start, path]]
    while(!stack.empty?)
        cur_node, cur_path = stack.pop
        return cur_path if cur_node.val == target
        stack.push([cur_node.left, cur_path + 'L']) if cur_node && cur_node.left
        stack.push([cur_node.right, cur_path + 'R']) if cur_node && cur_node.right
    end
    return path
end


def get_directions(root, start_value, dest_value)
    start_path = dfs(root, start_value)
    dest_path = dfs(root, dest_value)
    i = 0
    while(start_path[i] == dest_path[i])
        i += 1
    end
    "U"*(start_path.length-i) + dest_path[i..-1]
end

```
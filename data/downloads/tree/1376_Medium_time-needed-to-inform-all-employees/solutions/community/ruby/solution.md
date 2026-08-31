# DFS & SET, Beats 92%

**Author:** pharmac1st
**Votes:** 1
**Link:** [https://leetcode.com/problems/time-needed-to-inform-all-employees/solutions/3591067/](https://leetcode.com/problems/time-needed-to-inform-all-employees/solutions/3591067/)

---

# Code
```
require 'set'

def dfs(tree, node, inform_time, sums, sum=0)
    # Employee/Node is not a manager (we've hit a leaf), add sum & return.
    if (!tree[node])
        sums << sum
        return
    end
    
    # Employee/Node is manager, check employees/subnodes, update the time
    tree[node].each do |n| 
        dfs(tree, n, inform_time, sums, sum + inform_time[n])
    end 
end 

def num_of_minutes(n, head_id, manager, inform_time)

    tree = {}

    # Create the tree
    manager.each_with_index do |manager, employee|
        tree[manager] ||= []
        tree[manager] << employee
    end

    # Traverse the tree starting from the root, keep track of the sums
    sums = Set[]
    dfs(tree, -1, inform_time, sums)

    return sums.max
end

```
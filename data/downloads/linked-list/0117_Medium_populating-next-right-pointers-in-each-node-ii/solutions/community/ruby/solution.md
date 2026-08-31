# ✅ Easy SIMPLE Ruby Solution using BFS with queue | 🔥 No other data structure required

**Author:** quagmire8
**Votes:** 3
**Link:** [https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/solutions/4705211/](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/solutions/4705211/)

---

**Feel free to ask for doubts in the comment section about my approach or we can discuss any other approach that you may have, Happy Leetcoding !**

# Intuition

**Please read the INTUITION carefully in order to understand my approach, an example is also provided !**

The problem involves connecting the adjacent nodes in the same level of a binary tree using the `next` pointer. To solve this, we can perform a level order traversal using a queue.

 **At each level, we need to make connections between nodes, and the number of connections needed is exactly equal to the number of nodes at that level minus one.** 

This information is crucial as it guides us to efficiently iterate through the nodes at each level and make the necessary connections.

Consider a binary tree where the number of nodes at each level is as follows:

- Level 1: 1 node
- Level 2: 2 nodes
- Level 3: 4 nodes
- Level 4: 6 nodes (not necessarily the tree is perfect)
- ...

At each level, the number of connections needed is equal to the number of nodes at that level minus one. For example:

- Level 1: 0 connections needed (1 node - 1)
- Level 2: 1 connection needed (2 nodes - 1)
- Level 3: 3 connections needed (4 nodes - 1)
- Level 4: 5 connections needed (6 nodes - 1)

This pattern continues for subsequent levels. Recognizing this allows us to efficiently traverse the nodes at each level, connect them, and move on to the next level.

# Approach
To implement the solution:
- Start with the root node and perform a level order traversal using a queue.
- At each level, keep track of the number of nodes (`N`) and the number of connections to be made (`M = N - 1`).
- While traversing the nodes at the current level, connect each node's `next` pointer to the next node in the queue (`queue.shift`). Decrease the count of connections (`M`) accordingly.
- Enqueue the left and right children of each node if they exist.
- Repeat these steps until the queue is empty, ensuring that all nodes are processed.

# Complexity
- Time complexity: O(n), where n is the number of nodes in the perfect binary tree. Each node is visited once.
- Space complexity: O(m), where m is the maximum number of nodes at a single level. In the worst case, the queue may contain all nodes at the last level.


# Code
```ruby
# Definition for a Node.
# class Node
#     attr_accessor :val, :left, :right, :next
#     def initialize(val)
#         @val = val
#         @left, @right, @next = nil, nil, nil
#     end
# end

# @param {Node} root
# @return {Node}

def connect(root)

    return nil unless root

    queue = [root]

    until queue.empty?
      n = queue.size
      m = n - 1 # Number of connections to make.

      n.times do
        curr = queue.shift

        # Connecting the next pointers
        curr.next = queue.first if m.positive?
        m = m-1

        queue.push(curr.left) if curr.left
        queue.push(curr.right) if curr.right
      end
    end

    root
end
```

# Please Upvote or Like if you liked my approach !
**Feel free to ask for doubts in the comment section about my approach or we can discuss any other approach that you may have, Happy Leetcoding !**

![Leetcode_cat.jpeg](./images/0.jpeg)

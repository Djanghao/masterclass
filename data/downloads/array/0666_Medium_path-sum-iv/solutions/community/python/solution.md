# Well commented & Clear Iterative DFS

**Author:** azhw1983
**Votes:** 2
**Link:** [https://leetcode.com/problems/path-sum-iv/solutions/1892901/](https://leetcode.com/problems/path-sum-iv/solutions/1892901/)

---

# Please upvote if you find it helpful :) Thank you!
```
# Approach 1: Building Graph + DFS
# Time:  O(N)
# Space: O(N)

def pathSum(nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    # 1. Build the graph
    # create a default dictionary for graph representation
    from collections import defaultdict
    graph = defaultdict(int)
    for num in nums:
        depth, pos, val = num//100, (num//10)%10, num%10
        graph[depth, pos] = val
        
    # 2. Do DFS
    # let's create a stack for DFS
    stack = []
    
    # let's put the root as the starting point of DFS in the stack
    cur_depth, cur_pos = 1,1
    cur_path_sum = graph[cur_depth, cur_pos]
    stack.append((cur_path_sum, (cur_depth, cur_pos)))
    returned_all_paths_sum = 0

    while stack:

        cur_path_sum, (cur_depth, cur_pos) = stack.pop()
        
        # next depth based on the current depth (cur_depth)
        left_depth = right_depth = 1 + cur_depth
        # next positions (left and right) based on the current position (cur_pos)
        left_pos, right_pos = 2*cur_pos-1, 2*cur_pos

        # if it's a leaf node, DFS terminates, we add the 'cur_path_sum' to 'returned_all_paths_sum'
        if (left_depth, left_pos) not in graph and (right_depth, right_pos) not in graph:
            returned_all_paths_sum += cur_path_sum
        else:
            # otherwise the DFS keeps going and we add the next nodes to the stack
            # left node
            if (left_depth, left_pos) in graph:
                left_path_sum = cur_path_sum + graph[left_depth, left_pos]
                stack.append((left_path_sum, (left_depth, left_pos)))
            # right node
            if (right_depth, right_pos) in graph:
                right_path_sum = cur_path_sum + graph[right_depth, right_pos]
                stack.append((right_path_sum, (right_depth, right_pos)))

    return returned_all_paths_sum
```
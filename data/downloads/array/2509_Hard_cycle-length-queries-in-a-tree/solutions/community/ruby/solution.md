# Short Ruby solution with explanation (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/cycle-length-queries-in-a-tree/solutions/3646794/](https://leetcode.com/problems/cycle-length-queries-in-a-tree/solutions/3646794/)

---

# Intuition
To find the length of a cycle, add the distance from each node to their common parents plus 1.  It's easy to find these distances because it's a complete binary tree.

# Approach
Find the distance for each query using a helper function:
1. Start distance at 1 for the added edge.
2. Whichever node is bigger, find its parent by dividng by two.  (This works because if the parent is x, the left node is 2x and the right node is 2x+1.  Either way, dividing by two gets you the parent.) Add 1 to the distance.
3. Repeat step two until you've found the common parent, completing the cycle.
4. Return the distance.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
def cycle_length_queries(n, queries)
    queries.map { |query| distance(query) }
end

def distance(query)
    dist = 1
    a,b = query

    until a == b
        if a > b
            a /= 2
        else
            b /= 2
        end

        dist += 1
    end

    dist
end
```
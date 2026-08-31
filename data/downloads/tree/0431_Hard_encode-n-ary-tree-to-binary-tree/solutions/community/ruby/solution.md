# Ruby solution with recursion, explained (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/solutions/4203165/](https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/solutions/4203165/)

---

# Intuition
From a given node, use the left for one of its children and the right for a sibling.

The first example is encoded like this:
```
      1
    3
  5   2
   6   4
```

1 has 3 as a child, as well as 2 and 4.  3 is encoded on the left, and then 2 and 4 are encoded as the right of that.  Similarly, 5 is encoded on the left of 3, with 6 on the right of 5 since it's also a child of 3.


# Approach
Encode: accept a node, and optionally accept siblings
1. Make sure there's a root.
2. Create a TreeNode with val the same as root.
3. If there are any children, encode one of them as the **left** node and pass the rest as siblings.
4. If there are any siblings, encode one of them as the **right** node and pass the rest as siblings.
5. Return node.

Decode:
1. Make sure there's a root.
2. Create a Node with val the same as root.
3. Create an array to hold children, starting with root.left.
4. From root.left, recursively find (and decode) siblings on root.right, and add them to the children array.
5. Set .children to the children array, then return node.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
class Codec
    def encode(root, siblings = [])
    	return root if !root

        node = TreeNode.new(root.val)

        if root.children.length > 0
            node.left = encode(root.children.shift, root.children)
        end
        
        if siblings.length > 0
            node.right = encode(siblings.shift, siblings)
        end

        node
    end
    

    def decode(root)
        return root if !root

        node = Node.new(root.val)
        arr = []
        curr = root.left

        while curr
            arr << decode(curr)
            curr = curr.right
        end

        node.children = arr

        node
    end
end
```
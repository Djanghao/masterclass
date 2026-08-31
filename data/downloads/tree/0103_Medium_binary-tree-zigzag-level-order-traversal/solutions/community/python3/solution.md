# Four python solutions

**Author:** nth-attempt
**Votes:** 70
**Link:** [https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solutions/750132/](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solutions/750132/)

---

#### Approach - 1
Using single ended queue and reverse. Although we are using `deque` we are utilizing only single ended queue functionality here.
```python
def zigzagLevelOrder(self, root: TreeNode) -> List[List[int]]:
	if not root: return []
	queue = collections.deque([root])
	res = []
	even_level = False
	while queue:
		n = len(queue)
		level = []
		for _ in range(n):
			node = queue.popleft()
			level.append(node.val)
			if node.left:
				queue.append(node.left)
			if node.right:
				queue.append(node.right)
		if even_level:
			res.append(level[::-1])
		else:
			res.append(level)
		even_level = not even_level
	return res
```

#### Appraoch - 2
Using single ended queue and initializing array instead of reversing. 
```python
def zigzagLevelOrder(self, root: TreeNode) -> List[List[int]]:
	if not root: return []
	queue = collections.deque([root])
	res = []
	even_level = False
	while queue:
		n = len(queue)
		level = [0] * n # initalize the array since we know the length
		for i in range(n):
			node = queue.popleft()
			if node.left:
				queue.append(node.left)
			if node.right:
				queue.append(node.right)
			if even_level:
				level[n-1-i] = node.val
			else:
				level[i] = node.val
		res.append(level)
		even_level = not even_level

	return res
```
#### Approach - 3
Using the double ended queue functionality. We pop from left in odd levels and pop from right in even levels. Trick is to flip the order of left and right when we are appending from left. 
```python
def zigzagLevelOrder(self, root: TreeNode) -> List[List[int]]:
	if not root: return []
	queue = collections.deque([root])
	res = []
	even_level = False
	while queue:
		n = len(queue)
		level = []
		for i in range(n):
			if even_level:
				# pop from right and append from left.
				node = queue.pop()
				# to maintain the order of nodes in the format of [left, right, left, right] 
				# we push right first since we are appending from left
				if node.right: queue.appendleft(node.right)
				if node.left: queue.appendleft(node.left)
			else:
				# pop from left and append from right
				node = queue.popleft()
				# here the order is maintained in the format [left, right, left, right] 
				if node.left: queue.append(node.left)
				if node.right: queue.append(node.right)
			level.append(node.val)
		res.append(level)
		even_level = not even_level
	return res
```

#### Approach - 4
Using deque for each level instead of list.
```python
def zigzagLevelOrder(self, root: TreeNode) -> List[List[int]]:
    if not root: return []
    res = []
    queue = collections.deque([root])
    even_level = False
    while queue:
        n = len(queue)
        level = collections.deque()
        for _ in range(n):
            node = queue.popleft()
            if even_level:
                level.appendleft(node.val)
            else:
                level.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        res.append(list(level))
        even_level = not even_level
    return res
```
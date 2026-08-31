# easy peasy python solution, preorder travel with child count

**Author:** lostworld21
**Votes:** 26
**Link:** [https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/solutions/393501/](https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/solutions/393501/)

---

	# Do preorder travel, but add number of children after the root value
	from collections import deque

	class Codec:

		def serialize(self, root):
			lst = []
			self.serializeHelper(root, lst)
			return ",".join(lst)


		def deserialize(self, data):
			if len(data) == 0:
				return None
			else:
				lst = data.split(",")
				que = deque()
				[que.append(lst[i]) for i in range(len(lst))]
				return self.deserializeHelper(que)


		def serializeHelper(self, root, lst):
			if not root:
				return ""
			else:
				lst.append(str(root.val))
				lst.append(str(len(root.children)))
				for kid in root.children:
					self.serializeHelper(kid, lst)

		def deserializeHelper(self, que):
			if len(que) > 0:
				val = que.popleft()
				totalKids = int(que.popleft())
				root = Node(int(val), [])
				for i in range(totalKids):
					root.children.append(self.deserializeHelper(que))
				return root
			else:
				return None
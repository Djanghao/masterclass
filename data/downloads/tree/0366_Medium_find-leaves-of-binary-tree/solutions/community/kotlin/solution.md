# Kotlin | Easy DFS Solution | Time: O(N) | Space: O(N)

**Author:** null925
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-leaves-of-binary-tree/solutions/1975823/](https://leetcode.com/problems/find-leaves-of-binary-tree/solutions/1975823/)

---

```
fun findLeaves(root: TreeNode?): List<List<Int>> {
	val map = mutableMapOf<Int, MutableList<Int>>()

	fun getLevel(root: TreeNode?): Int {
		if(root == null) return 0
		val left = getLevel(root.left)
		val right = getLevel(root.right)
		val level = maxOf(left, right) + 1
		map.getOrPut(level, {mutableListOf()}).add(root.`val`)
		return level
	}

	getLevel(root)
	return map.values.toList()
}
# Kotlin | Priority Queue | Bfs

**Author:** sifat_oshan
**Votes:** -1
**Link:** [https://leetcode.com/problems/parallel-courses-ii/solutions/711765/](https://leetcode.com/problems/parallel-courses-ii/solutions/711765/)

---

	import java.lang.Integer.min
	import java.util.*
	import kotlin.Comparator

	class Solution {
		fun minNumberOfSemesters(n: Int, dependencies: Array<IntArray>, k: Int): Int {
			val edges = Array(n + 1) { mutableListOf<Int>() }
			val table = Array<Course>(n + 1) { i -> Course(i) }
			for (e in dependencies) {
				table[e[1]].pre++
				table[e[0]].post++
				edges[e[0]].add(e[1])
			}
			val queue = PriorityQueue<Course>(Comparator<Course> { o1, o2 ->
				o2.post - o1.post
			})

			for (idx in 1 until table.size) {
				if (table[idx].pre == 0) queue.add(table[idx])
			}
			var semester = 0
			val temp = mutableListOf<Course>()
			while (!queue.isEmpty()) {
				val limit = min(k, queue.size)
				temp.clear()
				for (s in 1..limit) {
					if (queue.isEmpty()) break
					val c = queue.poll()
					for (p in edges[c.c]) {
						table[p].pre--
						if (table[p].pre == 0) temp.add(table[p])
					}
				}
				for (c in temp) {
					queue.add(c)
				}
				semester++
			}
			return semester
		}
	}

	data class Course(val c: Int, var pre: Int = 0, var post: Int = 0)
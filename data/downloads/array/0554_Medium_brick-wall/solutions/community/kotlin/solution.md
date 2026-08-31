# [Kotlin] 100% in execution time and space, easy-peasy, explained

**Author:** JaninBV
**Votes:** 1
**Link:** [https://leetcode.com/problems/brick-wall/solutions/1172499/](https://leetcode.com/problems/brick-wall/solutions/1172499/)

---

The key to this problem is to keep track of  how many bricks start and end at each particular position.  A hash map is the perfect data structure for this.  And, you only need to go through each list once, leaving out the beginning (0), and the end, which is the sum of all the lengths.  I set "start" to 0 at the beginning of each list, and add the length of each brick, which is where the current one ends and the next one starts.  At this position, increment the count in the hash map.  I decided to keep track of the max count as I went, and that easily beat the time of all the other Kotlin solutions.  One easy shortcut is to check if the wall is only one brick high (has only one list).  In that case, if you have only one brick, the answer is 1, if there is more than one, the answer is 0.

When you've found the max number of bricks ending and starting at a position, you subtract that from the height of the wall (number of lists in the list), and you have your answer.

Here's the code:
```
	var map = HashMap<Int, Int>()
	if (wall.size == 1) {
		if (wall.get(0).size == 1) {
			return 1
		} else {
			return 0
		}
	}
	var start : Int
	var count : Int
	var max = 0
	for (list in wall) {
		start = 0
		for (x in 0..list.lastIndex - 1) {
			start += list.get(x)
			count = map.getOrDefault(start, 0) + 1
			if (count > max) {
				max = count
			}
			map.put(start, count)
		}
	}
	return wall.size - max
}
```
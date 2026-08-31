# Python, Greedy

**Author:** warmr0bot
**Votes:** 2
**Link:** [https://leetcode.com/problems/put-boxes-into-the-warehouse-i/solutions/1197554/](https://leetcode.com/problems/put-boxes-into-the-warehouse-i/solutions/1197554/)

---

# Idea
First, find a min prefix for the warehouse. Because the heights in a warehouse are accessible only in non-increasing order.
Then, sort the boxes in the reverse order by their height and try to continuously put the biggest box to the room closest to the entrance.
```
def maxBoxesInWarehouse(self, boxes: List[int], warehouse: List[int]) -> int:
	aggmin = accumulate(warehouse, min)
	boxes.sort(reverse=True)
	j = fitted = 0
	for h in aggmin:
		while j < len(boxes) and boxes[j] > h: 
			j += 1
		if j >= len(boxes): break
		fitted += 1
		j += 1
	return fitted
```
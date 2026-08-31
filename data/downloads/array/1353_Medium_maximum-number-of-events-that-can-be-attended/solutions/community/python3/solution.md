# [Python] Faster than 90%, Low-space, Simple, Min-Heap, Explained

**Author:** u2agarwal99
**Votes:** 26
**Link:** [https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/solutions/1564595/](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/solutions/1564595/)

---

Please feel free to ask questions or give suggestions. **Upvote** if you liked the solution.
**Idea**:
1. Sort events by startDay.
2. Keep track of endDays for started events in a min-heap based on current day.
3. Greedily attend started event with lowest endDay. Move to the next viable day. 
4. Repeat steps 2 and 3 while there is some unstarted event.
4. When all events have started, repeat step 3 until there are no started events remaining.
```
def maxEvents(self, events: List[List[int]]) -> int:
	n = len(events)
	# Sort by startDay(needed), endDay (minimizes number of swaps when pushing in heap)
	events.sort()

	# Min-heap that stores endDay for started events
	started = []
	count = i = 0
	# First day an event starts
	curr_day = events[0][0]
	# While some event hasn't been added to heap
	while i<n:
		# Add all events that start on curr_day
		while i<n and events[i][0]==curr_day:
			heappush(started, events[i][1])
			i += 1

		# Attend started event that ends earliest
		heappop(started)
		count += 1
		curr_day += 1
		
		# Remove all expired events
		while started and started[0]<curr_day: heappop(started)
		# If no started events left, move to the next startDay
		if i<n and not started: curr_day = events[i][0]

	# Events that started that are still left in heap
	while started:
		# Non-expired started event that ends earliest
		if heappop(started)>=curr_day:
			curr_day += 1
			count += 1

	return count
```
**Worst-case Time Complexity**: O(nlogn)
**Worst-case Space Complexity**: O(n)
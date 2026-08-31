# [Javascript] Easy JS Solution Using Priority Queues

**Author:** js11
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/solutions/1871579/](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/solutions/1871579/)

---

```
// The idea is that every day we attend the event that ends sooner
const maxEvents = function (events) {
    // Sort events by their start day
	events.sort((a, b) => a[0] - b[0]);
    
    // A priority queue to get the first event that ends sooner
	const queue = new MinPriorityQueue({
		compare: (a, b) => events[a][1] > events[b][1],
	});

	let i = 0,
		res = 0;

    // Iterate over all available days
	for (let day = 0; day <= Math.pow(10, 5); day++) {
        // Add all events that start today to the queue
		while (i < events.length && events[i][0] == day) queue.enqueue(i++);
        
        // Attend the event that ends sooner
		if (queue.size()) {
			queue.dequeue();
			res++;
            
            // Remove all other events that ended today
			while (queue.size() && events[queue.front()][1] == day)
				queue.dequeue();
		}
	}
    
	return res;
};
```
Note that **MinPriorityQueue** is included in Leetcode's js environment:
https://support.leetcode.com/hc/en-us/articles/360011833974-What-are-the-environments-for-the-programming-languages-
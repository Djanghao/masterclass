# C++/Java/Python 6 Line Approach, Question Clarifications & Heap Cheatsheet

**Author:** NUMBART
**Votes:** 33
**Link:** [https://leetcode.com/problems/last-stone-weight/solutions/1922652/](https://leetcode.com/problems/last-stone-weight/solutions/1922652/)

---

If you are already familiar with priority_queue in C++ skip to the Approach section at the end
### C++ Heap Guide/Cheatsheet
In C++ [priority_queue](https://www.cplusplus.com/reference/queue/priority_queue/) is the implementation for heaps. If you have never used priority_queue before, you can get started by reading this cheatsheet and solving this problem. However, you still should read about [heaps](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/resources/lecture-4-heaps-and-heap-sort/) and how they work so that you know when and where to use them.

1. **Introduction**
* Why heaps?
Heap as a container gives you fast insertion of any element as well as reads and deletion of either the minimum-most or maximum-most element. Also it does not provide random access to any other element in the heap
* Where to use?
Based on this advantage, some major use cases for heaps are BFS, Djikstra, Current median of stream of elements

2. **Initialising**
	```cpp
	// 1. max heap -> for popping largest element
		priority_queue<int> pq;     // replace int with any other type or a struct based on need
	// 2. min heap -> for popping minimum element
		priority_queue<int, vector<int>, greater<int>> pq;
	// 3. custom heaps in case of custom ordering (here we are creating min heap based on second property)
		struct comp {
			bool operator()(pair<int, int> a, pair<int, int> b) {
				return a.second > b.second;
			}
		};
		priority_queue<int, vector<int>, comp> pq;
	// 4. If you already have an array and want to initialise using it
		priority_queue<int, vector<int>, greater<int>> pq(a.begin(), a.end());
	```
	This last operation takes O(n) time where n is size of array a.

3. **Important operations**
	```cpp
	pq.push(10);           // adds element to heap
	int cur = pq.top();    // returns top element, does NOT pop though
	pq.pop()               // pops top element, does NOT return the value of top element though
	pq.size()              // return size of heap
	pq.empty()             // returns true if heap is empty else false
	```
 - Always make sure that heap is not empty prior to top() and pop() methods
 - *Time* - push() and pop() takes O(logn) time, the other three require O(1) time.
___
</br>

### Question Clarifications
Some people have misinterpreted the question a bit, for example [here](https://leetcode.com/problems/last-stone-weight/discuss/1922217)
Note, the question states that you always have to pick the two largest stones and then find the minimum-most stone. Its however not necessary that if you had the freedom to pick any two stones, that picking the largest would give you smallest stone at the end. It actually wont, consider the following example -
> [25, 23, 16, 16, 16]

* If you picked the largest two every time you would end up with 14.
* However with freedom to pick any stone you can end with 0. By picking following stones at each step -
	```text
	(25, 16) -> (23, 16) -> (16, 9)  -> (7, 7)
	leaves 9 -> leaves 7 -> leaves 7 -> leaves 0
	```

Another clarification, is the question states find the minimum most possible stone after only one stone remains. Since there can be only one pair of largest stones possible at each step and you do not have the element of choice, you can only have one way of smashing the stones and hence only one possibility of last stone remaining, which being the only candidate for being the minimum-most will also be the answer.
___
</br>

### Approach
Once we are aware of how to use the priority queue and the above facts the approach is straightforward as the question instructs us what to do. We need the two largest elements at each step for our operation, since heaps give the fastest access to the extremes its our go to here. The pseudo-code is as follows -
```text
	Initialise heap using the array (use 4th option above)
	Keep smashing as long as there is 2 or more stones (use size() method)
		Pick the two largest and remove them from heap (use top() and pop())
		if their difference is positive add new stone to our heap (use push())
	
	If there is a stone remaining in heap return it or else return 0 (use empty() and top())
```

C++/Java/Python code based on above pseudo code

<iframe src="https://leetcode.com/playground/kocCUYy5/shared" frameBorder="0" width="800" height="370"></iframe>

Complexity - Time: O(nlogn), Space: O(n)

Would also like to add the common heap operations and code for Java and Python along with complexity to this cheatsheet, please mention them if you are familiar with them.

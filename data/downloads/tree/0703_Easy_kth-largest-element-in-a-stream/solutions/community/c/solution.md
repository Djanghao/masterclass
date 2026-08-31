# C++/Java/Python optimum solution approach, Start here if this is your first heap problem

**Author:** NUMBART
**Votes:** 93
**Link:** [https://leetcode.com/problems/kth-largest-element-in-a-stream/solutions/1924721/](https://leetcode.com/problems/kth-largest-element-in-a-stream/solutions/1924721/)

---

If this is your first heap problem in C++, jump to the last section for a quick guide on how to use heaps in C++.

___
</br>

## Approach

There are two parts to the question 
* Initialising the heap
* Adding and finding the kth element in the heap

First, we want to *maintain the k largest elements in our heap*, as we need to have the kth largest number in our heap. Also note, if we kept a max-heap we would get the largest number, while a min-heap would give the smallest of the k numbers stored in our heap. Hence, that clears up that we need a min-heap here.

Please note the "*maintain the k largest elements in our heap*" part, as this invariant is the heart of this and other stream related problems and will also help you avoid mistakes if you follow this religiously in your code.

1. **Initialising**
We have two scenarios here either the size of initial array is larger than k, or it is not. Based on this our approach will be as below
```text
If it is larger initialise our min-heap with the first k elements(avoid adding one by one in a loop and use heapify function in your language)
If not, initialise with whatever number of elements are available
For the rest of the elements if there are any left (this logic is similar to handling the stream below)
	Add element to heap
	If size is disturbed(ie. more than k elements) pop an element
```

* *Complexity* : Time - O(max(k, n)) for initialising k elements, O((n-k)logk) for adding the rest ~ O( max(k, n) + nlogk - klogk), Space - O(k)
* Note: if you donot use heapify and add one by one - complexity will be O(max(k, n)logk) which is less optimised than the above in all possible cases. A lot of answers in discuss are using this approach still.

2. **Handling the stream**
```text
Add the new number to heap
If the size of the heap is disturbed pop a number out
Return the minimum of the k largest numbers in our heap(ie. the kth largest one)
```

* *Complexity* : Time: O(logk), Space: O(1), however we are using the heap created above

<iframe src="https://leetcode.com/playground/2cmXkZTy/shared" frameBorder="0" width="800" height="430"></iframe>

___
</br>

## Mistakes to avoid
1. As noted above, avoid using O(klogk) time for inserting numbers into your heap from the array, as heap specifically optimises this and lets you do this in O(k) time.
2. Make sure your heap size is always k as long as enough elements have been available. As soon as you disturb the size of the heap bring it down to k. In this question it means popping one element, as you are increasing size to k+1 atmost.
3. While adding new element to heap DONOT pop first and then add to heap. Always add element and then pop otherwise you are losing track of the kth largest as soon as you pop. Consider this example, say heap's current state is [4, 6] for k = 2 and you want to add 3. Popping 4 first before adding will lead to [3, 6] heap state which is incorrect as 4 is the 2nd largest.

___
</br>



## C++ Heap Guide/Cheatsheet
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

If you are coding in Java or Python do share your code here. Also let me know if I missed any details or can further optimise in any of the codes.
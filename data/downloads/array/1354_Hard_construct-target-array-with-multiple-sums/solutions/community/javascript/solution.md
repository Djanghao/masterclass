# JS, Python, Java, C++ | Easy Max PriorityQueue/Heap Solution w/ Explanation

**Author:** sgallivan
**Votes:** 121
**Link:** [https://leetcode.com/problems/construct-target-array-with-multiple-sums/solutions/1199223/](https://leetcode.com/problems/construct-target-array-with-multiple-sums/solutions/1199223/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

One thing we can notice right away: The sum of the elements in **A** will always be larger than any single element of **A**, since **A** starts off with all positive numbers. Therefore, the sum will only ever go up as we iterate through the solution process. This means that we will only ever have one attempt to place a given number in its correct spot.

It also means that the _last_ step will always be to settle the highest value of the target array, which means we can reconstruct the nature of **A** right before the last step as well. From there, we'll have to keep dealing with the largest remaining value, on and on, working backwards until we either succeed or fail.

Since we are going to have to deal with the target values in descending value order, it stands to reason that we should use a **max priority queue** or **max-heap** structure to keep track of the target values, especially since we don't care about the values' indices.

Once we have all the **target** values inserted into the priority queue (**pq/heap**) and the **sum** calculated, we can proceed to deal with the values in order. At each step, we should remove the max value, compute its replacement's value, then reinsert that replacement back into **pq**. If, at the start of an iteration, we see that the max value in **pq** is a **1**, then that means that all values in **pq** are **1**s, and we should **return true**.

On the other hand, if we find ourselves about to insert a number less than **1** into **pq**, we know we've failed and should **return false**, as we will have passed the prescribed starting position.

But at this point, we'll still obtain a **TLE** result and will need to optimize some more. Consider the situation in which we process the max value only to find that we're about to reinsert a number that is _still_ the max value. In some edge cases, it could take thousands of iterations to fully process this value so that we can move on to another, when all that processing can be done more simply in one step.

Take, for example, **target = [3,5,33]**. Normally, we'd remove the **33** and compute its replacement to be **25**, then from **25** to **17**, then **17** to **9**, then finally **9** to **1**. Each time, we're removing the sum of all the remaining values (**3 + 5 = 8**) from the current number. In any valid target array, as we noted at the very beginning, the max value _must_ be larger than the sum of the remaining elements, since it came from that sum plus the value that was replaced.

That means that we should be able to remove the remaining sum (**8**) from our current max value (**33**) as many times as we possibly can, since only the remainder will bring us below that sum. This we can achieve quite easily with the **mod operator** which will result in our replacement value (**33 % 8 = 1**) without the need to iterate through every step.

As noted recently, if we find that the max value is actually less than the remaining sum, then the array must not be valid, and we can **return false**. Also, if **num** should end up being **0** after applying the mod operator, then we should **return false**, except for the edge case where **sum = 1**. Alternately, we could instead push **sum** onto **pq** intead of **num**, which will immediately trigger a failure in all but the edge case.

---

#### ***Implementation:***

Javascript's **MaxPriorityQueue()** npm is convenient, but not terribly efficient. A custom **max-heap** implementation is more performant. Both options are included below.

Python defaults to a **min-heap**, so we can simulate a **max-heap** by changing the sign on each element when it is inserted and removed from the heap.

---

#### ***Javascript Code:***

##### ***w/ MaxPriorityQueue():***

The best result for the code below is **108ms / 49.7MB** (beats 100% / 43%).
```javascript
var isPossible = function(target) {
    let pq = new MaxPriorityQueue({priority: x => x}), sum = 0
    for (let num of target) sum += num, pq.enqueue(num)
    while (pq.front().element !== 1) {
        let num = pq.dequeue().element
        sum -= num
        if (num <= sum || sum < 1) return false
        num %= sum, sum += num, pq.enqueue(num || sum)
    }
    return true
};
```

##### ***w/ Max-Heap:***

The best result for the code below is **84ms / 46.9MB** (beats 100% / 93%).
```javascript
var isPossible = function(target) {
    let heap = [,], sum = 0
    
    const heapify = val => {
        let i = heap.length, par = i >> 1, temp
        heap.push(val)
        while (heap[par] < heap[i]) {
            temp = heap[par], heap[par] = heap[i], heap[i] = temp
            i = par, par = i >> 1
        }
    }
    const extract = () => {
        if (heap.length === 1) return null
        let top = heap[1], left, right, temp,
            i = 1, child = heap[3] > heap[2] ? 3 : 2
        if (heap.length > 2) heap[1] = heap.pop()
        else heap.pop()
        while (heap[i] < heap[child]) {
            temp = heap[child], heap[child] = heap[i], heap[i] = temp
            i = child, left = i << 1, right = left + 1
            child = heap[right] > heap[left] ? right : left
        }
        return top
    }
    
    for (let num of target) sum += num, heapify(num)
    while (heap[1] !== 1) {
        let num = extract()
        sum -= num
        if (num <= sum || sum < 1) return false
        num %= sum, sum += num, heapify(num || sum)
    }
    return true
};
```

---

#### ***Python Code:***

The best result for the code below is **236ms / 19.8MB** (beats 100% / 97%).
```python
class Solution:
    def isPossible(self, target: List[int]) -> bool:
        heap = [-num for num in target]
        total = sum(target)
        heapify(heap)
        while heap[0] != -1:
            num = -heappop(heap)
            total -= num
            if num <= total or total < 1: return False
            num %= total
            total += num
            heappush(heap, -num or -total)
        return True
```

---

#### ***Java Code:***

The best result for the code below is **7ms / 46.2MB** (beats 87% / 79%).
```java
class Solution {
    public boolean isPossible(int[] target) {
        Queue<Integer> pq = new PriorityQueue<>((a,b) -> b - a);
        int sum = 0;
        for (int num : target) {
            sum += num;
            pq.add(num);
        }
        while (pq.peek() != 1) {
            int num = pq.poll();
            sum -= num;
            if (num <= sum || sum < 1) return false;
            num %= sum;
            sum += num;
            pq.add(num > 0 ? num : sum);
        }
        return true;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **28ms / 29.8MB** (beats 97% / 54%).
```c++
class Solution {
public:
    bool isPossible(vector<int>& target) {
        priority_queue<int> pq;
        unsigned int sum = 0;
        for (int num : target)
            sum += num, pq.push(num);
        while (pq.top() != 1) {
            int num = pq.top();
            pq.pop();
            sum -= num;
            if (num <= sum || sum < 1) return false;
            num %= sum, sum += num, pq.push(num ? num : sum);
        }
        return true;
    }
};
```
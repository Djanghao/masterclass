# ✅✅|| Easiest Solution || Video Explaination ||C++ || JAVA || PYTHON || JAVASCRIPT||Beginner Friendly

**Author:** _HeLL0____
**Votes:** 9
**Link:** [https://leetcode.com/problems/hand-of-straights/solutions/5266205/](https://leetcode.com/problems/hand-of-straights/solutions/5266205/)

---


# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We want to check if it's possible to rearrange the cards into groups of size k, where each group consists of k consecutive cards. To achieve this, we need to determine if we can form each group from the available cards.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Check if the size of the hand is divisible by k. If not, return false because it won't be possible to evenly distribute the cards into groups of size k.
2. Construct a priority queue to store the card values. This allows us to efficiently process the cards in ascending order.
3. Iterate through the priority queue until it's empty:
- Inside the loop, maintain a variable count to track the number of cards in the current group.
- Use a temporary list to store elements with the same value as the current top element of the priority queue.
- Check if the difference between consecutive elements is exactly 1. If so, decrement the count. If not, return false.
- After processing a group, remove the top element from the priority queue and push the elements from the temporary list back into the priority queue.
4. If the loop completes without encountering any issues, return true, indicating that it's possible to rearrange the cards into groups of size k. 

# Complexity
- Time complexity: O(n log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    bool isNStraightHand(vector<int>& hand, int k) {
        if(hand.size()%k!=0){
            return false;
        }
        priority_queue<int,vector<int>,greater<int>>pq(hand.begin(),hand.end());
        while(!pq.empty()){
            int count=k;
            vector<int> temp;
            while(count>1 && !pq.empty()){
                int x=pq.top();
                pq.pop();
                while(pq.top()==x && !pq.empty()){
                    temp.push_back(pq.top());
                    pq.pop();
                }
                if(pq.top()-x==1 && !pq.empty()){
                    count--;
                }
                else{
                    return false;
                }
            }
            pq.pop();
            for(auto &it:temp){
                pq.push(it);
            }
        }
        return true;
    }
};

```
```Java []
class Solution {
    public boolean isNStraightHand(int[] hand, int k) {
        if (hand.length % k != 0) {
            return false;
        }
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for (int card : hand) {
            pq.offer(card);
        }
        while (!pq.isEmpty()) {
            int count = k;
            List<Integer> temp = new ArrayList<>();
            while (count > 1 && !pq.isEmpty()) {
                int x = pq.poll();
                while (!pq.isEmpty() && pq.peek() == x) {
                    temp.add(pq.poll());
                }
                if (!pq.isEmpty() && pq.peek() - x == 1) {
                    count--;
                } else {
                    return false;
                }
            }
            pq.poll();
            pq.addAll(temp);
        }
        return true;
    }
}
```
```Python []
class Solution:
    def isNStraightHand(self, hand: List[int], k: int) -> bool:
        if len(hand) % k != 0:
            return False
        pq = []
        for card in hand:
            heapq.heappush(pq, card)
        while pq:
            count = k
            temp = []
            while count > 1 and pq:
                x = heapq.heappop(pq)
                while pq and pq[0] == x:
                    temp.append(heapq.heappop(pq))
                if pq and pq[0] - x == 1:
                    count -= 1
                else:
                    return False
            heapq.heappop(pq)
            for val in temp:
                heapq.heappush(pq, val)
        return True
```
```JavaScript []
var isNStraightHand = function(hand, k) {
    if (hand.length % k !== 0) {
        return false;
    }
    const pq = [];
    for (let card of hand) {
        pq.push(card);
    }
    pq.sort((a, b) => a - b);
    while (pq.length > 0) {
        let count = k;
        let temp = [];
        while (count > 1 && pq.length > 0) {
            let x = pq.shift();
            while (pq.length > 0 && pq[0] === x) {
                temp.push(pq.shift());
            }
            if (pq.length > 0 && pq[0] - x === 1) {
                count--;
            } else {
                return false;
            }
        }
        pq.shift();
        pq.push(...temp);
    }
    return true;
};

```
```Go []
package main

import (
	"container/heap"
	"sort"
)

type MinHeap []int

func (h MinHeap) Len() int            { return len(h) }
func (h MinHeap) Less(i, j int) bool  { return h[i] < h[j] }
func (h MinHeap) Swap(i, j int)       { h[i], h[j] = h[j], h[i] }
func (h *MinHeap) Push(x interface{}) { *h = append(*h, x.(int)) }
func (h *MinHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}

func isNStraightHand(hand []int, k int) bool {
	if len(hand)%k != 0 {
		return false
	}
	sort.Ints(hand)
	pq := make(MinHeap, len(hand))
	copy(pq, hand)
	heap.Init(&pq)
	for len(pq) > 0 {
		count := k
		temp := []int{}
		for count > 1 && len(pq) > 0 {
			x := heap.Pop(&pq).(int)
			for len(pq) > 0 && pq[0] == x {
				temp = append(temp, heap.Pop(&pq).(int))
			}
			if len(pq) > 0 && pq[0]-x == 1 {
				count--
			} else {
				return false
			}
		}
		heap.Pop(&pq)
		for _, val := range temp {
			heap.Push(&pq, val)
		}
	}
	return true
}

```
![upvote.png](./images/0.png)


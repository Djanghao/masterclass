# ✅☑Beats 100% Users || [C++/Java/Python/JavaScript] || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 137
**Link:** [https://leetcode.com/problems/furthest-building-you-can-reach/solutions/4739361/](https://leetcode.com/problems/furthest-building-you-can-reach/solutions/4739361/)

---

# DO GIVE IT A LIKE IF THAT WAS HELPFUL\uD83E\uDEE1\uD83D\uDC47



---
![Screenshot 2024-02-17 061708.png](./images/0.png)


---


# Approaches
(Also explained in the code)

1. **Priority Queue Setup:**

    - The code defines a function furthestBuilding that takes a vector h representing the heights of buildings, an integer b representing the initial number of bricks, and an integer l representing the maximum number of steps you can use ladders.
    - Inside the function, a priority queue p is created to store the bricks used in each step in decreasing order. This queue is a max heap, meaning the largest element is at the top.
1. **Iterating Through Buildings:**

    - The code iterates through each pair of adjacent buildings using a for loop, starting from the first building (i=0) and ending at the second-to-last building (i<h.size()-1).
1. **Calculating Height Difference:**

    - At each step, the code calculates the height difference (diff) between the current building and the next building.
1. **Checking Bricks and Ladders:**

    - If the height difference (diff) is less than or equal to 0, it means no additional bricks are required to climb to the next building, so the loop continues to the next iteration.
    - If the height difference (diff) is greater than 0, it means additional bricks are required to climb to the next building. These bricks are deducted from the available bricks (b) and added to the priority queue (p).
    - If the remaining number of bricks (b) becomes negative after deducting the required bricks, it means the available bricks are not sufficient to climb to the next building. In this case, the code uses a ladder from the priority queue (p) by adding the largest previously deducted number of bricks to the available bricks and reducing the number of available ladders (l) by 1.
    - If the remaining number of ladders (l) becomes negative, it means there are no ladders left, and the loop breaks.
1. **Returning Furthest Building:**

    - The function returns the index (i) of the furthest building that can be reached with the given number of bricks and ladders.



# Complexity
- Time complexity:
   $$O(nlogk)$$
    

- Space complexity:
   $$O(min(n,l))$$
    


# Code
```C++ []
class Solution {
public:
    int furthestBuilding(vector<int>& h, int b, int l) {
        
        // Priority Queue for storing the bricks used in each step in decreasing order (Max at top)
        priority_queue<int> p;
    
        int i=0, diff =0; 
        for(i=0; i<h.size()-1; i++){ 
            
            diff = h[i+1]-h[i];
            
            if(diff <= 0){
                continue;
            }

            b -= diff; 
            p.push(diff); 
       
            if(b < 0){
                b += p.top(); 
                p.pop(); 
                l--;
            }

          
            if(l < 0) break;
        }
        
        
        return i;
    }
};



```
```Java []


class Solution {
    public int furthestBuilding(int[] h, int b, int l) {
        PriorityQueue<Integer> p = new PriorityQueue<>((a, b) -> b - a);
        
        int i = 0, diff = 0;
        for (i = 0; i < h.length - 1; i++) {
            diff = h[i + 1] - h[i];
            
            if (diff <= 0) {
                continue;
            }

            b -= diff;
            p.offer(diff);

            if (b < 0) {
                b += p.poll();
                l--;
            }

            if (l < 0) {
                break;
            }
        }
        
        return i;
    }
}


```
```python3 []

   def furthestBuilding(self, h: List[int], b: int, l: int) -> int:
       p = []
       
       i = 0
       for i in range(len(h) - 1):
           diff = h[i + 1] - h[i]
           
           if diff <= 0:
               continue
           
           b -= diff
           x = heapq.heappush(p, -diff)
           print(x)
           if b < 0:
               b += -heapq.heappop(p)
               l -= 1
               
           if l < 0:
               return i
       return len(h)-1
  


```
```javascript []
var furthestBuilding = function(h, b, l) {
    const p = new MaxHeap();
    
    let i = 0, diff = 0;
    for (i = 0; i < h.length - 1; i++) {
        diff = h[i + 1] - h[i];
        
        if (diff <= 0) {
            continue;
        }

        b -= diff;
        p.push(diff);

        if (b < 0) {
            b += p.pop();
            l--;
        }

        if (l < 0) {
            break;
        }
    }
    
    return i;
};

class MaxHeap {
    constructor() {
        this.heap = [];
    }
    
    push(val) {
        this.heap.push(val);
        this.heapifyUp();
    }
    
    pop() {
        const max = this.heap[0];
        const last = this.heap.pop();
        
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.heapifyDown();
        }
        
        return max;
    }
    
    heapifyUp() {
        let current = this.heap.length - 1;
        while (current > 0) {
            const parent = Math.floor((current - 1) / 2);
            if (this.heap[parent] >= this.heap[current]) {
                break;
            }
            [this.heap[parent], this.heap[current]] = [this.heap[current], this.heap[parent]];
            current = parent;
        }
    }
    
    heapifyDown() {
        let current = 0;
        while (true) {
            let leftChild = 2 * current + 1;
            let rightChild = 2 * current + 2;
            let maxChild = leftChild;
            
            if (rightChild < this.heap.length && this.heap[rightChild] > this.heap[leftChild]) {
                maxChild = rightChild;
            }
            
            if (leftChild >= this.heap.length || this.heap[current] >= this.heap[maxChild]) {
                break;
            }
            
            [this.heap[current], this.heap[maxChild]] = [this.heap[maxChild], this.heap[current]];
            current = maxChild;
        }
    }
}



```
---





# DO GIVE IT A LIKE IF THAT WAS HELPFUL\uD83E\uDEE1\uD83D\uDC47

---
---


---
# MAX HEAP NO SHIT SHERLOCK ✅✅69_BEATS_100%✅✅🔥Easy Solution🔥With Explanation🔥

**Author:** phoenix_sr
**Votes:** 13
**Link:** [https://leetcode.com/problems/maximal-score-after-applying-k-operations/solutions/5909266/](https://leetcode.com/problems/maximal-score-after-applying-k-operations/solutions/5909266/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
we need a max heap that will always keep track of the top k largest elements 
that is what we need
# Approach
<!-- Describe your approach to solving the problem. -->
use inbuilt maxpriorotyqueue function to acheive this 
simpley add the top k elemetns in the queue and return the anser while updating the elements along the way 
# Complexity
- Time complexity:O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
const maxKelements = function (nums, k) {
  const pq = new MaxPriorityQueue({ compare: (a, b) => b - a })
  for (const num of nums) {
    pq.enqueue(num)
  }
  let score = 0
  while (k) {
    const ele = pq.dequeue()
    score += ele
    pq.enqueue(Math.ceil(ele / 3))
    k--
  }
  return score
}
```
```python []
import heapq
import math

def maxKelements(nums, k):
    pq = [-num for num in nums]
    heapq.heapify(pq)  # Create a max-heap (by inverting the values)
    
    score = 0
    while k > 0:
        ele = -heapq.heappop(pq)  # Get the max element (by negating)
        score += ele
        heapq.heappush(pq, -math.ceil(ele / 3))  # Insert ceil(ele / 3)
        k -= 1
    
    return score

# Test the function
nums = [10, 20, 15]
k = 3
print(maxKelements(nums, k))

```
```java []
import java.util.PriorityQueue;
import java.util.Comparator;

public class MaxKElements {
    public static int maxKelements(int[] nums, int k) {
        PriorityQueue<Integer> pq = new PriorityQueue<>(Comparator.reverseOrder());
        
        // Add all elements to the priority queue
        for (int num : nums) {
            pq.add(num);
        }
        
        int score = 0;
        
        while (k > 0) {
            int ele = pq.poll();  // Extract the max element
            score += ele;
            pq.add((int) Math.ceil(ele / 3.0));  // Re-insert ceil(ele / 3) into the queue
            k--;
        }
        
        return score;
    }

    public static void main(String[] args) {
        int[] nums = {10, 20, 15};
        int k = 3;
        System.out.println(maxKelements(nums, k));  // Test the function
    }
}

```
```c []
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

// Function to swap two integers
void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Function to heapify a max heap
void heapify(int heap[], int n, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < n && heap[left] > heap[largest]) {
        largest = left;
    }
    if (right < n && heap[right] > heap[largest]) {
        largest = right;
    }
    if (largest != i) {
        swap(&heap[i], &heap[largest]);
        heapify(heap, n, largest);
    }
}

// Function to extract the maximum element from the heap
int extractMax(int heap[], int* n) {
    int root = heap[0];
    heap[0] = heap[*n - 1];
    (*n)--;
    heapify(heap, *n, 0);
    return root;
}

// Function to insert an element into the heap
void insert(int heap[], int* n, int value) {
    (*n)++;
    int i = *n - 1;
    heap[i] = value;

    // Fix the max heap property if it's violated
    while (i != 0 && heap[(i - 1) / 2] < heap[i]) {
        swap(&heap[i], &heap[(i - 1) / 2]);
        i = (i - 1) / 2;
    }
}

int maxKelements(int nums[], int size, int k) {
    int heap[size];
    int n = 0;
    
    // Build the max heap
    for (int i = 0; i < size; i++) {
        insert(heap, &n, nums[i]);
    }

    int score = 0;

    // Extract max and reinsert ceil(max / 3)
    while (k > 0) {
        int ele = extractMax(heap, &n);
        score += ele;
```
```c++ []
#include <iostream>
#include <queue>
#include <cmath>

using namespace std;

int maxKelements(vector<int>& nums, int k) {
    priority_queue<int> pq;

    // Add all elements to the priority queue
    for (int num : nums) {
        pq.push(num);
    }

    int score = 0;

    while (k > 0) {
        int ele = pq.top();
        pq.pop();
        score += ele;
        pq.push(ceil(ele / 3.0));
        k--;
    }

    return score;
}

int main() {
    vector<int> nums = {10, 20, 15};
    int k = 3;

    cout << maxKelements(nums, k) << endl;
    
    return 0;
}
```
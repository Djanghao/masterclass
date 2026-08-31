# 🔥🔥🔥🔥🔥Acc. 100% | js | ts | java | c | C++ | C# | python | python3 | php | kotlin | 🔥🔥🔥🔥🔥

**Author:** 20Sunny
**Votes:** 8
**Link:** [https://leetcode.com/problems/sliding-window-maximum/solutions/3916077/](https://leetcode.com/problems/sliding-window-maximum/solutions/3916077/)

---

---
![header_.png](./images/0.png)

---
```Python3 []
from collections import deque

class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        result = []
        window = deque()  # Store indices of elements in the current window
        
        for i in range(len(nums)):
            # Remove elements that are out of the current window from the front of the deque
            while window and window[0] < i - k + 1:
                window.popleft()
            
            # Remove elements that are smaller than the current element from the back of the deque
            while window and nums[window[-1]] < nums[i]:
                window.pop()
            
            # Add the current index to the back of the deque
            window.append(i)
            
            # Append the maximum element of the current window to the result
            if i >= k - 1:
                result.append(nums[window[0]])
        
        return result
```
```python []
from collections import deque

class Solution(object):
    def maxSlidingWindow(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        if not nums:
            return []

        result = []
        window = deque()  # Stores indices of elements within the sliding window

        for i in range(len(nums)):
            # Remove indices that are out of the current sliding window
            while window and window[0] < i - k + 1:
                window.popleft()

            # Remove indices of smaller elements since they will not be useful
            while window and nums[window[-1]] < nums[i]:
                window.pop()

            window.append(i)  # Add the current index to the deque

            # The first element in the deque is always the maximum for the current window
            if i >= k - 1:
                result.append(nums[window[0]])

        return result
```
```Javascript []
var maxSlidingWindow = function(nums, k) {
    const result = [];
    const deque = []; // Store indices of elements
    
    for (let i = 0; i < nums.length; i++) {
        // Remove elements that are out of the current window
        while (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }
        
        // Remove smaller elements as they are not potential max candidates
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }
        
        deque.push(i);
        
        // The front element of the deque is always the maximum for the current window
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }
    
    return result;
};
```
```Typrscript []
function maxSlidingWindow(nums: number[], k: number): number[] {
    const result: number[] = [];
    const deque: number[] = []; // Store indices, not actual elements
    
    for (let i = 0; i < nums.length; i++) {
        // Remove elements that are out of the current window
        while (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }
        
        // Remove elements that are smaller than the current element
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }
        
        deque.push(i); // Add the current element's index to the deque
        
        // If the left end of the window is inside the array, add maximum to the result
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }
    
    return result;
}
```
```Java []
import java.util.ArrayDeque;
import java.util.Deque;

class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        if (nums == null || nums.length == 0 || k <= 0) {
            return new int[0];
        }
        
        int n = nums.length;
        int[] result = new int[n - k + 1];
        int resultIdx = 0;
        
        Deque<Integer> deque = new ArrayDeque<>();
        
        for (int i = 0; i < n; i++) {
            // Remove elements that are out of the current window
            while (!deque.isEmpty() && deque.peek() < i - k + 1) {
                deque.poll();
            }
            
            // Remove smaller elements as they are no longer candidates for max
            while (!deque.isEmpty() && nums[deque.peekLast()] < nums[i]) {
                deque.pollLast();
            }
            
            deque.offer(i); // Add current index to the deque
            
            // Add max element to the result array for the current window
            if (i >= k - 1) {
                result[resultIdx++] = nums[deque.peek()];
            }
        }
        
        return result;
    }
}
```
```PHP []
class Solution {
function maxSlidingWindow($nums, $k)
{
	if ($k == 1) {
		return $nums;
	}

	$count = count($nums);
	if ($k >= $count) {
		return [max($nums)];
	}

	$result = [];
	$queue = new SplQueue();

	for ($i = 0; $i < $k; $i++) {
		while (!$queue->isEmpty() && $nums[$i] >= $nums[$queue->top()]) {
			 $queue->pop();
		}
		$queue->push($i);
	}

	for (; $i < $count; $i++) {
		$result[] = $nums[$queue->bottom()];

		if (!$queue->isEmpty() && $queue->bottom() <= $i - $k) {
			$queue->shift();
		}

		while (!$queue->isEmpty() && $nums[$i] >= $nums[$queue->top()]) {
			$queue->pop();
		}
		$queue->push($i);
	}

	$result[] = $nums[$queue->bottom()];

	return $result;
}
}
```
```Kotlin []
import java.util.PriorityQueue

class Solution {
    fun maxSlidingWindow(nums: IntArray, k: Int): IntArray {
        val result = mutableListOf<Int>()
        val maxHeap = PriorityQueue<Pair<Int, Int>>(compareBy { -it.first })
        
        for (i in nums.indices) {
            // Remove elements that are out of the current window
            while (maxHeap.isNotEmpty() && maxHeap.peek().second < i - k + 1) {
                maxHeap.poll()
            }
            
            // Add the current element to the heap
            maxHeap.offer(nums[i] to i)
            
            // Add the maximum element in the current window to the result
            if (i >= k - 1) {
                result.add(maxHeap.peek().first)
            }
        }
        
        return result.toIntArray()
    }
}
```
```C []
#include <stdio.h>
#include <stdlib.h>

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* maxSlidingWindow(int* nums, int numsSize, int k, int* returnSize) {
    if (numsSize == 0 || k == 0) {
        *returnSize = 0;
        return NULL;
    }

    // Calculate the number of sliding windows
    int numWindows = numsSize - k + 1;

    // Allocate memory for the result array
    int *result = (int *)malloc(numWindows * sizeof(int));
    if (!result) {
        *returnSize = 0;
        return NULL;
    }

    // Create a deque (double-ended queue) to store indices of elements in the sliding window
    int *deque = (int *)malloc(numsSize * sizeof(int));
    int front = 0, rear = -1; // Indices for the front and rear of the deque

    for (int i = 0; i < numsSize; i++) {
        // Remove elements that are out of the current sliding window from the front of the deque
        while (front <= rear && deque[front] < i - k + 1) {
            front++;
        }

        // Remove elements that are smaller than the current element from the rear of the deque
        while (front <= rear && nums[deque[rear]] < nums[i]) {
            rear--;
        }

        // Add the current element's index to the rear of the deque
        deque[++rear] = i;

        // Calculate the maximum value for the current sliding window
        if (i >= k - 1) {
            result[i - k + 1] = nums[deque[front]];
        }
    }

    *returnSize = numWindows;
    free(deque);
    return result;
}
```
```C++ []
class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        vector<int> result;
        deque<int> window; // Stores indices of elements within the current window
        
        for (int i = 0; i < nums.size(); ++i) {
            // Remove indices that are out of the current window
            while (!window.empty() && window.front() <= i - k)
                window.pop_front();
            
            // Remove smaller elements from the back as they won't affect the maximum
            while (!window.empty() && nums[window.back()] < nums[i])
                window.pop_back();
            
            window.push_back(i); // Add the current index to the window
            
            // The first element in the window is always the maximum for the current window
            if (i >= k - 1)
                result.push_back(nums[window.front()]);
        }
        
        return result;
    }
};
```
```C# []
public class Solution {
    public int[] MaxSlidingWindow(int[] nums, int k) {
        if (nums.Length == 0 || k == 0) {
            return new int[0];
        }
        
        int n = nums.Length;
        int[] result = new int[n - k + 1];
        int ri = 0; // Index for the result array
        
        // Create a deque to store indices of elements in the current window
        LinkedList<int> deque = new LinkedList<int>();
        
        for (int i = 0; i < n; i++) {
            // Remove indices of elements that are out of the current window
            while (deque.Count > 0 && deque.First.Value < i - k + 1) {
                deque.RemoveFirst();
            }
            
            // Remove indices of elements that are smaller than the current element
            while (deque.Count > 0 && nums[deque.Last.Value] < nums[i]) {
                deque.RemoveLast();
            }
            
            // Add the current index to the deque
            deque.AddLast(i);
            
            // The first element in the deque is always the maximum for the current window
            if (i >= k - 1) {
                result[ri++] = nums[deque.First.Value];
            }
        }
        
        return result;
    }
}
```

---
![download.jpg](./images/1.jpeg)

---
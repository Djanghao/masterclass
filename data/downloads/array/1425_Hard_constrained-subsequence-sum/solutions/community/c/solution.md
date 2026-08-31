# ✅☑[C++/Java/Python/JavaScript] || 3 Approaches || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 23
**Link:** [https://leetcode.com/problems/constrained-subsequence-sum/solutions/4191320/](https://leetcode.com/problems/constrained-subsequence-sum/solutions/4191320/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**

#### ***Approach 1 (Heap)***
1. We use a max heap (priority_queue) to efficiently keep track of the maximum sum of a constrained subset and the index at which it ends.

1. We initialize the answer (`ans`) with the value of the first element in the input `nums` array.

1. We iterate through the elements of `nums` from the second element (index 1) to the end.

1. In the loop, we check whether elements in the max heap are within the constraint (at most `k` elements away from the current element).

1. We remove elements from the heap that are out of range because they are no longer useful for calculating the maximum sum.

1. We calculate the current sum (`curr`) by adding the value of the current element to the maximum of zero and the top element in the max heap. This ensures that we don't include negative values from the heap if they are not beneficial.

1. We update the answer (`ans`) with the maximum of the current sum and the previous answer.

1. We push the current sum and its index into the max heap for future calculations.

1. After the loop, we have the maximum sum of the constrained subset in `ans`, and we return it as the result.


# Complexity
- *Time complexity:*
   $$O(nlogn)$$
    

- *Space complexity:*
   $$O(n)$$
    


# Code
```C++ []
class Solution {
public:
    int constrainedSubsetSum(vector<int>& nums, int k) {
        priority_queue<pair<int, int>> heap; // Create a max heap to keep track of the maximum sum and its index.
        heap.push({nums[0], 0}); // Push the first element into the heap with its value and index.
        int ans = nums[0]; // Initialize the answer with the first element's value.

        for (int i = 1; i < nums.size(); i++) { // Iterate through the remaining elements in nums.
            while (i - heap.top().second > k) { // While the index difference is greater than k (out of range):
                heap.pop(); // Remove elements from the heap that are out of range.
            }

            int curr = max(0, heap.top().first) + nums[i]; // Calculate the current sum considering the maximum possible value.
            ans = max(ans, curr); // Update the answer with the maximum of the current sum and the previous answer.
            heap.push({curr, i}); // Push the current sum and its index into the heap.
        }

        return ans; // Return the maximum sum of the constrained subset.
    }
};

```


```C []
int constrainedSubsetSum(int* nums, int numsSize, int k) {
    struct Node {
        int value;
        int index;
    };
    
    struct Node* heap = (struct Node*)malloc(numsSize * sizeof(struct Node));
    int heapSize = 0;
    
    int ans = nums[0];
    
    for (int i = 0; i < numsSize; i++) {
        while (i - heap[0].index > k) {
            // Remove elements from the heap that are out of range.
            if (heapSize > 0) {
                heap[0] = heap[heapSize - 1];
                heapSize--;
                int currIndex = 0;
                while (true) {
                    int leftChild = currIndex * 2 + 1;
                    int rightChild = currIndex * 2 + 2;
                    int nextIndex = currIndex;
                    if (leftChild < heapSize && heap[leftChild].value > heap[nextIndex].value) {
                        nextIndex = leftChild;
                    }
                    if (rightChild < heapSize && heap[rightChild].value > heap[nextIndex].value) {
                        nextIndex = rightChild;
                    }
                    if (nextIndex == currIndex) {
                        break;
                    }
                    struct Node temp = heap[currIndex];
                    heap[currIndex] = heap[nextIndex];
                    heap[nextIndex] = temp;
                    currIndex = nextIndex;
                }
            } else {
                break;
            }
        }
        
        int curr = (heapSize > 0) ? (heap[0].value + nums[i]) : nums[i];
        
        ans = (curr > ans) ? curr : ans;
        
        struct Node newNode;
        newNode.value = (curr > 0) ? curr : 0;
        newNode.index = i;
        heap[heapSize] = newNode;
        
        int currIndex = heapSize;
        while (currIndex > 0) {
            int parentIndex = (currIndex - 1) / 2;
            if (heap[currIndex].value > heap[parentIndex].value) {
                struct Node temp = heap[currIndex];
                heap[currIndex] = heap[parentIndex];
                heap[parentIndex] = temp;
                currIndex = parentIndex;
            } else {
                break;
            }
        }
        
        heapSize++;
    }
    
    free(heap);
    
    return ans;
}


```


```Java []
class Solution {
    public int constrainedSubsetSum(int[] nums, int k) {
        PriorityQueue<int[]> heap = new PriorityQueue<>((a, b) -> {
            return b[0] - a[0];
        });
        
        heap.add(new int[] {nums[0], 0});
        int ans = nums[0];
        
        for (int i = 1; i < nums.length; i++) {
            while (i - heap.peek()[1] > k) {
                heap.remove();
            }
            
            int curr = Math.max(0, heap.peek()[0]) + nums[i];
            ans = Math.max(ans, curr);
            heap.add(new int[] {curr, i});
        }
        
        return ans;
    }
}

```

```python3 []
import heapq

class Solution:
    def constrainedSubsetSum(self, nums: List[int], k: int) -> int:
        heap = [(-nums[0], 0)]
        ans = nums[0]
        
        for i in range(1, len(nums)):
            while i - heap[0][1] > k:
                heapq.heappop(heap)

            curr = max(0, -heap[0][0]) + nums[i]
            ans = max(ans, curr)
            heapq.heappush(heap, (-curr, i))

        return ans

```

```javascript []
var constrainedSubsetSum = function(nums, k) {
    let maxSum = nums[0];
    const dp = [nums[0]];
    const maxHeap = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        while (maxHeap.length > 0 && i - maxHeap[0][1] > k) {
            maxHeap.shift();
        }
        const current = Math.max(nums[i], nums[i] + (maxHeap.length > 0 ? maxHeap[0][0] : 0));
        maxSum = Math.max(maxSum, current);
        dp.push(current);
        while (maxHeap.length > 0 && dp[i] >= maxHeap[maxHeap.length - 1][0]) {
            maxHeap.pop();
        }
        maxHeap.push([dp[i], i]);
    }

    return maxSum;
};

```


---

#### ***Approach 2 (TreeMap)***
1. Create a `map` named `window` to maintain a sliding window of values. The keys represent the sums of elements in the window, and the values represent the number of times each sum appears.
1. Initialize `window[0]` to 0 to handle edge cases.
1. Create a vector `dp` to store the dynamic programming values, with the same size as the input `nums`.
1. Start iterating through the `nums` array using a `for` loop.
1. For each element at index `i`, calculate `dp[i]` by adding the current element `nums[i]` to the maximum sum in the sliding window (`window.rbegin()->first`).
1. Increase the count for this `dp[i]` in the `window` map to keep track of its frequency.
1. Check if the sliding window size has exceeded `k`. If it has, remove elements from the window map that are no longer in the `window`:
    - Decrement the count of the sum corresponding to `dp[i - k]`.
    - If the count becomes 0, remove that sum from the `window` map using `window.erase()`.
1. Continue the loop until all elements in the `nums` array are processed.
1. After processing all elements, return the maximum value from the `dp` vector using the `*max_element(dp.begin(), dp.end())` function.
    - This maximum value represents the maximum sum of a constrained subset of at most `k` elements.


# Complexity
- *Time complexity:*
   $$O(nlogk)$$
    

- *Space complexity:*
   $$O(n)$$
    


# Code
```C++ []
class Solution {
public:
    int constrainedSubsetSum(vector<int>& nums, int k) {
        map<int, int> window;
        window[0] = 0;
        vector<int> dp(nums.size());
        
        for (int i = 0; i < nums.size(); i++) {
            dp[i] = nums[i] + window.rbegin()->first;
            window[dp[i]]++;
            
            if (i >= k) {
                window[dp[i - k]]--;
                if (window[dp[i - k]] == 0) {
                    window.erase(dp[i - k]);
                }
            }
        }
        
        return *max_element(dp.begin(), dp.end());
    }
};
```


```C []


int max(int a, int b) {
    return (a > b) ? a : b;
}

int constrainedSubsetSum(int* nums, int numsSize, int k) {
    int* dp = (int*)malloc(numsSize * sizeof(int));
    int* window = (int*)malloc((numsSize + 1) * sizeof(int));
    memset(window, 0, (numsSize + 1) * sizeof(int));

    int maxSum = nums[0];
    dp[0] = nums[0];
    window[dp[0]] = 1;

    for (int i = 1; i < numsSize; i++) {
        dp[i] = nums[i] + window[maxSum];
        window[dp[i]]++;

        if (i >= k) {
            window[dp[i - k]]--;
            if (window[dp[i - k]] == 0) {
                window[dp[i - k]] = 0;
            }
        }

        maxSum = max(maxSum, dp[i]);
    }

    free(dp);
    free(window);
    return maxSum;
}

int main() {
    int nums[] = {10, 2, -10, 5, 20};
    int k = 2;
    int numsSize = sizeof(nums) / sizeof(nums[0]);
    int result = constrainedSubsetSum(nums, numsSize, k);
    printf("Maximum Sum: %d\
", result);
    return 0;
}


```


```Java []
class Solution {
    public int constrainedSubsetSum(int[] nums, int k) {
        TreeMap<Integer, Integer> window = new TreeMap();
        window.put(0, 0);
        
        int dp[] = new int[nums.length];
        
        for (int i = 0; i < nums.length; i++) {
            dp[i] = nums[i] + window.lastKey();
            window.put(dp[i], window.getOrDefault(dp[i], 0) + 1);
            
            if (i >= k) {
                window.put(dp[i - k], window.get(dp[i - k]) - 1);
                if (window.get(dp[i - k]) == 0) {
                    window.remove(dp[i - k]);
                }
            }
        }
        
        int ans = Integer.MIN_VALUE;
        for (int num : dp) {
            ans = Math.max(ans, num);
        }
        
        return ans;
    }
}

```

```python3 []
from sortedcontainers import SortedList

class Solution:
    def constrainedSubsetSum(self, nums: List[int], k: int) -> int:
        window = SortedList([0])
        dp = [0] * len(nums)
        
        for i in range(len(nums)):
            dp[i] = nums[i] + window[-1]
            window.add(dp[i])
            if i >= k:
                window.remove(dp[i - k])
        
        return max(dp)

```

```javascript []
`var constrainedSubsetSum = function(nums, k) {
    const dp = new Array(nums.length);
    const window = new Array(nums.length + 1).fill(0);

    let maxSum = nums[0];
    dp[0] = nums[0];
    window[dp[0]] = 1;

    for (let i = 1; i < nums.length; i++) {
        dp[i] = nums[i] + window[maxSum];
        window[dp[i]]++;

        if (i >= k) {
            window[dp[i - k]]--;
            if (window[dp[i - k]] === 0) {
                window[dp[i - k]] = 0;
            }
        }

        maxSum = Math.max(maxSum, dp[i]);
    }

    return maxSum;
};
```


---

#### ***Approach 3 (Deque)***
1. Create a double-ended queue (`deque`) called `queue` to maintain indices of elements.
1. Initialize a vector `dp` to store dynamic programming values, with the same size as the input `nums`.
1. Iterate through the `nums` array using a `for` loop.
1. Ensure that the `queue` contains only indices within the sliding window of size `k`. Remove elements that are outside the window.
1. Calculate the value of `dp[i]`, which represents the maximum sum of a constrained subset:
    - If the `queue` is not empty, add the maximum from the previous window (front of the `queue`) to the current element at index `i`.
    - If the `queue` is empty, just consider the current element itself.
1. Remove elements from the back of the `queue` if their corresponding `dp` values are smaller than `dp[i]`.
    - This step ensures that the `queue` maintains elements in non-increasing order based on their `dp` values.
1. If the calculated `dp[i]` is positive, add the current index `i` to the back of the `queue`.
    - This is done because negative `dp` values will not contribute to future sums.
1. Continue the loop until all elements in the `nums` array are processed.
1. After processing all elements, return the maximum value from the dp vector using the `*max_element(dp.begin(), dp.end()) function`.
    - This maximum value represents the maximum sum of a constrained subset of at most k elements.


# Complexity
- *Time complexity:*
   $$O(n)$$
    

- *Space complexity:*
   $$O(n)$$
    


# Code
```C++ []
class Solution {
public:
    int constrainedSubsetSum(vector<int>& nums, int k) {
        deque<int> queue;  // Create a double-ended queue (deque) to store indices of elements.
        vector<int> dp(nums.size());  // Create a vector `dp` to store dynamic programming values.

        for (int i = 0; i < nums.size(); i++) {
            // Ensure that the queue only contains indices within the sliding window size `k`.
            if (!queue.empty() && i - queue.front() > k) {
                queue.pop_front();  // Remove elements that are outside the window.
            }

            // Calculate `dp[i]` as the maximum of the current element and the maximum from the previous window.
            dp[i] = (!queue.empty() ? dp[queue.front()] : 0) + nums[i];

            // Remove elements from the back of the queue if their corresponding `dp` values are smaller than `dp[i]`.
            while (!queue.empty() && dp[queue.back()] < dp[i]) {
                queue.pop_back();
            }

            // If the calculated `dp[i]` is positive, add the current index `i` to the queue.
            if (dp[i] > 0) {
                queue.push_back(i);
            }
        }

        // Return the maximum value in the `dp` vector, which represents the maximum sum of a constrained subset.
        return *max_element(dp.begin(), dp.end());
    }
};

```


```C []

int max(int a, int b) {
    return (a > b) ? a : b;
}

int constrainedSubsetSum(int* nums, int numsSize, int k) {
    int* dp = (int*)malloc(numsSize * sizeof(int));
    int* queue = (int*)malloc(numsSize * sizeof(int));
    int front = 0, rear = -1;
    int ans = nums[0];

    for (int i = 0; i < numsSize; i++) {
        while (front <= rear && i - queue[front] > k) {
            front++;
        }

        dp[i] = ((front <= rear) ? dp[queue[front]] : 0) + nums[i];

        while (front <= rear && dp[queue[rear]] < dp[i]) {
            rear--;
        }

        if (dp[i] > 0) {
            queue[++rear] = i;
        }

        ans = max(ans, dp[i);
    }

    free(dp);
    free(queue);
    return ans;
}


```


```Java []
class Solution {
    public int constrainedSubsetSum(int[] nums, int k) {
        Deque<Integer> queue = new ArrayDeque<>();
        int dp[] = new int[nums.length];
        
        for (int i = 0; i < nums.length; i++) {
            if (!queue.isEmpty() && i - queue.peek() > k) {
                queue.poll();
            }
            
            dp[i] = (!queue.isEmpty() ? dp[queue.peek()] : 0) + nums[i];
            while (!queue.isEmpty() && dp[queue.peekLast()] < dp[i]) {
                queue.pollLast();
            }
            
            if (dp[i] > 0) {
                queue.offer(i);
            }
        }
        
        int ans = Integer.MIN_VALUE;
        for (int num : dp) {
            ans = Math.max(ans, num);
        }
        
        return ans;
    }
}

```

```python3 []
class Solution:
    def constrainedSubsetSum(self, nums: List[int], k: int) -> int:
        queue = deque()
        dp = [0] * len(nums)
        
        for i in range(len(nums)):
            if queue and i - queue[0] > k:
                queue.popleft()
            
            dp[i] = (dp[queue[0]] if queue else 0) + nums[i]
            while queue and dp[queue[-1]] < dp[i]:
                queue.pop()
            
            if dp[i] > 0:
                queue.append(i)
                
        return max(dp)

```

```javascript []
function constrainedSubsetSum(nums, k) {
    const dp = new Array(nums.length);
    const queue = [];
    let ans = nums[0];
    
    for (let i = 0; i < nums.length; i++) {
        while (queue.length && i - queue[0] > k) {
            queue.shift();
        }
        
        dp[i] = (queue.length ? dp[queue[0]] : 0) + nums[i];
        
        while (queue.length && dp[queue[queue.length - 1]] < dp[i]) {
            queue.pop();
        }
        
        if (dp[i] > 0) {
            queue.push(i);
        }
        
        ans = Math.max(ans, dp[i]);
    }
    
    return ans;
}

// Example usage:
const nums = [10, 2, 3];
const k = 1;
console.log(constrainedSubsetSum(nums, k)); // Output: 15

```


---
# PLEASE UPVOTE IF IT HELPED

---
---


---
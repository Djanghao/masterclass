# ❤️‍🔥❤️‍🔥God level Explanation ❤️‍🔥❤️‍🔥 || ✅ Beat 100% 🚀||simple and easy solution 😍❤️‍🔥

**Author:** hi-mukul
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/solutions/5268232/](https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/solutions/5268232/)

---


---


# \uD83D\uDE80 Hi, I'm [Mukulraj Singh](https://leetcode.com/u/hi-mukul/), and I'm excited to share solution to this question with detailed explanation:

---


# \uD83C\uDFAFProblem Explaination:
The problem is to determine if an array of integers can be divided into sets of k consecutive numbers. The key insight is that we need to ensure each number from the smallest to the largest can form part of exactly one such set without any leftovers.

---

# \uD83E\uDDE0Thinking Behind the Solution:
1. **Initial Check:**
   - First, check if the length of the array is divisible by k. If not, return false because it's impossible to divide the array into sets of equal size k.
```
        if (nums.size() % k != 0)
            return false;

```

2. **Count Frequencies:**
   - Use a hash map to count the occurrences of each number in the array.
```
        unordered_map<int, int> count;
        for (int card : nums)
            count[card]++;
```

3. **Min-Heap Initialization:**
   - Insert all unique numbers into a min-heap (or sort the keys of the hash map). This ensures we process the numbers in increasing order.
```
        priority_queue<int, vector<int>, greater<int>> minHeap;
        for (const auto &entry : count)
            minHeap.push(entry.first);
```

4. **Forming Sets:**
   - While there are elements in the heap, get the smallest number (let's call it first).
   - For each number from first to first + k - 1, check if it exists in the count map:
     - If it doesn't exist, return false because we can't form a complete set.
     - Decrease the count for each number.
     - If the count of a number becomes zero, and it's the smallest element in the heap, remove it from the heap.
```
        while (!minHeap.empty())
        {
            int first = minHeap.top();
            for (int i = 0; i < k; ++i)
            {
                if (count[first + i] == 0)
                    return false;
                if (--count[first + i] == 0)
                {
                    if (first + i != minHeap.top())
                        return false;
                    minHeap.pop();
                }
            }
        }
```

5. **Return True:**
   - If all sets are successfully formed, return true.

```
        return true;

```
---



# Complexity
- **Time complexity:-** Big O(NlogN)
   - Sorting the keys of the map or the initial heapify operation is O(NlogN), where N is the number of unique elements in the array.
   - Processing each element involves checking up to k consecutive elements, leading to O(NlogN) complexity in total, where N is the size of the input array.


- **Space complexity:-** Big O(N)
   - The space complexity is O(N) due to the storage of the counts and the heap.

---



# C++ Code
```
class Solution
{
public:
    bool isPossibleDivide(vector<int> &nums, int k)
    {
        if (nums.size() % k != 0)
            return false;

        unordered_map<int, int> count;
        for (int card : nums)
            count[card]++;

        priority_queue<int, vector<int>, greater<int>> minHeap;
        for (const auto &entry : count)
            minHeap.push(entry.first);

        while (!minHeap.empty())
        {
            int first = minHeap.top();
            for (int i = 0; i < k; ++i)
            {
                if (count[first + i] == 0)
                    return false;
                if (--count[first + i] == 0)
                {
                    if (first + i != minHeap.top())
                        return false;
                    minHeap.pop();
                }
            }
        }
        return true;
    }
};
```
# Other Codes
```javascript []
var isPossibleDivide = function(nums, k) {
    if (nums.length % k !== 0) return false;

    let count = new Map();
    for (let num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
    }

    let minHeap = [...count.keys()].sort((a, b) => a - b);

    for (let first of minHeap) {
        while (count.get(first) > 0) {
            for (let i = 0; i < k; ++i) {
                if (!count.get(first + i)) return false;
                count.set(first + i, count.get(first + i) - 1);
            }
        }
    }
    return true;
};

```
```python []
from collections import Counter
import heapq

class Solution:
    def isPossibleDivide(self, nums: List[int], k: int) -> bool:
        if len(nums) % k != 0:
            return False

        count = Counter(nums)
        min_heap = list(count.keys())
        heapq.heapify(min_heap)

        while min_heap:
            first = min_heap[0]
            for i in range(first, first + k):
                if count[i] == 0:
                    return False
                count[i] -= 1
                if count[i] == 0:
                    if i != heapq.heappop(min_heap):
                        return False
        return True

```
```Java []
import java.util.*;

class Solution {
    public boolean isPossibleDivide(int[] nums, int k) {
        if (nums.length % k != 0)
            return false;

        Map<Integer, Integer> count = new HashMap<>();
        for (int num : nums)
            count.put(num, count.getOrDefault(num, 0) + 1);

        PriorityQueue<Integer> minHeap = new PriorityQueue<>(count.keySet());

        while (!minHeap.isEmpty()) {
            int first = minHeap.poll();
            for (int i = 0; i < k; ++i) {
                if (count.getOrDefault(first + i, 0) == 0)
                    return false;
                count.put(first + i, count.get(first + i) - 1);
                if (count.get(first + i) == 0 && minHeap.contains(first + i))
                    minHeap.remove(first + i);
            }
        }
        return true;
    }
}

```
```ruby []
def is_possible_divide(nums, k)
    return false if nums.length % k != 0

    count = Hash.new(0)
    nums.each { |num| count[num] += 1 }

    min_heap = count.keys.sort

    while !min_heap.empty?
        first = min_heap[0]
        (0...k).each do |i|
            if count[first + i] == 0
                return false
            end
            count[first + i] -= 1
            if count[first + i] == 0 && (first + i) == min_heap[0]
                min_heap.shift
            end
        end
    end
    return true
end

```

---

# \uD83D\uDCA1 I invite you to check out [my profile](https://leetcode.com/u/hi-mukul/) for detailed explanations and code for each method. Happy coding and learning! \uD83D\uDCDA

---

![5fbeecf2-18f6-4dce-a4a0-f11c859e46ad_1714711173.2665718.png](./images/0.png)




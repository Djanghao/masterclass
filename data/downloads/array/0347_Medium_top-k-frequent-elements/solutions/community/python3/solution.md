# 【Video】2 solutions

**Author:** niits
**Votes:** 196
**Link:** [https://leetcode.com/problems/top-k-frequent-elements/solutions/5513122/](https://leetcode.com/problems/top-k-frequent-elements/solutions/5513122/)

---

# Intuition
Using `heap` or `array`.

---

# Solution Video

https://youtu.be/KzpgnqoB43c

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 6,683
Thank you for your support!

---

# Approach

I'll show you two ways to solve this question.

# Solution 1

```
Input: nums = [10,10,20,20,20,30], k = 2
```

We have to return `Top K Frequent Elements`, so if we have frequency of each number, we can return numbers easily.

To do that, I use `heap`.

First of all, we count frequency of each number.

```
20 \u2192 3 times
10 \u2192 2 times
30 \u2192 1 time
```
Next we use `heap` and we want to keep 2 numbers so use `tuple` in heap.
```
(frequency, number)
(3, 20)
(2, 10)
(1, 30)
```

---

* Problem

Problem here is in Python `heap` is usually `min heap`, so if we pop data from `heap`, we will get `(1, 30)` at first. Next time we will get `(2, 10)`.

But we want `(3, 20)` at first. Next time we want `(2, 10)`.

---

### How can we solve the problem?

My strategy is when we add tuples to `heap`, we add `negative` to all frequency, so **that maximum frequency will be minimum number.**

For example,
```
(3, 20) \u2192 (-3, 20)
(2, 10) \u2192 (-2, 10)
(1, 30) \u2192 (-1, 30)
```
If we add negative to all frequency, `min heap` will work as a `max heap`.

Now `heap` has
```
(-3, 20)
(-2, 10)
(-1, 30)
```
Just pop data `k` times. We will get `(-3, 20)` at first.

```
res = [20]

heap has
(-2, 10)
(-1, 30)
```
Next, we will get `(-2, 10)`.

```
res = [20, 10]

heap has
(-1, 30)
```
Now, length of `res` is equal to `k`.

```
return [20, 10]
```

Easy!\uD83D\uDE04
Let's see solution codes!

---

https://youtu.be/bU_dXCOWHls

---

# Complexity
- Time complexity: $$O(n log k)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        heap = []
        counter = {}
        for n in nums:
            counter[n] = 1 + counter.get(n, 0)
        
        for key, val in counter.items():
            heapq.heappush(heap, (-val, key))
        
        res = []
        while len(res) < k:
            res.append(heapq.heappop(heap)[1])
        
        return res
```
```java []
class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> counter = new HashMap<>();
        for (int n : nums) {
            counter.put(n, counter.getOrDefault(n, 0) + 1);
        }
        
        PriorityQueue<Map.Entry<Integer, Integer>> heap = new PriorityQueue<>(
            (a, b) -> Integer.compare(b.getValue(), a.getValue())
        );
        
        for (Map.Entry<Integer, Integer> entry : counter.entrySet()) {
            heap.offer(entry);
        }
        
        int[] res = new int[k];
        for (int i = 0; i < k; i++) {
            res[i] = Objects.requireNonNull(heap.poll()).getKey();
        }
        
        return res;        
    }
}
```
```C++ []
class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int, int> counter;
        for (int n : nums) {
            counter[n]++;
        }
        
        auto comp = [](pair<int, int>& a, pair<int, int>& b) {
            return a.second < b.second;
        };
        priority_queue<pair<int, int>, vector<pair<int, int>>, decltype(comp)> heap(comp);
        
        for (auto& entry : counter) {
            heap.push({entry.first, entry.second});
        }
        
        vector<int> res;
        while (k-- > 0) {
            res.push_back(heap.top().first);
            heap.pop();
        }
        
        return res;        
    }
};
```

# Step by Step Algorithm

1. **Initialize Data Structures**

    ```python
    heap = []
    counter = {}
    ```

   - **`heap`**: A list that will be used as a priority queue to store elements based on their frequencies. Python\u2019s `heapq` module provides a min-heap, so we'll store negative frequencies to simulate a max-heap.
   - **`counter`**: A dictionary to count the frequency of each element in the `nums` list.

2. **Count Frequencies**

    ```python
    for n in nums:
        counter[n] = 1 + counter.get(n, 0)
    ```

   - **`counter[n] = 1 + counter.get(n, 0)`**: Iterate through each number `n` in `nums` and update its frequency in the `counter` dictionary. If `n` is not already in `counter`, `counter.get(n, 0)` returns 0, so `counter[n]` becomes 1. If `n` is already in `counter`, it increments its count by 1.

3. **Build the Heap**

    ```python
    for key, val in counter.items():
        heapq.heappush(heap, (-val, key))
    ```

   - **`heapq.heappush(heap, (-val, key))`**: Iterate through the `counter` dictionary and push each element into the heap. The `heapq.heappush` function adds elements to the heap and maintains the heap property. By storing `-val` (negative frequency), we simulate a max-heap behavior using Python\u2019s min-heap. The heap will prioritize elements with higher frequencies because of the negative sign.

4. **Extract Top K Frequent Elements**

    ```python
    res = []
    while len(res) < k:
        res.append(heapq.heappop(heap)[1])
    ```

   - **`res`**: Initialize an empty list to store the top `k` frequent elements.
   - **`heapq.heappop(heap)`**: Pop the smallest element from the heap (which is the one with the highest frequency due to the negative sign). The `[1]` retrieves the actual element (not its frequency) from the tuple `(-val, key)`.
   - **`while len(res) < k`**: Continue extracting elements from the heap until we have `k` elements in `res`.

5. **Return Result**

    ```python
    return res
    ```

   - **Return `res`**: Once the loop completes and `res` contains the top `k` frequent elements, return `res`.


---

# Solution 2

It's similar to `solution 1` to count frequency of each number.

```
Input: nums = [10,10,20,20,20,30], k = 2
```
```
20 \u2192 3 times
10 \u2192 2 times
30 \u2192 1 time
```
Create `array` with `length of input + 1`. We use index numbers as frequency. For instance, `3 times` goes to `index 3`.

```
index   0, 1,  2,  3,4,5,6
freq = [ ,30, 10, 20, , , ]
```

All we have to do is just iterate through from end, **because as I told you, we use index numbers as frequency and we have to return top K frequency element, so if we check numbers from the end, we will get top k numbers.**

In this case, there is no number at index `6`, `5` and `4`. Then we find `20` at index `3`.

```
res = [20]
```
At index `2`, we find `10`.

```
res = [20, 10]
```
Now, length of `res` is equal to `k`.

```
return [20, 10]
```

Let me add two points.

##### Why we created array with length of input + 1?

Imagine all numbers in input array is `10`.

```
Input: nums = [10,10,10,10,10,10], k = 2
```
In this case, we have `six 10`. They go to index `6`. But what if we create `array` with the same length of input?

```
index  0,1,2,3,4,5
res = [ , , , , , ]
```
There is no index `6`. We will get `out of bounds`.

- Why this happened?

That's because index number usually starts from `0` and frequency of each number starts from `1`. There is `1` difference. That's why we need to prepare for `+1 length`.

##### What if we have different numbers with the same frequency?

Yes, there is possibility that we have different numbers with the same frequency.

For example,
```
Input: nums = [10,20,10,20,30,40], k = 2
```
In this case, `30` and `40` go to index `1`. `10` and `20` go to index `2`. That's why we have array in each index of `res`, so that we can keep multiple numbers at the same index.

```
res = [[],[30,40],[10,20],[],[],[],[]]
```

```
return [10, 20] or [20, 10]
```
The description says "You may return the answer in any order."

Easy!\uD83D\uDE04
Let's see solution codes!

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        counter = {}

        for n in nums:
            counter[n] = 1 + counter.get(n, 0)
        
        freq = [[] for _ in range(len(nums) + 1)]

        for n, f in counter.items():
            freq[f].append(n)
        
        res = []

        for i in range(len(freq) - 1, -1, -1):
            for n in freq[i]:
                res.append(n)
                if len(res) == k:
                    return res
```
```java []
class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> counter = new HashMap<>();
        for (int n : nums) {
            counter.put(n, counter.getOrDefault(n, 0) + 1);
        }
        
        List<Integer>[] freq = new ArrayList[nums.length + 1];
        for (int i = 0; i < freq.length; i++) {
            freq[i] = new ArrayList<>();
        }
        
        for (Map.Entry<Integer, Integer> entry : counter.entrySet()) {
            int frequency = entry.getValue();
            freq[frequency].add(entry.getKey());
        }
        
        int[] res = new int[k];
        int idx = 0;
        for (int i = freq.length - 1; i >= 0; i--) {
            for (int num : freq[i]) {
                res[idx++] = num;
                if (idx == k) {
                    return res;
                }
            }
        }
        
        return new int[0];        
    }
}
```
```C++ []
class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int, int> counter;
        for (int n : nums) {
            counter[n]++;
        }
        
        vector<vector<int>> freq(nums.size() + 1);
        for (auto& entry : counter) {
            freq[entry.second].push_back(entry.first);
        }
        
        vector<int> res;
        for (int i = freq.size() - 1; i >= 0; i--) {
            for (int num : freq[i]) {
                res.push_back(num);
                if (res.size() == k) {
                    return res;
                }
            }
        }
        
        return {};        
    }
};
```

# Step by Step Algorithm

1. **Initialize the Counter Dictionary**

    ```python
    counter = {}
    ```

   - **`counter`**: A dictionary to count the frequency of each element in the `nums` list.

2. **Count Frequencies**

    ```python
    for n in nums:
        counter[n] = 1 + counter.get(n, 0)
    ```

   - **`counter[n] = 1 + counter.get(n, 0)`**: Iterate through each number `n` in `nums` and update its frequency in the `counter` dictionary. If `n` is not already in `counter`, `counter.get(n, 0)` returns 0, so `counter[n]` becomes 1. If `n` is already in `counter`, it increments its count by 1.

3. **Initialize the Frequency Buckets**

    ```python
    freq = [[] for _ in range(len(nums) + 1)]
    ```

   - **`freq`**: A list of lists where the index represents the frequency, and the value at each index is a list of numbers with that frequency. The length is `len(nums) + 1` because the maximum frequency of any number cannot exceed the length of the list `nums`.

4. **Fill the Frequency Buckets**

    ```python
    for n, f in counter.items():
        freq[f].append(n)
    ```

   - **`for n, f in counter.items()`**: Iterate through the `counter` dictionary.
   - **`freq[f].append(n)`**: Append the number `n` to the list at index `f` in the `freq` list. This groups numbers by their frequencies.

5. **Collect Top K Frequent Elements**

    ```python
    res = []
    ```

   - **`res`**: Initialize an empty list to store the top `k` frequent elements.

6. **Traverse the Frequency Buckets in Reverse Order**

    ```python
    for i in range(len(freq) - 1, -1, -1):
        for n in freq[i]:
            res.append(n)
            if len(res) == k:
                return res
    ```

   - **`for i in range(len(freq) - 1, -1, -1)`**: Iterate through the `freq` list from the highest frequency to the lowest (reverse order).
   - **`for n in freq[i]`**: For each frequency bucket, iterate through the list of numbers.
   - **`res.append(n)`**: Append the number `n` to the `res` list.
   - **`if len(res) == k`**: Check if the size of the `res` list is equal to `k`. If true, return the `res` list immediately.

7. **Return Result**

    ```python
    return res
    ```

   - **Return `res`**: Once the loop completes and `res` contains the top `k` frequent elements, return `res`.

---

# Bonus

I guess we can't use this in real interview, but we can solve this question like this.

```python []
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        return [x for x, y in Counter(nums).most_common(k)]
```

---

Thank you for reading my post. Please upvote it and don't forget to subscribe to my channel!

\u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

\u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

\u2B50\uFE0F My previous solution

Remove Element - LeetCode #27

https://youtu.be/GDOxAHN4RSE

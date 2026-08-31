# ✅Video Full Explanation | Beats 100% | Sliding Window + Monotonic queue/deque

**Author:** Piotr_Maminski
**Votes:** 101
**Link:** [https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/solutions/6052938/](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/solutions/6052938/)

---

https://youtu.be/5AY70aAHZiQ?si=0A8_ADJp1erj6PT6

# #1 Sliding windows + Monotonic Deque (from video)



```python3 []
class Solution:
    def shortestSubarray(self, nums: List[int], k: int) -> int:
        res = float("inf")

        cur_sum = 0
        q = deque()  # (prefix_sum, end_idx)

        for r in range(len(nums)):
            cur_sum += nums[r]
            if cur_sum >= k:
                res = min(res, r + 1)

            # Find the minimum valid window ending at r
            while q and cur_sum - q[0][0] >= k:
                prefix, end_idx = q.popleft()
                res = min(res, r - end_idx)

            # Validate the monotonic deque
            while q and q[-1][0] > cur_sum:
                q.pop()
            q.append((cur_sum, r))

        return -1 if res == float("inf") else res

```
```cpp []
class Solution {
public:
    int shortestSubarray(vector<int>& nums, int k) {
        int res = INT_MAX;
        long long curSum = 0;
        deque<pair<long long, int>> q;  // (prefix_sum, end_idx)
        
        for (int r = 0; r < nums.size(); r++) {
            curSum += nums[r];
            
            if (curSum >= k) {
                res = min(res, r + 1);
            }
            
            // Find the minimum valid window ending at r
            while (!q.empty() && curSum - q.front().first >= k) {
                auto [prefix, endIdx] = q.front();
                q.pop_front();
                res = min(res, r - endIdx);
            }
            
            // Validate the monotonic deque
            while (!q.empty() && q.back().first > curSum) {
                q.pop_back();
            }
            q.push_back({curSum, r});
        }
        
        return res == INT_MAX ? -1 : res;
    }
};
```
```java []
class Solution {
    public int shortestSubarray(int[] nums, int k) {
        int res = Integer.MAX_VALUE;
        long curSum = 0;
        Deque<Pair<Long, Integer>> q = new ArrayDeque<>();  // (prefix_sum, end_idx)
        
        for (int r = 0; r < nums.length; r++) {
            curSum += nums[r];
            
            if (curSum >= k) {
                res = Math.min(res, r + 1);
            }
            
            // Find the minimum valid window ending at r
            while (!q.isEmpty() && curSum - q.peekFirst().getKey() >= k) {
                Pair<Long, Integer> front = q.pollFirst();
                res = Math.min(res, r - front.getValue());
            }
            
            // Validate the monotonic deque
            while (!q.isEmpty() && q.peekLast().getKey() > curSum) {
                q.pollLast();
            }
            q.offerLast(new Pair<>(curSum, r));
        }
        
        return res == Integer.MAX_VALUE ? -1 : res;
    }
    
    // Helper class to store pairs
    static class Pair<K, V> {
        private K key;
        private V value;
        
        public Pair(K key, V value) {
            this.key = key;
            this.value = value;
        }
        
        public K getKey() {
            return key;
        }
        
        public V getValue() {
            return value;
        }
    }
}
```
```csharp []
public class Solution {
    public int ShortestSubarray(int[] nums, int k) {
        int res = int.MaxValue;
        long curSum = 0;
        var q = new LinkedList<(long sum, int index)>();
        
        for (int r = 0; r < nums.Length; r++) {
            curSum += nums[r];
            if (curSum >= k) {
                res = Math.Min(res, r + 1);
            }
            
            // Find the minimum valid window ending at r
            while (q.Count > 0 && curSum - q.First.Value.sum >= k) {
                var (prefix, endIdx) = q.First.Value;
                q.RemoveFirst();
                res = Math.Min(res, r - endIdx);
            }
            
            // Validate the monotonic deque
            while (q.Count > 0 && q.Last.Value.sum > curSum) {
                q.RemoveLast();
            }
            q.AddLast((curSum, r));
        }
        
        return res == int.MaxValue ? -1 : res;
    }
}
```
```golang []
func shortestSubarray(nums []int, k int) int {
    res := math.MaxInt32
    
    // Use a slice to implement deque functionality
    type pair struct {
        prefixSum int64
        endIdx    int
    }
    q := make([]pair, 0)
    
    var curSum int64
    for r := 0; r < len(nums); r++ {
        curSum += int64(nums[r])
        if curSum >= int64(k) {
            res = min(res, r+1)
        }
        
        // Find the minimum valid window ending at r
        for len(q) > 0 && curSum-q[0].prefixSum >= int64(k) {
            res = min(res, r-q[0].endIdx)
            q = q[1:] // pop front
        }
        
        // Validate the monotonic deque
        for len(q) > 0 && q[len(q)-1].prefixSum > curSum {
            q = q[:len(q)-1] // pop back
        }
        q = append(q, pair{curSum, r})
    }
    
    if res == math.MaxInt32 {
        return -1
    }
    return res
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```
```swift []
class Solution {
    func shortestSubarray(_ nums: [Int], _ k: Int) -> Int {
        var res = Int.max
        var curSum = 0
        // Queue will store tuples of (prefixSum, endIndex)
        var queue = [(Int, Int)]()
        
        for r in 0..<nums.count {
            curSum += nums[r]
            if curSum >= k {
                res = min(res, r + 1)
            }
            
            // Find the minimum valid window ending at r
            while !queue.isEmpty && curSum - queue[0].0 >= k {
                let (prefix, endIdx) = queue.removeFirst()
                res = min(res, r - endIdx)
            }
            
            // Validate the monotonic deque
            while !queue.isEmpty && queue[queue.count - 1].0 > curSum {
                queue.removeLast()
            }
            queue.append((curSum, r))
        }
        
        return res == Int.max ? -1 : res
    }
}

```
```rust []
use std::collections::VecDeque;

impl Solution {
    pub fn shortest_subarray(nums: Vec<i32>, k: i32) -> i32 {
        let mut res = i32::MAX;
        let mut cur_sum: i64 = 0;
        let mut q: VecDeque<(i64, i32)> = VecDeque::new();

        for r in 0..nums.len() {
            cur_sum += nums[r] as i64;
            
            if cur_sum >= k as i64 {
                res = res.min((r + 1) as i32);
            }

            // Find the minimum valid window ending at r
            while !q.is_empty() && cur_sum - q.front().unwrap().0 >= k as i64 {
                let (_, end_idx) = q.pop_front().unwrap();
                res = res.min(r as i32 - end_idx);
            }

            // Validate the monotonic deque
            while !q.is_empty() && q.back().unwrap().0 > cur_sum {
                q.pop_back();
            }
            q.push_back((cur_sum, r as i32));
        }

        if res == i32::MAX { -1 } else { res }
    }
}
```
```ruby []
def shortest_subarray(nums, k)
    res = Float::INFINITY
    cur_sum = 0
    q = [] # Will store [prefix_sum, end_idx]
    
    nums.each_with_index do |num, r|
        cur_sum += num
        res = [res, r + 1].min if cur_sum >= k
        
        # Find minimum valid window ending at r
        while !q.empty? && cur_sum - q[0][0] >= k
            prefix, end_idx = q.shift
            res = [res, r - end_idx].min
        end
        
        # Maintain monotonic queue
        while !q.empty? && q[-1][0] > cur_sum
            q.pop
        end
        
        q.push([cur_sum, r])
    end
    
    res == Float::INFINITY ? -1 : res
end
```

- Complexy: Time O(n) & Space O(n)


# #2 Sliding Window + (increasing) Monotonic queue (python 75%, C++ 98%, rest 100%)


```python3 []
class Solution:
    def shortestSubarray(self, nums: List[int], k: int) -> int:
        n = len(nums)
        sum_arr = [0] * (n + 1)
        
        for i in range(n):
            sum_arr[i + 1] = sum_arr[i] + nums[i]
        
        q = [0] * (n + 1)
        l = r = 0
        min_length = n + 1
        
        for i in range(len(sum_arr)):
            while r > l and sum_arr[i] >= sum_arr[q[l]] + k:
                min_length = min(min_length, i - q[l])
                l += 1
            
            while r > l and sum_arr[i] <= sum_arr[q[r - 1]]:
                r -= 1
            
            q[r] = i
            r += 1
        
        return min_length if min_length <= n else -1
```
```cpp []
class Solution {
public:
    int shortestSubarray(vector<int>& nums, int k) {
        int n = nums.size();
        vector<long long> sum(n + 1);
        
        for (int i = 0; i < n; i++) {
            sum[i + 1] = sum[i] + nums[i];
        }
        
        vector<int> q(n + 1);
        int l = 0, r = 0;
        int minLength = n + 1;
        
        for (int i = 0; i < sum.size(); i++) {
            while (r > l && sum[i] >= sum[q[l]] + k) {
                minLength = min(minLength, i - q[l++]);
            }
            
            while (r > l && sum[i] <= sum[q[r - 1]]) {
                r--;
            }
            
            q[r++] = i;
        }
        
        return minLength <= n ? minLength : -1;
    }
};
```
```java []
class Solution {
    public int shortestSubarray(int[] nums, int k) {
        int n = nums.length;
        long[] sum = new long[n + 1];
        
        for (int i = 0; i < n; i++) {
            sum[i + 1] = sum[i] + nums[i];
        }
        
        int[] q = new int[n + 1]; 
        int l = 0, r = 0; 
        int minLength = n + 1;
        
        for (int i = 0; i < sum.length; i++) {
            while (r > l && sum[i] >= sum[q[l]] + k) {
                minLength = Math.min(minLength, i - q[l++]);
            }
            
            while (r > l && sum[i] <= sum[q[r - 1]]) {
                r--;
            }
            
            q[r++] = i;
        }
        
        return minLength <= n ? minLength : -1;
    }
}
```
```csharp []
public class Solution {
    public int ShortestSubarray(int[] nums, int k) {
        int n = nums.Length;
        long[] sum = new long[n + 1];
        
        for (int i = 0; i < n; i++) {
            sum[i + 1] = sum[i] + nums[i];
        }
        
        int[] q = new int[n + 1];
        int l = 0, r = 0;
        int minLength = n + 1;
        
        for (int i = 0; i < sum.Length; i++) {
            while (r > l && sum[i] >= sum[q[l]] + k) {
                minLength = Math.Min(minLength, i - q[l++]);
            }
            
            while (r > l && sum[i] <= sum[q[r - 1]]) {
                r--;
            }
            
            q[r++] = i;
        }
        
        return minLength <= n ? minLength : -1;
    }
}
```
```golang []
func shortestSubarray(nums []int, k int) int {
    n := len(nums)
    sum := make([]int64, n+1)
    
    for i := 0; i < n; i++ {
        sum[i+1] = sum[i] + int64(nums[i])
    }
    
    q := make([]int, n+1)
    l, r := 0, 0
    minLength := n + 1
    
    for i := 0; i < len(sum); i++ {
        for r > l && sum[i] >= sum[q[l]]+int64(k) {
            if i-q[l] < minLength {
                minLength = i - q[l]
            }
            l++
        }
        
        for r > l && sum[i] <= sum[q[r-1]] {
            r--
        }
        
        q[r] = i
        r++
    }
    
    if minLength <= n {
        return minLength
    }
    return -1
}
```
```swift []
class Solution {
    func shortestSubarray(_ nums: [Int], _ k: Int) -> Int {
        let n = nums.count
        var sum = Array(repeating: Int64(0), count: n + 1)
        
        for i in 0..<n {
            sum[i + 1] = sum[i] + Int64(nums[i])
        }
        
        var q = Array(repeating: 0, count: n + 1)
        var l = 0
        var r = 0
        var minLength = n + 1
        
        for i in 0..<sum.count {
            while l < r && sum[i] >= sum[q[l]] + Int64(k) {
                minLength = min(minLength, i - q[l])
                l += 1
            }
            
            while l < r && sum[i] <= sum[q[r - 1]] {
                r -= 1
            }
            
            q[r] = i
            r += 1
        }
        
        return minLength <= n ? minLength : -1
    }
}
```
```javascript [JS]
// JavaScript

function shortestSubarray(nums, k) {
    const n = nums.length;
    const sum = new Array(n + 1).fill(0);
    
    for (let i = 0; i < n; i++) {
        sum[i + 1] = sum[i] + nums[i];
    }
    
    const q = new Array(n + 1).fill(0);
    let l = 0;
    let r = 0;
    let minLength = n + 1;
    
    for (let i = 0; i < sum.length; i++) {
        while (r > l && sum[i] >= sum[q[l]] + k) {
            minLength = Math.min(minLength, i - q[l]);
            l++;
        }
        
        while (r > l && sum[i] <= sum[q[r - 1]]) {
            r--;
        }
        
        q[r] = i;
        r++;
    }
    
    return minLength <= n ? minLength : -1;
}
```
```typescript [TS]
// TypeScript

function shortestSubarray(nums: number[], k: number): number {
    const n: number = nums.length;
    const sum: number[] = new Array(n + 1).fill(0);
    
    for (let i = 0; i < n; i++) {
        sum[i + 1] = sum[i] + nums[i];
    }
    
    const q: number[] = new Array(n + 1).fill(0);
    let l: number = 0;
    let r: number = 0;
    let minLength: number = n + 1;
    
    for (let i = 0; i < sum.length; i++) {
        while (r > l && sum[i] >= sum[q[l]] + k) {
            minLength = Math.min(minLength, i - q[l]);
            l++;
        }
        
        while (r > l && sum[i] <= sum[q[r - 1]]) {
            r--;
        }
        
        q[r] = i;
        r++;
    }
    
    return minLength <= n ? minLength : -1;
}
```

```rust [rust1]
impl Solution {
    pub fn shortest_subarray(nums: Vec<i32>, k: i32) -> i32 {
        let n = nums.len();
        let mut sum = vec![0i64; n + 1];
        
        for i in 0..n {
            sum[i + 1] = sum[i] + nums[i] as i64;
        }
        
        let mut q = vec![0; n + 1];
        let mut l = 0;
        let mut r = 0;
        let mut min_length = n + 1;
        
        for i in 0..sum.len() {
            while r > l && sum[i] >= sum[q[l]] + k as i64 {
                min_length = min_length.min(i - q[l]);
                l += 1;
            }
            
            while r > l && sum[i] <= sum[q[r - 1]] {
                r -= 1;
            }
            
            q[r] = i;
            r += 1;
        }
        
        if min_length <= n {
            min_length as i32
        } else {
            -1
        }
    }
}
```
```rust [rust2]
// deque
impl Solution {
    pub fn shortest_subarray(nums: Vec<i32>, k: i32) -> i32 {
        let n = nums.len();
        let mut sum = Vec::with_capacity(n + 1);
        sum.push(0);
        
        nums.iter().fold(0i64, |acc, &x| {
            sum.push(acc + x as i64);
            acc + x as i64
        });
        
        let mut deque = std::collections::VecDeque::with_capacity(n + 1);
        let mut min_length = n + 1;
        
        for i in 0..=n {
            while let Some(&j) = deque.front() {
                if sum[i] >= sum[j] + k as i64 {
                    min_length = min_length.min(i - j);
                    deque.pop_front();
                } else {
                    break;
                }
            }
            
            while let Some(&j) = deque.back() {
                if sum[i] <= sum[j] {
                    deque.pop_back();
                } else {
                    break;
                }
            }
            
            deque.push_back(i);
        }
        
        (min_length <= n).then_some(min_length as i32).unwrap_or(-1)
    }
}
```
```ruby []
def shortest_subarray(nums, k)
    n = nums.length
    sum = Array.new(n + 1, 0)
    
    n.times do |i|
        sum[i + 1] = sum[i] + nums[i]
    end
    
    q = Array.new(n + 1)
    l = 0
    r = 0
    min_length = n + 1
    
    sum.length.times do |i|
        while r > l && sum[i] >= sum[q[l]] + k
            min_length = [min_length, i - q[l]].min
            l += 1
        end
        
        while r > l && sum[i] <= sum[q[r - 1]]
            r -= 1
        end
        
        q[r] = i
        r += 1
    end
    
    min_length <= n ? min_length : -1
end
```

- Complexy: Time O(n) & Space O(n)


# #3 Sliding Window + (increasing) Monotonic deque (99% python)
```python3 []
class Solution:
    def shortestSubarray(self, nums: List[int], k: int) -> int:
        shortest = float('inf')  # Track shortest valid subarray length
        queue = deque([])        # Store (sum, length) pairs
        total = currLen = 0      # Track current sum and length
        
        for i, n in enumerate(nums):
            if n < 0:
                # Handle neg. numbers
                if total + n <= 0:
                    queue = deque([])
                    total = currLen = 0
                    continue
                else:
                    removed, removeLen = queue.pop()  # Merge neg. numb 
                    curr = n + removed
                    stackLength = 1 + removeLen
                    
                    while queue and curr < 0: # Keep merging non-neg. sum
                        removed, removeLen = queue.pop()
                        curr += removed
                        stackLength += removeLen
                    
                    total += n
                    queue.append((curr, stackLength))
                    currLen += 1
            else:
                queue.append((n, 1)) # Handle pos. numb
                total += n
                currLen += 1
            
            while queue and total >= k: # Check if cur. window sum exceeds k
                shortest = min(shortest, currLen)
                removed, removeLen = queue.popleft()
                total -= removed
                currLen -= removeLen
        
        return shortest if shortest <= len(nums) else -1
```
```cpp []
class Solution {
public:
    int shortestSubarray(vector<int>& nums, int k) {
        int shortest = INT_MAX;  // Track shortest valid subarray length
        deque<pair<long long, int>> queue;  // Store (sum, length) pairs
        long long total = 0;     // Track current sum
        int currLen = 0;         // Track current length
        
        for (int i = 0; i < nums.size(); i++) {
            int n = nums[i];
            if (n < 0) {
                if (total + n <= 0) {  // Handle neg. numbers
                    queue.clear();
                    total = 0;
                    currLen = 0;
                    continue;
                } else {
                    auto [removed, removeLen] = queue.back(); // Merge neg. number
                    queue.pop_back();
                    long long curr = n + removed;
                    int stackLength = 1 + removeLen;
                    
                    while (!queue.empty() && curr < 0) { // Keep merging non-neg. sum
                        auto [removed2, removeLen2] = queue.back();
                        queue.pop_back();
                        curr += removed2;
                        stackLength += removeLen2;
                    }
                    
                    total += n;
                    queue.push_back({curr, stackLength});
                    currLen += 1;
                }
            } else {
                queue.push_back({n, 1}); // Handle pos. number
                total += n;
                currLen += 1;
            }
            
            while (!queue.empty() && total >= k) { // Check if cur. window sum exceeds k
                shortest = min(shortest, currLen);
                auto [removed, removeLen] = queue.front();
                queue.pop_front();
                total -= removed;
                currLen -= removeLen;
            }
        }
        
        return shortest <= nums.size() ? shortest : -1;
    }
};
```
```java []
class Solution {
    public int shortestSubarray(int[] nums, int k) {
        int shortest = Integer.MAX_VALUE;  // Track shortest valid subarray length
        Deque<Pair<Long, Integer>> queue = new ArrayDeque<>();  // Store (sum, length) pairs
        long total = 0;  // Track current sum
        int currLen = 0; // Track current length
        
        for (int i = 0; i < nums.length; i++) {
            int n = nums[i];
            if (n < 0) {
                if (total + n <= 0) { // Handle neg. numbers
                    queue = new ArrayDeque<>();
                    total = 0;
                    currLen = 0;
                    continue;
                } else {
                    Pair<Long, Integer> removed = queue.removeLast(); // Merge neg. numb
                    long curr = n + removed.getKey();
                    int stackLength = 1 + removed.getValue();
                    
                    while (!queue.isEmpty() && curr < 0) { // Keep merging non-neg. sum
                        removed = queue.removeLast();
                        curr += removed.getKey();
                        stackLength += removed.getValue();
                    }
                    
                    total += n;
                    queue.addLast(new Pair<>(curr, stackLength));
                    currLen += 1;
                }
            } else {
                queue.addLast(new Pair<>((long)n, 1)); // Handle pos. numb
                total += n;
                currLen += 1;
            }
            
            while (!queue.isEmpty() && total >= k) { // Check if cur. window sum exceeds k
                shortest = Math.min(shortest, currLen);
                Pair<Long, Integer> removed = queue.removeFirst();
                total -= removed.getKey();
                currLen -= removed.getValue();
            }
        }
        
        return shortest <= nums.length ? shortest : -1;
    }
    
    private static class Pair<K, V> { // Helper class store pairs values
        private final K key;
        private final V value;
        
        public Pair(K key, V value) {
            this.key = key;
            this.value = value;
        }
        
        public K getKey() {
            return key;
        }
        
        public V getValue() {
            return value;
        }
    }
}
```

- Complexy: Time O(n) & Space O(n)







---



![image.png](./images/0.png)
![image.png](./images/1.png)
![image.png](./images/2.png)


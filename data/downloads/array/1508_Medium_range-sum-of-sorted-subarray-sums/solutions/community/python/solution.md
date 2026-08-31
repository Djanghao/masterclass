# Easy Solution Beats 100% | 2 Approaches

**Author:** Sachinonly__
**Votes:** 90
**Link:** [https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/solutions/5582910/](https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/solutions/5582910/)

---

# Complexity
- Time complexity:O(log(N)*N**2)

- Space complexity:O(n^2)

# Brute Force - worked Better for me
```python []
class Solution(object):
    def rangeSum(self, nums, n, left, right):
        arr = []
        i = 0
        while i < n:
            prefix = 0
            for j in range(i,n):
                prefix += nums[j]
                arr.append(prefix)
            i += 1
        arr.sort()
        return sum(arr[left-1:right]) % 1000000007
```
```C++ []
class Solution {
public:
    int rangeSum(vector<int>& nums, int n, int left, int right) {
        vector<int> arr;
        for (int i = 0; i < n; ++i) {
            int prefix = 0;
            for (int j = i; j < n; ++j) {
                prefix += nums[j];
                arr.push_back(prefix);
            }
        }
        sort(arr.begin(), arr.end());
        int result = 0;
        int MOD = 1000000007;
        for (int i = left - 1; i < right; ++i) {
            result = (result + arr[i]) % MOD;
        }
        return result;
    }
};
```
```java []
class Solution {
    public int rangeSum(int[] nums, int n, int left, int right) {
        List<Integer> arr = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            int prefix = 0;
            for (int j = i; j < n; j++) {
                prefix += nums[j];
                arr.add(prefix);
            }
        }
        Collections.sort(arr);
        int result = 0;
        int MOD = 1000000007;
        for (int i = left - 1; i < right; i++) {
            result = (result + arr.get(i)) % MOD;
        }
        return result;
    }
}
```

# Way 2 - heaps
```python []
class Solution(object):
    def rangeSum(self, nums, n, left, right):
        prefix = [0] * (n + 1)
        for i in range(n):
            prefix[i + 1] = prefix[i] + nums[i]
        
        minHeap = []

        for i in range(1, n + 1):
            for j in range(i):
                heapq.heappush(minHeap, prefix[i] - prefix[j])
        
        result = 0
        for i in range(1, right + 1):
            sum_value = heapq.heappop(minHeap)
            if i >= left:
                result = (result + sum_value) % 1000000007
        
        return result
```
```C++ []
class Solution {
public:
    int rangeSum(vector<int>& nums, int n, int left, int right) {
        const int MOD = 1000000007;
        
        vector<int> prefix(n + 1, 0);
        for (int i = 0; i < n; ++i) {
            prefix[i + 1] = prefix[i] + nums[i];
        }
        
        priority_queue<int, vector<int>, greater<int>> minHeap;
        
        for (int i = 1; i <= n; ++i) {
            for (int j = 0; j < i; ++j) {
                minHeap.push(prefix[i] - prefix[j]);
            }
        }
        
        long long result = 0;
        for (int i = 1; i <= right; ++i) {
            int sum_value = minHeap.top();
            minHeap.pop();
            if (i >= left) {
                result = (result + sum_value) % MOD;
            }
        }
        
        return result;
    }
};
```
```java []
class Solution {
    public int rangeSum(int[] nums, int n, int left, int right) {
        final int MOD = 1000000007;
        
        int[] prefix = new int[n + 1];
        for (int i = 0; i < n; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }
        
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        
        for (int i = 1; i <= n; i++) {
            for (int j = 0; j < i; j++) {
                minHeap.offer(prefix[i] - prefix[j]);
            }
        }
        
        long result = 0;
        for (int i = 1; i <= right; i++) {
            int sum_value = minHeap.poll();
            if (i >= left) {
                result = (result + sum_value) % MOD;
            }
        }
        
        return (int) result;
    }
}
```

![unnamed.jpg](./images/0.jpeg)

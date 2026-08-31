# [Java/Python 3] From O(n * logn) to average O(n) w/ brief explanation and analysis.

**Author:** rock
**Votes:** 71
**Link:** [https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/solutions/1623436/](https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/solutions/1623436/)

---

**Method 1: Sort**

*Sort the whole array*
1. Combine each index with its corresponding value to create a 2-d array;
2. Sort the 2-d array reversely by value, then copy the largest k ones;
3. Sort the largest k ones by index, then return the corresponding values by index order.

```java
    public int[] maxSubsequence(int[] nums, int k) {
        int n = nums.length;
        int[][] indexAndVal = new int[n][2];
        for (int i = 0; i < n; ++i) {
            indexAndVal[i] = new int[]{i, nums[i]};
        }
        // Reversely sort by value.
        Arrays.sort(indexAndVal, Comparator.comparingInt(a -> -a[1]));
        int[][] maxK = Arrays.copyOf(indexAndVal, k);
        // Sort by index.
        Arrays.sort(maxK, Comparator.comparingInt(a -> a[0]));
        int[] seq = new int[k];
        for (int i = 0; i < k; ++i) {
            seq[i] = maxK[i][1];
        }
        return seq;
    }
```
```python
    def maxSubsequence(self, nums: List[int], k: int) -> List[int]:
        val_and_index = sorted([(num, i) for i, num in enumerate(nums)])
        return [num for num, i in sorted(val_and_index[-k :], key=lambda x: x[1])]
```

**Analysis:**

Time: `O(n * logn)`, space: `O(n)`.

----

**Method 2: PriorityQueue/heap**

**Two Passes**

1. Travse input and use PriorityQueue / heap to store `k` largest items, poll out if its size bigger than `k`;
2. Use Map/dict to store the `k` items in 1.;
3. Traverse input again, if encounter any item in the afore-mentioned Map/ dict, save it into the output array, then remove the item from the Map/dict.
```java
    public int[] maxSubsequence(int[] nums, int k) {
        PriorityQueue<Integer> pq = new PriorityQueue<>(k + 1);
        for (int n : nums) {
            pq.offer(n);
            if (pq.size() > k) {
                pq.poll();
            }
        }
        Map<Integer, Integer> freq = new HashMap<>();
        for (int n : pq) {
            freq.merge(n, 1, Integer::sum);
        }
        int[] seq = new int[k]; 
        int i = 0;
        for (int n : nums) {
            if (freq.merge(n, -1, Integer::sum) >= 0) {
                seq[i++] = n;
            }
        }
        return seq;
    }
```
```python
    def maxSubsequence(self, nums: List[int], k: int) -> List[int]:
        heap = []
        for n in nums:
            heapq.heappush(heap, n)
            if len(heap) > k:
                heapq.heappop(heap)
        cnt = Counter(heap)
        res = []
        for n in nums:
            if cnt[n] > 0:
                cnt[n] -= 1
                res.append(n)
        return res
```

----

*Simplified the above to **One pass*** - credit to **@climberig**

Store indexes of the input array by PriorityQueue/heap, and get rid of Map/dict.

```java
    public int[] maxSubsequence(int[] nums, int k) {
        PriorityQueue<Integer> pq = new PriorityQueue<>
                    (Comparator.comparingInt(i -> nums[i]));
        for (int i = 0; i < nums.length; ++i) {
            pq.offer(i);
            if (pq.size() > k) {
                pq.poll();
            }
        }
        return pq.stream().sorted().mapToInt(i -> nums[i]).toArray();
    }
```
```python
    def maxSubsequence(self, nums: List[int], k: int) -> List[int]:
        heap = []
        for i, n in enumerate(nums):
            heapq.heappush(heap, (n, i))
            if len(heap) > k:
                heapq.heappop(heap)
        return [a[0] for a in sorted(heap, key=lambda x: x[1])] 
```

Time: `O(n * logk)`, space: `O(k)`

----

**Method 3: Quick Select**

```java
    public int[] maxSubsequence(int[] nums, int k) {
        int n = nums.length;
        int[] index = new int[n];
        for (int i = 0; i < n; ++i) {
            index[i] = i;
        }
        
        // Use Quick Select to put the indexes of the 
        // max k items to the left of index array. 
        int lo = 0, hi = n - 1;
        while (lo < hi) {
            int idx = quickSelect(nums, index, lo, hi);
            if (idx < k) {
                lo = idx + 1;
            }else {
                hi = idx;
            }
        }
        
        // Count the occurrencs of the kth largest items
        // within the k largest ones.
        int kthVal = nums[index[k - 1]], freqOfkthVal = 0;
        for (int i : Arrays.copyOf(index, k)) {
            freqOfkthVal += nums[i] == kthVal ? 1 : 0;
        }
        
        // Greedily copy the subsequence into output array seq.
        int[] seq = new int[k];
        int i = 0;
        for (int num : nums) {
            if (num > kthVal || num == kthVal && freqOfkthVal-- > 0) {
                seq[i++] = num;
            }
        }
        return seq;
    }
    
    // Divide index[lo...hi] into two parts: larger and less than 
    // the pivot; Then return the position of the pivot;
    private int quickSelect(int[] nums, int[] index, int lo, int hi) {
        int pivot = index[lo];
        while (lo < hi) {
            while (lo < hi && nums[index[hi]] <= nums[pivot]) {
                --hi;
            }
            index[lo] = index[hi];
            while (lo < hi && nums[index[lo]] >= nums[pivot]) {
                ++lo;
            }
            index[hi] = index[lo];
        } 
        index[lo] = pivot;
        return lo;
    }
```
```python
    def maxSubsequence(self, nums: List[int], k: int) -> List[int]:
        
        # Divide index[lo...hi] into two parts: larger and less than 
        # the pivot; Then return the position of the pivot;
        def quickSelect(lo: int, hi: int) -> int:
            pivot = index[lo]
            while lo < hi:
                while lo < hi and nums[index[hi]] <= nums[pivot]:
                    hi -= 1
                index[lo] = index[hi]
                while lo < hi and nums[index[lo]] >= nums[pivot]:
                    lo += 1
                index[hi] = index[lo]
            index[lo] = pivot
            return lo

        n = len(nums)
        index = list(range(n))
        
        # Use Quick Select to put the indexes of the 
        # max k items to the left of index array.
        left, right = 0, n - 1
        while left < right:
            idx = quickSelect(left, right)
            if idx < k:
                left = idx + 1
            else:
                right = idx
        
        # Count the occurrencs of the kth largest items
        # within the k largest ones.
        kth_val, freq_of_kth_val = nums[index[k - 1]], 0
        for i in index[ : k]:
            if nums[i] == kth_val:
                freq_of_kth_val += 1
                
        # Greedily copy the subsequence into output array seq.
        seq = []
        for num in nums:
            if num > kth_val or num == kth_val and freq_of_kth_val > 0:
                seq.append(num)
                if num == kth_val:
                    freq_of_kth_val -= 1
        return seq
```
Time: average `O(n)`, worst `O(n ^ 2)`, space: `O(n)`.

----

***Please feel free to let me know if you can make the codes better.***
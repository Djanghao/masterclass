# [Java/Python 3] Greedy Alg.: 3 methods from O(nlogn) to O(n) w/ brief explanation and analysis.

**Author:** rock
**Votes:** 199
**Link:** [https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/solutions/686335/](https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/solutions/686335/)

---

**[Summary]**
Remove  k least frequent elements to make the remaining ones as least unique ints set.

----
**Method 1: HashMap and PriorityQueue** -- credit to **@usamaten** and **@sparker123**.
Count number then put the frequencies into a PriorityQueue/heap:

```java
    public int findLeastNumOfUniqueInts(int[] arr, int k) {
        Map<Integer, Integer> count = new HashMap<>();
        for (int a : arr)
            count.put(a, 1 + count.getOrDefault(a, 0));
        PriorityQueue<Integer> pq = new PriorityQueue<>(count.values());
        while (k > 0)
            k -= pq.poll();
        return k < 0 ? pq.size() + 1 : pq.size();        
    }
```
```python
    def findLeastNumOfUniqueInts(self, arr: List[int], k: int) -> int:
        hp = list(collections.Counter(arr).values())
        heapq.heapify(hp)
        while k > 0:
            k -= heapq.heappop(hp)
        return len(hp) + (k < 0)  
```
**Analysis:**
`new PriorityQueue<>(count.values());` and `for` loop both cost `O(n)` in worst case, the `while` loop cost `O(klogn)` time. Therefore,

Time: `O(n + klogn)`, space: `O(n)`.

----

**Method 2: HashMap and TreeMap**
Count number then count occurrence:

1. Count the occurrences of each number using HashMap;
2. Using TreeMap to count each occurrence;
3. Poll out currently least frequent elemnets, and check if reaching `k`, deduct the correponding unique count `remaining`.

```java
    public int findLeastNumOfUniqueInts(int[] arr, int k) {
        Map<Integer, Integer> count = new HashMap<>();
        for (int a : arr)
            count.put(a, 1 + count.getOrDefault(a, 0));
        int remaining = count.size();
        TreeMap<Integer, Integer> occurrenceCount = new TreeMap<>();
        for (int v : count.values())
            occurrenceCount.put(v, 1 + occurrenceCount.getOrDefault(v, 0));
        while (k > 0) {
            Map.Entry<Integer, Integer> entry = occurrenceCount.pollFirstEntry();
            if (k - entry.getKey() * entry.getValue() >= 0) {
                k -= entry.getKey() * entry.getValue();
                remaining -= entry.getValue();
            }else {
                return remaining - k / entry.getKey();
            }
        }
        return remaining;        
    }
```
```python
    def findLeastNumOfUniqueInts(self, arr: List[int], k: int) -> int:
        c = Counter(arr)
        cnt, remaining = Counter(c.values()), len(c)
        for key in sorted(cnt): 
            if k >= key * cnt[key]:
                k -= key * cnt[key]
                remaining -= cnt.pop(key)
            else:
                return remaining - k // key
        return remaining
```
Or short code as follows:
1. Count the frequency of each item;
2. Sort `arr` by the frequency and then the value, remove first `k` items and put the remaining items into a HashSet to get its size.

```python
    def findLeastNumOfUniqueInts(self, arr: List[int], k: int) -> int:
        cnt = Counter(arr)
        return len(set(sorted(arr, key=lambda x: (cnt[x], x))[k :]))
```

**Analysis:**
`TreeMap` and `sorted()` cost time `O(nlogn)` for both Java and Python 3 codes, therefore
Time: `O(nlogn)`, space: `O(n)`.

----

**Method 3: HashMap and Array** -- credit to **@krrs**.
Count number then count occurrence:

1. Count the occurrences of each number using HashMap;
2. Using Array to count each occurrence, since max occurrence <= `arr.length`;
3. From small to big, for each unvisited least frequent element, deduct from `k` the multiplication with the number of elements of same occurrence, check if reaching `0`, then deduct the correponding unique count `remaining`.

```java
    public int findLeastNumOfUniqueInts(int[] arr, int k) {
        Map<Integer, Integer> count = new HashMap<>();
        for (int a : arr)
            count.put(a, 1 + count.getOrDefault(a, 0));
        int remaining = count.size(), occur = 1;
        int[] occurrenceCount = new int[arr.length + 1];
        for (int v : count.values())
            ++occurrenceCount[v];
        while (k > 0) {
            if (k - occur * occurrenceCount[occur] >= 0) {
                k -= occur * occurrenceCount[occur];
                remaining -= occurrenceCount[occur++];
            }else {
                return remaining - k / occur;
            }
        }
        return remaining;        
    }
```

**Q & A:**

Q1: Why do we need `occur * occurrenceCount[occur]` instead of just `occurrenceCount[occur]` in Java code?
A1: E.g., both `5` and `8` appear `6` times; We use a `HashMap/dict` to save them as `{5:6, 8:6}`; then we count the `6` in `values()` frequency as `occurrenceCount[6] = 2`, now `occur` in my code corresponds to `6` and the frequency of `6`, `2`, corresponds to `occurrenceCount[occur]`.

Therefore, there are `2` numbers occur `6` times, which is `occurrenceCount[occur] * occur = 2 * 6 = 12` times. 

Q2: How u got this formula remaining - k // key in Python 3 code?
A2: `key` indicates the occurrence of elements in input array, and `cnt[key]` indicates the frequency of the occurrence. If `k < key *  cnt[key]`, it implies we can NOT remove all elements with the occurrence of `key`. Therefore, we can at most remove part of them. 

 E.g., both `5` and `8` appear `6` times; We use a `HashMap/dict` to save them as `{5:6, 8:6}`; then we count the `6` in `values()` occurrence as `cnt[6] = 2`, now `key` in my code corresponds to `6` and the frequency of `6`, `2`, corresponds to `cnt[key]`.
 
 Now if `k = 10 < 12 = 6 * 2 = key * cnt[key]`, we can only remove `k // key = 10 / 6 = 1` unique element.
 
**End of Q & A**

----

```python
    def findLeastNumOfUniqueInts(self, arr: List[int], k: int) -> int:
        c = Counter(arr)
        cnt, remaining = Counter(c.values()), len(c)
        for key in range(1, len(arr) + 1): 
            if k >= key * cnt[key]:
                k -= key * cnt[key]
                remaining -= cnt[key]
            else:
                return remaining - k // key
        return remaining
```

According to suggestion from **@krishna1034**, we can modify the `occurrenceCount` in Java code and ` range(1, len(arr) + 1)` in Python 3 code above to space / iteration times  `O(k)`, since we never need to remove those items with occurrence more than `k`.

```java
    public int findLeastNumOfUniqueInts(int[] arr, int k) {
        Map<Integer, Integer> count = new HashMap<>();
        for (int a : arr) {
            count.put(a, 1 + count.getOrDefault(a, 0));
        }
        int remaining = count.size(), occur = 1;
        int[] occurrenceCount = new int[k + 1];
        for (int v : count.values()) {
            if (v <= k) {
                ++occurrenceCount[v];
            }
        }
        while (k >= occur) {
            if (k - occur * occurrenceCount[occur] >= 0) {
                k -= occur * occurrenceCount[occur];
                remaining -= occurrenceCount[occur++];
            }else {
                return remaining - k / occur;
            }
        }
        return remaining;                
    }
```

```python
    def findLeastNumOfUniqueInts(self, arr: List[int], k: int) -> int:
        c = Counter(arr)
        cnt, remaining = Counter(c.values()), len(c)
        for key in range(1, k + 1): 
            if k >= key * cnt[key]:
                k -= key * cnt[key]
                remaining -= cnt[key]
            else:
                return remaining - k // key
        return remaining
```
**Analysis:**
Time: `O(n)`, space: `O(n)`.

----

Please let me know if you have any confusion or questions, and please **upvote** if the post is helpful.
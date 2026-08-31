# [Java/C++/Python] Binary Search and Heap Solution

**Author:** lee215
**Votes:** 37
**Link:** [https://leetcode.com/problems/minimum-time-to-repair-cars/solutions/3312003/](https://leetcode.com/problems/minimum-time-to-repair-cars/solutions/3312003/)

---

# **Intuition**
Binary search the result.
<br>

# **Explanation**
Because `cars > 0`,
`left = 1`.

Because mechanic `A[i]` can repair `n` cars in `A[i] * n * n `minutes.
right = `A[0] * cars * cars`.

Binary search the time taken to repair all the cars.
Assume we have `mid` minutes,
then the `i`th mechanic can repaire `sqrt(mid / A[i]` cars,
and we round to floor integer here.
We calculate all the `cur` cars we can repair,
If `cur < cars`, not enough time, `left = mid + 1`
If `cur >= cars`, enough time, `right = mid`.

Finally return the binary search result.
<br>

# **Complexity**
If count the frequency of all `A[i]`,
since `A[i] <= 100`,
then don't have to `O(n)` pass the whole `A` each time.

Time `O(100 * (logA[0] + logcars))`,
Space `O(1)`
<br>

**Java**
```java
    public long repairCars(int[] A, int cars) {
        long left = 1, right = 1L * A[0] * cars * cars;
        while (left < right) {
            long mid = (left + right) / 2, cur = 0;
            for (int a : A)
                cur += (long)(Math.sqrt(1.0 * mid / a));
            if (cur < cars)
                left = mid + 1;
            else
                right = mid;
        }
        return left;
    }
```

**C++**
```cpp
    long long repairCars(vector<int>& A, int cars) {
        long long left = 1, right = 1L * A[0] * cars * cars;
        while (left < right) {
            long long mid = (left + right) / 2, cur = 0;
            for (int a : A)
                cur += int(sqrt(1.0 * mid / a));
            if (cur < cars)
                left = mid + 1;
            else
                right = mid;
        }
        return left;
    }
```

**Python**
```py
    def repairCars(self, A: List[int], cars: int) -> int:
        count = Counter(A)
        left, right = 1, min(count) * cars * cars
        while left < right:
            mid = (left + right) // 2
            if sum(isqrt(mid // a) * count[a] for a in count) < cars:
                left = mid + 1
            else:
                right = mid
        return left
```
<br>


# Solution 2: Heap

Add all worker in the a heap,
and find out the next worker that can repair cars.

Time `O(cars * log100)`,
Space `O(log100)`

**Python**
```py
    def repairCars(self, A: List[int], cars: int) -> int:
        count = Counter(A)
        h = [[a, a, 1, count[a]] for a in count]
        heapify(h)
        while cars > 0:
            time, rank, k, count = heappop(h)
            cars -= count
            k += 1
            heappush(h, [rank * k * k, rank, k, count])
        return time
```
<br>


# More Good Binary Search Problems
Here are some similar binary search problems.
Also find more explanations.
Good luck and have fun.

- 2560. [House Robber IV](https://leetcode.com/problems/house-robber-iv/discuss/3143697/JavaC%2B%2BPython-Binary-Search-O(1)-Space)
- 2226. [Maximum Candies Allocated to K Children](https://leetcode.com/problems/maximum-candies-allocated-to-k-children/discuss/1908888/JavaC%2B%2BPython-Binary-Search-with-Explanation)
- 1802. [Maximum Value at a Given Index in a Bounded Array](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/discuss/1119801/Python-Binary-Search)
- 1539. [Kth Missing Positive Number](https://leetcode.com/problems/kth-missing-positive-number/discuss/779999/JavaC++Python-O(logN))
- 1482. [Minimum Number of Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/discuss/686316/javacpython-binary-search)
- 1283. [Find the Smallest Divisor Given a Threshold](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/discuss/446376/javacpython-bianry-search)
- 1231. [Divide Chocolate](https://leetcode.com/problems/divide-chocolate/discuss/408503/Python-Binary-Search)
- 1011. [Capacity To Ship Packages In N Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/discuss/256729/javacpython-binary-search/)
- 875. [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/discuss/152324/C++JavaPython-Binary-Search)
- 774. [Minimize Max Distance to Gas Station](https://leetcode.com/problems/minimize-max-distance-to-gas-station/discuss/113633/Easy-and-Concise-Solution-using-Binary-Search-C++JavaPython)
- 410. [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/)
<br>

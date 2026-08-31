# [Java/Python 3] PriorityQueue/heap w/ brief explanation and analysis.

**Author:** rock
**Votes:** 19
**Link:** [https://leetcode.com/problems/minimum-operations-to-halve-array-sum/solutions/1863888/](https://leetcode.com/problems/minimum-operations-to-halve-array-sum/solutions/1863888/)

---

**Q & A**
*Q1:* Why in `PriorityQueue<Double> pq=new PriorityQueue<>((a,b)->b-a);` the lambda expression does not work with `double`?
*A1:*  Not very sure, but I guess it is because that in Java `Comparator` interface there is only one `int compare(T o1, T o2)` method, of which the return type is `int`. Please refer to [Java 8 Comparator](https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html).

You can use `Math.signum` to convert `double` to `int` as follows:
```java
        PriorityQueue<Double> pq = new PriorityQueue<Double>((a, b) -> (int)Math.signum(b - a));
```


*Q2:* `Math.signum()` returns only 3 values(double) i.e `1.0, -1.0, 0.0`. Then how exactly sorting is happening in above lambda expression `(a, b) -> (int)Math.signum(b - a)`?
*A2:*  The returning 3 values are enough for comparing `2` elements in the array.

`Arrays.sort(Object[])` uses Tim sort. The sorting algorithms like Tim Sort, Merge Sort, Quick Sort, and Heap Sort, etc.,  are comparison (of `2` elements) based. Therefore, we only need to know the result of each comparison between `2` elements: `<`, `=`, `>`, which we can get conclusion from the returning values `-1.0`, `0.0`, `1.0`.


*Q3:* How does this work?
```java
PriorityQueue pq = new PriorityQueue((a, b) -> b.compareTo(a));
```
*A3:* `compareTo` is the method in `Comparable` interface and you can refer to [Java 8 Comparable Interface](https://docs.oracle.com/javase/8/docs/api/java/lang/Comparable.html).

`int compareTo(T o)`

"Compares this object with the specified object for order. Returns a negative integer, zero, or a positive integer as this object is less than, equal to, or greater than the specified object.

..."


*Q4:* And when to use `(b-a)` and when to use `b.compareTo(a)` in lambda expressions?
*A4:* I would choose `b.compareTo(a)` if `(b - a)` could cause overflow. e.g, `a` and `b` are both `int` or `long` and `a = Integer.MIN_VALUE or Long.MIN_VALUE`.

However, in case of no overflow, either is good to use.

**Correct me if I am wrong.**


**End of Q & A**

----

Always reduce current max value by half.

1. Compute the `half` of the sum of the input `nums`;
2. Put all `nums` into a PriorityQueue/heap by reverse order;
3. Poll out and cut the current max value by half and add it back to PriorityQueue/ heap, deduct the `half` of the sum accordingly and increase the counter `ops` by 1;
4. Repeat 3 till `half <= 0`, then return `ops`.
```java
    public int halveArray(int[] nums) {
        PriorityQueue<Double> pq = new PriorityQueue<>(Comparator.reverseOrder());    
        double half = IntStream.of(nums).mapToLong(i -> i).sum() / 2d;
        for (int n : nums) {
            pq.offer((double)n);
        }
        int ops = 0;
        while (half > 0) {
            double d = pq.poll();
            d /= 2;
            half -= d;
            pq.offer(d);
            ++ops;
        }
        return ops;
    }
```

```python
    def halveArray(self, nums: List[int]) -> int:
        half, ops = sum(nums) / 2, 0
        heap = [-num for num in nums]
        heapify(heap)
        while half > 0:
            num = -heappop(heap)
            num /= 2.0
            half -= num
            heappush(heap, -num)
            ops += 1
        return ops
```

**Analysis:**

Time: `O(nlogn)`, space: `O(n)`, where `n = nums.length`.
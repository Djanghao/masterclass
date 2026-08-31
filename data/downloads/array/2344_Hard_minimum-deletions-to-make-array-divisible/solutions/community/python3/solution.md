# [Java/Python 3] 2 methods about GCD w/ brief explanation and analysis.

**Author:** rock
**Votes:** 11
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-array-divisible/solutions/2292773/](https://leetcode.com/problems/minimum-deletions-to-make-array-divisible/solutions/2292773/)

---

"divide all numbers in `numsDivide`"  implies "divide the gcd of `numsDivide`". Therefore, we can design an algorithm as follows:

----

**Method 1:**
1. Compute the gcd of `numsDivide`;
2. Traverse `nums` to find the smallest number that can divide the gcd;; If fails, return -1
3. Traverse `nums` to count how many numbers are less than the afore-mentioned smallest number.

```java
    public int minOperations(int[] nums, int[] numsDivide) {
        int g = IntStream.of(numsDivide).reduce(numsDivide[0], (a, b) -> gcd(a, b));
        int minOp = 0, smallest = Integer.MAX_VALUE;
        for (int num : nums) {
            if (g % num == 0) {
                smallest = Math.min(smallest, num);
            }
        }
        for (int num : nums) {
            if (num < smallest) {
                ++minOp;
            }
        }
        return smallest == Integer.MAX_VALUE ? -1 : minOp;
    }
    private int gcd(int a, int b) {
        while (b > 0) {
            int tmp = a;
            a = b;
            b = tmp % b;
        }
        return a;
    }
```

```python
    def minOperations(self, nums: List[int], numsDivide: List[int]) -> int:
        
        def gcd(a, b) -> int:
            while b > 0:
                a, b = b, a % b
            return a
        
        g = functools.reduce(gcd, numsDivide)
        smallest = min([num for num in nums if g % num == 0], default = inf)
        return -1 if smallest == inf else sum(smallest > num for num in nums)
```

**Analysis:**

Time: `O(m + n + log(max(numsDivide)))`, 
space: Java code - `O(1)`, Python 3 code -`O(m)`, where `m = nums.length, n = numsDivide.length`.

----



**Method 2: Sort**

 *Sort nums:*
 
1. Compute the gcd of `numsDivide`;
2. Sort `nums`;
3. Traverse `nums` to check one by one till locating the smallest number that can divide the gcd; If fails, return -1.



```java
    public int minOperations(int[] nums, int[] numsDivide) {
        int g = IntStream.of(numsDivide).reduce(numsDivide[0], (a, b) -> gcd(a, b));
        int minOp = 0;
        Arrays.sort(nums);
        for (int i = 0; i < nums.length; ++i) {
            if (g % nums[i] == 0) {
                return i;
            }
        }
        return -1;
    }
    private int gcd(int a, int b) {
        while (b > 0) {
            int tmp = a;
            a = b;
            b = tmp % b;
        }
        return a;
    }
```
```python
    def minOperations(self, nums: List[int], numsDivide: List[int]) -> int:
        
        def gcd(a, b) -> int:
            while b > 0:
                a, b = b, a % b
            return a
        
        g = functools.reduce(gcd, numsDivide)
        nums.sort()
        for i, num in enumerate(nums):
            if g % num == 0:
                return i 
        return -1
```

----

**Use TreeMap**

```java
    public int minOperations(int[] nums, int[] numsDivide) {
        int g = numsDivide[0];
        for (int n : numsDivide) {
            g = gcd(g, n);
        }
        TreeMap<Integer, Integer> cnt = new TreeMap<>();
        for (int num : nums) {
            cnt.merge(num, 1, Integer::sum);
        }
        int minOp = 0;
        for (var entry : cnt.entrySet()) {
            if (g % entry.getKey() == 0) {
                return minOp;
            }
            minOp += entry.getValue();
        }
        return -1;
    }
    private int gcd(int a, int b) {
        while (b > 0) {
            int tmp = a;
            a = b;
            b = tmp % b;
        }
        return a;
    }
```

```python
    def minOperations(self, nums: List[int], numsDivide: List[int]) -> int:
        
        def gcd(a, b) -> int:
            while b > 0:
                a, b = b, a % b
            return a
        
        g = reduce(gcd, numsDivide)
        cnt = Counter(nums)
        min_op = 0
        for c in sorted(cnt):
            if g % c == 0:
                return min_op
            min_op += cnt[c]
        return -1
```

**Analysis:**

Time: `O(m * logm + n + log(max(numsDivide)))`, space: `O(m)` - including sorting space, where `m = nums.length, n = numsDivide.length`.
# Prime Intervals vs. Count Primes

**Author:** votrubac
**Votes:** 53
**Link:** [https://leetcode.com/problems/split-the-array-to-make-coprime-products/solutions/3258070/](https://leetcode.com/problems/split-the-array-to-make-coprime-products/solutions/3258070/)

---

## Intuition
Products of prefix and suffix elements are co-prime if prefix elements do not share any prime factors with suffix elements.

## Prime Intervals

If element `i` shares the same prime as element `j`, we cannot split the array in `[i, j)` interval.

In this solution, we identify all such intervals, and look for a split point that does not belong to any interval. 

> I initially came up with a more complicated solution - Count Primes (moved to the section below).

We record the first index of each prime. We then use a number line to record start (increment) and end (decrement) of each prime interval.

Finally, we do a line sweep, computing the prefix sum. When the prefix sum is zero - we've found our split point.

**Factorization**
We do not need to track all primes for a number, only unique ones.

We only check numbers up to 1,000 (square root of maximum value).

If, after trying removing factors `[2 ... 1000]`, the number is greater than one - then that number is a (large) prime.

To speed it up, we can first generate primes < 1000 (e.g. using Sieve of Eratosthenes).

**C++**
```cpp
vector<int> factorize(int n) {
    vector<int> res;
    for (int i = 2; n > 1 && i < 1000; i += 1 + (i % 2))
        if (n % i == 0) {
            res.push_back(i);
            while(n % i == 0)
                n /= i;
        }
    if (n > 1)
        res.push_back(n);
    return res;
}
int findValidSplit(vector<int>& nums) {
    unordered_map<int, int> fi;
    int line[10001] = {};
    for (int i  = 0; i < nums.size(); ++i)
        for (int f : factorize(nums[i])) {
            if (fi.count(f) == 0)
                fi[f] = i;
            ++line[fi[f]];
            --line[i];
        }
    partial_sum(begin(line), end(line), begin(line));
    int res = find(begin(line), end(line), 0) - begin(line);
    return res < nums.size() - 1 ? res : -1;
}
```

## Count Primes
We first count primes for the entire array (`right` counter). Then, we go left-to-right, count primes for the prefix (`left`).

We increment the number of `common` primes when we see a prime for the first time.

When `left` counter equals `right`, we decrement `common` (the prime now is only in the `left` array). 

When `common` becomes zero - we can do the split.

**C++**
```cpp
vector<int> factorize(int n) {
    vector<int> res;
    for (int i = 2; n > 1 && i < 1000; i += 1 + (i % 2))
        if (n % i == 0) {
            res.push_back(i);
            while(n % i == 0)
                n /= i;
        }
    if (n > 1)
        res.push_back(n);
    return res;
}
int findValidSplit(vector<int>& nums) {
    unordered_map<int, int> left, right;
    for (int n : nums)
        for (int f : factorize(n))
            ++right[f];
    for (int i  = 0, common = 0; i < nums.size() - 1; ++i) {
        for (int f : factorize(nums[i]))
            common += (left[f]++ == 0) - (left[f] == right[f]);
        if (common == 0)
            return i;        
    }
    return -1;
}
```

**Java**
```java
List<Integer> factorize(int n) {
    List<Integer> res = new ArrayList<>();
    for (int i = 2; n > 1 && i < 1000; i += 1 + (i % 2))
        if (n % i == 0) {
            res.add(i);
            while(n % i == 0)
                n /= i;
        }
    if (n > 1)
        res.add(n);        
    return res;
}
public int findValidSplit(int[] nums) {
    Map<Integer, Integer> left = new HashMap<>(), right = new HashMap<>();
    int res = 0;
    for (var n : nums)
        for (var f : factorize(n))
            right.put(f, right.getOrDefault(f, 0) + 1);
    for (int i  = 0, common = 0; i < nums.length - 1; ++i) {
        for (int f : factorize(nums[i])) {
            left.put(f, left.getOrDefault(f, 0) + 1);
            common += left.get(f) == 1 ? 1 : 0;
            common -= left.get(f).equals(right.get(f)) ? 1 : 0;
        }        
        if (common == 0)
            return i;
    }
    return -1;
}
```
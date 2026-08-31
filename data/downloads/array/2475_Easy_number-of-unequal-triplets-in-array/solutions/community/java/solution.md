# [Java/C++/Python] One-Pass O(n)

**Author:** lee215
**Votes:** 75
**Link:** [https://leetcode.com/problems/number-of-unequal-triplets-in-array/solutions/2833367/](https://leetcode.com/problems/number-of-unequal-triplets-in-array/solutions/2833367/)

---

# **Intuition**
`O(n^3)` Brute Force is easy,
`O(n^2)` optimisation is normal,
`O(n)` soluiton is awesome.

`O(n)` one pass is coming now.
<br>

# **Explanation**
Iterate the input one by one,
`count[a]` counts the frequency of element `a` we have seen.
`pair` is the number of  pairwise distinct pair
`trips` is the number of  pairwise distinct triplet.

So for every element `A[i]`,
There are already `pairs`
among them `pairs_with_a = count[A[i]] * (i - count[A[i]])` pairs contains `A[i]`
so `pairs_without_a = pairs - pairs_with_a`
and `A[i]` can combine `new_triplets_with_a = pairs_without_a`
So that we update trips.

For `pairs`, will be easier if you get the above process,
we update `pairs += i - count[A[i]]`

Also need to update `count[A[i]] += 1`

After all, we simply return `triplets`.
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Java**
```java
    public int unequalTriplets(int[] A) {
        int trips = 0, pairs = 0, count[] = new int[1001];
        for (int i = 0; i < A.length; ++i) {
            trips += pairs - count[A[i]] * (i - count[A[i]]);
            pairs += i - count[A[i]];
            count[A[i]] += 1;
        }
        return trips;
    }
```

**C++**
```cpp
    int unequalTriplets(vector<int>& A) {
        int trips = 0, pairs = 0, count[1001] = {};
        for (int i = 0; i < A.size(); ++i) {
            trips += pairs - count[A[i]] * (i - count[A[i]]);
            pairs += i - count[A[i]];
            count[A[i]] += 1;
        }
        return trips;
    }
```

**Python**
```py
    def unequalTriplets(self, A: List[int]) -> int:
        trips = pairs = 0
        count = Counter()
        for i,a in enumerate(A):
            trips += pairs - count[a] * (i - count[a])
            pairs += i - count[a]
            count[a] += 1
        return trips
```

# **Follow-up Question**
`O(n^3)` Brute Force is easy,
`O(n^2)` optimisation is normal,
`O(n)` soluiton is awesome.
`O(n)` one pass is done

what else now?
Can you try to solve 4-plets question?
Can you try to solve k-plets question?
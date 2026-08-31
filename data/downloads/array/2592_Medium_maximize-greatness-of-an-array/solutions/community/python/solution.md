# [Java/C++/Python] Easy and Concise, O(n)

**Author:** lee215
**Votes:** 88
**Link:** [https://leetcode.com/problems/maximize-greatness-of-an-array/solutions/3312061/](https://leetcode.com/problems/maximize-greatness-of-an-array/solutions/3312061/)

---

# **Solution 1**
Intuition is to compare elements, need to sort first.

To get as many `perm[i] > nums[i]` as possible,
we will try to put smallest `A[i]` on the right.

So we iterate `A`, and check if it's greater than `A[0]`.
If `A[0]` is done, we then try `A[1]` and so on.

So we can start with `res = 0` and `A[res]` is the next element to compare.

Finally return `res` directly.


# **Complexity**
Time `O(sort)`
Space `O(sort)`
<br>

**Java**
```java
    public int maximizeGreatness(int[] A) {
        Arrays.sort(A);
        int res = 0;
        for (int a : A)
            if (a > A[res])
                res++;
        return res;
    }
```

**C++**
```cpp
    int maximizeGreatness(vector<int>& A) {
        sort(A.begin(), A.end());
        int res = 0;
        for (int& a : A)
            if (a > A[res])
                res++;
        return res;
    }
```

**Python**
```py
    def maximizeGreatness(self, A):
        A.sort()
        res = 0
        for a in A:
            if a > A[res]:
                res += 1
        return res
```
<br>

# **Solution 2**
Imagine `A` is sorted,
and we try to satify as many as possible but `k` elements.

How will we arrange the list?

before: `A[0] A[1]   ... A[n - 1 - k]`
after:  `A[k] A[1+k] ... A[n - 1]`

where
`A[0] < A[k]`
`A[1] < A[1 + k]`
`A[2] < A[2 + k]`
...
`A[n - 1 - k] < A[n - 1]`

This greedy arrange is the best plan to satify as many pairs as possible.
Note that `k` need to be bigger than the biggest frequency of `A[i]`,
otherwise there will be at least one `A[i] == A[i + k]`.

So the problem now is to find out the maximum frequency of `A`.
<br>


# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Java**
```java
    public int maximizeGreatness(int[] A) {
        var count = new HashMap<Integer, Integer>();
        int k = 0;
        for (int a : A)
            k = Math.max(k, count.merge(a, 1, Integer::sum));
        return A.length - k;
    }
```

**C++**
```cpp
    int maximizeGreatness(vector<int>& A) {
        unordered_map<int, int> count;
        int k = 0;
        for (int a : A)
            k = max(k, ++count[a]);
        return A.size() - k;
    }
```

**Python**
Idea from @theabbie
```py
    def maximizeGreatness(self, A):
        return len(A) - max(Counter(A).values())
```

# [Java/C++/Python] One Pass, O(K) Space

**Author:** lee215
**Votes:** 273
**Link:** [https://leetcode.com/problems/shortest-impossible-sequence-of-rolls/solutions/2322280/](https://leetcode.com/problems/shortest-impossible-sequence-of-rolls/solutions/2322280/)

---

# **Intuition**
For the first number, it could be any number from 1 to k.
So my intuition is to check the first occurrence of all number from 1 to k.
<br>

# **Explanation**
We check the first occurrences of all number from `A[0]`.
Assume `A[i]` is the rightmost one among them,
which is the first occurrence of a number in `[1,k]`.

That means from `A[0]` to `A[i]`,
we have seen all numbers at least once.
In other words, `A[0]` to `A[i]` forms our first **complete set** including all numbers.

This complete set can satisfy any number from 1 to `k`,
as the first number in the sequence.

Then we continue this process, to find out the next complete set.
We continue doing this, and assume we can find `x` complete sets in total.
There may ramian some elements, but the rest can not form one more set of all numebr.

Then we can take any sequence of length `x`,
`x + 1` is the length of the shortest sequence of rolls,
that cannot be taken from rolls.

We simply returns `x + 1`.


# **Prove**
Assume there are `x` complete sets in the rolls.

1) We can take any sequence of length `x`
we can take any number from a complete set

2) We can't take all sequence of length `x + 1`
We can contruct one sequence `S` that we can't take.

`S[0]` is the last element in the first complet set
`S[1]` is the last element in the second complet set
...

`S[x]` is one element which is not in the incomplete set after `x` complete set

With 1) and 2),
we prove that `x + 1` is the length of the shortest sequence of rolls
that cannot be taken from rolls.
<br>

# **Complexity**
Time `O(n)`
Space `O(k)`
<br>

**Java**
```java
    public int shortestSequence(int[] A, int k) {
        int res = 1;
        Set<Integer> s = new HashSet<>();
        for (int a : A) {
            s.add(a);
            if (s.size() == k) {
                res++;
                s.clear();
            }
        }
        return res;
    }
```

**C++**
```cpp
    int shortestSequence(vector<int>& A, int k) {
        int res = 1;
        unordered_set<int> s;
        for (int& a : A) {
            s.insert(a);
            if (s.size() == k) {
                res++;
                s.clear();
            }
        }
        return res;
    }
```

**Python**
```py
    def shortestSequence(self, rolls, k):
        res = 1
        s = set()
        for a in rolls:
            s.add(a)
            if len(s) == k:
                res += 1
                s.clear()
        return res
```

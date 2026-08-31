# [Java/C++/Python] Two Ways to Swap

**Author:** lee215
**Votes:** 60
**Link:** [https://leetcode.com/problems/rearranging-fruits/solutions/3143917/](https://leetcode.com/problems/rearranging-fruits/solutions/3143917/)

---

# **Explanation**
First, we count the fruits `A` and `B`,
and check if possible to make even.
If one fruit type has odd quantity,
then it's impossible.

For same fruit in `A` and `B`,
they are even now,
we don't need to swap them.

Then we find out the fruits in `A` and `B` that need to be swap.
assume
`A = [2,2,3,3,1000,1000]`
`B = [1,1,1001,10001,1002,1002]`

One way is to swap them one by one,
we can use the small half friut in `A` and `B`,
to swap the big half fruit:
`[2,2,3,3]` in `A` to swap `[1001,10001,1002,1002]` in `B`
`[1,1]` in `A` to swap `[1001,10001,1002,1002]` in `B`,
the cost is `min(A[i], B[j])`

The other way is use the smallest value in `A` and `B`,
and swap twice.
assume `x = min(A) < min(B)`
now we can swap `x` with `1001` in `B`,
then swap `x` with `2` in `A`.
The cost is `2x`.

So we need to compare this two ways,
for small values to swap,
we apply option 1 and swap directly,
for big values,
we apply option 2 and swap twice using a small value.
<br>

# **Complexity**
Time `O(nlogn)`
Space `O(nlogn)`
<br>

**Java**
```java
    public long minCost(int[] A, int[] B) {
        TreeMap<Integer, Integer> count = new TreeMap<>();
        for (int a : A)
            count.merge(a, 1, Integer::sum);
        for (int a : B)
            count.merge(a, -1, Integer::sum);
        List<Integer> swaps = new ArrayList<>();
        long res = 0, small = count.firstKey();
        for (int a : count.keySet()) {
            if (count.get(a) % 2 > 0) return -1;
            int v = Math.abs(count.get(a)) / 2;
            for (int i = 0; i < v; ++i)
                swaps.add(a);
        }
        for (int i = 0; i < swaps.size() / 2; ++i)
            res += Math.min(swaps.get(i), small * 2);
        return res;
    }
```
**C++**
```cpp
    long long minCost(vector<int>& A, vector<int>& B) {
        map<int, int> count;
        for (int a : A)
            ++count[a];
        for (int a : B)
            --count[a];
        vector<long long> swaps;
        long long res = 0, small = begin(count)->first;
        for (auto [a, v] : count) {
            if (v % 2) return -1;
            for (int i = 0; i < abs(v) / 2; ++i)
                swaps.push_back(a);
        }
        for (int i = 0; i < swaps.size() / 2; ++i)
            res += min(swaps[i], small * 2);
        return res;
    }
```
**Python**
```py
    def minCost(self, A: List[int], B: List[int]) -> int:
        count = Counter(A + B)
        for c in count:
            if count[c] % 2:
                return -1
            count[c] >>= 1
        A2 = list((Counter(A) - count).elements())
        B2 = list((Counter(B) - count).elements())
        small = min(count)
        C = sorted(A2 + B2)
        return sum(min(small * 2, C[i]) for i in range(len(A2)))
```

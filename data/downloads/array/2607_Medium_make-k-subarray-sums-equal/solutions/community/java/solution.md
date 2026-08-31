# k-Cycles

**Author:** votrubac
**Votes:** 104
**Link:** [https://leetcode.com/problems/make-k-subarray-sums-equal/solutions/3366373/](https://leetcode.com/problems/make-k-subarray-sums-equal/solutions/3366373/)

---

The sum of all subarrays of size `k` is equal if:
- `arr[i] == arr[i + k]`
- `arr[i] == arr[i + 2 * k]`
- and so on.
    
As we roll a window of size `k`, we remove element `arr[i]` and add element `arr[i + k]`.

For the sum to stay the same, the removed and added element must be the same. This can be also proven by a contradiction. 

So, for each position `i`, we collect all elements in the `k`-cycle.
    
Then, we determine the median and perform operations to make all elements equal to that median. 

**C++**  
We use `nth_element` instead of sorting to find a median in O(n) in an average case.
```cpp
long long makeSubKSumEqual(vector<int>& arr, int k) {
    long long sz = arr.size(), res = 0;
    for (int i = 0; i < k; ++i) {
        vector<int> cycle;
        for (int j = i; arr[j] != 0; j = (j + k) % sz) {
            cycle.push_back(arr[j]);
            arr[j] = 0;
        }
        nth_element(begin(cycle), begin(cycle) + cycle.size() / 2, end(cycle));
        for (int n : cycle)
            res += abs(n - cycle[cycle.size() / 2]);
    }
    return res;
}
```

**Python 3**
One-liner just for fun. Note that here we use `gcd(len(a), k)` to get all elements in the cycle instead of looping over a circular array.
```python
class Solution:
    def makeSubKSumEqual(self, a: List[int], k: int) -> int:
        return sum(
            sum(abs(n - c[len(c) // 2]) for n in c)
            for c in [sorted(a[i::gcd(len(a), k)]) for i in range(gcd(len(a), k))]
        )
```

**Java**
The complexity is O(sort); we use sort because Java does not provide a standard quickselect implementation.
```java
public long makeSubKSumEqual(int[] arr, int k) {
    long res = 0;
    for (int i = 0; i < k; ++i) {
        List<Integer> cycle = new ArrayList<>();
        for (int j = i; arr[j] != 0; j = (j + k) % arr.length) {
            cycle.add(arr[j]);
            arr[j] = 0;
        }
        Collections.sort(cycle);
        for (int n : cycle)
            res += Math.abs(n - cycle.get(cycle.size() / 2));
    }
    return res;
}
```
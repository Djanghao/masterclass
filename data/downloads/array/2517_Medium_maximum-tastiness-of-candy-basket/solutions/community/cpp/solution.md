# [C++, Java, Python] Binary Search and sorting

**Author:** tojuna
**Votes:** 75
**Link:** [https://leetcode.com/problems/maximum-tastiness-of-candy-basket/solutions/2947983/](https://leetcode.com/problems/maximum-tastiness-of-candy-basket/solutions/2947983/)

---



# Intuition
We can use binary search to search the minimum difference. Since range is `0 - 10^9`, Time complexity will be `n * log(10 ^ 9) = 10 ^ 5 * 30`. This should be within constraints.

# Approach
* Sort `prices`
* Run a binary search in the range `0 to 10 ^ 9`
* The check function iterates over the array `prices` and checks if the given value `x` can be the minimum difference for any subsequence of the array prices

# Complexity
- Time complexity: O(nlog(10^9))

- Space complexity: O(sort)

# Code
**Python3**:
```
def maximumTastiness(self, price: List[int], k: int) -> int:
    price.sort()
    def check(x):
        last, count, i = price[0], 1, 1
        while count < k and i < len(price):
            if price[i] - last >= x:
                last, count = price[i], count + 1
            i += 1
        return count == k
    lo, hi = 0, 10 ** 9
    while lo < hi:
        mid = (lo + hi) // 2
        if check(mid): lo = mid + 1
        else: hi = mid
    return lo - 1
```

**C++**:
```
int maximumTastiness(vector<int>& price, int k) {
    sort(price.begin(), price.end());
    int lo = 0, hi = 1e9;
    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        if (check(mid, price, k)) lo = mid + 1;
        else hi = mid;
    }
    return lo - 1;
}
bool check(int x, vector<int>& price, int k) {
    int last = price[0], count = 1, i = 1;
    while (count < k && i < price.size()) {
        if (price[i] - last >= x)
            last = price[i], count++;
        i++;
    }
    return count == k;
}
```

**Java**:
```
public int maximumTastiness(int[] price, int k) {
    Arrays.sort(price);
    int lo = 0, hi = 1000_000_000;
    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        if (check(mid, price, k)) lo = mid + 1;
        else hi = mid;
    }
    return lo - 1;
}
boolean check(int x, int[] price, int k) {
    int last = price[0], count = 1, i = 1;
    while (count < k && i < price.length) {
        if (price[i] - last >= x) {
            last = price[i]; count++;
        }
        i++;
    }
    return count == k;
}
```
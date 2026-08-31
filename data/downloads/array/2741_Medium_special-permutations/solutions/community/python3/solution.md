# [C++, Java, Python3] Top Down Bitmask DP

**Author:** tojuna
**Votes:** 17
**Link:** [https://leetcode.com/problems/special-permutations/solutions/3650486/](https://leetcode.com/problems/special-permutations/solutions/3650486/)

---



# Intuition
We can use a bitmask to track used elements.

<!-- # Approach -->


# Complexity
- Time complexity: `O(2 ^ n * n * n * n)`

- Space complexity: `O(2 ^ n * n * n)`

# Code
**Python3**:
```
def specialPerm(self, nums: List[int]) -> int:
    n, MOD = len(nums), 10**9 + 7
    @cache
    def dfs(prev, mask):
        if mask == (1 << n) - 1: return 1
        count = 0
        for i in range(n):
            if not (mask & (1 << i)) and (nums[i] % prev == 0 or prev % nums[i] == 0):
                count += dfs(nums[i], mask | (1 << i))
        return count % MOD
    return dfs(1, 0)
```

**C++**:
```
int specialPerm(vector<int>& nums) {
    int n = nums.size(), MOD = 1000000007;
    unordered_map<long long, int> cache;

    function<int(int, int)> dfs = [&](int prev, int mask) {
        if (mask == (1 << n) - 1) return 1;
        long long key = (long long)prev << 20 | mask;
        if (cache.count(key)) return cache[key];

        int count = 0;
        for (int i = 0; i < n; i++)
            if (!(mask & (1 << i)) && (nums[i] % prev == 0 || prev % nums[i] == 0))
                count = (count + dfs(nums[i], mask | (1 << i))) % MOD;
        return cache[key] = count;
    };

    return dfs(1, 0);
}
```

**Java**:
```
Map<Long, Integer> cache;
int MOD = 1000000007;
public int specialPerm(int[] nums) {
    int n = nums.length;
    cache = new HashMap<>();
    return dfs(1, 0, nums);
}
private int dfs(int prev, int mask, int[] nums) {
    if (mask == (1 << nums.length) - 1) return 1;
    long key = (long) prev << 20 | mask;
    if (cache.containsKey(key)) return cache.get(key);

    int count = 0;
    for (int i = 0; i < nums.length; i++)
        if ((mask & (1 << i)) == 0 && (nums[i] % prev == 0 || prev % nums[i] == 0))
            count = (count + dfs(nums[i], mask | (1 << i), nums)) % MOD;
    cache.put(key, count);
    return count;
}
```
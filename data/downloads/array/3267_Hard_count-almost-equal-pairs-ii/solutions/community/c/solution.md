# Optimized brute-force

**Author:** votrubac
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-almost-equal-pairs-ii/solutions/5729972/](https://leetcode.com/problems/count-almost-equal-pairs-ii/solutions/5729972/)

---

We count numbers using a hash map `n`.

But first, we generate valid permutatins (one or two swaps) for each number, and check if we have matches in the hash map. Note that we also need to de-duplicate permutations to avoid double-counting.

Now, we want to make it as fast as possible:
> The runtime limit for C++, I believe, is 3,000 ms, and the solution below is AC with 300 ms runtime.
- Avoid `int` to `string` conversions - we `swap` two digits in integer.
- Use global `vis` array for de-duplication. We can use a trick to avoid re-initialization by storing the index `id` of the number being processed.
- Check if the first swap resulted in a different number, and only do the second swap if it does. 

**C++**
```cpp
int vis[10000000], pw[] = {1, 10, 100, 1000, 10000, 100000, 1000000};
int swap(int n, int i, int j) {
    return n + n / pw[i] % 10 * (pw[j] - pw[i]) + n / pw[j] % 10 * (pw[i] - pw[j]); 
}
class Solution {
public:
unordered_map<int, int> m;   
int count(int n, int i) {
    if (exchange(vis[n], i + 1) != i + 1)
        if (auto it = m.find(n); it != end(m))
            return it->second;
    return 0;
}
int countPairs(vector<int>& nums) {
    int res = 0;
    for (int id = 0; id < nums.size(); ++id) {
        for (int i = 0; i < 7; ++i)
            for (int j = i; j < 7; ++j) {
                int n1 = swap(nums[id], i, j);
                res += count(n1, id);
                if (n1 != nums[id])
                    for (int k = i + 1; k < 7; ++k)
                        for (int l = k + 1; l < 7; ++l)
                            res += count(swap(n1, k, l), id);                
            }
        ++m[nums[id]];
    }
    return res;
}
};
```
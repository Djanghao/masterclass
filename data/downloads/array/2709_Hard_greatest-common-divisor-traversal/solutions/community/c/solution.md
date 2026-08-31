# Union-Find

**Author:** votrubac
**Votes:** 42
**Link:** [https://leetcode.com/problems/greatest-common-divisor-traversal/solutions/3568580/](https://leetcode.com/problems/greatest-common-divisor-traversal/solutions/3568580/)

---

If two numbers share a prime factor, we can traverse between these numbers. 

So, we first collect prime factors for each number.

> We only need factors till `sqrt(100000)` - 65 primes from `2` to `313`. We can use Sieve of Eratosthenes - or a static pre-computed array.
> Note that if, after removing all primes, `nums[i] > 1`, then `nums[i]` is some large prime.
    
We use a hash map `p_i` to map primes to the index of the number.

If the hash map already contains an index, we can group this and the previous number using **union-find**.

We return true if all numbers bellong to the same (single) group.

**C++**
```cpp
const int primes[65] = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 
    53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 
    137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 
    227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313};
int find(int i, vector<int> &ds) {
    return ds[i] < 0 ? i : ds[i] = find(ds[i], ds);
}
vector<int> factorize(int n) {
    vector<int> facts;
    for (int p : primes)
        if (n % p == 0) {
            facts.push_back(p);
            while(n % p == 0)
                n /= p;
        }
    if (n != 1) // Some large prime
        facts.push_back(n);
    return facts;
}
bool canTraverseAllPairs(vector<int>& nums) {
    vector<int> ds(nums.size(), -1);
    unordered_map<int, int> p_i;
    for (int i = 0; i < nums.size(); ++i)
        for (int f : factorize(nums[i])) {
            auto it = p_i.find(f);
            if (it != end(p_i)) {
                int pi = find(i, ds), pj = find(it->second, ds);
                if (pi != pj) { // Union
                    if (ds[pi] > ds[pj])
                        swap(pi, pj); // Rank
                    ds[pi] += ds[pj];
                    ds[pj] = pi;
                }                
            }
            else
                p_i.emplace(f, i);
        }
    return abs(*min_element(begin(ds), end(ds))) == nums.size();
}
```
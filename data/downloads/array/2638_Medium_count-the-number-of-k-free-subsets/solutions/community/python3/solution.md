# [C++|Python] Best O(1000) Grouping + Dynamic Programming + PrefixSum

**Author:** alexunxus
**Votes:** 17
**Link:** [https://leetcode.com/problems/count-the-number-of-k-free-subsets/solutions/3411028/](https://leetcode.com/problems/count-the-number-of-k-free-subsets/solutions/3411028/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can divide nums into k independent groups like the house robber problem. That is to say, if `k = 3` and `nums = [1,2,3,5,6,9]`, we can group the array into
```
[1]     -> {} or {1}                        : 2 kinds
[2,5]   -> {} or {2} or {5}                 : 3 kinds
[3,6,9] -> {} or {3} or {6} or {9} or {3, 9}: 5 kinds
```
We can make union on any one k-free subset of each group and still form a valid k-free subset. For example, I can choose `{1}` from group 1, `{}` from group 2 and `{3,9}` from 3 and form `{1,3,9}`. So the total number of k-free subset is
`(2) * (3) * (5)`, which is the product of number of k-free subset of all k independent groups.


# Approach (Time: 22ms)
<!-- Describe your approach to solving the problem. -->
After dividing the nums array into independent groups, we have to figure out how to find the number of k-free subsets for each group. We can first sort the number in increasing order and then exploit the optimal substructure by dynamic programming. 

Assume the sorted array of a group is `v[0..n-1]`, then we can build a dp table `dp[0..n]` with `dp[i]` defined as the number of k-free subsets with largest element `v[i]`. What we have to compute is just the sum of `dp[0..n]`(first entry for empty subset, which is valid). The recursion relation is 
$dp[i] = \\begin{cases} 1, \	ext{if } i = 0 \\\\\\sum_{j=0}^{i-1}dp[j], v[i-1] \
eq v[i-2] + k \\\\ \\sum_{j=0}^{j-2} dp[j], \	ext{otherwise}  \\end{cases}$
, and we have to return $\\sum_{j=0}^{n} dp[j]$.

We can further optimize the space by defining the prefix sum:
$dp[i] = \\begin{cases} 1, \	ext{if }i = 0 \\\\ prefsum[i-1], v[i-1] \
eq v[i-2] + k \\\\ prefsum[i-2] = prefsum[i-1]- dp[i-1], \	ext{otherwise}  \\end{cases}$
, and we have to return $prefsum[n]$. In this case, we only have to keep the prior prefix sum `prefsum[i-1]`(corresponding to `num_ksubset` in the implementation) and previous value `dp[i-1]`(corresponding to `prevkinds` in the implementation). We can reduce the extra space usage to `O(1)`.

Finally, we multiply all final prefix sums of each group and report the answer.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
`O(n\\log n + k)` for worst case sorting for k buckets
`O(n + k)` for dynamic programming algorithm(only have to scan n elements)
Overall: `O(n\\log n + k)`
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
`O(n + k)`

# Code
```
class Solution {
public:
    long long countTheNumOfKFreeSubsets(vector<int>& nums, int k) {
        long long res = 1;
        std::vector<int> buckets[k];
        for (int i: nums) {
            buckets[i%k].push_back(i);
        }
        for (auto & bucket: buckets) {
            int sz = bucket.size();
            long long num_ksubset = 1;
            long long prevkinds = 1; // empty subset is as a valid k-free subset
            std::sort(begin(bucket), end(bucket));
            // curkinds = dp[i]: number of k-free subset containing the element bucket[j]
            // prevkinds = dp[i-1]: number of k-free subset containing the previous element
            // num_ksubset = prefsum[i-1]: total number of k-free subset for group i
            for (int j = 0; j < sz; ++j) {
                long long curkinds = 0;
                if (j && bucket[j] == bucket[j-1] + k) {
                    // can't contain the previous element
                    curkinds = num_ksubset - prevkinds;
                } else {
                    curkinds = num_ksubset;
                }
                num_ksubset += curkinds;
                prevkinds = curkinds;
            }
            res *= num_ksubset;   
        }
        return res;
    }
};
```
Python:
```
  def countTheNumOfKFreeSubsets(self, nums: List[int], k: int) -> int:
        res = 1
        buckets = [[] for i in range(k)]
        for i in nums:
            buckets[i%k].append(i)
        for bucket in buckets:
            sz = len(bucket)
            bucket.sort()
            num_ksubset, prevkinds = 1, 1
            for j in range(sz):
                curkinds = 0
                if j and bucket[j] == bucket[j-1] + k:
                    curkinds = num_ksubset - prevkinds
                else:
                    curkinds = num_ksubset
                num_ksubset += curkinds
                prevkinds = curkinds
            res *= num_ksubset
        return res
```
# Follow-up (Time: 8ms)
Since each element is distinct and they have very limited range([1, 1000]), we can actually use a boolean table to store the number and perform scanning from each module group i = `{j|j in nums, j%k = i}`.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
`O(1000)` counting sort
`O(1000)` for dynamic programming algorithm(only have to scan n elements)
Overall: `O(1000))`
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
`O(1000)`

# Code
C++:
```
class Solution {
public:
    long long countTheNumOfKFreeSubsets(vector<int>& nums, int k) {
        long long res = 1;
        bool buckets[1001] = {0};
        for (int i: nums) {buckets[i] = true;}
        for (int i = 0; i < k; ++i) {
            long long num_ksubset = 1;
            long long prevkinds = 1;
            for (int j = i; j <= 1000; j += k) {
                long long curkinds = 0;
                if (buckets[j]) {
                    if (j >= k && buckets[j-k]) {
                        curkinds = num_ksubset - prevkinds;
                    } else {
                        curkinds = num_ksubset;
                    }
                    num_ksubset += curkinds;
                    prevkinds = curkinds;
                }
            }
            res *= num_ksubset;
        }
        return res;
    }
};
```

# Follow-up 2: Duplicated elements:
If we choose the first method, we can group the i-th group into vector of unique element and its frequency. For example,
`[1,1,1,4,4,7,7,7,7,7], k = 3` becomes `[(1,3),(4,2),(7,5)]`. Then we can perform dynamic programming algorithm similarly.

If we choose the second method, we can change the boolean table into an integer table and perform dynamic programming algorithm on it like the house-robber problem.
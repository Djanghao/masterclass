# [C++|Java|Python3] similar to "2597. The Number of Beautiful Subsets"

**Author:** ye15
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-the-number-of-k-free-subsets/solutions/3414315/](https://leetcode.com/problems/count-the-number-of-k-free-subsets/solutions/3414315/)

---

**C++**
```
class Solution {
public:
    long long countTheNumOfKFreeSubsets(vector<int>& nums, int k) {
        sort(nums.begin(), nums.end()); 
        unordered_map<int, int> size; 
        int m = 0; 
        for (auto& x : nums) {
            size[x] = 1 + size[x-k]; 
            size.erase(x-k); 
            m = max(m, size[x]); 
        }
        vector<long long> fib(m+2); 
        fib[0] = fib[1] = 1; 
        for (int i = 2; i < m+2; ++i) fib[i] = fib[i-2] + fib[i-1];
        long long ans = 1; 
        for (auto& [_, v] : size) 
            ans *= fib[v+1]; 
        return ans; 
    }
};
```
**Java**
```
class Solution {
    public long countTheNumOfKFreeSubsets(int[] nums, int k) {
        Arrays.sort(nums); 
        Map<Integer, Integer> size = new HashMap(); 
        int m = 0; 
        for (var x : nums) {
            size.put(x, 1 + size.getOrDefault(x-k, 0)); 
            size.remove(x-k); 
            m = Math.max(m, size.get(x)); 
        }
        long[] fib = new long[m+2]; 
        fib[0] = fib[1] = 1; 
        for (int i = 2; i < m+2; ++i) fib[i] = fib[i-2] + fib[i-1]; 
        long ans = 1; 
        for (var v : size.values()) 
            ans *= fib[v+1]; 
        return ans; 
    }
}
```
**Python3**
```
class Solution:
    def countTheNumOfKFreeSubsets(self, nums: List[int], k: int) -> int:
        size = defaultdict(int)
        for x in sorted(nums): 
            size[x] = size[x-k] + 1
            size.pop(x-k)
        m = max(size.values())
        fib = [1]*(m+2)
        for i in range(2, m+2): fib[i] = fib[i-2] + fib[i-1]
        return reduce(mul, (fib[v+1] for v in size.values()))
```
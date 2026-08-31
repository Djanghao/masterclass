# [C++|Java|Python3] prefix sum + freq table

**Author:** ye15
**Votes:** 19
**Link:** [https://leetcode.com/problems/number-of-substrings-with-fixed-ratio/solutions/2861416/](https://leetcode.com/problems/number-of-substrings-with-fixed-ratio/solutions/2861416/)

---

**Intuition**
Here, I use prefix sum to indicate what has been seen so far. If `0` is seen, I increase `prefix` by `num2`; if `1` is seen, I decrease `prefix` by `num1`. As a result, the number of `prefix` that has been seen in the past indicate how many subarrays with proper ratio ending at current index. 

**Implementation**
**C++**
```
class Solution {
public:
    long long fixedRatio(string s, int num1, int num2) {
        unordered_map<long long, int> freq = {{0, 1}}; 
        long long ans = 0, prefix = 0; 
        for (auto& ch : s) {
            if (ch == '0') prefix += num2; 
            else prefix -= num1; 
            ans += freq[prefix]; 
            ++freq[prefix]; 
        }
        return ans; 
    }
};
```
**Java**
```
class Solution {
    public long fixedRatio(String s, int num1, int num2) {
        HashMap<Long, Integer> freq = new HashMap<>(); freq.put(0l, 1); 
        long ans = 0, prefix = 0; 
        for (char ch : s.toCharArray()) {
            if (ch == '0') prefix += num2; 
            else prefix -= num1; 
            ans += freq.getOrDefault(prefix, 0); 
            freq.merge(prefix, 1, Integer::sum); 
        }
        return ans; 
    }
}
```
**Python3**
```
class Solution:
    def fixedRatio(self, s: str, num1: int, num2: int) -> int:
        ans = prefix = 0 
        freq = Counter({0 : 1})
        for ch in s:
            if ch == '0': prefix += num2
            else: prefix -= num1
            ans += freq[prefix]
            freq[prefix] += 1
        return ans 
```
**Complexity**
Time `O(N)`
Space `O(N)`
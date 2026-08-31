# [C++, Python3] Prefix Sum

**Author:** tojuna
**Votes:** 21
**Link:** [https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/solutions/3420109/](https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/solutions/3420109/)

---


# Intuition
First find `conver` array and then find its prefix sum

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
**Python3**:
```
def findPrefixScore(self, nums: List[int]) -> List[int]:
    m, conver = 0, []
    for x in nums:
        m = max(m, x)
        conver.append(x + m)
    return accumulate(conver)
```
1 liner credits [@SunnyvaleCA](https://leetcode.com/SunnyvaleCA/):
```
def findPrefixScore(self, A):
    return accumulate(n+maxN for n,maxN in zip(A, accumulate(A,max)))

```

**C++**:
```
vector<long long> findPrefixScore(vector<int>& nums) {
      vector<long long> pre;
      long long m = 0, s = 0;
      for(int x : nums) {
          m = max(m, (long long)x);
          s += x + m;
          pre.push_back(s);
      }
      return pre;
  }
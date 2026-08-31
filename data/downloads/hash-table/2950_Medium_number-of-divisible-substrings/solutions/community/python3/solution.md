# Simple linear (if take 9 as a constant)  solutions in C++, Java & Python

**Author:** cpcs
**Votes:** 17
**Link:** [https://leetcode.com/problems/number-of-divisible-substrings/solutions/4344411/](https://leetcode.com/problems/number-of-divisible-substrings/solutions/4344411/)

---

# Intuition
For a substring, if we map characters into the numbers, say f(c) = x (x = 1, 2, ... 9),
the question is to ask
(f(c1) + f(c2) + f(c3) + ... + f(cp)) / p is an integer.
Meaning the average value is an integer.
So the average value can only be integers inside [1, 9].
Suppose the average value is a.

So we have
(f(c1) + f(c2) + f(c3) + ... + f(cp)) / p = a
f(c1) + f(c2) + f(c3) + ... + f(cp) = p * a
f(c1) + f(c2) + f(c3) + ... + f(cp)) - p * a = 0
(f(c1) - a) + (f(c2) - a) + ... + (f(cp) - a) = 0
So if we enumerate all the possible a values, subtracting it from. the original value and the sum should be 0. This is a very common trick to do with questions related to average value. (Sometimes we can do binary search on the average value.)


# Approach
1. Try all the possible average value a from 1 to 9.
2. Subtract each character value by a.
3. Find the number of substrings/subarrays with sum 0 which can be done via prefix sum.

# Complexity
- Time complexity:
O(9 * n)

- Space complexity:
O(n)

# Code
C++
```
class Solution {
public:
    int countDivisibleSubstrings(string word) {
        int r = 0;
        for (int i = 1; i < 10; ++i) {
            unordered_map<int, int> have = {{0, 1}};
            int s = 0;
            for (const char c : word) {
                s += 9 - ('z' - c) / 3 - i;
                r += have[s]++;
            }
        }
        return r;
    }
};
```
Java
```
class Solution {
    public int countDivisibleSubstrings(String word) {
        int r = 0;
        for (int i = 1; i < 10; ++i) {
            Map<Integer, Integer> have = new HashMap<>();
            have.put(0, 1);
            int s = 0;
            for (char c : word.toCharArray()) {
                s += 9 - ('z' - c) / 3 - i;
                int m = have.getOrDefault(s, 0);
                r += m++;
                have.put(s, m);
            }
        }
        return r;
    }
}
```
Python
```
class Solution:
    def countDivisibleSubstrings(self, word: str) -> int:
        r = 0
        for i in range(1, 10):
            have = {0: 1}
            s = 0
            for c in word:
                s += 9 - (ord('z') - ord(c)) // 3 - i
                r += have.get(s, 0)
                have[s] = have.get(s, 0) + 1
        return r
        
```
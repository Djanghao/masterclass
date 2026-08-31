# Prefix Sum O(n) | C++, Python, Java

**Author:** not_yl3
**Votes:** 2
**Link:** [https://leetcode.com/problems/shift-distance-between-two-strings/solutions/6075723/](https://leetcode.com/problems/shift-distance-between-two-strings/solutions/6075723/)

---

# Approach
<!-- Describe your first thoughts on how to solve this problem. -->
We can use two prefix sum arrays to calculate the shift distance between any two characters, whether going forward or backwards.

First transform `previousCost` and `nextCost` into prefix sum arrays. This way we can easily calculate the distance between `s[i]` and `t[i]`. We calculate the distance in both directions to get the minimum of the two.

**When going forward:**
- If `t[i] > s[i]` we just take the sum `s[i]..t[i] - 1`.
- Else if `t[i] < s[i]` we take the sum of `s[i]..'z'` and then `'z'..t[i] - 1`

**When going backward:**
- If `t[i] < s[i]` we take the sum of `t[i]..s[i]`.
- Else if `t[i] > s[i]` we take the sum of `'a'..s[i]` and then `'z'..'z'..t[i]`.

Also keep in mind that if `t[i] == 'a'` then `t[i] - 1 == 'z'`.

This question is similar to [Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/description/) which can help you learn how to get the sum between two values in the prefix sum arrays. Only difference is that when there's a wrap around, we need to add two ranges.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    long long shiftDistance(string s, string t, vector<int>& nextCost, vector<int>& previousCost) {
        int n = s.length();
        long long res = 0;
        long long next[26] = {nextCost[0]}, prev[26] = {previousCost[0]};
        for (int i = 1; i < 26; i++){
            next[i] = (long long)nextCost[i] + next[i - 1];
            prev[i] = (long long)previousCost[i] + prev[i - 1];
        }
        for (int i = 0; i < n; i++){
            if (s[i] == t[i]) continue;
            int a = s[i] - 'a', b = t[i] - 'a';
            long long forward = 0, back = 0;
            if (b < a){
                forward += next[25] - (a != 0 ? next[a - 1] : 0); // forward
                if (b != 0) forward += next[b - 1];
                back = prev[a] - prev[b]; // back
            }
            else{
                forward += next[b - 1]; // forward
                if (a != 0) forward -= next[a - 1];
                back += prev[a] + prev[25] - prev[b]; // back
            }
            res += min(forward, back);
        }
        return res;
    }
};
```
```python []
class Solution:
    def shiftDistance(self, s: str, t: str, nextCost: List[int], previousCost: List[int]) -> int:
        n, res = len(s), 0
        for i in range(1, 26):
            nextCost[i] = nextCost[i] + nextCost[i - 1]
            previousCost[i] = previousCost[i] + previousCost[i - 1]
        for i in range(n):
            a = ord(s[i]) - ord('a')
            b = ord(t[i]) - ord('a')
            if a == b: continue
            forward = back = 0
            if b < a:
                forward += nextCost[25] - (nextCost[a - 1] if a != 0 else 0)
                if b != 0:
                    forward += nextCost[b - 1]
                back = previousCost[a] - previousCost[b]
            else:
                forward += nextCost[b - 1]
                if a != 0:
                    forward -= nextCost[a - 1]
                back += previousCost[a] + previousCost[25] - previousCost[b]
            res += min(forward, back)
        return res

```
```Java []
class Solution {
    public long shiftDistance(String s, String t, int[] nextCost, int[] previousCost) {
        int n = s.length();
        long res = 0;
        long[] next = new long[26], prev = new long[26];
        next[0] = nextCost[0];
        prev[0] = previousCost[0];
        for (int i = 1; i < 26; i++){
            next[i] = (long)nextCost[i] + next[i - 1];
            prev[i] = (long)previousCost[i] + prev[i - 1];
        }
        for (int i = 0; i < n; i++){
            int a = s.charAt(i) - 'a', b = t.charAt(i) - 'a';
            if (a == b) continue;
            long forward = 0, back = 0;
            if (b < a){
                forward += next[25] - (a != 0 ? next[a - 1] : 0); // forward
                if (b != 0) forward += next[b - 1];
                back = prev[a] - prev[b]; // back
            }
            else{
                forward += next[b - 1]; // forward
                if (a != 0) forward -= next[a - 1];
                back += prev[a] + prev[25] - prev[b]; // back
            }
            res += Math.min(forward, back);
        }
        return res;
    }
}
```

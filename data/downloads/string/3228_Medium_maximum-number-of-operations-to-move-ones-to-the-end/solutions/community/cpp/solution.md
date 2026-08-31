# Greedy

**Author:** fahad_Mubeen
**Votes:** 42
**Link:** [https://leetcode.com/problems/maximum-number-of-operations-to-move-ones-to-the-end/solutions/5508962/](https://leetcode.com/problems/maximum-number-of-operations-to-move-ones-to-the-end/solutions/5508962/)

---

# Approach
1. A **'1'** in the string can only move if it is immediately followed by a **'0'**. When a **'1'** moves, it continues to shift right until it encounters another **'1'** or reaches the end of the string.
3. To determine the maximum number of operations, follow these steps:

```
- Track how many '1's are to the left of each '0'. 
- Each '0' encountered allows all previously counted '1's to move past it.

- For every '0', add the number of '1's encountered so far to a running total. 
- This accounts for all possible moves that can be performed for each '0'.
```

3. In the code, this is achieved by:


- Iterating through the string while maintaining a count of **'1's** (cnt).
- Whenever a **'0'** is encountered, adding the current count of **'1's** to the total number of operations (ans).
- **Skipping** over consecutive **'0's** until the next **'1'** is found or the end of the string is reached.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```C++ []
class Solution {
public:
    int maxOperations(string s) {
        int n = s.length(), cnt = 0, ans = 0;
        for(int i = 0; i < n; i++){
            if(s[i] == '0'){
                ans += cnt;
                while(i < n && s[i] != '1'){
                    i++;
                }
            }
            cnt++;
        }
        return ans;
    }
};
```
```Java []
class Solution {
    public int maxOperations(String s) {
        int n = s.length(), cnt = 0, ans = 0;
        for (int i = 0; i < n; i++) {
            if (s.charAt(i) == '0') {
                ans += cnt;
                while (i < n && s.charAt(i) != '1') {
                    i++;
                }
            }
            cnt++;
        }
        return ans;
    }
}

```
```Python3 []
class Solution:
    def maxOperations(self, s: str) -> int:
        n = len(s)
        cnt = 0
        ans = 0
        i = 0
        while i < n:
            if s[i] == '0':
                ans += cnt
                while i < n and s[i] != '1':
                    i += 1
            cnt += 1
            i += 1
        return ans

```

# Alternate Loop
```
for(int i = 0; i < n; i++){
    if(s[i] == '1') cnt++;
    else{
        while(i < n && s[i] != '1'){
            i++;
        }
        res += cnt;
        cnt++; // since s[i] = 1 after the while loop if (i < n) 
    }
}
```

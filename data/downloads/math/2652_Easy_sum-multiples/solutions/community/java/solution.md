# 🔥 [LeetCode The Hard Way] 🔥 Explained Line By Line

**Author:** tr1nity
**Votes:** 15
**Link:** [https://leetcode.com/problems/sum-multiples/solutions/3446052/](https://leetcode.com/problems/sum-multiples/solutions/3446052/)

---

```py
class Solution:
    def sumOfMultiples(self, n: int) -> int:
        res = 0
		#  iterate through the range 1 to n and 
        for i in range(3, n + 1):
			# count numbers divisible by either 3, 5, or 7
            if i % 3 == 0 or i % 5 == 0 or i % 7 == 0:
                res += i
        return res
```

```cpp
class Solution {
public:
    int sumOfMultiples(int n) {
        int ans = 0;
		//  iterate through the range 1 to n and 
        for (int i = 3; i <= n; i++) {
			// count numbers divisible by either 3, 5, or 7
            if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
                ans += i;
            }
        }
        return ans;
    }
};
```

```java
class Solution {
    public int sumOfMultiples(int n) {
		//  iterate through the range 1 to n and 
        int ans = 0;
        for (int i = 3; i <= n; i++) {
			// count numbers divisible by either 3, 5, or 7
            if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
                ans += i;
            }
        }
        return ans;
    }
}
```
# Day 30 || DP - Easiest Beginner Friendly Sol || O(n) time and O(n) space

**Author:** singhabhinash
**Votes:** 94
**Link:** [https://leetcode.com/problems/n-th-tribonacci-number/solutions/3115577/](https://leetcode.com/problems/n-th-tribonacci-number/solutions/3115577/)

---

# Intuition of this Problem:
T[n] = T[n-1] + T[n-2] + T[n-3]
<!-- Describe your first thoughts on how to solve this problem. -->
**NOTE - PLEASE READ APPROACH FIRST THEN SEE THE CODE. YOU WILL DEFINITELY UNDERSTAND THE CODE LINE BY LINE AFTER SEEING THE APPROACH.**

# Approach for this Problem:
1. Initialize a vector "Tribonacci" with n+1 elements
2. Check if n is 0, if true return 0
3. Check if n is 1, if true return 1
4. Check if n is 2, if true return 1
5. Set Tribonacci[0] = 0, Tribonacci[1] = 1, Tribonacci[2] = 1
6. Iterate from i = 3 to n+1
    - Set Tribonacci[i] = Tribonacci[i-1] + Tribonacci[i-2] + Tribonacci[i-3]
1. Return Tribonacci[n]
<!-- Describe your approach to solving the problem. -->

# Humble Request:
- If my solution is helpful to you then please **UPVOTE** my solution, your **UPVOTE** motivates me to post such kind of solution.
- Please let me know in comments if there is need to do any improvement in my approach, code....anything.
- **Let's connect on** https://www.linkedin.com/in/abhinash-singh-1b851b188

![57jfh9.jpg](./images/0.jpeg)

# Code:
```C++ []
class Solution {
public:
    int tribonacci(int n) {
        if(n == 0)
            return 0;
        if(n == 1 || n == 2)
            return 1;
        vector<int> Tribonacci(n+1);
        Tribonacci[0] = 0;
        Tribonacci[1] = 1;
        Tribonacci[2] = 1;
        for(int i = 3; i < n+1; i++){
            Tribonacci[i] = Tribonacci[i-1] + Tribonacci[i-2] + Tribonacci[i-3];
        }
        return Tribonacci[n];
    }
};
```
```Java []
class Solution {
    public int tribonacci(int n) {
        if(n == 0)
            return 0;
        if(n == 1 || n == 2)
            return 1;
        int[] Tribonacci = new int[n+1];
        Tribonacci[0] = 0;
        Tribonacci[1] = 1;
        Tribonacci[2] = 1;
        for(int i = 3; i < n+1; i++){
            Tribonacci[i] = Tribonacci[i-1] + Tribonacci[i-2] + Tribonacci[i-3];
        }
        return Tribonacci[n];
    }
}

```
```Python []
class Solution:
    def tribonacci(self, n: int) -> int:
        if n == 0:
            return 0
        if n == 1:
            return 1
        if n == 2:
            return 1
        Tribonacci = [0] * (n + 1)
        Tribonacci[0] = 0
        Tribonacci[1] = 1
        Tribonacci[2] = 1
        for i in range(3, n + 1):
            Tribonacci[i] = Tribonacci[i-1] + Tribonacci[i-2] + Tribonacci[i-3]
        return Tribonacci[n]

```

# Time Complexity and Space Complexity:
- Time complexity: **O(n)** // where n is the number given
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: **O(n)** // using extra space vector
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
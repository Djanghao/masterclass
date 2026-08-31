# Easy ,Beginner friendly & Dry Run || Iteration || Time O(n) and Space O(1) || Gits ✅✅✅😎😎

**Author:** GiteshSK_12
**Votes:** 21
**Link:** [https://leetcode.com/problems/the-kth-factor-of-n/solutions/4684663/](https://leetcode.com/problems/the-kth-factor-of-n/solutions/4684663/)

---

![Screenshot 2024-02-06 102644.png](./images/0.png)

# Intuition \uD83D\uDC48
The question is very simple. It is given nnn and kkk, where we have to find the factors of the number n and we have to return the kth factor of n. For example, n=12 and k=3,the factors of 12 are 1, 2, 3, 4, 6, and 12. The 3rd factor is 3, so we will return 3.

# Approach \uD83D\uDC48
We will simply iterate from 1 to n and maintain a count. The count will tally the number of factors. As soon as the count matches k, we will return i. If there is no match or there are no factors, we will return -1. 

# Code Expalnation \uD83D\uDC48

*   **Variable Initialization**: A variable `count` is initialized to `0`. This variable is used to keep track of the number of factors encountered so far.
    
*   **Loop through 1 to n**: The method iterates through all integers from `1` to `n` inclusive, using a `for` loop with `i` as the loop variable. This is because all factors of `n` will be in this range.
    
*   **Check for a factor**: Inside the loop, the code checks if `n` is divisible by `i` using the modulo operator (`n % i == 0`). If `n % i == 0`, it means `i` is a factor of `n`.
    
*   **Increment count and check position**: When a factor is found, `count` is incremented. Then, it checks if the current count equals `k`. If so, this means the kthk^{th}kth factor has been found, and `i` (the current factor) is immediately returned.
    
*   **Completion of the loop or return -1**: If the loop completes without finding the kthk^{th}kth factor (i.e., without returning from inside the loop), the method returns `-1`. This indicates that there are fewer than `k` factors of `n`, and thus, the kthk^{th}kth factor does not exist.

# Complexity \uD83D\uDC48
- Time complexity: O(n)

- Space complexity: O(1)

# Code
```C []
int kthFactor(int n, int k) {
    int count = 0;
    for (int i = 1; i <= n; i++) {
        if (n % i == 0) {
            count++;
            if (count == k)return i;
        }
    }
    return -1;
}
```
```C++ []
class Solution {
public:
    int kthFactor(int n, int k) {
        int count = 0;
        for (int i = 1; i <= n; i++) {
            if (n % i == 0) {
                count++;
                if (count == k)return i;
            }
        }
        return -1;
    }
};
```
```Java []
class Solution {
    public int kthFactor(int n, int k) {
        int count = 0;
        for (int i = 1; i <= n; i++) {
            if (n % i == 0) {
                count++;
                if (count == k)return i;
            }
        }
        return -1;
    }
}
```
```javascript []
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    let count = 0;
    for (let i= 1; i <= n; i++) {
        if (n % i == 0) {
                count++;
            if (count == k)return i;
        }
    }
    return -1;
};
```
```C# []
public class Solution {
    public int KthFactor(int n, int k) {
        int count = 0;
        for (int i = 1; i <= n; i++) {
            if (n % i == 0) {
                count++;
                if (count == k)return i;
            }
        }
        return -1;
    }
}
```
```python []
class Solution(object):
    def kthFactor(self, n, k):
        count = 0
        for i in range(1,n+1):
            if n % i == 0 :
                count+=1
                if count == k: return i
        return -1
        
```
```ruby []
# @param {Integer} n
# @param {Integer} k
# @return {Integer}
def kth_factor(n, k)
    count = 0
    for i in 1..n do
        if n % i == 0
            count+=1
            if count == k
                return i
            end
        end
    end
    return -1
end
```
# Dry Run \uD83D\uDC48

1.  **Initialization**: `count = 0`
2.  **Iteration starts**: `for (int i = 1; i <= 12; i++)`

*   **Iteration 1**: `i = 1`
    
    *   `12 % 1 == 0`, so it's a factor.
    *   `count` is incremented to `1`.
    *   `count` is not equal to `k` (3), so continue.
*   **Iteration 2**: `i = 2`
    
    *   `12 % 2 == 0`, so it's a factor.
    *   `count` is incremented to `2`.
    *   `count` is not equal to `k` (3), so continue.
*   **Iteration 3**: `i = 3`
    
    *   `12 % 3 == 0`, so it's a factor.
    *   `count` is incremented to `3`.
    *   `count` equals `k` (3), so `i` (which is `3` at this moment) is returned as the output.
    
# Hey Guys if the solution and explanation is help full then upvate me.\u2764\uFE0F\u2764\uFE0F

![Screenshot 2024-01-28 214252.png](./images/1.png)

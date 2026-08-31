# Beats 100%

**Author:** B_I_T
**Votes:** 5
**Link:** [https://leetcode.com/problems/sum-of-digits-of-string-after-convert/solutions/5729490/](https://leetcode.com/problems/sum-of-digits-of-string-after-convert/solutions/5729490/)

---

![image.png](./images/0.png)
# Intuition
The goal of this problem is to transform a string of lowercase alphabetic characters into a number based on their positions in the alphabet (i.e., 'a' = 1, 'b' = 2, ..., 'z' = 26), sum the digits of the resulting numbers, and repeat this transformation k times.

# Approach
1. Character to Number Mapping:

    - Each character of the string is converted to its corresponding number based on its position in the alphabet.
    - If the number has two digits (e.g., 'k' becomes 11), sum the digits of this number (e.g., 1 + 1).
2. Initial Sum Calculation:

    - Sum up the digits for all characters in the string based on their position in the alphabet.
3. Transform:

    - Repeat the transformation of summing the digits k-1 times. Each transformation involves summing the digits of the number formed after the previous transformation.
4. Return the Result:

    - After performing the transformations k times, return the resulting number.
# Complexities
- Time Complexity:
    - O(n + k*log(m)) where:
        - n is the length of the string (initial conversion).
        - k is the number of transformations.
        - log(m) is the number of digits in the resulting number.
- Space Complexity:
    - O(1), since we only use a few integer variables.
# Code
```cpp []
class Solution {
private:
    int transform(int t){
        int res = 0;
        while(t>0){
            res += t%10;
            t/=10;
        }
        return res;
    }
public:
    int getLucky(string s, int k) {
        int res = 0;
        for(char ch : s){
            int num = ch-'a'+1;
            if(num >= 10) res += num%10 + num/10;
            else res += num;
        } 
        while(--k>0)
            res = transform(res);

        return res;
    }
};
```
```Java []
class Solution {
    private int transform(int t) {
        int res = 0;
        while (t > 0) {
            res += t % 10;
            t /= 10;
        }
        return res;
    }

    public int getLucky(String s, int k) {
        int res = 0;
        for (char ch : s.toCharArray()) {
            int num = ch - 'a' + 1;
            if (num >= 10) {
                res += num % 10 + num / 10;
            } else {
                res += num;
            }
        }

        while (--k > 0) {
            res = transform(res);
        }

        return res;
    }
}

```
```Python3 []
class Solution:
    def transform(self, t: int) -> int:
        res = 0
        while t > 0:
            res += t % 10
            t //= 10
        return res

    def getLucky(self, s: str, k: int) -> int:
        res = 0
        for ch in s:
            num = ord(ch) - ord('a') + 1
            if num >= 10:
                res += num % 10 + num // 10
            else:
                res += num

        while k > 1:
            res = self.transform(res)
            k -= 1

        return res

```
```JS []
var getLucky = function(s, k) {
    // Helper function to sum the digits of a number
    const transform = function(t) {
        let res = 0;
        while (t > 0) {
            res += t % 10;
            t = Math.floor(t / 10);
        }
        return res;
    };
    
    // Convert the string to the sum of its corresponding numeric values
    let res = 0;
    for (let ch of s) {
        let num = ch.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        if (num >= 10) {
            res += num % 10 + Math.floor(num / 10);
        } else {
            res += num;
        }
    }

    // Perform the transformation k-1 times
    while (--k > 0) {
        res = transform(res);
    }

    // Return the final result after k transformations
    return res;
};

```
![Please hit the upvote button (1).png](./images/1.png)

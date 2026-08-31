# ✅ Easiest Possible Approach ✅ Bit Manipulation ✅ Fastest Too

**Author:** millenium103
**Votes:** 55
**Link:** [https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/solutions/4224589/](https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/solutions/4224589/)

---

![Screenshot 2023-10-30 083549.png](./images/0.png)

# YouTube Video Explanation:
[https://youtu.be/L5UX2GeEWkY](https://youtu.be/L5UX2GeEWkY)

**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 200 Subscribers*
*Current Subscribers: 151*

### Intuition

To solve this problem, we need to come up with a custom sorting key for the integers in the array. The key should take into account both the number of 1's in the binary representation and the original integer value. We can achieve this by using a custom sorting function.

### Approach

1. Create a custom sorting function that takes two integers, `x` and `y`, as parameters.
2. Calculate the number of 1's in the binary representation of `x` and `y`. This can be done using the `countBit` function.
3. Compare the counts of 1's in `x` and `y`. If they are equal, compare the original integer values of `x` and `y` to ensure ascending order.
4. Use the custom sorting function to sort the array. The sorting function ensures that integers are sorted first by the count of 1's and then by their original values.

### Complexity Analysis

- Time Complexity: O(N * log N), where N is the number of integers in the array. The sorting operation dominates the time complexity.
- Space Complexity: O(N), as we create a temporary array `res` to store the sorted integers.

This solution provides an efficient way to sort integers by the number of 1's in their binary representation, ensuring both correctness and optimal performance. It utilizes a custom sorting function to meet the specific sorting requirements of the problem.

## Java

```java
class Solution {
    public int[] sortByBits(int[] arr) {
        int n = arr.length;
        int res[] = new int[n];
        for (int i = 0; i < n; i++) {
            res[i] = countBit(arr[i]) * 10001 + arr[i];
        }
        Arrays.sort(res);
        for (int i = 0; i < n; i++) {
            res[i] %= 10001;
        }
        return res;
    }

    private int countBit(int n) {
        int res = 0;
        while (n != 0) {
            res += (n & 1);
            n >>= 1;
        }
        return res;
    }
}
```
## C++
```
class Solution {
public:
    vector<int> sortByBits(vector<int>& arr) {
        int n = arr.size();
        vector<int> res(n);
        for (int i = 0; i < n; i++) {
            res[i] = countBit(arr[i]) * 10001 + arr[i];
        }
        sort(res.begin(), res.end());
        for (int i = 0; i < n; i++) {
            res[i] %= 10001;
        }
        return res;
    }

private:
    int countBit(int n) {
        int res = 0;
        while (n != 0) {
            res += (n & 1);
            n >>= 1;
        }
        return res;
    }
};
```

## Python
```
class Solution(object):
    def sortByBits(self, arr):
        n = len(arr)
        res = [0] * n
        for i in range(n):
            res[i] = self.countBit(arr[i]) * 10001 + arr[i]
        res.sort()
        for i in range(n):
            res[i] %= 10001
        return res

    def countBit(self, n):
        res = 0
        while n != 0:
            res += (n & 1)
            n >>= 1
        return res
        
```

## Javascript
```
var sortByBits = function(arr) {
    const n = arr.length;
    const res = new Array(n);
    for (let i = 0; i < n; i++) {
        res[i] = countBit(arr[i]) * 10001 + arr[i];
    }
    res.sort((a, b) => a - b);
    for (let i = 0; i < n; i++) {
        res[i] %= 10001;
    }
    return res;
};

function countBit(n) {
    let res = 0;
    while (n !== 0) {
        res += (n & 1);
        n >>= 1;
    }
    return res;
}
```

This concise code implementation demonstrates an effective solution for sorting integers based on the number of 1's in their binary representation and their original values, addressing the problem's requirements.

![upvote1.jpeg](./images/1.jpeg)

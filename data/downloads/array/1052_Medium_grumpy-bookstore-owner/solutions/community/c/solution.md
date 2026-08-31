# [Fixed Size Sliding Window Tutorial] Grumpy Bookstore Owner

**Author:** never_get_piped
**Votes:** 25
**Link:** [https://leetcode.com/problems/grumpy-bookstore-owner/solutions/5344005/](https://leetcode.com/problems/grumpy-bookstore-owner/solutions/5344005/)

---

**Topic** :  Sliding Window
Sliding Window problems are problems in which a fixed or variable-size window is moved through a data structure, typically an array or string, to solve problems efficiently based on continuous subsets of elements. This technique is used when we need to find subarrays or substrings according to a given set of conditions. (GFG Reference)

There are two types of sliding window:
- Fixed Size Sliding Window
- Dynamic Size Sliding Window

This post introduces the concept of **Fixed Size Sliding Window** only. If you are interested in **Dynamic Size Sliding Window** and the theory behind it, feel free to check out this tutorial:

[Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/discuss/5344838/dynamic-size-sliding-window-longest-substring-without-repeating-characters)

___

## Fixed Size Sliding Window
**Fixed Size Sliding Window** means that the size of the window or subarray remains constant throughout the process. In this problem, we have a window with a fixed size of `minutes`. In such window, the right pointer of the window will continuously expand, while the left pointer of the window will begin shifting right when the size of the current window reaches its full capacity. 


## Solution
Let's rephrase the question as follow:
```
Given two arrays `customers` and `grumpy` of the same size:
- `customers[i]` represents the points you can earn from customer `i`.
- `grumpy[i]` equals `0` means you can earn `customers[i]` points from customer `i`.

At the same time, you can apply a window of size `minutes` 
such that you can earn all points from `customers[i : i + minutes - 1]`, 
regardless of the value of grumpy.

Determine the maximum pointes you can earn.
```

First, let's calculate the total score we can earn if we do not apply a window. This is denoted by a variable `total`, where it is the sum of `customers[i]` for indices `i` where `grumpy[i]` equals 0.

If we apply a window over the subarray `[i : i + minutes - 1]`, where we can earn all the points of this subarray, the value is simply the sum of `customers[i : i + minutes - 1]`. We denote this sum as `windowAll`. We use `windowPartial` to denote the sum of the `customers` subarray `[i : i + minutes - 1]` where `grumpy[i]` equals `0`.

The new score obtained by applying a window over the subarray is `total - windowPartial + windowAll`.


For calculating `windowPartial` and `windowAll`, we can utilize the **Fixed Size Sliding Window** technique. The for-loop index `i` represents the right pointer, which moves continuously to the right. The left pointer `j` will start moving right when `i + 1 >= minutes`, indicating that the window size has reached its limit and we should prepare for the next move. At the same time, since the window has reached its full limit, the answer should also be updated.



<br/><br/>


```c++ []
class Solution {
public:
    int maxSatisfied(vector<int>& customers, vector<int>& grumpy, int minutes) {
        int ans = 0, total = 0;
        for(int i = 0; i < customers.size(); i++) {
            total += (1 - grumpy[i]) * customers[i];
        }

        int windowAll = 0, windowPartial = 0;
        for(int i = 0; i < customers.size(); i++) {
            windowAll += customers[i];
            windowPartial += ((1 - grumpy[i]) * customers[i]);
            if(i + 1 >= minutes) {
                ans = max(ans, total - windowPartial + windowAll);
                int left = i - minutes + 1;
                windowAll -= customers[left];
                windowPartial -= ((1 - grumpy[left]) * customers[left]);
            }
        }
        return ans;
    }
};
```
```java []
class Solution {
    public int maxSatisfied(int[] customers, int[] grumpy, int minutes) {
        int ans = 0, total = 0;
        for (int i = 0; i < customers.length; i++) {
            total += (1 - grumpy[i]) * customers[i];
        }

        int windowAll = 0, windowPartial = 0;
        for (int i = 0; i < customers.length; i++) {
            windowAll += customers[i];
            windowPartial += ((1 - grumpy[i]) * customers[i]);
            if (i + 1 >= minutes) {
                ans = Math.max(ans, total - windowPartial + windowAll);
                int left = i - minutes + 1;
                windowAll -= customers[left];
                windowPartial -= ((1 - grumpy[left]) * customers[left]);
            }
        }
        return ans;
    }
}
```
```python []
class Solution:
    def maxSatisfied(self, customers: List[int], grumpy: List[int], minutes: int) -> int:
        ans = 0
        total = sum((1 - grumpy[i]) * customers[i] for i in range(len(customers)))

        window_all = 0
        window_partial = 0
        for i in range(len(customers)):
            window_all += customers[i]
            window_partial += (1 - grumpy[i]) * customers[i]
            if i + 1 >= minutes:
                ans = max(ans, total - window_partial + window_all)
                left = i - minutes + 1
                window_all -= customers[left]
                window_partial -= (1 - grumpy[left]) * customers[left]

        return ans
```
```Go []
func maxSatisfied(customers []int, grumpy []int, minutes int) int {
    ans := 0
    total := 0
    n := len(customers)

    for i := 0; i < n; i++ {
        total += (1 - grumpy[i]) * customers[i]
    }

    windowAll := 0
    windowPartial := 0
    for i := 0; i < n; i++ {
        windowAll += customers[i]
        windowPartial += (1 - grumpy[i]) * customers[i]
        if i + 1 >= minutes {
            ans = max(ans, total - windowPartial + windowAll)
            left := i - minutes + 1
            windowAll -= customers[left]
            windowPartial -= (1 - grumpy[left]) * customers[left]
        }
    }

    return ans
}
```
```PHP []
class Solution {

    /**
     * @param Integer[] $customers
     * @param Integer[] $grumpy
     * @param Integer $minutes
     * @return Integer
     */
    function maxSatisfied($customers, $grumpy, $minutes) {
        $ans = 0;
        $total = 0;
        $n = count($customers);

        for ($i = 0; $i < $n; $i++) {
            $total += (1 - $grumpy[$i]) * $customers[$i];
        }

        $windowAll = 0;
        $windowPartial = 0;
        for ($i = 0; $i < $n; $i++) {
            $windowAll += $customers[$i];
            $windowPartial += (1 - $grumpy[$i]) * $customers[$i];
            if ($i + 1 >= $minutes) {
                $ans = max($ans, $total - $windowPartial + $windowAll);
                $left = $i - $minutes + 1;
                $windowAll -= $customers[$left];
                $windowPartial -= (1 - $grumpy[$left]) * $customers[$left];
            }
        }

        return $ans;
    }
}
```
```javascript []
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    let ans = 0;
    let total = 0;
    const n = customers.length;

    for (let i = 0; i < n; i++) {
        total += (1 - grumpy[i]) * customers[i];
    }

    let windowAll = 0;
    let windowPartial = 0;
    for (let i = 0; i < n; i++) {
        windowAll += customers[i];
        windowPartial += (1 - grumpy[i]) * customers[i];
        if (i + 1 >= minutes) {
            ans = Math.max(ans, total - windowPartial + windowAll);
            let left = i - minutes + 1;
            windowAll -= customers[left];
            windowPartial -= (1 - grumpy[left]) * customers[left];
        }
    }

    return ans;
};
```


**Complexity**:
* Time Complexity : `O(n)`
* Space Complexity : `O(1)`

**Feel free to leave a comment if something is confusing, or if you have any suggestions on how I can improve the post.**
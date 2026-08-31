# [Binary Search on Answer Tutorial] Minimum Number of Days to Make m Bouquets

**Author:** never_get_piped
**Votes:** 24
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/solutions/5334518/](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/solutions/5334518/)

---

**Topic** :  Binary Search
Binary search is a search algorithm used to find the position of a target value within a sorted array. It works by repeatedly dividing the search interval in half until the target value is found or the interval is empty. The search interval is halved by comparing the target element with the middle value of the search space. (GFG Reference)

___

## Binary Search on Answer
To understand the concept of **Binary Search on Answer**, I recommend you to go through this [First Bad Version](https://leetcode.com/problems/first-bad-version/description/)  easy practice as a reference first.

Let's pose and address the following question:
```
Is `x` days sufficient to make `m` bouquets?
```

Let's denote the answer to the above question with a function `f`, such that `f(x)` is true when `x` days are sufficient to make `m` bouquets, otherwise, it returns false. The pattern of `f(x)` will appear as follow:
```
false, false, false ... true, true, true ... true
```
The pattern appears as above because if we can use `x` days to make `m` bouquets, we can also make `m` bouquets with `x + n` days for any non-negative integer `n`.

This pattern is similar with [First Bad Version](https://leetcode.com/problems/first-bad-version/description/) and we can solve it with binary search. The only thing we need to handle is adjusting the range for the binary search according to each specific problem situation.



## Solution
Initializing a variable `l` as `1` and `r` as `1000000000` denotes the range for our binary search.

We use `<=` template for our binary search.

Let `mid = l + (r - l) / 2`. If `f(mid)` is true, it means we can use `mid` days to make `m` bouquets. This is a potential answer, and we use `ans` to record it. At the same time, if `f(mid)` is true, we can shift `r` to the left to potentially find a smaller number of days that still satisfies the condition. Otherwise, if `f(mid)` is false, we need to shift `l` to the right as we need to increase the number of days.

To implement `f(x)`, we can iterate through the `bloomDay` array and pick `k` consecutive flowers when is possble starting from each position `i` such that `bloomDay[i] >= x`. We then check if we can form `m` bouquets.


```c++ []
class Solution {
public:
    int minDays(vector<int>& bloomDay, int m, int k) {
        int l = 1, r = 1e9;
        int ans = -1;
        while(l <= r) {
            int mid = l + (r - l) / 2;
            int consecutiveLength = 0, bonquets = 0;
            for(int i = 0; i < bloomDay.size(); i++) {
                if(bloomDay[i] <= mid) {
                    consecutiveLength++;
                    if(consecutiveLength >= k) {
                        consecutiveLength = 0;
                        bonquets++;
                    }
                } else {
                    consecutiveLength = 0;
                }
            }
            if(bonquets >= m) {
                ans = mid;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return ans;
    }
};
```
```java []
class Solution {
    public int minDays(int[] bloomDay, int m, int k) {
        int l = 1, r = 1000000000;
        int ans = -1;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            int consecutiveLength = 0, bouquets = 0;
            for (int i = 0; i < bloomDay.length; i++) {
                if (bloomDay[i] <= mid) {
                    consecutiveLength++;
                    if (consecutiveLength >= k) {
                        consecutiveLength = 0;
                        bouquets++;
                    }
                } else {
                    consecutiveLength = 0;
                }
            }
            if (bouquets >= m) {
                ans = mid;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return ans;
    }
}
```
```python []
class Solution:
    def minDays(self, bloomDay: List[int], m: int, k: int) -> int:
        l, r = 1, 1000000000
        ans = -1
        while l <= r:
            mid = l + (r - l) // 2
            consecutive_length, bouquets = 0, 0
            for bloom in bloomDay:
                if bloom <= mid:
                    consecutive_length += 1
                    if consecutive_length >= k:
                        consecutive_length = 0
                        bouquets += 1
                else:
                    consecutive_length = 0
            if bouquets >= m:
                ans = mid
                r = mid - 1
            else:
                l = mid + 1
        return ans
```
```Go []
func minDays(bloomDay []int, m int, k int) int {
    l, r := 1, int(1e9)
    ans := -1
    for l <= r {
        mid := l + (r - l) / 2
        consecutiveLength, bouquets := 0, 0
        for _, bloom := range bloomDay {
            if bloom <= mid {
                consecutiveLength++
                if consecutiveLength >= k {
                    consecutiveLength = 0
                    bouquets++
                }
            } else {
                consecutiveLength = 0
            }
        }
        if bouquets >= m {
            ans = mid
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return ans
}
```
```PHP []
class Solution {

    /**
     * @param Integer[] $bloomDay
     * @param Integer $m
     * @param Integer $k
     * @return Integer
     */
    function minDays($bloomDay, $m, $k) {
        $l = 1;
        $r = 1000000000;
        $ans = -1;
        while ($l <= $r) {
            $mid = $l + floor(($r - $l) / 2);
            $consecutiveLength = 0;
            $bouquets = 0;
            foreach ($bloomDay as $bloom) {
                if ($bloom <= $mid) {
                    $consecutiveLength++;
                    if ($consecutiveLength >= $k) {
                        $consecutiveLength = 0;
                        $bouquets++;
                    }
                } else {
                    $consecutiveLength = 0;
                }
            }
            if ($bouquets >= $m) {
                $ans = $mid;
                $r = $mid - 1;
            } else {
                $l = $mid + 1;
            }
        }
        return $ans;

    }
}
```
```javascript []
/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    let l = 1, r = 1000000000;
    let ans = -1;
    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);
        let consecutiveLength = 0, bouquets = 0;
        for (let i = 0; i < bloomDay.length; i++) {
            if (bloomDay[i] <= mid) {
                consecutiveLength++;
                if (consecutiveLength >= k) {
                    consecutiveLength = 0;
                    bouquets++;
                }
            } else {
                consecutiveLength = 0;
            }
        }
        if (bouquets >= m) {
            ans = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return ans;
};
```


**Complexity**:
* Time Complexity : `O(n log(max(bloomDay)))`
* Space Complexity : `O(1)`

**Feel free to leave a comment if something is confusing, or if you have any suggestions on how I can improve the post.**
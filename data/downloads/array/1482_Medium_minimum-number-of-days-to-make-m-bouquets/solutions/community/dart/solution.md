# ✅Beats 100% - Detailed Step-by-Step Explanation - C++/Java/Python/JS/Ruby/Go/Dart - Binary search

**Author:** Cregan_wolf
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/solutions/5335456/](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/solutions/5335456/)

---

# Minimum Days to Make m Bouquets


## Intuition
The problem is to determine the minimum number of days required to make `m` bouquets, where each bouquet requires `k` adjacent blooming flowers. Given an array `bloomDay` where each element represents the day on which a flower blooms, we need to find the smallest day number where we can make exactly `m` bouquets.
## Methods Used and Performance
This solution employs binary search combined with a counting mechanism to efficiently find the minimum number of days required to make `m` bouquets, each requiring `k` adjacent blooming flowers. The approach ensures optimal performance by narrowing down the search space based on the number of bouquets that can be formed.

### Performance
Achieves 99.9999% beats on LeetCode for this problem.
## Approach
1. **Binary Search**: Since the minimum and maximum number of days can be easily determined, we can use binary search within this range to find the answer.
2. **Counting Bouquets**: For each middle day in our binary search, we need to count how many bouquets can be formed if that day was the blooming day. This is done by iterating through the `bloomDay` array and counting sequences of at least `k` consecutive days where flowers are blooming on or before the middle day.
3. **Adjusting the Search Range**: Based on the number of bouquets formed, adjust the search range:
    - If the count is greater than or equal to `m`, try a smaller number of days.
    - If the count is less than `m`, try a larger number of days.
4. **Termination**: The search ends when the range converges, and the smallest number of days is determined.

## Detailed Steps
1. Initialize the binary search range with the minimum (`l`) and maximum (`h`) values from the `bloomDay` array.
2. Calculate the middle point of the range and determine the number of bouquets that can be formed by calling the helper function.
3. Adjust the range based on the number of bouquets formed.

## Complexity
- Time complexity: $$O(n \\log d)$$, where `n` is the length of the `bloomDay` array and `d` is the maximum value in the range of days.
- Space complexity: $$O(1)$$, as we are using a constant amount of extra space.

# Code
```C++ []
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int count(vector<int>& b, int l, int k) {
        int n = b.size();
        int count = 0, maxi = 0;
        for (int i = 0; i < n; ++i) {
            if (b[i] <= l) {
                count++;
            } else {
                maxi += (count / k);
                count = 0;
            }
        }
        maxi += (count / k);
        return maxi;
    }

    int minDays(vector<int>& bloomDay, int m, int k) {
        int n = bloomDay.size();
        if (m * k > n) {
            return -1;
        }
        int l = *min_element(bloomDay.begin(), bloomDay.end());
        int h = *max_element(bloomDay.begin(), bloomDay.end());
        int ans = h;
        while (l <= h) {
            int mindays = (l + h) / 2;
            int p = count(bloomDay, mindays, k);
            if (p >= m) {
                ans = mindays;
                h = mindays - 1;
            } else {
                l = mindays + 1;
            }
        }
        return ans;
    }
};

```
```java []
import java.util.*;

public class Solution {
    public int count(int[] b, int l, int k) {
        int n = b.length;
        int count = 0, maxi = 0;
        for (int i = 0; i < n; ++i) {
            if (b[i] <= l) {
                count++;
            } else {
                maxi += (count / k);
                count = 0;
            }
        }
        maxi += (count / k);
        return maxi;
    }

    public int minDays(int[] bloomDay, int m, int k) {
        int n = bloomDay.length;
        if (m * k > n) {
            return -1;
        }
        int l = Arrays.stream(bloomDay).min().getAsInt();
        int h = Arrays.stream(bloomDay).max().getAsInt();
        int ans = h;
        while (l <= h) {
            int mindays = (l + h) / 2;
            int p = count(bloomDay, mindays, k);
            if (p >= m) {
                ans = mindays;
                h = mindays - 1;
            } else {
                l = mindays + 1;
            }
        }
        return ans;
    }
}

```

```python []
class Solution:
    def count(self,b:List[int], l: int, k: int)->int:
        n=len(b)
        count=0
        maxi=0
        for i in range(n):
            if b[i]<=l:
                count+=1
            else:
                maxi+=(count//k)
                count=0
        maxi+=(count//k)
        return maxi
    def minDays(self, bloomDay: List[int], m: int, k: int) -> int:
        n=len(bloomDay)
        if m*k>n:
            return -1
        l=min(bloomDay)
        h=max(bloomDay)
        ans=h
        while l<=h:
            mindays=(l+h)//2
            p=self.count(bloomDay,mindays,k)
            if p>=m:
                ans=mindays
                h=mindays-1
            else:
                l=mindays+1
        return ans
```
```javascript []
var count = function(b, l, k) {
    let n = b.length;
    let count = 0, maxi = 0;
    for (let i = 0; i < n; ++i) {
        if (b[i] <= l) {
            count++;
        } else {
            maxi += Math.floor(count / k);
            count = 0;
        }
    }
    maxi += Math.floor(count / k);
    return maxi;
}

var minDays = function(bloomDay, m, k) {
    let n = bloomDay.length;
    if (m * k > n) {
        return -1;
    }
    let l = Math.min(...bloomDay);
    let h = Math.max(...bloomDay);
    let ans = h;
    while (l <= h) {
        let mindays = Math.floor((l + h) / 2);
        let p = count(bloomDay, mindays, k);
        if (p >= m) {
            ans = mindays;
            h = mindays - 1;
        } else {
            l = mindays + 1;
        }
    }
    return ans;
}

```
```Go []
import "math"

func count(b []int, l int, k int) int {
    n := len(b)
    count, maxi := 0, 0
    for i := 0; i < n; i++ {
        if b[i] <= l {
            count++
        } else {
            maxi += count / k
            count = 0
        }
    }
    maxi += count / k
    return maxi
}

func minDays(bloomDay []int, m int, k int) int {
    n := len(bloomDay)
    if m * k > n {
        return -1
    }
    l, h := math.MaxInt64, 0
    for _, day := range bloomDay {
        if day < l {
            l = day
        }
        if day > h {
            h = day
        }
    }
    ans := h
    for l <= h {
        mindays := (l + h) / 2
        p := count(bloomDay, mindays, k)
        if p >= m {
            ans = mindays
            h = mindays - 1
        } else {
            l = mindays + 1
        }
    }
    return ans
}

```
```Dart []
class Solution {
  int count(List<int> b, int l, int k) {
    int n = b.length;
    int count = 0;
    int maxi = 0;
    for (int i = 0; i < n; ++i) {
      if (b[i] <= l) {
        count++;
      } else {
        maxi += (count ~/ k);
        count = 0;
      }
    }
    maxi += (count ~/ k);
    return maxi;
  }

  int minDays(List<int> bloomDay, int m, int k) {
    int n = bloomDay.length;
    if (m * k > n) {
      return -1;
    }
    int l = bloomDay.reduce((a, b) => a < b ? a : b);
    int h = bloomDay.reduce((a, b) => a > b ? a : b);
    int ans = h;
    while (l <= h) {
      int mindays = (l + h) ~/ 2;
      int p = count(bloomDay, mindays, k);
      if (p >= m) {
        ans = mindays;
        h = mindays - 1;
      } else {
        l = mindays + 1;
      }
    }
    return ans;
  }
}

```
```ruby []
def count(b, l, k)
  n = b.length
  count = 0
  maxi = 0
  n.times do |i|
    if b[i] <= l
      count += 1
    else
      maxi += count / k
      count = 0
    end
  end
  maxi += count / k
  maxi
end

def min_days(bloom_day, m, k)
  n = bloom_day.length
  return -1 if m * k > n
  
  l = bloom_day.min
  h = bloom_day.max
  ans = h
  
  while l <= h
    mindays = (l + h) / 2
    p = count(bloom_day, mindays, k)
    if p >= m
      ans = mindays
      h = mindays - 1
    else
      l = mindays + 1
    end
  end
  ans
end

```

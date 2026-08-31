# 🔥🚀 Ultimate Solution | 💯 Beats 100% | 🔍 Binary Search + 🧹 Sorting + 💡 Greedy 🏆

**Author:** shubhamrajpoot_
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/solutions/6118976/](https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/solutions/6118976/)

---

# \uD83E\uDDE0 Intuition
We want to select as many numbers from 1 to n without exceeding a maxSum, ensuring no number is in the banned list. We'll use sorting and binary search for efficiency. \uD83D\uDD0D

---

# \uD83D\uDD04 Approach
1. Sort the Banned List: Helps us perform a fast binary search. \u26A1
2. Binary Search: For each number i from 1 to n, check if it's in banned. If not, add it to the sum. \uD83D\uDCCA
3. Sum Check: Stop adding numbers once the sum exceeds maxSum. \uD83D\uDEAB\uD83D\uDCB0
4. Early Termination: Exit as soon as the sum exceeds maxSum to save time. \u23F1\uFE0F

---

# Complexity
## \u23F1\uFE0F Time Complexity
- Sorting banned: O(m log m) (where m is size of banned) \uD83D\uDCCF
- Binary Search for each number from 1 to n: *O(n log m)* \uD83D\uDD0D

## \uD83D\uDCBE Space Complexity
- Space for banned list: *O(m)* \uD83D\uDDC2\uFE0F

---

# Code
```cpp []
class Solution {
public:
    bool binary_search(vector<int>& arr , int target)
    {
        int n = arr.size();
        int start = 0 , end = n-1 ;
        int mid = start + (end - start)/2 ;

        while(start <= end)
        {
            if(arr[mid] == target)
            {
                return true ;
            }
            else if(arr[mid] > target)
            {
                end = mid -1 ;
            }
            else{
                start = mid + 1 ;
            }
            mid = start + (end - start) /2 ;

        }
        return false ;
    }
    int maxCount(vector<int>& banned, int n, int maxSum) {
        int cnt = 0 ;
        long long unsigned sum = 0 ;
        sort(banned.begin(), banned.end()) ;

        for(int i = 1 ; i <= n ; i++)
        {
            if( !binary_search(banned , i))
            {
                sum += i ;
                if(sum <= maxSum)
                {
                    cnt++ ;
                }
                else
                {
                    return cnt ;
                }
            }
        }
        return cnt ;
        
    }
};
```

```java []
import java.util.Arrays;

class Solution {
    public boolean binarySearch(int[] arr, int target) {
        int n = arr.length;
        int start = 0, end = n - 1;
        int mid = start + (end - start) / 2;

        while (start <= end) {
            if (arr[mid] == target) {
                return true;
            } else if (arr[mid] > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
            mid = start + (end - start) / 2;
        }
        return false;
    }

    public int maxCount(int[] banned, int n, int maxSum) {
        int cnt = 0;
        long sum = 0;
        Arrays.sort(banned);

        for (int i = 1; i <= n; i++) {
            if (!binarySearch(banned, i)) {
                sum += i;
                if (sum <= maxSum) {
                    cnt++;
                } else {
                    return cnt;
                }
            }
        }
        return cnt;
    }
}


```
```javascript []
class Solution {
    binarySearch(arr, target) {
        let n = arr.length;
        let start = 0, end = n - 1;
        let mid = Math.floor(start + (end - start) / 2);

        while (start <= end) {
            if (arr[mid] === target) {
                return true;
            } else if (arr[mid] > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
            mid = Math.floor(start + (end - start) / 2);
        }
        return false;
    }

    maxCount(banned, n, maxSum) {
        let cnt = 0;
        let sum = 0;
        banned.sort((a, b) => a - b);

        for (let i = 1; i <= n; i++) {
            if (!this.binarySearch(banned, i)) {
                sum += i;
                if (sum <= maxSum) {
                    cnt++;
                } else {
                    return cnt;
                }
            }
        }
        return cnt;
    }
}


```
```python []
class Solution:
    def binary_search(self, arr, target):
        n = len(arr)
        start, end = 0, n - 1

        while start <= end:
            mid = start + (end - start) // 2
            if arr[mid] == target:
                return True
            elif arr[mid] > target:
                end = mid - 1
            else:
                start = mid + 1

        return False

    def maxCount(self, banned, n, maxSum):
        cnt = 0
        sum_ = 0
        banned.sort()

        for i in range(1, n + 1):
            if not self.binary_search(banned, i):
                sum_ += i
                if sum_ <= maxSum:
                    cnt += 1
                else:
                    return cnt
        return cnt


```
```ruby []
class Solution
  def binary_search(arr, target)
    n = arr.size
    start = 0
    end_index = n - 1

    while start <= end_index
      mid = start + (end_index - start) / 2

      if arr[mid] == target
        return true
      elsif arr[mid] > target
        end_index = mid - 1
      else
        start = mid + 1
      end

    end
    false
  end

  def max_count(banned, n, max_sum)
    cnt = 0
    sum = 0
    banned.sort!

    (1..n).each do |i|
      unless binary_search(banned, i)
        sum += i
        if sum <= max_sum
          cnt += 1
        else
          return cnt
        end
      end
    end
    cnt
  end
end


```
```go []
package main

import (
	"sort"
)

type Solution struct{}

func (s *Solution) binarySearch(arr []int, target int) bool {
	n := len(arr)
	start, end := 0, n-1

	for start <= end {
		mid := start + (end-start)/2
		if arr[mid] == target {
			return true
		} else if arr[mid] > target {
			end = mid - 1
		} else {
			start = mid + 1
		}
	}
	return false
}

func (s *Solution) maxCount(banned []int, n int, maxSum int) int {
	cnt := 0
	sum := 0
	sort.Ints(banned)

	for i := 1; i <= n; i++ {
		if !s.binarySearch(banned, i) {
			sum += i
			if sum <= maxSum {
				cnt++
			} else {
				return cnt
			}
		}
	}
	return cnt
}


``` 
```rust []
use std::cmp::Ordering;

struct Solution;

impl Solution {
    fn binary_search(arr: &Vec<i32>, target: i32) -> bool {
        let mut start = 0;
        let mut end = arr.len() as i32 - 1;

        while start <= end {
            let mid = start + (end - start) / 2;
            match arr[mid as usize].cmp(&target) {
                Ordering::Equal => return true,
                Ordering::Greater => end = mid - 1,
                Ordering::Less => start = mid + 1,
            }
        }
        false
    }

    pub fn max_count(banned: Vec<i32>, n: i32, max_sum: i32) -> i32 {
        let mut cnt = 0;
        let mut sum: u64 = 0;
        let mut banned = banned;
        banned.sort_unstable();

        for i in 1..=n {
            if !Self::binary_search(&banned, i) {
                sum += i as u64;
                if sum <= max_sum as u64 {
                    cnt += 1;
                } else {
                    return cnt;
                }
            }
        }
        cnt
    }
}


```
```c# []
using System;
using System.Collections.Generic;
using System.Linq;

public class Solution 
{
    private bool BinarySearch(List<int> arr, int target)
    {
        int n = arr.Count;
        int start = 0, end = n - 1;
        int mid = start + (end - start) / 2;

        while (start <= end)
        {
            if (arr[mid] == target)
            {
                return true;
            }
            else if (arr[mid] > target)
            {
                end = mid - 1;
            }
            else
            {
                start = mid + 1;
            }
            mid = start + (end - start) / 2;
        }
        return false;
    }

    public int MaxCount(IList<int> banned, int n, int maxSum) 
    {
        int cnt = 0;
        long sum = 0;
        List<int> sortedBanned = banned.OrderBy(x => x).ToList();

        for (int i = 1; i <= n; i++)
        {
            if (!BinarySearch(sortedBanned, i))
            {
                sum += i;
                if (sum <= maxSum)
                {
                    cnt++;
                }
                else
                {
                    return cnt;
                }
            }
        }
        return cnt;
    }
}


```

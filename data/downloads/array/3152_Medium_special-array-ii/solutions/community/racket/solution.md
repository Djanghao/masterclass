# 🌟🧠 Simple & 🔢 Efficient Binary Search Approach 🌟📈 | Optimised Code 🔑

**Author:** shubhamrajpoot_
**Votes:** 1
**Link:** [https://leetcode.com/problems/special-array-ii/solutions/6130151/](https://leetcode.com/problems/special-array-ii/solutions/6130151/)

---

# Intuition \uD83D\uDCA1
- A "**special**" subarray has no two adjacent elements with the same parity.
By precomputing invalid indices and using binary search, we can efficiently check if a query subarray contains any violations, ensuring fast queries even for large inputs.

---


# Approach \uD83E\uDD14
-     Identify invalid indices where adjacent elements in nums have the same parity (both even or both odd).
-     For each query, perform a binary search on the invalidArray to check if any invalid index is within the query range.
-     If an invalid index is found in the range, return false;
-     otherwise, return true.

---


# Complexity
- Time complexity:
$$O(N + Q * log M), where Q is the number of queries.$$

- Space complexity:
$$O(N + Q).$$

---


# Code
```cpp []
class Solution {
public:
    vector<bool> isArraySpecial(vector<int>& nums, vector<vector<int>>& queries) {
        
        vector<int> invalidArray ; 

        for(int i = 0 ; i < nums.size()-1 ; i++) 
        {
            if((nums[i] % 2) == (nums[i+1] % 2))
            {
                invalidArray.push_back(i) ;
            }
        }

        vector<bool>ans ;

        for(const auto &query :queries)
        {
            int start = query[0] ;
            int end = query[1] -1  ;

            auto lower = lower_bound(invalidArray.begin(), invalidArray.end(), start);
            if(lower != invalidArray.end() && *lower <= end)
            {
                ans.push_back(false) ;
            }
            else
            {
                ans.push_back(true) ; 
            }
        }
        return ans ; 
    }
};


```
```Java []
import java.util.*;

class Solution {
    public List<Boolean> isArraySpecial(List<Integer> nums, List<List<Integer>> queries) {
        List<Integer> invalidArray = new ArrayList<>();
        for (int i = 0; i < nums.size() - 1; i++) {
            if (nums.get(i) % 2 == nums.get(i + 1) % 2) {
                invalidArray.add(i);
            }
        }

        List<Boolean> ans = new ArrayList<>();
        for (List<Integer> query : queries) {
            int start = query.get(0);
            int end = query.get(1) - 1;
            int lower = Collections.binarySearch(invalidArray, start);
            if (lower >= 0 && invalidArray.get(lower) <= end) {
                ans.add(false);
            } else {
                ans.add(true);
            }
        }
        return ans;
    }
}

```
```python []
class Solution:
    def isArraySpecial(self, nums, queries):
        invalidArray = []
        for i in range(len(nums) - 1):
            if nums[i] % 2 == nums[i + 1] % 2:
                invalidArray.append(i)
        
        ans = []
        for query in queries:
            start, end = query[0], query[1] - 1
            lower = bisect.bisect_left(invalidArray, start)
            if lower < len(invalidArray) and invalidArray[lower] <= end:
                ans.append(False)
            else:
                ans.append(True)
        return ans

```
```ruby []
class Solution
  def isArraySpecial(nums, queries)
    invalid_array = []
    (0...(nums.length - 1)).each do |i|
      invalid_array.push(i) if nums[i] % 2 == nums[i + 1] % 2
    end
    
    ans = []
    queries.each do |query|
      start, self_end = query
      self_end -= 1
      lower = invalid_array.bsearch_index { |x| x >= start } || invalid_array.size
      if lower < invalid_array.size && invalid_array[lower] <= self_end
        ans.push(false)
      else
        ans.push(true)
      end
    end
    ans
  end
end

```
```javascript []
class Solution {
    isArraySpecial(nums, queries) {
        let invalidArray = [];
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] % 2 === nums[i + 1] % 2) {
                invalidArray.push(i);
            }
        }

        let ans = [];
        for (let query of queries) {
            let [start, end] = query;
            end -= 1;
            let lower = this.binarySearch(invalidArray, start);
            if (lower !== -1 && invalidArray[lower] <= end) {
                ans.push(false);
            } else {
                ans.push(true);
            }
        }
        return ans;
    }

    binarySearch(arr, target) {
        let left = 0, right = arr.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] < target) {
                left = mid + 1;
            } else if (arr[mid] > target) {
                right = mid - 1;
            } else {
                return mid;
            }
        }
        return left;
    }
}

```
```C# []
using System;
using System.Collections.Generic;

public class Solution {
    public IList<bool> IsArraySpecial(IList<int> nums, IList<IList<int>> queries) {
        List<int> invalidArray = new List<int>();
        for (int i = 0; i < nums.Count - 1; i++) {
            if (nums[i] % 2 == nums[i + 1] % 2) {
                invalidArray.Add(i);
            }
        }

        List<bool> ans = new List<bool>();
        foreach (var query in queries) {
            int start = query[0], end = query[1] - 1;
            int lower = invalidArray.BinarySearch(start);
            if (lower >= 0 && invalidArray[lower] <= end) {
                ans.Add(false);
            } else {
                ans.Add(true);
            }
        }
        return ans;
    }
}

```
```TypeScript []
class Solution {
    isArraySpecial(nums: number[], queries: number[][]): boolean[] {
        const invalidArray: number[] = [];
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] % 2 === nums[i + 1] % 2) {
                invalidArray.push(i);
            }
        }

        const ans: boolean[] = [];
        for (const query of queries) {
            let [start, end] = query;
            end -= 1;
            let lower = this.binarySearch(invalidArray, start);
            if (lower !== -1 && invalidArray[lower] <= end) {
                ans.push(false);
            } else {
                ans.push(true);
            }
        }
        return ans;
    }

    binarySearch(arr: number[], target: number): number {
        let left = 0, right = arr.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] < target) {
                left = mid + 1;
            } else if (arr[mid] > target) {
                right = mid - 1;
            } else {
                return mid;
            }
        }
        return left;
    }
}

```
```Dart []
class Solution {
  List<bool> isArraySpecial(List<int> nums, List<List<int>> queries) {
    List<int> invalidArray = [];
    for (int i = 0; i < nums.length - 1; i++) {
      if (nums[i] % 2 == nums[i + 1] % 2) {
        invalidArray.add(i);
      }
    }

    List<bool> ans = [];
    for (var query in queries) {
      int start = query[0], end = query[1] - 1;
      int lower = binarySearch(invalidArray, start);
      if (lower != -1 && invalidArray[lower] <= end) {
        ans.add(false);
      } else {
        ans.add(true);
      }
    }
    return ans;
  }

  int binarySearch(List<int> arr, int target) {
    int left = 0, right = arr.length - 1;
    while (left <= right) {
      int mid = (left + right) ~/ 2;
      if (arr[mid] < target) {
        left = mid + 1;
      } else if (arr[mid] > target) {
        right = mid - 1;
      } else {
        return mid;
      }
    }
    return left;
  }
}

```
```Scala []
object Solution {
  def isArraySpecial(nums: Array[Int], queries: Array[Array[Int]]): Array[Boolean] = {
    val invalidArray = nums.indices.dropRight(1).filter(i => nums(i) % 2 == nums(i + 1) % 2)
    
    queries.map { case Array(start, end) =>
      val lower = invalidArray.indexWhere(_ >= start)
      if (lower != -1 && invalidArray(lower) <= end - 1) false else true
    }
  }
}

```
```Racket []
(define (is-array-special nums queries)
  (define invalid-array
    (for/list ([i (in-range (sub1 (length nums)))) 
              #:when (= (modulo (list-ref nums i) 2) (modulo (list-ref nums (add1 i)) 2)))
      i))
  (define (binary-search arr target)
    (define (helper low high)
      (if (> low high) low
          (let ((mid (quotient (+ low high) 2)))
            (cond [(< (list-ref arr mid) target) (helper (+ mid 1) high)]
                  [(> (list-ref arr mid) target) (helper low (- mid 1))]
                  [else mid]))))
    (helper 0 (sub1 (length arr))))
  (for/list ([query queries])
    (define start (first query))
    (define end (- (second query) 1))
    (define lower (binary-search invalid-array start))
    (if (and (< lower (length invalid-array)) (<= (list-ref invalid-array lower) end))
        #f
        #t)))

```



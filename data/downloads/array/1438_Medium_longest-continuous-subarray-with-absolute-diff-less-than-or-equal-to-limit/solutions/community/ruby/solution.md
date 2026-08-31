# ✔️ Beats 100% : Deque : Detailed Step-by-Step Explanation - C++/Java/Python/JS/Ruby/Go/Swift/Kotlin

**Author:** Cregan_wolf
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/solutions/5355650/](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/solutions/5355650/)

---

# Intuition
The problem requires finding the longest subarray where the absolute difference between the maximum and minimum element in the subarray is less than or equal to a given limit. My initial approach would involve using two deques (double-ended queues) to efficiently track the maximum and minimum elements in the current window of the array.

# Approach
1. Use two deques (`dec` for decreasing and `inc` for increasing) to maintain the maximum and minimum elements of the current window of the array.
2. Iterate through the array with two pointers (`i` and `j`), where `j` represents the end of the current window and `i` adjusts the start of the window to maintain the condition.
3. For each element `nums[j]`, update both deques:
   - Update the `dec` deque by removing elements that are smaller than the current element (`nums[j]`).
   - Update the `inc` deque by removing elements that are larger than the current element (`nums[j]`).
4. Check the condition `dec.front() - inc.front() > limit`. If true, increment `i` to shrink the window until the condition is satisfied.
5. Calculate the maximum length of the subarray satisfying the condition during each iteration.

# Complexity
- Time complexity: $$O(n)$$, where \\( n \\) is the number of elements in the array. Each element is processed at most twice (once in each deque), leading to linear time complexity.
- Space complexity: $$O(n)$$ due to the storage of deques which can grow up to the size of the array.

# Code
```C++ []
class Solution {
public:
    int longestSubarray(vector<int>& nums, int limit) {
        deque<int> dec;
        deque<int>inc;
        int n=nums.size();
        int i=0;
        int ans=0;
        for(int j=0;j<n;j++)
        {
            while(!dec.empty()&&nums[j]>dec.back())
            {
                dec.pop_back();
            }
            dec.push_back(nums[j]);
            while(!inc.empty()&&nums[j]<inc.back())
            {
                inc.pop_back();
            }
            inc.push_back(nums[j]);
            while(dec.front()-inc.front()>limit)
            {
                if(dec.front()==nums[i])
                {
                    dec.pop_front();
                }
                if(inc.front()==nums[i])
                {
                    inc.pop_front();
                }
                i++;
            }
            ans=max(ans,j-i+1);
        }
        return ans;
    }
};

```
```python []
from collections import deque
from typing import List

class Solution:
    def longestSubarray(self, nums: List[int], limit: int) -> int:
        dec = deque()
        inc = deque()
        n = len(nums)
        i = 0
        ans = 0
        
        for j in range(n):
            while dec and nums[j] > dec[-1]:
                dec.pop()
            dec.append(nums[j])
            
            while inc and nums[j] < inc[-1]:
                inc.pop()
            inc.append(nums[j])
            
            while dec[0] - inc[0] > limit:
                if dec[0] == nums[i]:
                    dec.popleft()
                if inc[0] == nums[i]:
                    inc.popleft()
                i += 1
            
            ans = max(ans, j - i + 1)
        
        return ans

```
```C# []
using System;
using System.Collections.Generic;

public class Solution {
    public int LongestSubarray(int[] nums, int limit) {
        var dec = new LinkedList<int>();
        var inc = new LinkedList<int>();
        int n = nums.Length;
        int i = 0;
        int ans = 0;
        
        for (int j = 0; j < n; j++) {
            while (dec.Count > 0 && nums[j] > dec.Last.Value) {
                dec.RemoveLast();
            }
            dec.AddLast(nums[j]);
            
            while (inc.Count > 0 && nums[j] < inc.Last.Value) {
                inc.RemoveLast();
            }
            inc.AddLast(nums[j]);
            
            while (dec.First.Value - inc.First.Value > limit) {
                if (dec.First.Value == nums[i]) {
                    dec.RemoveFirst();
                }
                if (inc.First.Value == nums[i]) {
                    inc.RemoveFirst();
                }
                i++;
            }
            
            ans = Math.Max(ans, j - i + 1);
        }
        
        return ans;
    }
}

```

```java []
import java.util.ArrayDeque;
import java.util.Deque;

class Solution {
    public int longestSubarray(int[] nums, int limit) {
        Deque<Integer> dec = new ArrayDeque<>();
        Deque<Integer> inc = new ArrayDeque<>();
        int n = nums.length;
        int i = 0;
        int ans = 0;
        
        for (int j = 0; j < n; j++) {
            while (!dec.isEmpty() && nums[j] > dec.peekLast()) {
                dec.pollLast();
            }
            dec.offerLast(nums[j]);
            
            while (!inc.isEmpty() && nums[j] < inc.peekLast()) {
                inc.pollLast();
            }
            inc.offerLast(nums[j]);
            
            while (dec.peekFirst() - inc.peekFirst() > limit) {
                if (dec.peekFirst() == nums[i]) {
                    dec.pollFirst();
                }
                if (inc.peekFirst() == nums[i]) {
                    inc.pollFirst();
                }
                i++;
            }
            
            ans = Math.max(ans, j - i + 1);
        }
        
        return ans;
    }
}

```
```Go []
package main

import (
	"container/deque"
)

func longestSubarray(nums []int, limit int) int {
	var dec, inc deque.Deque
	n := len(nums)
	i := 0
	ans := 0

	for j := 0; j < n; j++ {
		for dec.Len() > 0 && nums[j] > dec.Back().(int) {
			dec.PopBack()
		}
		dec.PushBack(nums[j])

		for inc.Len() > 0 && nums[j] < inc.Back().(int) {
			inc.PopBack()
		}
		inc.PushBack(nums[j])

		for dec.Front().(int) - inc.Front().(int) > limit {
			if dec.Front().(int) == nums[i] {
				dec.PopFront()
			}
			if inc.Front().(int) == nums[i] {
				inc.PopFront()
			}
			i++
		}

		ans = max(ans, j - i + 1)
	}

	return ans
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	nums := []int{8, 2, 4, 7}
	limit := 4
	println(longestSubarray(nums, limit))
}

```
```ruby []
class Solution
  def longest_subarray(nums, limit)
    dec = []
    inc = []
    n = nums.length
    i = 0
    ans = 0
    
    n.times do |j|
      while !dec.empty? && nums[j] > dec.last
        dec.pop
      end
      dec.push(nums[j])
      
      while !inc.empty? && nums[j] < inc.last
        inc.pop
      end
      inc.push(nums[j])
      
      while dec.first - inc.first > limit
        dec.shift if dec.first == nums[i]
        inc.shift if inc.first == nums[i]
        i += 1
      end
      
      ans = [ans, j - i + 1].max
    end
    
    ans
  end
end

```

```javascript []
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    const dec = [];
    const inc = [];
    const n = nums.length;
    let i = 0;
    let ans = 0;
    
    for (let j = 0; j < n; j++) {
        while (dec.length > 0 && nums[j] > dec[dec.length - 1]) {
            dec.pop();
        }
        dec.push(nums[j]);
        
        while (inc.length > 0 && nums[j] < inc[inc.length - 1]) {
            inc.pop();
        }
        inc.push(nums[j]);
        
        while (dec[0] - inc[0] > limit) {
            if (dec[0] === nums[i]) {
                dec.shift();
            }
            if (inc[0] === nums[i]) {
                inc.shift();
            }
            i++;
        }
        
        ans = Math.max(ans, j - i + 1);
    }
    
    return ans;
};

```
```Swift []
import Foundation

class Solution {
    func longestSubarray(_ nums: [Int], _ limit: Int) -> Int {
        var dec = [Int]()
        var inc = [Int]()
        let n = nums.count
        var i = 0
        var ans = 0
        
        for j in 0..<n {
            while !dec.isEmpty && nums[j] > dec.last! {
                dec.removeLast()
            }
            dec.append(nums[j])
            
            while !inc.isEmpty && nums[j] < inc.last! {
                inc.removeLast()
            }
            inc.append(nums[j])
            
            while dec.first! - inc.first! > limit {
                if dec.first! == nums[i] {
                    dec.removeFirst()
                }
                if inc.first! == nums[i] {
                    inc.removeFirst()
                }
                i += 1
            }
            
            ans = max(ans, j - i + 1)
        }
        
        return ans
    }
}

// Example usage:
let solution = Solution()
let nums = [8, 2, 4, 7]
let limit = 4
print(solution.longestSubarray(nums, limit)) // Output: 2

```
```Kotlin []
import java.util.*

class Solution {
    fun longestSubarray(nums: IntArray, limit: Int): Int {
        val dec = LinkedList<Int>()
        val inc = LinkedList<Int>()
        val n = nums.size
        var i = 0
        var ans = 0

        for (j in 0 until n) {
            while (dec.isNotEmpty() && nums[j] > dec.last) {
                dec.removeLast()
            }
            dec.add(nums[j])

            while (inc.isNotEmpty() && nums[j] < inc.last) {
                inc.removeLast()
            }
            inc.add(nums[j])

            while (dec.first - inc.first > limit) {
                if (dec.first == nums[i]) {
                    dec.removeFirst()
                }
                if (inc.first == nums[i]) {
                    inc.removeFirst()
                }
                i++
            }

            ans = maxOf(ans, j - i + 1)
        }

        return ans
    }
}

fun main() {
    val solution = Solution()
    val nums = intArrayOf(8, 2, 4, 7)
    val limit = 4
    println(solution.longestSubarray(nums, limit)) // Output: 2
}

```

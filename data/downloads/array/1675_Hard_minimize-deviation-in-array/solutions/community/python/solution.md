# Clean Codes🔥🔥|| Full Explanation✅|| Priority Queue✅|| C++|| Java|| Python3

**Author:** N7_BLACKHAT
**Votes:** 44
**Link:** [https://leetcode.com/problems/minimize-deviation-in-array/solutions/3223767/](https://leetcode.com/problems/minimize-deviation-in-array/solutions/3223767/)

---

# Intuition :
- Here we have to find the minimum deviation of an array of integers. The minimum deviation is defined as the difference between the maximum and minimum values of the array, where each value can be either the original value or twice the original value (if it is odd).
<!-- Describe your first thoughts on how to solve this problem. -->

# Explanation to Approach :
- First, check if the input array is null or empty. If it is, it returns the maximum integer value.
- Then, initialize a priority queue called "evens" to hold the even numbers in the array (or the doubled odd numbers).
```
PriorityQueue<Integer> evens = new PriorityQueue<>(nums.length, Collections.reverseOrder());

```
- Also initialize a variable "min" to hold the current minimum value in the array.
```
int min = Integer.MAX_VALUE;

```
- Next,loop through each element of the array:
1. If the element is even, it adds it to the "evens" priority queue and update "min" if it is smaller than the current value.
```
if (num % 2 == 0) {
    evens.offer(num);
    min = Math.min(num, min);
}

```
2. If the element is odd, it doubles it and adds it to the "evens" priority queue, and update "min" if it is smaller than the new value.
```
else {
    evens.offer(num * 2);
    min = Math.min(num * 2, min);
}            

```
- After processing all elements,initialize a variable "res" to the maximum integer value.
- Then loop while the maximum element in the "evens" priority queue is even:
- Remove the maximum element from the queue and calculate the difference between it and the current minimum value ("min").
- Update "res" to be the minimum between the current "res" and this difference.
```
while (evens.peek() % 2 == 0) {
    int max = evens.poll();
    res = Math.min(res, max - min);

```
- Divide the maximum element by 2 and add the new value to the "evens" priority queue.
```
int newNum = max / 2; 
evens.offer(newNum);

```
- Update "min" if the new value is smaller than the current minimum.
```
min = Math.min(min, newNum); 

```
- Finally, calculate the difference between the current maximum value in the "evens" priority queue and the current minimum value ("min"), and update "res" to be the minimum between the current "res" and this difference.
```
res = Math.min(evens.peek() - min, res);

```
- Return the final value of "res".
```
return res;

```
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity : O(M logN)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity : O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A
```
*Let's Code it Up .
There may be minor syntax difference in C++ and Python*
# Codes [C++ |Java |Python3] :
```C++ []
#include <queue>
#include <vector>
#include <algorithm>

class Solution {
public:
    int minimumDeviation(std::vector<int>& nums) {
        if (nums.empty()) {
            return INT_MAX;
        }

        std::priority_queue<int> evens;
        int min = INT_MAX;

        for (int num : nums) {
            if (num % 2 == 0) {
                evens.push(num);
                min = std::min(num, min);
            } else {
                evens.push(num * 2);
                min = std::min(num * 2, min);
            }
        }

        int res = INT_MAX;
        while (evens.top() % 2 == 0) {
            int max = evens.top();
            evens.pop();
            res = std::min(res, max - min);
            int newNum = max / 2;
            evens.push(newNum);
            min = std::min(min, newNum);
        }

        res = std::min(evens.top() - min, res);
        return res;
    }
};
```
```Java []
class Solution 
{
    public int minimumDeviation(int[] nums) 
    {
        if (nums == null || nums.length == 0) 
        {
            return Integer.MAX_VALUE;
        }

    PriorityQueue<Integer> evens = new PriorityQueue<>(nums.length, Collections.reverseOrder());
    int min = Integer.MAX_VALUE;
    
    for (int num : nums) 
    {
        if (num % 2 == 0) {
            evens.offer(num);
            min = Math.min(num, min);
        } 
        else {
            evens.offer(num * 2);
            min = Math.min(num * 2, min);
        }            
    }
    
    int res = Integer.MAX_VALUE;
    while (evens.peek() % 2 == 0) {
        int max = evens.poll();
        res = Math.min(res, max - min);
        int newNum = max / 2; 
        evens.offer(newNum);
        min = Math.min(min, newNum); 
    }
    res = Math.min(evens.peek() - min, res);
    return res;
}
}
```
```Python []
import heapq

class Solution:
    def minimumDeviation(self, nums: List[int]) -> int:
        if not nums:
            return float('inf')
        
        evens = []
        min_val = float('inf')
        
        for num in nums:
            if num % 2 == 0:
                heapq.heappush(evens, -num)
                min_val = min(num, min_val)
            else:
                heapq.heappush(evens, -num * 2)
                min_val = min(num * 2, min_val)
                
        res = float('inf')
        while evens[0] % 2 == 0:
            max_val = -heapq.heappop(evens)
            res = min(res, max_val - min_val)
            new_num = max_val // 2
            heapq.heappush(evens, -new_num)
            min_val = min(new_num, min_val)
            
        res = min(-evens[0] - min_val, res)
        return res
```
# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
![ezgif-3-22a360561c.gif](./images/0.gif)


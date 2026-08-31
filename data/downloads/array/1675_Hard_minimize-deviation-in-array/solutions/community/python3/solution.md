# Day 55 || Priority_Queue || Easiest Beginner Friendly Sol

**Author:** singhabhinash
**Votes:** 313
**Link:** [https://leetcode.com/problems/minimize-deviation-in-array/solutions/3223541/](https://leetcode.com/problems/minimize-deviation-in-array/solutions/3223541/)

---

# Intuition of this Problem:
The intuition behind this logic is to reduce the maximum difference between any two elements in the array by either decreasing the maximum value or increasing the minimum value.

By transforming all odd numbers to even numbers, we can always divide even numbers by 2, so the maximum value in the array can be reduced to its minimum possible value. We also keep track of the minimum value in the array, since we can only increase it by multiplying it by 2.

We then repeatedly pop the maximum value from the priority queue, which guarantees that we are always reducing the maximum value in the array. If the maximum value is odd, we can no longer divide it by 2, so we break out of the loop. Otherwise, we divide the maximum value by 2, which reduces the maximum value, and update the minimum value accordingly.

By doing this repeatedly, we can always reduce the maximum difference between any two elements in the array, and we keep track of the minimum deviation that we can achieve.
<!-- Describe your first thoughts on how to solve this problem. -->
**NOTE - PLEASE READ APPROACH FIRST THEN SEE THE CODE. YOU WILL DEFINITELY UNDERSTAND THE CODE LINE BY LINE AFTER SEEING THE APPROACH.**

# Approach for this Problem:
1. Create a max heap and a variable to keep track of the minimum value in the array.
2. For each number in the input array, if it is odd, multiply it by 2 and push it onto the heap. Otherwise, just push it onto the heap.
3. Also, update the minimum value if necessary.
4. Initialize a variable to keep track of the minimum deviation.
5. While the maximum value in the heap is even, pop it off the heap, divide it by 2, and push it back onto the heap. Update the minimum deviation and the minimum value if necessary.
6. If the maximum value in the heap is odd, we cannot reduce it any further by dividing by 2. In this case, break out of the loop.
7. Return the minimum deviation.
<!-- Describe your approach to solving the problem. -->

# Code:
```C++ []
class Solution {
public:
    int minimumDeviation(vector<int>& nums) {
        priority_queue<int> pq;
        int minVal = INT_MAX;
        for (int num : nums) {
            if (num % 2 == 1)
                num = num * 2;
            pq.push(num);
            minVal = min(minVal, num);
        }
        int minDeviation = INT_MAX;
        while (true) {
            int maxVal = pq.top();
            pq.pop();
            minDeviation = min(minDeviation, maxVal - minVal);
            //The reason we need to break out of the loop when the maximum value is odd is that we have already transformed all odd numbers in the input array to even numbers by multiplying them by 2. Therefore, if the maximum value in the priority queue is odd, it must have been obtained by performing the "multiply by 2" operation on some even number. We cannot undo this operation by performing the "divide by 2" operation, so we cannot reduce the maximum value any further.
            if (maxVal % 2 == 1)
                break;
            maxVal = maxVal / 2;
            minVal = min(minVal, maxVal);
            pq.push(maxVal);
        }
        return minDeviation;
    }
};
```
```Java []
class Solution {
    public int minimumDeviation(int[] nums) {
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
        int minVal = Integer.MAX_VALUE;
        for (int num : nums) {
            if (num % 2 == 1)
                num = num * 2;
            pq.offer(num);
            minVal = Math.min(minVal, num);
        }
        int minDeviation = Integer.MAX_VALUE;
        while (true) {
            int maxVal = pq.poll();
            minDeviation = Math.min(minDeviation, maxVal - minVal);
            if (maxVal % 2 == 1)
                break;
            maxVal = maxVal / 2;
            minVal = Math.min(minVal, maxVal);
            pq.offer(maxVal);
        }
        return minDeviation;
    }
}

```
```Python []
///Note : In the Python code, we use a min-heap instead of a max-heap because Python's heapq module only provides a min-heap implementation. Therefore, we negate the values in the heap to simulate a max-heap.

import heapq

class Solution:
    def minimumDeviation(self, nums: List[int]) -> int:
        pq = [-num*2 if num % 2 == 1 else -num for num in nums]
        heapq.heapify(pq)
        min_val = -float('inf')
        for num in nums:
            min_val = min(min_val, -num if num % 2 == 0 else -num*2)
        min_deviation = float('inf')
        while True:
            max_val = -heapq.heappop(pq)
            min_deviation = min(min_deviation, max_val - min_val)
            if max_val % 2 == 1:
                break
            max_val //= 2
            min_val = min(min_val, -max_val)
            heapq.heappush(pq, -max_val)
        return min_deviation
```

# Time Complexity and Space Complexity:
- Time complexity: **O(nlogn)**
The algorithm involves inserting n elements(worst case) into a priority queue, which takes O(n log n) time. The while loop iterates at most log(maximum value in the array) times. In the worst case, the maximum value can be as large as 10^9, so the loop iterates log(10^9) times, which is a constant value. The operations inside the loop take O(log n) time, which is the time required to insert or delete an element from the priority queue. Therefore, the overall time complexity of the algorithm is O(n log n).
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: **O(n)**
The algorithm uses a priority queue to store the elements, which takes O(n) space. Additionally, it uses a few constant-size variables to keep track of the minimum and maximum values, as well as the answer. Therefore, the overall space complexity of the algorithm is O(n).
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
# [c++/Java/python] || Deque || clean Code

**Author:** Aditya00
**Votes:** 45
**Link:** [https://leetcode.com/problems/continuous-subarrays/solutions/3706702/](https://leetcode.com/problems/continuous-subarrays/solutions/3706702/)

---


# C++ Code
```
class Solution
{
public:
    long long continuousSubarrays(vector<int> &nums)
    {
        deque<int> minn, maxx; 
        int n = nums.size();
        int left = 0;
        long long ans = 0;
        for (int right = 0; right < n; right++)
        {
            while (!maxx.empty() && nums[maxx.back()] < nums[right])  // Remove smaller elements from the maxx deque
                maxx.pop_back();
            maxx.push_back(right);  // Add the current index to the maxx deque

            while (!minn.empty() && nums[minn.back()] > nums[right])  // Remove larger elements from the minn deque
                minn.pop_back();
            minn.push_back(right);  // Add the current index to the minn deque

            while (nums[maxx.front()] - nums[minn.front()] > 2){
                if (maxx.front() < minn.front())  // Remove the leftmost maximum element if it is to the left of the minimum element
                    maxx.pop_front();
                else if (maxx.front() > minn.front())  // Remove the leftmost minimum element if it is to the left of the maximum element
                    minn.pop_front();
                else  // Remove both the leftmost maximum and minimum elements if they are at the same index
                    minn.pop_front(),
                    maxx.pop_front();
                left = max(left, min(maxx.front(), minn.front()));  // Update the left pointer to ensure the subarray has a difference of at most 2
            }
            int len = right - left + 1;  // Length of the current valid subarray
            ans += len;  // Add the length to the answer
        }
        return ans;  // Return the final answer
    }
};

```
![image.png](./images/0.png)

# Java Code 
```
class Solution {
    public long continuousSubarrays(int[] nums) {
        Deque<Integer> maxQ = new ArrayDeque<>();
        Deque<Integer> minQ = new ArrayDeque<>();
        int left = 0;
        long res = 0;

        for (int right = 0; right < nums.length; right++) {
            while (!maxQ.isEmpty() && nums[maxQ.peekLast()] < nums[right]) {
                maxQ.pollLast();
            }
            maxQ.offerLast(right);

            while (!minQ.isEmpty() && nums[minQ.peekLast()] > nums[right]) {
                minQ.pollLast();
            }
            minQ.offerLast(right);

            while (!maxQ.isEmpty() && !minQ.isEmpty() && nums[maxQ.peekFirst()] - nums[minQ.peekFirst()] > 2) {
                if (maxQ.peekFirst() < minQ.peekFirst()) {
                    left = maxQ.peekFirst() + 1;
                    maxQ.pollFirst();
                } else {
                    left = minQ.peekFirst() + 1;
                    minQ.pollFirst();
                }
            }

            res += right - left + 1;
        }
        return res;
    }
}
```

# Python
```
class Solution(object):
    def continuousSubarrays(self, nums):
        maxQ = deque()
        minQ = deque()
        left = 0
        res = 0

        for right in range(len(nums)):
            while maxQ and nums[maxQ[-1]] < nums[right]:
                maxQ.pop()

            maxQ.append(right)

            while minQ and nums[minQ[-1]] > nums[right]:
                minQ.pop()

            minQ.append(right)

            while nums[maxQ[0]] - nums[minQ[0]] > 2:
                if maxQ[0] < minQ[0]:
                    left = maxQ[0] + 1
                    maxQ.popleft()
                else:
                    left = minQ[0] + 1
                    minQ.popleft()

            res += right - left + 1

        return res

```
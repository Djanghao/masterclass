# JS, Python, Java, C++ | Easy DP Deque Solution w/ Explanation

**Author:** sgallivan
**Votes:** 40
**Link:** [https://leetcode.com/problems/jump-game-vi/solutions/1261753/](https://leetcode.com/problems/jump-game-vi/solutions/1261753/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

For this problem, we can see that there are many possible paths from one end of **nums** to the other, but that they cross back over each other countless times. There may be multiple ways to get to a given element in the middle of **nums**, but there should only be one best way to get from there to the end of **nums**.

When we find ourselves potentially solving the same subproblem over and over again, it's time for a **dynamic programming** (**DP**) approach. In a normal DP approach, we would create a DP array to store the best solution from each element to the end, but since we're only going to be iterating through **nums** once, we can use an **in-place DP** approach and modify the elements of **nums** as we iterate through.

_(**Note**: If you choose not to modify your inputs, you can make a separate DP array to store these values. This will increase the **space complexity** to **O(N)**.)_

Now, if we consider being located at a particular element in **nums**, and all the elements ahead of us having been modified to equal the best value to the end of **nums**, then the best value for the current location will be its own value plus the best value it can reach in a jump of up to **k** distance.

One option here would be to use a **priority queue** to keep track of the best results ahead, then we could just take the top value in the priority queue (while remembering to first remove any entries that are farther than **k** distance away). But a priority queue isn't terribly efficient for our purposes.

Instead, we can use a **double-ended queue** (**deq**) to good effect here. Since we'll need to remove elements from the front end of **deq** if they're outside the jump window, we should use indexes for the **deq** entries.

When we go to push an index onto **deq**, we should consider that any indexes at the end of **deq** which represent lower values will never be used, as they will always be surpassed by the newer value until they fall outside the jump window. Before pushing the new index onto **deq** then, we should remove from the end of **deq** any indexes representing lower values.

This consequently means that **deq** will always be sorted from high to low values, which is precisely what we wanted. At every iteration (**i**) then, after removing out-of-window indexes, the top entry will represent the value we want to add to **nums[i]** to equal the best result from **i** to the end of **nums**.

We can continue this iteration down to **i = 0**, then **return nums[0]** as the finished result.

 - _**Time Complexity: O(N)** where **N** is the length of **nums**_
 - _**Space Complexity: O(K)** for **deq**_
   - _or **O(N)** if we use a separate DP array rather than modifying **nums**_

---

#### ***Implementation:***

For Java, the **ArrayDeque()** implementation is much slower than using an **int array** with the same length as **nums** and then using a **sliding window** with pointers (**a, b**) to represent the current first and last element of **deq**. This will push the **space complexity** to **O(N)**.

The same applies to C++ and their implementation of **deque()**, though to a lesser degree.

---

#### ***Javascript Code:***

The best result for the code below is **92ms / 48.6MB** (beats 100% / 100%).
```javascript
var maxResult = function(nums, k) {
   let n = nums.length, deq = [n-1]
    for (let i = n - 2; ~i; i--) {
        if (deq[0] - i > k) deq.shift()
        nums[i] += nums[deq[0]]
        while (deq.length && nums[deq[deq.length-1]] <= nums[i]) deq.pop()
        deq.push(i)
    }
    return nums[0] 
};
```

---

#### ***Python Code:***

The best result for the code below is **952ms / 28.0MB** (beats 96% / 85%).
```python
class Solution:
    def maxResult(self, nums: List[int], k: int) -> int:
        n = len(nums)
        deq = deque([n-1])
        for i in range(n-2, -1, -1):
            if deq[0] - i > k: deq.popleft()
            nums[i] += nums[deq[0]]
            while len(deq) and nums[deq[-1]] <= nums[i]: deq.pop()
            deq.append(i)
        return nums[0]
```

---

#### ***Java Code:***

The best result for the code below is **5ms / 53.2MB** (beats 100% / 85%).
```java
class Solution {
    public int maxResult(int[] nums, int k) {
        int n = nums.length, a = 0, b = 0;
        int[] deq = new int[n];
        deq[0] = n - 1;
        for (int i = n - 2; i >= 0; i--) {
            if (deq[a] - i > k) a++;
            nums[i] += nums[deq[a]];
            while (b >= a && nums[deq[b]] <= nums[i]) b--;
            deq[++b] = i;
        }
        return nums[0];
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **120ms / 76.8MB** (beats 99% / 100%).
```c++
class Solution {
public:
    int maxResult(vector<int>& nums, int k) {
        int n = nums.size(), a = 0, b = 0;
        int deq[n];
        deq[0] = n - 1;
        for (int i = n - 2; i >= 0; i--) {
            if (deq[a] - i > k) a++;
            nums[i] += nums[deq[a]];
            while (b >= a && nums[deq[b]] <= nums[i]) b--;
            deq[++b] = i;
        }
        return nums[0];
    }
};
```
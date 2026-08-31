# JS, Python, Java, C++ | Easy Mathematical Solution w/ Explanation

**Author:** sgallivan
**Votes:** 39
**Link:** [https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/solutions/1217591/](https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/solutions/1217591/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

This problem is deceptive in its simplicity. Ultimately, the value to which you want to set each element equal is the **median** of the sorted **nums** array. To come to this realization, we have to first think about the nature of the problem.

Let's consider a possible scenario in which we've decided that our target value is **x** which would take **ans** number of moves to complete. What would happen to **ans** if we increased **x** by **1**? If we did, each element that is below the new **x** would have to spend another move to get up to **x**, but every element that is above the new **x** would have to spend one less move to get down to **x**.

This means that **x** should naturally move up if there are more elements above **x** than below. It also means the inverse, that **x** should move down if there are more elements below **x** than above. The natural outcome of this is that **x** will settle at a spot where there are the same number of elements on either side, which is the median value of **nums**.

To find the median value, we'll have to first sort **nums**. If **nums** has an even number of elements, any value between the two middle elements, inclusive, will work for calculating the answer, so we don't have to worry about which of the two elements we use for our solution.

After we have the median value, we can just iterate through **nums** and find the sum of the differences of each number from the median value, which should be our answer.

 - _**Time Complexity: O(N * log N)** where **N** is the length of **nums**, for sorting **nums**_
 - _**Space Complexity: O(1)**_

---

#### ***Implementation:***

For C++, we can use **nth_element** to find the **median** in **O(N) time** without having to fully sort **nums**. (Thanks, [**@sherwin31**](https://leetcode.com/sherwin31)!)

---

#### ***Javascript Code:***

The best result for the code below is **68ms / 39.7MB** (beats 100% / 95%).
```javascript
var minMoves2 = function(nums) {
    nums.sort((a,b) => a - b)
    let ans = 0, median = nums[~~(nums.length / 2)]
    for (let i = 0; i < nums.length; i++) ans += Math.abs(median - nums[i])
    return ans
}
```

---

#### ***Python Code:***

The best result for the code below is **52ms / 15.2MB** (beats 99% / 100%).
```python
class Solution:
    def minMoves2(self, nums: List[int]) -> int:
        nums.sort()
        ans, median = 0, nums[len(nums) // 2]
        for num in nums: ans += abs(median - num)
        return ans
```

---

#### ***Java Code:***

The best result for the code below is **2ms / 39.2MB** (beats 98% / 98%).
```java
class Solution {
    public int minMoves2(int[] nums) {
        Arrays.sort(nums);
        int ans = 0, median = nums[nums.length / 2];
        for (int num : nums) ans += Math.abs(median - num);
        return ans;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **4ms / 10.7MB** (beats 100% / 92%).
```c++
class Solution {
public:
    int minMoves2(vector<int>& nums) {
        vector<int>::iterator mid = nums.begin() + nums.size() / 2;
        nth_element(nums.begin(), mid, nums.end());
        int ans = 0, median = nums[nums.size() / 2];
        for (auto num : nums) ans += abs(median - num);
        return ans;
    }
};
```
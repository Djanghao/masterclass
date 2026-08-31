# [Java, Rust, Python] Binary search solution with clear explanation and real life application. 🔥

**Author:** anhle_tr
**Votes:** 2
**Link:** [https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/solutions/3254632/](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/solutions/3254632/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem of finding the Kth smallest element in a sorted matrix can be solved using several different approaches, but one of the most efficient methods is the binary search approach.

# Approach
<!-- Describe your approach to solving the problem. -->
We start with a range from the smallest element to the biggest element. For each iteration, we find the middle element of the range and count the number of elements that are less than or equal to the middle one. 

If `count < k`, means that the mid element has to be bigger, we can discard the left half to shrink the search range.

If `count => k`, means that the mid element has to be smaller, we discard the right half to shrink the reach range.

Continue this process until the range is narrowed down to a single element, which is the Kth smallest element.

# Code
Here are the steps to solve the problem:

1. Initialize two pointers, `left and right`, where left is the smallest element and right is the biggest element.

2. Find the middle element of the matrix `mid` using `mid = (left + right) / 2`.

2. Count the number of elements that are less than or equal to `mid`. Start at the bottom left corner of the matrix and move up and to the top right until you find an element less than or equal mid. **At this point**, you know that all elements to the left of this subarray are also smaller than mid, so you can count the number of elements to the left of this element and below it: `count += j + 1`

4. Compare the count to the value of K. If `count < K`, the Kth smallest element must be bigger, so set `left = mid + 1`. If the `count >= K`, the Kth smallest element must be smaller or equal to mid, so set `right = mid - 1`.

5. Repeat steps 2-4 until left > right. At this point, left is the Kth smallest element in the matrix.

```java []
class Solution {
    public int kthSmallest(int[][] matrix, int k) {
        //Step 1
        int n = matrix.length;
        int left = matrix[0][0];
        int right = matrix[n-1][n-1];
        while(left <= right)
        {
            //Step 2
            int mid = left + (right - left)/2;
            int count = 0;
            int j = n-1;

            //Step 3
            for(int i = 0; i < n; i++)
            {
                while(j >= 0 && matrix[i][j] > mid)
                {
                    j--;
                }
                count += j + 1;
            }
            //Step 4
            if(count < k) left = mid + 1;
            else right = mid - 1;
        }
        //Step 5
        return left;
    }
}
```
```python []
class Solution(object):
    def kthSmallest(self, matrix, k):
        """
        :type matrix: List[List[int]]
        :type k: int
        :rtype: int
        """
        #Step 1
        n = len(matrix)
        left = matrix[0][0]
        right = matrix[n-1][n-1]
        while left <= right:
            #Step 2
            mid = left + (right - left)/2
            count = 0
            j = n - 1

            #Step 3
            for i in range(n):
                while j >= 0 and matrix[i][j] > mid:
                    j -= 1
                count += j + 1
            #Step 4
            if count < k:
                left = mid + 1
            else:
                right = mid - 1
        #Step 5
        return left
```
```rust []
impl Solution {
    pub fn kth_smallest(matrix: Vec<Vec<i32>>, k: i32) -> i32 {
        let n = matrix.len();
        let mut left : i32 = matrix[0][0];
        let mut right: i32 = matrix[n-1][n-1];
        while left <= right
        {
            let mid = left + (right - left)/2;
            let mut count = 0;
            let mut j= n as i32 -1;
            for i in 0..n
            {
                while j >= 0 && matrix[i][j as usize] > mid
                { 
                    j-=1;
                }
                count += j + 1;
            }

            if count < k 
            {
                left = mid + 1;
            }
            else
            {
                right = mid - 1;
            }
        }
        return left;
    }
}
```
#### Why we use `count += j + 1`  not `count+=1`? \uD83E\uDD14
Explain: we need to include all the elements in the current row to the left of the current element in the count.

Let's say we are currently looking at a row i and column j in the matrix, and the current middle element is `mid`. If `matrix[i, j] <= mid`, then all the elements in the current row to the left of `(i, j)` will also be less than or equal to mid. Therefore, we need to add the number of elements to the left of `(i, j)` to the count.

# Complexity
- Time complexity: $$O(n*log(max-min))$$ where n is the size of the matrix. Max and min are the largest and smallest elements in the mattrix. The binary search algorithm takes $$O(log(max-min))$$ time, and we need to count number of elements <= middle element in each iteration, which takes $$O(n)$$ time

- Space complexity: $$O(1)$$ because we only use a constant amount of extra space.

# Application

The **Kth Smallest Element in a Sorted Matrix** problem have several real-life applications:

1. **Financial modeling:** estimate the probability of certain events happening, such as the probability of a stock price falling below a certain level.

2. **Medical imaging:** identify the smallest lesion or tumor in an image, which can help in early detection and treatment.

3. **Search engines**: in search engines, finding the kth smallest element can be used to rank search results based on their relevance to the query.

4. **Computer graphics:** determine the visibility of objects in a 3D scene, which can help in rendering realistic images.

5. **Game development:** determine the difficulty level of a game level based on the player's performance.

6. **Social networks:** rank users based on their influence or popularity within the network.

*Thank you for reading! If you found this solution helpful, please give me an upvote. Feel free to add suggestions.*
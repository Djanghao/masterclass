# From Dumb to Pro with Just One Visit - My Promise to You with Efficient Selection of k Smallest Pair

**Author:** curio_sity
**Votes:** 198
**Link:** [https://leetcode.com/problems/find-k-pairs-with-smallest-sums/solutions/3686980/](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/solutions/3686980/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The code aims to find the k smallest pairs from two sorted arrays, `nums1` and `nums2`, based on their pair sums. The approach used in the code is optimized to avoid inserting all pairs into the priority queue, which would result in a time complexity of $O(N^2 log N^2)$ and lead to a Time Limit Exceeded (TLE) error.

To overcome this, the code follows a specific method to find the k smallest pairs efficiently. It starts by inserting the pair sums of each element from `nums1` and the first element of `nums2` into a priority queue. Since both arrays are sorted, the pair sums will be in increasing order.

By utilizing a priority queue, the smallest sum pair is always accessible at the top. The code then pops the smallest pair from the priority queue and adds it to the result vector. Next, it inserts the next pair, which consists of the same element from `nums1` but the next element from `nums2`.

The code repeats this process, gradually inserting pairs with increasing elements from `nums2`, until it has added k pairs to the result vector or the priority queue becomes empty (i.e., all pairs have been explored). This ensures that only the k smallest pairs are considered.

Finally, the code returns the resulting vector containing the k smallest pairs.

Overall, the approach intelligently uses the priority queue to avoid unnecessary computations, allowing for an optimized solution with a time complexity of $O(K log N)$, where N represents the size of `nums1` and K is the given parameter for the number of smallest pairs to find.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Create an empty result vector `resV` to store the k smallest pairs.
2. Create a priority queue `pq` to store pairs of elements from `nums1` and `nums2` with the smallest sums. The pairs are sorted by their sum in ascending order.
3. Iterate through each element `x` in `nums1`.
    - Calculate the sum of `x` and the first element of `nums2` (since `nums2` is sorted, the first element has the smallest value).
    - Push the pair consisting of the sum and the index of the first element in `nums2` (which is 0) into the priority queue.
4. While `k` is greater than 0 and the priority queue is not empty, perform the following steps:
    - Get the pair with the smallest sum from the top of the priority queue.
    - Extract the sum and the index from the pair.
    - Create a pair by subtracting the value of the second element in the pair from the sum and the value of the second element itself.
    - Add the created pair to the result vector `resV`.
    - Remove the pair from the priority queue.
    - If there are more elements in `nums2` (i.e., the index of the second element is less than the size of `nums2` minus 1), calculate the sum of the next pair by subtracting the current second element from the sum and adding the next element in `nums2`. Push this new pair into the priority queue.
    - Decrement `k` by 1.
5. Return the resulting vector `resV` containing the k smallest pairs.

The approach essentially involves maintaining a priority queue to keep track of the smallest sums and their corresponding pairs. By iteratively extracting the smallest sum and updating the index of the second element from `nums2`, the code ensures that only the k smallest pairs are included in the result.

# Complexity
- Time Complexity:
    - The maximum size of the priority queue `pq` is `nums1.size()` (denoted as `n1`), as for each element in nums1, we push one element into the priority queue. The maximum number of iterations that can happen is `k`, as the loop runs until k smallest pairs are found or until the priority queue is empty.
    - **Therefore, the time complexity of the given code is $O(k * log (n1))$, where n1 is the size of nums1 and k is the desired number of smallest pairs to be found.**

- Space Complexity:
    - The additional space used by the code includes the result vector `resV` and the priority queue `pq`.
    - The result vector `resV` will contain at most k pairs, so it occupies $O(k)$ space.
    - The priority queue `pq` can hold at most k pairs as well, resulting in $O(n1)$ space.
    - **Therefore, the overall space complexity is $O(n1 + k)$.**

# Code
```cpp []
class Solution {
public:
    vector<vector<int>> kSmallestPairs(vector<int>& nums1, vector<int>& nums2, int k) {
        vector<vector<int>> resV; // Result vector to store the pairs
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
        // Priority queue to store pairs with smallest sums, sorted by the sum

        // Push the initial pairs into the priority queue
        for(int x : nums1) {
            pq.push({x + nums2[0], 0}); // The sum and the index of the second element in nums2
        }

        // Pop the k smallest pairs from the priority queue
        while(k-- && !pq.empty()) {
            int sum = pq.top().first; // Get the smallest sum
            int pos = pq.top().second; // Get the index of the second element in nums2

            resV.push_back({sum - nums2[pos], nums2[pos]}); // Add the pair to the result vector
            pq.pop(); // Remove the pair from the priority queue

            // If there are more elements in nums2, push the next pair into the priority queue
            if(pos + 1 < nums2.size()) {
                pq.push({sum - nums2[pos] + nums2[pos + 1], pos + 1});
            }
        }

        return resV; // Return the k smallest pairs
    }
};
```
```java []
class Solution {
    public List<List<Integer>> kSmallestPairs(int[] nums1, int[] nums2, int k) {
        List<List<Integer>> resV = new ArrayList<>(); // Result list to store the pairs
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);
        // Priority queue to store pairs with smallest sums, sorted by the sum

        // Push the initial pairs into the priority queue
        for (int x : nums1) {
            pq.offer(new int[]{x + nums2[0], 0}); // The sum and the index of the second element in nums2
        }

        // Pop the k smallest pairs from the priority queue
        while (k > 0 && !pq.isEmpty()) {
            int[] pair = pq.poll();
            int sum = pair[0]; // Get the smallest sum
            int pos = pair[1]; // Get the index of the second element in nums2

            List<Integer> currentPair = new ArrayList<>();
            currentPair.add(sum - nums2[pos]);
            currentPair.add(nums2[pos]);
            resV.add(currentPair); // Add the pair to the result list

            // If there are more elements in nums2, push the next pair into the priority queue
            if (pos + 1 < nums2.length) {
                pq.offer(new int[]{sum - nums2[pos] + nums2[pos + 1], pos + 1});
            }

            k--; // Decrement k
        }

        return resV; // Return the k smallest pairs
    }
}
```
```python []
class Solution:
    def kSmallestPairs(self, nums1, nums2, k):
        resV = []  # Result list to store the pairs
        pq = []  # Priority queue to store pairs with smallest sums, sorted by the sum

        # Push the initial pairs into the priority queue
        for x in nums1:
            heapq.heappush(pq, [x + nums2[0], 0])  # The sum and the index of the second element in nums2

        # Pop the k smallest pairs from the priority queue
        while k > 0 and pq:
            pair = heapq.heappop(pq)
            s, pos = pair[0], pair[1]  # Get the smallest sum and the index of the second element in nums2

            resV.append([s - nums2[pos], nums2[pos]])  # Add the pair to the result list

            # If there are more elements in nums2, push the next pair into the priority queue
            if pos + 1 < len(nums2):
                heapq.heappush(pq, [s - nums2[pos] + nums2[pos + 1], pos + 1])

            k -= 1  # Decrement k

        return resV  # Return the k smallest pairs
```
*Thank you for taking the time to read my post in its entirety. I appreciate your attention and hope you found it informative and helpful.*

**PLEASE UPVOTE THIS POST IF YOU FOUND IT HELPFUL**
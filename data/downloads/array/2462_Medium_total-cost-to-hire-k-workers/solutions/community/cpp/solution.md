# ✅Beats 100% 🔥 || C++ || JAVA || PYTHON || Beginner Friendly🔥🔥🔥

**Author:** rahulvarma5297
**Votes:** 240
**Link:** [https://leetcode.com/problems/total-cost-to-hire-k-workers/solutions/3683067/](https://leetcode.com/problems/total-cost-to-hire-k-workers/solutions/3683067/)

---


# Intuition:

1. To Intuition is to maintains two priority queues (`pq1` and `pq2`) that store the `candidates` smallest costs from the beginning and end of the list. 
2. In each iteration, the code compares the smallest costs from `pq1` and `pq2` and selects the one with the lowest value. The corresponding cost is added to the total cost (`ans`), and the element is removed from the respective priority queue. 
3. This process continues for `k` iterations, and at the end, the accumulated `ans` value represents the minimum total cost required to hire `k` workers.

# Explanation:

1. Two integer variables `i` and `j` are initialized to track the start and end indices of the `costs` vector, respectively. These indices will be used to iterate over the vector.
2. Two priority queues, `pq1` and `pq2`, are created. Priority queues are data structures that allow efficient insertion and retrieval of elements while maintaining a specific order. In this case, the elements are integers, and the order is ascending (`greater<int>`).
3. A `long long` variable `ans` is initialized to store the total cost.
4. The code enters a loop that executes `k` times, where `k` is the number of workers to be hired.
5. Inside the loop, two nested `while` loops are used to populate `pq1` and `pq2` with candidates from the `costs` vector. The conditions for these loops are as follows:
   - `pq1` should contain at most `candidates` elements, and `i` should be less than or equal to `j`.
   - `pq2` should also contain at most `candidates` elements, and `i` should be less than or equal to `j`.
   These loops essentially fill the priority queues with the smallest `candidates` elements from the `costs` vector, taking elements from both ends of the vector (`i` and `j`).
6. After the `while` loops, the code compares the top elements (`t1` and `t2`) of `pq1` and `pq2` to determine which one is smaller. If both queues are empty, `INT_MAX` (maximum value for an `int`) is used as a placeholder.
7. If `t1` is smaller than or equal to `t2`, the cost of the worker represented by `t1` is added to `ans`, and the top element is removed from `pq1` using `pq1.pop()`. Otherwise, the cost of the worker represented by `t2` is added to `ans`, and the top element is removed from `pq2` using `pq2.pop()`.
8. The loop continues until `k` workers have been hired.
9. Finally, the function returns the accumulated total cost (`ans`).

# Code
```C++ []
class Solution {
public:
    long long totalCost(vector<int>& costs, int k, int candidates) {
        int i = 0;
        int j = costs.size() - 1;
        priority_queue<int, vector<int>, greater<int>> pq1;
        priority_queue<int, vector<int>, greater<int>> pq2;

        long long ans = 0;
        while(k--){
            while(pq1.size() < candidates && i <= j){
                pq1.push(costs[i++]);
            }
            while(pq2.size() < candidates && i <= j){
                pq2.push(costs[j--]);
            }

            int t1 = pq1.size() > 0 ? pq1.top() : INT_MAX;
            int t2 = pq2.size() > 0 ? pq2.top() : INT_MAX;

            if(t1 <= t2){
                ans += t1;
                pq1.pop();
            }
            else{
                ans += t2;
                pq2.pop();
            }
        }
        return ans;
    }
};
```
```Java []
class Solution {
    public long totalCost(int[] costs, int k, int candidates) {
        int i = 0;
        int j = costs.length - 1;
        PriorityQueue<Integer> pq1 = new PriorityQueue<>();
        PriorityQueue<Integer> pq2 = new PriorityQueue<>();

        long ans = 0;
        while (k-- > 0) {
            while (pq1.size() < candidates && i <= j) {
                pq1.offer(costs[i++]);
            }
            while (pq2.size() < candidates && i <= j) {
                pq2.offer(costs[j--]);
            }

            int t1 = pq1.size() > 0 ? pq1.peek() : Integer.MAX_VALUE;
            int t2 = pq2.size() > 0 ? pq2.peek() : Integer.MAX_VALUE;

            if (t1 <= t2) {
                ans += t1;
                pq1.poll();
            } else {
                ans += t2;
                pq2.poll();
            }
        }
        return ans;
    }
}
```
```Python3 []
class Solution:
    def totalCost(self, costs, k, candidates):
        i = 0
        j = len(costs) - 1
        pq1 = []
        pq2 = []

        ans = 0
        while k > 0:
            while len(pq1) < candidates and i <= j:
                heapq.heappush(pq1, costs[i])
                i += 1
            while len(pq2) < candidates and i <= j:
                heapq.heappush(pq2, costs[j])
                j -= 1

            t1 = pq1[0] if pq1 else float('inf')
            t2 = pq2[0] if pq2 else float('inf')

            if t1 <= t2:
                ans += t1
                heapq.heappop(pq1)
            else:
                ans += t2
                heapq.heappop(pq2)

            k -= 1
        return ans
```

**If you found my solution helpful, I would greatly appreciate your upvote, as it would motivate me to continue sharing more solutions.**
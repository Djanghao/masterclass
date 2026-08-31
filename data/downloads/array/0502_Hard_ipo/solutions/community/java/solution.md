# Day 54 || C++ || Priority_Queue || Easiest Beginner Friendly Sol

**Author:** singhabhinash
**Votes:** 418
**Link:** [https://leetcode.com/problems/ipo/solutions/3219987/](https://leetcode.com/problems/ipo/solutions/3219987/)

---

# Intuition of this Problem:
The problem asks us to maximize the total capital by selecting at most k distinct projects. We have a limited amount of initial capital, and each project has a minimum capital requirement and a pure profit. We need to choose the projects in such a way that we can complete at most k distinct projects, and the final maximized capital should be as high as possible.

The code uses a greedy approach to solve the problem. The basic idea is to sort the projects by the minimum capital required in ascending order. We start with the initial capital w and try to select k distinct projects from the sorted projects.(***Note : We sort the projects by their minimum capital required in ascending order because we want to consider the projects that we can afford with our current capital. By iterating over the sorted projects, we can ensure that we only consider the projects that have a minimum capital requirement less than or equal to our current capital.If we did not sort the projects, we would need to iterate over all the projects in each iteration to check if we can afford them. This would result in a time complexity of O(n^2) which is not efficient, especially if n is large.***)

We use a priority queue to store the profits of the available projects that we can start with the current capital. We also use a variable i to keep track of the next project that we can add to the priority queue.

In each iteration, we first add the profits of the available projects to the priority queue by iterating i until we find a project that requires more capital than our current capital. We then select the project with the highest profit from the priority queue, add its profit to our current capital, and remove it from the priority queue. If the priority queue is empty, we cannot select any more projects and break the loop.

By using a priority queue to select the project with the highest profit, we ensure that we select the most profitable project at each iteration. By iterating over the sorted projects, we ensure that we only consider the projects that we can afford with our current capital. By selecting at most k distinct projects, we ensure that we only select the most profitable projects that we can complete with our limited resources.
<!-- Describe your first thoughts on how to solve this problem. -->
**NOTE - PLEASE READ APPROACH FIRST THEN SEE THE CODE. YOU WILL DEFINITELY UNDERSTAND THE CODE LINE BY LINE AFTER SEEING THE APPROACH.**

# Approach for this Problem:
1. Create a vector of pairs "projects" to store the minimum capital required and pure profit of each project.
2. Initialize a variable "n" to the size of the input "profits" vector.
3. Sort the "projects" vector by the minimum capital required in ascending order.
4. Initialize a variable "i" to 0 and a priority queue "maximizeCapital" to store the maximum profit we can get from a project.
5. Loop k times and perform the following operations in each iteration:
    - a. While "i" is less than "n" and the minimum capital required for the project at index "i" is less than or equal to the current capital "w", push the profit of the project at index "i" to "maximizeCapital" and increment "i".
    - b. If "maximizeCapital" is empty, break out of the loop.
    - c. Add the maximum profit in "maximizeCapital" to "w" and pop it out of the priority queue.
1. Return the final value of "w".
<!-- Describe your approach to solving the problem. -->


# Code:
```C++ []
class Solution {
public:
    int findMaximizedCapital(int k, int w, vector<int>& profits, vector<int>& capital) {
        int n = profits.size();
        vector<pair<int, int>> projects(n);
        for (int i = 0; i < n; i++) {
            projects[i] = {capital[i], profits[i]};
        }
        //We sort the projects by their minimum capital required in ascending order because we want to consider the projects that we can afford with our current capital. By iterating over the sorted projects, we can ensure that we only consider the projects that have a minimum capital requirement less than or equal to our current capital.
        sort(projects.begin(), projects.end());
        int i = 0;
        priority_queue<int> maximizeCapital;
        while (k--) {
            //The condition projects[i].first <= w checks if the minimum capital requirement of the next project is less than or equal to our current capital w. If this condition is true, we can add the project to the priority queue because we have enough capital to start the project.
            //We use this condition to ensure that we only add the available projects that we can afford to the priority queue. By checking the minimum capital requirement of the next project before adding it to the priority queue, we can avoid adding projects that we cannot afford, and we can focus on selecting the most profitable project that we can afford with our current capital.
            //The loop while (i < n && projects[i].first <= w) runs until we add all the available projects that we can afford to the priority queue
            while (i < n && projects[i].first <= w) {
                maximizeCapital.push(projects[i].second);
                i++;
            }
            if (maximizeCapital.empty())
                break;
            w += maximizeCapital.top();
            maximizeCapital.pop();
        }
        return w;
    }
};
```
```Java []
class Solution {
    public int findMaximizedCapital(int k, int w, int[] profits, int[] capital) {
        int n = profits.length;
        int[][] projects = new int[n][2];
        for (int i = 0; i < n; i++) {
            projects[i][0] = capital[i];
            projects[i][1] = profits[i];
        }
        Arrays.sort(projects, (a, b) -> Integer.compare(a[0], b[0]));
        int i = 0;
        PriorityQueue<Integer> maximizeCapital = new PriorityQueue<>(Collections.reverseOrder());
        while (k-- > 0) {
            while (i < n && projects[i][0] <= w) {
                maximizeCapital.offer(projects[i][1]);
                i++;
            }
            if (maximizeCapital.isEmpty()) {
                break;
            }
            w += maximizeCapital.poll();
        }
        return w;
    }
}

```
```Python []
class Solution:
    def findMaximizedCapital(self, k: int, w: int, profits: List[int], capital: List[int]) -> int:
        n = len(profits)
        projects = [(capital[i], profits[i]) for i in range(n)]
        projects.sort()
        i = 0
        maximizeCapital = []
        while k > 0:
            while i < n and projects[i][0] <= w:
                heapq.heappush(maximizeCapital, -projects[i][1])
                i += 1
            if not maximizeCapital:
                break
            w -= heapq.heappop(maximizeCapital)
            k -= 1
        return w

```

# Time Complexity and Space Complexity:
- Time complexity: **O(N log N + K log N) = O(N log N)**, where N is the number of projects and K is the number of projects that we can select. Sorting the "projects" vector takes O(N log N) time, and adding and removing elements from the priority queue takes O(log N) time. The while loop that adds the available projects to the priority queue runs at most N times, and the for loop that selects the projects to complete runs K times.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: **O(N + N) = O(N)**, where N is the number of projects. The space is used to store the "projects" vector. The priority queue used in the solution has a maximum size of N,
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
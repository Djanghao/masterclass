# 🔥 🔥 🔥 Easy to understand | 💯 Fast | maxHeap | Sorting 🔥 🔥 🔥

**Author:** bhanu_bhakta
**Votes:** 199
**Link:** [https://leetcode.com/problems/ipo/solutions/5315041/](https://leetcode.com/problems/ipo/solutions/5315041/)

---

Check out my [profile](https://leetcode.com/u/bhanu_bhakta/) to look into solutions to more problems.

# Intuition
- The intuition behind this code is to maximize the available capital after selecting up to k projects, by strategically choosing the projects with the highest profit that can be started within the current capital constraints. It does this by sorting projects by their capital requirements to quickly find the most affordable ones, then using a max-heap to efficiently select the highest-profit projects that are currently affordable, updating the available capital with each project's profit. This greedy approach ensures that at each step, the most beneficial project within financial reach is selected to optimize the total capital.

# Approach
- **Sort Projects by Capital:** Begin by sorting the projects based on the capital required to ensure you look at the cheapest projects first.

- **Use Max-Heap for Profits:** Employ a max-heap (inverted to a min-heap using negative values) to always have quick access to the project with the highest available profit.

- **Process Projects Within Capital:** As long as there are projects you can afford, add their profits (negatively) to the heap.

- **Select Top Profit Projects:** For up to k iterations, choose the most profitable project you can afford by popping from the heap, increasing your capital.

- **Resulting Capital:** After potentially choosing k projects, the resulting capital is the maximum capital achieved.

If you are confused clear explanation of approach is [here](https://www.youtube.com/watch?v=d49SwS-uGYY).

# Complexity
- Time complexity:
**O(NLogN+KLogN)**

- Space complexity:
**O(N)**

# Code
```Python []
class Solution:
    def findMaximizedCapital(
        self, k: int, w: int, profits: List[int], capital: List[int]
    ) -> int:
        n = len(profits)
        projects = [(capital[i], profits[i]) for i in range(n)]
        projects.sort()
        maxHeap = []
        i = 0
        for _ in range(k):
            while i < n and projects[i][0] <= w:
                heapq.heappush(maxHeap, -projects[i][1])
                i += 1
            if not maxHeap:
                break
            w -= heapq.heappop(maxHeap)

        return w

```
```C++ []
class Solution {
public:
    int findMaximizedCapital(int k, int w, vector<int>& profits,
                             vector<int>& capital) {
        int n = profits.size();
        std::vector<std::pair<int, int>> projects;

        // Creating vector of pairs (capital, profits)
        for (int i = 0; i < n; ++i) {
            projects.emplace_back(capital[i], profits[i]);
        }

        // Sorting projects by capital required
        std::sort(projects.begin(), projects.end());

        // Max-heap to store profits, using greater to create a max-heap
        std::priority_queue<int> maxHeap;
        int i = 0;

        // Main loop to select up to k projects
        for (int j = 0; j < k; ++j) {
            // Add all profitable projects that we can afford
            while (i < n && projects[i].first <= w) {
                maxHeap.push(projects[i].second);
                i++;
            }

            // If no projects can be funded, break out of the loop
            if (maxHeap.empty()) {
                break;
            }

            // Otherwise, take the project with the maximum profit
            w += maxHeap.top();
            maxHeap.pop();
        }

        return w;
    }
};
```
```Java []
class Solution {
    // Defining the Project class within the Solution class
    private static class Project {
        int capital;
        int profit;

        Project(int capital, int profit) {
            this.capital = capital;
            this.profit = profit;
        }
    }

    public int findMaximizedCapital(int k, int w, int[] profits, int[] capital) {
        int n = profits.length;
        List<Project> projects = new ArrayList<>();

        // Creating list of projects with capital and profits
        for (int i = 0; i < n; i++) {
            projects.add(new Project(capital[i], profits[i]));
        }

        // Sorting projects by capital required
        Collections.sort(projects, (a, b) -> a.capital - b.capital);

        // Max-heap to store profits (using a min-heap with inverted values)
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((x, y) -> y - x);
        int i = 0;

        // Main loop to select up to k projects
        for (int j = 0; j < k; j++) {
            // Add all profitable projects that we can afford
            while (i < n && projects.get(i).capital <= w) {
                maxHeap.add(projects.get(i).profit);
                i++;
            }

            // If no projects can be funded, break out of the loop
            if (maxHeap.isEmpty()) {
                break;
            }

            // Otherwise, take the project with the maximum profit
            w += maxHeap.poll();
        }

        return w;
    }
}
```
```Go []
// Project struct to hold capital and profit information
type Project struct {
	capital int
	profit  int
}

// A MaxHeap to hold the profits (we implement this as a min-heap with inverted profits)
type MaxHeap []int

func (h MaxHeap) Len() int           { return len(h) }
func (h MaxHeap) Less(i, j int) bool { return h[i] > h[j] } // Reverses the order to create a max-heap
func (h MaxHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *MaxHeap) Push(x interface{}) {
	*h = append(*h, x.(int))
}

func (h *MaxHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}

func findMaximizedCapital(k int, w int, profits []int, capital []int) int {
	n := len(profits)
	projects := make([]Project, n)

	for i := 0; i < n; i++ {
		projects[i] = Project{capital: capital[i], profit: profits[i]}
	}

	// Sorting projects based on capital required
	sort.Slice(projects, func(i, j int) bool {
		return projects[i].capital < projects[j].capital
	})

	maxHeap := &MaxHeap{}
	heap.Init(maxHeap)
	i := 0

	for j := 0; j < k; j++ {
		// Push all affordable projects into the heap
		for i < n && projects[i].capital <= w {
			heap.Push(maxHeap, projects[i].profit)
			i++
		}

		if maxHeap.Len() == 0 {
			break
		}

		// Get the project with the maximum profit
		w += heap.Pop(maxHeap).(int)
	}

	return w
}
```
```Kotlin []
class Solution {
    data class Project(val capital: Int, val profit: Int)

    fun findMaximizedCapital(k: Int, w: Int, profits: IntArray, capital: IntArray): Int {
        var availableCapital = w
    val projects = mutableListOf<Project>()

    // Creating list of projects with capital and profits
    for (i in profits.indices) {
        projects.add(Project(capital[i], profits[i]))
    }

    // Sorting projects by capital required
    projects.sortBy { it.capital }

    // Max-heap to store profits
    val maxHeap = PriorityQueue<Int>(compareByDescending { it })

    var index = 0

    // Main loop to select up to k projects
    for (j in 0 until k) {
        // Add all profitable projects that we can afford
        while (index < projects.size && projects[index].capital <= availableCapital) {
            maxHeap.add(projects[index].profit)
            index++
        }

        // If no projects can be funded, break out of the loop
        if (maxHeap.isEmpty()) break

        // Otherwise, take the project with the maximum profit
        availableCapital += maxHeap.poll()
    }

    return availableCapital
    }
}
```

**Please upvote if you like the solution**
![upvote.webp](./images/0.webp)

# 🔥 🔥 🔥 Easy to understand |  Priority Queue | In 4 languages 🔥 🔥 🔥

**Author:** bhanu_bhakta
**Votes:** 48
**Link:** [https://leetcode.com/problems/minimum-cost-to-hire-k-workers/solutions/5141363/](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/solutions/5141363/)

---

[# Detail Explanation In Video](https://www.youtube.com/watch?v=unilMptW-PM)

# Intuition
- **Wage-to-Quality Ratio:** Prioritize workers based on the ratio of their wage demand to their quality, as this ratio will dictate the relative pay of all workers in the group.
- **Heap Utilization:** Use a min-heap to select workers with the lowest wage-to-quality ratio and a max-heap to manage and potentially remove workers with the highest quality to maintain the group size of k.
- **Dynamic Calculation:** Continuously calculate and update the minimum cost as workers are added or removed, ensuring the cost reflects the maximum ratio in the current group of workers.

# Approach
**Initialization:**

- **qualityTillNow:** Tracks the sum of qualities of the workers currently considered for hiring.
- **wageQualityRatio:** A min-heap (priority queue) based on each worker's wage-to-quality ratio. This helps us extract workers with the lowest ratio efficiently.
- **highQualityWorkers:** A max-heap to store the qualities of the workers being considered for hiring, allowing easy removal of the worker with the highest quality when we exceed k workers.
- **minCost:** Variable to track the minimum possible cost of hiring k workers.

**Building the wage-to-quality ratio heap:**

Calculate the ratio for each worker and push (ratio, quality) tuples into the wageQualityRatio heap.

**Selecting Workers:**

- Iterate over each worker sorted by their wage-to-quality ratio (popping from the wageQualityRatio heap):

- Add the worker's quality to the qualityTillNow.

- Push the negative of the worker's quality into highQualityWorkers to maintain it as a max-heap.

- If the size of highQualityWorkers exceeds k, remove the worker with the highest quality from highQualityWorkers and adjust qualityTillNow accordingly.

- If we have exactly k workers in highQualityWorkers, calculate the potential cost using the current ratio and qualityTillNow. Update minCost if this new cost is lower than the previously recorded minimum cost.

# Complexity
- Time complexity:
O(nlogn+nlogk)

- Space complexity:
O(n+k)

# Code
```Python []
class Solution:
    def mincostToHireWorkers(
        self, quality: List[int], wage: List[int], k: int
    ) -> float:
        nQuality = len(quality)
        minCost = float("inf")
        qualityTillNow = 0
        wageQualityRatio = []

        for i in range(nQuality):
            heappush(wageQualityRatio, (wage[i] / quality[i], quality[i]))

        highQualityWorkers = []

        for i in range(nQuality):
            ratio, qua = heappop(wageQualityRatio)
            qualityTillNow += qua
            heappush(highQualityWorkers, -qua)

            if len(highQualityWorkers) > k:
                qualityTillNow += heappop(highQualityWorkers)

            if len(highQualityWorkers) == k:
                minCost = min(minCost, qualityTillNow * ratio)

        return minCost

```
```C++ []
class Solution {
public:
    double mincostToHireWorkers(vector<int>& quality, vector<int>& wage,
                                int k) {
        int n = quality.size();
        double minCost = DBL_MAX; // Equivalent to float('inf') in Python
        double qualityTillNow = 0;

        // Vector to store ratio and quality, which will be used to create a
        // min-heap
        vector<pair<double, int>> wageQualityRatio;
        for (int i = 0; i < n; ++i) {
            wageQualityRatio.emplace_back(
                static_cast<double>(wage[i]) / quality[i], quality[i]);
        }

        // Sort by ratio to mimic a min-heap pop operation
        sort(wageQualityRatio.begin(), wageQualityRatio.end());

        // Max-heap to store qualities; C++ priority_queue is a max-heap by
        // default
        priority_queue<int> highQualityWorkers;

        for (int i = 0; i < n; ++i) {
            double ratio = wageQualityRatio[i].first;
            int qua = wageQualityRatio[i].second;

            qualityTillNow += qua;
            highQualityWorkers.push(qua);

            // If we have more than k workers, remove the one with the highest
            // quality
            if (highQualityWorkers.size() > k) {
                qualityTillNow -= highQualityWorkers.top();
                highQualityWorkers.pop();
            }

            // Calculate cost when we have exactly k workers
            if (highQualityWorkers.size() == k) {
                minCost = min(minCost, qualityTillNow * ratio);
            }
        }

        return minCost;
    }
};
```
```Java []
class Solution {
    public double mincostToHireWorkers(int[] quality, int[] wage, int k) {
        int n = quality.length;
        double minCost = Double.MAX_VALUE;
        double qualityTillNow = 0;

        List<Worker> workers = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            workers.add(new Worker(wage[i] / (double) quality[i], quality[i]));
        }

        // Sorting workers by their wage-quality ratio
        Collections.sort(workers);

        // Max-heap for the qualities using a comparator
        PriorityQueue<Integer> highQualityWorkers = new PriorityQueue<>(Comparator.reverseOrder());

        for (Worker worker : workers) {
            double ratio = worker.ratio;
            int qua = worker.quality;

            qualityTillNow += qua;
            highQualityWorkers.add(qua);

            if (highQualityWorkers.size() > k) {
                qualityTillNow -= highQualityWorkers.poll();
            }

            if (highQualityWorkers.size() == k) {
                minCost = Math.min(minCost, qualityTillNow * ratio);
            }
        }

        return minCost;
    }

    // Helper class to store the ratio and quality and implement comparable for
    // sorting
    private class Worker implements Comparable<Worker> {
        double ratio;
        int quality;

        Worker(double ratio, int quality) {
            this.ratio = ratio;
            this.quality = quality;
        }

        @Override
        public int compareTo(Worker other) {
            return Double.compare(this.ratio, other.ratio);
        }
    }
}
```
```Javascript []
/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */

class Worker {
    constructor(ratio, quality) {
        this.ratio = ratio;
        this.quality = quality;
    }
}

var mincostToHireWorkers = function (quality, wage, k) {
    const n = quality.length;
    let minCost = Number.MAX_VALUE;
    let qualityTillNow = 0;
    let workers = [];

    for (let i = 0; i < n; i++) {
        workers.push(new Worker(wage[i] / quality[i], quality[i]));
    }

    // Sorting workers by their wage-quality ratio
    workers.sort((a, b) => a.ratio - b.ratio);

    // Max-heap to store qualities, implemented using a min-heap and inverting the values
    let highQualityWorkers = [];

    for (let worker of workers) {
        let ratio = worker.ratio;
        let qua = worker.quality;

        qualityTillNow += qua;
        highQualityWorkers.push(-qua);  // Push negative to simulate max-heap
        highQualityWorkers.sort((a, b) => a - b);  // Sort to maintain heap properties

        if (highQualityWorkers.length > k) {
            qualityTillNow += highQualityWorkers.shift();  // Remove largest quality (which is negative)
        }

        if (highQualityWorkers.length === k) {
            minCost = Math.min(minCost, qualityTillNow * ratio);
        }
    }

    return minCost;
};
```

**Please Upvote**

**If you are confused; please comment**

![upvote.webp](./images/0.webp)

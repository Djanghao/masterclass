# 0ms with Typescript || JAVA || C++ || PYTHON3 || Greedy algorithm

**Author:** SanketSawant18
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-cost-to-hire-k-workers/solutions/5141642/](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/solutions/5141642/)

---

# Approach
Greedy algorithm

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Explanation
1. We start by creating a 2D array workers to store the wage-to-quality ratio and the quality of each worker.

1. We iterate over the workers, calculating the wage-to-quality ratio for each worker and storing it along with their quality in the workers array.

1. We sort the workers array based on the wage-to-quality ratio. This sorting ensures that workers are arranged in increasing order of their wage-to-quality ratio.

1. We create a priority queue maxHeap to keep track of the highest quality workers encountered so far. We use a max heap here to prioritize the workers with higher quality.

1. We initialize variables qualitySum to keep track of the sum of quality of the workers in the group and result to store the minimum cost required to hire k workers.

1. We iterate over the sorted workers. For each worker:

- We calculate the ratio and quality of the worker.
- We add the quality of the current worker to qualitySum.
- We add the quality of the worker to the maxHeap.
- If the size of maxHeap exceeds k, we remove the worker with the highest quality from the heap and subtract their quality from qualitySum.
- If the size of maxHeap is equal to k, we calculate the total cost for the group formed by multiplying the ratio with qualitySum and update result if it's smaller than the previous minimum.
7. Finally, we return the minimum cost stored in the result.

---

```java []
import java.util.*;

class Solution {
    public double mincostToHireWorkers(int[] quality, int[] wage, int k) {
        int n = quality.length;
        double[][] workers = new double[n][2];
        
        for (int i = 0; i < n; i++) {
            workers[i][0] = (double) wage[i] / quality[i];
            workers[i][1] = quality[i];
        }
        
        // Sort workers based on their wage-to-quality ratio
        Arrays.sort(workers, Comparator.comparingDouble(a -> a[0]));
        
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        int qualitySum = 0;
        double result = Double.MAX_VALUE;
        
        // Iterate over workers, forming groups
        for (double[] worker : workers) {
            double ratio = worker[0];
            int q = (int) worker[1];
            
            qualitySum += q;
            maxHeap.offer(q);
            
            if (maxHeap.size() > k) {
                qualitySum -= maxHeap.poll();
            }
            
            if (maxHeap.size() == k) {
                result = Math.min(result, ratio * qualitySum);
            }
        }
        
        return result;
    }
}

```
```python3 []
class Solution:
    def mincostToHireWorkers(self, quality: List[int], wage: List[int], k: int) -> float:
        n = len(quality)
        workers = sorted([(w / q, q) for w, q in zip(wage, quality)])  # Sort by wage-to-quality ratio
        result = float('inf')
        quality_sum = 0
        heap = []  # Use a min heap to keep track of the highest quality workers

        for ratio, q in workers:
            quality_sum += q
            heapq.heappush(heap, -q)  # Push negative quality to get the maximum quality

            if len(heap) > k:
                quality_sum += heapq.heappop(heap)  # Remove the worker with the highest quality

            if len(heap) == k:
                result = min(result, ratio * quality_sum)

        return result

```
```C++ []
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

class Solution {
public:
    double mincostToHireWorkers(vector<int>& quality, vector<int>& wage, int k) {
        int n = quality.size();
        vector<vector<double>> workers(n, vector<double>(2));

        for (int i = 0; i < n; i++) {
            workers[i][0] = static_cast<double>(wage[i]) / quality[i]; // Calculate wage-to-quality ratio
            workers[i][1] = quality[i];
        }

        // Sort workers based on their wage-to-quality ratio
        sort(workers.begin(), workers.end(), [](const vector<double>& a, const vector<double>& b) {
            return a[0] < b[0];
        });

        priority_queue<int> maxHeap;
        int qualitySum = 0;
        double result = numeric_limits<double>::max();

        // Iterate over workers, forming groups
        for (const auto& worker : workers) {
            double ratio = worker[0];
            int q = static_cast<int>(worker[1]);

            qualitySum += q;
            maxHeap.push(q);

            if (maxHeap.size() > k) {
                qualitySum -= maxHeap.top();
                maxHeap.pop();
            }

            if (maxHeap.size() == k) {
                result = min(result, ratio * qualitySum);
            }
        }

        return result;
    }
};

```
```Typescript []
class Worker {
    quality: number;
    wage: number;
    ratio: number;

    constructor(quality: number, wage: number) {
        this.quality = quality;
        this.wage = wage;
        this.ratio = wage / quality;
    }
}

function mincostToHireWorkers(quality: number[], wage: number[], k: number): number {
    const n: number = quality.length;
    const workers: Worker[] = [];

    for (let i = 0; i < n; i++) {
        workers.push(new Worker(quality[i], wage[i]));
    }
    workers.sort((a, b) => a.ratio - b.ratio);

    let ans: number = Number.MAX_SAFE_INTEGER;
    let sumq: number = 0;
    const pool: number[] = [];

    for (const worker of workers) {
        pool.push(worker.quality);
        sumq += worker.quality;

        if (pool.length > k) {
            pool.sort((a, b) => b - a);
            sumq -= pool.shift()!;
        }

        if (pool.length === k) {
            ans = Math.min(ans, sumq * worker.ratio);
        }
    }

    return ans;
};
```

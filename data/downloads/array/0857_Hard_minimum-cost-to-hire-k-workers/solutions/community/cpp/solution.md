# Fastest (100 %) | Clean & Concise

**Author:** gameboey
**Votes:** 187
**Link:** [https://leetcode.com/problems/minimum-cost-to-hire-k-workers/solutions/5141342/](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/solutions/5141342/)

---





# Approach- Priority Queue (Max Heap) + Sorting
Alright, listen up, you merc-loving maniacs! Let's break down this code in the most Deadpool-esque way possible :

**1. Searching for Offers**

First and foremost, we need to arrange these employees in order of their wage-quality ratio. Why? Because we want to employ those who are cheapest but meet the desired quality. It\u2019s almost like getting the least expensive hitmen that are still very good at their job.

**2. Create a Priority Queue for Squad Upgrades**

Following this, we establish a priority queue for keeping track of our highest quality workers up to that point. Imagine an elite group of soldiers of fortune for whom it is always important to find better warriors.

**3. Constructing the Starting Lineup**

To start off with, we will offer jobs to first k persons in term of wage-quality ratio. That gives us initial cost and initial sum of qualities. It looks like assembling our team from scratch just before going into battle.

**4. Promotion by Demotion**

And here comes the fun part! Go through remaining workers and see if there is any chance of replacing one lowest quality worker among those already hired with another one that is slightly better than him or her. This can be thought of as trading a rookie player for a veteran star athlete.

**5. Swapping That Kills**

So, we do away with the worst worker in our group and replace them with another worker who gives us a better value for money spent. The point here is that one can substitute a cheap mercenary with an expensive but very deadly one.

**6. Money control**

We should calculate the minimum cost after each replacement using the updated quality sum and the highest wage-to-quality ratio of all employees hired so far. It\u2019s just like drawing up a budget for our new and improved league of killers.

**7. Picking Up the Check**

Eventually, at this stage, we return back to the smallest cost found before now. Paying our last bill for this ultimate team of hired guns will be it, and getting bang-for-your-buck!

There you go! A simple yet effective way of hiring superior workers while maintaining low costs.

(Suppose Deadpool was making gesture implying \u201Cmic drop\u201D as he says something like \u201CThat\u2019s how you hire the best team for the lowest price, folks!\u201D)

# Dry - Run :


Input: quality = [10, 20, 5], wage = [70, 50, 30], k = 2

1. Arrange the staff in order of wage-to-quality ratio: = 
   [(2.5, 1), (6.0, 2), (7.0, 0)]

2. Initialize maxHeap (priority queue), qualitySum=0, maxRate=0.0.

3. Hire the first k = 2 workers:
   i = 0: qualitySum = 20, maxRate = 2.5, maxHeap = [20]
   i = 1: qualitySum = 25, maxRate = 6.0, maxHeap = [20, 5]
   res = maxRate * qualitySum = 6.0 * 25 = 150.0000

4. Iterate through remaining workers (i = 2 to n-1):
   i = 2:
     maxRate = max(6.0, 7.0) = 7.0
     qualitySum = 25 - 20 + 10 = 15 (removed top of maxHeap and added quality[0])
     maxHeap = [10, 5]
     res = min(res, maxRate * qualitySum) = min(150.0, 7.0 * 15) = 105.0

5. No more workers left, so return res = 105.0

The key steps:
- First hire k lowest wage/quality workers
- Then see if remaining higher wage/quality workers can replace existing highest wage/quality worker while lowering cost

So the output 105.00000 is correct:
- Hire worker 1 (quality 20) for wage 50
- Hire worker 2 (quality 5) for wage 30


# Complexity
- Time complexity: O(nlogn)

- Space complexity: O(n)

# Code
```C++ []
class Solution {
public:
    double mincostToHireWorkers(vector<int>& quality, vector<int>& wage, int k) {
        ios_base::sync_with_stdio(false);
        cin.tie(nullptr);
        cout.tie(nullptr);
        
        vector<pair<double, int>> ratio;
        int n = quality.size();
        
        for (int i = 0; i < n; ++i) {
                ratio.emplace_back(static_cast<double>(wage[i]) / quality[i], i);
            }
            
        sort(begin(ratio), end(ratio));
        priority_queue<int> maxHeap;
        int qualitySum = 0;
        double maxRate = 0.0;
        
        for (int i = 0; i < k; ++i) {
            qualitySum += quality[ratio[i].second];
            maxRate = max(maxRate, ratio[i].first);
            maxHeap.push(quality[ratio[i].second]);
        }

        double res = maxRate * qualitySum;
        for (int i = k; i < n; ++i) {
            maxRate = max(maxRate, ratio[i].first);
            qualitySum -= maxHeap.top(); 
            maxHeap.pop();

            qualitySum += quality[ratio[i].second];
            maxHeap.push(quality[ratio[i].second]);
            res = min(res, maxRate * qualitySum);
        }

        return res;
    }
};
```
```java []
class Solution {
    public double mincostToHireWorkers(int[] quality, int[] wage, int k) {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        List<Pair<Double, Integer>> ratio = new ArrayList<>();
        int n = quality.length, qualitySum = 0;
        double res = Double.MAX_VALUE, maxRate = 0.0;

        for (int i = 0; i < n; ++i) {
            ratio.add(new Pair<>((double) wage[i] / quality[i], i));
        }

        ratio.sort(Comparator.comparingDouble(p -> p.getKey()));
        for (int i = 0; i < k; ++i) {
            qualitySum += quality[ratio.get(i).getValue()];
            maxRate = Math.max(maxRate, ratio.get(i).getKey());
            maxHeap.offer(quality[ratio.get(i).getValue()]);
        }

        res = maxRate * qualitySum;
        for (int i = k; i <n; ++i) {
            maxRate = Math.max(maxRate, ratio.get(i).getKey());
            qualitySum -= maxHeap.poll();
            qualitySum += quality[ratio.get(i).getValue()];
            maxHeap.offer(quality[ratio.get(i).getValue()]);
            res = Math.min(res, maxRate * qualitySum);
        }

        return res;
    }
}
```
```python []
class Solution:
    def mincostToHireWorkers(
        self, quality: List[int], wage: List[int], k: int
    ) -> float:
        ratio = sorted([(w / q, q) for w, q in zip(wage, quality)])
        max_heap = []
        quality_sum = 0
        max_ratio = 0.0
        
        for i in range(k):
            max_ratio = max(max_ratio, ratio[i][0])
            quality_sum += ratio[i][1]
            heapq.heappush(max_heap, -ratio[i][1])
        
        res = max_ratio * quality_sum
        
        for i in range(k, len(quality)):
            max_ratio = max(max_ratio, ratio[i][0])
            quality_sum += ratio[i][1] + heapq.heappop(max_heap)
            heapq.heappush(max_heap, -ratio[i][1])
            res = min(res, max_ratio * quality_sum)
        
        return res
```
![deadpool.jpg](./images/0.jpeg)

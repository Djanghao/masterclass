# Official Solution

**Link:** [https://leetcode.com/problems/minimum-cost-to-hire-k-workers/solution/](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/solution/)

---

[TOC]

## Solution

---

### Overview

We need to hire exactly `k` workers from a pool of `n` workers. Each worker has a quality and a minimum wage expectation. The goal is to form a paid group while satisfying two conditions:

1. Each worker in the paid group must receive at least their minimum wage expectation.

2. Each worker in the paid group should be paid in proportion to their quality relative to other workers in the group.

How do we determine the workers' wages based on these conditions?

Suppose we have 2 workers `i` and `j`,

$$\frac{{\text{wage}[i]}}{{\text{wage}[j]}} = \frac{{\text{quality}[i]}}{{\text{quality}[j]}}$$

$$\frac{{\text{wage}[i]}}{{\text{quality}[i]}} = \frac{{\text{wage}[j]}}{{\text{quality}[j]}}$$

Meaning if a worker’s quality is double that of another worker in the group, then they must be paid twice as much as the other worker.

Consider the first example($k = 2$) from the problem description:

> **Input:** quality = [10,20,5], wage = [70,50,30], k = 2

To start, let's say we hire workers `0` and `2`. Their combined quality is 15 units $(10 + 5)$. Now, we allocate payment based on their contribution to this total quality:

Worker `0` will be paid as follows: $\frac{10}{15} = \frac{2}{3}$ $\frac{\text{individual quality}}{\text{total quality}}$.

Worker `2` will be paid as follows: $\frac{5}{15} = \frac{1}{3}$ $\frac{\text{individual quality}}{\text{total quality}}$.

We use this to meet condition 2: Workers are compensated in proportion to their quality relative to other workers in the group i.e., worker `0` receives $\frac{2}{3}$ of the total payment, and Worker `2` receives $\frac{1}{3}$.

Worker `0` has the higher minimum wage, $$ \$70 $$. We can set up the following proportion to determine $x$, the amount of money worker `2` will make:

$$ \frac{\frac{1}{3}}{\frac{2}{3}} = \frac{x}{70} \rightarrow \frac{1}{2} = \frac{x}{70} \rightarrow 2x = 70 \rightarrow x = 35$$

The cost of the paid group is $$70 + 35 = \$105$$.

The task is to find the least amount of money needed to form such a paid group. We can calculate the cost of each possible group as follows.

The wage to quality ratio, for worker `0` is $$ \$7 $$ per unit ($\frac{\text{wage}}{\text{quality}} = \frac{70}{10}$), and for worker `2`, its ($\frac{\text{wage}}{\text{quality}} = \frac{30}{5}$) per unit.

Thus, to satisfy both conditions, we must pay each worker at least $$ \$7 $$ per unit to meet the minimum wage and quality requirements. This internal selection process ensures that both quality and wage requirements are met.

Now, to determine the optimal worker pool, we compute the maximum quality per unit multiplied by the total quality ($\frac{\text{max quality}}{\text{unit}} \times \text{total quality}$) for every pair of $$ \$2 $$ ($k$) workers. This gives the minimum expected wage that fulfills both conditions.

- For worker `0` and `1`: $$7 \times 30 (\frac{70}{10} \times [10 + 20]) = \$210$$.
- For worker `0` and `2`: $$7 \times 15 (\frac{70}{10} \times [10 + 5]) = \$105$$.
- For worker `1` and `2`: $$6 \times 25 (\frac{30}{5} \times [20 + 5]) = \$150$$.

The cost of the cheapest paid group is $$\$105$$.

---

### Approach: Priority Queue

#### Intuition

Our goal is to minimize the total cost of hiring exactly `k` workers. The cost of hiring a worker depends on two factors: the worker's quality and the ratio of their wage to their quality (wage-to-quality ratio).

First, we observe that hiring workers with lower wage-to-quality ratios could potentially lead to a lower overall cost. This observation motivates us to sort the workers based on their wage-to-quality ratios in ascending order. By doing so, we can consider the workers with the lowest ratios first, which are the most cost-effective options.

However, we also need to keep track of the qualities of the workers we have hired so far. This is because the total cost is calculated as the sum of the products of each worker's quality and their wage-to-quality ratio. We can use a priority queue (max heap) data structure to efficiently manage the worker qualities. The priority queue will always maintain the `k` workers with the lowest qualities, allowing us to calculate the total cost for the current set of `k` workers.

Now, we can iterate through the sorted list of workers. For each worker, we add their quality to the priority queue and update the sum of qualities in the priority queue. If the size of the priority queue exceeds `k`, we remove the worker with the highest quality to maintain a size of `k`.

Once the priority queue contains exactly `k` workers, we can calculate the total cost for the current set of workers by multiplying each worker's quality by their wage-to-quality ratio and summing the products. If this cost is lower than the current minimum cost, we update the result.

> **Note:** The above explanation is sufficient to understand the solution to the problem. We've included the explanation using mathematical logic for an alternate representation.

<details>
<summary><b>Mathematical Representation:</b></summary>

We aim to hire a specific number of workers from a pool while ensuring two key conditions:

Let $Worker$ be the worker at position $i$ and $Other$ as any worker not at position $i$.

1. **Condition A:**

$$\frac{\text{moneyToBePaid}_{\text{worker}}}{\text{quality}_{\text{worker}}} = \frac{\text{moneyToBePaid}_{\text{other}}}{\text{quality}_{\text{other}}}$$

- This condition ensures that the ratio of money to be paid to quality is the same for both chosen workers ($\text{worker}$ and $\text{other}$).

**Equation 1: Wage Calculation for Chosen Worker:**

$$\text{wage}_{\text{worker}} = \frac{\text{moneyToBePaid}}{\text{quality}_{\text{worker}} \times \text{quality}_{\text{other}}}$$

- This equation calculates the wage for a chosen worker based on the money to be paid, the worker's quality, and the other worker's quality($\text{other}$).

2. **Condition B:**

$$\text{moneyToBePaid}_{\text{worker}} \geq \text{wage}_{\text{other}}$$

$$\frac{\text{wage}_{\text{worker}}}{\text{quality}_{\text{worker}}} \geq \frac{\text{wage}_{\text{other}}}{\text{quality}_{\text{other}}}$$

$$\text{ratio}_{\text{worker}} \geq \text{ratio}_{\text{other}}$$

- This condition ensures that the money to be paid to a chosen worker ($\text{worker}$) is greater than or equal to the wage of any other worker ($\text{other}$).

**Sorting Workers:**

- If we sort the array workers containing (quality, wage) in increasing order of ratio, then for every index $i$, we know that we can select every worker on the left of $i$ because the group meets condition B:

$\text{ratio}_j \leq \text{ratio}_i$ . . . . . . for $0 \leq j < i$

- This step ensures that workers are sorted based on their ratio of quality to wage, allowing us to make efficient decisions in selecting workers. Here, $\text{ratio}_i$ represents the ratio of quality to wage for the worker at index $i$, and $j$ represents indices of workers on the left of $i$.

**Final Selection:**

Using equation (1), the total cost for a paid group will be:

$$[ \text{totalWage}_i = \text{workers}[i].\text{wage} + \left( \sum_{\text{smallest } k-1 \text{ qualities on the left of } i} \right) \times \text{ratio}_i]$$

where, $$\text{ratio}_i = \frac{\text{workers}[i].\text{wage}}{\text{workers}[i].\text{quality}}$$

The answer will be the smallest $\text{totalWage}_i$ for every $i$. 

We can use a priority queue to find the sum of the smallest $k - 1$ qualities on the left of $i$ in $\log k$ time.

</details>


The following is an illustration demonstrating the priority queue approach:

!?!../Documents/857/pq.json:977,423!?!

#### Algorithm

- Initialize variables `n` to store the size of the input arrays (`quality` and `wage`), `totalCost` to store the minimum total cost (initially set to the maximum possible value) and `currentTotalQuality` to keep track of the sum of qualities of the current set of workers.
- Create an array `wageToQualityRatio` to store the wage-to-quality ratio and the quality of each worker as pairs.
- Calculate the wage-to-quality ratio for each worker and store it in `wageToQualityRatio`.
- Sort `wageToQualityRatio` in ascending order based on the wage-to-quality ratio.
- Create a priority queue `workers` (max heap) to store the workers chosen for the paid group. The highest quality worker is stored at the top of the heap, so we can quickly remove them if we find a better candidate for the paid group.
- Iterate through the sorted `wageToQualityRatio`:
  - Push the current worker's quality to `workers`.
  - Update `currentTotalQuality` by adding the current worker's quality.
  - If the size of `workers` exceeds `k`:
    - Remove the worker with the highest quality from `workers`.
    - Update `currentTotalQuality` by subtracting the removed worker's quality.
  - If the size of `workers` is equal to `k`:
    - Calculate the total cost for the current set of workers by multiplying `currentTotalQuality` by the wage-to-quality ratio of the current worker.
    - Update `totalCost` if the calculated cost is smaller than the current minimum cost.
- After iterating through all workers, return `totalCost`, which holds the minimum total cost for hiring `k` workers.
- Return `totalCost`.

#### Implementation

<iframe src="https://leetcode.com/playground/V9GxdZg5/shared" frameBorder="0" width="100%" height="500" name="V9GxdZg5"></iframe>

#### Complexity Analysis

Let $n$ be the number of workers and $k$ be the size of the priority queue (bounded by `k`).

- Time complexity: $O(n \log n + n \log k)$

    Sorting the workers based on their wage-to-quality ratio takes $O(n \log n)$.
    
    Each worker is processed once, and for each worker, we perform push/pop operations on the priority queue, which takes $O(\log k)$, so processing the workers takes $O(n \log k)$.

    So, the total time complexity is $O(n \log n + n \log k)$, which is dominated by the sorting step when `k` is much smaller than `n`.

- Space complexity: $O(n + k)$

    We use $O(n)$ additional space to store the wage-to-quality ratio for each worker.
        
    We use a priority queue to keep track of the highest quality workers, which can contain at most $k$ workers.
    
    Note that some extra space is used when we sort an array in place. The space complexity of the sorting algorithm depends on the programming language.
    - In Python, the `sort` method sorts a list using the Tim Sort algorithm which is a combination of Merge Sort and Insertion Sort and has $O(n)$ additional space. Additionally, Tim Sort is designed to be a stable algorithm.
    - In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log n)$ for sorting an array.
    - In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worse-case space complexity of $O( \log n)$.
    
    So, the total space complexity is $O(n + k)$, where $n$ is the dominating term when `k` is much smaller than `n`.

---
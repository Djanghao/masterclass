# Official Solution

**Link:** [https://leetcode.com/problems/maximum-average-pass-ratio/solution/](https://leetcode.com/problems/maximum-average-pass-ratio/solution/)

---

[TOC]

## Solution

--- 

### Overview

Imagine a school where each class has students preparing for their final exams. Some students in each class are expected to pass, while others may fail. Now, imagine you have a few extra brilliant students who are guaranteed to pass, and you can assign them to any class. The goal is to determine the highest possible average pass ratio across all classes after distributing these extra students.

The pass ratio of a class is calculated as the number of passing students divided by the total number of students in that class. To find the highest possible average pass ratio, we should focus on assigning each extra student to the class where the addition of that student results in the highest relative increase in pass ratio. For example, adding a brilliant student to a class with fewer passing students can have a bigger impact than adding them to a class that already has a high pass ratio.

##### Key Details:

1. The pass ratio for a class is calculated as:  

$$
\begin{aligned}
   \boxed{\text{Pass Ratio} = \frac{\text{pass}_i}{\text{total}_i} \text{, where } \text{pass}_i \text{ is the number of passing students and } \text{total}_i \text{ is the total number of students.}}
\end{aligned}
$$

2. The average pass ratio is defined as:

$$
\begin{aligned}
    \boxed{\text{Average Pass Ratio} = \frac{\text{Sum of Pass Ratios of All Classes}}{\text{Number of Classes}}}
\end{aligned}
$$

Now the question is, how is this greedy strategy working? This strategy picks the class that shows the largest increase in ratio when an extra student is added at each step. Why don't we pick the class with the largest increase in ratio when adding two extra students? Why is it guaranteed that the current step is optimal, as it seems to depend on the result of the previous step? Let's formally prove this in the proof below.

<details>
  <summary>Formal Proof (Click Here!)</summary>

#### Formal Proof:

$
\begin{aligned}
    \boxed{\text{Optimality of Greedy Strategy in Distributing Extra Students}}
\end{aligned}
$

##### Definitions and Notation

- Let $C$ be the set of classes.
- For each class $c \in C$, let:
  - $p_c$ be the number of students who have passed.
  - $t_c$ be the total number of students.
  - The pass ratio of class $c$ is defined as $r_c = \frac{p_c}{t_c}$.
- Let $S$ be the total number of extra students to be distributed.
- Let $\Delta(c, k)$ be the increase in the pass ratio of class $c$ when $k$ extra students are added.

##### Objective

We aim to maximize the average pass ratio across all classes after distributing the extra students. The average pass ratio is given by:

$
\begin{aligned}
    \boxed{\text{AvgPassRatio} = \frac{1}{|C|} \sum_{c \in C} r_c}
\end{aligned}
$

##### Strategy

1. **Calculate Gain Function**: Define a function $\Delta(c, k)$ that computes the increase in the pass ratio of class $c$ when $k$ extra students are added.
2. **Greedy Allocation**: At each step, add one extra student to the class $c$ that maximizes $\Delta(c, 1)$.

##### Proof

**Lemma 1**: For each class $c$, the increase in the pass ratio $\Delta(c, k)$ is decreasing as $k$ increases.

**Proof**:

Consider the pass ratio $r_c$ of class $c$ after adding $k$ extra students:

$
\begin{aligned}
    \boxed{r_c = \frac{p_c + k}{t_c + k}}
\end{aligned}
$

The increase in the pass ratio when adding $k$ extra students is:

$
\begin{aligned}
    \boxed{\Delta(c, k) = \frac{p_c + k}{t_c + k} - \frac{p_c}{t_c}}
\end{aligned}
$

To show that $\Delta(c, k)$ is decreasing, consider the difference $\Delta(c, k+1) - \Delta(c, k)$:

$
\begin{aligned}
    \boxed{\Delta(c, k+1) = \frac{p_c + k + 1}{t_c + k + 1} - \frac{p_c}{t_c}}
\end{aligned}
$

$
\begin{aligned}
    \boxed{\Delta(c, k) = \frac{p_c + k}{t_c + k} - \frac{p_c}{t_c}}
\end{aligned}
$

The difference is:

$
\begin{aligned}
    \boxed{\Delta(c, k+1) - \Delta(c, k) = \left( \frac{p_c + k + 1}{t_c + k + 1} - \frac{p_c}{t_c} \right) - \left( \frac{p_c + k}{t_c + k} - \frac{p_c}{t_c} \right)}
\end{aligned}
$

Simplifying, we get:

$
\begin{aligned}
    \boxed{\Delta(c, k+1) - \Delta(c, k) = \frac{p_c + k + 1}{t_c + k + 1} - \frac{p_c + k}{t_c + k}}
\end{aligned}
$

This expression is always non-positive because the pass ratio $r_c$ is a concave function of $k$ (since the derivative of $r_c$ with respect to $k$: $\frac{p_c - t_c}{(t_c + k)^2}$ is decreasing). Therefore, $\Delta(c, k)$ is decreasing as $k$ increases.

**Lemma 2**: The best local option (adding one extra student to the class with the highest $\Delta(c, 1)$) is always the best.

**Proof**:

Assume for contradiction that there exists a better strategy that does not always add one extra student to the class with the highest $\Delta(c, 1)$. Let $c_1$ be the class with the highest $\Delta(c, 1)$ at some step, and let $c_2$ be another class chosen by the alternative strategy.

- Let $\Delta(c_1, 1) = \delta_1$ and $\Delta(c_2, 1) = \delta_2$.
- By definition, $\delta_1 \geq \delta_2$.

If we add one extra student to $c_1$, the immediate gain is $\delta_1$. If we add one extra student to $c_2$, the immediate gain is $\delta_2$. Since $\delta_1 \geq \delta_2$, the immediate gain is maximized by adding the student to $c_1$. This contradicts the assumption that there exists a better strategy. Therefore, the greedy strategy is optimal at each step.

**Lemma 3**: It is a loss if we don't take the best local option.

**Proof**:

If we do not take the best local option (adding one extra student to the class with the highest $\Delta(c, 1)$), we are choosing a class with a lower $\Delta(c, 1)$. By Lemma 1, the increase in the pass ratio is decreasing as we add more students. Therefore, not taking the best local option results in a smaller increase in the pass ratio, which is a loss.

**Theorem**: The described greedy algorithm maximizes the average pass ratio after distributing the extra students.

**Proof**:

By Lemma 1, the increase in the pass ratio $\Delta(c, k)$ is decreasing as $k$ increases. By Lemma 2, the best local option (adding one extra student to the class with the highest $\Delta(c, 1)$) is always the best. By Lemma 3, it is a loss if we don't take the best local option. Therefore, the greedy algorithm systematically optimizes the overall pass ratio by focusing on the class that yields the highest immediate gain at each step.

Thus, the final average pass ratio computed by the algorithm is the maximum possible average pass ratio achievable with the given number of extra students.

</details>

---

### Approach 1: Brute Force (Time Limit Exceeded Error)

#### Intuition

So, from what we've gathered, our main goal is to maximize the overall pass rate across all classes by strategically adding a set number of extra students. To do this, we need to figure out where each extra student will make the biggest difference in terms of improving the pass rate. This means we need to evaluate how much each class's pass rate would improve if we added just one more student.

First off, we calculate the current pass rate for each class. This is simply the ratio of students who passed to the total number of students in that class. 

Once we have these ratios, we can start looking at each class one by one and see how much the pass rate would go up if we added one student. By comparing these improvements across all classes, we can identify which class would benefit the most from an extra student. This way, we make sure that each extra student is placed where they'll have the greatest impact on the overall pass rate.

After placing a student in the class that benefits the most, we update that class's pass rate and repeat the process until we've distributed all the extra students. 

Finally, once we've updated all the pass rates, we calculate the average pass rate across all classes.

However, given that there can be up to 100,000 classes and 100,000 extra students, this approach will result in a Time Limit Exceeded (TLE) error.

#### Algorithm

- Initialize a `passRatios` array to store the initial pass ratio for each class.
  - For each class in `classes`, compute the ratio of passed students to total students and store it in `passRatios`.

- While `extraStudents` is greater than zero:
  - Decrement `extraStudents` by 1.
  - Initialize an `updatedRatios` array to store the pass ratios if an extra student is added to each class.
    - For each class in `classes`, calculate the new ratio of passed students to total students after adding one student and store it in `updatedRatios`.
  - Find the class that gains the most from an extra student:
    - Initialize `bestClassIndex` to 0 and `maximumGain` to 0.
    - For each class, compute the gain in the pass ratio by subtracting the current ratio from the updated ratio.
    - If the gain is greater than `maximumGain`, update `bestClassIndex` and `maximumGain` accordingly.
  - Update the selected class by incrementing its passed students and total students.
  - Update `passRatios` with the new ratio for the selected class.

- Initialize `totalPassRatio` to 0.
  - Sum up all the pass ratios from `passRatios`.

- Return the average pass ratio by dividing `totalPassRatio` by the number of classes.

#### Implementation

<iframe src="https://leetcode.com/playground/eFrQTwLz/shared" frameBorder="0" width="100%" height="500" name="eFrQTwLz"></iframe>

#### Complexity Analysis

Let $n$ be the number of classes in the `classes` array and $k$ be the number of extra students.

- Time complexity: $O(k \cdot n)$

    The outer loop runs $k$ times (once for each extra student).

    Inside the loop, we have two main operations:
        1. Calculating the updated pass ratios for all classes: This involves iterating over all $n$ classes, resulting in $O(n)$ time.
        2. Finding the class with the maximum gain: This involves another iteration over all $n$ classes, resulting in $O(n)$ time.
    
    Therefore, the total time complexity is $O(k \cdot n)$.

- Space complexity: $O(n)$

    We use a array `passRatios` of size $n$ to store the pass ratios of all classes. Additionally, we use a temporary array `updatedRatios` of size $n$ to store the updated pass ratios. The space complexity is dominated by these two arrays, resulting in $O(n)$ space.

---

### Approach 2: Priority Queue

#### Intuition

In Approach 1, we used an array and maintained a tracking variable, `maximumGain`, to record the maximum difference between the new and old pass ratios. However, this approach resulted in a TLE due to the extra loop used to find the maximum difference. To optimize this, we can eliminate the loop by using a priority queue.

First, we need a clear way to measure improvement. We create a lambda function called `calculateGain` to compute how much the pass ratio of a class would increase if an extra student were added. This provides a consistent metric to evaluate and compare the potential impact on different classes.

Next, we build a max heap. Each class is represented by a tuple containing its negative gain (to simulate a max heap using Python's default min heap), along with its current number of passed and total students. This ensures that the class with the highest gain can always be retrieved efficiently.

We then distribute the extra students iteratively. At each step, we pop the class with the highest potential gain from the heap. We simulate the addition of one extra student to this class, updating its number of passed and total students. We then recalculate its gain and push the updated class back into the heap, allowing us to continuously adjust to the changing gains of each class as students are allocated.

After all extra students are distributed, we compute the final result. By popping all classes from the heap and summing their current pass ratios, we calculate the total pass ratio. Dividing this sum by the number of classes gives us the average pass ratio.

#### Algorithm

- Define a lambda function `calculateGain` to compute the gain in pass ratio by adding an extra student to a class.

- Initialize a max heap (`maxHeap`) to store tuples of the form `(-gain, {passes, totalStudents})` ; The negative gain ensures the largest gain is at the top of the heap.
  - For each class in `classes`, calculate the gain using `calculateGain` and push the tuple into `maxHeap`.

- While there are `extraStudents` to distribute:
  - Decrement `extraStudents` by 1.
  - Pop the class with the maximum gain from `maxHeap`.
  - Extract `passes` and `totalStudents` of the class.
  - Update the class with one additional pass and one additional total student.
  - Recalculate the gain for this updated class and push the new tuple back into `maxHeap`.

- Initialize `totalPassRatio` to 0 for calculating the overall pass ratio.
  - While `maxHeap` is not empty, pop each class and add its pass ratio (`passes / totalStudents`) to `totalPassRatio`.

- Return the final average pass ratio by dividing `totalPassRatio` by the number of classes.

#### Implementation

<iframe src="https://leetcode.com/playground/GZbo3cKe/shared" frameBorder="0" width="100%" height="500" name="GZbo3cKe"></iframe>

#### Complexity Analysis

Let $n$ be the number of classes in the `classes` array and $k$ be the number of extra students.

- Time complexity: $O(k \cdot \log(n) + n)$

    Building the max heap: Inserting each class into the max heap takes $O(\log n)$ time per insertion, and since there are $n$ classes, this step takes $O(n \log n)$ time.
    - Distributing extra students: Each insertion and removal from the max heap takes $O(\log n)$ time. Since we perform this operation $k \cdot$ times, this step takes $O(k \cdot \log n)$ time.
    - Calculating the final average pass ratio: This involves iterating through the heap, which takes $O(n \log n)$ time in the worst case.

    Overall, the dominant factor is the initial heap construction and the distribution of extra students, leading to a time complexity of $O(k \log n + n \log n) = O(k \cdot \log(n) + n)$.

> Note: When we create an array and directly heapify it, the process takes $O(n)$ time to convert the array into a valid heap. If we then perform $k$ additional operations (e.g., extracting or inserting elements), each operation takes $O(\log(n))$, leading to a total complexity of $O(k \cdot \log(n) + n)$.

- Space complexity: $O(n)$

    The space complexity is determined by the max heap, which stores $n$ elements (one for each class). Additionally, the lambda function and other local variables consume constant space.

    Therefore, the space complexity is $O(n)$.

---
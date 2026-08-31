# Greedy with proof (Python/Java/C++/Go)

**Author:** endlesscheng
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-processing-time/solutions/4150520/](https://leetcode.com/problems/minimum-processing-time/solutions/4150520/)

---

When a processor completes its $4$ tasks, the completion time depends on the maximum value of these $4$ tasks.

Intuitively, a processor with a larger idle time and smaller tasks will finish earlier.

Proof: For two processors with idle times $p_1$ and $p_2$ respectively, without loss of generality, assume $p_1 \\leq p_2$. The maximum values of the 4 tasks are $t_1$ and $t_2$ respectively, without loss of generality, assume $t_1 \\leq t_2$.

If $t_1$ is assigned to processor 1 and $t_2$ is assigned to processor 2, the completion time is

$$
\\max(p_1 + t_1, p_2 + t_2) = p_2 + t_2
$$

If $t_1$ is assigned to processor 2 and $t_2$ is assigned to processor 1, the completion time is

$$
\\max(p_1 + t_2, p_2 + t_1) \\leq \\max(p_2 + t_2, p_2 + t_2) = p_2 + t_2
$$

This shows that a processor with a larger idle time and smaller tasks will not finish later.

We can sort $\	extit{processorTime}$ in ascending order and sort $\	extit{tasks}$ in descending order. Then, the answer is the maximum value of

$$
\	extit{processorTime}[i] + \	extit{tasks}[4i]
$$

```py [sol-Python3]
class Solution:
    def minProcessingTime(self, processorTime: List[int], tasks: List[int]) -> int:
        processorTime.sort()
        tasks.sort(reverse=True)
        return max(p + t for p, t in zip(processorTime, tasks[::4]))
```

```java [sol-Java]
class Solution {
    public int minProcessingTime(List<Integer> processorTime, List<Integer> tasks) {
        Collections.sort(processorTime);
        tasks.sort(Collections.reverseOrder());
        int ans = 0;
        for (int i = 0; i < processorTime.size(); i++) {
            ans = Math.max(ans, processorTime.get(i) + tasks.get(i * 4));
        }
        return ans;
    }
}
```

```cpp [sol-C++]
class Solution {
public:
    int minProcessingTime(vector<int>& processorTime, vector<int>& tasks) {
        ranges::sort(processorTime);
        ranges::sort(tasks, greater());
        int ans = 0;
        for (int i = 0; i < processorTime.size(); i++) {
            ans = max(ans, processorTime[i] + tasks[i * 4]);
        }
        return ans;
    }
};
```

```go [sol-Go]
func minProcessingTime(processorTime, tasks []int) (ans int) {
	slices.Sort(processorTime)
	slices.SortFunc(tasks, func(a, b int) int { return b - a })
	for i, p := range processorTime {
		ans = max(ans, p+tasks[i*4])
	}
	return
}
```

**Time complexity**: $\\mathcal{O}(n\\log n)$, where $n$ is the length of $\	extit{processorTime}$.
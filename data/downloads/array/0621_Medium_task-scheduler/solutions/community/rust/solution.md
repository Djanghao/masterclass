# Beats 100% 🚀➡️O(N) Solution Full Explained💯➡️[Java/C++/JavaScript/Rust/Go]

**Author:** Shivansu_7
**Votes:** 7
**Link:** [https://leetcode.com/problems/task-scheduler/solutions/4896262/](https://leetcode.com/problems/task-scheduler/solutions/4896262/)

---

# Approach
1. **Greedy Task Arrangement**:
    - Arrange tasks based on their frequency, starting with the most frequent ones.
2. **Example Scenario**:
   - Consider tasks: 3 A, 2 B, 1 C, with n = 2 idle slots.
3. **Arranging Tasks**:
   - Begin with task A, spacing them apart by at least n = 2 empty slots.

4. **Visual Representation**:
   - Represent the arrangement with placeholders for tasks, showing empty slots as "?".
   - After arranging A: A ? ? A ? ? A

5. **Sequential Arrangement**:
   - Continue arranging tasks B and C using the same strategy.

6. **Final Schedule**:
   - The completed schedule reflects task placement, with "#" denoting idle slots.
   - Example: A B C A B # A

7. **Calculating Idle Slots**:
   - Determine the total idle slots needed for task arrangement.

8. **Handling Multiple Tasks with Highest Frequency**:
   - Consider scenarios where there are multiple tasks with the highest frequency.

9. **Special Case Handling**:
   - Address scenarios where the number of tasks exceeds the available idle slots.

10. **Adjusting Part Lengths**:
    - Understand that partCount represents the minimum length of each part required for arranging tasks, but the length can be extended.

11. **Example: Flexibility in Part Lengths**:
    - Illustrate an example where the minimum part length requirement is met initially, but additional tasks can still be accommodated within each part.

12. **Handling Negative emptySlots**:
    - Interpretation of negative emptySlots indicating sufficient tasks to fill parts, but recognizing the flexibility to add more tasks within each part.

<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
class Solution {
    public int leastInterval(char[] tasks, int n) {
        int[] freq = new int[26];
        int max = 0;
        int maxCount = 0;
        for(char task : tasks) {
            freq[task-'A']++;
            if(max==freq[task-'A']) {
                maxCount++;
            }
            else if(max < freq[task -'A']) {
                max = freq[task-'A'];
                maxCount = 1;
            }
        }

        int gapCount = max - 1;
        int gapLength = n -(maxCount - 1);
        int empty = gapCount * gapLength;
        int availableTasks = tasks.length - max*maxCount;
        int idles = Math.max(0, empty - availableTasks);

        return tasks.length+idles;
    }
}
```
```C++ []
class Solution {
public:
    int leastInterval(vector<char>& tasks, int n) {
        vector<int> freq(26, 0);
        int max = 0;
        int maxCount = 0;
        for (char task : tasks) {
            freq[task - 'A']++;
            if (max == freq[task - 'A']) {
                maxCount++;
            } else if (max < freq[task - 'A']) {
                max = freq[task - 'A'];
                maxCount = 1;
            }
        }

        int gapCount = max - 1;
        int gapLength = n - (maxCount - 1);
        int empty = gapCount * gapLength;
        int availableTasks = tasks.size() - max * maxCount;
        int idles = max(0, empty - availableTasks);

        return tasks.size() + idles;
    }
};
```
```Python []
class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        freq = [0] * 26
        max_count = 0
        max_freq = 0
        for task in tasks:
            freq[ord(task) - ord('A')] += 1
            if max_freq == freq[ord(task) - ord('A')]:
                max_count += 1
            elif max_freq < freq[ord(task) - ord('A')]:
                max_freq = freq[ord(task) - ord('A')]
                max_count = 1

        gap_count = max_freq - 1
        gap_length = n - (max_count - 1)
        empty = gap_count * gap_length
        available_tasks = len(tasks) - max_freq * max_count
        idles = max(0, empty - available_tasks)

        return len(tasks) + idles
```
```Rust []
impl Solution {
    pub fn least_interval(tasks: Vec<char>, n: i32) -> i32 {
        let mut freq = vec![0; 26];
        let mut max = 0;
        let mut max_count = 0;

        for &task in tasks.iter() {
            freq[task as usize - 'A' as usize] += 1;
            if max == freq[task as usize - 'A' as usize] {
                max_count += 1;
            } else if max < freq[task as usize - 'A' as usize] {
                max = freq[task as usize - 'A' as usize];
                max_count = 1;
            }
        }

        let gap_count = max - 1;
        let gap_length = n - (max_count - 1);
        let empty = gap_count * gap_length;
        let available_tasks = tasks.len() - max * max_count;
        let idles = std::cmp::max(0, empty - available_tasks);

        (tasks.len() as i32) + idles
    }
}
```
```Go []
func leastInterval(tasks []byte, n int) int {
    freq := make([]int, 26)
    max := 0
    maxCount := 0

    for _, task := range tasks {
        freq[task-'A']++
        if max == freq[task-'A'] {
            maxCount++
        } else if max < freq[task-'A'] {
            max = freq[task-'A']
            maxCount = 1
        }
    }

    gapCount := max - 1
    gapLength := n - (maxCount - 1)
    empty := gapCount * gapLength
    availableTasks := len(tasks) - max*maxCount
    idles := max(0, empty-availableTasks)

    return len(tasks) + idles
}
```
```C# []
public class Solution {
    public int LeastInterval(char[] tasks, int n) {
        int[] freq = new int[26];
        int max = 0;
        int maxCount = 0;
        foreach (char task in tasks) {
            freq[task - 'A']++;
            if (max == freq[task - 'A']) {
                maxCount++;
            } else if (max < freq[task - 'A']) {
                max = freq[task - 'A'];
                maxCount = 1;
            }
        }

        int gapCount = max - 1;
        int gapLength = n - (maxCount - 1);
        int empty = gapCount * gapLength;
        int availableTasks = tasks.Length - max * maxCount;
        int idles = Math.Max(0, empty - availableTasks);

        return tasks.Length + idles;
    }
}
```
```JavaScript []
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let freq = new Array(26).fill(0);
    let max = 0;
    let maxCount = 0;

    for (let task of tasks) {
        freq[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
        if (max === freq[task.charCodeAt(0) - 'A'.charCodeAt(0)]) {
            maxCount++;
        } else if (max < freq[task.charCodeAt(0) - 'A'.charCodeAt(0)]) {
            max = freq[task.charCodeAt(0) - 'A'.charCodeAt(0)];
            maxCount = 1;
        }
    }

    let gapCount = max - 1;
    let gapLength = n - (maxCount - 1);
    let empty = gapCount * gapLength;
    let availableTasks = tasks.length - max * maxCount;
    let idles = Math.max(0, empty - availableTasks);

    return tasks.length + idles;
};
```

---


---

![5c63d377-8ef4-4beb-b09d-0edb07e09a41_1702955205.6568592.png](./images/0.png)



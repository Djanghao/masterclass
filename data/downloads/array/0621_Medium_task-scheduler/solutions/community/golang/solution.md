# [C++ / Go] Find max frequency - O(n) solution

**Author:** mikazuki4712
**Votes:** 15
**Link:** [https://leetcode.com/problems/task-scheduler/solutions/4895014/](https://leetcode.com/problems/task-scheduler/solutions/4895014/)

---

# Intuition
- With a maximum frequency character, called A
    - An optimal schedule is : A _ _ A _ _ A _ _ A, the _ need to be filled, otherwise, it results in idle time.
        - `maxCount - 1` group of an action and idle time.
        - Each group takes `n + 1` time.
        - The last task A executes without any idle time.
    => Required time is `(maxCount - 1) * (n + 1) + 1`
- If there are multiple tasks with the same maximum frequency, like A, B, C:
    => A B C _ _ A B C _ _ A B C _ _ A B C 
    => Required time is (maxCount - 1) * (n + 1) + sameMaxCount
- If number of tasks larger than or equal required time, then the other tasks fill all the blank spaces, or there is no idle time.

# Code
```C++ []
class Solution {
public:
    int leastInterval(vector<char>& tasks, int n) {
        if (n == 0)
            return tasks.size();

        vector<int> cnt(26, 0);
        for (char task : tasks)
            cnt[task - 'A']++;

        int maxCount = 0;
        int sameMaxCount = 0;

        for (int i = 0; i < 26; i++) {
            if (cnt[i] > maxCount) {
                maxCount = cnt[i];
                sameMaxCount = 1;
            } else if (cnt[i] == maxCount) {
                sameMaxCount++;
            }
        }

        int res = (n + 1) * (maxCount - 1) + sameMaxCount;
        return max(res, (int)tasks.size());
    }
};
```
```Go []
func leastInterval(tasks []byte, n int) int {
	if n == 0 {
		return len(tasks)
	}

	cnt := make([]int, 26)
	for _, task := range tasks {
		cnt[task - 'A']++
	}

	var maxCount, sameMaxCount int
	for _, c := range cnt {
		if c > maxCount {
			maxCount = c
			sameMaxCount = 1
		} else if c == maxCount {
			sameMaxCount++
		}
	}

	res := (n + 1) * (maxCount - 1) + sameMaxCount
    if (res > len(tasks)) {
        return res
    } else {
        return len(tasks)
    }
}
```

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(26)$
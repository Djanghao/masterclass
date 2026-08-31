# 🔥 BEATS 100% | ✅ [ C++ / C# / C / Java / Py / JS / GO ]

**Author:** Neoni_77
**Votes:** 21
**Link:** [https://leetcode.com/problems/find-all-people-with-secret/solutions/4774371/](https://leetcode.com/problems/find-all-people-with-secret/solutions/4774371/)

---



```C++ []
class Solution {
public:
#define MAX_N 100000
    int find(const int* groups, int index){
        while(index != groups[index])index = groups[index];
        return index;
    }

    vector<int> findAllPeople(int n, vector<vector<int>>& meetings, int firstPerson) {
        static int groups[MAX_N];
        static vector<int> temp;

        for (int i = 0; i < n; ++i) groups[i] = i;
        groups[firstPerson] = 0;

        sort(meetings.begin(), meetings.end(), [](const auto& l, const auto& r) {
            return l[2] < r[2];
        });

        const int SIZE = meetings.size();
        int i = 0;
        while (i < SIZE) {
            int currentTime = meetings[i][2];
            temp.clear();
            while (i < SIZE && meetings[i][2] == currentTime) {
                int g1 = find(groups, meetings[i][0]);
                int g2 = find(groups, meetings[i][1]);
                groups[max(g1, g2)] = min(g1, g2);
                temp.push_back(meetings[i][0]);
                temp.push_back(meetings[i][1]);
                ++i;
            }
            for (int j = 0; j < temp.size(); ++j) {
                if (find(groups, temp[j]) != 0) {
                    groups[temp[j]] = temp[j];
                }
            }
        }

        vector<int> result;
        for (int j = 0; j < n; ++j) {
            if (find(groups, j) == 0)result.push_back(j);
        }

        return result;
    }
};
```
```python []
class Solution:
    def findAllPeople(self, n: int, meetings: List[List[int]], firstPerson: int) -> List[int]:
        groups = [i for i in range(n)]
        groups[firstPerson] = 0

        meetings.sort(key=lambda x: x[2])

        size = len(meetings)
        i = 0
        while i < size:
            current_time = meetings[i][2]
            temp = []
            while i < size and meetings[i][2] == current_time:
                g1 = self.find(groups, meetings[i][0])
                g2 = self.find(groups, meetings[i][1])
                groups[max(g1, g2)] = min(g1, g2)
                temp.extend([meetings[i][0], meetings[i][1]])
                i += 1
            for j in temp:
                if self.find(groups, j) != 0:
                    groups[j] = j

        result = []
        for j in range(n):
            if self.find(groups, j) == 0:
                result.append(j)

        return result

    def find(self, groups: List[int], index: int) -> int:
        while index != groups[index]:
            index = groups[index]
        return index

```
```java []

class Solution {
    public List<Integer> findAllPeople(int n, int[][] meetings, int firstPerson) {
        int[] groups = new int[100000];
        List<Integer> result = new ArrayList<>();
        List<Integer> temp = new ArrayList<>();

        for (int i = 0; i < n; ++i) groups[i] = i;
        groups[firstPerson] = 0;

        Arrays.sort(meetings, (a, b) -> Integer.compare(a[2], b[2]));

        int i = 0;
        while (i < meetings.length) {
            int currentTime = meetings[i][2];
            temp.clear();
            while (i < meetings.length && meetings[i][2] == currentTime) {
                int g1 = find(groups, meetings[i][0]);
                int g2 = find(groups, meetings[i][1]);
                groups[Math.max(g1, g2)] = Math.min(g1, g2);
                temp.add(meetings[i][0]);
                temp.add(meetings[i][1]);
                ++i;
            }
            for (int j = 0; j < temp.size(); ++j) {
                if (find(groups, temp.get(j)) != 0) {
                    groups[temp.get(j)] = temp.get(j);
                }
            }
        }

        for (int j = 0; j < n; ++j) {
            if (find(groups, j) == 0) result.add(j);
        }

        return result;
    }

    private int find(int[] groups, int index) {
        while (index != groups[index]) index = groups[index];
        return index;
    }
}

```
```javascript []
/**
 * @param {number} n
 * @param {number[][]} meetings
 * @param {number} firstPerson
 * @return {number[]}
 */
var findAllPeople = function(n, meetings, firstPerson) {
    const find = (groups, index) => {
        while (index !== groups[index]) {
            index = groups[index];
        }
        return index;
    };

    let groups = new Array(100000).fill(0).map((_, i) => i);
    let result = [];

    groups[firstPerson] = 0;

    meetings.sort((a, b) => a[2] - b[2]);

    let i = 0;
    while (i < meetings.length) {
        let currentTime = meetings[i][2];
        let temp = [];
        while (i < meetings.length && meetings[i][2] === currentTime) {
            let g1 = find(groups, meetings[i][0]);
            let g2 = find(groups, meetings[i][1]);
            groups[Math.max(g1, g2)] = Math.min(g1, g2);
            temp.push(meetings[i][0]);
            temp.push(meetings[i][1]);
            ++i;
        }
        for (let j = 0; j < temp.length; ++j) {
            if (find(groups, temp[j]) !== 0) {
                groups[temp[j]] = temp[j];
            }
        }
    }

    for (let j = 0; j < n; ++j) {
        if (find(groups, j) === 0) {
            result.push(j);
        }
    }

    return result;
};

```

```Go []
package main

import (
	"sort"
)

func find(groups []int, index int) int {
	for index != groups[index] {
		index = groups[index]
	}
	return index
}

func findAllPeople(n int, meetings [][]int, firstPerson int) []int {
	groups := make([]int, 100000)
	var result []int
	var temp []int

	for i := 0; i < n; i++ {
		groups[i] = i
	}
	groups[firstPerson] = 0

	sort.Slice(meetings, func(i, j int) bool {
		return meetings[i][2] < meetings[j][2]
	})

	i := 0
	for i < len(meetings) {
		currentTime := meetings[i][2]
		temp = temp[:0]
		for i < len(meetings) && meetings[i][2] == currentTime {
			g1 := find(groups, meetings[i][0])
			g2 := find(groups, meetings[i][1])
			groups[max(g1, g2)] = min(g1, g2)
			temp = append(temp, meetings[i][0], meetings[i][1])
			i++
		}
		for _, j := range temp {
			if find(groups, j) != 0 {
				groups[j] = j
			}
		}
	}

	for j := 0; j < n; j++ {
		if find(groups, j) == 0 {
			result = append(result, j)
		}
	}

	return result
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

```
```C# []
public class Solution {
    public IList<int> FindAllPeople(int n, int[][] meetings, int firstPerson) {
        int[] groups = new int[n];
        List<int> result = new List<int>();

        for (int k = 0; k < n; k++) {
            groups[k] = k;
        }
        groups[firstPerson] = 0;

        Array.Sort(meetings, (a, b) => a[2].CompareTo(b[2]));

        List<int> temp = new List<int>();
        int i = 0;
        while (i < meetings.Length) {
            int currentTime = meetings[i][2];
            temp.Clear();
            while (i < meetings.Length && meetings[i][2] == currentTime) {
                int g1 = Find(groups, meetings[i][0]);
                int g2 = Find(groups, meetings[i][1]);
                groups[Math.Max(g1, g2)] = Math.Min(g1, g2);
                temp.Add(meetings[i][0]);
                temp.Add(meetings[i][1]);
                i++;
            }
            foreach (int item in temp) {
                if (Find(groups, item) != 0) {
                    groups[item] = item;
                }
            }
        }

        for (int j = 0; j < n; j++) {
            if (Find(groups, j) == 0) {
                result.Add(j);
            }
        }

        return result;
    }

    private int Find(int[] groups, int index) {
        while (index != groups[index]) {
            index = groups[index];
        }
        return index;
    }
}
```
```C []
int Find(int* groups, int index) {
    while (index != groups[index]) {
        index = groups[index];
    }
    return index;
}

int cmpfunc(const void *a, const void *b) {
    const int *arr1 = *(const int **)a;
    const int *arr2 = *(const int **)b;
    return arr1[2] - arr2[2];
}

int* findAllPeople(int n, int** meetings, int meetingsSize, int* meetingsColSize, int firstPerson, int* returnSize) {
    int* groups = (int*)malloc(n * sizeof(int));
    int* result = (int*)malloc(n * sizeof(int));
    int result_count = 0;

    for (int k = 0; k < n; k++) {
        groups[k] = k;
    }
    groups[firstPerson] = 0;

    qsort(meetings, meetingsSize, sizeof(meetings[0]), cmpfunc);

    int* temp = (int*)malloc(2 * n * sizeof(int));

    int i = 0;
    while (i < meetingsSize) {
        int currentTime = meetings[i][2];
        int temp_count = 0;
        while (i < meetingsSize && meetings[i][2] == currentTime) {
            int g1 = Find(groups, meetings[i][0]);
            int g2 = Find(groups, meetings[i][1]);
            groups[g1 > g2 ? g1 : g2] = g1 < g2 ? g1 : g2;
            temp[temp_count++] = meetings[i][0];
            temp[temp_count++] = meetings[i][1];
            i++;
        }
        for (int j = 0; j < temp_count; j++) {
            if (Find(groups, temp[j]) != 0) {
                groups[temp[j]] = temp[j];
            }
        }
    }

    for (int j = 0; j < n; j++) {
        if (Find(groups, j) == 0) {
            result[result_count++] = j;
        }
    }

    free(temp);
    free(groups);
    
    *returnSize = result_count;
    return result;
}
```
**Note : According to the solution in C++ it reaches 100%, don't know for other codes..
please upvote\u2B06\uFE0F!!\uD83D\uDE0A**



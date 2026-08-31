# 🍉Beast 99.85%✅✅ || All Language Solution Explain🔥🔥

**Author:** dharmikgohil
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-town-judge/solutions/4767037/](https://leetcode.com/problems/find-the-town-judge/solutions/4767037/)

---

![image.png](./images/0.png)




# Intuition
The problem asks to identify the town judge among a group of people based on their trust relationships. The judge must satisfy specific conditions, such as being trusted by everyone else in the town while trusting no one. This intuition leads us to a solution that tracks the trust relationships and identifies the person who meets these criteria.

# Approach
To solve the problem:
1. Initialize arrays to track incoming and outgoing trust relationships for each person.
2. Iterate through the trust relationships, updating the trust arrays accordingly.
3. Check each person to see if they meet the criteria of being the town judge.
4. Return the label of the town judge if found, otherwise return -1.



# Complexity
- Time complexity: O(N + T), where N is the number of people and T is the number of trust relationships. We iterate through the trust array once to update the trust arrays.
- Space complexity: O(N), where N is the number of people. We use additional space to store incoming and outgoing trust relationships for each person.


# Java
```
class Solution {
    public int findJudge(int N, int[][] trust) {
        int[] in = new int[N + 1];
        int[] out = new int[N + 1];
        for (int[] a : trust) {
            out[a[0]]++;
            in[a[1]]++;
        }
        for (int i = 1; i <= N; ++i) {
            if (in[i] == N - 1 && out[i] == 0)
                return i;
        }
        return -1;
    }
}

```
# C++
```
#include <vector>
using namespace std;

class Solution {
public:
    int findJudge(int N, vector<vector<int>>& trust) {
        vector<int> in(N + 1);
        vector<int> out(N + 1);
        for (const auto& a : trust) {
            out[a[0]]++;
            in[a[1]]++;
        }
        for (int i = 1; i <= N; ++i) {
            if (in[i] == N - 1 && out[i] == 0)
                return i;
        }
        return -1;
    }
};


```
# Python
```
from typing import List

class Solution:
    def findJudge(self, N: int, trust: List[List[int]]) -> int:
        in_degree = [0] * (N + 1)
        out_degree = [0] * (N + 1)
        for a in trust:
            out_degree[a[0]] += 1
            in_degree[a[1]] += 1
        for i in range(1, N + 1):
            if in_degree[i] == N - 1 and out_degree[i] == 0:
                return i
        return -1


```
# JavaScript

```
class Solution {
    findJudge(N, trust) {
        const inDegree = new Array(N + 1).fill(0);
        const outDegree = new Array(N + 1).fill(0);
        for (const a of trust) {
            outDegree[a[0]]++;
            inDegree[a[1]]++;
        }
        for (let i = 1; i <= N; ++i) {
            if (inDegree[i] === N - 1 && outDegree[i] === 0)
                return i;
        }
        return -1;
    }
}

```
# C
```
#include <stdlib.h>

int findJudge(int N, int** trust, int trustSize, int* trustColSize) {
    int* in = (int*)calloc(N + 1, sizeof(int));
    int* out = (int*)calloc(N + 1, sizeof(int));
    for (int i = 0; i < trustSize; ++i) {
        out[trust[i][0]]++;
        in[trust[i][1]]++;
    }
    for (int i = 1; i <= N; ++i) {
        if (in[i] == N - 1 && out[i] == 0)
            return i;
    }
    return -1;
}

```
# C#

```
using System;

public class Solution {
    public int FindJudge(int N, int[][] trust) {
        int[] inDegree = new int[N + 1];
        int[] outDegree = new int[N + 1];
        foreach (var a in trust) {
            outDegree[a[0]]++;
            inDegree[a[1]]++;
        }
        for (int i = 1; i <= N; ++i) {
            if (inDegree[i] == N - 1 && outDegree[i] == 0)
                return i;
        }
        return -1;
    }
}


```



# PHP
```
class Solution {
    function findJudge($N, $trust) {
        $inDegree = array_fill(0, $N + 1, 0);
        $outDegree = array_fill(0, $N + 1, 0);
        foreach ($trust as $a) {
            $outDegree[$a[0]]++;
            $inDegree[$a[1]]++;
        }
        for ($i = 1; $i <= $N; ++$i) {
            if ($inDegree[$i] == $N - 1 && $outDegree[$i] == 0)
                return $i;
        }
        return -1;
    }
}


```

# 

# PLEASE UPVOTE IF YOU FIND HELPFUL\uD83C\uDF49

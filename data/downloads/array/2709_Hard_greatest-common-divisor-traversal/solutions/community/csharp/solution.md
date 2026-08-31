# 🔥 BEATS 100% | ✅ [ C++ / Java / Py / C / C# / JS / GO  ]

**Author:** Neoni_77
**Votes:** 24
**Link:** [https://leetcode.com/problems/greatest-common-divisor-traversal/solutions/4778476/](https://leetcode.com/problems/greatest-common-divisor-traversal/solutions/4778476/)

---



```C++ []
class Solution {
public:
    int get(vector<int> &parent, int a) {
        return parent[a] = parent[a] == a ? a : get(parent, parent[a]);
    }
    void Union(vector<int> &parent, vector<int> &rank, int a, int b) {
        a = get(parent, a);
        b = get(parent, b);
        if(a == b) return;
        if(rank[a] < rank[b]) swap(a, b);
        parent[b] = a;
        rank[a] += rank[b];
    }
    vector<int> factorsCalculator(int n) {
        vector<int> dp(n + 2);
        iota(dp.begin(), dp.end(), 0);
        for(int i = 2; i <= n; ++i) {
            if(dp[i] == i) {
                for(int j = i * 2; j <= n; j += i) {
                    if(dp[j] == j) dp[j] = i;
                }
            }
        }
        return dp;
    }
    bool canTraverseAllPairs(vector<int>& nums) {
        if(nums.size() == 1) return true;
        int n = nums.size();
        int maxElement = *max_element(nums.begin(), nums.end());
        if(*min_element(nums.begin(), nums.end()) == 1) return false;
        vector<int> factorArray = factorsCalculator(maxElement);

        vector<int> parent(maxElement + 1);
        iota(parent.begin(), parent.end(), 0);
        ;
        vector<int> rank(maxElement + 1, 1);
        for(int i = 0; i < n; ++i) {
            int x = nums[i];
            while(x > 1) {
                int p = factorArray[x];
                Union(parent, rank, p, nums[i]);
                while(x % p == 0) {
                    x = x / p;
                }
            }
        }

        int p = get(parent, nums[0]);
        for(int i = 1; i < n; ++i) {
            if(get(parent, nums[i]) != p) return false;
        }

        return true;
    }
};
```
```Java []
class Solution {
    public boolean canTraverseAllPairs(int[] nums) {
        if(nums.length == 1) return true;
        int n = nums.length;
        int maxElement = Arrays.stream(nums).max().getAsInt();
        if(Arrays.stream(nums).min().getAsInt() == 1) return false;
        int[] factorArray = factorsCalculator(maxElement);
        
        int[] parent = new int[maxElement + 1];
        int[] rank = new int[maxElement + 1];
        for (int i = 0; i < parent.length; i++) {
            parent[i] = i;
            rank[i] = 1;
        }

        for (int num : nums) {
            int x = num;
            while (x > 1) {
                int p = factorArray[x];
                union(parent, rank, p, num);
                while (x % p == 0) {
                    x = x / p;
                }
            }
        }

        int p = find(parent, nums[0]);
        for (int i = 1; i < nums.length; i++) {
            if (find(parent, nums[i]) != p) return false;
        }

        return true;
    }

    private int[] factorsCalculator(int n) {
        int[] dp = new int[n + 2];
        for (int i = 0; i < dp.length; i++) {
            dp[i] = i;
        }
        for (int i = 2; i <= n; i++) {
            if (dp[i] == i) {
                for (int j = i * 2; j <= n; j += i) {
                    if (dp[j] == j) dp[j] = i;
                }
            }
        }
        return dp;
    }

    private int find(int[] parent, int a) {
        return parent[a] = parent[a] == a ? a : find(parent, parent[a]);
    }

    private void union(int[] parent, int[] rank, int a, int b) {
        a = find(parent, a);
        b = find(parent, b);
        if (a == b) return;
        if (rank[a] < rank[b]) {
            int temp = a;
            a = b;
            b = temp;
        }
        parent[b] = a;
        rank[a] += rank[b];
    }
}
```

```python []
class Solution:
    def canTraverseAllPairs(self, nums: List[int]) -> bool:
        if len(nums) == 1:
            return True
        n = len(nums)
        maxElement = max(nums)
        if min(nums) == 1:
            return False
        factorArray = self.factorsCalculator(maxElement)
        
        parent = list(range(maxElement + 1))
        rank = [1] * (maxElement + 1)

        for num in nums:
            x = num
            while x > 1:
                p = factorArray[x]
                self.union(parent, rank, p, num)
                while x % p == 0:
                    x = x // p

        p = self.find(parent, nums[0])
        for num in nums[1:]:
            if self.find(parent, num) != p:
                return False

        return True

    def factorsCalculator(self, n: int) -> List[int]:
        dp = list(range(n + 2))
        for i in range(2, n + 1):
            if dp[i] == i:
                for j in range(i * 2, n + 1, i):
                    if dp[j] == j:
                        dp[j] = i
        return dp

    def find(self, parent: List[int], a: int) -> int:
        if parent[a] == a:
            return a
        parent[a] = self.find(parent, parent[a])
        return parent[a]

    def union(self, parent: List[int], rank: List[int], a: int, b: int) -> None:
        a = self.find(parent, a)
        b = self.find(parent, b)
        if a == b:
            return
        if rank[a] < rank[b]:
            a, b = b, a
        parent[b] = a
        rank[a] += rank[b]
```

```javascript []
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canTraverseAllPairs = function(nums) {
    if (nums.length === 1) return true;
    const n = nums.length;
    const maxElement = Math.max(...nums);
    if (Math.min(...nums) === 1) return false;
    const factorArray = factorsCalculator(maxElement);
    
    const parent = [...Array(maxElement + 1).keys()];
    const rank = Array(maxElement + 1).fill(1);

    for (let i = 0; i < nums.length; i++) {
        let x = nums[i];
        while (x > 1) {
            const p = factorArray[x];
            Union(parent, rank, p, nums[i]);
            while (x % p === 0) {
                x = x / p;
            }
        }
    }

    const p = Find(parent, nums[0]);
    for (let i = 1; i < nums.length; i++) {
        if (Find(parent, nums[i]) !== p) return false;
    }

    return true;
};

function factorsCalculator(n) {
    const dp = Array(n + 2).fill().map((_, i) => i);
    for (let i = 2; i <= n; i++) {
        if (dp[i] === i) {
            for (let j = i * 2; j <= n; j += i) {
                if (dp[j] === j) dp[j] = i;
            }
        }
    }
    return dp;
}

function Find(parent, a) {
    return parent[a] = parent[a] === a ? a : Find(parent, parent[a]);
}

function Union(parent, rank, a, b) {
    a = Find(parent, a);
    b = Find(parent, b);
    if (a === b) return;
    if (rank[a] < rank[b]) {
        [a, b] = [b, a];
    }
    parent[b] = a;
    rank[a] += rank[b];
}
```

```c []
int* factorsCalculator(int n) {
    int* dp = (int*)malloc((n + 2) * sizeof(int));
    for (int i = 0; i <= n + 1; i++) {
        dp[i] = i;
    }
    for (int i = 2; i <= n; i++) {
        if (dp[i] == i) {
            for (int j = i * 2; j <= n; j += i) {
                if (dp[j] == j) dp[j] = i;
            }
        }
    }
    return dp;
}

int find(int* parent, int a) {
    while (parent[a] != a) {
        a = parent[a];
    }
    return a;
}

void unionFunc(int* parent, int* rank, int a, int b) {
    a = find(parent, a);
    b = find(parent, b);
    if (a == b) return;
    if (rank[a] < rank[b]) {
        int temp = a;
        a = b;
        b = temp;
    }
    parent[b] = a;
    rank[a] += rank[b];
}

bool canTraverseAllPairs(int* nums, int numsSize) {
    if (numsSize == 1) return true;
    int maxElement = nums[0];
    int minElement = nums[0];
    for (int i = 1; i < numsSize; i++) {
        if (nums[i] > maxElement) {
            maxElement = nums[i];
        }
        if (nums[i] < minElement) {
            minElement = nums[i];
        }
    }
    if (minElement == 1) return false;
    int* factorArray = factorsCalculator(maxElement);
    int* parent = (int*)malloc((maxElement + 1) * sizeof(int));
    int* rank = (int*)malloc((maxElement + 1) * sizeof(int));
    for (int i = 0; i <= maxElement; i++) {
        parent[i] = i;
        rank[i] = 1;
    }
    for (int i = 0; i < numsSize; i++) {
        int x = nums[i];
        while (x > 1) {
            int p = factorArray[x];
            unionFunc(parent, rank, p, nums[i]);
            while (x % p == 0) {
                x = x / p;
            }
        }
    }
    int p = find(parent, nums[0]);
    for (int i = 1; i < numsSize; i++) {
        if (find(parent, nums[i]) != p) return false;
    }
    return true;
}

```

```C# []
using System;
using System.Linq;

public class Solution
{
    public bool CanTraverseAllPairs(int[] nums)
    {
        if (nums.Length == 1) return true;
        int n = nums.Length;
        int maxElement = nums.Max();
        if (nums.Min() == 1) return false;
        int[] factorArray = CalculateFactors(maxElement);

        int[] parent = new int[maxElement + 1];
        int[] rank = new int[maxElement + 1];
        for (int i = 0; i < parent.Length; i++)
        {
            parent[i] = i;
            rank[i] = 1;
        }

        foreach (int num in nums)
        {
            int x = num;
            while (x > 1)
            {
                int factor = factorArray[x]; // Renamed 'p' to 'factor'
                Union(parent, rank, factor, num);
                while (x % factor == 0)
                {
                    x /= factor;
                }
            }
        }

        int p = Find(parent, nums[0]);
        for (int i = 1; i < nums.Length; i++)
        {
            if (Find(parent, nums[i]) != p) return false;
        }

        return true;
    }

    private int[] CalculateFactors(int n)
    {
        int[] dp = new int[n + 2];
        for (int i = 0; i < dp.Length; i++)
        {
            dp[i] = i;
        }
        for (int i = 2; i <= n; i++)
        {
            if (dp[i] == i)
            {
                for (int j = i * 2; j <= n; j += i)
                {
                    if (dp[j] == j) dp[j] = i;
                }
            }
        }
        return dp;
    }

    private int Find(int[] parent, int a)
    {
        return parent[a] = (parent[a] == a) ? a : Find(parent, parent[a]);
    }

    private void Union(int[] parent, int[] rank, int a, int b)
    {
        a = Find(parent, a);
        b = Find(parent, b);
        if (a == b) return;
        if (rank[a] < rank[b])
        {
            (a, b) = (b, a); // Swap a and b using tuple deconstruction
        }
        parent[b] = a;
        rank[a] += rank[b];
    }
}

```

```Go []
package main

func canTraverseAllPairs(nums []int) bool {
    if len(nums) == 1 {
        return true
    }
    n := len(nums)
    maxElement := nums[0]
    minElement := nums[0]
    for _, num := range nums {
        if num > maxElement {
            maxElement = num
        }
        if num < minElement {
            minElement = num
        }
    }
    if minElement == 1 {
        return false
    }
    factorArray := factorsCalculator(maxElement)

    parent := make([]int, maxElement+1)
    rank := make([]int, maxElement+1)
    for i := 0; i <= maxElement; i++ {
        parent[i] = i
        rank[i] = 1
    }

    for _, num := range nums {
        x := num
        for x > 1 {
            p := factorArray[x]
            union(parent, rank, p, num)
            for x%p == 0 {
                x = x / p
            }
        }
    }

    p := find(parent, nums[0])
    for i := 1; i < n; i++ {
        if find(parent, nums[i]) != p {
            return false
        }
    }

    return true
}

func factorsCalculator(n int) []int {
    dp := make([]int, n+2)
    for i := 0; i < len(dp); i++ {
        dp[i] = i
    }
    for i := 2; i <= n; i++ {
        if dp[i] == i {
            for j := i * 2; j <= n; j += i {
                if dp[j] == j {
                    dp[j] = i
                }
            }
        }
    }
    return dp
}

func find(parent []int, a int) int {
    if parent[a] == a {
        return a
    }
    parent[a] = find(parent, parent[a])
    return parent[a]
}

func union(parent []int, rank []int, a int, b int) {
    a = find(parent, a)
    b = find(parent, b)
    if a == b {
        return
    }
    if rank[a] < rank[b] {
        a, b = b, a
    }
    parent[b] = a
    rank[a] += rank[b]
}
```

**Note : According to the solution in C++ it reaches 100%, don't know for other codes..
please upvote\u2B06\uFE0F!!\uD83D\uDE0A**




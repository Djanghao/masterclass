# ✔️ Beats 100% : Greedy,sorting : Detailed Explanation-C++/Java/Python/JS/Ruby/C#/Swift/Kotlin/Go

**Author:** Cregan_wolf
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-total-importance-of-roads/solutions/5380679/](https://leetcode.com/problems/maximum-total-importance-of-roads/solutions/5380679/)

---

# Intuition
To maximize the importance of the cities, we need to assign higher values to the cities with more roads connected to them. This way, the contribution to the total importance will be maximized.

# Approach
1. Count the number of roads connected to each city.
2. Sort the cities by the number of connected roads in descending order.
3. Assign the highest available importance value to the city with the most roads, the next highest to the next city, and so on.
4. Calculate the total importance based on these assignments.

# Complexity
- Time complexity: $$O(n \\log n)$$
  - Sorting the list of cities based on their connected roads.
- Space complexity: $$O(n)$$
  - Storing the count of roads for each city.


# Code
```C++ []
class Solution {
public:
    long long maximumImportance(int n, vector<vector<int>>& roads) {
        vector<int> l(n, 0);
        for (auto& road : roads) {
            for (auto city : road) {
                l[city]++;
            }
        }
        sort(l.rbegin(), l.rend());
        long long ans = 0;
        int j = 0;
        for (int i = n; i > 0; --i) {
            if (j < n) {
                ans += static_cast<long long>(l[j]) * i;
                j++;
            }
        }
        return ans;
    }
};

```
```python []
class Solution:
    def maximumImportance(self, n: int, roads: List[List[int]]) -> int:
        l=[0 for i in range(n)]
        for i in roads:
            for j in i:
                l[j]+=1
        l.sort(reverse=True)
        n1=len(l)
        ans=0
        j=0
        for i in range(n,0,-1):
            if j<n1:
                ans+=l[j]*i
                j+=1
        return ans
```
```Java []
import java.util.Arrays;
import java.util.Collections;

class Solution {
    public long maximumImportance(int n, int[][] roads) {
        Integer[] l = new Integer[n];
        Arrays.fill(l, 0);
        for (int[] road : roads) {
            for (int city : road) {
                l[city]++;
            }
        }
        Arrays.sort(l, Collections.reverseOrder());
        long ans = 0;
        int j = 0;
        for (int i = n; i > 0; --i) {
            if (j < n) {
                ans += (long) l[j] * i;
                j++;
            }
        }
        return ans;
    }
}

```
```javascript []
class Solution {
    maximumImportance(n, roads) {
        let l = new Array(n).fill(0);
        for (let road of roads) {
            for (let city of road) {
                l[city]++;
            }
        }
        l.sort((a, b) => b - a);
        let ans = 0;
        let j = 0;
        for (let i = n; i > 0; --i) {
            if (j < n) {
                ans += l[j] * i;
                j++;
            }
        }
        return ans;
    }
}

```
```C# []
using System;
using System.Collections.Generic;
using System.Linq;

public class Solution {
    public long MaximumImportance(int n, int[][] roads) {
        int[] l = new int[n];
        foreach (var road in roads) {
            foreach (var city in road) {
                l[city]++;
            }
        }
        Array.Sort(l, (a, b) => b.CompareTo(a));
        long ans = 0;
        int j = 0;
        for (int i = n; i > 0; --i) {
            if (j < n) {
                ans += (long)l[j] * i;
                j++;
            }
        }
        return ans;
    }
}
```
```Swift []
class Solution {
    func maximumImportance(_ n: Int, _ roads: [[Int]]) -> Int {
        var l = [Int](repeating: 0, count: n)
        for road in roads {
            for city in road {
                l[city] += 1
            }
        }
        l.sort(by: >)
        var ans = 0
        var j = 0
        for i in stride(from: n, to: 0, by: -1) {
            if j < n {
                ans += l[j] * i
                j += 1
            }
        }
        return ans
    }
}

```
```Kotlin []
class Solution {
    fun maximumImportance(n: Int, roads: Array<IntArray>): Long {
        val l = IntArray(n) { 0 }
        for (road in roads) {
            for (city in road) {
                l[city]++
            }
        }
        l.sortDescending()
        var ans: Long = 0
        var j = 0
        for (i in n downTo 1) {
            if (j < n) {
                ans += l[j] * i.toLong()
                j++
            }
        }
        return ans
    }
}

```
```Dart []
class Solution {
    int maximumImportance(int n, List<List<int>> roads) {
        List<int> l = List.filled(n, 0);
        for (var road in roads) {
            for (var city in road) {
                l[city]++;
            }
        }
        l.sort((a, b) => b.compareTo(a));
        int ans = 0;
        int j = 0;
        for (int i = n; i > 0; --i) {
            if (j < n) {
                ans += l[j] * i;
                j++;
            }
        }
        return ans;
    }
}

```
```ruby []
class Solution
    def maximum_importance(n, roads)
        l = Array.new(n, 0)
        roads.each do |road|
            road.each do |city|
                l[city] += 1
            end
        end
        l.sort!.reverse!
        ans = 0
        j = 0
        (n).downto(1) do |i|
            if j < n
                ans += l[j] * i
                j += 1
            end
        end
        return ans
    end
end

```
```Go []
package main

import (
    "sort"
)

func maximumImportance(n int, roads [][]int) int64 {
    l := make([]int, n)
    for _, road := range roads {
        for _, city := range road {
            l[city]++
        }
    }
    sort.Slice(l, func(i, j int) bool {
        return l[i] > l[j]
    })
    var ans int64
    j := 0
    for i := n; i > 0; i-- {
        if j < n {
            ans += int64(l[j] * i)
            j++
        }
    }
    return ans
}

```

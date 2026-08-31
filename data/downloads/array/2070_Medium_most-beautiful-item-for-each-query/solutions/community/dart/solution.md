# 🔥BEATS 💯 % 🎯 | 2 SOLUTIONS | 2nd one is SIMPLE| ✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/most-beautiful-item-for-each-query/solutions/6035966/](https://leetcode.com/problems/most-beautiful-item-for-each-query/solutions/6035966/)

---

![image.png](./images/0.png)

---

### Intuition
To find the maximum beauty of an item within a given price, we can use a sorted list of items by price and then determine the highest beauty available for each query price.

### Approach
1. **Sort Items**: Sort items by price in ascending order.
2. **Filter and Build a Result List**: Build a list where each entry is a unique price with the highest beauty up to that price.
3. **Query Search**: For each query, use binary search to find the maximum beauty available within the given budget.

### Complexity
- **Time Complexity**: Sorting items takes \\(O(n \\log n)\\), and answering each query takes \\(O(q \\log n)\\) due to binary search.
- **Space Complexity**: \\(O(n + q)\\) for storing the results and answers.

---


```dart []
class Solution {
  List<int> maximumBeauty(List<List<int>> items, List<int> queries) {
    items.sort((a, b) => a[0].compareTo(b[0]));
    List<List<int>> res = [
      [0, 0, double.maxFinite.toInt()]
    ];

    for (List<int> item in items) {
      int price = item[0], beauty = item[1];
      if (beauty > res.last[1]) {
        res.last[2] = price;
        res.add([price, beauty, double.maxFinite.toInt()]);
      }
    }

    List<int> ans = List.filled(queries.length, 0);
    for (int j = 0; j < queries.length; j++) {
      int x = queries[j];
      for (int i = res.length - 1; i >= 0; i--) {
        if (res[i][0] <= x) {
          ans[j] = res[i][1];
          break;
        }
      }
    }
    return ans;
  }
}
```


```python []
from bisect import bisect_right

class Solution:
    def maximumBeauty(self, items, queries):
        items.sort()
        res = [(0, 0)]
        
        for price, beauty in items:
            if beauty > res[-1][1]:
                res.append((price, beauty))
        
        ans = []
        for x in queries:
            i = bisect_right(res, (x, float('inf'))) - 1
            ans.append(res[i][1])
        
        return ans
```


```javascript []
class Solution {
  maximumBeauty(items, queries) {
    items.sort((a, b) => a[0] - b[0]);
    const res = [[0, 0]];
    
    for (const [price, beauty] of items) {
      if (beauty > res[res.length - 1][1]) {
        res.push([price, beauty]);
      }
    }
    
    return queries.map(x => {
      let i = 0;
      while (i < res.length && res[i][0] <= x) i++;
      return res[i - 1][1];
    });
  }
}
```


```java []
import java.util.*;

class Solution {
  public int[] maximumBeauty(int[][] items, int[] queries) {
    Arrays.sort(items, (a, b) -> Integer.compare(a[0], b[0]));
    List<int[]> res = new ArrayList<>();
    res.add(new int[]{0, 0});

    for (int[] item : items) {
      int price = item[0], beauty = item[1];
      if (beauty > res.get(res.size() - 1)[1]) {
        res.add(new int[]{price, beauty});
      }
    }

    int[] ans = new int[queries.length];
    for (int i = 0; i < queries.length; i++) {
      int x = queries[i];
      int idx = Collections.binarySearch(res, new int[]{x + 1, 0},
                                         Comparator.comparingInt(a -> a[0])) - 1;
      if (idx < 0) idx = -idx - 2;
      ans[i] = res.get(idx)[1];
    }
    return ans;
  }
}
```


```cpp []
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
  vector<int> maximumBeauty(vector<vector<int>>& items, vector<int>& queries) {
    sort(items.begin(), items.end());
    vector<pair<int, int>> res = {{0, 0}};
    
    for (auto &item : items) {
      int price = item[0], beauty = item[1];
      if (beauty > res.back().second) {
        res.push_back({price, beauty});
      }
    }

    vector<int> ans;
    for (int x : queries) {
      int idx = upper_bound(res.begin(), res.end(), make_pair(x, INT_MAX)) - res.begin() - 1;
      ans.push_back(res[idx].second);
    }
    return ans;
  }
};
```


```go []
import (
  "sort"
)

func maximumBeauty(items [][]int, queries []int) []int {
  sort.Slice(items, func(i, j int) bool {
    return items[i][0] < items[j][0]
  })
  
  res := [][]int{{0, 0}}
  for _, item := range items {
    price, beauty := item[0], item[1]
    if beauty > res[len(res)-1][1] {
      res = append(res, []int{price, beauty})
    }
  }
  
  ans := make([]int, len(queries))
  for i, x := range queries {
    idx := sort.Search(len(res), func(j int) bool { return res[j][0] > x }) - 1
    ans[i] = res[idx][1]
  }
  
  return ans
}
```

---

# 2nd Simple Solution

Here's the solution in multiple programming languages.

---

### Intuition
The task involves finding the maximum beauty of an item within a given price range for each query. Sorting and binary searching for the maximum beauty within budget is a straightforward approach.

### Approach
1. **Sort Items by Price**: Sort the items by price and then iterate to keep track of the maximum beauty for each price.
2. **Binary Search for Queries**: Use binary search to find the maximum beauty available for each query price by searching through the sorted list.

### Complexity
- **Time Complexity**: Sorting the items takes \\(O(n \\log n)\\) time. Each query is processed in \\(O(\\log n)\\) due to binary search, making it \\(O((n + q) \\log n)\\) overall.
- **Space Complexity**: \\(O(n)\\) for storing the intermediate maximum beauty at each price point.

---

### Code Implementation

```dart []
class Solution {
  List<int> maximumBeauty(List<List<int>> items, List<int> queries) {
    items.sort((a, b) => a[0].compareTo(b[0]));
    List<List<int>> sortedBeauty = [];
    sortedBeauty.add(items.first);
    int maxBeauty = items.first[1];

    for (int i = 1; i < items.length; i++) {
      int newPrice = items[i][0];
      int newBeauty = items[i][1];
      maxBeauty = max(maxBeauty, newBeauty);
      if (newPrice != sortedBeauty.last[0]) {
        sortedBeauty.add([newPrice, maxBeauty]);
      } else {
        sortedBeauty.last[1] = maxBeauty;
      }
    }

    return queries.map((query) => _getMaxBeauty(sortedBeauty, query)).toList();
  }

  int _getMaxBeauty(List<List<int>> sortedBeauty, int query) {
    int res = 0, start = 0, end = sortedBeauty.length - 1;
    while (start <= end) {
      int mid = start + (end - start) ~/ 2;
      if (sortedBeauty[mid][0] <= query) {
        res = sortedBeauty[mid][1];
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return res;
  }
}
```

```python []
from bisect import bisect_right

class Solution:
    def maximumBeauty(self, items, queries):
        items.sort()
        sorted_beauty = [[items[0][0], items[0][1]]]
        max_beauty = items[0][1]

        for price, beauty in items[1:]:
            max_beauty = max(max_beauty, beauty)
            if price != sorted_beauty[-1][0]:
                sorted_beauty.append([price, max_beauty])
            else:
                sorted_beauty[-1][1] = max_beauty

        def get_max_beauty(query):
            idx = bisect_right(sorted_beauty, [query, float('inf')]) - 1
            return sorted_beauty[idx][1] if idx >= 0 else 0

        return [get_max_beauty(query) for query in queries]
```

```javascript []
class Solution {
  maximumBeauty(items, queries) {
    items.sort((a, b) => a[0] - b[0]);
    const sortedBeauty = [[items[0][0], items[0][1]]];
    let maxBeauty = items[0][1];

    for (let i = 1; i < items.length; i++) {
      const [price, beauty] = items[i];
      maxBeauty = Math.max(maxBeauty, beauty);
      if (price !== sortedBeauty[sortedBeauty.length - 1][0]) {
        sortedBeauty.push([price, maxBeauty]);
      } else {
        sortedBeauty[sortedBeauty.length - 1][1] = maxBeauty;
      }
    }

    return queries.map(query => this.getMaxBeauty(sortedBeauty, query));
  }

  getMaxBeauty(sortedBeauty, query) {
    let res = 0, start = 0, end = sortedBeauty.length - 1;
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (sortedBeauty[mid][0] <= query) {
        res = sortedBeauty[mid][1];
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return res;
  }
}
```

```java []
import java.util.*;

class Solution {
  public int[] maximumBeauty(int[][] items, int[] queries) {
    Arrays.sort(items, Comparator.comparingInt(a -> a[0]));
    List<int[]> sortedBeauty = new ArrayList<>();
    sortedBeauty.add(new int[] {items[0][0], items[0][1]});
    int maxBeauty = items[0][1];

    for (int i = 1; i < items.length; i++) {
      int price = items[i][0];
      int beauty = items[i][1];
      maxBeauty = Math.max(maxBeauty, beauty);
      if (price != sortedBeauty.get(sortedBeauty.size() - 1)[0]) {
        sortedBeauty.add(new int[] {price, maxBeauty});
      } else {
        sortedBeauty.get(sortedBeauty.size() - 1)[1] = maxBeauty;
      }
    }

    int[] result = new int[queries.length];
    for (int i = 0; i < queries.length; i++) {
      result[i] = getMaxBeauty(sortedBeauty, queries[i]);
    }
    return result;
  }

  private int getMaxBeauty(List<int[]> sortedBeauty, int query) {
    int start = 0, end = sortedBeauty.size() - 1, res = 0;
    while (start <= end) {
      int mid = start + (end - start) / 2;
      if (sortedBeauty.get(mid)[0] <= query) {
        res = sortedBeauty.get(mid)[1];
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return res;
  }
}
```

```cpp []
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
  vector<int> maximumBeauty(vector<vector<int>>& items, vector<int>& queries) {
    sort(items.begin(), items.end());
    vector<pair<int, int>> sortedBeauty;
    sortedBeauty.push_back({items[0][0], items[0][1]});
    int maxBeauty = items[0][1];

    for (int i = 1; i < items.size(); i++) {
      int price = items[i][0];
      int beauty = items[i][1];
      maxBeauty = max(maxBeauty, beauty);
      if (price != sortedBeauty.back().first) {
        sortedBeauty.push_back({price, maxBeauty});
      } else {
        sortedBeauty.back().second = maxBeauty;
      }
    }

    vector<int> result;
    for (int query : queries) {
      result.push_back(getMaxBeauty(sortedBeauty, query));
    }
    return result;
  }

private:
  int getMaxBeauty(const vector<pair<int, int>>& sortedBeauty, int query) {
    int res = 0, start = 0, end = sortedBeauty.size() - 1;
    while (start <= end) {
      int mid = start + (end - start) / 2;
      if (sortedBeauty[mid].first <= query) {
        res = sortedBeauty[mid].second;
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return res;
  }
};
```

```go []
import (
  "sort"
)

func maximumBeauty(items [][]int, queries []int) []int {
  sort.Slice(items, func(i, j int) bool {
    return items[i][0] < items[j][0]
  })
  
  sortedBeauty := [][]int{{items[0][0], items[0][1]}}
  maxBeauty := items[0][1]

  for i := 1; i < len(items); i++ {
    price, beauty := items[i][0], items[i][1]
    maxBeauty = max(maxBeauty, beauty)
    if price != sortedBeauty[len(sortedBeauty)-1][0] {
      sortedBeauty = append(sortedBeauty, []int{price, maxBeauty})
    } else {
      sortedBeauty[len(sortedBeauty)-1][1] = maxBeauty
    }
  }

  res := make([]int, len(queries))
  for i, query := range queries {
    res[i] = getMaxBeauty(sortedBeauty, query)
  }
  return res
}

func getMaxBeauty(sortedBeauty [][]int, query int) int {
  res, start, end := 0, 0, len(sortedBeauty)-1
  for start <= end {
    mid := start + (end-start)/2
    if sortedBeauty[mid][0] <= query {
      res = sortedBeauty[mid][1]
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return res
}

func max(a, b int) int {
  if a > b {
    return a
  }
  return b
}
```






---

![image.png](./images/1.png) {:style='width:250px'}
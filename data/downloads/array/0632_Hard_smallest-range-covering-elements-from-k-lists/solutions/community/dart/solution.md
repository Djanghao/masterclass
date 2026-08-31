# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 6
**Link:** [https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/solutions/5906295/](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/solutions/5906295/)

---

![image.png](./images/0.png)

---

### **Intuition**
The problem asks to find the smallest range that includes at least one number from each list in the given lists of numbers. The idea is to create a sliding window that contains numbers from all the lists and adjust it to find the smallest range.

---

### **Approach**
1. We first merge all the numbers from different lists into a single list of tuples, where each tuple contains the number and the index of the list it came from.
2. Sort this merged list by the number values.
3. Use a sliding window approach to ensure that each window contains at least one number from each of the original lists. The goal is to minimize the range of this window.
4. Track how many numbers from each list are in the current window and adjust the window's left and right pointers accordingly to minimize the range.

---

### **Complexity**
- **Time Complexity**: Sorting the merged list takes \\(O(N \\log N)\\), where \\(N\\) is the total number of elements across all lists.
- **Space Complexity**: \\(O(N)\\) for storing the merged list and frequency map.

---

### **Code Implementations**


```dart []
class Solution {
  List<int> smallestRange(List<List<int>> nums) {
    List<List<int>> all = [];
    
    for (int i = 0; i < nums.length; i++) {
      for (int num in nums[i]) {
        all.add([num, i]);
      }
    }
    
    all.sort((a, b) => a[0].compareTo(b[0]));
    
    Map<int, int> count = {};
    int l = 0, r = 0;
    int totalLists = nums.length;
    int uniqueListsInWindow = 0;
    int minRange = all.last[0] - all.first[0];
    List<int> result = [all.first[0], all.last[0]];
    
    while (r < all.length) {
      int currentList = all[r][1];
      count[currentList] = (count[currentList] ?? 0) + 1;
      if (count[currentList] == 1) uniqueListsInWindow++;
      
      while (uniqueListsInWindow == totalLists) {
        int currentRange = all[r][0] - all[l][0];
        if (currentRange < minRange) {
          minRange = currentRange;
          result = [all[l][0], all[r][0]];
        }
        
        int leftList = all[l][1];
        count[leftList] = count[leftList]! - 1;
        if (count[leftList] == 0) uniqueListsInWindow--;
        
        l++;
      }
      
      r++;
    }
    
    return result;
  }
}
```


```python []
from collections import defaultdict

class Solution:
    def smallestRange(self, nums):
        all_nums = []
        
        # Merge lists with list index
        for i, group in enumerate(nums):
            for num in group:
                all_nums.append((num, i))
        
        all_nums.sort()  # Sort by number
        
        count = defaultdict(int)
        l, r = 0, 0
        total_lists = len(nums)
        unique_lists_in_window = 0
        min_range = float('inf')
        result = [0, 0]
        
        while r < len(all_nums):
            count[all_nums[r][1]] += 1
            if count[all_nums[r][1]] == 1:
                unique_lists_in_window += 1
            
            while unique_lists_in_window == total_lists:
                current_range = all_nums[r][0] - all_nums[l][0]
                if current_range < min_range:
                    min_range = current_range
                    result = [all_nums[l][0], all_nums[r][0]]
                
                count[all_nums[l][1]] -= 1
                if count[all_nums[l][1]] == 0:
                    unique_lists_in_window -= 1
                l += 1
            
            r += 1
        
        return result
```


```java []
import java.util.*;

class Solution {
    public int[] smallestRange(List<List<Integer>> nums) {
        List<int[]> all = new ArrayList<>();
        
        // Merge lists with list index
        for (int i = 0; i < nums.size(); i++) {
            for (int num : nums.get(i)) {
                all.add(new int[]{num, i});
            }
        }
        
        all.sort(Comparator.comparingInt(a -> a[0]));
        
        Map<Integer, Integer> count = new HashMap<>();
        int l = 0, r = 0;
        int totalLists = nums.size();
        int uniqueListsInWindow = 0;
        int minRange = Integer.MAX_VALUE;
        int[] result = new int[]{0, 0};
        
        while (r < all.size()) {
            count.put(all.get(r)[1], count.getOrDefault(all.get(r)[1], 0) + 1);
            if (count.get(all.get(r)[1]) == 1) uniqueListsInWindow++;
            
            while (uniqueListsInWindow == totalLists) {
                int currentRange = all.get(r)[0] - all.get(l)[0];
                if (currentRange < minRange) {
                    minRange = currentRange;
                    result = new int[]{all.get(l)[0], all.get(r)[0]};
                }
                
                count.put(all.get(l)[1], count.get(all.get(l)[1]) - 1);
                if (count.get(all.get(l)[1]) == 0) uniqueListsInWindow--;
                l++;
            }
            
            r++;
        }
        
        return result;
    }
}
```


```javascript []
var smallestRange = function(nums) {
    let all = [];
    
    for (let i = 0; i < nums.length; i++) {
        for (let num of nums[i]) {
            all.push([num, i]);
        }
    }
    
    all.sort((a, b) => a[0] - b[0]);
    
    let count = new Map();
    let l = 0, r = 0;
    let totalLists = nums.length;
    let uniqueListsInWindow = 0;
    let minRange = Infinity;
    let result = [all[0][0], all[all.length - 1][0]];
    
    while (r < all.length) {
        let currentList = all[r][1];
        count.set(currentList, (count.get(currentList) || 0) + 1);
        if (count.get(currentList) === 1) uniqueListsInWindow++;
        
        while (uniqueListsInWindow === totalLists) {
            let currentRange = all[r][0] - all[l][0];
            if (currentRange < minRange) {
                minRange = currentRange;
                result = [all[l][0], all[r][0]];
            }
            
            let leftList = all[l][1];
            count.set(leftList, count.get(leftList) - 1);
            if (count.get(leftList) === 0) uniqueListsInWindow--;
            
            l++;
        }
        
        r++;
    }
    
    return result;
};
```


```cpp []
class Solution {
public:
    vector<int> smallestRange(vector<vector<int>>& nums) {
        vector<pair<int, int>> all;
        
        // Merge lists with list index
        for (int i = 0; i < nums.size(); ++i) {
            for (int num : nums[i]) {
                all.emplace_back(num, i);
            }
        }
        
        sort(all.begin(), all.end());
        
        unordered_map<int, int> count;
        int l = 0, r = 0;
        int totalLists = nums.size();
        int uniqueListsInWindow = 0;
        int minRange = INT_MAX;
        vector<int> result(2);
        
        while (r < all.size()) {
            count[all[r].second]++;
            if (count[all[r].second] == 1) uniqueListsInWindow++;
            
            while (uniqueListsInWindow == totalLists) {
                int currentRange = all[r].first - all[l].first;
                if (currentRange < minRange) {
                    minRange = currentRange;
                    result = {all[l].first, all[r].first};
                }
                
                count[all[l].second]--;
                if (count[all[l].second] == 0) uniqueListsInWindow--;
                l++;
            }
            
            r++;
        }
        
        return result;
    }
};
```


```go []
import (
    "sort"
)

func smallestRange(nums [][]int) []int {
    type Pair struct {
        num, index int
    }
    
    var all []Pair
    
    // Merge lists with list index
    for i, group := range nums {
        for _, num := range group {
            all = append(all, Pair{num, i})
        }
    }
    
    sort.Slice(all, func(i, j int) bool {
        return all[i].num < all[j].num
    })
    
    count := make(map[int]int)
    l, r := 0, 0
    totalLists := len(nums)
    uniqueListsInWindow := 0
    minRange := int(^uint(0) >>

 1)  // Maximum int value
    result := []int{0, 0}
    
    for r < len(all) {
        count[all[r].index]++
        if count[all[r].index] == 1 {
            uniqueListsInWindow++
        }
        
        for uniqueListsInWindow == totalLists {
            currentRange := all[r].num - all[l].num
            if currentRange < minRange {
                minRange = currentRange
                result = []int{all[l].num, all[r].num}
            }
            
            count[all[l].index]--
            if count[all[l].index] == 0 {
                uniqueListsInWindow--
            }
            l++
        }
        
        r++
    }
    
    return result
}
```

![image.png](./images/1.png) {:style='width:250px'}
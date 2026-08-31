# 🌟 Beats 100.00% 👏 || For loop || Explained with example

**Author:** phoenix_sr
**Votes:** 40
**Link:** [https://leetcode.com/problems/check-if-n-and-its-double-exist/solutions/6098626/](https://leetcode.com/problems/check-if-n-and-its-double-exist/solutions/6098626/)

---

![image.png](./images/0.png)

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
we need to check if any numbers double or half is there already in the arr or not we can use hash set for it 
# Approach
<!-- Describe your approach to solving the problem. -->
as you go through the arr check for the double and the half of the curr number if there return true else return false 
# Complexity
- Time complexity:O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```javascript []
var checkIfExist = function(arr) {
    let set = new Set()
    for(let i=0;i<arr.length;i++){
        if(set.has(arr[i]*2))return true
        if(set.has(arr[i]/2))return true
        set.add(arr[i])
    }
    return false
};
```
```python []
def checkIfExist(arr):
    seen = set()
    for num in arr:
        if num * 2 in seen or num / 2 in seen:
            return True
        seen.add(num)
    return False

```
```java []
import java.util.HashSet;

public class Solution {
    public boolean checkIfExist(int[] arr) {
        HashSet<Integer> set = new HashSet<>();
        for (int num : arr) {
            if (set.contains(num * 2) || (num % 2 == 0 && set.contains(num / 2))) {
                return true;
            }
            set.add(num);
        }
        return false;
    }
}

```
```c []
#include <stdbool.h>
#include <stdlib.h>

bool checkIfExist(int* arr, int arrSize) {
    int *hashTable = (int *)calloc(2001, sizeof(int)); // Adjust for input range -1000 to 1000
    for (int i = 0; i < arrSize; i++) {
        int adjustedIndex = arr[i] + 1000;
        if ((arr[i] % 2 == 0 && hashTable[arr[i] / 2 + 1000]) || hashTable[arr[i] * 2 + 1000]) {
            free(hashTable);
            return true;
        }
        hashTable[adjustedIndex] = 1;
    }
    free(hashTable);
    return false;
}
```
```c++ []
#include <unordered_set>
using namespace std;

class Solution {
public:
    bool checkIfExist(vector<int>& arr) {
        unordered_set<int> seen;
        for (int num : arr) {
            if (seen.count(num * 2) || (num % 2 == 0 && seen.count(num / 2))) {
                return true;
            }
            seen.insert(num);
        }
        return false;
    }
};
```

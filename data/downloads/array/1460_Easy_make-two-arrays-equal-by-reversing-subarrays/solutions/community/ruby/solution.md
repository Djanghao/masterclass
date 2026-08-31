# ✅💯🔥O(n) Time Comp🚀📌|| 🔥✔️Beats 100%🎯 || 🎓🧠6 Lang. Simple Code🔥|| Beginner friendly💀💯

**Author:** atishayj4in
**Votes:** 6
**Link:** [https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/solutions/5576639/](https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/solutions/5576639/)

---

```
//           //////////////////ATISHAY\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\           \\\\
//           \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\JAIN//////////////////           \\\\
```
```java []
class Solution {
    public boolean canBeEqual(int[] targetArray, int[] currentArray) {
        int n=targetArray.length;



        int[] e=new int[1001];
        for (int i=0; i<n; i++) {
            e[targetArray[i]]++;
            e[currentArray[i]]--;
        }
        for (int c:e) {
            if (c!=0) {
                return false;
            }
        }
        return true;
    }
}
```
```C++ []
#include <vector>

class Solution {
public:
    bool canBeEqual(std::vector<int>& target, std::vector<int>& arr) {
        int n = target.size();
        if (n != arr.size()) {
            return false;
        }
        std::vector<int> count(1001);
        for (int i = 0; i < n; ++i) {
            ++count[target[i]];
            --count[arr[i]];
        }
        
        for (int c : count) {
            if (c != 0) {
                return false;
            }
        }
        
        return true;
    }
};
```
```Python []
from collections import Counter

class Solution:
    def canBeEqual(self, target: List[int], arr: List[int]) -> bool:
        if len(target) != len(arr):
            return False
        
        count = Counter(target)
        for num in arr:
            count[num] -= 1
        
        return all(count[num] == 0 for num in count)

```
```C []
#include <stdbool.h>

bool canBeEqual(int* targetArray, int targetArraySize, int* currentArray, int currentArraySize) {
    if (targetArraySize != currentArraySize) {
        return false;
    }

    int count[1001] = {0};
    for (int i = 0; i < targetArraySize; i++) {
        count[targetArray[i]]++;
        count[currentArray[i]]--;
    }

    for (int i = 0; i < 1001; i++) {
        if (count[i] != 0) {
            return false;
        }
    }

    return true;
}

```
```JavaScript []
/**
 * @param {number[]} targetArray
 * @param {number[]} currentArray
 * @return {boolean}
 */
var canBeEqual = function(targetArray, currentArray) {
    if (targetArray.length !== currentArray.length) {
        return false;
    }

    const count = new Array(1001).fill(0);
    for (let i = 0; i < targetArray.length; i++) {
        count[targetArray[i]]++;
        count[currentArray[i]]--;
    }

    for (let c of count) {
        if (c !== 0) {
            return false;
        }
    }

    return true;
};

```
```Ruby []
def can_be_equal(target_array, current_array)
  return false unless target_array.length == current_array.length

  count = Array.new(1001, 0)
  target_array.each_with_index do |num, i|
    count[num] += 1
    count[current_array[i]] -= 1
  end

  count.all? { |c| c == 0 }
end

```

![7be995b4-0cf4-4fa3-b48b-8086738ea4ba_1699897744.9062278.jpeg](./images/0.jpeg)
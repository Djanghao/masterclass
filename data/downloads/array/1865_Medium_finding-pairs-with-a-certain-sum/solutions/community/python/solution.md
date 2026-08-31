# WHY map with nums1 fails ? THE REASON || JAVA C++ PYTHON

**Author:** Abhishekkant135
**Votes:** 5
**Link:** [https://leetcode.com/problems/finding-pairs-with-a-certain-sum/solutions/5923549/](https://leetcode.com/problems/finding-pairs-with-a-certain-sum/solutions/5923549/)

---

# BOISS JUST UPVOTE , I WORK SO HARD WRITNG THIS OUT AND YOU SHAMELESS PEOPLE SONT EVEN LIKE THE POST . PLS UPVOTE IT.
The question is easy but the issue is that people do not know why the problem with freq as they do not know about hash collision and how it actually affects the collisions.

## **Tracking Frequencies with `nums1` vs `nums2` in the HashMap**

### **Approach 1: Store `nums1` in the HashMap**
- **HashMap stores** the frequency of elements from **`nums1`**.
- **In `count()`**, you iterate over **`nums2`** and check if `(target - num)` exists in the map.  
- **Why it causes TLE:**  
  - The elements in `nums1` can go up to **10\u2079**, making the HashMap **sparse**.
  - **Hash collisions** become frequent because of the large key space, making lookups slower.
  - Even though the number of iterations in `count()` is fewer (only up to 10\u2075), the **overhead from large keys** slows things down, leading to **TLE**.

---

### **Approach 2: Store `nums2` in the HashMap (Better Choice)**
- **HashMap stores** the frequency of elements from **`nums2`**.
- **In `count()`**, you iterate over **`nums1`** and check if `(target - num)` exists in the map.
- **Why this works better:**
  - The elements in `nums2` are smaller (up to 10\u2075), making the HashMap **compact** and faster.
  - Fewer **hash collisions**, so lookups are **faster**.
  - Even though you iterate over `nums1` (which can be large), **lookups are fast**, so it avoids TLE.

---

### **Summary of the Issue**  
- **Tracking `nums1` \u2192** Sparse HashMap, hash collisions, slower lookups \u2192 **TLE**.  
- **Tracking `nums2` \u2192** Compact HashMap, faster lookups \u2192 **Efficient and avoids TLE**.

This is why it's better to track **`nums2`** in the frequency map, even though it might seem counterintuitive at first.

Let me know if this makes sense!
# Code
```java []

class FindSumPairs {
     int[] nums1;
     int[] nums2;
     HashMap<Integer, Integer> hm;

    public FindSumPairs(int[] nums1, int[] nums2) {
        this.nums1 = nums1;
        this.nums2 = nums2;
        this.hm = new HashMap<>();

        // Build frequency map for nums2 (correct placement)
        for (int num : nums2) {
            hm.put(num, hm.getOrDefault(num, 0) + 1);
        }
    }

    public void add(int index, int val) {
        // Update frequency map before modifying nums2[index]
        int oldVal = nums2[index];
        hm.put(oldVal, hm.get(oldVal) - 1);

        if (hm.get(oldVal) == 0) {
            hm.remove(oldVal);
        }

        // Update nums2 value
        nums2[index] += val;

        // Add new value to the frequency map
        int newVal = nums2[index];
        hm.put(newVal, hm.getOrDefault(newVal, 0) + 1);
    }

    public int count(int tot) {
        int count = 0;

        // For each element in nums1, check for complements in nums2
        for (int num : nums1) {
            int complement = tot - num;
            if (hm.containsKey(complement)) {
                count += hm.get(complement);
            }
        }
        return count;
    }
}



/**
 * Your FindSumPairs object will be instantiated and called as such:
 * FindSumPairs obj = new FindSumPairs(nums1, nums2);
 * obj.add(index,val);
 * int param_2 = obj.count(tot);
 */
```
```C++ []
#include <vector>
#include <unordered_map>
using namespace std;

class FindSumPairs {
    vector<int> nums1, nums2;
    unordered_map<int, int> hm; // Frequency map for nums2

public:
    FindSumPairs(vector<int>& nums1, vector<int>& nums2) {
        this->nums1 = nums1;
        this->nums2 = nums2;

        // Build frequency map for nums2
        for (int num : nums2) {
            hm[num]++;
        }
    }

    void add(int index, int val) {
        // Update frequency map before changing nums2[index]
        int oldVal = nums2[index];
        hm[oldVal]--;

        if (hm[oldVal] == 0) {
            hm.erase(oldVal);
        }

        // Update nums2 value
        nums2[index] += val;
        int newVal = nums2[index];

        // Add new value to the frequency map
        hm[newVal]++;
    }

    int count(int tot) {
        int count = 0;

        // For each element in nums1, check for complements in nums2
        for (int num : nums1) {
            int complement = tot - num;
            if (hm.count(complement)) {
                count += hm[complement];
            }
        }
        return count;
    }
};
```
```python []
from typing import List
from collections import defaultdict

class FindSumPairs:

    def __init__(self, nums1: List[int], nums2: List[int]):
        self.nums1 = nums1
        self.nums2 = nums2
        self.hm = defaultdict(int)  # Frequency map for nums2

        # Build frequency map for nums2
        for num in nums2:
            self.hm[num] += 1

    def add(self, index: int, val: int) -> None:
        # Update frequency map before modifying nums2[index]
        old_val = self.nums2[index]
        self.hm[old_val] -= 1

        if self.hm[old_val] == 0:
            del self.hm[old_val]

        # Update nums2 value
        self.nums2[index] += val
        new_val = self.nums2[index]

        # Add new value to the frequency map
        self.hm[new_val] += 1

    def count(self, tot: int) -> int:
        count = 0

        # For each element in nums1, check for complements in nums2
        for num in self.nums1:
            complement = tot - num
            if complement in self.hm:
                count += self.hm[complement]
        return count

```


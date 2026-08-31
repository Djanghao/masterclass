# Easy & Simple Approach | | HashMap | | C++ | | Java | | Python3 | | Kotlin | | ✅✅✅🔥🔥🔥

**Author:** Hunter_0718
**Votes:** 15
**Link:** [https://leetcode.com/problems/first-missing-positive/solutions/4925654/](https://leetcode.com/problems/first-missing-positive/solutions/4925654/)

---


**Intuition :**

The code utilizes a hash table approach but leverages the array itself for constant space complexity. It iterates through the array, marking the presence of positive integers within a specific range. This allows for efficient identification of the first missing positive integer.

**Approach :**

1. **Hashing with the Array (Unordered Map):**
   - The code doesn't explicitly use a hash table data structure. Instead, it creates an unordered map (`mp`) to keep track of encountered numbers.
2. **Marking Presence:**
   - It iterates through the array, adding each element to the unordered map (`mp`).
3. **Finding the Missing Positive:**
   - It iterates from 1 to the maximum element (`maxi`) in the array.
   - For each number (`i`), it checks if `i` exists in the unordered map (`mp`).
     - If `i` is not found, it signifies a missing positive integer, and `i` is returned.
4. **Handling All Positives Present:**
   - If the loop completes without finding a missing positive, it implies all positive integers (up to `maxi`) are present. In this case, it returns `maxi + 1`.

**Time Complexity :**

- The code has three main iterations through the array:
    - Marking encountered numbers in the unordered map (`O(n)`)
    - Checking for missing positives (`O(n)`)
    - Handling all positives present (`O(n)`)
- Total time complexity: O(n)

**Space Complexity :**

- The code uses an unordered map (`mp`) to store encountered numbers.
- However, the size of the unordered map is limited by the array size . So the space complexity (O(n)).

```C++ []
class Solution {
public:
    int firstMissingPositive(std::vector<int>& nums) {
        int n = nums.size();
        unordered_map<int,bool> mp;
        // Finding the maximum element in nums
        int maxi = *max_element(nums.begin(), nums.end());
        // Populating the unordered_map with values from nums
        for(auto &num : nums){
            mp[num] = true;
        }
        // Checking for the first missing positive integer
        for(int i=1; i<maxi; i++){
            if(mp.find(i) == mp.end())
                return i;
        }
        // If all integers from 1 to maxi are present, return maxi+1
        return maxi < 0 ? 1 : maxi+1;
    }
};

```
```Java []

class Solution {
    public int firstMissingPositive(int[] nums) {
        HashMap<Integer, Boolean> mp = new HashMap<>();
        int maxi = Integer.MIN_VALUE;
        for (int num : nums) {
            mp.put(num, true);
            maxi = Math.max(maxi, num);
        }
        for (int i = 1; i < maxi; i++) {
            if (!mp.containsKey(i))
                return i;
        }
        return maxi < 0 ? 1 : maxi + 1;
    }
}

```
```Python3 []
class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        mp = {}
        maxi = max(nums, default=0)
        for num in nums:
            mp[num] = True
        for i in range(1, maxi):
            if i not in mp:
                return i
        return 1 if maxi < 0 else maxi + 1

```
```Kotlin []
class Solution {
    fun firstMissingPositive(nums: IntArray): Int {
        val mp = HashMap<Int, Boolean>()
        var maxi = Int.MIN_VALUE
        for (num in nums) {
            mp[num] = true
            maxi = maxOf(maxi, num)
        }
        for (i in 1 until maxi) {
            if (!mp.containsKey(i))
                return i
        }
        return if (maxi < 0) 1 else maxi + 1
    }
}

```
```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const mp = new Map();
    let maxi = Math.max(...nums, 0);
    for (let num of nums) {
        mp.set(num, true);
    }
    for (let i = 1; i < maxi; i++) {
        if (!mp.has(i)) {
            return i;
        }
    }
    return maxi < 0 ? 1 : maxi + 1;
};

```





**Dry Run on Test Cases 1 and 2 :**

**Test Case 1:**
- Input: `nums = [1, 2, 0]`
- Unordered map (`mp`): `mp = {1: true, 2: true}`
- Checking for missing positives:
    - `i = 1` (present in `mp`)
    - `i = 2` (present in `mp`)
    - `i = 3` (not found in `mp`), so `3` is returned.

**Test Case 2:**
- Input: `nums = [3, 4, -1, 1]`
- Unordered map (`mp`): `mp = {1: true, 3: true, 4: true}`
- Checking for missing positives:
    - `i = 1` (present in `mp`)
    - `i = 2` (not found in `mp`), so `2` is returned.
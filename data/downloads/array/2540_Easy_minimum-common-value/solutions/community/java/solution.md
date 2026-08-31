# ✔️✔️4 Method | Simple  | C++/Java/Python | With Explanation

**Author:** Inam_28_06
**Votes:** 71
**Link:** [https://leetcode.com/problems/minimum-common-value/solutions/4845123/](https://leetcode.com/problems/minimum-common-value/solutions/4845123/)

---

Please **upvote** if you find the solution helpful. 





`- Methods 1 and 2 are efficient with larger arrays, favoring memory.`
`- Method 3, a two-pointer approach, is memory-efficient for smaller arrays.`
`- Method 4, binary search, is less efficient and recommended only with specific constraints favoring it.`

**Method 1 -Map**

1. **Create Hash Map**: Create an unordered_map to store the frequency of elements in the first array, nums1.
2. **Count Occurrences**: Loop through nums1 and increment the count of each element in the hash map.
3. **Find Common Element**: Loop through nums2 and check if each element exists in the hash map with a count greater than 0.
4. **Return Common Element**: If a common element is found, return it. Otherwise, return -1.
 
**Time Complexity: O(n + m)**
**Space Complexity: O(min(n, m))**
**C++**
```
class Solution {
public:
    int getCommon(vector<int>& nums1, vector<int>& nums2) {
        unordered_map<int, int> mp;
        for (int num : nums1) {
            mp[num]++;
        }
        for (int num : nums2) {
            if (mp[num] > 0) {
                return num;
            }
        }
        return -1;
    }
};
```
**Java**
```
class Solution {
    public int getCommon(int[] nums1, int[] nums2) {
        HashMap<Integer, Integer> mp = new HashMap<>();
        for (int num : nums1) {
            mp.put(num, mp.getOrDefault(num, 0) + 1);
        }
        for (int num : nums2) {
            if (mp.containsKey(num) && mp.get(num) > 0) {
                return num;
            }
        }
        return -1;
    }
}
```
**Python**
```
class Solution:
    def getCommon(self, nums1, nums2):
        mp = defaultdict(int)
        for num in nums1:
            mp[num] += 1
        for num in nums2:
            if mp[num] > 0:
                return num
        return -1
```
**Method 2- Set**
1. **Create Set**: Initialize an unordered_set `s` with the elements of `nums1`.
2. **Find Common Element**: Iterate through each element `num` in `nums2`. If `s.count(num)` is greater than zero, return `num` as the first common element.
3. **Return Result**: If no common element is found after iterating through all elements of `nums2`, return -1.

**Time Complexity: O(n + m)**
**Space Complexity: O(min(n, m))**
**C++**
```
class Solution {
public:
    int getCommon(vector<int>& nums1, vector<int>& nums2) {
        unordered_set<int> s(nums1.begin(), nums1.end());
        for (int i = 0; i < nums2.size(); i++) {
            if (s.count(nums2[i]) > 0) {
                return nums2[i];
            }
        }
        return -1;
    }
};
```
**Java**
```
class Solution {
    public int getCommon(int[] nums1, int[] nums2) {
        HashSet<Integer> set = new HashSet<>();
        for (int num : nums1) {
            set.add(num);
        }
        for (int num : nums2) {
            if (set.contains(num)) {
                return num;
            }
        }
        return -1;
    }
}
```
**Python**
```
class Solution:
    def getCommon(self, nums1, nums2):
        s = set(nums1)
        for num in nums2:
            if num in s:
                return num
        return -1
```
**Method 3 -Binary Search**




1. **Binary Search Function (search)**:
   - Takes a sorted array `nums` and a target number `target`.
   - Initializes `l` as the first index (0) and `h` as the last index (`n - 1`).
   - Enters a while loop until `l <= h`.
   - Calculates the middle index `mid`.
   - Checks if `nums[mid]` is equal to `target`. If true, returns true.
   - If `nums[mid] > target`, updates `h` to `mid - 1`.
   - If `nums[mid] < target`, updates `l` to `mid + 1`.
   - Returns false if no such value exists.

2. **Main Function (getCommon)**:
   - Takes two sorted arrays `nums1` and `nums2`.
   - Iterates through each element in `nums1`.
   - Uses binary search to check if the current element exists in `nums2`.
   - If found, returns the common element.
   - If no common elements are found after checking all elements, returns -1.

 **Time Complexity: O(n log m)**
 **Space Complexity: O(1)**
**C++**
```
class Solution {
public:
    bool search(vector<int>& nums, int target) {
        int n = nums.size();
        int l = 0;
        int h = n - 1;
        while(l <= h) {
            int mid = l + (h - l) / 2;
            if(nums[mid] == target) return true;
            else if(nums[mid] > target) h = mid - 1;
            else l = mid + 1;
        }
        return false;
    }
    
    int getCommon(vector<int>& nums1, vector<int>& nums2) {
        int n = nums1.size();
        for(int i = 0; i < n; i++) {
            if(search(nums2, nums1[i])) return nums1[i];
        }
        return -1;
    }
};
```
**Java**
```
public class Solution {
    public boolean search(int[] nums, int target) {
        int n = nums.length;
        int l = 0;
        int h = n - 1;
        while (l <= h) {
            int mid = l + (h - l) / 2;
            if (nums[mid] == target) {
                return true;
            } else if (nums[mid] > target) {
                h = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return false;
    }

    public int getCommon(int[] nums1, int[] nums2) {
        int n = nums1.length;
        for (int i = 0; i < n; i++) {
            if (search(nums2, nums1[i])) {
                return nums1[i];
            }
        }
        return -1;
    }
}

```
**Python**
```
class Solution:
    def search(self, nums, target):
        n = len(nums)
        l, h = 0, n - 1
        while l <= h:
            mid = l + (h - l) // 2
            if nums[mid] == target:
                return True
            elif nums[mid] > target:
                h = mid - 1
            else:
                l = mid + 1
        return False
    
    def getCommon(self, nums1, nums2):  # Corrected method name
        n = len(nums1)
        for i in range(n):
            if self.search(nums2, nums1[i]):
                return nums1[i]
        return -1
```
**Method 4- Two pointer Approach**

1. **Initialize Pointers**: Initialize two pointers, `i` and `j`, both starting from the beginning of the sorted arrays.
2. **Find Common Element**: Use a while loop that continues until either `i` or `j` reaches the end of their respective arrays or a common element is found.
   - Check if `nums1[i]` equals `nums2[j]`. If true, return this common element.
   - If `nums1[i] < nums2[j]`, increment `i`.
   - If `nums2[j] < nums1[i]`, increment `j`.
3. **Return -1 if No Common Element Found**: If the loop completes without finding a common element, return -1.


**Time Complexity: O(n + m)**
**Space Complexity: O(1)**
**C++**
```
class Solution {
public:
    int getCommon(vector<int>& nums1,vector<int>& nums2) {
        
        int i = 0, j = 0;
        
        while (i < nums1.size() && j < nums2.size()) {
            if (nums1[i] == nums2[j]) {
                return nums1[i]; 
            } 
            else if (nums1[i] < nums2[j]) {
                i++; 
            } else {
                j++; 
            }
        }
        
        return -1; 
    }
};
```
**Java**
```
class Solution {
    public int getCommon(int[] nums1, int[] nums2) {
        int i = 0, j = 0;

        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] == nums2[j]) {
                return nums1[i];
            } else if (nums1[i] < nums2[j]) {
                i++;
            } else {
                j++;
            }
        }

        return -1;
    }
}
```
**Python**
```
class Solution:
    def getCommon(self, nums1, nums2):
        i, j = 0, 0

        while i < len(nums1) and j < len(nums2):
            if nums1[i] == nums2[j]:
                return nums1[i]
            elif nums1[i] < nums2[j]:
                i += 1
            else:
                j += 1

        return -1
```
![image](./images/0.jpeg)

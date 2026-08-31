# ✅5 Method's || C++ || JAVA || PYTHON || Beginner Friendly🔥🔥🔥

**Author:** datpham0412
**Votes:** 97
**Link:** [https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/5049086/](https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/5049086/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The "Number of Arithmetic Triplets" problem requires finding triplets in a given sorted array nums such that two consecutive differences match a given value diff. This problem tests our ability to efficiently find specific sequences in an array that meet certain numerical criteria. Given the constraints and the strictly increasing nature of the array, multiple methods can be employed, each with different trade-offs in terms of time and space efficiency.
# Approach
<!-- Describe your approach to solving the problem. -->
## 1. Brute force
 The most straightforward approach is a brute force method using three nested loops. This method iteratively checks every possible triplet to see if the consecutive differences match '**diff**'. However, this approach has a cubic time complexity O(n^3), making it inefficient for larger arrays.
1. Iterate over each element as a potential first element of the triplet
2. Use a second loop to find a middle element that is greater than the first element by '**diff**'
3. Use a third loop to find a third element that is greater than the second element by '**diff**'.
4. Count each valid triple.

## 2. Array 
A slightly more refined approach involves using the '**find**' function for the array. This reduces the nesting of llops to one, but each call to '**find**' is O(n), leading to overall complexity of O(n^2)

1. For each element in the array, use '**find**' to check if there exists another element exactly 'diff' away.
2. If such an element exists, use '**find**' again to check for a third element another 'diff' away.
3. Count valid sequences.

## 3. Hashmap
Using a hashmap significantly speeds up the search processes by allowing constant-time complexity lookups. This method achieves O(n) time complexity by trading off with O(n) space complexity.

1. First, map each number to its index in the array.
2. For each number in the array, check if the next two sequential differences of '**diff**' exist in the map.
3. If both exist, count this as a valid triplet.

## 4. Unordered Set
Similarly to the hashmap, using an unordered set allows for constant-time complexity lookups for existence but does not concern itself with indices. It also operates in O(n) time and O(n) space.
1. Store all numbers in an unordered set for quick lookup.
2. or each number, check if it is the first in a valid triplet by looking up the two necessary succeeding numbers formed by adding '**diff**' twice.
3. Count each valid sequence.

## 5. Binary Search
Using binary search leverages the sorted nature of the array to check for the existence of required numbers with O(log n) complexity per search, resulting in an overall complexity of O(n log n).
1. For each number, perform a binary search to find the next number in the sequence.
2. If found, perform another binary search for the third number.
3. Count each valid triplet found this way.

This approach is particularly useful when space is at a premium, as it avoids the need for additional data structures beyond the input array itself, making it ideal for scenarios where maintaining a low memory footprint is crucial.


# Complexity
## 1. Brute Force
- Time complexity: O(n^3)
- Space complexity: O(1)
## 2. Array
- Time complexity: O(n^2)
- Space complexity: O(1)
## 3. Hashmap
- Time complexity: O(n)
- Space complexity: O(n)
## 4. Unordered Set
- Time complexity: O(n)
- Space complexity: O(n)
## 5. Binary Search
- Time complexity: O(n log n)
- Space complexity: O(1)
# Code
## 1. Brute Force
```C++ []
class Solution {
public:
    int arithmeticTriplets(vector<int>& nums, int diff) {
        int counter = 0;
        for (int i = 0; i < nums.size(); i ++){
            for (int j = i + 1; j < nums.size(); j++){
                for (int k = j + 1; k < nums.size(); k++){
                    if (nums[k] - nums[j] == diff && nums[j] - nums[i] == diff)
                    counter ++;
                }
            }
        }        
        return counter;
    }
};
```
```Java []
class Solution {
    public int arithmeticTriplets(int[] nums, int diff) {
        int counter = 0;
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                for (int k = j + 1; k < nums.length; k++) {
                    if (nums[k] - nums[j] == diff && nums[j] - nums[i] == diff) {
                        counter++;
                    }
                }
            }
        }
        return counter;
    }
}
```
```Python3 []
class Solution:
    def arithmeticTriplets(self, nums: List[int], diff: int) -> int:
        counter = 0
        n = len(nums)
        for i in range(n):
            for j in range(i + 1, n):
                for k in range(j + 1, n):
                    if nums[k] - nums[j] == diff and nums[j] - nums[i] == diff:
                        counter += 1
        return counter
```

## 2. Array
```C++ []
class Solution {
public:
    int arithmeticTriplets(vector<int>& nums, int diff) {
        int counter = 0;
        for (int i = 0; i < nums.size(); i++){
            if ((find(nums.begin(), nums.end(), nums[i] + diff) != nums.end()) &&
                (find(nums.begin(), nums.end(), nums[i] + (2*diff))!= nums.end())){
                    counter ++;
                }
         }
        return counter;
    }
};
```
```Java []
class Solution {
    public int arithmeticTriplets(int[] nums, int diff) {
        int counter = 0;
        for (int i = 0; i < nums.length; i++) {
            if (contains(nums, nums[i] + diff) && contains(nums, nums[i] + 2 * diff)) {
                counter++;
            }
        }
        return counter;
    }

    private boolean contains(int[] nums, int target) {
        for (int num : nums) {
            if (num == target) {
                return true;
            }
        }
        return false;
    }
}
```
```Python3 []
class Solution:
    def arithmeticTriplets(self, nums: List[int], diff: int) -> int:
        counter = 0
        for i in range(len(nums)):
            if self.contains(nums, nums[i] + diff) and self.contains(nums, nums[i] + 2 * diff):
                counter += 1
        return counter

    def contains(self, nums: List[int], target: int) -> bool:
        return target in nums
```

## 3. Hashmap
```C++ []
class Solution {
public:
    int arithmeticTriplets(vector<int>& nums, int diff) {
        unordered_map <int, int> seen;
        int counter = 0;
        for (int i = 0; i < nums.size(); i++){
            seen[nums[i]] = i;
        }
        for (int i = 0; i < nums.size(); i++){
            if(seen.count(nums[i] + diff) && seen.count(nums[i] + (2*diff))){
                counter++;
            }
        }
        return counter;
    }
};
```
```Java []
class Solution {
    public int arithmeticTriplets(int[] nums, int diff) {
        HashMap<Integer, Integer> seen = new HashMap<>();
        int counter = 0;
        for (int i = 0; i < nums.length; i++) {
            seen.put(nums[i], i);
        }
        for (int num : nums) {
            if (seen.containsKey(num + diff) && seen.containsKey(num + 2 * diff)) {
                counter++;
            }
        }
        return counter;
    }
}
```
```Python3 []
class Solution:
    def arithmeticTriplets(self, nums: List[int], diff: int) -> int:
        seen = {}
        counter = 0
        for i in range(len(nums)):
            seen[nums[i]] = i
        for num in nums:
            if (num + diff) in seen and (num + 2 * diff) in seen:
                counter += 1
        return counter
```
## 4. Unordered Set
```C++ []
class Solution {
public:
    int arithmeticTriplets(vector<int>& nums, int diff) {
        int counter = 0;
        unordered_set <int> numSet (nums.begin(), nums.end());
        for (int i = 0; i < nums.size(); i++){
            if (numSet.count(nums[i] + diff) && numSet.count(nums[i] + (2*diff))){
                counter ++;
            }
        }
        return counter;
    }
};
```
```Java []
class Solution {
    public int arithmeticTriplets(int[] nums, int diff) {
        int counter = 0;
        Set<Integer> numSet = new HashSet<>();
        for (int num : nums) {
            numSet.add(num);
        }
        for (int num : nums) {
            if (numSet.contains(num + diff) && numSet.contains(num + 2 * diff)) {
                counter++;
            }
        }
        return counter;
    }
}
```
```Python3 []
class Solution:
    def arithmeticTriplets(self, nums: List[int], diff: int) -> int:
        counter = 0
        numSet = set(nums) 
        for num in nums:
            if (num + diff) in numSet and (num + 2 * diff) in numSet:
                counter += 1
        
        return counter
```
## 5. Binary Search
```C++ []
class Solution {
    private:
    bool binarySearch(vector<int>&nums, int target){
        int low = 0;
        int high = nums.size() - 1;
        while (low <= high){
            int mid = low + (high - low)/2;
            if (nums[mid] == target){
                return true;
            }
            else if (nums[mid] < target){
                low = mid + 1;
            }
            else{
                high = mid - 1;
            }
        }
        return false;
    }
public:
    int arithmeticTriplets(vector<int>& nums, int diff) {
        int counter = 0;
        for (int i = 0; i < nums.size(); i++){
            if(binarySearch(nums,nums[i] + diff) && binarySearch(nums, nums[i] + (2*diff))){
                counter ++;
            }
        }
        return counter;
    }
};
```
```Java []
class Solution {
    private boolean binarySearch(int[] nums, int target) {
        int low = 0;
        int high = nums.length - 1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (nums[mid] == target) {
                return true;
            } else if (nums[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return false;
    }
    public int arithmeticTriplets(int[] nums, int diff) {
        int counter = 0;
        for (int num : nums) {
            if (binarySearch(nums, num + diff) && binarySearch(nums, num + 2 * diff)) {
                counter++;
            }
        }
        return counter;
    }
}
```
```Python3 []
class Solution:
    def binarySearch(self, nums: List[int], target: int) -> bool:
        low, high = 0, len(nums) - 1
        while low <= high:
            mid = low + (high - low) // 2
            if nums[mid] == target:
                return True
            elif nums[mid] < target:
                low = mid + 1
            else:
                high = mid - 1
        return False
    def arithmeticTriplets(self, nums: List[int], diff: int) -> int:
        counter = 0
        for num in nums:
            if self.binarySearch(nums, num + diff) and self.binarySearch(nums, num + 2 * diff):
                counter += 1
        return counter
```
![image.png](./images/0.png)

### If you found my solution useful, I'd truly appreciate your upvote. Your support encourages me to keep sharing more solutions. Thank you!!!











# C++/Java/Python/JavaScript | 🚀 ✅ Fully Explained | 🚀 ✅ MAP || 2 Approach

**Author:** devanshupatel
**Votes:** 33
**Link:** [https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/solutions/3444403/](https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/solutions/3444403/)

---

# Intuition:
Both approaches are solving the same problem of determining whether a given array can be divided into groups of k consecutive elements or not. Approach 1 uses a map to keep track of the frequency of each element, and then iterates over the elements while maintaining the current group of k consecutive elements. If the current group cannot be formed, it returns false. Approach 2 also uses a map to keep track of the frequency of each element but sorts the array first and then iterates over it. For each element, it checks if it can form a group of k consecutive elements by checking the frequency of the next k-1 elements.

# Approach 1:

1. Initialize a map to keep track of the frequency of each element.
2. Iterate over the array and update the map with the frequency of each element.
3. While the map is not empty, get the first element of the map.
4. Iterate over the next k consecutive elements and check if they exist in the map and have a frequency greater than 0. If any element is missing or has a frequency of 0, return false.
5. Update the frequency of each element in the group and remove any element from the map whose frequency becomes 0.
6. Return true if all groups of k consecutive elements can be formed.
# Approach 2:

1. Check if the length of the array is divisible by k. If not, return false.
2. Initialize an unordered map to keep track of the frequency of each element.
3. Iterate over the array and update the map with the frequency of each element.
4. Sort the array in ascending order.
5. For each element in the sorted array, check if its frequency is greater than 0.
6. If yes, iterate over the next k-1 elements and check if they exist in the map and have a frequency greater than 0. If any element is missing or has a frequency of 0, return false.
7. Update the frequency of each element in the group.
8. Repeat steps 5-7 until all groups of k consecutive elements have been formed.
9. Return true if all groups of k consecutive elements can be formed.
# Complexity:

- Time complexity:
    - Approach 1: The time complexity of this approach is O(n log n) due to the use of a map and the worst-case scenario is when all elements are distinct, then it takes nlogn time for inserting into map, and n times we need to check for each group of k elements.
    - Approach 2: The time complexity of this approach is O(n log n) due to the use of sorting and iterating over the sorted array. Sorting takes O(n log n) time, and iterating over the array takes O(n) time.

- Space complexity:
    - Approach 1: The space complexity of this approach is O(n) due to the use of a map to store the frequency of each element.
    - Approach 2: The space complexity of this approach is also O(n) due to the use of an unordered map to store the frequency of each element.
# C++
## Approach 1
```
class Solution {
public:
     bool isPossibleDivide(vector<int>& nums, int k) {
         map<int,int> map;
         for(int num : nums){
             map[num]++;
         }
         while(map.size()!=0){
             int first = map.begin()->first;
             for(int i=first; i<first+k; i++){
                 if(!map.count(i)){
                     return false;
                 }
                 map[i]--;
                 if(map[i]==0){
                     map.erase(i);
                 }
             }
         }
         return true;
     }
 };
```
## Approach 2
```
class Solution {
public:
    bool isPossibleDivide(vector<int>& nums, int k) {
        if (nums.size() % k != 0) {
            return false;
        }
        
        unordered_map<int,int> map;
        for (int num : nums) {
            map[num]++;
        }
        
        sort(nums.begin(), nums.end());
        
        for (int num : nums) {
            if (map[num] > 0) {
                for (int i = num + 1; i < num + k; i++) {
                    if (map[i] == 0) {
                        return false;
                    }
                    map[i]--;
                }
                map[num]--;
            }
        }
        
        return true;
    }
};

```
# Java
 ## Approach 1
```
class Solution {
    public boolean isPossibleDivide(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int num : nums) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }
        while (!map.isEmpty()) {
            int first = Collections.min(map.keySet());
            for (int i = first; i < first + k; i++) {
                if (!map.containsKey(i)) {
                    return false;
                }
                map.put(i, map.get(i) - 1);
                if (map.get(i) == 0) {
                    map.remove(i);
                }
            }
        }
        return true;
    }
}

```
## Approach 2
```
class Solution {
    public boolean isPossibleDivide(int[] nums, int k) {
        if (nums.length % k != 0) {
            return false;
        }

        Map<Integer, Integer> map = new HashMap<>();
        for (int num : nums) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        Arrays.sort(nums);

        for (int num : nums) {
            if (map.get(num) > 0) {
                for (int i = num + 1; i < num + k; i++) {
                    if (map.getOrDefault(i, 0) == 0) {
                        return false;
                    }
                    map.put(i, map.get(i) - 1);
                }
                map.put(num, map.get(num) - 1);
            }
        }

        return true;
    }
}

```
# Python
 ## Approach 1
```
class Solution(object):
    def isPossibleDivide(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: bool
        """
        num_map = {}
        for num in nums:
            num_map[num] = num_map.get(num, 0) + 1
        while num_map:
            first = min(num_map)
            for i in range(first, first+k):
                if i not in num_map:
                    return False
                num_map[i] -= 1
                if num_map[i] == 0:
                    del num_map[i]
        return True

```
 ## Approach 2
```
class Solution(object):
    def isPossibleDivide(self, nums, k):
        if len(nums) % k != 0:
            return False
        
        map = {}
        for num in nums:
            map[num] = map.get(num, 0) + 1
        
        nums.sort()
        
        for num in nums:
            if map[num] > 0:
                for i in range(num+1, num+k):
                    if map.get(i, 0) == 0:
                        return False
                    map[i] -= 1
                map[num] -= 1
        
        return True

```
# JavaScript
 ## Approach 1
```
var isPossibleDivide = function(nums, k) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  while (map.size !== 0) {
    const first = Array.from(map.keys()).sort((a, b) => a - b)[0];
    for (let i = first; i < first + k; i++) {
      if (!map.has(i)) {
        return false;
      }
      map.set(i, map.get(i) - 1);
      if (map.get(i) === 0) {
        map.delete(i);
      }
    }
  }
  return true;
}
```
 ## Approach 2
```
var isPossibleDivide = function(nums, k) {
  if (nums.length % k !== 0) {
    return false;
  }

  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  nums.sort((a, b) => a - b);

  for (const num of nums) {
    if (map.get(num) > 0) {
      for (let i = num + 1; i < num + k; i++) {
        if (map.get(i) === 0) {
          return false;
        }
        map.set(i, map.get(i) - 1);
      }
      map.set(num, map.get(num) - 1);
    }
  }

  return true;
}

```
# Similar Question: 
https://leetcode.com/problems/hand-of-straights/solutions/3444424/c-very-easy-fully-explained-using-map/
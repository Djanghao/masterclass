# 3 Easy Interview Approaches✅ || Brute force🔥|| HashMap💯|| Count Sort✅|| Beat💯|| All Language🔥

**Author:** naman_malik
**Votes:** 63
**Link:** [https://leetcode.com/problems/relative-sort-array/solutions/5293311/](https://leetcode.com/problems/relative-sort-array/solutions/5293311/)

---

![image.png](./images/0.png)


# Approach - 1
<!-- Describe your approach to solving the problem. -->
Brute force - Using Two Loops and Sorting

# Complexity
- Time complexity: O(m+n + nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n) or O(logn)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    vector<int> relativeSortArray(vector<int>& arr1, vector<int>& arr2) {
        vector<int> result;
     
        for (int i = 0; i < arr2.size(); i++) {
            for (int j = 0; j < arr1.size(); j++) {   
                if (arr1[j] == arr2[i]) {
                    result.push_back(arr1[j]);
                    arr1[j] = -1;
                }
            }
        }
        sort(arr1.begin(), arr1.end());

        for (int i = 0; i < arr1.size(); i++) {
            if (arr1[i] != -1) {
                result.push_back(arr1[i]);
            }
        }
        return result;
    }
};
```
```java []
class Solution {
    public int[] relativeSortArray(int[] arr1, int[] arr2) {
        List<Integer> result = new ArrayList<>();
        
        for (int i = 0; i < arr2.length; i++) {
            for (int j = 0; j < arr1.length; j++) {
                if (arr1[j] == arr2[i]) {
                    result.add(arr1[j]);
                    arr1[j] = -1;
                }
            }
        }
        
        Arrays.sort(arr1);
        
        for (int i = 0; i < arr1.length; i++) {
            if (arr1[i] != -1) {
                result.add(arr1[i]);
            }
        }
        
        // Convert List<Integer> to int[]
        return result.stream().mapToInt(Integer::intValue).toArray();
    }
}

```
```python []
class Solution:
    def relativeSortArray(self, arr1, arr2):
        result = []
        
        for i in range(len(arr2)):
            for j in range(len(arr1)):
                if arr1[j] == arr2[i]:
                    result.append(arr1[j])
                    arr1[j] = -1
        
        arr1.sort()
        
        for num in arr1:
            if num != -1:
                result.append(num)
                
        return result

```


# Approach - 2
<!-- Describe your approach to solving the problem. -->
Better approach - Using HashMap for Counting and Sorting

# Complexity
- Time complexity: O(m+nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n+m) i.e O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    vector<int> relativeSortArray(vector<int>& arr1, vector<int>& arr2) {
        unordered_map<int, int> countMap;
        vector<int> remaining, result;
        // Initialize count map with relative order elements
        for (int i = 0; i < arr2.size(); i++) {
            countMap[arr2[i]] = 0;
        }
        // Count occurrences of elements in target array
        for (int i = 0; i < arr1.size(); i++) {
            if (countMap.find(arr1[i]) != countMap.end()) {
                countMap[arr1[i]]++;
            } else {
                remaining.push_back(arr1[i]);
            }
        }
        // Sort the remaining elements
        sort(remaining.begin(), remaining.end());
        // Add elements as per relative order
        for (int i = 0; i < arr2.size(); i++) {
            for (int j = 0; j < countMap[arr2[i]]; j++) {
                result.push_back(arr2[i]);
            }
        }
        // Add remaining elements
        for (int i = 0; i < remaining.size(); i++) {
            result.push_back(remaining[i]);
        }
        return result;
    }
};
```
```java []
class Solution {
    public int[] relativeSortArray(int[] arr1, int[] arr2) {
        Map<Integer, Integer> countMap = new HashMap<>();
        List<Integer> remaining = new ArrayList<>();
        List<Integer> result = new ArrayList<>();

        // Initialize count map with relative order elements
        for (int num : arr2) {
            countMap.put(num, 0);
        }

        // Count occurrences of elements in target array
        for (int num : arr1) {
            if (countMap.containsKey(num)) {
                countMap.put(num, countMap.get(num) + 1);
            } else {
                remaining.add(num);
            }
        }

        // Sort the remaining elements
        Collections.sort(remaining);

        // Add elements as per relative order
        for (int num : arr2) {
            for (int j = 0; j < countMap.get(num); j++) {
                result.add(num);
            }
        }

        // Add remaining elements
        result.addAll(remaining);

        // Convert List<Integer> to int[]
        return result.stream().mapToInt(Integer::intValue).toArray();
    }
}

```
```python []
class Solution:
    def relativeSortArray(self, arr1, arr2):
        from collections import defaultdict

        count_map = defaultdict(int)
        remaining = []
        result = []

        # Initialize count map with relative order elements
        for num in arr2:
            count_map[num] = 0

        # Count occurrences of elements in target array
        for num in arr1:
            if num in count_map:
                count_map[num] += 1
            else:
                remaining.append(num)

        # Sort the remaining elements
        remaining.sort()

        # Add elements as per relative order
        for num in arr2:
            result.extend([num] * count_map[num])

        # Add remaining elements
        result.extend(remaining)

        return result

```


# Approach - 3
<!-- Describe your approach to solving the problem. -->
Optimised Approach - Using Counting Sort

# Complexity
- Time complexity: O(m+n+k)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(k)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    vector<int> relativeSortArray(vector<int>& arr1, vector<int>& arr2) {
        int maxElement = *max_element(arr1.begin(), arr1.end());
        vector<int> count(maxElement + 1);

        // Count occurrences of each element
        for (int element : arr1) {
            count[element]++;
        }

        vector<int> result;
        // Add elements as per relative order
        for (int element : arr2) {
            while (count[element] > 0) {
                result.push_back(element);
                count[element]--;
            }
        }
        // Add remaining elements in ascending order
        for (int num = 0; num <= maxElement; num++) {
            while (count[num] > 0) {
                result.push_back(num);
                count[num]--;
            }
        }
        return result;
    }
};
```
```java []
class Solution {

    public int[] relativeSortArray(int[] arr1, int[] arr2) {
        int maxElement = Arrays.stream(arr1).max().orElse(0);
        int[] count = new int[maxElement + 1];

        // Count occurrences of each element
        for (int element : arr1) {
            count[element]++;
        }

        List<Integer> result = new ArrayList<>();
        // Add elements as per relative order
        for (int value : arr2) {
            while (count[value] > 0) {
                result.add(value);
                count[value]--;
            }
        }

        // Add remaining elements in ascending order
        for (int num = 0; num <= maxElement; num++) {
            while (count[num] > 0) {
                result.add(num);
                count[num]--;
            }
        }

        // Convert ArrayList to array
        return result.stream().mapToInt(Integer::intValue).toArray();
    }
}
```
```python []
class Solution:
    def relativeSortArray(self, arr1, arr2):
        from collections import defaultdict

        count_map = defaultdict(int)
        remaining = []
        result = []

        # Initialize count map with relative order elements
        for num in arr2:
            count_map[num] = 0

        # Count occurrences of elements in target array
        for num in arr1:
            if num in count_map:
                count_map[num] += 1
            else:
                remaining.append(num)

        # Sort the remaining elements
        remaining.sort()

        # Add elements as per relative order
        for num in arr2:
            result.extend([num] * count_map[num])

        # Add remaining elements
        result.extend(remaining)

        return result

```
![upvoteBOY.png](./images/1.png)

 

# ✅✅Majority Element in Array🔥🔥

**Author:** ilxamovic
**Votes:** 12
**Link:** [https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/solutions/4388733/](https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/solutions/4388733/)

---

# Intuition
The problem seems to ask for finding a "special" integer, which appears more than 25% of the time in the given array. The approach appears to use a dictionary to count the occurrences of each element and then iterate through the dictionary to find the element that meets the criteria.

# Approach
1. Check if the array length is less than 2, return the only element.
2. Initialize variables, including a dictionary to store the count of each element and a variable to store the result.
3. Iterate through the array, updating the dictionary with element counts.
4. Iterate through the dictionary to find the element that appears more than 25% of the time.
5. Return the result.

# Complexity
- **Time complexity:** O(n), where n is the length of the input array. The code iterates through the array once and then iterates through the dictionary, both operations taking linear time.
- **Space complexity:** O(n), where n is the length of the input array. The dictionary stores counts for each unique element in the array.

# Code
```csharp []
public class Solution {
    public int FindSpecialInteger(int[] arr)
    {
        if (arr.Length < 2){
            return arr[0];
        }
        int result = 0;
        int percent = (int)(arr.Length * 0.25);
        Dictionary<int, int> dc = new Dictionary<int, int>();
        foreach (int i in arr)
        {
            if (dc.ContainsKey(i))
            {
                dc[i]++;
            }
            else {
                dc[i] = 1;
            }
        }

        foreach (int key in dc.Keys)
        {
            if (dc[key] > percent)
            {
                result = key;
            }
        }

        return result;
    }
}
```
``` Java []
public class Solution {
    public int findSpecialInteger(int[] arr) {
        if (arr.length < 2) {
            return arr[0];
        }
        int result = 0;
        int percent = (int) (arr.length * 0.25);
        Map<Integer, Integer> map = new HashMap<>();
        
        for (int i : arr) {
            map.put(i, map.getOrDefault(i, 0) + 1);
        }

        for (int key : map.keySet()) {
            if (map.get(key) > percent) {
                result = key;
            }
        }

        return result;
    }
}
```
``` Rust []
impl Solution {
    pub fn find_special_integer(arr: Vec<i32>) -> i32 {
        if arr.len() < 2 {
            return arr[0];
        }
        let mut result = 0;
        let percent = (arr.len() as f32 * 0.25) as usize;
        let mut map = HashMap::new();

        for &i in &arr {
            *map.entry(i).or_insert(0) += 1;
        }

        for (&key, &count) in &map {
            if count > percent {
                result = key;
            }
        }

        result
    }
}
```
```Go []
func findSpecialInteger(arr []int) int {
	if len(arr) < 2 {
		return arr[0]
	}
	result := 0
	percent := int(float64(len(arr)) * 0.25)
	countMap := make(map[int]int)

	for _, i := range arr {
		countMap[i]++
	}

	for key, count := range countMap {
		if count > percent {
			result = key
		}
	}

	return result
}
```
```Python []
class Solution:
    def findSpecialInteger(self, arr: List[int]) -> int:
        if len(arr) < 2:
            return arr[0]
        result = 0
        percent = int(len(arr) * 0.25)
        count_map = {}

        for i in arr:
            count_map[i] = count_map.get(i, 0) + 1

        for key, count in count_map.items():
            if count > percent:
                result = key

        return result
```

![image name](https://i.imgur.com/JdL5kBI.gif)

- Please upvote me !!!
# 🔥🔥🔥 O(1) Time and Space | Easy Array Solution | Explained 🔥🔥🔥

**Author:** pratamandiko
**Votes:** 15
**Link:** [https://leetcode.com/problems/sequential-digits/solutions/4662820/](https://leetcode.com/problems/sequential-digits/solutions/4662820/)

---


# Intuition
The problem asks us to find all integers within a given range that have sequential digits. A sequential digit is defined as a number in which each digit is one more than the previous digit. To solve this problem, we can systematically generate all possible sequential digits within the given range and filter out the valid ones.

# Approach
1. Initialize an empty list result to store the sequential digits within the given range.

2. Iterate through all possible starting digits from 1 to 9 (inclusive). For each starting digit, create a number by appending the subsequent digits in a nested loop.

3. Check if the generated number is within the given range [low, high]. If it is, add the number to the result list.

4. After both loops are complete, return the sorted result list.

# Complexity
- Time complexity: **$$O(1)$$**


- Space complexity:**$$O(1)$$**
# Code
```javascript []
var sequentialDigits = function(low, high) {
    const result = [];

    for (let i = 1; i <= 9; i++) {
        let num = i;

        for (let j = i + 1; j <= 9; j++) {
            num = num * 10 + j;
            console.log(num)

            if (num >= low && num <= high) {
                result.push(num);
            }
        }
    }
    

    return result.sort((a, b) => a - b);
};

```
```python3 []
from typing import List

class Solution:
    def sequentialDigits(self, low: int, high: int) -> List[int]:
        result = []

        for i in range(1, 10):
            num = i

            for j in range(i + 1, 10):
                num = num * 10 + j

                if low <= num <= high:
                    result.append(num)

        return sorted(result)

```
```Go []
pfunc sequentialDigits(low int, high int) []int {
	result := make([]int, 0)

	for i := 1; i <= 9; i++ {
		num := i

		for j := i + 1; j <= 9; j++ {
			num = num*10 + j

			if num >= low && num <= high {
				result = append(result, num)
			}
		}
	}

	sort.Ints(result)
	return result
}
```
```Java []
class Solution {
    public List<Integer> sequentialDigits(int low, int high) {
        List<Integer> result = new ArrayList<>();

        for (int i = 1; i <= 9; i++) {
            int num = i;

            for (int j = i + 1; j <= 9; j++) {
                num = num * 10 + j;

                if (num >= low && num <= high) {
                    result.add(num);
                }
            }
        }

        Collections.sort(result);
        return result;
    }
}
```
```C++ []
class Solution {
public:
    vector<int> sequentialDigits(int low, int high) {
        std::vector<int> result;

        for (int i = 1; i <= 9; i++) {
            int num = i;

            for (int j = i + 1; j <= 9; j++) {
                num = num * 10 + j;

                if (num >= low && num <= high) {
                    result.push_back(num);
                }
            }
        }

        std::sort(result.begin(), result.end());
        return result;
    }
};
```
# PLEASE UPVOTE IF ITS HELP!!!!!

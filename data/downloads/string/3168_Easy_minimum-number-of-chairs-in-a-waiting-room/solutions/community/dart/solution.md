# Simple & Detailed Explanation - O(N) & O(1)

**Author:** muhammadfarhankt
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/solutions/5243793/](https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/solutions/5243793/)

---

# Intuition
- When solving this problem, we need to keep track of how many people are in the waiting room at any given time and determine the peak number of people present simultaneously. This peak value will represent the minimum number of chairs required since every person needs a chair when they enter.

# Approach
1. Initialize Variables:
    - currentOccupancy: This will track the current number of people in the waiting room.
    - maxOccupancy: This will track the maximum number of people in the waiting room at any point in time.
2. Iterate Through the String:
For each character in the string:
    - If the character is 'E', increment currentOccupancy because a person has entered.
    - If the character is 'L', decrement currentOccupancy because a person has left.
    - Update maxOccupancy to be the maximum of itself and currentOccupancy.
3. Return the Result:
The maxOccupancy will be the minimum number of chairs needed in the waiting room.

# Complexity
- Time complexity: O(n), where \uD835\uDC5B is the length of the string. We only need to iterate through the string once.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1). We only use a fixed amount of extra space regardless of the input size.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Golang []
func minimumChairs(s string) int {
    currentOccupancy := 0
    maxOccupancy := 0

    for _, event := range s {
        if event == 'E' {
            currentOccupancy++
        } else {
            currentOccupancy--
        }
        if currentOccupancy > maxOccupancy {
            maxOccupancy = currentOccupancy
        }
    }

    return maxOccupancy
}
```
```C++ []
class Solution {
public:
    int minimumChairs(string s) {
        int currentOccupancy = 0;
        int maxOccupancy = 0;

        for (char event : s) {
            if (event == 'E') {
                currentOccupancy++;
            } else {
                currentOccupancy--;
            }
            if (currentOccupancy > maxOccupancy) {
                maxOccupancy = currentOccupancy;
            }
        }

        return maxOccupancy;
    }
};
```
```Java []
class Solution {
    public int minimumChairs(String s) {
        int currentOccupancy = 0;
        int maxOccupancy = 0;

        for (char event : s.toCharArray()) {
            if (event == 'E') {
                currentOccupancy++;
            } else {
                currentOccupancy--;
            }
            if (currentOccupancy > maxOccupancy) {
                maxOccupancy = currentOccupancy;
            }
        }

        return maxOccupancy;
    }
}
```
```Javascript []
/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
    let currentOccupancy = 0;
    let maxOccupancy = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'E') {
            currentOccupancy++;
        } else {
            currentOccupancy--;
        }
        if (currentOccupancy > maxOccupancy) {
            maxOccupancy = currentOccupancy;
        }
    }

    return maxOccupancy;
};
```
```Python []
class Solution:
    def minimumChairs(self, s: str) -> int:
        currentOccupancy = 0
        maxOccupancy = 0

        for event in s:
            if event == 'E':
                currentOccupancy += 1
            else:
                currentOccupancy -= 1
            if currentOccupancy > maxOccupancy:
                maxOccupancy = currentOccupancy

        return maxOccupancy
```
```Dart []
class Solution {
  int minimumChairs(String s) {
    int currentOccupancy = 0;
    int maxOccupancy = 0;

    for (int i = 0; i < s.length; i++) {
      if (s[i] == 'E') {
        currentOccupancy++;
      } else {
        currentOccupancy--;
      }
      if (currentOccupancy > maxOccupancy) {
        maxOccupancy = currentOccupancy;
      }
    }

    return maxOccupancy;
  }
}
```
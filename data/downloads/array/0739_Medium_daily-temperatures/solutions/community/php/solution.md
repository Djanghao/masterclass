# ✅☑Beats 95% Users || [C++/TypeScript/JavaScript/Go/Swift/Rust/PHP/Python3] || EXPLAINED

**Author:** naweeth03
**Votes:** 6
**Link:** [https://leetcode.com/problems/daily-temperatures/solutions/4653184/](https://leetcode.com/problems/daily-temperatures/solutions/4653184/)

---


# Approach
# 1. Initialization:
- Create an array (result) to store the final result, initialized with zeros. The length of this array is the same as the number of temperatures.
- Create an empty stack (stack) to keep track of indices.
# 2. Iterate through Temperatures:
- Use a loop to iterate through the given temperatures, and for each temperature at index i:
# 3. Process the Stack:
- While the stack is not empty and the current temperature is higher than the temperature at the index at the top of the stack:
   - Pop the index from the stack.
   - Calculate the difference between the current index (i) and the popped index, indicating the number of days until the next warmer temperature for the popped day.
   - Update the result array at the popped index with this difference.
- Continue this process until the stack is empty or the temperature at the current index is not higher than the temperature at the index at the top of the stack.
# 4. Push Current Index onto Stack:
- Push the current index onto the stack.
# 5. Return Result:
- After processing all temperatures, the result array contains the number of days until the next warmer temperature for each day.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
``` C++ []
class Solution {
 public:
  vector<int> dailyTemperatures(vector<int>& temperatures) {
    vector<int> ans(temperatures.size());
    stack<int> stack;  

    for (int i = 0; i < temperatures.size(); ++i) {
      while (!stack.empty() && temperatures[stack.top()] < temperatures[i]) {
        const int index = stack.top();
        stack.pop();
        ans[index] = i - index;
      }
      stack.push(i);
    }

    return ans;
  }
};
```
```TypeScript []
function dailyTemperatures(temperatures: number[]): number[] {
    const result: number[] = new Array(temperatures.length).fill(0);
    const stack: number[] = [];

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            const index = stack.pop()!;
            result[index] = i - index;
        }
        stack.push(i);
    }

    return result;
}
```
```javascript []
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = [];

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            const index = stack.pop();
            result[index] = i - index;
        }
        stack.push(i);
    }

    return result;
};
```
```Go []
func dailyTemperatures(temperatures []int) []int {
    result := make([]int, len(temperatures))
    stack := []int{}

    for i := 0; i < len(temperatures); i++ {
        for len(stack) > 0 && temperatures[stack[len(stack)-1]] < temperatures[i] {
            index := stack[len(stack)-1]
            stack = stack[:len(stack)-1]
            result[index] = i - index
        }
        stack = append(stack, i)
    }

    return result
}
```
```Swift []
class Solution {
    func dailyTemperatures(_ temperatures: [Int]) -> [Int] {
        var result = [Int](repeating: 0, count: temperatures.count)
        var stack = [Int]()

        for i in 0..<temperatures.count {
            while !stack.isEmpty && temperatures[stack.last!] < temperatures[i] {
                let index = stack.removeLast()
                result[index] = i - index
            }
            stack.append(i)
        }

        return result
    }
}
```
```Rust []
impl Solution {
    pub fn daily_temperatures(temperatures: Vec<i32>) -> Vec<i32> {
        let mut result = vec![0; temperatures.len()];
        let mut stack = Vec::new();

        for (i, &temp) in temperatures.iter().enumerate() {
            while let Some(&top) = stack.last() {
                if temp > temperatures[top] {
                    let index = stack.pop().unwrap();
                    result[index] = (i - index) as i32;
                } else {
                    break;
                }
            }
            stack.push(i);
        }

        result
    }
}
```
```PHP []
class Solution {

    /**
     * @param Integer[] $temperatures
     * @return Integer[]
     */
    function dailyTemperatures($temperatures) {
        $result = array_fill(0, count($temperatures), 0);
        $stack = [];

        foreach ($temperatures as $i => $temp) {
            while (!empty($stack) && $temperatures[end($stack)] < $temp) {
                $index = array_pop($stack);
                $result[$index] = $i - $index;
            }
            array_push($stack, $i);
        }

        return $result;
    }
}
```
```python []
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        result = [0] * len(temperatures)
        stack = []

        for i, temp in enumerate(temperatures):
            while stack and temperatures[stack[-1]] < temp:
                index = stack.pop()
                result[index] = i - index
            stack.append(i)

        return result
```





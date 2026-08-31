# 🔥BEATS 💯 % 🎯 | SUPER EASY AND SIMPLE🔥|

**Author:** CodeWithSparsh
**Votes:** 0
**Link:** [https://leetcode.com/problems/different-ways-to-add-parentheses/solutions/5807483/](https://leetcode.com/problems/different-ways-to-add-parentheses/solutions/5807483/)

---



---

# Intuition
The problem is essentially about finding different ways to compute the result of a mathematical expression by considering different ways to group the numbers and operators. This can be approached using **Divide and Conquer**. At every operator (`+`, `-`, `*`), we can split the expression into two sub-expressions, recursively solve them, and combine their results. This approach works well because it explores all possible ways to compute the result.

# Approach
1. **Base case**: If the input is a number (i.e., no operators present), return that number as a result.
2. **Recursive case**: For each operator (`+`, `-`, `*`) in the expression:
   - Recursively compute all possible results for the left part of the expression.
   - Recursively compute all possible results for the right part of the expression.
   - Combine the results from the left and right parts based on the operator.
3. Return the list of results for the entire expression.

# Complexity
- **Time complexity**:  
  Since we explore all possible combinations of groupings, the time complexity is **exponential**. For an expression of length \\( n \\), it will take \\( O(2^n) \\) time.
  
- **Space complexity**:  
  The space complexity is also \\( O(2^n) \\), since we store the results of all the sub-expressions.

---

# Code Implementations


```dart []
class Solution {
  List<int> diffWaysToCompute(String expression) {
    List<int> results = [];
    if (isNumeric(expression)) return [int.parse(expression)];

    for (int i = 0; i < expression.length; i++) {
      String char = expression[i];
      if (kOperators.contains(char)) {
        List<int> leftResults = diffWaysToCompute(expression.substring(0, i));
        List<int> rightResults = diffWaysToCompute(expression.substring(i + 1));

        for (int left in leftResults) {
          for (int right in rightResults) {
            int result = 0;
            if (char == '+') {
              result = left + right;
            } else if (char == '-') {
              result = left - right;
            } else if (char == '*') {
              result = left * right;
            }
            results.add(result);
          }
        }
      }
    }
    return results;
  }

  bool isNumeric(String s) => int.tryParse(s) != null;
}

const List<String> kOperators = ['+', '-', '*'];
```


```java []
import java.util.*;

class Solution {
    public List<Integer> diffWaysToCompute(String expression) {
        List<Integer> results = new ArrayList<>();
        if (isNumeric(expression)) {
            results.add(Integer.parseInt(expression));
            return results;
        }

        for (int i = 0; i < expression.length(); i++) {
            char c = expression.charAt(i);
            if (c == '+' || c == '-' || c == '*') {
                List<Integer> leftResults = diffWaysToCompute(expression.substring(0, i));
                List<Integer> rightResults = diffWaysToCompute(expression.substring(i + 1));

                for (int left : leftResults) {
                    for (int right : rightResults) {
                        if (c == '+') {
                            results.add(left + right);
                        } else if (c == '-') {
                            results.add(left - right);
                        } else if (c == '*') {
                            results.add(left * right);
                        }
                    }
                }
            }
        }
        return results;
    }

    private boolean isNumeric(String str) {
        try {
            Integer.parseInt(str);
            return true;
        } catch (NumberFormatException e) {
            return false;
        }
    }
}
```


```javascript []
var diffWaysToCompute = function(expression) {
    const results = [];
    if (isNumeric(expression)) return [parseInt(expression)];

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];
        if (['+', '-', '*'].includes(char)) {
            const leftResults = diffWaysToCompute(expression.substring(0, i));
            const rightResults = diffWaysToCompute(expression.substring(i + 1));

            for (const left of leftResults) {
                for (const right of rightResults) {
                    if (char === '+') {
                        results.push(left + right);
                    } else if (char === '-') {
                        results.push(left - right);
                    } else if (char === '*') {
                        results.push(left * right);
                    }
                }
            }
        }
    }
    return results;
};

function isNumeric(str) {
    return !isNaN(str);
}
```


```python []
class Solution:
    def diffWaysToCompute(self, expression: str):
        if expression.isdigit():
            return [int(expression)]
        
        results = []
        for i, char in enumerate(expression):
            if char in "+-*":
                left_results = self.diffWaysToCompute(expression[:i])
                right_results = self.diffWaysToCompute(expression[i+1:])
                
                for left in left_results:
                    for right in right_results:
                        if char == '+':
                            results.append(left + right)
                        elif char == '-':
                            results.append(left - right)
                        elif char == '*':
                            results.append(left * right)
        return results
```

```cpp []
#include <vector>
#include <string>

using namespace std;

class Solution {
public:
    vector<int> diffWaysToCompute(string expression) {
        vector<int> results;
        if (isNumeric(expression)) {
            results.push_back(stoi(expression));
            return results;
        }

        for (int i = 0; i < expression.size(); i++) {
            char c = expression[i];
            if (c == '+' || c == '-' || c == '*') {
                vector<int> leftResults = diffWaysToCompute(expression.substr(0, i));
                vector<int> rightResults = diffWaysToCompute(expression.substr(i + 1));

                for (int left : leftResults) {
                    for (int right : rightResults) {
                        if (c == '+') {
                            results.push_back(left + right);
                        } else if (c == '-') {
                            results.push_back(left - right);
                        } else if (c == '*') {
                            results.push_back(left * right);
                        }
                    }
                }
            }
        }
        return results;
    }

private:
    bool isNumeric(const string& s) {
        return all_of(s.begin(), s.end(), ::isdigit);
    }
};
```


```go []
import (
	"strconv"
)

func diffWaysToCompute(expression string) []int {
	if isNumeric(expression) {
		num, _ := strconv.Atoi(expression)
		return []int{num}
	}

	results := []int{}
	for i, char := range expression {
		if char == '+' || char == '-' || char == '*' {
			leftResults := diffWaysToCompute(expression[:i])
			rightResults := diffWaysToCompute(expression[i+1:])

			for _, left := range leftResults {
				for _, right := range rightResults {
					switch char {
					case '+':
						results = append(results, left+right)
					case '-':
						results = append(results, left-right)
					case '*':
						results = append(results, left*right)
					}
				}
			}
		}
	}
	return results
}

func isNumeric(s string) bool {
	_, err := strconv.Atoi(s)
	return err == nil
}
```


```typescript []
function diffWaysToCompute(expression: string): number[] {
    const results: number[] = [];
    if (isNumeric(expression)) return [parseInt(expression)];

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];
        if (['+', '-', '*'].includes(char)) {
            const leftResults = diffWaysToCompute(expression.substring(0, i));
            const rightResults = diffWaysToCompute(expression.substring(i + 1));

            for (const left of leftResults) {
                for (const right of rightResults) {
                    if (char === '+') {
                        results.push(left + right);
                    } else if (char === '-') {
                        results.push(left - right);
                    } else if (char === '*') {
                        results.push(left * right);
                    }
                }
            }
        }
    }
    return results;
}

function isNumeric(s: string): boolean {
    return !isNaN(Number(s));
}
```

---

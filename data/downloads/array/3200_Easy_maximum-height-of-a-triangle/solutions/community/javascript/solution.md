# Brute Force - Iterative Greedy Approach Detailed explanation ✅

**Author:** muhammadfarhankt
**Votes:** 27
**Link:** [https://leetcode.com/problems/maximum-height-of-a-triangle/solutions/5389255/](https://leetcode.com/problems/maximum-height-of-a-triangle/solutions/5389255/)

---

# Intuition
The problem requires forming a triangle using red and blue balls, where each row alternates in color and increases in the number of balls. The goal is to maximize the height of the triangle given the counts of red and blue balls.

# Approach
To solve the problem, we employ a function that computes the maximum height of the triangle by considering two starting scenarios: starting with red balls and starting with blue balls. The function iteratively builds the triangle row by row, alternating between red and blue balls until it's not possible to form the next row due to insufficient balls.

## Complexity
- Time complexity: (O(sqrt(N))), where \\(N\\) is the total number of balls (`red + blue`). This is because the function iterates up to the square root of the total number of balls to determine the maximum height.
- Space complexity: \\(O(1)\\). The function uses only a constant amount of extra space regardless of the input size.

### If this solution helped you, please consider giving it an upvote. \u2B06\uFE0F 
Your feedback motivates me to share more insights and solutions.


# Code
```Java []
class Solution {
    public int maxHeightOfTriangle(int red, int blue) {
        return Math.max(helper(red, blue), helper(blue, red));
    }

    private int helper(int red, int blue) {
        int h = 0;
        int i = 1;

        while (true) {
            if (i % 2 == 1) {
                if (red >= i) {
                    red -= i;
                } else {
                    break;
                }
            } else {
                if (blue >= i) {
                    blue -= i;
                } else {
                    break;
                }
            }
            h++;
            i++;
        }

        return h;
    }
}
```
```C++ []
class Solution {
public:
    int maxHeightOfTriangle(int red, int blue) {
        return max(helper(red, blue), helper(blue, red));
    }
    
private:
    int helper(int red, int blue) {
        int h = 0;
        int i = 1;

        while (true) {
            if (i % 2 == 1) {
                if (red >= i) {
                    red -= i;
                } else {
                    break;
                }
            } else {
                if (blue >= i) {
                    blue -= i;
                } else {
                    break;
                }
            }
            h++;
            i++;
        }

        return h;
    }
};
```
```Python []
class Solution:
    def maxHeightOfTriangle(self, red: int, blue: int) -> int:
        return max(self.helper(red, blue), self.helper(blue, red))
    
    def helper(self, red: int, blue: int) -> int:
        h = 0
        i = 1
        
        while True:
            if i % 2 == 1:
                if red >= i:
                    red -= i
                else:
                    break
            else:
                if blue >= i:
                    blue -= i
                else:
                    break
            h += 1
            i += 1
        
        return h
```
```Javascript []
/**
 * @param {number} red
 * @param {number} blue
 * @return {number}
 */
var maxHeightOfTriangle = function(red, blue) {
    return Math.max(helper(red, blue), helper(blue, red));
    
    function helper(red, blue) {
        let h = 0;
        let i = 1;
        
        while (true) {
            if (i % 2 === 1) {
                if (red >= i) {
                    red -= i;
                } else {
                    break;
                }
            } else {
                if (blue >= i) {
                    blue -= i;
                } else {
                    break;
                }
            }
            h++;
            i++;
        }
        
        return h;
    }
};
```
```Golang []
func maxHeightOfTriangle(red int, blue int) int {
    return max(helper(red, blue), helper(blue, red))
}

func helper(red int, blue int) int {
    h := 0
    i := 1

    for {
        if i % 2 == 1 {
            if red >= i {
                red -= i
            } else {
                break
            }
        } else {
            if blue >= i {
                blue -= i
            } else {
                break
            }
        }
        h++
        i++
    }

    return h
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```
```C []
int maxHeightOfTriangle(int red, int blue) {
    return max(helper(red, blue), helper(blue, red));
}

int helper(int red, int blue) {
    int h = 0;
    int i = 1;

    while (1) {
        if (i % 2 == 1) {
            if (red >= i) {
                red -= i;
            } else {
                break;
            }
        } else {
            if (blue >= i) {
                blue -= i;
            } else {
                break;
            }
        }
        h++;
        i++;
    }

    return h;
}
```
```Dart []

```
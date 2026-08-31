# Go | Easy to Understand | Math instead of DP

**Author:** dankevich
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/solutions/4337691/](https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/solutions/4337691/)

---

# Intuition and Approach
<!-- Describe your first thoughts on how to solve this problem. -->
We must have 2 chairs per section, and any number of plants. 
It means that for every two chairs and N plants we can put a divider between every plant. 
For example the sequence `"SSPPPPSS"` we can put dividers as `1 * (numberOfPlants + 1)`.
1. SSPPPPSS result = 1, plants = 0, chairs = 2
2. SSPPPPSS result = 1, plants = 1, chairs = 2
3. SSPPPPSS result = 1, plants = 2, chairs = 2
4. SSPPPPSS result = 1, plants = 3, chairs = 2
5. SSPPPPSS result = 1, plants = 4, chairs = 2
6. On this iteration we meet chair, let's calculate what we have `result * (plants + 1)`, which means we can put divider `SS|P|P|P|P|SS`
7. On this iteration we meet chair again, but there is no enough chairs - simply increment

# Complexity
- Time complexity:
O(N) - iteration time

- Space complexity:
O(1) - no extra space allocated (we aren't counting on constant variables not dependent on input)

# Code
```
const mod = 10e8 + 7

func numberOfWays(corridor string) int {
    chairs, plants, result := 0, 0, 1

    for _, place := range corridor {
        if place == 'S' {
            if chairs == 2 {
                result = (result * (plants + 1)) % mod
                chairs, plants = 0, 0
            }
            chairs++
        } else if chairs == 2 {
            plants++
        }
    }
    if chairs == 2 {
        return result
    }
    return 0
}
```
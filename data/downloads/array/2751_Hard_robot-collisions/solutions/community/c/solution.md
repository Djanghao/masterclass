# ✅💯🔥Explanations No One Will Give You🎓🧠Very Detailed Approach🎯🔥Extremely Simple And Effective🔥

**Author:** heir-of-god
**Votes:** 213
**Link:** [https://leetcode.com/problems/robot-collisions/solutions/5468704/](https://leetcode.com/problems/robot-collisions/solutions/5468704/)

---

<blockquote>
        <p>
            <b>
                You\u2019ve got to get up every morning with determination if you\u2019re going to go to bed with satisfaction.
            </b>        
        </p>
        <p>
            --- George Lorimer ---
        </p>
</blockquote>

# \uD83D\uDC51Problem Explanation and Understanding:

## \uD83C\uDFAF Problem Description
You are given `n` robots each of which have its position, health and direction all represented with arrays. These robots in one moment of time start moving with equal speed each in its `direction`. Every time two robots share 1 cell it turns into collide with this rules:
- If one robot has more health then decrease its health by 1 and remove the robot with less health
- If robots have equal amount of health - remove them both
You want to return health of robots which stay alive in order they were given

## \uD83D\uDCE5\u2935\uFE0F Input:
`1 <= positions.length == healths.length == directions.length == n <= 10^5`
- Integer array `positions`   | 1 <= positions[i] <= 10^9    ;  all positions are distinct
- Integer array `healths`     | 1 <= healths[i] <= 10^9
- String array `directions`   | directions[i] in ('L', 'R')

## \uD83D\uDCE4\u2934\uFE0F Output:
The array of healths of robots which will stay alive in order they were given

---

# 1\uFE0F\u20E3\uD83E\uDDE0 Approach: Smart Simulation With Sorting

# \uD83E\uDD14 Intuition
- The first thing that came to my mind was to simulate this process, but it is clear that due to the fact that the positions are not sorted, this is quite difficult to do.
- However, what dissuaded me from sorting for a while was that we need to return the health of the robots in the order in which we were given them (which usually means that sorting is not necessary).
- Okay, let's imagine that we sorted the robots. Now we can go through this sorted list and add robots to the stack one by one. Why the stack? Because if we meet a robot that goes to the left, then the first enemy it meets is the last robot that goes to the right that we met.
- Thus, the whole logic is that every time we meet a robot that goes to the right, we add it to the stack and every time we meet a robot that goes to the left, we fight it with the last robot on the stack until the last the robot on the stack does not go left (Which means there are no more robots on the left that go right) or until the robot dies.
- For better understanding, let's look at an example.
- `P.S. You can do the same thing but in reverse - go from right to left in the array, append left robots and fight right robots`

### Dry Run

Let's look at this example

```
positions = [3, 1, 4, 2]
healths = [10, 5, 11, 10]
directions = "RLLR"
```

**Setup before loop:**
1. **n** = 4
2. **robots** list after combining positions, healths, directions, and indices:
```
robots = [[3, 10, 'R', 0], [1, 5, 'L', 1], [4, 11, 'L', 2], [2, 10, 'R', 3]]
```
3. **robots** list after sorting by positions:

```
robots = [[1, 5, 'L', 1], [2, 10, 'R', 3], [3, 10, 'R', 0], [4, 11, 'L', 2]]
```
4. **stack**: []

**Inside the loop:**

| Loop Index | Robot                      | Stack State                        | Action                                                 |
|------------|----------------------------|------------------------------------|--------------------------------------------------------|
| 0          | [1, 5, 'L', 1]             | []                                 | Append to stack                                        |
|            |                            | [[1, 5, 'L', 1]]                   |                                                        |
| 1          | [2, 10, 'R', 3]            | [[1, 5, 'L', 1]]                   | Append to stack                                        |
|            |                            | [[1, 5, 'L', 1], [2, 10, 'R', 3]]  |                                                        |
| 2          | [3, 10, 'R', 0]            | [[1, 5, 'L', 1], [2, 10, 'R', 3]]  | Append to stack                                        |
|            |                            | [[1, 5, 'L', 1], [2, 10, 'R', 3], [3, 10, 'R', 0]]  |                                            |
| 3          | [4, 11, 'L', 2]            | [[1, 5, 'L', 1], [2, 10, 'R', 3], [3, 10, 'R', 0]] | Collide with last robot in stack                        |
|            |                            |                                    | Last robot health < current robot health               |
|            |                            | [[1, 5, 'L', 1], [2, 10, 'R', 3]]  | Last robot is removed from stack                       |
|            |                            |                                    | Current robot health decreased by 1 (to 10)            |
|            |                            | [[1, 5, 'L', 1], [2, 10, 'R', 3]]  | Collide with new last robot in stack                   |
|            |                            |                                    | Last robot health == current robot health              |
|            |                            | [[1, 5, 'L', 1]]                   | Last robot removed from the stack and this robot won't be added                     |

---

**Final Stack State:**

```
[[1, 5, 'L', 1]]
```

**Sorted Stack by Original Indices:**

```
[[1, 5, 'L', 1]]
```

**Final Output:**

```
[5]
```

# \uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB Coding 
- Create a list `robots` that combines `positions`, `healths`, `directions`, and the original indices into a list of lists.
- Sort the `robots` list based on the positions.
- Initialize an empty list `stack` to keep track of the surviving robots.
- Iterate through each `robot` in the sorted `robots` list:
    - If the current robot is moving right (`"R"`) or the stack is empty or the last robot in the stack is moving left (`"L"`), append the current robot to the stack and continue to the next robot.
    - If the current robot is moving left (`"L"`):
        - Set a flag `add` to `True`.
        - While the stack is not empty, the last robot in the stack is moving right (`"R"`), and `add` is `True`:
            - Get the health of the last robot in the stack as `last_health`.
            - If the current robot's health is greater than `last_health`, pop the last robot from the stack and decrease the current robot's health by 1.
            - If the current robot's health is less than `last_health`, decrease the last robot's health by 1 and set `add` to `False`.
            - If the current robot's health is equal to `last_health`, pop the last robot from the stack and set `add` to `False`.
        - If `add` is `True`, append the current robot to the stack.
- Return a list of the healths of the surviving robots, sorted by their original indices.

# \uD83D\uDCDA Complexity Analysis
- \u23F0 Time complexity: O(n * log n), since we use sorting twice in the code which lead to 2 * n * log n -> O(n log n) 
- \uD83E\uDDFA Space complexity: O(n), since 1. Sorting functions can use extra memory. 2. We creating new list `robots` of size `n`

# \uD83D\uDCBB Code
``` python []
class Solution:
    def survivedRobotsHealths(self, positions: List[int], healths: List[int], directions: str) -> List[int]:
        n = len(positions)
        robots = [[positions[ind], healths[ind], directions[ind], ind] for ind in range(n)]
        robots.sort()
        stack = []

        for robot in robots:
            if robot[2] == "R" or not stack or stack[-1][2] == "L":
                stack.append(robot)
                continue

            if robot[2] == "L":
                add = True
                while stack and stack[-1][2] == "R" and add:
                    last_health = stack[-1][1]
                    if robot[1] > last_health:
                        stack.pop()
                        robot[1] -= 1
                    elif robot[1] < last_health:
                        stack[-1][1] -= 1
                        add = False
                    else:
                        stack.pop()
                        add = False

                if add:
                    stack.append(robot)

        return [robot[1] for robot in sorted(stack, key=lambda robot: robot[3])]
```
``` C++ []
class Solution {
public:
    vector<int> survivedRobotsHealths(vector<int>& positions, vector<int>& healths, string directions) {
        int n = positions.size();
        vector<vector<int>> robots;

        for (int i = 0; i < n; ++i) {
            robots.push_back({positions[i], healths[i], directions[i], i});
        }

        sort(robots.begin(), robots.end());

        vector<vector<int>> stack;

        for (auto& robot : robots) {
            if (robot[2] == 'R' || stack.empty() || stack.back()[2] == 'L') {
                stack.push_back(robot);
                continue;
            }

            if (robot[2] == 'L') {
                bool add = true;
                while (!stack.empty() && stack.back()[2] == 'R' && add) {
                    int last_health = stack.back()[1];
                    if (robot[1] > last_health) {
                        stack.pop_back();
                        robot[1] -= 1;
                    } else if (robot[1] < last_health) {
                        stack.back()[1] -= 1;
                        add = false;
                    } else {
                        stack.pop_back();
                        add = false;
                    }
                }

                if (add) {
                    stack.push_back(robot);
                }
            }
        }

        vector<int> result;
        sort(stack.begin(), stack.end(), [](vector<int>& a, vector<int>& b) {
            return a[3] < b[3];
        });

        for (auto& robot : stack) {
            result.push_back(robot[1]);
        }

        return result;
    }
};
```
``` JavaScript []
var survivedRobotsHealths = function(positions, healths, directions) {
    let n = positions.length;
    let robots = [];

    for (let i = 0; i < n; ++i) {
        robots.push([positions[i], healths[i], directions[i], i]);
    }

    robots.sort((a, b) => a[0] - b[0]);

    let stack = [];

    for (let robot of robots) {
        if (robot[2] === 'R' || stack.length === 0 || stack[stack.length - 1][2] === 'L') {
            stack.push(robot);
            continue;
        }

        if (robot[2] === 'L') {
            let add = true;
            while (stack.length > 0 && stack[stack.length - 1][2] === 'R' && add) {
                let last_health = stack[stack.length - 1][1];
                if (robot[1] > last_health) {
                    stack.pop();
                    robot[1] -= 1;
                } else if (robot[1] < last_health) {
                    stack[stack.length - 1][1] -= 1;
                    add = false;
                } else {
                    stack.pop();
                    add = false;
                }
            }

            if (add) {
                stack.push(robot);
            }
        }
    }

    stack.sort((a, b) => a[3] - b[3]);

    let result = [];
    for (let robot of stack) {
        result.push(robot[1]);
    }

    return result;
};
```
``` Java []
class Solution {
    public List<Integer> survivedRobotsHealths(int[] positions, int[] healths, String directions) {
        int n = positions.length;
        List<int[]> robots = new ArrayList<>();

        for (int i = 0; i < n; ++i) {
            robots.add(new int[]{positions[i], healths[i], directions.charAt(i), i});
        }

        Collections.sort(robots, (a, b) -> Integer.compare(a[0], b[0]));

        Stack<int[]> stack = new Stack<>();

        for (int[] robot : robots) {
            if (robot[2] == 'R' || stack.isEmpty() || stack.peek()[2] == 'L') {
                stack.push(robot);
                continue;
            }

            if (robot[2] == 'L') {
                boolean add = true;
                while (!stack.isEmpty() && stack.peek()[2] == 'R' && add) {
                    int last_health = stack.peek()[1];
                    if (robot[1] > last_health) {
                        stack.pop();
                        robot[1] -= 1;
                    } else if (robot[1] < last_health) {
                        stack.peek()[1] -= 1;
                        add = false;
                    } else {
                        stack.pop();
                        add = false;
                    }
                }

                if (add) {
                    stack.push(robot);
                }
            }
        }

        List<int[]> resultList = new ArrayList<>(stack);
        resultList.sort(Comparator.comparingInt(a -> a[3]));

        List<Integer> result = new ArrayList<>();
        for (int[] robot : resultList) {
            result.add(robot[1]);
        }

        return result;
    }
}
```
``` C []
typedef struct {
    int position;
    int health;
    char direction;
    int index;
} Robot;

int compareByPosition(const void* a, const void* b) {
    return ((Robot*)a)->position - ((Robot*)b)->position;
}

int compareByIndex(const void* a, const void* b) {
    return ((Robot*)a)->index - ((Robot*)b)->index;
}

int* survivedRobotsHealths(int* positions, int positionsSize, int* healths, int healthsSize, char* directions, int* returnSize) {
    int n = positionsSize;
    Robot* robots = (Robot*)malloc(n * sizeof(Robot));
    Robot* stack = (Robot*)malloc(n * sizeof(Robot));
    int stackSize = 0;

    for (int i = 0; i < n; ++i) {
        robots[i].position = positions[i];
        robots[i].health = healths[i];
        robots[i].direction = directions[i];
        robots[i].index = i;
    }

    qsort(robots, n, sizeof(Robot), compareByPosition);

    for (int i = 0; i < n; ++i) {
        Robot robot = robots[i];
        if (robot.direction == 'R' || stackSize == 0 || stack[stackSize - 1].direction == 'L') {
            stack[stackSize++] = robot;
            continue;
        }

        if (robot.direction == 'L') {
            int add = 1;
            while (stackSize > 0 && stack[stackSize - 1].direction == 'R' && add) {
                int last_health = stack[stackSize - 1].health;
                if (robot.health > last_health) {
                    stackSize--;
                    robot.health -= 1;
                } else if (robot.health < last_health) {
                    stack[stackSize - 1].health -= 1;
                    add = 0;
                } else {
                    stackSize--;
                    add = 0;
                }
            }

            if (add) {
                stack[stackSize++] = robot;
            }
        }
    }

    qsort(stack, stackSize, sizeof(Robot), compareByIndex);

    int* result = (int*)malloc(stackSize * sizeof(int));
    *returnSize = stackSize;
    for (int i = 0; i < stackSize; ++i) {
        result[i] = stack[i].health;
    }

    free(robots);
    free(stack);

    return result;
}
```

## \uD83D\uDCA1\uD83D\uDCA1\uD83D\uDCA1I encourage you to check out [my profile](https://leetcode.com/heir-of-god/) and [Project-S](https://github.com/Heir-of-God/Project-S) project for detailed explanations and code for different problems (not only Leetcode). Happy coding and learning!\uD83D\uDCDA

### Please consider *upvote*\u2B06\uFE0F\u2B06\uFE0F\u2B06\uFE0F because I try really hard not just to put here my code and rewrite testcase to show that it works but explain you WHY it works and HOW. Thank you\u2764\uFE0F

## If you have any doubts or questions feel free to ask them in comments. I will be glad to help you with understanding\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F

![There is image for upvote](./images/0.png)

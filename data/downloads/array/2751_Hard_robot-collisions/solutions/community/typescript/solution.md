# Solution using stack and sorting

**Author:** mahandor
**Votes:** 1
**Link:** [https://leetcode.com/problems/robot-collisions/solutions/5471815/](https://leetcode.com/problems/robot-collisions/solutions/5471815/)

---

# Code
```
function survivedRobotsHealths(positions: number[], healths: number[], directions: string): number[] {
    enum Direction {
        Right,
        Left
    }
    interface Robot {
        position: number,
        health: number,
        direction: Direction,
        inputPosition: number,
    }

    let robots: Robot[] = [];
    for (let i in positions) {
        robots.push({
            position: positions[i],
            health: healths[i],
            direction: directions[i] === 'R' ? Direction.Right : Direction.Left,
            inputPosition: +i
        });
    }
    robots.sort((r1, r2) => r1.position - r2.position)
    
    let stack: Robot[] = [];
    let [idx, top] = [0, -1];
    while (idx < robots.length) {
        let currentRobot = robots[idx];
        top = stack.length - 1;
        if (stack.length > 0 &&
            currentRobot.direction == Direction.Left &&
            stack[top].direction == Direction.Right) { // collision
            if (currentRobot.health > stack[top].health) {
                stack.pop();
                --currentRobot.health;
            }
            else if (currentRobot.health == stack[top].health) {
                stack.pop();
                ++idx;
            }
            else {
                --stack[top].health;
                ++idx;
            }
        }
        else {
            stack.push(currentRobot);
            ++idx;
        }
    }
    stack.sort((r1 ,r2) => r1.inputPosition - r2.inputPosition);
    return robots.length > 0 ? stack.map(r => r.health) : [];
};
```
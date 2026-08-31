# O(1) Javascript/Typescript Solution

**Author:** wentland
**Votes:** 0
**Link:** [https://leetcode.com/problems/walking-robot-simulation-ii/solutions/4049544/](https://leetcode.com/problems/walking-robot-simulation-ii/solutions/4049544/)

---

# Complexity
- Time complexity: $$O(1)$$ 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$ 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Robot {
  private moved = false;
  private position = 0;

  constructor(private width: number, private height: number) {}

  step(num: number): void {
    this.moved = true;
    this.position += num;
    this.position %= this.width * 2 + this.height * 2 - 4;
  }

  getPos(): number[] {
    const { position, width, height } = this;
    if (position < width) return [position, 0];
    if (position < width + height - 1) return [width - 1, position - width + 1];
    if (position < width * 2 + height - 2)
      return [width * 2 + height - 3 - position, height - 1];
    return [0, width * 2 + height * 2 - 4 - position];
  }

  getDir(): string {
    const { moved, position, width, height } = this;
    if (!moved) return "East";
    if (position === 0) return "South";
    if (position < width) return "East";
    if (position < width + height - 1) return "North";
    if (position < width * 2 + height - 2) return "West";
    return "South";
  }
}

```
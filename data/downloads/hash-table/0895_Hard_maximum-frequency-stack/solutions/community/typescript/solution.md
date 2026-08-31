# 100% Typscript Solution, inverse counting + stack

**Author:** esla-ahme
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-frequency-stack/solutions/5800147/](https://leetcode.com/problems/maximum-frequency-stack/solutions/5800147/)

---

# Intuition
The problem requires creating a stack that supports frequent element retrieval and removal based on the highest frequency. The idea is to maintain a frequency count of elements and manage multiple stacks where each stack corresponds to a frequency. This way, elements with the highest frequency are always on the top of the stack.

# Approach
1. **Data Structures**:
   - **`stk`**: An array of stacks, where each stack at index `i` contains elements with frequency `i`. The `stk` array is initialized with an empty stack.
   - **`countingMap`**: A dictionary that maps each element to its frequency count.

2. **Push Operation**:
   - Increment the frequency count of the given element in `countingMap`.
   - Check if a stack for the new frequency exists in `stk`. If not, create a new stack.
   - Push the element onto the corresponding stack.

3. **Pop Operation**:
   - Retrieve and remove the top element from the stack with the highest frequency.
   - Decrement its frequency count in `countingMap`.
   - If the stack becomes empty after popping, remove it from `stk`.

# Complexity
- **Time complexity**:
  - **Push**: $$O(1)$$ on average because both operations (updating `countingMap` and pushing onto `stk`) are constant time operations.
  - **Pop**: $$O(1)$$ on average because popping from the stack and updating `countingMap` are constant time operations.

- **Space complexity**:
  - **Push**: $$O(n)$$ where `n` is the number of elements in the stack, as `countingMap` and `stk` grow with the number of elements.
  - **Pop**: $$O(1)$$, as no additional space is used beyond what is required for the current operation.

# Code
```typescript
class FreqStack {
    private stk: number[][];
    private countingMap: { [key: number]: number };

    constructor() {
        this.stk = [[]];
        this.countingMap = {};
    }

    push(val: number): void {
        this.countingMap[val] = (this.countingMap[val] || 0) + 1;
        const count = this.countingMap[val];
        if (count === this.stk.length) {
            this.stk.push([val]);
        } else {
            this.stk[count].push(val);
        }
    }

    pop(): number {
        const res = this.stk[this.stk.length - 1].pop()!;
        this.countingMap[res] = this.countingMap[res] - 1;
        if (this.stk[this.stk.length - 1].length === 0) {
            this.stk.pop();
        }
        return res;
    }
}

```

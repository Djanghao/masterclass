# Javascript/Typescript Solution

**Author:** wentland
**Votes:** 0
**Link:** [https://leetcode.com/problems/fancy-sequence/solutions/4135471/](https://leetcode.com/problems/fancy-sequence/solutions/4135471/)

---

# Approach
Keep an array of `sequence`, which holds the value at each index and the starting point for doing operations from the `operations` array (`sequence[i]` is `[val, opIndex]`). Also keep an array of all the operations in `operations` (`operations[i] is [opType, opVal]`). We also keep track of a variable called `appended`, basically this allows us to combine multiple of the same type of operation in a row as long as no new element has been appended and we have not run a `getIndex` since the last operation. Whenever we run `getIndex` on some index, we update its value to be the result of the `getIndex` call and we update its starting operation index to be the length of the `operations` array, this way we are only ever running each operation 1 time for each index. 

Also note that since we are combining multiple `"multiply"` calls together, it is possible for us to exceed the `MAX_SAFE_INTEGER` for javascript (basically numbers over this value are not exact and are more like approximations). To counteract this, if we ever are about to go over the `MAX_SAFE_INTEGER` we do our mutiplication using `bigint` and mod the result, and then convert back to `number`.

# Complexity
- Time complexity:
  - $$O(n)$$ for `getIndex`
  - $$O(1)$$ for all other calls
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript
const MOD = 10 ** 9 + 7;

class Fancy {
  private sequence: Array<[number, number]> = [];
  private operations: Array<["multiply" | "add", number]> = [];
  private appended = false;

  constructor() {}

  public append(val: number): void {
    this.appended = true;
    this.sequence.push([val, this.operations.length]);
  }

  private handleOp(op: "multiply" | "add", val: number) {
    if (!this.appended) {
      const lastOp = this.operations[this.operations.length - 1];
      if (lastOp?.[0] === op) {
        if (op === "add") lastOp[1] += val;
        else lastOp[1] *= val;
        lastOp[1] %= MOD;
        return;
      }
    }
    this.operations.push([op, val]);
    this.appended = false;
  }

  public addAll(inc: number): void {
    this.handleOp("add", inc);
  }

  public multAll(m: number): void {
    this.handleOp("multiply", m);
  }

  public getIndex(idx: number): number {
    const item = this.sequence[idx];
    if (!item) return -1;
    this.appended = true;
    let num = item[0];
    for (let i = item[1]; i < this.operations.length; i++) {
      const [op, val] = this.operations[i];
      if (op === "add") num += val;
      else if (num * val > Number.MAX_SAFE_INTEGER) {
        num = Number((BigInt(num) * BigInt(val)) % BigInt(MOD));
      } else num *= val;
      num %= MOD;
    }
    item[0] = num;
    item[1] = this.operations.length;
    return num;
  }
}

```
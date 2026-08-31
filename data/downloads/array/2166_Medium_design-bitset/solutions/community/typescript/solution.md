# TypeScript easy and fast - O(1)

**Author:** dostapenko
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-bitset/solutions/1832022/](https://leetcode.com/problems/design-bitset/solutions/1832022/)

---

```
class Bitset {
  private size = 0;
  private bits: number[] = [];
  private bitsFlipped: number[] = [];
  private counts = {
    zeroes: 0,
    ones: 0,
  };

  constructor(size: number) {
    this.bits = new Array(size).fill(0);
    this.bitsFlipped = new Array(size).fill(1);
    this.size = size;
    this.counts.zeroes = size;
  }

  public fix(idx: number): void {
    if (idx > this.size - 1) {
      return;
    }

    if (this.bits[idx] === 0) {
      this.counts.zeroes--;
      this.counts.ones++;
      this.bits[idx] = 1;

      this.bitsFlipped[idx] = 0;
    }
  }

  public unfix(idx: number): void {
    if (idx > this.size - 1) {
      return;
    }

    if (this.bits[idx] === 1) {
      this.counts.zeroes++;
      this.counts.ones--;
      this.bits[idx] = 0;

      this.bitsFlipped[idx] = 1;
    }
  }

  public flip(): void {
    [this.counts.ones, this.counts.zeroes] = [this.counts.zeroes, this.counts.ones];
    [this.bits, this.bitsFlipped] = [this.bitsFlipped, this.bits];
  }

  public all(): boolean {
    return this.counts.ones === this.size;
  }

  public one(): boolean {
    return this.counts.ones >= 1;
  }

  public count(): number {
    return this.counts.ones;
  }

  public toString(): string {
    return this.bits.join("");
  }
}
```
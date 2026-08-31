# Typescript DSU + prime factor calcs + max group (Runtime beats 100%)

**Author:** alexgavrilov
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-component-size-by-common-factor/solutions/3878705/](https://leetcode.com/problems/largest-component-size-by-common-factor/solutions/3878705/)

---

# Complexity
- Time complexity:
O(N * (logM^2 + sqrt(M)))

- Space complexity:
O(M+N)

# Code
```
class DSU {
    rank: number[];
    root: number[];

    constructor (size: number) {
        this.rank = new Array(size).fill(1);
        this.root = new Array(size).fill(0).map((_, i) => i);
    }

    find(x: number): number {
        if (x === this.root[x]) {
            return x;
        }
        this.root[x] = this.find(this.root[x]);
        return this.root[x];
    }

    union(x: number, y: number): void {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX !== rootY) {
            if (this.rank[rootX] > this.rank[rootY]) {
                this.root[rootY] = rootX;
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.root[rootX] = rootY;
            } else {
                this.rank[rootX] += 1;
                this.root[rootY] = rootX;
            }
        }
    }

    connected(x: number, y: number): boolean {
        return this.find(x) == this.find(y);
    }
}


function largestComponentSize(nums: number[]): number {
    const dsu: DSU = new DSU(Math.max(...nums));

    // sieve algo
    const primeDecompose = (num: number): number[] => {
        let factor: number = 2;
        const primeFactors = new Set<number>();
        while (num >= factor * factor) {
            if (num % factor === 0) {
                primeFactors.add(factor);
                num /= factor;
            } else {
                factor++;
            }
        }
        primeFactors.add(num);

        return [...primeFactors];
    }

    const numFactorMap: { [key: number]: number } = {};
    for (const num of nums) {
      const primeFactors = primeDecompose(num);
      numFactorMap[num] = primeFactors[0];

      for (let i = 0; i < primeFactors.length - 1; i++) {
        dsu.union(primeFactors[i], primeFactors[i + 1]);
      }
    }

    let maxSize: number = 0;
    const groupCount: { [key: number]: number } = {};

    for (const num of nums) {
      const groupId = dsu.find(numFactorMap[num]);
      groupCount[groupId] = (groupCount[groupId] || 0) + 1;
      maxSize = Math.max(maxSize, groupCount[groupId]);
    }

    return maxSize;
};
```
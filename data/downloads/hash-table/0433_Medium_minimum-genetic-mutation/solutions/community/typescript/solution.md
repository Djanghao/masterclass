# TypeScript faster than 100% of existing solutions

**Author:** dostapenko
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-genetic-mutation/solutions/1831896/](https://leetcode.com/problems/minimum-genetic-mutation/solutions/1831896/)

---

```
type AdjacencyListString = { [key: string]: string[] };

function minMutation(start: string, end: string, bank: string[]): number {
  const isNextMutation = (currentMutation: string, mutation: string): boolean => {
    let mismatches = 0;
    for (let i = 0; i < currentMutation.length; i++) {
      if (currentMutation.charAt(i) !== mutation.charAt(i)) {
        mismatches++;
      }
    }

    return mismatches === 1;
  };

  const adjacencyList: AdjacencyListString = {
    [start]: bank.filter((m) => isNextMutation(start, m)),
  };

  for (const mutation of bank) {
    adjacencyList[mutation] = bank.filter((m) => isNextMutation(mutation, m));
  }

  let minSteps = Number.MAX_SAFE_INTEGER;
  const seen = new Set<string>();
  const queue: [string, number][] = [[start, 0]];
  while (queue.length > 0) {
    const [mutation, steps] = queue.shift()!;

    if (mutation === end) {
      minSteps = Math.min(minSteps, steps);
    }

    const nextMutations = adjacencyList[mutation];
    for (const m of nextMutations) {
      if (!seen.has(m)) {
        seen.add(m);

        queue.push([m, steps + 1]);
      }
    }
  }

  return minSteps === Number.MAX_SAFE_INTEGER ? -1 : minSteps;
};
```
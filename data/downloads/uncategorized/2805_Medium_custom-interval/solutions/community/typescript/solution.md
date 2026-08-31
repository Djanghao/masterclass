# Typescript using setTimeout and generator for id

**Author:** JOlivier92
**Votes:** 0
**Link:** [https://leetcode.com/problems/custom-interval/solutions/4569258/](https://leetcode.com/problems/custom-interval/solutions/4569258/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
using a generator jsut for fun to generate the IDs.
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```

const idMap = {}

function* infiniteGenerator() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const generateId = infiniteGenerator()


function customInterval(fn: Function, delay: number, period: number): number {
    let count = 0
    const id = generateId.next().value as number
    function createCustomInterval() {
        const interval = setTimeout(() => {
            fn()
            createCustomInterval()
        }, delay + period*count)
        idMap[id] = interval
        count++
    }

    createCustomInterval()
    return id
}

function customClearInterval(id: number): void {
    clearInterval(idMap[id])
}
```
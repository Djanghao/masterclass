# Simple TypeScript Solution with Explanation

**Author:** mikezzb
**Votes:** 1
**Link:** [https://leetcode.com/problems/parallel-execution-of-promises-for-individual-results-retrieval/solutions/3840189/](https://leetcode.com/problems/parallel-execution-of-promises-for-individual-results-retrieval/solutions/3840189/)

---

# Promise.allSettled
<!-- Describe your first thoughts on how to solve this problem. -->
Unlike `Promise.all`, `Promise.allSettled` will NOT reject as a whole if any promise rejects. Instead, it returns results with status and value / error message.


# Code
```
type FulfilledObj = {
  status: "fulfilled";
  value: string;
};
type RejectedObj = {
  status: "rejected";
  reason: string;
};
type Obj = FulfilledObj | RejectedObj;

function promiseAllSettled(functions: Function[]): Promise<Obj[]> {
  const results: Obj[] = [];
  let finCount = 0;
  return new Promise((resolve) => {
    functions.forEach((fn, i) => {
      Promise.resolve(fn())
        .then((res) => {
          results[i] = {
            status: "fulfilled",
            value: res,
          };
        })
        .catch((err) => {
          results[i] = {
            status: "rejected",
            reason: err,
          };
        })
        .finally(() => {
          finCount++;
          if (finCount === functions.length) {
            resolve(results);
          }
        });
    });
  });
}
```
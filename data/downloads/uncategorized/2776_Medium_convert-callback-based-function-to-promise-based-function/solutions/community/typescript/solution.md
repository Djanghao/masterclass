# Time: O(1) | Space: O(1)

**Author:** rojas
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-callback-based-function-to-promise-based-function/solutions/5502894/](https://leetcode.com/problems/convert-callback-based-function-to-promise-based-function/solutions/5502894/)

---

# Complexity
- Time complexity: $O(1)$

- Space complexity: $O(1)$

# Code
```typescript
type CallbackFn = (
    next: (data: number, error: string) => void, 
    ...args: number[]
) => void

type Promisified = (...args: number[]) => Promise<number>

function promisify(fn: CallbackFn): Promisified {
    return function (...args): Promise<number> {
        return new Promise((resolve, reject): void => {
            fn.call(undefined, (data, err) => { 
                (err) ? reject(err) : resolve(data); 
            }, ...args);
        });
    };
};

/**
 * const asyncFunc = promisify(callback => callback(42));
 * asyncFunc().then(console.log); // 42
 */
```
# TypeScript | Cache current value and mark as consumed + comments

**Author:** jkalmeij
**Votes:** 3
**Link:** [https://leetcode.com/problems/peeking-iterator/solutions/1980734/](https://leetcode.com/problems/peeking-iterator/solutions/1980734/)

---

```typescript
/*

Here is the idea:

Lazily(!) cache the current value and keep track of whether we already consumed it.
We will use a consumed current with the value of undefined initially.

When we peek:
- If the current value is already consumed then we retrieve a new unconsumed one.
- Otherwise, the current value.

When we next:
- If the current value is already consumed then we retrieve a new unconsumed one.
- And we always consume the current value.

When we check for has next:
- If the current value is not yet consumed, then we have a next for sure (namely, the current value).
- Otherwise, it depends on the wrapping iterator if we have a next.

*/

class PeekingIterator {
    iterator: Iterator
    current: {value: number, consumed: boolean}
    
    constructor(iterator: Iterator) {
        this.iterator = iterator
        
        // this.nextOrPreconsumed would also work, but doesn't fit with the laziness of iterators,
        // since we will produce a next element before we strictly need it.
        this.current = {value: undefined, consumed: true}
    }

    peek(): number {
        if (this.current.consumed) {
            this.current = this.nextOrPreconsumed()
        }
        
        // The contract doesn't specify what should happen if 
        // this.current.consumed == true
        // We just return undefined for now.
        
        return this.current.value
    }

    next(): number {
        if (this.current.consumed) {
            this.current = this.nextOrPreconsumed()
        }
        
        // The contract doesn't specify what should happen if 
        // this.current.consumed == true
        // We just ignore it for now.
        
        this.current.consumed = true
        return this.current.value
    }

    hasNext(): boolean {
        if (this.current.consumed) {
            return this.iterator.hasNext()
        }
        return !this.current.consumed
    }

    private nextOrPreconsumed(): {value: number, consumed: boolean} {
        if (this.iterator.hasNext()) {
            return {value: this.iterator.next(), consumed: false}
        }
        
        // This will happen when you peek an empty iterator.
        // I'm not sure what we should do in that case.
        // With this implementation we return undefined.
        // We can't return consumed = false, because then hasNext will be incorrect.
        // But we also can't assert in peek that the current value was not consumed.
        // Which is a bit ugly.
        return {value: undefined, consumed: true}
    }
}
```
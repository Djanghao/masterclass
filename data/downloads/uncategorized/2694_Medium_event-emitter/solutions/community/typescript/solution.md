# O(1) - subscribe/unsubscribe, O(n) - emit

**Author:** evgeny_ndv
**Votes:** 4
**Link:** [https://leetcode.com/problems/event-emitter/solutions/3539868/](https://leetcode.com/problems/event-emitter/solutions/3539868/)

---

# Complexity
- Time complexity:
subscribe(): $$O(1)$$
unsubscribe(): $$O(1)$$
emit(): $$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {
  private _subs: Record<string, Set<Callback>> = {};

  subscribe(eventName: string, callback: Callback): Subscription {
    let set = this._subs[eventName];
    if (!set) {
      this._subs[eventName] = set = new Set();
    }

    set.add(callback);

    return {
      unsubscribe: () => {
          set.delete(callback);
      }
    };
  }

  emit(eventName: string, args: any[] = []): any {
    const result: any[] = [];
    
    const set = this._subs[eventName];
    if (set) {
        set.forEach((fn) => {
            result.push(fn(...args));
        });
    }

    return result;
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
```
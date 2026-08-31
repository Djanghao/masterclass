# [TypeScript] TTLValue interface + Map<number, TTLValue>

**Author:** dtheriault
**Votes:** 31
**Link:** [https://leetcode.com/problems/cache-with-time-limit/solutions/3407588/](https://leetcode.com/problems/cache-with-time-limit/solutions/3407588/)

---

```typescript []
interface TTLValue {
    value: number;
    timer: ReturnType<typeof setTimeout>;
}

class TimeLimitedCache {
    cache = new Map<number, TTLValue>()

    set(key: number, value: number, duration: number): boolean {
        const exists = this.cache.has(key)
        if (exists) clearTimeout(this.cache.get(key).timer)
        this.cache.set(key, {value, timer: setTimeout(() => this.cache.delete(key), duration)})
        return exists
    }

    get(key: number): number {
        return this.cache.has(key) ? this.cache.get(key).value : -1
    }

	count(): number {
        return this.cache.size
    }
}


```
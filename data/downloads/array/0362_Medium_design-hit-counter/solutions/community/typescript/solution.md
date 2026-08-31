# Super simple Map-based solution

**Author:** stevescola
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-hit-counter/solutions/4006505/](https://leetcode.com/problems/design-hit-counter/solutions/4006505/)

---

# Intuition
Save the number of hits at each timestamp when **hit()** is called. Then, when **getHits()** is called, just go back in time and sum up all the hits at each timestamp found.

# Code
```
class HitCounter {
    readonly #hitCounterMap: Map<number, number>;
    
    constructor() {
        this.#hitCounterMap = new Map()
    }

    hit(timestamp: number): void {
        if(this.#hitCounterMap.has(timestamp)){
            const currentHits: number = this.#hitCounterMap.get(timestamp)
            this.#hitCounterMap.set(timestamp, currentHits+1)
        }else{
            this.#hitCounterMap.set(timestamp, 1)
        }
    }

    getHits(timestamp: number): number {
        const fiveMinutesAgoTimestamp: number = timestamp-300;
        let numberOfHits: number = 0;
        for(let t = timestamp; t > fiveMinutesAgoTimestamp; t--){
            if(this.#hitCounterMap.has(t)){
                numberOfHits += this.#hitCounterMap.get(t)
            }
        }
        return numberOfHits
    }
}

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
```
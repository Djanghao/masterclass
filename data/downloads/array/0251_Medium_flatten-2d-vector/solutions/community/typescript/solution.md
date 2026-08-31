# this is simple recursion || optimize js sol using pop instead of shift why ? see in explaination

**Author:** omrocks
**Votes:** 0
**Link:** [https://leetcode.com/problems/flatten-2d-vector/solutions/5279161/](https://leetcode.com/problems/flatten-2d-vector/solutions/5279161/)

---

shift operation takes O(n) time complexity
whereas pop only takes O(1) time complexity so always prefer pop over shift

# Code
```
class Vector2D {
    private res: number[];
    constructor(vec: number[][]) {

        this.res = this.recursive(vec).reverse();
    }

    recursive(a: any) {
        let result = [];
        for(let i = 0; i < a.length; i++) {
            if(Array.isArray(a[i])) {
                result.push(...this.recursive(a[i]));
            } else {
                result.push(a[i]);
            }
        }
        return result;
    }

    next(): number {
        return this.res.pop();
    }

    hasNext(): boolean {
        if(this.res.length) {
            return true;
        }
        return false;
    }
}

/**
 * Your Vector2D object will be instantiated and called as such:
 * var obj = new Vector2D(vec)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
```
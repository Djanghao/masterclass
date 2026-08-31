# Easy Typescript solution

**Author:** BuzzLightyearAldrin
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-an-ordered-stream/solutions/1976047/](https://leetcode.com/problems/design-an-ordered-stream/solutions/1976047/)

---

```
class OrderedStream {
    stream: string[]
    index: number;
    constructor(n: number) {
        this.stream = []
        this.index = 0;
    }

    insert(idKey: number, value: string): string[] {
        this.stream[idKey-1] = value;
        
        if(this.index === idKey-1) {
            while(this.stream[this.index]) {
                this.index++;
            }
        }
        return this.stream.slice(idKey-1,this.index);
    }
}
```
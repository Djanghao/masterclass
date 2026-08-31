# TS/JS solution | Beats 100.00%

**Author:** brudnovskyi
**Votes:** 1
**Link:** [https://leetcode.com/problems/iterator-for-combination/solutions/5235763/](https://leetcode.com/problems/iterator-for-combination/solutions/5235763/)

---

![image.png](./images/0.png)

```
class CombinationIterator {
  result: string[];
  counter: number;

  constructor(characters: string, combinationLength: number) {
    this.result = [];
    this.counter = 0;

    const helper = (cur: string, characters: string) => {
      if (cur.length >= combinationLength) {
        this.result.push(cur);
        return;
      }

      for (let i = 0; i < characters.length; i++) {
        helper(cur + characters[i], characters.slice(i + 1));
      }
    }

    helper("", characters)
  }

  next(): string {
    this.counter++;
    return this.result[this.counter - 1];
  }

  hasNext(): boolean {
    return !!this.result?.[this.counter];
  }
}
```
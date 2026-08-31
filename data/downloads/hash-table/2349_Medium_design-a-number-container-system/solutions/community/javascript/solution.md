# ✅ Javascript || Priority Queue || Detailed Explanation || Clean Code

**Author:** annietran
**Votes:** 5
**Link:** [https://leetcode.com/problems/design-a-number-container-system/solutions/2322259/](https://leetcode.com/problems/design-a-number-container-system/solutions/2322259/)

---

Let's walk through question description

Design a number container system that can do the following:

- Insert or Replace a number at the given index in the system.
*and* `void change(int index, int number)` Fills the container at index with the number. If there is already a number at that index, replace it.
**=>** We need to store `index` and `number at this index`. We can use **array** to store it. However, it would be a **waste of memory** if we use **array** here as `number` filled at random `index` in **array**. I decided to use **HashMap** here to **keep track** of number at index. (`{ index: numberAtIndex }`). Every time we called `change` function, we will set a `number` to the `index`

- Return the smallest index for the given number in the system.
**=>** Why we have **smallest index** here ? It is because of we can fill a `number` to many `index`. So it could be like mapping `num1` to many indexes `[i1, i2, i3 ....]`. `find` function will return **smallest i** in `[i1, i2, i3 ....]`. Thinking about using **Priority Queue** is a good start. **Priority Queue** is efficient finding **smallest** or largest.
Every time we called `change` function, we will **enqueue** an `index` to the `number`


\u2757\uFE0F\u2757\uFE0F\u2757\uFE0FThere is an issue with above walk through. We can **replace** a number at a specific index. `find` function will return wrong index if we don't update the **Priority Queue**. 
If `front_number` at **front** element of the **queue** (`index`) is not the `number` we need to `find`, then the `front_number` is replaced by another `number` before. We are no longer need `front_number`. It is safe to **dequeue** it from the queue.

<br />
\u2139\uFE0F [MinPriorityQueue](https://support.leetcode.com/hc/en-us/articles/360011833974-What-are-the-environments-for-the-programming-languages-) usage can be found here at Javascript row

<br />

\u2139\uFE0F [My javascript solution collection](https://github.com/toantd90/leetcode-js-solutions)

<br />




```
class NumberContainers {
  constructor() {
    this.nums = {};
    this.numMap = {};
  }

  change(index, number) {
    this.nums[index] = number;

    if (!this.numMap[number]) {
      this.numMap[number] = new MinPriorityQueue();
    }

    this.numMap[number].enqueue(index);
  }

  find(number) {
    while (
      this.numMap[number] &&
      this.numMap[number].size() > 0 &&
      this.nums[this.numMap[number].front().element] !== number
    ) {
      this.numMap[number].dequeue();
    }

    return this.numMap[number] && this.numMap[number].size() > 0
      ? this.numMap[number].front().element
      : -1;
  }
}

```
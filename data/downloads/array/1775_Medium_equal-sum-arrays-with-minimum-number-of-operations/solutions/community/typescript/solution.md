# Beats 100%, Typescript, MaxHeap

**Author:** heiseshandian
**Votes:** 0
**Link:** [https://leetcode.com/problems/equal-sum-arrays-with-minimum-number-of-operations/solutions/4780962/](https://leetcode.com/problems/equal-sum-arrays-with-minimum-number-of-operations/solutions/4780962/)

---

### Intuition

The main idea is to balance the sums of the two arrays with the minimum number of operations. To achieve this, we try to make big changes first, which means either decreasing elements in the array with the larger sum or increasing elements in the array with the smaller sum. A priority queue (heap) is used to keep track of the potential changes in descending order, ensuring that each operation has the maximum possible impact on reducing the difference between the sums.

### Approach

1. **Pre-checks:** Check if it's possible to make the sums equal given the length constraints. If the maximum possible sum of the shorter array (by making all its elements 6) is still less than the sum of the longer array, return -1, as it's impossible to equalize the sums.
2. **Calculate Sums and Differences:** Calculate the sums of both arrays and their absolute difference.
3. **Priority Queues for Operations:** Initialize two priority queues (heaps):
   - One for elements in the array with the larger sum, to efficiently find and decrease the largest elements.
   - One for elements in the array with the smaller sum, to efficiently find and increase the smallest elements.
4. **Greedy Operations:** While the difference is not zero, perform the most effective operation (either decreasing the largest element in the bigger array or increasing the smallest element in the smaller array) to reduce the difference. Count each operation.
5. **Return the Operation Count:** Once the difference is reduced to zero, return the total number of operations performed.

### Complexity

- **Time Complexity:** O(n log n) - The main time complexity comes from inserting elements into the priority queues and extracting the maximum/minimum elements, where `n` is the length of the longer array. The `reduce` operations for calculating sums are O(n), and the while loop for performing operations depends on the number of operations required but involves heap operations that are O(log n).
- **Space Complexity:** O(n) - Additional space is used for the priority queues, where `n` is the length of the longer array.

# Code
```
function minOperations(nums1: number[], nums2: number[]): number {
    const minLen = Math.min(nums1.length, nums2.length);
    const maxLen = Math.max(nums1.length, nums2.length);
    if (maxLen > minLen * 6) {
        return -1;
    }

    const sum1 = nums1.reduce((acc, cur) => acc + cur);
    const sum2 = nums2.reduce((acc, cur) => acc + cur);
    let diff = Math.abs(sum1 - sum2);
    if (diff === 0) {
        return 0;
    }

    const bigger = sum1 > sum2 ? nums1 : nums2;
    const smaller = bigger === nums1 ? nums2 : nums1;
    const biggerHeap = new GenericHeap((a, b) => b - a);
    const smallerHeap = new GenericHeap((a, b) => b - a);

    bigger.forEach((v) => {
        if (v > 1) {
            biggerHeap.push(v - 1);
        }
    });
    smaller.forEach((v) => {
        if (v < 6) {
            smallerHeap.push(6 - v);
        }
    });

    let count = 0;
    while (diff > 0 && biggerHeap.size() > 0 && smallerHeap.size() > 0) {
        const b = biggerHeap.peek();
        const s = smallerHeap.peek();

        if (b > s) {
            diff -= b;
            biggerHeap.pop();
        } else {
            diff -= s;
            smallerHeap.pop();
        }
        count++;
    }

    while (diff > 0 && biggerHeap.size() > 0) {
        diff -= biggerHeap.pop();
        count++;
    }
    while (diff > 0 && smallerHeap.size() > 0) {
        diff -= smallerHeap.pop();
        count++;
    }

    return count;
}

type Comparator<T = number> = (a: T, b: T) => number;

class GenericHeap<T = number> {
    container: Array<T> = [];

    /* \u5173\u4E8E\u6BD4\u8F83\u5668\u7684\u7EA6\u5B9A
    1. \u5982\u679C\u8FD4\u56DE\u503C\u5C0F\u4E8E0 \u5219\u6392\u5728\u524D\u9762
    2. \u5982\u679C\u7B49\u4E8E0\u8868\u793A\u4E24\u8005\u76F8\u7B49
    3. \u5982\u679C\u5927\u4E8E0\u5219\u6392\u5728\u540E\u9762 */
    comparator: Comparator<T>;

    constructor(comparator:Comparator<T>) {
        this.comparator = comparator;
    }

    public initHeap(arr: T[]) {
        // \u6B64\u5904\u7528slice\u662F\u4E3A\u4E86\u907F\u514D\u5806\u8C03\u6574\u65F6\u5F71\u54CD\u5230arr
        this.container = arr.slice();

        for (let i = this.container.length - 1; i >= 0; i--) {
            this.#heapify(i);
        }
    }

    public size() {
        return this.container.length;
    }

    public isEmpty() {
        return this.container.length === 0;
    }

    public push(val: T) {
        this.container.push(val);

        this.#insertHeap(this.container.length - 1);
    }

    public pop() {
        const result = this.container[0];
        this.#swap(0, this.container.length - 1);
        this.container.length--;
        this.#heapify(0);

        return result;
    }

    public peek() {
        return this.container[0];
    }

    #insertHeap(i: number) {
        while (i) {
            let parent = (i - 1) >> 1;
            if (this.comparator(this.container[i], this.container[parent]) >= 0) {
                break;
            }

            this.#swap(i, parent);
            i = parent;
        }
    }

    #heapify(i: number) {
        let left = 2 * i + 1;
        while (left < this.container.length) {
            const right = left + 1;
            let minimumIndex =
                right < this.container.length && this.comparator(this.container[right], this.container[left]) < 0
                    ? right
                    : left;
            minimumIndex = this.comparator(this.container[minimumIndex], this.container[i]) < 0 ? minimumIndex : i;

            if (minimumIndex === i) {
                break;
            }

            this.#swap(i, minimumIndex);
            i = minimumIndex;
            left = 2 * i + 1;
        }
    }

    #swap(i: number, j: number) {
        swap(this.container, i, j);
    }
}

function swap(arr: any[], a: number, b: number) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

```
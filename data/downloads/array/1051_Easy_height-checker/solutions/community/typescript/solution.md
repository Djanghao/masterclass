# Counting sort

**Author:** n1md7
**Votes:** 1
**Link:** [https://leetcode.com/problems/height-checker/solutions/3172251/](https://leetcode.com/problems/height-checker/solutions/3172251/)

---

# Intuition
Sort it and compare to original list

# Approach
Instead of built-in sort algorithm which has the best time complexity of **O(nlogn)** we can try Counting sort which pretty much depends on the range of the number we are sorting. Since, the range is quite short [1, 100] this method will be faster.

# Complexity
- Time complexity: $$O(max(n, 100))$$ - **n** is size of heights 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function heightChecker(heights: number[]): number {
  const sorted = countingSort(heights);
  const count = new Count();

  for(const [idx, height] of heights.entries()) {
    if(height !== sorted[idx]) count.increment();
  }

  return count.value();
}

function countingSort(heights: number[]){
  const sorted: number[] = [];
  const counted: Map<number, number> = new Map();
  for(const height of heights) {
    const val = counted.get(height) || 0;
    counted.set(height, val + 1);
  }

  for(let height = 1; height <= 100; height++) {
    let count = counted.get(height);
    if(count) {
      while(--count >= 0) sorted.push(height);
    }
  }

  return sorted;
}

function Count(defaultValue = 0){
  const counted = {
    value: defaultValue
  };

  this.increment = () => {
    counted.value ++;
  }

  this.value = () => {
    return counted.value;
  }
}
```
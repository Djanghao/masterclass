# [TS] solution

**Author:** n1md7
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/solutions/3015939/](https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/solutions/3015939/)

---


# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class DataStream {
  private readonly k: number;
  private readonly value: number;
  private eq: number;

  constructor(value: number, k: number) {
    this.k = k;
    this.value = value;
    this.eq = 0;
  }

  consec(num: number): boolean {
    if(num === this.value) this.eq ++;
    else this.eq = 0;
    
    return this.eq >= this.k;
  }
}
```
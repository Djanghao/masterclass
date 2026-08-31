# Javascript and Go easy solution

**Author:** Azizjon003
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-with-minimum-sum/solutions/3460348/](https://leetcode.com/problems/split-with-minimum-sum/solutions/3460348/)

---


# Complexity
- Time complexity:54%
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:55%
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

### Javascript
```
function splitNum(num) {
  let numbers = new Array(10).fill(0);
  while (num > 0) {
    numbers[num % 10]++;
    num = Math.floor(num / 10);
  }
  let n1 = 0, n2 = 0;
  let odd = true;
  for (let i = 0; i < 10; i++) {
    while (numbers[i] > 0) {
      if (odd) {
        n1 = n1 * 10 + i;
      } else {
        n2 = n2 * 10 + i;
      }
      numbers[i]--;
      odd = !odd;
    }
  }
  return n1 + n2;
}

```
### Go(lang)

```
func splitNum(num int) int {
    numbers := make([]int, 10)
    for num > 0 {
        numbers[num % 10]++
        num /= 10
    }
    n1, n2 := 0, 0
    odd := true
    for i := 0; i < 10; i++ {
        for numbers[i] > 0 {
            if odd {
                n1 = n1 * 10 + i
            } else {
                n2 = n2 * 10 + i
            }
            numbers[i]--
            odd = !odd
        }
    }
    return n1 + n2
}
```
# backtracking TS  solution

**Author:** MishaKonki
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-punishment-number-of-an-integer/solutions/5216519/](https://leetcode.com/problems/find-the-punishment-number-of-an-integer/solutions/5216519/)

---



# Code
```
  function punishmentNumber(n: number, start = 0): number {
      let count = 0;
   
      for (let i = start; i <= n; i++) {
        let nums: string[] = String(i * i).split("");
  
        let pairs: number[][] = [];
  
        let backtracking = (currNums: string[], start: number) => {
          if (start === nums.length) {
            pairs.push(currNums.map((el) => Number(el)));
            return;
          }
  
          currNums.push(nums[start]);
          backtracking(currNums, start + 1);
          currNums.pop();
  
          if (start !== 0) {
            currNums[currNums.length - 1] += nums[start];
            backtracking(currNums, start + 1);
          }
        };
  
        backtracking([], 0);
        if (
          pairs.some(
            (elArr) => elArr.reduce((acc, currValue) => acc + currValue, 0) == i
          )
        ) {
          count += i * i;
        }
      }
  
      return count;
    }
```
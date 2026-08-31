# Has both correct and wrong(gcd) solution and their comparison!

**Author:** ToxicalNoob3062
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-length-of-anagram-concatenation/solutions/5116998/](https://leetcode.com/problems/minimum-length-of-anagram-concatenation/solutions/5116998/)

---

# Intuition
as s is concated string of t can be a chunk of len = factors of n where n is the length of s!

# Approach
so go from 1 to n and if n%len==0 that means it is a factor! so check if you split the s into len equal parts and sort each of the word on basis of it's character then all the parts should have same string!

# Complexity
- Time complexity:
O((n^2)*log(n))

- Space complexity:
O(1)

# Code
Right solution as it considers all edge cases!
```
function isOk(s: string, len: number): boolean {
  let n = s.length;
  let word = s.substring(0, len).split("").sort().join("");
  for (let i = len; i <= n - len; i += len) {
    let part = s
      .substring(i, i + len)
      .split("")
      .sort()
      .join("");
    if (part != word) return false;
  }
  return true;
}
function minAnagramLength(s: string): number {
  //get the word length
  let n = s.length;
  //not go from 1 to n;
  for (let len = 1; len <= n; len++) {
    //check if the length is a factor of n
    if (n % len == 0 && isOk(s, len)) {
      return len;
    }
  }
  return n;
}
```

This solution is wrong because we can concat the string of t but we can not change or rearrange s after concatination because we are changing the t at that time!
```
function minAnagramLength(s: string): number {
  //get the freq of the char in string
  let freq: Record<string, number> = {};
  for (let char of s) {
    freq[char] = freq[char] == undefined ? 1 : freq[char] + 1;
  }

  // Function to calculate the GCD of two numbers
  const gcd = (a: number, b: number): number => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };

  //get the value array of the freq
  let values = Object.values(freq);

  // Calculate the GCD of the frequency values
  let commonDivisor = values.reduce(gcd);

  // Reduce the frequency values by dividing them by the GCD
  let reducedValues = values.map((value) => value / commonDivisor);

  //return the summation of the value array
  return reducedValues.reduce((acc, curr) => acc + curr, 0);
}

```
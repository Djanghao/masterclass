# C++, C#, Javascript simple, a few lines

**Author:** leonenko
**Votes:** 2
**Link:** [https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/solutions/312422/](https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/solutions/312422/)

---

C++
```
int sumOfDigits(vector<int>& A) {
    int min = *min_element(A.begin(), A.end());
    int sum = 0;
    do sum += min % 10;
    while (min /= 10);
    return 1 - sum & 1;
}
```

C#

```
public int SumOfDigits(int[] A) {
    var min = A.Min(); var sum = 0;
    do sum += min % 10;
    while ((min /= 10) != 0);
    return 1 - sum & 1;
}
```

Javascript
```
var sumOfDigits = function(A) {
    let min = Math.min(...A);
    let sum = 0;
    do sum += min % 10;
    while (Math.trunc(min /= 10));
    return 1 - sum & 1;
};
```
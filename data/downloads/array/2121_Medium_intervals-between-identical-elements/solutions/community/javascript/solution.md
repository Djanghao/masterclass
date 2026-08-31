# JavaScript O(N) 432ms

**Author:** alex-v
**Votes:** 10
**Link:** [https://leetcode.com/problems/intervals-between-identical-elements/solutions/2060775/](https://leetcode.com/problems/intervals-between-identical-elements/solutions/2060775/)

---

*(this is my first ever post here, hope it helps someone, comments/suggestions are welcome)*

In order to calculate the sum of intervals for each element of an array, we need to know indexes of all the duplicates of a particular element. 

The very first brute force solution that comes to mind is to run through the array and find duplicates for each element and do the math with indexes. This would give us a solution with `O(N^2)` runtime (which of course times out):

```
var getDistances = function(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                sum += Math.abs(i - j);
            }
        }
        result[i] = sum;
    }
    return result;
};
```

Can we do better? Yes we can! 

Let\u2019s take a look at what exactly is the sum of intervals for a particular element by looking at an example which intentionally has a lot of duplicates: 

```
[2,3,3,2,3,3,3,3]
```

Let\u2019s take the 5th element of the array which is 3. It has 3 duplicate elements before (*arr[1]*, *arr[2]* and *arr[4]*) and 2 duplicate elements after (*arr[6]* and *arr[7]*). For the 5th element the sum of intervals will be:

```
(5 - 1) + (5 - 2) + (5 - 4) + (6 - 5) + (7 - 5) = 11
```
or
```
(index5 - index1) + (index5 - index2) + (index5 - index4) + (index6 - index5) + (index7 - index5) 
```

or
```
(index5 * 3 - sum(index1, index2, index4)) + (sum(index6, index7) - index5 * 2)
```

In the formula above, **3** is the amount of duplicates encountered before the Kth element, and **2** is the amount of duplicates encountered after. It means that we don\u2019t really need to know all the indexes when calculating the sum for the Kth element. What we need to know is the **sum of indexes** of duplicates encountered before the Kth element and **their count**, and the **sum of indexes** of elements after the Kth element and **their count**:

How can we achieve this?

One of the ways to do this is to use a map to store unique elements, their counts and sums of indexes. We'll need to run through the array 2 times: one forwards and one backwards. On the first run, for every unique element in the array, we store its count and the sum of indexes of its duplicates encountered before it. On the second run we do the same, but for elements encountered after it. If we look at the formula above again:

```
(index5 * 3 - sum(index1, index2, index4)) + (sum(index6, index7) - index5 * 2)
```

The first run will calculate the first part of it: `(index5 * 3 - sum(index1, index2, index4))`. The second one will calculate the secound part of it: `(sum(index6, index7) - index5 * 2)`.

Here's the final solution:

```
var getDistances = function(arr) {
    const map = new Map();
    const result = new Array(arr.length).fill(0);

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        const val = map.get(num) || {
            count: 0,
            sum: 0
        };
        result[i] += (val.count * i) - val.sum;
        val.sum += i;
        val.count++;
        map.set(num, val);
    }
    map.clear();

    for (let i = arr.length - 1; i >= 0; i--) {
        const num = arr[i];
        const val = map.get(num) || {
            count: 0,
            sum: 0
        };
        result[i] += val.sum - (val.count * i);
        val.sum += i;
        val.count++;
        map.set(num, val);
    }

    return result;
};
```

It's also possible to combine both loops into one but it requires a second map:

```
var getDistances = function(arr) {
    const mapForwards = new Map(), maxBackwards = new Map(), n = arr.length;
    const result = new Array(arr.length).fill(0);

    for (let i = 0; i < n; i++) {
        /* Forwards part */
        const num = arr[i];
        const val = mapForwards.get(num) || {
            count: 0,
            sum: 0
        };
        result[i] += (val.count * i) - val.sum;
        val.sum += i;
        val.count++;
        mapForwards.set(num, val);
        /* Backwards part */
        const j = n - i - 1;
        const num2 = arr[j];
        const val2 = maxBackwards.get(num2) || {
            count: 0,
            sum: 0
        };
        result[j] += val2.sum - (val2.count * j);
        val2.sum += j;
        val2.count++;
        maxBackwards.set(num2, val2);
    }

    return result;
};
```


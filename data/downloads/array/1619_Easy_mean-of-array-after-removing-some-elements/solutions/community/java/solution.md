# [Java] QuickSelect, O(n)

**Author:** vovaz
**Votes:** 11
**Link:** [https://leetcode.com/problems/mean-of-array-after-removing-some-elements/solutions/899277/](https://leetcode.com/problems/mean-of-array-after-removing-some-elements/solutions/899277/)

---

Bruteforce O(n log(n)) is obvious. Let's find something more interesting:

O(n) logic - we actually do not need neither values of upper nor lower 5% bounds, as well any specific order for the rest of the array. How can we partition our array in the way that left part of the array will be always smaller than right? - Quick Select!

As step 1 we partition first 5% of smallest numbers, as step 2 we partitioning 90%  (in original array size terms) starting from 5% index, so the final partitioning looks like [5% smallest, 90% mid, 5% of largest entries]

```
public double trimMean(int[] arr) {
        int trim = arr.length / 20;

        qselectmin(arr, 0, arr.length - 1, trim);
        qselectmin(arr, trim, arr.length - 1, arr.length - 2 * trim);

        int sum = 0;
        for (int i = trim, l = arr.length - trim; i < l; i++)
            sum += arr[i];
        return (double) sum / (arr.length - 2 * trim);
    }
   
    Random rnd = new Random();

    public void qselectmin(int[] a, int from, int to, int k) {
        if (from == to)
            return;
        int pi = partition(a, from, to);
        int total = pi - from + 1;
        if (total == k)
            return;
        if (total < k)
            qselectmin(a, pi + 1, to, k - total);
        else
            qselectmin(a, from, pi - 1, k);
    }

    private int partition(int[] a, int l, int r) {
        int p = l + rnd.nextInt(r - l);
        swap(a, p, r);
        p = r;
        int pivot = a[p];

        int i = l;

        for (int j = l; j < r; j++) {
            if (a[j] <= pivot)
                swap(a, i++, j);
        }
        swap(a, i, p);

        return i;
    }

    private void swap(int[] a, int l, int r) {
        int t = a[l];
        a[l] = a[r];
        a[r] = t;
    }
```
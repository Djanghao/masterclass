# [Java] Keep track of the product start and end

**Author:** tobias2code
**Votes:** 4
**Link:** [https://leetcode.com/problems/abbreviating-the-product-of-a-range/solutions/1646713/](https://leetcode.com/problems/abbreviating-the-product-of-a-range/solutions/1646713/)

---

We can separately compute the start and end part of the number (as well as the number of trailing zeros).
Example (with smaller numbers):
```
    999[999]999 * 99 // start = 999, end = 999
 =  989[99999]901 // start = 989, end = 901 => same as computing separately with 999 * 99 = 98901
```

Using `long` provides enough precision to pass the tests (though I don't have a formal proof yet).
Given that input numbers are smaller than 10^6 and the max value of a long is (roughly) 9 * 10^18, we need to keep start and end smaller than 9 * 10^12.

Edit: we actually need to use `double` for start, to have enough precision to pass new tests. Thanks @DIMITR for the comment!

```
public static final long LIMIT = 1_000_000_000_000l; // keep start/end smaller than 10^12
    
public String abbreviateProduct(int left, int right) {
    long end = 1; // end part of the product (or the whole number if small enough)
    long nZeros = 0; // trailing zeros
    boolean usedModulo = false;
    for (int n = left; n <= right; n++) {
        end *= n;

        while (end % 10 == 0) { // extract trailing zeros into nZeros
            end /= 10;
            nZeros++;
        }

        if (end >= LIMIT) { // truncate if needed
            end %= LIMIT;
            usedModulo = true;
        }
    }

    if (!usedModulo && end < 10_000_000_000l) { // doesn't need abbreviation below 10^10
        return String.format("%de%d", end, nZeros);
    }

    double start = 1; // start part of the product
    for (int n = left; n <= right; n++) {
        start *= n;

        while (start >= LIMIT) { // truncate if needed
            start /= 10;
        }
    }

    return buildAbbreviation(usedModulo, start, end, nZeros);
}

private String buildAbbreviation(boolean usedModulo, double start, long end, long nZeros) {
    while (start >= 100_000) { // keep the 5 first digits
        start /= 10;
    }

    end %= 100_000; // keep the last 5 digits

    return String.format("%d...%05de%d", (int) start, end, nZeros); // zero-padding of the end
}
```

Questions and comments welcome!
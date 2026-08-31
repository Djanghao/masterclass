# 2-4 lines, every language

**Author:** StefanPochmann
**Votes:** 574
**Link:** [https://leetcode.com/problems/ugly-number/solutions/69214/](https://leetcode.com/problems/ugly-number/solutions/69214/)

---

Just divide by 2, 3 and 5 as often as possible and then check whether we arrived at 1. Also try divisor 4 if that makes the code simpler / less repetitive.

**C++ / C**

    for (int i=2; i<6 && num; i++)
        while (num % i == 0)
            num /= i;
    return num == 1;

**Ruby**

    (2..5).each { |i| num /= i while num % i == 0 } if num > 0
    num == 1

Or:

    require 'prime'
    num > 0 && num.prime_division.all? { |p, _| p < 6 }

**Python**

    for p in 2, 3, 5:
        while num % p == 0 < num:
            num /= p
    return num == 1

**Java / C#**

    for (int i=2; i<6 && num>0; i++)
        while (num % i == 0)
            num /= i;
    return num == 1;

**Javascript**

    for (var p of [2, 3, 5])
        while (num && num % p == 0)
            num /= p;
    return num == 1;

---

**General**

Would be a bit cleaner if I did the zero-test outside, and discarding negative numbers right away can speed things up a little, but meh... I don't want to add another line and indentation level :-)

    if (num > 0)
        for (int i=2; i<6; i++)
            while (num % i == 0)
                num /= i;
    return num == 1;
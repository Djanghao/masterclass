# 1-liners & other with explanations

**Author:** StefanPochmann
**Votes:** 49
**Link:** [https://leetcode.com/problems/super-pow/solutions/84534/](https://leetcode.com/problems/super-pow/solutions/84534/)

---

## Solution 1: Using Python's big integers <sup>(accepted in 72 ms)</sup>

Turn `b` into a Python integer object (they grow arbitrarily large) and just use the `pow` function (which supports a modulo paramenter).

    def superPow(self, a, b):
        return pow(a, int(''.join(map(str, b))), 1337)

<br>
## Solution 2: Using small ints <sup>(accepted in 80 ms)</sup>

Originally I went backwards (see solution 5) but then I saw other people go forwards and it's simpler. Sigh. Anyway... my version:

    def superPow(self, a, b):
        result = 1
        for digit in b:
            result = pow(result, 10, 1337) * pow(a, digit, 1337) % 1337
        return result

Explanation: For example for a<sup>5347</sup>, the above computes a<sup>5</sup>, then a<sup>53</sup>, then a<sup>534</sup>, and then finally a<sup>5347</sup>. And a step from one to the next can be done like a<sup>5347</sup> = (a<sup>534</sup>)<sup>10</sup> \\* a<sup>7</sup>.

<br>
## Solution 3: Using recursion <sup>(accepted in 92 ms)</sup>

Obligatory recursive oneliner version of solution 2.

    def superPow(self, a, b):
        return pow(a, b.pop(), 1337) * pow(self.superPow(a, b), 10, 1337) % 1337 if b else 1

<br>
## Solution 4: Using `reduce` <sup>(accepted in 80 ms)</sup>

Obligatory `reduce`-oneliner version of solution 2.

    def superPow(self, a, b):
        return reduce(lambda result, digit: pow(result, 10, 1337) * pow(a, digit, 1337) % 1337, b, 1)

<br>
## Solution 5: omg was i stupid <sup>(accepted in 72 ms)

My original do-it-yourself before I saw other people's solutions and wrote solutions 2-4.

Using only small ints, also accepted in 72 ms:

    def superPow(self, a, b):
        result = 1
        apower = a
        for digit in reversed(b):
            result = result * pow(apower, digit, 1337) % 1337
            apower = pow(apower, 10, 1337)
        return result

Explanation by example:

a<sup>**5347**</sup>
= a<sup>5000</sup> * a<sup>300</sup> * a<sup>40</sup> * a<sup>7</sup>
= (a<sup>1000</sup>)<sup>5</sup> * (a<sup>100</sup>)<sup>3</sup> * (a<sup>10</sup>)<sup>4</sup> * a<sup>7</sup>
= (((a<sup>10</sup>)<sup>10</sup>)<sup>10</sup>)<sup>**5**</sup> * ((a<sup>10</sup>)<sup>10</sup>)<sup>**3**</sup> * (a<sup>10</sup>)<sup>**4**</sup> * a<sup>**7**</sup>

Computing that from back to front is straightforward (or straightbackward?).
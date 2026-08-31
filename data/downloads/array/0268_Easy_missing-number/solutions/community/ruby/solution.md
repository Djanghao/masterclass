# 1+ lines Ruby, Python, Java, C++

**Author:** StefanPochmann
**Votes:** 297
**Link:** [https://leetcode.com/problems/missing-number/solutions/69832/](https://leetcode.com/problems/missing-number/solutions/69832/)

---

Several different solutions, some with O(1) extra space, some with O(n).

---

**Sum of 0..n minus sum of the given numbers is the missing one.**

These only use O(1) extra space.

Ruby

    def missing_number(nums)
      (0..nums.size).sum - nums.sum
    end

Python

    def missingNumber(self, nums):
        n = len(nums)
        return n * (n+1) / 2 - sum(nums)

Java

    public int missingNumber(int[] nums) {
        long n = nums.length;
        return (int) (n * (n+1) / 2 - IntStream.of(nums).sum());
    }

C++

    int missingNumber(vector<int>& nums) {
        long n = nums.size();
        return n * (n+1) / 2 - accumulate(begin(nums), end(nums), 0);
    }

Using `long` for Java and C++ to prevent overflow (the n*(n+1) overflows ints already for n=46341, and then the /2 causes an actual wrong result).

---

**Xor-ing the given numbers and 0..n.**

These use O(n) extra space, but I like them anyway.

Ruby

    def missing_number(nums)
      nums.zip(1.step).flatten.reduce(:^)
    end

Python

    def missingNumber(self, nums):
        return reduce(operator.xor, nums + range(len(nums)+1))

---

**Xor-ing with O(1) space**

Saw this from ts before. Xoring 0..n results in [n, 1, n+1, 0][n % 4]. You can also spot the pattern by looking at xors of such ranges, and it's easy to explain as well.

Ruby

    def missing_number(nums)
      n = nums.size
      nums.reduce(:^) ^ [n, 1, n+1, 0][n % 4]
    end

Python

    def missingNumber(self, nums):
        n = len(nums)
        return reduce(operator.xor, nums) ^ [n, 1, n+1, 0][n % 4]

---

**Sum, without formula.**

Java and C++:

        int miss = 0, i = 0;
        for (int num : nums)
            miss += ++i - num;
        return miss;

In Java I believe this is safe, overflow might happen but not cause a wrong result (because another overflow will fix it). In C++ I believe it's *probably safe* in the same way, except that that behavior isn't defined in the standard(s) but is a de-facto standard anyway. In any case, I could just use 64-bit ints again to be safe.

---

**Set/array difference**

Don't know about Ruby's runtime, might not be linear. Python's sets are hash sets and the difference is linear time on average. Don't know about its worst case, and apparently neither does the [TimeComplexity page](https://wiki.python.org/moin/TimeComplexity).

Ruby

    def missing_number(nums)
      ((0..nums.size).to_a - nums)[0]
    end

Python

    def missingNumber(self, nums):
        return (set(range(len(nums)+1)) - set(nums)).pop()
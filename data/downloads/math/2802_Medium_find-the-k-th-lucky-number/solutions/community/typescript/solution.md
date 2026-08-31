# Transforming Binary to “Lucky”: Efficiently Finding the k-th Lucky Number

**Author:** andygr1n1
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-k-th-lucky-number/solutions/5228043/](https://leetcode.com/problems/find-the-k-th-lucky-number/solutions/5228043/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires finding the k-th \u201Clucky\u201D number. Lucky numbers are defined as numbers composed of the digits \u20184\u2019 and \u20187\u2019. The k-th lucky number can be derived from the binary representation of k + 1. This approach is inspired by observing the pattern between binary numbers and their corresponding lucky numbers. Specifically, we replace binary digits \u20180\u2019 and \u20181\u2019 with \u20184\u2019 and \u20187\u2019, respectively, to construct the desired lucky number.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Increment k: First, we increment k by 1 to align with 1-based indexing. This ensures that the least significant bit corresponds correctly when converting to a binary string.
2.	Convert to Binary: Convert the incremented number to its binary representation. The conversion is straightforward using JavaScript\u2019s toString(2) method.
3.	Transform Binary to Lucky Number: Skip the most significant \u20181\u2019 bit, which serves as a leading indicator, and replace all remaining \u20180\u2019s with \u20184\u2019s and \u20181\u2019s with \u20187\u2019s. This transformation directly maps binary digits to the desired lucky number digits.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of this solution is O(\\log k) since converting a number to a binary string and replacing characters both operate in logarithmic time with respect to the number of digits.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is also O(\\log k) due to the storage required for the binary string and the resulting lucky number string.

# Code
```
function kthLuckyNumber(k: number): string {
    // Increment k to account for 1-based indexing
    k = k + 1;

    // Convert k to a binary string (up to the most significant '1')
    let kthLuckyNum = k.toString(2).substring(1);

    // Replace '0' with '4' and '1' with '7' in the binary string
    kthLuckyNum = kthLuckyNum.replace(/0/g, "4").replace(/1/g, "7");

    return kthLuckyNum;
};
```
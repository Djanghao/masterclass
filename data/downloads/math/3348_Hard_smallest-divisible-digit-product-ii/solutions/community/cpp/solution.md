# Solution for waifujahat | C# | 100% using Recursive Backtracking

**Author:** waifujahat
**Votes:** 8
**Link:** [https://leetcode.com/problems/smallest-divisible-digit-product-ii/solutions/6077472/](https://leetcode.com/problems/smallest-divisible-digit-product-ii/solutions/6077472/)

---

![Screenshot 2024-11-25 135108.png](./images/0.png)

---
# One of hardest task in Leetcode, AI will not be able to replace us, let's celebrate

# Step by Step

I have worked to solve this problem around 1 month, the task is a lie

Everyone should be able to solve this problem as if it's looks it only required a composite number expression `t` as a valid digit product, but the challenge lies in translating the prime factorization to the smallest possible number and needing to minimize that number while ensuring that the digit product divides `t`, managing overlapping factors and keeping track of the smallest number is computationally very complex, in my case make complex logic is time-consuming, every mistakes can derail my entire process and broke the code

It's a MUST to avoid unnecessary calculations and stack overflow errors, as I have to make specific `testcase` handling vs efficiency vs all correct, personally I don't want to do this kind of problem again, okay here I go :

1. There was confusion about handling cases where `t` contains factors beyond 2, 3, 5 and 7, where `t` may contains extraneous factors and `num` has leading zeros required special attention than usual, because if I don't decompose `t` into prime factors correctly, some `testcase` will be wrong no matter how I try to represent prime factorization, the known values \u200B\u200Bof `t` and `num` are also limited by the testcase that only appears

2. So what to do?
~ First, translate the prime factorization into valid digits while minimizing the result
~ Second, make sure the solution or method you will use is correct, efficient and handle cases that add complexity, I even got TLE a few times after racking my brain
~ Third, do lot of experimentation in balancing the need to go beyond `num` while minimizing the result and maintaining the factorization rules
~ Fourth, need to simplify any complicated logic is prone to subtle errors that are hard to detect and fix, I previously used logic like GDC and I ran into my own problems 
~ In the end, I managed to create a code where the code operates directly on the prime factors of a given number `t` to determine its composition in prime numbers

3. Let's go straight to my code, it will be easier to explain

---

# Code
```csharp []
// My logic revolves around factorizing t and attempting to form the smallest possible number by using digits 2, 3, 5, 6, 7, 8, and 9, which correspond to prime factorizations
// And AddMin() function tries to place digits in num such that the product of the digits matches t
// I use some methods are used to handle prime factorization, digit formation and comparison

// TODO : 
// Walkthrough the code with specific inputs to show how each function works
// Focus on smaller tasks like factorizing t and building a number from factors
// Factorize t, generate the smallest number, compare with num, adjust num and return the result
// Provide a variety of inputs to highlight edge cases and ensure every results

public class Solution {
    public string SmallestNumber(string num, long t) {

        // Factorize the number t to get the prime factors 2, 3, 5, 7 and check if it's possible to create such a number
        var factors = GetFactors(t);
        var min = GetMin(factors.p2, factors.p3, factors.p5, factors.p7);

        // I check if t has prime factors other than 2, 3, 5, 7
        if (factors.r != 1)
        return "-1";

        // Compare the smallest valid number min with the input number num to check if f min is greater than or equal to num
        if (Compare(min, num.TrimStart('0', '1')) >= 0) 
        {
            if (min.Length >= num.Length) 
            {
                return min;
            } 
            else 
            {
                return new string('1', num.Length - min.Length) + min;
            }
        }

        // If min is smaller than num, I try to adjust num by placing the right digits using AddMin
        StringBuilder resbuild = new StringBuilder(num);

        if (AddMin(0, (factors.p2, factors.p3, factors.p5, factors.p7), resbuild))
        return resbuild.ToString();

        string prefix = new string('1', num.Length - min.Length + 1);

        return prefix + min;
    }

    // I use recursion to check all possibilities for the smallest valid number
    // Start at the first digit of num, if the current digit can't satisfy the factors, increment it until it does
    // Recursively check the next digit, if no solution is possible, replace the current digit with 1
    private bool AddMin(int start, (int p2, int p3, int p5, int p7) factors, StringBuilder num) {

        // If I have processed all digits, check if all factors have been satisfied
        if (start >= num.Length)
        return factors.p2 == 0 && factors.p3 == 0 && factors.p5 == 0 && factors.p7 == 0;

        int suffix = num.Length - start;

        // If the remaining factors cannot be completed with the remaining digits
        if (MinLength(factors.p2, factors.p3, factors.p5, factors.p7) > suffix) 
        {
            num[start] = '1';

            return false;
        }

        // I try to increment the current digit until the factors are satisfied
        int current = num[start] - '0';

        if (current == 0) 
        {
            var min = GetMin(factors.p2, factors.p3, factors.p5, factors.p7);
            int posMin = min.Length - 1;
            int posNum = num.Length - 1;

            // I start replacing digits from right to left with the digits in min
            while (posNum >= start) 
            {
                if (posMin >= 0) 
                {
                    num[posNum--] = min[posMin--];
                } 
                else 
                {
                    num[posNum--] = '1';
                }
            }
            return true;
        } 
        else 
        {
            // I try all possible digits from the current digit
            for (int cd = current; cd <= 9; cd++) 
            {
                int nd = cd;
                int np2 = factors.p2, np3 = factors.p3, np5 = factors.p5, np7 = factors.p7;

                // Reduce the factors based on the current digit
                while (np2 > 0 && nd % 2 == 0) 
                { 
                    np2--; nd /= 2; 
                }
                while (np3 > 0 && nd % 3 == 0) 
                { 
                    np3--; nd /= 3; 
                }
                while (np5 > 0 && nd % 5 == 0) 
                { 
                    np5--; nd /= 5; 
                }
                while (np7 > 0 && nd % 7 == 0) 
                { 
                    np7--; nd /= 7; 
                }
                // Check if it's possible with the current digit
                if (AddMin(start + 1, (np2, np3, np5, np7), num)) 
                {
                    num[start] = (char)('0' + cd);
                    
                    return true;
                }
            }
            // If no valid digit found
            num[start] = '1';

            return false;
        }
    }

    // Keep dividing t by 2, 3, 5, and 7 until it\u2019s no longer divisible
    // The remaining number r tells us if there are other prime factors, if r \u2260 1, t cannot be built with just digits
    private (int p2, int p3, int p5, int p7, long r) GetFactors(long n) {

        int p2 = 0, p3 = 0, p5 = 0, p7 = 0;

        // I just keep dividing n by 2, 3, 5, and 7 until it is no longer divisible by these primes
        while (n % 2 == 0) 
        { 
            p2++; n /= 2; 
        }
        while (n % 3 == 0) 
        { 
            p3++; n /= 3; 
        }
        while (n % 5 == 0) 
        { 
            p5++; n /= 5; 
        }
        while (n % 7 == 0) 
        { 
            p7++; n /= 7; 
        }
        return (p2, p3, p5, p7, n);
    }

    private int MinLength(int p2, int p3, int p5, int p7) {

        // Combine the factors into the smallest possible digits like 9, 8, 6 and count the digits needed
        int n9 = p3 / 2;
        p3 %= 2;
        int n8 = p2 / 3;
        p2 %= 3;
        int n7 = p7;
        int n6 = Math.Min(p2, p3);
        p2 -= n6;
        p3 -= n6;
        int n5 = p5;
        int n4 = p2 / 2;
        p2 %= 2;
        int n3 = p3;
        int n2 = p2;

        return n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9;
    }

    // Use the factors to create the smallest possible number
    // Group factors into digits like 9 (3 \xD7 3), 8 (2 \xD7 2 \xD7 2), 6 (2 \xD7 3)
    // I build a string with the required number of each digit
    private string GetMin(int p2, int p3, int p5, int p7) {

        // Form the smallest number by taking as many of each possible digit as needed
        int n9 = p3 / 2;
        p3 %= 2;
        int n8 = p2 / 3;
        p2 %= 3;
        int n7 = p7;
        int n6 = Math.Min(p2, p3);
        p2 -= n6;
        p3 -= n6;
        int n5 = p5;
        int n4 = p2 / 2;
        p2 %= 2;
        int n3 = p3;
        int n2 = p2;

        // I return the number as a string of digits
        return
        new string('2', n2) +
        new string('3', n3) +
        new string('4', n4) +
        new string('5', n5) +
        new string('6', n6) +
        new string('7', n7) +
        new string('8', n8) +
        new string('9', n9);
    }

    // I ensure the result at least as large as num, write a simple Compare function
    // I compare the lengths of the numbers first, if the lengths are equal then compare them digit by digit
    private int Compare(string a, string b) {

        // If lengths different, the shorter string is considered smaller
        if (a.Length != b.Length) 
        return a.Length.CompareTo(b.Length);
        // If lengths are the same, compare the strings
        return string.Compare(a, b);
    }
}

```

```C++ []
// Nevermind I just doing experiment using binary search in C++
// But if you need solution in C++ here I go

class Solution {
public:

    string smallestNumber(string num, long long t) {

        // Find the count of factors of numbers from 2 to 9 in t
        int n = num.size();
        int factcount = count(t);

        if (factcount == INT_MAX) 
        return "-1";
        if (factcount > num.length()) 
        {
            // If there are more factors than digits in num
            return SmallestString(t, factcount);
        }

        // I use binary search to determine the smallest valid number
        long long l = 0, h = n, vl = -1, ans = -1;

        while (l <= h) 
        {
            long long mid = (l + h) / 2;
            long long crt = t;
            bool zeroEncountered = false;

            // Check factors in the first mid digits
            for (int i = 0; i < mid; i++) 
            {
                // Can't have a 0 dividing t
                if (num[i] == '0') 
                {
                    h = i;
                    zeroEncountered = true;
                    break;
                }
                // Divide t by gcd of current digit
                crt /= gcd(crt, num[i] - '0');
            }

            if (zeroEncountered) 
            continue;

            // If I can proceed with mid digits
            bool possible = false;

            if (mid == n) 
            {
                if (crt == 1) 
                return num;
            }
            else 
            {
                // Check if I can create a valid number using the next digit
                for (int i = max(1, num[mid] - '0'); i < 10; i++) 
                {
                    long long newT = crt / gcd(crt, i);
                    // Factors left
                    int positionsRequired = count(newT);

                    if (positionsRequired <= n - mid - 1 && (i > num[mid] - '0' || CreateGreaterWithRest(num, mid + 1, newT))) 
                    {
                        vl = i;
                        possible = true;
                        break;
                    }
                }
            }
            if (possible) 
            {
                // Expand search space to the right
                l = mid + 1;
                ans = mid;
            }
            else 
            {
                h = mid - 1;
            }
        }

        // Handle the result based on the search outcome
        long long crt = t;

        if (ans == -1) 
        {
            // Add a leading zero to the number
            num = '0' + num;
            int ind = n;

            // I try to fill from the end with factors
            for (int j = 9; j > 0; j--) 
            {
                while (ind > ans && crt % j == 0) 
                {
                    num[ind--] = '0' + j;
                    crt /= j;
                }
            }
            return num;
        }

        // Replace the digit at the position ans
        num[ans] = '0' + vl;

        for (int i = 0; i <= ans; i++) 
        {
            if (num[i] == '0') 
            continue;

            // Reduce t by using gcd
            crt /= gcd(crt, num[i] - '0');
        }

        int ind = n - 1;

        for (int j = 9; j > 0; j--) 
        {
            while (ind > ans && crt % j == 0) 
            {
                num[ind--] = '0' + j;
                crt /= j;
            }
        }
        return num;
    }

    // Fully represent t using digits 2-9
    string SmallestString(long long t, int ct) {

        string ans(ct, ' ');
        ct--;
        for (int i = 9; i > 1; i--) 
        {
            while (t % i == 0) 
            {
                ans[ct--] = '0' + i;
                t /= i;
            }
        }
        return ans;
    }

    // Counts the total number of factors of numbers 2-9 in vl
    int count(long long vl) 
    {
        int ct = 0;
        for (int i = 9; i > 1; i--) 
        {
            while (vl % i == 0) 
            {
                vl /= i;
                ct++;
            }
        }
        // If vl has factors outside 2-9
        if (vl > 1) 
        return INT_MAX;
        return ct;
    }

    // Checks if it is possible to create a greater number by replacing the digits after ind
    bool CreateGreaterWithRest(string& num, int ind, long long vl) {

        int ct = 0, n = num.size();
        vector<int> tp(10);

        // Factorize vl into digits 2-9
        for (int i = 9; i > 1; i--) 
        {
            while (vl % i == 0) 
            {
                tp[i]++;
                vl /= i;
                ct++;
            }
        }

        // Calculate how many extra positions are left after the current index and factor count
        int extraSpaces = n - ind - ct;
        tp[8] += tp[2] + tp[4];
        tp[2] = 0;
        tp[4] = 0;
        tp[9] += tp[3] + extraSpaces;
        tp[3] = 0;

        // Now, I attempt to form a valid number starting from index in the string by replacing digits
        for (int i = 9; i >= 1; i--) 
        {
            while (ind < n && tp[i] > 0) 
            {
                // This means I can create a larger number
                if (i > num[ind] - '0') 
                return true;
                // Cannot
                if (i < num[ind] - '0') 
                return false;
                ind++;
                tp[i]--;
            }
        }
        return true; // I can form a larger number
    }
};
```
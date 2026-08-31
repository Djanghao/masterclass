# Java - 66ms - No Complex Maths 100% Explained

**Author:** gahfy
**Votes:** 38
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-string-sorted/solutions/1166535/](https://leetcode.com/problems/minimum-number-of-operations-to-make-string-sorted/solutions/1166535/)

---

I like long topics, but this one may be the longest :-). The solution works. It's not the fastest algorithm, but by far the most easy to understand. If you know what a factorial is (reminder : n! = nx(n-1)x(n-2)x...x2x1) and as long as you agree that 0!=1, then you have all the mathematical knowledge needed.

*I added an optimized solution using some "complex" mathematics at the end, just in case you want to optimize.*

# Before starting
What leetcode is providing us with the strings is a number. It is just a number expressed with base-26 digits. I will consider it for the rest of this article, in which I will deal with digits for making it more easy to understand. So please remember that their string is nothing else but a number expressed in base-26.
# Explanation without code
## Decreasing
Let's start with a basic problem. I give you the number 15324. I want you to give me the highest number following those two conditions :
* It should be lower than the original
* It should contain exactly the same digits

The answer is 15243. How did I find it? I start from the end, and I'm looking for the first digit which will not follow the decreasing order (from right remember). So 4-> 2 -> 3. OK, we found 3. I then switch with the highest value lower than 3, which is 2. 15234, and then, I revert everything on the right of the 2 we just put, so 15243.

Feel free to read the explanation of the solution of this problem : https://leetcode.com/problems/next-permutation/ (it's the exact opposite problem).

What about the algorithm I just described ? It is exactly the algorithm that leetcode is using in the problem. So what they do is just getting the highest lower number formed with those digits.

## Counting (with distinct digits)

Now, let's consider we have 4 digits: 1, 2, 3 and 4. I would like to know the number of combination I can make with those digits. It's 4! (4\xD73\xD72\xD71) = 24. Now, let's list them all here in ascending order :

1. 1234
2. 1243
3. 1324
4. 1342
5. 1423
6. 1432
7. 2134
8. 2143
9. 2314
10. 2341
11. 2413
12. 2431
13. 3124
14. 3142
15. 3214
16. 3241
17. 3412
18. 3421
19. 4123
20. 4132
21. 4213
22. 4231
23. 4312
24. 4321

So now, let's assume I give you the number 3412, and I ask you how much permutations do I need to make it sorted. Solution is quite easy, you just have to look at the list above, it's 17. Did you fall in the trap? :-) Actually it is 16, because the first one in the list with rank 1 has a score of 0 in the problem we are trying to solve. But how could we find 16 without that list ?

4\xD73\xD72\xD71 possibilities. Let's call this number f.
And let's assume we have an array of the digits we are using : [1,2,3,4]
Let's count the number of non zero elements in the array : 4. Let's call this value p
First, we are using the 3rd digit which is not 0 of the array. So in order to get his rank, we need to do (f/p)\xD7(3-1) = 6\xD72 = 12

Now, let's divide f by the number of non 0 elements in the array (4) and let's replace the 3 by a zero.
Now, f=6 and array is [1,2,0,4] and p = 3.
Now, let's do this again, this time, 4 is the 3rd digit which is not 0 in the array. So once again (f/p)\xD7(3-1) = 2\xD72 = 4

Let's do it again, with f=2, array=[1,2,0,0] and p = 2. (f/p)\xD7(1-1) = 1\xD70 = 0
Let's do it again with f=1, array=[0,2,0,0] and p = 1. (f/p)\xD7(1-1) = 1\xD70 = 0

Ok, now, let's sum up all what we have : 12+4+0+0 = 16, which is exactly the result we were looking for.

So now, we know how to solve the leetcode problem for a string which would only contain distinct characters. Now, let's see how to solve this with characters that can be duplicated.

## Counting (with digits that can appear many times)
Now, let's make the problem more difficult. What is the position of the number 1223 in increasing order \uD83D\uDE02\uD83D\uDE02\uD83D\uDE02 ? Ok, I'm just kidding, what is the position of the number 2312 in the list. Then, the previous method cannot be useful, as we have 2 which appears 2 times. Let's try, same as before, to do the list of all numbers with those digits, in increasing order :
1. 1223
2. 1232
3. 1322
4. 2123
5. 2132
6. 2213
7. 2231
8. 2312
9. 2321
10. 3122
11. 3212
12. 3221

How many possibilities we have ? Actually, it seems to be 4!/(product of number of occurrences of all digits). 4! / 2 = 12, which seems to work. So, now, let's try with 12333. With our formula, we can predict that we will have 5! / 3 = 40 results. Let's list them all :

1. 12333
2. 13233
3. 13323
4. 13332
5. 21333
6. 23133
7. 23313
8. 23331
9. 31233
10. 31323
11. 31332
12. 32133
13. 32313
14. 32331
15. 33123
16. 33132
17. 33213
18. 33231
19. 33312
20. 33321

Oooops, we actually have only 20, not 40. It is because the result is 5! / ([numberOfOne]!x[numberOfTwo]!x[numberOfThree]!) = 120 / 6 = 20.

OK, this will be our last listing (I promess), let's try with 11223 :
1. 11223
1. 11232
1. 11322
1. 12123
1. 12132
1. 12213
1. 12231
1. 12312
1. 12321
1. 13122
1. 13212
1. 13221
1. 21123
1. 21132
1. 21213
1. 21231
1. 21312
1. 21321
1. 22113
1. 22131
1. 22311
1. 23112
1. 23121
1. 23211
1. 31122
1. 31212
1. 31221
1. 32112
1. 32121
1. 32211

So we can see that we have 30 results, which match our prediction : 5! / (2!x2!x1!) = 120 / 4 = 30. Now, and it is the leetcode problem, how to know the rank of 23121 (we know from the list it is 22).

As we can see, the numbers with 1 and 2 appears 2 times more in the first position than the number 3. Because we have 2 occurrences of 2, it seems that it appears 2! times more. Sorry, but not this time. That is why it is important to run with multiple examples in algorithms. We can see in the previous list (12333) that numbers starting with a 3 appears 3 times more than numbers starting with a 2 or a 1.

5! / (2! x 2! x 1!)

Let's do first an array of pairs (value, occurrences) = [[1,2], [2,2], [3,1]]. So we start with n, which is the number of possibilities :
n / (sum of occurrences) * (sum of occurrences before). For 2, we have, (30 / 5) * 2 = 6 * 2 = 12
Now, we have [[1,2], [2,1], [3,1]], and number of possibilities is 4! / (2! x 1! x 1!) = 12
Next digit is a 3, so (12 / 4) * (3) = 9
Now we have [[1,2], [2,1], [3,0]], and number of possibilities is 3! / (2! x 1! x 0!) = 3
Next digit is a 1, so (3 / 3) * (0) = 0
Now we have [[1,1], [2,1], [3,0]] and number of possibilities is 2! / (1! x 1! x 0!) = 2
Next digit is a 2, so (2/2) * 1 = 1
Now we have [[1,1], [2,0], [3,0]] and number of possibilities is 1! / (1! x 0! x 0!) = 1
Next digit is a 1, so (1/1) * 0 = 0
Let's sum all numbers we got : 12 + 9 + 0 + 1 + 0 : 22. Which is the result we expected.

That's it on how to solve the leetcode problem. We come up with a solution, in n x m complexity (where m is the number of characters allowed and n the number of characters).

# Let's code

It's now time to code. As number of characters may be up to 3000, and we deal with factorial on those numbers, we will of course use BigInteger (just start with it so I won't forget) :

```
import java.math.BigInteger;
```

So now, let's try to have the array of occurrences we dealt with. We will use an array of 26 integers, each index being the first part of the pair we used, and its value being the number of occurrences :

```
public int makeStringSorted(String s) {
	int[] occurrences = new int[26];
	populateOccurrences(occurrences, s);
	return 0;
}

public void populateOccurrences(int[] occurrences, String s) {
	for(char c: s.toCharArray()) {
		occurrences[c - 'a'] += 1;
	}
}
```

OK, now, we need to count the number of possibilities for an array of occurrences. In order to do so, we need to implement the factorial method :

```
public BigInteger factorial(int n) {
	BigInteger result = BigInteger.ONE;
	for(int i=1; i<=n; i++) {
		result = result.multiply(BigInteger.valueOf(i));
	}
	return result;
}
```

Now, we just need to apply the formula we saw before :

```
public int makeStringSorted(String s) {
	int[] occurrences = new int[26];
	populateOccurrences(occurrences, s);
	BigInteger possibilities = numberOfPossibilities(occurrences, s.length());
	return possibilities.intValue();
}

// ...

public BigInteger numberOfPossibilities(int[] occurrences, int totalSum) {
	BigInteger result = factorial(totalSum);
	for(int i=0; i<occurrences.length; i++) {
		result = result.divide(factorial(occurrences[i]));
	}
	return result;
}
```

Now, we need the sum of occurrences before the first char :

```
public BigInteger numberOfOccurrencesBefore(int[] occurrences, char character) {
	int result = 0;
	for(int i=0; i<character-'a'; i++) {
		result += occurrences[i];
	}
	return BigInteger.valueOf(result);
}
```

Now all we have to do is to apply the formula :

```
BigInteger possibilities = numberOfPossibilities(occurrences, s.length());
BigInteger numberOfOccurrencesBefore = numberOfOccurrencesBefore(occurrences, s.charAt(0));
BigInteger currentResult = possibilities.divide(BigInteger.valueOf(s.length())).multiply(numberOfOccurrencesBefore);
```

We're almost done, now, what we need to do is to loop on characters, and so replace some value of variables :

```
int totalLength = s.length();
BigInteger result = BigInteger.ZERO;
while(totalLength > 1) {
	BigInteger possibilities = numberOfPossibilities(occurrences, totalLength);
	BigInteger numberOfOccurrencesBefore = numberOfOccurrencesBefore(occurrences, s.charAt(s.length() - totalLength));
	BigInteger currentResult = possibilities.multiply(numberOfOccurrencesBefore).divide(BigInteger.valueOf(totalLength));
	occurrences[s.charAt(s.length() - totalLength) - 'a'] -= 1;
	result = result.add(currentResult);
	totalLength--;
}

return result.intValue();
```

Before we forget, let's add the modulo at the return value :

```
return result.remainder(BigInteger.valueOf(1000000007)).intValue()
```

# Let's optimize code
Actually, this code works, you can try it on all the provided examples. There's only one problem : it will reach time limit on the test case scenarios. Actually, our algorithm works in O(n^2) now, because we calculate factorial each time (for the number of possibilities). So first, let's use a memo in order to keep factorials in memory :

```
class Solution {
    Map<Integer, BigInteger> factorMemo = new HashMap();
	
	public BigInteger factorial(int n) {
        if(factorMemo.get(n) != null) {
            return factorMemo.get(n);
        }
        BigInteger result = BigInteger.ONE;
        for(int i=1; i<=n; i++) {
            result = result.multiply(BigInteger.valueOf(i));
            factorMemo.put(i, result);
        }
        factorMemo.put(n, result);
        return result;
    }
}
```

OK, now it is much better, we can try again and ... time limit exceeded.

Actually, the problem here is that we have too much operations with BigIntegers, and the one taking the most times are divisions. So we definitely need to simplify all the divisions we are making, to try make divisions on the smallest possible numbers.

First, we are repeating a huge division to get the number of possibilities at each step. Actually, we can get the number of possibilities from the previous number of possibilies.

The number of possibilities is f(n) = n!/(product of factorials of occurrences).
Let's call x the current occurrence of the character we just used :
So, we can simplify by saying : f(n-1) = f(n) * (x+1)! / n / (x)!
And we can even simplify : f(n-1) = f(n) * (x+1) / n.

So, now, let's simplify it :

```
// We start calculating after the first step
if(totalLength < s.length()) {
	int previousOccurrences = occurrences[s.charAt(s.length() - totalLength - 1) - 'a'] + 1;
	possibilities = possibilities.multiply(BigInteger.valueOf(previousOccurrences)).divide(BigInteger.valueOf(totalLength+1));
}
```

Finally, we can run, and leetcode is accepting it :

Here is the final code :

```
import java.math.BigInteger;

class Solution {
    public int f = 1;
    Map<Integer, BigInteger> factorMemo = new HashMap();
    
    public int makeStringSorted(String s) {
        int[] occurrences = new int[26];
        populateOccurrences(occurrences, s);
        int totalLength = s.length();
        
        BigInteger result = BigInteger.ZERO;
        BigInteger possibilities = numberOfPossibilities(occurrences, totalLength);
        while(totalLength > 1) {
            // We start calculating after the first step
            if(totalLength < s.length()) {
                int previousOccurrences = occurrences[s.charAt(s.length() - totalLength - 1) - 'a'] + 1;
                possibilities = possibilities.multiply(BigInteger.valueOf(previousOccurrences)).divide(BigInteger.valueOf(totalLength+1));
            }
            BigInteger numberOfOccurrencesBefore = numberOfOccurrencesBefore(occurrences, s.charAt(s.length() - totalLength));
            BigInteger currentResult = possibilities.multiply(numberOfOccurrencesBefore).divide(BigInteger.valueOf(totalLength));
            occurrences[s.charAt(s.length() - totalLength) - 'a'] -= 1;
            result = result.add(currentResult);
            totalLength--;
        }

        return result.mod(BigInteger.valueOf(1000000007)).intValue();
    }
    
    public void populateOccurrences(int[] occurrences, String s) {
        for(char c: s.toCharArray()) {
            occurrences[c - 'a'] += 1;
        }
    }
    
    public BigInteger numberOfOccurrencesBefore(int[] occurrences, char character) {
        int result = 0;
        for(int i=0; i<character-'a'; i++) {
            result += occurrences[i];
        }
        return BigInteger.valueOf(result);
    }
    
    public BigInteger numberOfPossibilities(int[] occurrences, int totalSum) {
        BigInteger result = factorial(totalSum);
        for(int i=0; i<occurrences.length; i++) {
            result = result.divide(factorial(occurrences[i]));
        }
        return result;
    }
    
    public BigInteger factorial(int n) {
        if(factorMemo.get(n) != null) {
            return factorMemo.get(n);
        }
        BigInteger result = BigInteger.ONE;
        for(int i=1; i<=n; i++) {
            result = result.multiply(BigInteger.valueOf(i));
            factorMemo.put(i, result);
        }
        factorMemo.put(n, result);
        return result;
    }
}
```

So you have a solution, which is accepted, and which is not involving any complex mathematics. Of course, we can do better than this, but this will involve more complex mathematics.

# Here comes the Maths
The problem here, which is really taking a lot of time is dealing with BigInteger. Let's try to get rid of them. In order to be able to get rid of them, we need to agree on the following :

Ok, so now, let's use some Maths. All we need is the following :
* 1000000007 is a prime number
* (a * b) % n = (a%n * b%n) % n
* (a + b) % n = (a%n + b%n) % n
* if p is prime and b is not a multiple of p, then b^-1 % p = b^(p-2) % p (for more info on this one https://en.wikipedia.org/wiki/Fermat%27s_little_theorem)
* A fast algorithm exists to calculate a^b%m (https://en.wikipedia.org/wiki/Modular_exponentiation)

All we have to do now is to make all our operations modulo 10^9 + 7. Just before, one quick thing :
We will deal with multiplications of numbers up to 3000. 10^9 * 3000 \u2243 10^12, which is higher than Integer.MAX_VALUE. So we have to deal with long values. First, let's code the most easy, factorial modulo :

```
public long modFact(int n, int mod) {
    long result = 1;
    for(int i=1; i<=n; i++) {
        // We can simplify (i%mod) by i, because i < mod (and will always be).
        result = (result * i) % mod;
    }
    return result;
}
```

Now, let's calculate a^b%m (just adapting the pseudocode from wikipedia):
```
public long modPow(long base, int exponent, int modulus) {
	if(modulus == 1) {
		return 0;
	}
	long result = 1;
	base = base % modulus;

	while(exponent > 0) {
		if(exponent%2 == 1) {
			result = (result * base) % modulus;
		}
		exponent = exponent >> 1;
		base = (base * base) % modulus;
	}
	return result;
}
```

Now, let's do a division modulo. It's not so complex (This is true only because m is prime):
(a/b)%n = (a * 1/b) % n = (a * b^-1) % n = a%n * b^-1%n = a%n * (b^(n-2))%n :

```
public long modDivide(long a, long b, int mod) {
	b = modPow(b, mod-2, mod);
	return ((a%mod) * b)%mod
}
```

Ok, we have all we need. Now, let's compute number of possibilities modulo :

```
public long numberOfPossibilities(int[] occurrences, int totalSum, int mod) {
	long result = modFact(totalSum, mod);
	for(int i=0; i<occurrences.length; i++) {
		result = modDivide(result, modFact(occurrences[i], mod), mod);
	}
	return result;
}
```

We switch the method `numberOfOccurrencesBefore` to an int result :

```
public int numberOfOccurrencesBefore(int[] occurrences, char character) {
	int result = 0;
	for(int i=0; i<character-'a'; i++) {
		result += occurrences[i];
	}
	return result;
}
```

Let's now adapt our main method :

```
public int makeStringSorted(String s) {
	int[] occurrences = new int[26];
	populateOccurrences(occurrences, s);
	int totalLength = s.length();

	long result = 0;
	long possibilities = numberOfPossibilities(occurrences, totalLength, modulo);
	while(totalLength > 1) {
		// We start calculating after the first step
		if(totalLength < s.length()) {
			int previousOccurrences = occurrences[s.charAt(s.length() - totalLength - 1) - 'a'] + 1;
			possibilities = modDivide((possibilities * previousOccurrences) % modulo, totalLength+1, modulo);
		}
		int numberOfOccurrencesBefore = numberOfOccurrencesBefore(occurrences, s.charAt(s.length() - totalLength));
		long currentResult = modDivide((possibilities * numberOfOccurrencesBefore) % modulo, totalLength, modulo);
		occurrences[s.charAt(s.length() - totalLength) - 'a'] -= 1;
		result = (result + currentResult) % modulo;
		totalLength--;
	}

	return (int) result;
}
```

OK, we are almost done. One final thing to remember is to use memo for factorial :

```
public long modFact(int n, int mod) {
	if(factorMemo.get(n) != null) {
		return factorMemo.get(n);
	}
	long result = 1;
	for(int i=1; i<=n; i++) {
		// We can simplify (i%mod) by i, because i < mod (and will always be).
		result = (result * i) % mod;
		factorMemo.put(i, result);
	}
	factorMemo.put(n, result);
	return result;
}
```

Because we did it with factorial, we can use memo for the power modulo. Let's do this :

```
class Solution {
    Map<Pair<Integer, Integer>, Long> modPowMemo = new HashMap();
	
	// ...
	
	public long modPow(long base, int exponent, int modulus) {
        if(modulus == 1) {
            return 0;
        }
        Pair pair = new Pair(base, exponent);
        if(modPowMemo.get(pair) != null) {
            return modPowMemo.get(pair);
        }
        long result = 1;
        base = base % modulus;
        
        while(exponent > 0) {
            if(exponent%2 == 1) {
                result = (result * base) % modulus;
            }
            exponent = exponent >> 1;
            base = (base * base) % modulus;
        }
        modPowMemo.put(pair, result);
        return result;
    }
}
```

That's all folks. The final solution (66ms), which is the fastest I could get to :

```
class Solution {
    public int modulo = 1000000007;
    Map<Integer, Long> factorMemo = new HashMap();
    
    public int makeStringSorted(String s) {
        int[] occurrences = new int[26];
        populateOccurrences(occurrences, s);
        int totalLength = s.length();
        
        long result = 0;
        long possibilities = numberOfPossibilities(occurrences, totalLength, modulo);
        while(totalLength > 1) {
            // We start calculating after the first step
            if(totalLength < s.length()) {
                int previousOccurrences = occurrences[s.charAt(s.length() - totalLength - 1) - 'a'] + 1;
                possibilities = modDivide((possibilities * previousOccurrences) % modulo, totalLength+1, modulo);
            }
            int numberOfOccurrencesBefore = numberOfOccurrencesBefore(occurrences, s.charAt(s.length() - totalLength));
            long currentResult = modDivide((possibilities * numberOfOccurrencesBefore) % modulo, totalLength, modulo);
            occurrences[s.charAt(s.length() - totalLength) - 'a'] -= 1;
            result = (result + currentResult) % modulo;
            totalLength--;
        }

        return (int) result;
    }
    
    public void populateOccurrences(int[] occurrences, String s) {
        for(char c: s.toCharArray()) {
            occurrences[c - 'a'] += 1;
        }
    }
    
    public int numberOfOccurrencesBefore(int[] occurrences, char character) {
        int result = 0;
        for(int i=0; i<character-'a'; i++) {
            result += occurrences[i];
        }
        return result;
    }
    
    public long numberOfPossibilities(int[] occurrences, int totalSum, int mod) {
        long result = modFact(totalSum, mod);
        for(int i=0; i<occurrences.length; i++) {
            result = modDivide(result, modFact(occurrences[i], mod), mod);
        }
        return result;
    }
    
    public long modDivide(long a, long b, int mod) {
        b = modPow(b, mod-2, mod);
        return ((a%mod) * b)%mod;
    }
    
    public long modFact(int n, int mod) {
        if(factorMemo.get(n) != null) {
            return factorMemo.get(n);
        }
        long result = 1;
        for(int i=1; i<=n; i++) {
            // We can simplify (i%mod) by i, because i < mod (and will always be).
            result = (result * i) % mod;
            factorMemo.put(i, result);
        }
        factorMemo.put(n, result);
        return result;
    }
    
    public long modPow(long base, int exponent, int modulus) {
        if(modulus == 1) {
            return 0;
        }
        long result = 1;
        base = base % modulus;
        
        while(exponent > 0) {
            if(exponent%2 == 1) {
                result = (result * base) % modulus;
            }
            exponent = exponent >> 1;
            base = (base * base) % modulus;
        }
        return result;
    }
}
```

And now, you have a more optimal solution which is way much faster, as it does not use BigDecimal.
# (Python) Concise Explanation and Proof

**Author:** gralance
**Votes:** 89
**Link:** [https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/310767/](https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/310767/)

---



### Notation
```sum(i, j)``` denoted as summation from ```a[i] + a[i + 1] + .... + a[j - 1]```

Here is a trick, if j > i
```
sum(i, j) = sum(0, j) - sum(0, i)
```
Since sum(i, j) is divisible by k, which means

```sum(i , j) % k == 0```

Replace sum(i, j) by sum(0, j) - sum(0, i)
( sum(0,j) - sum(0, i) ) % k == 0 which imply ``` sum(0,j) - sum(0, i) = n * k ``` 
where n is integer but we don't know what exactly n is.

``` python
# shift position from sum(0,j) - sum(0, i) = n * k
sum(0, i) = sum(0,j) - n * k 
# Then mod k both side
sum(0, i) % k = ( sum(0,j) - n * k ) % k 
``` 


Here is math formula of modulo operation from https://en.wikipedia.org/wiki/Modulo_operation
```
(a + b) mod n = [(a mod n) + (b mod n)] mod n
(a mod n) mod n = a mod n
```

Apply ```(a + b) mod n = [(a mod n) + (b mod n)] mod n``` on

```
sum(0, i) % k = ( sum(0,j) - n * k ) % k 
```
Such that
```
sum(0, i) % k = ( sum(0,j) % k - (n * k) % k ) % k 
```
(n * k) % k is zero, because n * k is divisible by k, such that
```
sum(0, i) % k = ( sum(0,j) % k ) % k 
```
Then apply ```(a mod n) mod n = a mod n``` on ```( sum(0, j) % k ) % k ``` such that
```
sum(0, i) % k = ( sum(0,j) % k ) % k = sum(0,j) % k
```
That is the proof why ```sum(0, i) % k = sum(0,j) % k``` if sum(i, j) is divisible by K

Let's use a dictionary(as known as HashMap) to store all ```sum(0, i) % k```
and group by  ```sum(0, i) % k``` as key

```python
acc = 0        
for i in range(len_A):
	acc += A[i]       
	key = acc % K # value of sum(0, i) % k

	if key in d: # save how many times sum(0, i) % k is same
		d[key] += 1 
	else:
		d[key] = 1
```

and if we found a bigger sum(0, j) latter, and ```d[sum(0, j) % k]``` means how many 
```sum(0, i) % k``` == ```sum(0, j) % k``` that satisfy the prevoius proof

### sum(i, j) is divisible by K if
```sum(0, i) % k = sum(0,j) % k``` 

then we add d[sum(0, j) % k] to answer

```python
class Solution:
    def subarraysDivByK(self, A: List[int], K: int) -> int:
        ans = 0
        d = {0: 1}
        len_A = len(A)
        acc = 0        
        for i in range(len_A):
            acc += A[i]       
            key = acc % K
            
            if key in d:
                ans += d[key]
                d[key] += 1
            else:
                d[key] = 1
            
        return ans
```

Why we need ```d = {0: 1}``` ?
Consider ```sum(i, j) % k == 0 and i == 0```
which means ```sum(0, j) % k == 0``` and should count into the answer

The solution is familiar from https://leetcode.com/problems/subarray-sum-equals-k/

Also, since ```key % k```, which means ```0 <= key < k``` therefore we can use an array instead of hashmap
here is an optimized solution.

```python
class Solution:
    def subarraysDivByK(self, A: List[int], K: int) -> int:
        res = 0
        d = [1] + [0] * K # range of key is 0 <= key < K because key always mod by K
        acc = 0
        for a in A:
            acc = (acc + a) % K # it's works because a % k % k % k .... n times is still same as a % k 
            if d[acc]:
                res += d[acc]
            d[acc] += 1            
        return res
```
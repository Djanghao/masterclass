# Simple and fast Go solution (4ms) runtime and lowest space O(1) beats 100% of Go users.

**Author:** MariamElashkar
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-symmetric-integers/solutions/4204080/](https://leetcode.com/problems/count-symmetric-integers/solutions/4204080/)

---

# Intuition
I first checked the limitation of the problem to design upon them which is from 1 to 10^4.
As the problem eliminates the odd number of digits, which are from 100 to 1000, it reduces the range of numbers.The range we need to iterate over it is only between 1 to 100 and from 1000 to 10000.
As the range of high and low is random, we have to iterate over all numbers within this range for a better algorithm. 
Now, that we determined the range of the number, we need the approach to catch them within this range.
The approach is simply revolved around dividing the number into digits and checking those digits. 
# Approach
As we only check numbers between 1 to 1000 and from 1000 to 10000, we need to find the approach for each of this group of numbers.

Numbers from 1 to 100 : 
the first digit has to equal the second one.
To obtain the first digit of a number consisting of 2 digits (under 100)
we can take the modolus of it, and divide it over 10 to get the second digit.
By comparing the two digits with each other we can get the numbers we need under 100 by counting with ```count1``` variable
```
    if i%10 == i/10 {
                count1++ }
```
Numbers from 1000 to 10000 : 

To fulfill the requirement for the number between 1000 to 10000 the sum of the first 2 digits has to be equal to the sum of the last 2 digits.
The first digit can be obtained by taking the modulus of the whole number, and by eliminating this number by division and re-taking the modulus we can get the second digit.
The third digit can be attained by eliminating the first two digits( dividing by 100 ) and taking the modulus again and so on..
But I divide the whole number over 1000 for the fourth digit to reduce the calculation complexity then we compare the same of each two digits and add one to variable ```count2```if any of those numbers does exist.
```
if i <= 10000 && i >= 1000 {
            if (i/1000 + (i/100)%10) == ((i/10)%10 + i%10) {
                count2++  }
```

As we divided the range between two groups of numbers and count each number on this group, we can get the total number by simply returning the sum of ```count1``` and `count2`
# Complexity
- Time complexity:
The time complexity of this function is O(n), where n is the difference between the high and low values. This is because the function uses a for loop that iterates from the low value to the high value.
- Space complexity:
The space complexity of this function is O(1) because it uses a constant amount of additional space. The variables count1 and count2 are used to keep track of the counts, but they do not depend on the size of the input.

# Code
```
func countSymmetricIntegers(low int, high int) int {
var count1, count2 int
	for i := low; i <= high; i++ {
		if i < 100 {
			if i%10 == i/10 {
				count1++
			}
		}
		if i <= 10000 && i >= 1000 {
			if (i/1000 + (i/100)%10) == ((i/10)%10 + i%10) {
				count2++

			}

		}
	}
	return count1 + count2
}
```
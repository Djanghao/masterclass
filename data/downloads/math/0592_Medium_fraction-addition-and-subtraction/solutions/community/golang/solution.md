# Simple Solution using GCD!

**Author:** SravanTuribilli
**Votes:** 1
**Link:** [https://leetcode.com/problems/fraction-addition-and-subtraction/solutions/5678370/](https://leetcode.com/problems/fraction-addition-and-subtraction/solutions/5678370/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can split the given string into individual elements and convert to int, but how can we add those ints to make it a fraction?

Just like we do it on notes, instead of using inbuilt math operations, lets use LCM & GCD will give us the result

Why GCD?
To make it a irreducible fraction, diving the final fraction's numerator and denominator with GCD(numerator, denominator)

# Approach
<!-- Describe your approach to solving the problem. -->
1. Split the string into individual elemets
2. Each element should be split to extract its numerator and denominator pair
3. Use LCM or multiply all denominators to get a common denominator
4. Since we got a common denominator, lets adjust each numberator to be able to have the common denominator as denominator, this results in a single fraction as result
5. Divide numberator and denominator of result with GCD(numerator, denominator) to make it irreducible


# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func fractionAddition(expression string) string {
	start := 0
	var nums []string
	for i, c := range expression {
		if (c != '-' && c != '+') || i == 0 {
			continue
		}
		nums = append(nums, expression[start:i])
		start = i
	}
	nums = append(nums, expression[start:])

	addVal := add(nums)
	return strconv.Itoa(addVal[0]) + "/" + strconv.Itoa(addVal[1])
}


func add(input []string) []int {
	pairs := make([][2]int, len(input))
	for i, c := range input {
		slice := strings.Split(c, "/")
		pairs[i][0], _ = strconv.Atoi(slice[0])
		pairs[i][1], _ = strconv.Atoi(slice[1])
	}

	cd := 1 //common-denominator
	for _, pair := range pairs {
		cd *= pair[1]
	}

	sum := 0
	for _, pair := range pairs {
		sum += pair[0] * cd / pair[1]
	}

	_gcd := gcd(sum, cd)
	return []int{sum / _gcd, cd / _gcd}
}


func gcd(a, b int) int {
	if a < 0 {
		a *= -1
	}

	for a > 0 {
		a, b = b%a, a
	}
	return b
}
```
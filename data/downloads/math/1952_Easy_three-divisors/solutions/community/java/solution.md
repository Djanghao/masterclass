# Simple java O(n ^ 1/4) time solution

**Author:** sashiks1009
**Votes:** 25
**Link:** [https://leetcode.com/problems/three-divisors/solutions/1375464/](https://leetcode.com/problems/three-divisors/solutions/1375464/)

---

If you observe this closely, the numbers having exact 3 divisors are those which are a perfect square of a prime number.
So the task is to find :
	i. If **n** is a *perfect square*
	ii. If the square root of **n** is a *prime number*
Also I am iterating to n.pow(1/4) times.
For ex. 
*to find **16** or less, it will loop **2 times**
to find **81** or less, it will loop **3 times***

*and so on and so forth..*
Thats it.

		public boolean isThree(int n) {
			if(n < 4) return false;
			int root = (int)Math.sqrt(n);
			if(root * root < n) return false;
			for(int i = 2 ; i <= Math.sqrt(root) ; i++) {
				if(root % i == 0) return false;
			}
			return true;
		}
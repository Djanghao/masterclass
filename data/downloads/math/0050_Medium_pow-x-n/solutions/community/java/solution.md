# ✅ [JAVA / C++] : Simple | O log(n) | Easy | Faster than 100% | Explained

**Author:** akshayaamar05
**Votes:** 1200
**Link:** [https://leetcode.com/problems/powx-n/solutions/1337794/](https://leetcode.com/problems/powx-n/solutions/1337794/)

---

* <u>**FIRST APPROACH**</u>

	We can solve this problem by multiplying x by n times
	eg:
	`x = 7 and n = 11`
	**7 * 7 * 7 * 7 * 7 * 7 * 7 * 7 * 7 * 7 * 7 = 1977326743**
	Here we have **multiplied 7 for 11 times**, which will result in **O(n)**
	But, Suppose `x = 1 and n = 2147483647`
	If we follow this approach then, **1 will be multiplied 2147483647 times** which is not efficient at all.
	
* <u>**COMPLEXITY**</u>
	* **Time: O(n)**, where `n` is the given power
	* **Space: O(1)**, in-place

<hr>

* <u>**SECOND  APPROACH**</u>

	In order to improve efficiency we will opt for **Binary Exponentiation using which we can calculate x<sup>n</sup> using O log<sub>2</sub>(N) multiplications.**

	**Basic Idea is to divide the work using binary representation of exponents**
	i.e. is to keep multiplying pow with x, if the bit is odd, and multiplying x with itself until we get 0
	We will use very **1st example of 1st Approach** i.e.
	`x = 7, n = 11 and pow = 1`
	Here, we have to calculate 7<sup>11</sup>
	**Binary of n i.e. (11)<sub>10</sub> is (1011)<sub>2</sub>**
	**1 &nbsp; 0 &nbsp; 1 &nbsp; 1**
	2<sup>3 &nbsp;</sup>2<sup>2</sup>&nbsp; 2<sup>1</sup> &nbsp;2<sup>0</sup>&nbsp;&nbsp;  <-- Corresponding **place values** of each bit

	OR we can also write this as
	**1  0  1  1**
	8 4 2 1  <-- Corresponding **place values** of each bit

	Now, **7<sup>8</sup> &#215; 7<sup>2</sup> &#215; 7<sup>1</sup>** == **7<sup>11</sup>** as **7<sup>(8 + 2 + 1)</sup>** == **7<sup>11</sup>**
**NOTE:**  We have not considered **7<sup>4</sup>** in this case as the **4th place bit is OFF**

	So, **7<sup>8</sup> &#215; 7<sup>2</sup> &#215; 7<sup>1</sup>** == **5764801 &#215; 49 &#215; 7** == **1977326743** **<-- Desired Output**
	Now, applying logic keeping this concept in mind

	```
	double pow = 1;
	while(n != 0){
		if((n & 1) != 0) // equivalent to if((n % 2) != 0) i.e. multiply only when the number is odd  
		pow *= x;

		x *= x;
		n >>>= 1; // equivalent to n = n / 2; i.e. keep dividing the number by 2

	}
	```
*   <u>**PROCESS**</u>
	* 	**Iteration 1**
	pow = <u>1 &#215; 7</u> = 7
	x = 7 \xD7 7 = 49
	n = 11 >>> 1 = 5

	* 	**Iteration 2**
	pow = <u>7 \xD7 49</u> = 343
	x = 49 \xD7 49 = 2401
	n = 5 >>> 1 = 2

	* 	**Iteration 3**
	x = 2401 \xD7 2401 = 5764801
	n = 2 >>> 1 = 1

	* 	**Iteration 4**
	pow = <u>343 \xD7 5764801</u> = 1977326743
	x = 5764801 \xD7 5764801 = 3.323293057 \xD7 10\xB9\xB3
	n = 1 >>> 1 = 0

We exit the loop as the number has become 0 and we got pow as **1977326743 which is the desired output**
In this binary exponentiation approach, the loop iterated for only 4 times which is nothing but (O log<sub>2</sub>(N) + 1) ~ **(O log<sub>2</sub>(N))**

And for **2nd example of 1st Approach** where
`x = 1 and n = 2147483647`
This loop executed for only 31 times **(O log<sub>2</sub>(N))** which is far far less than 2147483647 times(in case of O(N) approach)<br>

* <u>**JAVA / C++ CODE**</u>

	<iframe src="https://leetcode.com/playground/hRAZkbLc/shared" frameBorder="0" width="100%" height="400"></iframe>

* <u>**COMPLEXITY**</u>
	* **Time: O(log<sub>2</sub>(n))**, where `n` is the given power
	* **Space: O(1),** in-place

<img src = "https://assets.leetcode.com/users/images/6f980162-6f32-4bfc-88e2-212a3d2d83cd_1645193689.9401023.jpeg" width = "100%">
<br><br><br>
<img src = "https://assets.leetcode.com/users/images/5e27a0db-88da-4bfa-830b-a9e18b37cc30_1645193695.887591.jpeg" width = "100%">
<br><br>


<u>**Refer to the following github repsitory for more leetcode solutions**</u>
https://github.com/Akshaya-Amar/LeetCodeSolutions

# **Please UPVOTE if you find this post helpful :)**
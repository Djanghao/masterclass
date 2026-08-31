# ✅ [JAVA / C++] : 2 Approaches | Pictorial Explanation | Faster than 100%

**Author:** akshayaamar05
**Votes:** 57
**Link:** [https://leetcode.com/problems/capitalize-the-title/solutions/1675922/](https://leetcode.com/problems/capitalize-the-title/solutions/1675922/)

---

# **Please Upvote if you find this post helpful :)**

<u><strong>BASIC IDEA:</strong></u>
Suppose, `title = "FiRSt leTTeR of EACH Word"`
* Convert the **whole word** to lowercase (i.e. **"FiRSt" is converted into "first"**)
* Convert the **first letter of the word to upper case** if the length of the word is **greater than 2** (i.e. **"first" is converted to "First"**)

<u><strong>ALGORITHM:</strong></u>
1. **Start traversing the given string**
1. **Store the first index of the word**
1. Continue until the **index is less than length** of the string and **character** at particular index **is not a space character**
	* Meanwhile, **if the character is not a space character, convert that character into lower case**(whether it's upper or lower case character)
1. Come out of the loop **if space character is found** or **index >= length of the string**
1. When we come out of the loop we have got the **index of the space character**
1. Now, if we **subtract first index of the word(which we found in the 2nd step) from the index of space character**, we will **get the length of the word** and 
	* **if the length of the word is greater than 2**, then 
		* **convert the first character of that word to upper case**
1. **Repeat the process from step 2** until index is less than length of the whole string
1. Once the iteration of the whole string is finished, **return the char array in string form**

* **1<sup>st</sup> approach using in-built methods**

	<u>**JAVA CODE:**</u>
	```
	class Solution {
		public String capitalizeTitle(String title) {

			char[] ch = title.toCharArray();
			int len = ch.length;

			for(int i = 0; i < len; ++i) {

				int firstIndex = i; // store the first index of the word

				while(i < len && ch[i] != ' ') {
					ch[i] = Character.toLowerCase(ch[i]); // converting the character at ith index to lower case ony by one
					++i;
				}
				
				// if word is of length greater than 2, then turn the first character of the word to upper case
				if(i - firstIndex > 2) {
					ch[firstIndex] =  Character.toUpperCase(ch[firstIndex]); // converting the first character of the word to upper case
				}
			}

			return String.valueOf(ch); // return the final result by converting the char array into string
		}
	}
	```

	<u>**C++ CODE:**</u>
	```
	class Solution {
	public:
		string capitalizeTitle(string title) {

			int len = title.length();

			for(int i = 0; i < len; ++i) {

				int firstIndex = i; // store the first index of the word

				while(i < len && title[i]  != ' ') {
					title[i] = tolower(title[i]); // converting the character at ith index to lower case ony by one
					++i;
				}
				
				// if word is of length greater than 2, then turn the first character of the word to upper case
				if(i - firstIndex > 2) {
					title[firstIndex] = toupper(title[firstIndex]); // converting the first character of the word to upper case
				}
			}

			return title; // return the final result
		}
	};
	```

* **2<sup>nd</sup> approach(<u>Much more optimised</u>) using Bitwise Operators (i.e. OR Bitwise operator(|) and AND Bitwise operator(&))**
	
	<u>**JAVA CODE:**</u>
	```
	class Solution {
		public String capitalizeTitle(String title) {

			char[] ch = title.toCharArray();
			int len = ch.length;

			for(int i = 0; i < len; ++i) {

				int firstIndex = i; // store the first index of the word

				while(i < len && ch[i] != ' ') {
					ch[i] |= 32; // converting the character at ith index to lower case ony by one
					++i;
				}

				// if word is of length greater than 2, then turn the first character of the word to upper case
				if(i - firstIndex > 2) { 
					ch[firstIndex] &= ~32; // converting the first character of the word to upper case
				}
			}

			return String.valueOf(ch); // return the final result by converting the char array into string
		}
	}
	```

	<u>**C++ CODE:**</u>
	```
	class Solution {
	public:
		string capitalizeTitle(string title) {

			int len = title.length();

			for(int i = 0; i < len; ++i) {

				int firstIndex = i; // store the first index of the word

				while(i < len && title[i]  != ' ') {
					title[i] |= 32; // converting the character at ith index to lower case one by one
					++i;
				}

				// if word is of length greater than 2, then turn the first character of the word to upper case
				if(i - firstIndex > 2) {
					title[firstIndex] &= ~32; // converting the first character of the word to upper case
				}
			}

			return title; // return the final result
		}
	};
	```

<u><strong>COMPLEXITY ANALYSIS:</strong></u>

* **Time: O(n)**, where **n** is the length of given **string(title)**
* **Space: O(1)**, i.e. in-place, though we are using extra char array(ch) in **JAVA**, but we will still treat space as O(1) and not O(n) because we usually don't consider the output in the space complexity i.e. only temporary spaces which are used to get the desired output are considered.

<img src = "https://assets.leetcode.com/users/images/f2611eb2-37e8-4b24-b3c8-75ea8da8145f_1641671854.5141106.jpeg" width = "100%">
<br><br>
<img src = "https://assets.leetcode.com/users/images/ec5e4763-ef3f-46f2-95ab-ff977d44570e_1641672738.0686388.jpeg" width = "100%">

After getting the idea of how the **upper case character is converted into lower case**, can you figure it out **how the lower case character is converted into upper case using &= ~32 on your own?** If you want pictorial explanation on that too, then do let me know in the comment section. 

<u><strong>Refer to the following github repsitory for more leetcode solutions<strong></u>
https://github.com/Akshaya-Amar/LeetCodeSolutions

# **Please Upvote if you find this post helpful :)**